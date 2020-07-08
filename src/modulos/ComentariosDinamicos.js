import $ from "jquery" 

(function(){

    let comentario = null, 
        origen = null
    const eventoClick = (e) => {
        $(e).click((e) => {
            comentario = $("<div class='com-dinamico'></div>")
            origen = e.target
            $(comentario).append($(origen).data("info"))
            $("body").append(comentario) 
        })
    }
    const inicializar = () => {
        $(".com-trigger").each((index, e) => {
            let evt = $(e).data("evt")
            if(evt === "hover") {

            }else if(evt === "click") {
                eventoClick(e)
            }else {

            }
        })
    }

    const ComentarioDinamico = {
        iniciar: () => inicializar()
    }

    window.ComentarioDinamico = ComentarioDinamico
})()

export default ComentarioDinamico