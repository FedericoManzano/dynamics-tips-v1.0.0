import $ from "jquery";
import  "../../css/estilos-dynamics.css";
(function () {

    let origen = null 
    let ele = null 
    let comp = null
    let activo = false


    const dameCoordenadasIniciales = (origen, comentario) => {
        let reacX = $(comentario).outerWidth() -  $(origen).outerWidth()
        let reactY = $(comentario).outerHeight() -  $(origen).outerHeight()
        return {x: posX(origen) + (reacX*-1) / 2, y: posY(origen) + (reactY*-1) / 2}
    } 


    const posX = (origen) => {
        return $(origen).offset().left
    }

    const posY = (origen) => {
        return $(origen).offset().top
    }

    const puedeArriba = (origen, ele) => {
        let espacio = $(origen).offset().top - $(window).scrollTop()
        return $(ele).outerHeight() < espacio - 15
    }

    const puedeAbajo = (origen, ele) => {
        let espacio = $(window).height() - $(origen).offset().top - $(origen).outerHeight()
        return $(ele).outerHeight() < espacio - 15
    }

    const puedeIzquierda = (origen, ele) => {
        let espacio = $(origen).offset().left - $(ele).outerWidth()
        return espacio > 15
    }

    const puedeDerecha = (origen, ele) => {
        let espacio = $(window).width() - $(origen).outerWidth() - $(origen).offset().left
        return espacio - $(ele).outerWidth() >= 15
    }

    const posicionamientoInicial = (origen, ele) => {
        let reacX = $(ele).outerWidth() -  $(origen).outerWidth()
        let reactY = $(ele).outerHeight() -  $(origen).outerHeight()
        $(ele).css("left", posX(origen) + (reacX*-1) / 2)
        $(ele).css("top", posY(origen) + (reactY*-1) / 2)
    }

    const despIzquierda = ( ele) => {
        let offsetIzq = $(ele).offset().left 
        return offsetIzq < 0 ? offsetIzq *-1 +10: 0  
    }

    const despDerecha = ( ele) => {
        let offsetDer= $(window).width() -  $(ele).offset().left - $(ele).outerWidth()
        return offsetDer < 0 ? offsetDer *-1 +10: 0  
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

    const posicionarArriba = (origen, ele) => {
        $(ele).css("top", posY(origen) - $(ele).outerHeight())
        $(ele).css("transform", "translateY(-15px)")
        let reacX = $(ele).outerWidth() -  $(origen).outerWidth()
        if(despIzquierda(ele) !== 0) 
            $(ele).css("left", posX(origen) + (reacX*-1) / 2 + despIzquierda(ele))
        if(despDerecha(ele) !== 0) 
            $(ele).css("left", posX(origen) + (reacX*-1) / 2 + despDerecha(ele))
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

    const posicionarIzquierda = (origen, ele) => {
        let espacioTotal = $(origen).offset().left 
        let corr = espacioTotal - $(ele).outerWidth()
        $(ele).css("left", corr)
        $(ele).css("transform", "translate(-15px)")
        despArriba(origen,ele)
        despAbajo(origen, ele)

    }

    const posicionarDerecha = (origen, ele) => {
        $(ele).css("left", $(origen).offset().left + $(origen).outerWidth())
        $(ele).css("transform", "translate(15px)")
        despArriba(origen,ele)
        despAbajo(origen, ele)
    }

    const realizarAparicion = (origen, ele) => {
        let pos = $(origen).data("pos")
        let mueca = null
        switch(pos) {
            case "arriba": 
                if(puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    posicionarArriba(origen, ele)
                } else if(puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    posicionarAbajo(origen, ele)
                }else if(puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    posicionarIzquierda(origen, ele)
                }else if(puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    posicionarDerecha(origen, ele)
                }
            break
            case "top":
                if(puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    posicionarArriba(origen, ele)
                } else if(puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    posicionarAbajo(origen, ele)
                }else if(puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    posicionarIzquierda(origen, ele)
                }else if(puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    posicionarDerecha(origen, ele)
                }
            break
            case "abajo": 
                if(puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    posicionarAbajo(origen, ele)
                } else if(puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    posicionarArriba(origen, ele)
                }else if(puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    posicionarIzquierda(origen, ele)
                }else if(puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    posicionarDerecha(origen, ele)
                }
            break
            case "bottom": 
                if(puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    posicionarAbajo(origen, ele)
                } else if(puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    posicionarArriba(origen, ele)
                }else if(puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    posicionarIzquierda(origen, ele)
                }else if(puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    posicionarDerecha(origen, ele)
                }
            break
            case "izquierda": 
                if(puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    posicionarIzquierda(origen, ele)
                } else if(puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    posicionarDerecha(origen, ele)
                }else if(puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    posicionarArriba(origen, ele)
                }else if(puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    posicionarAbajo(origen, ele)
                }
            break
            case "left":
                if(puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    posicionarIzquierda(origen, ele)
                } else if(puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    posicionarDerecha(origen, ele)
                }else if(puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    posicionarArriba(origen, ele)
                }else if(puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    posicionarAbajo(origen, ele)
                } 
            break
            case "derecha": 
                if(puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    posicionarDerecha(origen, ele)
                } else if(puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    posicionarIzquierda(origen, ele)
                }else if(puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    posicionarArriba(origen, ele)
                }else if(puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    posicionarAbajo(origen, ele)
                } 
            break
            case "right": 
                if(puedeDerecha(origen, ele)) {
                    mueca = $("<span class='mueca-izq'></span>")
                    $(ele).append(mueca)
                    posicionarDerecha(origen, ele)
                } else if(puedeIzquierda(origen, ele)) {
                    mueca = $("<span class='mueca-der'></span>")
                    $(ele).append(mueca)
                    posicionarIzquierda(origen, ele)
                }else if(puedeArriba(origen, ele)) {
                    mueca = $("<span class='mueca-aba'></span>")
                    $(ele).append(mueca)
                    posicionarArriba(origen, ele)
                }else if(puedeAbajo(origen, ele)) {
                    mueca = $("<span class='mueca-arr'></span>")
                    $(ele).append(mueca)
                    posicionarAbajo(origen, ele)
                }
            break
        }
        activo = true
    }

    const activar = (origen, ele) => {
        $("body").append(ele)
        posicionamientoInicial(origen, ele)

        realizarAparicion(origen, ele)
    }


    const eventoClick = (e) => {
        comp = $("<div class='tips-complemento'>")
        $("body").append(comp)
        $(e).click((e) => {
            $(".tips").remove()
            origen = e.target 
            ele = $("<div class='tips'></div>")
            $(ele).append($(origen).data("tips"))
            $(comp).show()
            activar(origen, ele)
        })
        
        $(comp).click((e) => {
            $(".tips").remove()
            $(".tips-complemento").hide()
            activo = false
        })
    }



    const eventoHover= (e) => {
        $(e).hover((e) => {
            origen = e.target 
            ele = $("<div class='tips'></div>")
            $(ele).append($(origen).data("tips"))
            activar(origen, ele)
        }, () => {
            $(ele).remove()
            activo = false
        })
    }


    const inicializar = () => {
        
        $(".tips-ele").each((index, e) => {
            let evento = $(e).data("evt")
            if(evento === "click")
                eventoClick(e)
            else if(evento === "hover")
                eventoHover(e)
            else 
                eventoHover(e)
        })
        $(window).resize(() => {
            if(activo) {
                $(".mueca-aba").remove()
                $(".mueca-arr").remove()
                $(".mueca-izq").remove()
                $(".mueca-der").remove()
                activar(origen, ele)
            }
            
        })
    }

    const ToolTips = {
        iniciar: () => inicializar()
    }

    window.ToolTips = ToolTips
}) ()

export default ToolTips
