const load = (d) =>{
    const cont = document.querySelector('.container')
    for (i = 0; i<= d.length-1;i++){
        const data = document.createElement('section')
        const name = document.createElement('p')
        const company = document.createElement('section')
        const address = document.createElement('section')
        const website = document.createElement('p')
        const id = document.createElement('p')
        const email = document.createElement('p')
        const phone = document.createElement('p')
        name.textContent = d[i]['name']
        email.textContent = d[i]['email']
        phone.textContent = d[i]['phone']
        website.textContent = d[i]['website']
        data.append(name,email,phone,website)
        cont.appendChild(data)
    }


}



const get = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const d =  await response.json()
    console.log(d)
    load(d)
}