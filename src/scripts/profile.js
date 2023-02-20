export async function profileSearch(name) {

    const repository = await fetch(`https://api.github.com/users/${name}/repos`)
    .then(response => response.json())
    .then(responseJson =>{

        localStorage.setItem('repository', JSON.stringify(responseJson))
    })

    const user = await fetch(`https://api.github.com/users/${name}`)
    .then(response => response.json())
    .then(responseJson =>{

        localStorage.setItem('user', JSON.stringify(responseJson))

        if(responseJson.message === 'Not Found'){
            window.location.replace('/src/pages/error.html')
        }else{
            window.location.replace('/src/pages/profile.html')        
        }
    })

}