const load = (d) =>{
    const cont = document.querySelector('.container')
    for (i = 0; i<= d.length-1;i++){
        const data = document.createElement('section')
        const name = document.createElement('p')
        const company = document.createElement('section')
        const address = document.createElement('div')
        const website = document.createElement('p')
        const id = document.createElement('p')
        const email = document.createElement('p')
        const phone = document.createElement('p')
        address.innerHTML = `<p class='swe'>address: </p><br> <p class='swe'>city:</p> ${d[i]['address']['city']}   <br> <p class='swe'>street: </p>${d[i]['address']['street']}`
        id.innerHTML = `<p class='s'>id : </p>  ${d[i]['id']}`
        name.innerHTML = `<p class='s'>name : </p> ${d[i]['name']}`
        email.innerHTML = `<p class='s'>email:  </p> ${d[i]['email']}`
        phone.innerHTML = `<p class='s'> phone:</p>  ${d[i]['phone']}`
        website.innerHTML = `<p class='s'> website: </p> <a href=${d[i]['website']}>${ d[i]['website']}</a>`
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