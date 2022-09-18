import { Home } from "../views/Home"
import { Album } from "../views/Album"
import { Products } from "../components/Products/Products"
import { About } from "../views/About"
import { LoginView } from "../views/auth/LoginView";
import { RegisterView } from "../views/auth/RegisterView";


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
        path:'/register',
        component: <RegisterView/>
    },
    {
        path:'/products',
        component: <Products/>
    },
]
export default routes