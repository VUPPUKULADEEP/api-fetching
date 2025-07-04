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
        address.textContent = 'address:' +'\n' +'city'+ d[i]['address']['city'] + '\n' + 'street' + d[i]['address']['street']
        id.textContent = 'id : ' + d[i]['id']
        name.textContent = `name : ` + d[i]['name']
        email.textContent = 'email: ' + d[i]['email']
        phone.textContent = 'phone: '+ d[i]['phone']
        website.textContent = 'website: ' + d[i]['website']
        data.append(id,name,email,phone,website,address)
        cont.appendChild(data)
    }


}



window.onload = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const d =  await response.json()
    console.log(d)
    load(d)
}