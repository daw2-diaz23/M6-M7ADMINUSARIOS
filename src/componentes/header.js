import { router } from "./router";

export const header = {
    template: `
       <nav>
            <ul>
                <li id="Home" >Home</li>
                <li id="Admin">Admin</li>
                <li id="About">About</li>
            </ul>
       </nav> 
    `,
    script: ()=>{
        console.log('Hola soy el header')
        document.querySelector('#Home').addEventListener('click', ()=>{
            console.log('click en home')
            router.Home()
        });
        document.querySelector('#Admin').addEventListener('click', ()=>{
            console.log('click en admin')
            router.Admin()
        });
        document.querySelector('#About').addEventListener('click', ()=>{
            console.log('click en about')
            router.About()
        });
    }
}