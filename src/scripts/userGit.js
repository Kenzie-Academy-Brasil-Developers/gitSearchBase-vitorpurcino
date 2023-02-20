
function showUser() {
    const main = document.querySelector('.conteiner__box')
    const user = JSON.parse(localStorage.getItem('user'))
    const array = JSON.parse(localStorage.getItem('repository'))
    main.innerHTML = ''

    main.insertAdjacentHTML('beforeend', `
        <nav class="conteiner__usuario">
            <div class="usuario">
                <img src="${user.avatar_url}" alt="avatar">
                <p>${user.name === null ? user.login : user.name}</p>
            </div>
            <a href="/">Trocar de Usuário</a>
        </nav>
        <section class="conteiner__cards">
            <ul class="cards__conteiner">
            </ul>
        </section>
    `)

    createCard(array)
}

function createCard(array) {
    const ul = document.querySelector('.cards__conteiner')

    if(array.length <= 0){
        const li = document.createElement('li')
        const h1 = document.createElement('h1')
        const img = document.createElement('img')

        li.classList.add('repository__not')

        h1.innerText = 'Usuário sem Repositório'

        img.src = '/src/assets/img/gato.png'
        img.alt = 'gato'

        li.append(h1, img)
        ul.appendChild(li)

        return
    }

    array.forEach(element => {
        let description = 'Repository without project description.'
        
        const li = document.createElement('li')
        const span = document.createElement('span')
        const p = document.createElement('p')
        const a = document.createElement('a')

        li.classList.add('card')

        span.innerText = element.name 
        p.innerText = element.description == null? description : element.description;
        a.innerText = 'Repositório'

        a.href = element.html_url 
        a.target = '_blank'

        li.append(span, p, a)
        ul.appendChild(li)

    });
}

showUser()
