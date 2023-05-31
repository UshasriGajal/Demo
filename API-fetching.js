function run(){
    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '754ee67f44msh73315c567c13cc6p163e85jsn2f883ac74a0c',
    //         'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
    //     }
    // };
    
    // fetch("https://deezerdevs-deezer.p.rapidapi.com/infos",options)
    //     .then(response => response.json())
    //     // .then(data => console.log(data))
    //     .then(data => console.log(data.ads.audio))
    //     .catch(error => console.error(error));
const encodedParams = new URLSearchParams();
encodedParams.append("country", "<REQUIRED>");
encodedParams.append("term", "<REQUIRED>");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'X-RapidAPI-Key': '754ee67f44msh73315c567c13cc6p163e85jsn2f883ac74a0c',
		'X-RapidAPI-Host': 'iTunesvolodimir-kudriachenkoV1.p.rapidapi.com'
	},
	body: encodedParams
};

fetch('https://itunesvolodimir-kudriachenkov1.p.rapidapi.com/searchMovies', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}