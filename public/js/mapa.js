$(function(){

    function mapaBlock(mapy){
    /*$("#mapy path").on("click", function(){   
        $(this).css({ fill: "#f2f20d"});
        $(this).on("mouseout", function(){
            $(this).css({ fill: "#009999"});
        })*/
            function fillPersonCard(person) {
                let mapa = mapy.find(item => {return item.name === person});
                $(".header").html(`<h2>${mapa.name}</h2>`);
                $(".text").text( `${mapa.historie}`);
                $(".gallery").empty();
                $(".odkaz").html(`Odkaz: <a href="${mapa.online}">${mapa.online}</a>`)
                for (let i = 0; i < mapa.portraits.length; i++) {
                    $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="../img/${mapa.portraits[i]}" alt="" class="img-fluid"></a></div>`);        
                }
            }
            
            fillPersonCard(mapy[0].name);

            $("#mapy path").on("click", function(){
                //$(this).css({ fill: "#f2f20d"});
                $("#mapy path").removeClass("active");
                $(this).css({ fill: "#f2f20d"});
                $(this).on("mouseout", function(){
                    $(this).css({ fill: "#009999"});
                })
                $(this).addClass("active");        

                let person = $(this).text();

               //$("#portret").slideUp(1000, function(){

                fillPersonCard(person);
                //});

                //$("#portret").slideDown(500);
            });
            

            //$("#mapy path").addClass('active');

            
        //});
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
    });



})