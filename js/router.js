export class Router {
    routes = {}

    add(routeName, page) {
        this.routes[routeName] = page
    }

    route(event) {
        event = event || window.event
        event.preventDefault()

        let href = event.target.href
        window.history.pushState({}, "", href)

        this.handle()
    }

    handle() {
        const { pathname } = window.location
        const route = this.routes[pathname] || this.routes[404]

        if(pathname === '/theUniverse') {
            document.querySelector('.btnUniverse').classList.add('active')
        }
        
        fetch(route)
        .then((data) => {
            return data.text()
        }).then(html => document.querySelector('#app').innerHTML = html)
    }
}
