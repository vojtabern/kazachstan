$(function(){
    function mapaBlock(mapy){
        //$('rect').hide();
        $('path').css('position','relative');
        //let pathFill = $('path').css('fill');
        $('path').on('click', function() {
            //$('path').css('fill', pathFill);
            console.log(this.id);
            $(this).css('fill',"#f2f20d");
            //naplnMapu(mapy[0].id);
            $(this).on("mouseout", function(){
                $(this).css({ fill: "#009999"});
            })
        });

        $("#mapy path").on('click', function(){
            let id = $(this).attr('id');
            $(this).css('fill','yellow');
            let okres = mapy.find(item => {return item.name == id});
            //$('.text').slideUp(1000, function(){$('.text').html(`<div class="col-12"><h2 class="bg-info">${okres.name} <small class="text-small">(od roku ${okres.historie})</small></h2></div><div class="col-4"><img src="img/${okres.portraits}" class="img-fluid"></div><div class="col-8"><p><a href="${okres.online}" target="_blank" class="btn btn-info">Podrobnosti</a></p></div>`)});
            $('.header').html(`<h2 class="bg-info">${okres.name} </h2>`);
            $('.text').html(`<p>${okres.historie}</p>`);
            $(".gallery").empty();
            for(let i = 0; i < okres.portraits.length; i++){
                $('.gallery').append(`<div class="col-md-6"><img src="../img/${okres.portraits[i]}" class="img-fluid"></img></div>`);
            }
            $('.odkaz').html(`<p><a href="${okres.online}" target="_blank" class="btn btn-info">Podrobnosti</a></p>`);

            //$('.text').slideDown(1000);
        });   
        $("#mapy rect").on('click', function(){
            let id = $(this).attr('id');
            $(this).css('fill','yellow');
            let okres = mapy.find(item => {return item.name == id});
            //$('.text').slideUp(1000, function(){$('.text').html(`<div class="col-12"><h2 class="bg-info">${okres.name} <small class="text-small">(od roku ${okres.historie})</small></h2></div><div class="col-4"><img src="img/${okres.portraits}" class="img-fluid"></div><div class="col-8"><p><a href="${okres.online}" target="_blank" class="btn btn-info">Podrobnosti</a></p></div>`)});
            $('.header').html(`<h2 class="bg-info">${okres.name} </h2>`);
            $('.text').html(`<p>${okres.historie}</p>`);
            $(".gallery").empty();
            for(let i = 0; i < okres.portraits.length; i++){
                $('.gallery').append(`<div class="col-md-6"><img src="../img/${okres.portraits[i]}" class="img-fluid"></img></div>`);
            }
            $('.odkaz').html(`<p><a href="${okres.online}" target="_blank" class="btn btn-info">Podrobnosti</a></p>`);

            //$('.text').slideDown(1000);
        }); 
        
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