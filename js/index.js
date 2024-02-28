import { guardar, obtenerDatos, actualizar } from './firebase.js'

window.addEventListener("DOMContentLoaded", async () => {

    


})


let arregloLuz = ["Codensa", "Enel"]
let arregloAgua = ["Metropolitana", "Codensa"]
let arregloGas = ["Terpel", "Enel"]


let cod = ""
let periodo =  ""
let direccion =  ""
let logo =  ""
let valor =  ""

const campoServicios = document.getElementById("tipoServicio") 
const botonPagar = document.getElementById("botonPagar")
const botonConsultar = document.getElementById("botonConsultar")



campoServicios.addEventListener("click" , async () => {

    let tipoServicio = document.getElementById("tipoServicio").value

    let opciones = ""

    let contenedor = document.getElementById("seccionProveedores")

    if (tipoServicio == "Agua") {

        arregloAgua.forEach(empresa => {

            opciones += ` <option>${empresa}</option> `

        })


    } else if (tipoServicio == "Luz") {

        arregloLuz.forEach(empresa => {

            opciones += ` <option>${empresa}</option> `

        })


    } else {

        arregloGas.forEach(empresa => {

            opciones += ` <option>${empresa}</option> `

        })

    }

    contenedor.innerHTML = opciones
})


botonConsultar.addEventListener("click" , async (e) =>{

    let tipoServicio = document.getElementById("tipoServicio").value
    let proveedor = document.getElementById("seccionProveedores").value
    let codigoFactura = document.getElementById("codigoFactura").value 
    let existe = false

    console.log(tipoServicio , proveedor , codigoFactura)

    const datosObtenidos = await obtenerDatos(tipoServicio);

    datosObtenidos.forEach(async doc => {

        const datosFac = doc.data();

        let contenedorCodigo = document.getElementById("numeroFactura")
        let contenedorPeriodo = document.getElementById("periodoFacturado")
        let contenedorDirrec = document.getElementById("direccionDomicilio")
        //let contenedorLogo = document.getElementById("logoEmpresa")
        let contenedorPagar = document.getElementById("totalPagar")

    if (doc.id == codigoFactura && datosFac["Empresa"] == proveedor) {

        cod = doc.id
        periodo = datosFac["mesFact"]
        direccion = datosFac["direccion"]
        logo = datosFac["mesFact"]
        valor = datosFac["totalPago"]



        console.log("DATOS A FACTURA", cod , periodo , direccion , logo , valor);
        console.log(datosFac);
        console.log("Factura encontrada");

       

        contenedorCodigo.textContent = cod
        contenedorPeriodo.textContent = periodo 
        contenedorDirrec.textContent = direccion 
        //contenedorLogo.innerHTML = logo 
        contenedorPagar.textContent = valor


        
        existe = true

        }

    })

    e.preventDefault()

})

botonPagar.addEventListener("click", async (e) => {

    let existe = false

    
    e.preventDefault()


    if (codigoFactura == "" || proveedor == "" || tipoServicio == "") {
        alert("Datos invalidos")
        return

    }else{

        const datosObtenidos = await obtenerDatos(tipoServicio);

        datosObtenidos.forEach(async doc => {

            const datosFac = doc.data();

            if (doc.id == codigoFactura && datosFac["Empresa"] == proveedor) {
                console.log("ID:", doc.id);
                console.log(datosFac);
                console.log("Factura encontrada");
                existe = true

                if (!datosFac.Pagada) {
                    try {
                        await actualizar(doc.id, {
                            //Aqui solo es necesario colocar lo datos a modificar no todo el objeto de nuevo
                            Pagada: true,
                        }, tipoServicio);

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

    }


    






    /* 

    //datos(codigoFactura , proveedor , servicio) 

    

    

     */



}) 