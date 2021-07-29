const Button1 = document.getElementById("button");
Button1.addEventListener("click", function(){
axios.get('https://www.breakingbadapi.com/api/quotes')
.then(response => { 
    for(let i = 0; i < response.data.length; i++){
        const li1 = document.createElement("li");
        li1.textContent = response.data[i].quotes
        document.body.appendChild(li1);
    }
    })
.catch(error => console.log(error))
});

