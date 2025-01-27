// TODO:: add jsx elements
import {Link} from "react-router-dom";
import {BiConfused} from "react-icons/bi";
import Skeleton from "react-loading-skeleton";
import {FaExternalLinkAlt} from "react-icons/fa";

export default function NotFound() {
    return (<div>
        <Skeleton style={{height: '60dvh', width: '100%'}}/>
        <BiConfused/>
        <p>Sorry page Not Found.</p>
        <Link to={'/'}>Go to homepage<FaExternalLinkAlt/></Link>
    </div>)
}