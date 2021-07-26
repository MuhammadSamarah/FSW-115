const xhr = new XMLHttpRequest()
xhr.open("GET", "https://api.vschool.io/pokemon", true)
    xhr.send();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        const textData = xhr.responseText
        let data = JSON.parse(textData)
        showData(data)
    }
};

function showData(data){
    for( i=0; i <= 10; i++){
        const pokeName = document.createElement("h1")
        pokeName.textContent = data.objects[0].pokemon[i].name
        document.body.appendChild(pokeName)
    }
}; 