jQuery(document).ready(function(){

    "use-strict";
    $("#slider-carousel").carouFredSel({
        responsive:true,
        height:'100%',
        width:'100%',
        circular: true,
        scroll:{
            items:1,
            duration:500,
            pauseOnHover:true
        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height: 'variable'
        },
        paginnation:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }
    });
});

const navSlide = () =>{
    let menu =document.getElementsByClassName('nav-links');
    //console.log(menu)
    menu[0].classList.toggle("nav-active");
};