

// XHR

function getRandom(){
    var xhr = new XMLHttpRequest()

    xhr.open('GET', 'https://ciprand.p3p.repl.co/api?len=40&count=20', true)
    xhr.send()

    xhr.onreadystatechange = function(){
        if(this.readyState === 4 && this.status == 200 ){
            var data = JSON.parse(xhr.response)
            renderRandom(data)
        }
    }
}
getRandom()

function renderRandom(data){
    var container = document.getElementById('container')
    for(let i = 0; i <= data.Strings.length; i++){
        var newIdElement = document.createElement('li')
        newIdElement.textContent = data.Strings[i]
        container.appendChild(newIdElement)
    }
}



// AXIOS

// Run request to get data
const getBreweries = () => {
    axios.get('https://api.openbrewerydb.org/breweries')
    .then(res => {
        renderBreweries(res.data)
        //do more things here if you want
    })
    .catch(err => console.error(err) )
}

// Use this to run automatically on page mount:
// getBreweries() 

// Or use this to run on button click:
const brewButton = document.getElementById('getBrew')
brewButton.addEventListener('click', getBreweries)

// Display data on the DOM
function renderBreweries(breweries){
    console.log(breweries)
    // run for loop here to display brewery data

}

