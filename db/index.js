import { getTask } from "./firebase.js";

window.addEventListener('DOMContentLoaded', async() =>{
    console.log("estoy aqui")
    const querySnapshot = await getTask()
    querySnapshot.forEach(doc =>{
        console.log(doc)
    })
})