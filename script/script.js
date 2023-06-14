$(function(){

    setInterval(function(){
        $('.slidewrap').animate({'margin-left':'-100%'},function(){
            $('.slide:first').appendTo('.slidewrap')
            $('.slidewrap').css({'margin-left':'0%'})
        })
    },3000)

    $('.menu>ul>li').hover(
        function(){
            $('ul.submenu').stop().slideDown(300)
            $('.scroll').stop().slideDown(300);
        },
        function(){
            $('ul.submenu').stop().slideUp(300)
            $('.scroll').stop().slideUp(300);
        }
    )

    $('.notice li:nth-child(1)').click(function(){
        $('.blackback').show()
        $('.popup').show()
    })

    $('.popup button').click(function(){
        $('.blackback').hide();
        $('.popup').hide()
    })
})