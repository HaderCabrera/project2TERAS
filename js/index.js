import {guardar, obtenerDatos , actualizar} from './firebase.js' 

window.addEventListener("DOMContentLoaded",  async () => {
})

const taksform = document.getElementById("task-form")

taksform.addEventListener("submit", async (e) => {
    e.preventDefault()
    let existe = false
    const codigoFactura = taksform['codigo-factura'].value
    const proveedor = taksform['proveedor'].value
    const servicio = taksform['servicio'].value

    //datos(codigoFactura , proveedor , servicio) 

    if (codigoFactura == "" || proveedor == "" || servicio == ""){
        alert("Datos invalidos")
        return
    }

    const datosObtenidos = await obtenerDatos(servicio);

    datosObtenidos.forEach(async doc => {
        const datosFac = doc.data();

        if (doc.id == codigoFactura && datosFac["Empresa"] == proveedor) {
            console.log("ID:", doc.id);
            console.log(datosFac);
            console.log("Factura encontrada");
            taksform.reset()
            existe = true

            if (!datosFac.Pagada) {
                try {
                    await actualizar(doc.id, {
                        Empresa: proveedor,
                        Pagada: true,
                    } , servicio );

                    console.log("Factura pagada");
                    
                } catch (error) {
                    console.error("Error al actualizar la factura:", error);
                    
                }
            } else {
                console.log("La factura ya está pagada");
                
            }
        }
    })

    if (!existe) 
        alert("La factura no existe")

    

}) 