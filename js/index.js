import {datos} from './firebase.js'

window.addEventListener("DOMContentLoaded", () =>{

})

const taksform = document.getElementById("task-form")

taksform.addEventListener("submit" , (e) =>{
    e.preventDefault()

    const cod = taksform['cod'].value
    const empresa = taksform['empresa'].value

    console.log(cod , empresa)

    datos(cod , empresa)
})