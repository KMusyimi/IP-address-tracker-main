import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import {memo} from "react";
import markerIcon from '../../public/images/icon-location.svg';
import L from 'leaflet';

function Map({position}) {

    function MarkerLocation() {
        const map = useMap();
        const MarkerIcon = L.icon({
            iconUrl: markerIcon,
            iconSize: [36, 46],
            iconAnchor: [12, 36],
            popupAnchor: [0, 0]
        })
        map.panTo(position, map.getZoom(), {
            animate: true
        });

        return (
            <Marker icon={MarkerIcon} position={position}>
                <Popup>
                    Current Location
                </Popup>
            </Marker>)
    }

    return (
        <MapContainer id={'map'} zoomControl={false} center={position} zoom={16} zoomSnap={.5} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                subdomains='abcd'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                minZoom={5}
                maxZoom={20}
            />
            <MarkerLocation/>
        </MapContainer>)
}

export default memo(Map)