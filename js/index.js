import { Router } from "./router.js";

const router = new Router()

router.add('/', '/pages/home.html')
router.add('/theUniverse', '/pages/theUniverse.html')
router.add('/exploration', '/pages/exploration.html')
router.add(404, '/pages/error404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()

const btnHome = document.querySelector('.btnHome')
const btnUniverse = document.querySelector('.btnUniverse')
const btnExploration = document.querySelector('.btnExploration')

btnHome.addEventListener('click', function(){
    btnHome.classList.add('active')
    btnUniverse.classList.remove('active')
    btnExploration.classList.remove('active')
})

btnUniverse.addEventListener('click', function(){
    btnUniverse.classList.add('active')
    btnHome.classList.remove('active')
    btnExploration.classList.remove('active')
})

btnExploration.addEventListener('click', function(){
    btnExploration.classList.add('active')
    btnUniverse.classList.remove('active')
    btnHome.classList.remove('active')
})
