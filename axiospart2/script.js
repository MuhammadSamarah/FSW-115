const getItems = ()=> {
    axios.get('http://api.bryanuniversity.edu/muhammad1/list/')
    .then(res=>{
        displayItems(res.data)
    })
    .catch(err=> console.error(err))
};
getItems()
const displayItems = (itemData)=> {
    const container = document.getElementById("Container");
    itemData.forEach(item => {
        console.log(item);
        const card = document.createElement("div");
        card.classList.add("todoDisplay");
        const name = document.createElement("h1");
        name.textContent = item.name;
        card.appendChild(name);
        const completeBtn = document.createElement("button");
        item.isComplete === true ? btnText = "mark Incomplete" : btnText = "mark Complete";
        completeBtn.textContent = btnText;
        completeBtn.id = item._id;
        completeBtn.value = item.isComplete;
        completeBtn.addEventListener("click", updateItem);
        card.appendChild(completeBtn);

        const delButton = document.createElement("button");
        delButton .textContent = "X";
        delButton .id = item._id;
        delButton .addEventListener("click", deleteItem);
        card.appendChild(delButton);
        container.appendChild(card);
    });
}

const postItem = (y)=> {
    y.preventDefault()
    let name = document.getElementById("titleInput").value
    let description = document.getElementById("descriptionInput").value
    let price = document.getElementById("priceInput").value
    let complete = document.getElementById("completedInput").checked
    let data = {
        name: name,
        description: description,
        price: price,
        isComplete: complete
    };
    axios.post('http://api.bryanuniversity.edu/muhammad1/list/', data)
    .then(() => {
        location.reload()
    })
    .catch(err => console.error(err))
};

const form = document.getElementById("todoForm")
form.addEventListener("submit",postItem)
const deleteItem = (z)=> {
    const id = z.target.id
    axios.delete(`http://api.bryanuniversity.edu/muhammad1/list/${id}`)
    .then(()=> {
        location.reload()
    })
    .catch(err=> console.error(err))
};

const updateItem = (x)=> {
    const id = x.target.id;
    let completed = x.target.value;
    let completeData = null;

    if( completed === "false"){
        completeData = true
    } else {
        completeData = false
    };

    let updateData = {
        isComplete : completeData
    };
    axios.put(`http://api.bryanuniversity.edu/muhammad1/list/${id}`,updateData)
    .then(()=> {
        location.reload()
    })
    .catch(err=> console.error(err))
};