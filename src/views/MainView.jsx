import getIPGeolocationData from "../api.js";
import {Await, Link, useLoaderData, useSearchParams} from "react-router-dom";
import Map from '../components/Map.jsx'
import {Suspense, useMemo} from "react";
import SkeletonLoading from "../components/LoadingSkeleton.jsx";
import currentLocationIcon from '../../public/images/icon-current-location.svg'

export async function HomeLoader({request}) {
    try {
        const param = new URL(request.url).searchParams.get("search_query");
        const ipifyKey = import.meta.env.VITE_IPIFY_KEY;
        return {geoData: getIPGeolocationData(ipifyKey, param)};

    }catch (error) {
        console.log(error);
    }
}


export default function MainView() {
    const geoLoader = useLoaderData();
    const [ipParams, setIpParams] = useSearchParams();
    const ipParam = ipParams.get('search_query');

    function RenderMain(loadedData) {
        const loadedDataMemo = useMemo(() => loadedData, [loadedData]);
        const {location, as, ip: ipAddress} = loadedDataMemo;
        const {city, country, geonameId, lat, lng, timezone} = location;

        return (
            <>
                <div className={'geo-info'}>
                    <div className={'info-wrapper'}>
                        <h1 className={'title fw-500 txt-upper'}>ip address</h1>
                        <h2 className={'fw-700'}>{ipAddress}</h2>
                    </div>
                    <div className={'info-wrapper'}>
                        <h1 className={'title fw-500 txt-upper'}>location</h1>
                        <h2 className={'fw-700'}>{`${city}, ${country} ${geonameId}`}</h2>
                    </div>
                    <div className={'info-wrapper'}>
                        <h1 className={'title fw-500 txt-upper'}>timezone</h1>
                        <h2 className={'fw-700'}><span className={'txt-upper'}>utc</span> {timezone || 'no available timezone'}</h2>
                    </div>
                    <div className={'info-wrapper'}>
                        <h1 className={'title fw-500 txt-upper'}>isp</h1>
                        <h2 className={'fw-700'}>{as?.name || 'no available isp'}</h2>
                    </div>
                </div>
                {ipParam && <Link className={'current-link'} to={'/'}><img src={`${currentLocationIcon}`} alt={'current location icon'}
                                                aria-label={'clickable image link for current location'}
                                                style={{width: '2.25em', height: '2.25em'}}/></Link>}
                <Map position={{lat: lat, lng: lng}}/>
            </>)

    }

    return (
        <Suspense fallback={<SkeletonLoading/>}>
            <Await resolve={geoLoader?.geoData}>{RenderMain}</Await>
        </Suspense>)
}