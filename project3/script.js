const getData = async () => {
let response;
response = await axios.get("https://swapi.dev/api/people/1")
.then(response=>{
       for(let i = 0; i< Object.values(response.data).length; i++){
        var inPut = document.createElement("h2")
        document.body.appendChild(inPut).style.color = "blue"
        inPut.textContent = Object.values(response.data)[i]
        if(typeof Object.values(response.data)[i] =="object" ){
            inPut.textContent = Object.values(response.data)[i].name
        }
    }

    console.log(Object.values(response.data))
})
response = await axios.get("https://swapi.dev/api/planets/1")     
.then(response=>{
    for(let i = 0; i< Object.values(response.data).length; i++){
        var inPut = document.createElement("h2")
        document.body.appendChild(inPut).style.color = "green"
        inPut.textContent = Object.values(response.data)[i]
        if(typeof Object.values(response.data)[i] =="object" ){
            inPut.textContent = Object.values(response.data)[i].name
        }
    }
        
    console.log(response.data)
})
response = await axios.get("https://rickandmortyapi.com/api/character/1")
.then(response=>{
    for(let i = 0; i< Object.values(response.data).length; i++){
        var inPut = document.createElement("h2")
        document.body.appendChild(inPut).style.color = "purple"
        inPut.textContent = Object.values(response.data)[i]
        if(typeof Object.values(response.data)[i] =="object" ){
            inPut.textContent = Object.values(response.data)[i].name
        }
    }
        
    console.log(response.data)
})
}
getData()