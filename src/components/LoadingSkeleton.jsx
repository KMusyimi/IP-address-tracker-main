import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
// TODO: styling
export default function SkeletonLoading() {
    return (
        <div style={{height: "100%", width: "100%"}}>
        <div className={'geo-info'}>
            <div className={'info-wrapper info-wrapper--skeleton'}>
                <Skeleton height={8} style={{ marginTop: 4, marginBottom: '.25em' }}/>
                <Skeleton  style={{ marginTop: 4 , height: '1.85em', marginBottom: '.25em'}} />
            </div>
            <div className={'info-wrapper info-wrapper--skeleton'}>
                <Skeleton height={8} style={{ marginTop: 4, marginBottom: '.25em' }}/>
                <Skeleton  style={{ marginTop: 4 , height: '1.85em', marginBottom: '.25em'}} />
            </div>
            <div className={'info-wrapper  info-wrapper--skeleton'}>
                <Skeleton height={8} style={{ marginTop: 4, marginBottom: '.25em' }}/>
                <Skeleton  style={{ marginTop: 4 , height: '1.85em', marginBottom: '.25em'}} />
            </div>
            <div className={'info-wrapper info-wrapper--skeleton'}>
                <Skeleton height={8} style={{ marginTop: 4, marginBottom: '.25em' }}/>
                <Skeleton  style={{height: '1.85em', borderRadius: '.45em', marginBottom: '.25em'}} />
            </div>
        </div>
        <Skeleton  height={485}/>
    </div>)
}