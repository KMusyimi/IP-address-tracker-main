import {domainRgx, ipv4Rgx} from "./utils.js";

export default async function getIPGeolocationData(apiKey, param) {
    let baseUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;
    if (param) {
        if (param.match(ipv4Rgx)) {
            baseUrl = baseUrl.concat(`&&ipAddress=`, param);
        } else if (param.match(domainRgx)) {
            const match = param.match(domainRgx);
            baseUrl = baseUrl.concat('&&domain=', match[0])
            param = match[0];
        }
    }

    const response = await fetch(baseUrl);
    if (!response.ok) {
        throw {
            status: response.status,
            statusText: response.statusText,
            message: `Could not fetch ${param} geolocation data`
        };
    }
    return await response.json();
}