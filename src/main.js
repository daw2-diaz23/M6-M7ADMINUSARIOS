import './style.css'
import {router} from './componentes/router.js'
import { header} from './componentes/header.js'
import { Registre } from './componentes/Registre'




document.querySelector('header').innerHTML = header.template
header.script()
Registre.script()





