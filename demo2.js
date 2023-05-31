// function run(){
    // x= new XMLHttpRequest()
    // const url = ("GET","https://spotify23.p.rapidapi.com/search/?q=%3CREQUIRED%3E&type=multi&offset=0&limit=10&numberOfTopResults=5	")
    // const options = {
	// 		method: 'GET',
	// 		headers: {
	// 			'X-RapidAPI-Key': '754ee67f44msh73315c567c13cc6p163e85jsn2f883ac74a0c',
	// 			'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	// 		}
	// 	};
	// x.send()
    // x.onload=function(){
    //     console.log(x.status)
    //     var result=JSON.parse(x.response)
    //     console.log(result)
	// }
function playAudio(){
		
	
	const url = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '754ee67f44msh73315c567c13cc6p163e85jsn2f883ac74a0c',
		'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
	}
};

var obj
fetch(url,options)
.then(response=>obj = response.json())

.then(data => {
    obj = data;
   })
.then(() => {
    console.log(obj);
	console.log(obj.data[0].preview)
	// console.log(obj.playlists.items[0].data.images.items[0].sources[0].url);
	// console.log(obj.playlists.items[0].data.uri)
	var x=document.createElement("img")
	var y=document.createElement("audio")
	
	var div=document.createElement("div")
	y.src=obj.data[0].preview
	y.play()
	// x.src=obj.playlists.items[0].data.images.items[0].sources[0].url
	div.append(x,y)
	document.body.append(div)
   });
}
//    document.body.append("hello")
// .then((data)=>console.log(data))
// var x=document.createElement("audio")
// .then((data)=>x.append(data.playlists))

// document.body.append(x)
// var data=JSON.parse(x)
// console.log(data)

// try {
// 	const response = fetch(url, options);
// 	const result = response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error); 
// }