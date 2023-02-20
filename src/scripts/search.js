import { profileSearch } from "../scripts/profile.js"

export function search() {
    const btnSearch = document.querySelector('.search--button')
    const input = document.querySelector('.search--input')

    btnSearch.addEventListener('click', async () => {
        const value = input.value.replaceAll(" ","").toLowerCase()
        const data = await profileSearch(value)
    })
}