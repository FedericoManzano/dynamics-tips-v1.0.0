
import $ from "jquery";
import  "../../css/estilos-dynamics.css";
import Posicionamiento from "./Posicionamiento"


(function () {
    let  comp  
    let press = false
    let elemento = null


    const posicionar = (origen) => {
        let dropdown = $(origen).data("target")
        $(dropdown).show()
        Posicionamiento.posicionamientoInicial(origen, dropdown)

        let pos = $(origen).data("pos")
        switch(pos) {
            case "abajo":
                if(Posicionamiento.puedeAbajo(origen, dropdown)) 
                    Posicionamiento.posicionarAbajo(origen, dropdown)
                else if(Posicionamiento.puedeArriba(origen, dropdown))
                    Posicionamiento.posicionarArriba(origen, dropdown)
                else if(Posicionamiento.puedeIzquierda(origen, dropdown))
                    Posicionamiento.posicionarIzquierda(origen, dropdown)
                else if(Posicionamiento.puedeDerecha(origen, dropdown))
                    Posicionamiento.posicionarDerecha(origen, dropdown)
            break
            case "bottom":
                if(Posicionamiento.puedeAbajo(origen, dropdown)) 
                    Posicionamiento.posicionarAbajo(origen, dropdown)
                else if(Posicionamiento.puedeArriba(origen, dropdown))
                    Posicionamiento.posicionarArriba(origen, dropdown)
                else if(Posicionamiento.puedeIzquierda(origen, dropdown))
                    Posicionamiento.posicionarIzquierda(origen, dropdown)
                else if(Posicionamiento.puedeDerecha(origen, dropdown))
                    Posicionamiento.posicionarDerecha(origen, dropdown)
            break
            case "derecha": 
                if(Posicionamiento.puedeDerecha(origen, dropdown)) 
                    Posicionamiento.posicionarDerecha(origen, dropdown)
                else if(Posicionamiento.puedeIzquierda(origen, dropdown))
                    Posicionamiento.posicionarIzquierda(origen, dropdown)
                else if(Posicionamiento.puedeAbajo(origen, dropdown))
                    Posicionamiento.posicionarAbajo(origen, dropdown)
                else if(Posicionamiento.puedeArriba(origen, dropdown))
                    Posicionamiento.posicionarArriba(origen, dropdown)
            break
            case "right": 
                if(Posicionamiento.puedeDerecha(origen, dropdown)) 
                    Posicionamiento.posicionarDerecha(origen, dropdown)
                else if(Posicionamiento.puedeIzquierda(origen, dropdown))
                    Posicionamiento.posicionarIzquierda(origen, dropdown)
                else if(Posicionamiento.puedeAbajo(origen, dropdown))
                    Posicionamiento.posicionarAbajo(origen, dropdown)
                else if(Posicionamiento.puedeArriba(origen, dropdown))
                    Posicionamiento.posicionarArriba(origen, dropdown)
            break
            case "izquierda": 
                if(Posicionamiento.puedeIzquierda(origen, dropdown)) 
                    Posicionamiento.posicionarIzquierda(origen, dropdown)
                else if(Posicionamiento.puedeDerecha(origen, dropdown))
                    Posicionamiento.posicionarDerecha(origen, dropdown)
                else if(Posicionamiento.puedeAbajo(origen, dropdown))
                    Posicionamiento.posicionarAbajo(origen, dropdown)
                else if(Posicionamiento.puedeArriba(origen, dropdown))
                    Posicionamiento.posicionarArriba(origen, dropdown)
            break
            case "left": 
                if(Posicionamiento.puedeIzquierda(origen, dropdown)) 
                    Posicionamiento.posicionarIzquierda(origen, dropdown)
                else if(Posicionamiento.puedeDerecha(origen, dropdown))
                    Posicionamiento.posicionarDerecha(origen, dropdown)
                else if(Posicionamiento.puedeAbajo(origen, dropdown))
                    Posicionamiento.posicionarAbajo(origen, dropdown)
                else if(Posicionamiento.puedeArriba(origen, dropdown))
                    Posicionamiento.posicionarArriba(origen, dropdown)
            break
            case "arriba":
                if(Posicionamiento.puedeArriba(origen, dropdown)) 
                    Posicionamiento.posicionarArriba(origen, dropdown)
                else if(Posicionamiento.puedeAbajo(origen, dropdown))
                    Posicionamiento.posicionarAbajo(origen, dropdown)
                else if(Posicionamiento.puedeIzquierda(origen, dropdown))
                    Posicionamiento.posicionarIzquierda(origen, dropdown)
                else if(Posicionamiento.puedeDerecha(origen, dropdown))
                    Posicionamiento.posicionarDerecha(origen, dropdown)
            break
            case "top":
                if(Posicionamiento.puedeArriba(origen, dropdown)) 
                    Posicionamiento.posicionarArriba(origen, dropdown)
                else if(Posicionamiento.puedeAbajo(origen, dropdown))
                    Posicionamiento.posicionarAbajo(origen, dropdown)
                else if(Posicionamiento.puedeIzquierda(origen, dropdown))
                    Posicionamiento.posicionarIzquierda(origen, dropdown)
                else if(Posicionamiento.puedeDerecha(origen, dropdown))
                    Posicionamiento.posicionarDerecha(origen, dropdown)
            break
            default: 
                if(Posicionamiento.puedeAbajo(origen, dropdown)) 
                    Posicionamiento.posicionarAbajo(origen, dropdown)
                else if(Posicionamiento.puedeArriba(origen, dropdown))
                    Posicionamiento.posicionarArriba(origen, dropdown)
                else if(Posicionamiento.puedeIzquierda(origen, dropdown))
                    Posicionamiento.posicionarIzquierda(origen, dropdown)
                else if(Posicionamiento.puedeDerecha(origen, dropdown))
                    Posicionamiento.posicionarDerecha(origen, dropdown)
            break
        }
        press = true
    }

    const activar = (e) => {
        if(press) {
            $(".dropdown").hide() 
            press = false
        }
        $(".drop-complemento").show()
        let origen = e.target
        posicionar(origen)
    }

    const eventoClick = (e) => {
        $(e).click((e) =>{
            activar(e)
        })

        $(comp).click((e) => {
            $(".dropdown").hide()
            $(".drop-complemento").hide()
            press = false
        })
    }

    const eventoHover = (e) => {
        $(e).hover((e) =>{
            activar(e)
        })

        $(comp).click((e) => {
            $(".dropdown").hide()
            $(".drop-complemento").hide()
            press = false
        })
    }


    const inicializar = () => {
        comp = $("<div class='drop-complemento'>")
        $("body").append(comp)
        $(".dropdown-toggle").each((index, e) => {
            elemento = e
            let evt = $(e).data("evt")
            let flecha = $("<span class='f-abajo'></span>")
            $(e).append(flecha)

            let color = $(e).data("color")

            if(color !== undefined)
                $(flecha).css("border-top", "5px solid " + color)
            else 
                $(flecha).css("border-top", "5px solid white")
            $(flecha).css("border-left", "5px solid transparent")
            $(flecha).css("border-right", "5px solid transparent")
            $(flecha).css("left", "80%")
            $(flecha).css("top", "calc(50% - 2.5px)")
            if(evt === "hover")
                eventoHover(e)
            else
                eventoClick(e) 
        })

        $(".dropdown").click((e)=> {
            $(comp).hide()
            $(".dropdown").hide()
            press = false
        })

        $(window).resize(() => {
            if(press) {
                posicionar(elemento)
            }
        })
    }

    const DropDown = {
        iniciar: () => inicializar()
    }

    window.DropDown = DropDown
}) ()

export default DropDown
