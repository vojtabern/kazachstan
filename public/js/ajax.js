

$(function(){


    $("h2").on("click", function(){

        $(this).parents(".row").next().toggle(1000);
    });


    function eventsBlock(events){
        events.forEach((event)=>{

            $("#udalosti tbody").append(`<tr>
                <td class="event-year">${event.year}</td>
                <td>
                <p class="event-name"><i class="fas fa-chevron-down"></i> <a target="_new">${event.event}</a></p>
                <p class="event-detail">${event.detail}</p>
                </td>            
            </tr>`);
        });

        $(".event-detail").hide();

        $(".event-name i, .event-name a").on("click", function(){

            $("#udalosti tr").removeClass("modra");

            $(this).parents("tr").addClass("modra");

            $(".event-detail").hide();
    
            $(this).parent().next().show(500);
        }); 
    }   

    function heroesBlock(heroes){
    heroes.forEach((hero)=>{
        $("#postavy .mozna").append(`<li class="list-group-item list-group-item-action list-group-item-primary">${hero.name}</li>`);
        
    });


    function fillPersonCard(person) {
        let hero = heroes.find(item => {return item.name === person});
        $(".card-header").html(`<i></i> <b>${hero.date}</b>`);
        $(".card-title").text(hero.name);
        $(".card-text").text(hero.biography);
        $(".card-footer").html(`Odkaz: <a href="${hero.online}">${hero.online}</a>`);
        $(".gallery").empty();
        for (let i = 0; i < hero.portraits.length; i++) {
            $(".gallery").append(`<div class="col-sm-4"><a href="#"><img src="./img/${hero.portraits[i]}" alt="" class="img-fluid"></a></div>`);        
        }
        }


        $("#postavy li:first").addClass('active');

        fillPersonCard(heroes[0].name);


        $("#postavy li").on("click", function(){

            $("#postavy li").removeClass("active");

            $(this).addClass("active");        

            let person = $(this).text();

            $("#portret").slideUp(1000, function(){

                fillPersonCard(person);
            });

            $("#portret").slideDown(500);
        });
    }   

    
    fetch('js/data/events.json')
    fetch('js/data/karta.json')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => {
        console.log(json);
        eventsBlock(json);
    })
    .catch(function (error){
        console.error('Chyba: \n', error);
    });

    fetch('js/data/heroes.json')
    fetch('js/data/postavy.json')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(json => {
        console.log(json);
        heroesBlock(json);
    })
    .catch(function (error){
        console.error('Chyba: \n', error);
    });
})