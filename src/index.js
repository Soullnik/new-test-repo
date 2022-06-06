import './style.css'

import footer from "./layout/footer"
import header from "./layout/header"
import main from "./layout/main"


const app = () => {
    const body = document.querySelector('body')
    body.insertAdjacentHTML('afterbegin', header)
    body.insertAdjacentHTML('afterbegin', main)
    body.insertAdjacentHTML('afterbegin', footer)
}

app()