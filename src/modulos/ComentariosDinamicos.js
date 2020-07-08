import $ from "jquery" 
import  "../../css/estilos-dynamics.css";
import Posicionamiento from "./Posicionamiento"

(function(){

    let comentario = null, 
        origen = null,
        comp = null

    const arrancar = (origen, comentario) => {
        Posicionamiento.posicionamientoInicial(origen, comentario)
        let pos = $(origen).data("pos")

        switch( pos ) {
            case "izquierda": 
                if(Posicionamiento.puedeIzquierda(origen, comentario))
                    Posicionamiento.posicionarIzquierda(origen, comentario)
                else if(Posicionamiento.puedeDerecha(origen, comentario))
                    Posicionamiento.posicionarDerecha(origen, comentario)
                else if(Posicionamiento.puedeArriba(origen, comentario))
                    Posicionamiento.posicionarArriba(origen, comentario)
                else if(Posicionamiento.puedeAbajo(origen, comentario))
                    Posicionamiento.posicionarAbajo(origen, comentario)
            break;
            case "left": 
                if(Posicionamiento.puedeIzquierda(origen, comentario))
                    Posicionamiento.posicionarIzquierda(origen, comentario)
                else if(Posicionamiento.puedeDerecha(origen, comentario))
                    Posicionamiento.posicionarDerecha(origen, comentario)
                else if(Posicionamiento.puedeArriba(origen, comentario))
                    Posicionamiento.posicionarArriba(origen, comentario)
                else if(Posicionamiento.puedeAbajo(origen, comentario))
                    Posicionamiento.posicionarAbajo(origen, comentario)
            break;
            case "derecha": 
                if(Posicionamiento.puedeDerecha(origen, comentario))
                    Posicionamiento.posicionarDerecha(origen, comentario)
                else if(Posicionamiento.puedeIzquierda(origen, comentario))
                    Posicionamiento.posicionarIzquierda(origen, comentario)
                else if(Posicionamiento.puedeArriba(origen, comentario))
                    Posicionamiento.posicionarArriba(origen, comentario)
                else if(Posicionamiento.puedeAbajo(origen, comentario))
                    Posicionamiento.posicionarAbajo(origen, comentario)
            break
            case "right": 
                if(Posicionamiento.puedeDerecha(origen, comentario))
                    Posicionamiento.posicionarDerecha(origen, comentario)
                else if(Posicionamiento.puedeIzquierda(origen, comentario))
                    Posicionamiento.posicionarIzquierda(origen, comentario)
                else if(Posicionamiento.puedeArriba(origen, comentario))
                    Posicionamiento.posicionarArriba(origen, comentario)
                else if(Posicionamiento.puedeAbajo(origen, comentario))
                    Posicionamiento.posicionarAbajo(origen, comentario)
            break
            case "arriba": 
                if(Posicionamiento.puedeArriba(origen, comentario))
                    Posicionamiento.posicionarArriba(origen, comentario)
                else if(Posicionamiento.puedeAbajo(origen, comentario))
                    Posicionamiento.posicionarAbajo(origen, comentario)
                else if(Posicionamiento.puedeIzquierda(origen, comentario))
                    Posicionamiento.posicionarIzquierda(origen, comentario)
                else if(Posicionamiento.puedeDerecha(origen, comentario))
                    Posicionamiento.posicionarDerecha(origen, comentario)
            break
            case "top": 
                if(Posicionamiento.puedeArriba(origen, comentario))
                    Posicionamiento.posicionarArriba(origen, comentario)
                else if(Posicionamiento.puedeAbajo(origen, comentario))
                    Posicionamiento.posicionarAbajo(origen, comentario)
                else if(Posicionamiento.puedeIzquierda(origen, comentario))
                    Posicionamiento.posicionarIzquierda(origen, comentario)
                else if(Posicionamiento.puedeDerecha(origen, comentario))
                    Posicionamiento.posicionarDerecha(origen, comentario)
            break
            case "abajo":
                if(Posicionamiento.puedeAbajo(origen, comentario))
                    Posicionamiento.posicionarAbajo(origen, comentario)
                else if(Posicionamiento.puedeArriba(origen, comentario))
                    Posicionamiento.posicionarArriba(origen, comentario)
                else if(Posicionamiento.puedeIzquierda(origen, comentario))
                    Posicionamiento.posicionarIzquierda(origen, comentario)
                else if(Posicionamiento.puedeDerecha(origen, comentario))
                    Posicionamiento.posicionarDerecha(origen, comentario)
            break
            case "bottom":
                if(Posicionamiento.puedeAbajo(origen, comentario))
                    Posicionamiento.posicionarAbajo(origen, comentario)
                else if(Posicionamiento.puedeArriba(origen, comentario))
                    Posicionamiento.posicionarArriba(origen, comentario)
                else if(Posicionamiento.puedeIzquierda(origen, comentario))
                    Posicionamiento.posicionarIzquierda(origen, comentario)
                else if(Posicionamiento.puedeDerecha(origen, comentario))
                    Posicionamiento.posicionarDerecha(origen, comentario)
            break
        }
    }

    const eventoClick = (e) => {
        comp = $("<div class='com-complemento'>")
        $("body").append(comp)
        $(e).click((e) => {
            comentario = $("<div class='com-dinamico'></div>")
            origen = e.target
            $(comentario).append($(origen).data("info"))
            $("body").append(comentario) 
            $(comentario).show()
            $(comp).show()
            arrancar(origen, comentario)
        })

        $(comp).click((e) => {
            $(".com-dinamico").remove()
            $(".com-complemento").hide()
        })
    }

    const eventoHover = (e) => {
        $(e).hover((e) => {
            comentario = $("<div class='com-dinamico'></div>")
            origen = e.target
            $(comentario).append($(origen).data("info"))
            $("body").append(comentario) 
            $(comentario).show()
            arrancar(origen, comentario)
        }, () => {
            $(comentario).remove()
        })
    }
    const inicializar = () => {
        $(".com-trigger").each((index, e) => {
            let evt = $(e).data("evt")
            if(evt === "hover") {
                eventoHover(e)
            }else if(evt === "click") {
                eventoClick(e)
            }else {
                eventoHover(e)
            }
        })
    }

    const ComentarioDinamico = {
        iniciar: () => inicializar()
    }

    window.ComentarioDinamico = ComentarioDinamico
})()

export default ComentarioDinamico