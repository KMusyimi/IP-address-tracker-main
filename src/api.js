import {domainRgx, ipv4Rgx} from "./utils.js";

export default async function getIPGeolocationData(apiKey, param) {
    let paramKey = '';
    if (param) {
        if (ipv4Rgx.test(param)) {
            paramKey = 'ipAddress';
        } else if (domainRgx.test(param)) {
            paramKey = 'domain';
            const match = param.match(domainRgx);
            param = match[0];
        }
    }
    const baseUrl = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`
    const url = param ? baseUrl.concat(`&${paramKey}=`, param) : baseUrl;
    const response = await fetch(url);
    if (!response.ok) {
        throw {
            status: response.status,
            statusText: response.statusText,
            message: `Could not fetch ${param} geolocation data`
        };
    }
    return await response.json();
}