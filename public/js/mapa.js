$(function(){
    function mapaBlock(mapy){
        //$('rect').hide();
        $('path').css('position','relative');
        //let pathFill = $('path').css('fill');
        $('path').on('click', function() {
            //$('path').css('fill', pathFill);
            console.log(this.id);
            $(this).css('fill',"#f2f20d");
            naplnMapu(mapy[0].name);
            $(this).on("mouseout", function(){
                $(this).css({ fill: "#009999"});
            })
        });

        function naplnMapu(id) {
            
            let mapa = mapy.find(item => {return item.name === id});
            $(".header").html(`<h2>${mapa.name}</h2>`);
            $(".text").text( `${mapa.historie}`);
            $(".gallery").empty();
            $(".odkaz").html(`Odkaz: <a href="${mapa.online}">${mapa.online}</a>`)
            for (let i = 0; i < mapa.portraits.length; i++) {
                $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="../img/${mapa.portraits[i]}" alt="" class="img-fluid"></a></div>`);        
            }
            $(this).addClass("active");        

            id = $(this).text();
        }
        
    }
    
    fetch('../js/data/mapy.json')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => {
        console.log(json);
        mapaBlock(json);
    })
    .catch(function (error){
        console.error('Chyba: \n', error);
    })
})