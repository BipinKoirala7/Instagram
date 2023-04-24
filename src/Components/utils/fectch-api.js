export default async function fetchAPI(type, param, paramValue) {
    console.log(type, param, paramValue)
    const options = {
      method: "GET",
      headers: {
        "content-type": "application/octet-stream",
        "X-RapidAPI-Key": "1e70e5d09amshdf1eb4eedbc71acp1cebf7jsn509094adad41",
        "X-RapidAPI-Host": "instagram47.p.rapidapi.com",
      },
    };
    try {
        const res = await fetch(
          `https://instagram47.p.rapidapi.com/${type}?${param}=${paramValue}`,
          options
        );
        const result = await res.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        return error
    }
}