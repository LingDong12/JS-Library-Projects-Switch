// 1. Logic: click what just show the color of box
// 2.the ohter box hide

//I finished my selector course today
//https://www.youtube.com/@achademy2072

$(document).ready(function () {
    
    
    
    $('li').click(function () {
        let index = $('li').index(this);
        
        $('.cards').css('display','none');
        $('.cards').eq(index).css('display', 'block');
        
    })
    
})

