const get = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const d =  await response.json()
    console.log(d)
    const cont = document.querySelector('.container')
    for (i= 0; i <= d.length;i++){
        cont.textContent = cont.textContent + '\n'+ d[i]['name']
    }

}