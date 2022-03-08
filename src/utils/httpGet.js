const URL = 'https://api.themoviedb.org/3'

export const httpGet = (path) => {
    return (
    fetch(URL + path, {
        headers: {    
            Authorization: process.env.REACT_APP_API_KEY,
            "Content-Type": "application/json;charset=utf-8",
        }})
    .then(response => response.json())
    )
}