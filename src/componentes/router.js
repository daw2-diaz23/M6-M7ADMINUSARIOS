import { About } from "../vistas/About";
import { Admin } from "../vistas/Admin";
import { Home } from "../vistas/Home";
import { login } from "../vistas/Login";

export const router = {
    Home:()=>{
        document.querySelector('main').innerHTML = Home.template;
        Home.script()
    },
    About:()=>{
       
        document.querySelector('main').innerHTML = About.template;
        About.script()
    },
    Admin:()=>{
        document.querySelector('main').innerHTML = Admin.template;
        Admin.script()
    },
    login: ()=>{
        document.querySelector('main').innerHTML = login.template;
        login.script();
    }
}


