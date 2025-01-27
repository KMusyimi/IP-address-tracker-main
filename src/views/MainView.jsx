import getIPGeolocationData from "../api.js";
import {useLoaderData, useSearchParams} from "react-router-dom";
import GeoInfoMap from "../components/GeoInfoMap.jsx";
import {ipifyKey} from "../App.jsx";
import checkValid from "../utils.js";
import {useEffect} from "react";
import SkeletonLoading from "../components/LoadingSkeleton.jsx";

export async function HomeLoader({request}) {
    const params = new URL(request.url).searchParams;
    const searchQuery = params.get("search_query");
    const messageKey = params.get("message");
    let valid = !messageKey;
    if (searchQuery) {
        valid = checkValid(searchQuery);
    }
    return valid ? {data: getIPGeolocationData(ipifyKey, searchQuery)} : null;
}


export default function MainView() {
    const geoLoader = useLoaderData();
    const [, setUrlIpParam] = useSearchParams();
    useEffect(() => {
        if (!geoLoader) {
            setUrlIpParam(prevParam => {
                prevParam.delete('search_query');
                prevParam.set("message", 'Invalid IP address or domain...');
                return prevParam;
            });
        }
    }, [geoLoader]);
    return (<>{geoLoader ? <GeoInfoMap loaderData={geoLoader}/> : <SkeletonLoading/>}</>)
}