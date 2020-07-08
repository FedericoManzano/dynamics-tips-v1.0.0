import $ from "jquery"


class Posicionamiento {
    static posX (origen) {
        return $(origen).offset().left
    }

    static posY (origen) {
        return $(origen).offset().top
    }


    static dameCoordenadasIniciales (origen, ele) {
        let reacX = $(ele).outerWidth() -  $(origen).outerWidth()
        let reactY = $(ele).outerHeight() -  $(origen).outerHeight()
        return {x: Posicionamiento.posX(origen) + (reacX*-1) / 2, y: Posicionamiento.posY(origen) + (reactY*-1) / 2}
    }

    static posicionamientoInicial (origen, ele) {
        let reacX = $(ele).outerWidth() -  $(origen).outerWidth()
        let reactY = $(ele).outerHeight() -  $(origen).outerHeight()
        $(ele).css("left", Posicionamiento.posX(origen) + (reacX*-1) / 2)
        $(ele).css("top", Posicionamiento.posY(origen) + (reactY*-1) / 2)
        return {x: Posicionamiento.posX(origen) + (reacX*-1) / 2, y: Posicionamiento.posY(origen) + (reactY*-1) / 2}
    }

    static puedeAbajo  (origen, ele) {
        let espacio = $(window).height() - $(origen).offset().top - $(origen).outerHeight()
        return $(ele).outerHeight() < espacio - 15
    }

    static posicionarAbajo  (origen, ele) {
        $(ele).css("top", Posicionamiento.posY(origen) + $(origen).outerHeight())
        $(ele).css("transform", "translateY(15px)")
        let reacX = $(ele).outerWidth() -  $(origen).outerWidth()
        if(Posicionamiento.despIzquierda(ele) !== 0) 
            $(ele).css("left", Posicionamiento.posX(origen) + (reacX*-1) / 2 + Posicionamiento.despIzquierda(ele))
        if(Posicionamiento.despDerecha(ele) !== 0) 
            $(ele).css("left", Posicionamiento.posX(origen) + (reacX*-1) / 2 + Posicionamiento.despDerecha(ele))
        
    }


    static posicionarArriba  (origen, ele)  {
        $(ele).css("top", Posicionamiento.posY(origen) - $(ele).outerHeight())
        $(ele).css("transform", "translateY(-15px)")
        let reacX = $(ele).outerWidth() -  $(origen).outerWidth()
        if(Posicionamiento.despIzquierda(ele) !== 0) 
            $(ele).css("left", Posicionamiento.posX(origen) + (reacX*-1) / 2 + Posicionamiento.despIzquierda(ele))
        if(Posicionamiento.despDerecha(ele) !== 0) 
            $(ele).css("left", Posicionamiento.posX(origen) + (reacX*-1) / 2 + Posicionamiento.despDerecha(ele))
    }

    static despIzquierda  ( ele)  {
        let offsetIzq = $(ele).offset().left 
        return offsetIzq < 0 ? offsetIzq *-1 +10: 0  
    }

    static despDerecha  ( ele)  {
        let offsetDer= $(window).width() -  $(ele).offset().left - $(ele).outerWidth()
        return offsetDer < 0 ? offsetDer *-1 +10: 0  
    }

    static puedeArriba  (origen, ele)  {
        let espacio = $(origen).offset().top - $(window).scrollTop()
        return $(ele).outerHeight() < espacio - 15
    }

    static puedeDerecha  (origen, ele)  {
        let espacio = $(window).width() - $(origen).outerWidth() - $(origen).offset().left
        return espacio - $(ele).outerWidth() >= 15
    }

    static posicionarDerecha  (origen, ele)  {
        $(ele).css("left", $(origen).offset().left + $(origen).outerWidth())
        $(ele).css("transform", "translate(15px)")
        Posicionamiento.despArriba(origen, ele)
        Posicionamiento.despAbajo(origen, ele)
    }

    static puedeIzquierda  (origen, comentario)  {
        return $(origen).offset().left - $(comentario).outerWidth() + 15 > 0
    }

    static despArriba (origen, comentario)  {
        let despCom = $(comentario).offset().top - $(window).scrollTop()
        if(despCom < 0) 
            $(comentario).css("top", Posicionamiento.dameCoordenadasIniciales(origen, comentario).y + despCom*-1 + 10)
    } 

    static despAbajo  (origen, comentario)  {
        let espacio = $(window).height() - $(comentario).offset().top - $(window).scrollTop()
        if(espacio < 0) 
            $(comentario).css("top", Posicionamiento.dameCoordenadasIniciales(origen, comentario).y - $(comentario).outerHeight() / 2 )
    } 

    static posicionarIzquierda  (origen, ele) {
        let espacioTotal = $(origen).offset().left 
        let corr = espacioTotal - $(ele).outerWidth()
        $(ele).css("left", corr)
        $(ele).css("transform", "translate(-15px)")
        Posicionamiento.despArriba(origen, ele)
        Posicionamiento.despAbajo(origen, ele)
    }
}


export default Posicionamiento