export class Router {
    routes = {} 
  
    add(routeName, page) {
      this.routes[routeName] = page
    }
    
    route(event) {
      event = event || window.event
      event.preventDefault()
  
      window.history.pushState({}, "", event.target.href)
  
      this.handle()
    }
  
    handle() {
      const { pathname }  = window.location
      const route = this.routes[pathname] || this.routes[404]

      console.log(route)  

      fetch(route)
      .then(data => data.text())
      .then(html => {
        let app = document.querySelector('#app')
        
        if (pathname === "/") {
           app.className = '' 
           app.classList.add('home')
           app.innerHTML = html 
           return
        } if (pathname === "/universe") {
           console.log('entrei')   
           app.className = ''
           app.classList.add('universe')
           app.innerHTML = html
           return 
        } if (pathname === "/exploration") {
           app.className = ''
           app.classList.add('exploration')
           app.innerHTML = html
           return
        } else {
           app.className = ''
           app.classList.add('home')
           app.innerHTML = html 
        }        
      })
    }
  
  }