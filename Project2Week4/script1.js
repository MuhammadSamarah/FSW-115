const Button2 = document.getElementById("button2");
Button2.textContent = "Planet API Click Here";
Button2.addEventListener("click", () => {
axios.get('https://swapi.dev/api/planets')
.then(response => { 
    console.log(response.data)
    for(let i = 0; i < response.data.results.length; i++){
        const li1 = document.createElement("li");
        li1.textContent = response.data.results[i].name
        document.body.appendChild(li1);
    }
    })
.catch(error => console.log(error))
});