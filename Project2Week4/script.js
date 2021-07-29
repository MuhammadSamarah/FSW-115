const Button1 = document.getElementById("button");
Button1.textContent = "API list1";
Button1.addEventListener("click", () => {
axios.get('https://swapi.dev/api/people')
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

