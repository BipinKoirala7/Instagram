export default async function fetchAPI(type, param, paramValue) {
    console.log(type, param, paramValue)
    const res = await fetch(`https://instagram47.p.rapidapi.com/${type}?${param}=${paramValue}`)
    return await res.json()
}