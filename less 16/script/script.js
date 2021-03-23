$(function () {
    $('.circle').on('click', function () {
        w = Math.round(Math.random() * 300)
        h = Math.round(Math.random() * 300)
        $(this).animate({
            width: w,
            height: h
        })
        r = Math.round(Math.random() * 255)
        g = Math.round(Math.random() * 255)
        b = Math.round(Math.random() * 255)
        $(this).css({
            background: `rgb(${r},${g},${b})`,
            transition: '1.3s'
        })
        t = Math.round(Math.random() * 600)
        l = Math.round(Math.random() * 1460)
        $(this).animate({
            marginTop: t,
            marginLeft: l
        })


    })
})



