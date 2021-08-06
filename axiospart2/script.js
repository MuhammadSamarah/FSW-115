// http://api.bryanuniversity.edu/ericl/list/

const getItems = () => {
    axios.get('http://api.bryanuniversity.edu/muhammad1/list/')
    .then(res => {
        displayItems(res.data)
    })
    .catch(err => console.error(err))
}
getItems()


const displayItems = (items) => {
    const container = document.getElementById('todoContainer')

    items.forEach(item => {
        console.log(item)
        const card = document.createElement('div')
        card.classList.add('todo-card')

        const name = document.createElement('h2')
        name.textContent = item.name
        card.appendChild(name)

        const delBtn = document.createElement('button')
        delBtn.textContent = 'Delete Me'
        delBtn.id = item._id
        delBtn.addEventListener('click', deleteItem)
        card.appendChild(delBtn)

        const completeBtn = document.createElement('button')
        let btnText = ''
        item.isComplete === true ? btnText = 'Mark Incomplete' : btnText = 'Mark Complete'
        completeBtn.textContent = btnText
        completeBtn.id = item._id
        completeBtn.value = item.isComplete
        completeBtn.addEventListener('click', updateItem)
        card.appendChild(completeBtn)

        container.appendChild(card)
    })
}


const postItem = (e) => {
    e.preventDefault()

    let name = document.getElementById('todoTitleInput').value
    let description = document.getElementById('todoDescriptionInput').value
    let price = document.getElementById('todoPriceInput').value
    let complete = document.getElementById('todoCompletedInput').checked

    let data = {
        name: name,
        description: description,
        price: price,
        isComplete: complete
    }

    axios.post('http://api.bryanuniversity.edu/muhammad1/list/', data)
    .then( () => {
        location.reload()
    })
    .catch(err => console.error(err))
}

const form = document.getElementById('todoForm')
form.addEventListener('submit', postItem)



const deleteItem = (e) => {
    const id = e.target.id
    axios.delete(`http://api.bryanuniversity.edu/muhammad1/list/${id}`)
    .then( () => {
        location.reload()
    })
    .catch(err => console.error(err))
}


const updateItem = (e) => {

    const id = e.target.id
    let completed = e.target.value

    let completeData = null


    if( completed === 'false'){
        completeData = true
    } else {
        completeData = false
    }

    let updateData = {
        isComplete : completeData
    }

    axios.put(`http://api.bryanuniversity.edu/muhammad1/list/${id}`, updateData)
    .then( () => {
        location.reload()
    })
    .catch(err => console.error(err))

}