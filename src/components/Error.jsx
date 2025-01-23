import { BiConfused } from "react-icons/bi";
import SkeletonLoading from "./LoadingSkeleton.jsx";
import {Link, useRouteError} from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function ErrorElement() {
    const err = useRouteError();
    return (
        <div>
            <div className={'err-info'}>
                <BiConfused/>
                <p>{err.message}</p>
                <Link to={'/'}>Go to homepage <FaExternalLinkAlt/> </Link>
                {err.statusText? <pre>{err.status} - {err.statusText}</pre> :  <pre>STATUS: {err.status}</pre>}
            </div>
           <SkeletonLoading/>
        </div>)
}