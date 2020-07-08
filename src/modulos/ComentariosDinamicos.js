import $ from "jquery" 
import  "../../css/estilos-dynamics.css";
(function(){

    let comentario = null, 
        origen = null,
        comp = null


    const posX = (origen) => {
        return $(origen).offset().left
    }

    const posY = (origen) => {
        return $(origen).offset().top
    }
    
    
    const dameCoordenadasIniciales = (origen, comentario) => {
        let reacX = $(comentario).outerWidth() -  $(origen).outerWidth()
        let reactY = $(comentario).outerHeight() -  $(origen).outerHeight()
        return {x: posX(origen) + (reacX*-1) / 2, y: posY(origen) + (reactY*-1) / 2}
    }   

    const posicionamientoInicial = (origen, ele) => {
        let reacX = $(ele).outerWidth() -  $(origen).outerWidth()
        let reactY = $(ele).outerHeight() -  $(origen).outerHeight()
        $(ele).css("left", posX(origen) + (reacX*-1) / 2)
        $(ele).css("top", posY(origen) + (reactY*-1) / 2)
        return {x: posX(origen) + (reacX*-1) / 2, y: posY(origen) + (reactY*-1) / 2}
    }

    const puedeAbajo = (origen, ele) => {
        let espacio = $(window).height() - $(origen).offset().top - $(origen).outerHeight()
        return $(ele).outerHeight() < espacio - 15
    }

    const posicionarAbajo = (origen, ele) => {
        $(ele).css("top", posY(origen) + $(origen).outerHeight())
        $(ele).css("transform", "translateY(15px)")
        let reacX = $(ele).outerWidth() -  $(origen).outerWidth()
        if(despIzquierda(ele) !== 0) 
            $(ele).css("left", posX(origen) + (reacX*-1) / 2 + despIzquierda(ele))
        if(despDerecha(ele) !== 0) 
            $(ele).css("left", posX(origen) + (reacX*-1) / 2 + despDerecha(ele))
        
    }

    /**
     * 
     * Posicionamiento arriba
     */

    const posicionarArriba = (origen, ele) => {
        $(ele).css("top", posY(origen) - $(ele).outerHeight())
        $(ele).css("transform", "translateY(-15px)")
        let reacX = $(ele).outerWidth() -  $(origen).outerWidth()
        if(despIzquierda(ele) !== 0) 
            $(ele).css("left", posX(origen) + (reacX*-1) / 2 + despIzquierda(ele))
        if(despDerecha(ele) !== 0) 
            $(ele).css("left", posX(origen) + (reacX*-1) / 2 + despDerecha(ele))
    }

    const despIzquierda = ( ele) => {
        let offsetIzq = $(ele).offset().left 
        return offsetIzq < 0 ? offsetIzq *-1 +10: 0  
    }

    const despDerecha = ( ele) => {
        let offsetDer= $(window).width() -  $(ele).offset().left - $(ele).outerWidth()
        return offsetDer < 0 ? offsetDer *-1 +10: 0  
    }

    const puedeArriba = (origen, ele) => {
        let espacio = $(origen).offset().top - $(window).scrollTop()
        return $(ele).outerHeight() < espacio - 15
    }


    /**
     * 
     * Posicionamiento derecha
     */

    const puedeDerecha = (origen, ele) => {
        let espacio = $(window).width() - $(origen).outerWidth() - $(origen).offset().left
        return espacio - $(ele).outerWidth() >= 15
    }

    const posicionarDerecha = (origen, ele) => {
        $(ele).css("left", $(origen).offset().left + $(origen).outerWidth())
        $(ele).css("transform", "translate(15px)")
        despArriba(origen, comentario)
        despAbajo(origen, comentario)
    }

    /**
     * Posicionamiento a la izquierda
     */

    const puedeIzquerda = (origen, comentario) => {
        return $(origen).offset().left - $(comentario).outerWidth() + 15 > 0
    }

    const despArriba  = (origen, comentario) => {
        let despCom = $(comentario).offset().top - $(window).scrollTop()
        if(despCom < 0) 
            $(comentario).css("top", dameCoordenadasIniciales(origen, comentario).y + despCom*-1 + 10)
    } 

    const despAbajo  = (origen, comentario) => {
        let espacio = $(window).height() - $(comentario).offset().top - $(window).scrollTop()
        if(espacio < 0) 
            $(comentario).css("top", dameCoordenadasIniciales(origen, comentario).y - $(comentario).outerHeight() / 2 )
    } 

    const posicionarIzquerda = (origen, comentario) => {
        let espacioTotal = $(origen).offset().left 
        let corr = espacioTotal - $(comentario).outerWidth()
        $(comentario).css("left", corr)
        $(comentario).css("transform", "translate(-15px)")
        despArriba(origen, comentario)
        despAbajo(origen, comentario)
    }

    const arrancar = (origen, comentario) => {
        posicionamientoInicial(origen, comentario)
        let pos = $(origen).data("pos")

        switch( pos ) {
            case "izquierda": 
                if(puedeIzquerda(origen, comentario))
                    posicionarIzquerda(origen, comentario)
                else if(puedeDerecha(origen, comentario))
                    posicionarDerecha(origen, comentario)
                else if(puedeArriba(origen, comentario))
                    posicionarArriba(origen, comentario)
                else if(puedeAbajo(origen, comentario))
                    posicionarAbajo(origen, comentario)
            break;
            case "left": 
                if(puedeIzquerda(origen, comentario))
                    posicionarIzquerda(origen, comentario)
                else if(puedeDerecha(origen, comentario))
                    posicionarDerecha(origen, comentario)
                else if(puedeArriba(origen, comentario))
                    posicionarArriba(origen, comentario)
                else if(puedeAbajo(origen, comentario))
                    posicionarAbajo(origen, comentario)
            break;
            case "derecha": 
                if(puedeDerecha(origen, comentario))
                    posicionarDerecha(origen, comentario)
                else if(puedeIzquerda(origen, comentario))
                    posicionarIzquerda(origen, comentario)
                else if(puedeArriba(origen, comentario))
                    posicionarArriba(origen, comentario)
                else if(puedeAbajo(origen, comentario))
                    posicionarAbajo(origen, comentario)
            break
            case "right": 
                if(puedeDerecha(origen, comentario))
                    posicionarDerecha(origen, comentario)
                else if(puedeIzquerda(origen, comentario))
                    posicionarIzquerda(origen, comentario)
                else if(puedeArriba(origen, comentario))
                    posicionarArriba(origen, comentario)
                else if(puedeAbajo(origen, comentario))
                    posicionarAbajo(origen, comentario)
            break
            case "arriba": 
                if(puedeArriba(origen, comentario))
                    posicionarArriba(origen, comentario)
                else if(puedeAbajo(origen, comentario))
                    posicionarAbajo(origen, comentario)
                else if(puedeIzquerda(origen, comentario))
                    posicionarIzquerda(origen, comentario)
                else if(puedeDerecha(origen, comentario))
                    posicionarDerecha(origen, comentario)
            break
            case "top": 
                if(puedeArriba(origen, comentario))
                    posicionarArriba(origen, comentario)
                else if(puedeAbajo(origen, comentario))
                    posicionarAbajo(origen, comentario)
                else if(puedeIzquerda(origen, comentario))
                    posicionarIzquerda(origen, comentario)
                else if(puedeDerecha(origen, comentario))
                    posicionarDerecha(origen, comentario)
            break
            case "abajo":
                if(puedeAbajo(origen, comentario))
                    posicionarAbajo(origen, comentario)
                else if(puedeArriba(origen, comentario))
                    posicionarArriba(origen, comentario)
                else if(puedeIzquerda(origen, comentario))
                    posicionarIzquerda(origen, comentario)
                else if(puedeDerecha(origen, comentario))
                    posicionarDerecha(origen, comentario)
            break
            case "bottom":
                if(puedeAbajo(origen, comentario))
                    posicionarAbajo(origen, comentario)
                else if(puedeArriba(origen, comentario))
                    posicionarArriba(origen, comentario)
                else if(puedeIzquerda(origen, comentario))
                    posicionarIzquerda(origen, comentario)
                else if(puedeDerecha(origen, comentario))
                    posicionarDerecha(origen, comentario)
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