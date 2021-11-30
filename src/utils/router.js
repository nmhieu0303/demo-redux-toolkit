import About from "../pages/About"
import Contacts from "../pages/Contacts"
import Home from "../pages/Home"

export const routerList=[
    {
        name: 'home',
        displayName: 'Home',
        path: '/home',
        coponent: <Home/>
    },
    {
        name: 'about',
        displayName:'About',
        path: '/about',
        coponent: <About/>
    },
    {
        name: 'contacts',
        displayName:'Contacts',
        path: '/contacts',
        coponent:<Contacts/> 

    },
]


export const routerPaths = {
    home:'/home',
    about:'/about',
    contacts:'/contacts'
}
