import { Home } from "../views/Home"
import { Album } from "../views/Album"
import { Football } from "../components/Products/Fotball"
import { About } from "../views/About"
import { LoginView } from "../views/auth/LoginView";


const routes = [
    {
        path:'/',
        component: <Home/>
    },
    {
        path:'/album',
        component: <Album/>
    },
    {
        path:'/about',
        component: <About/>
    },
    {
        path:'/login',
        component: <LoginView/>
    },
    {
        path:'/football',
        component: <Football/>
    },
]
export default routes