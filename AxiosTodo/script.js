
axios.get('https://cors-anywhere.herokuapp.com/http://api.vschool.io/moe/todo')
    .then(response => { 
    for(let i = 0; i < response.data.length; i++){
        const h1 = document.createElement("h1")
        h1.textContent = response.data[i].title

    if (response.data[i].completed === true){
        h1.style.textDecorationLine = "line-through"
    }
    document.body.appendChild(h1)
    }
})
.catch(error => console.log(error));