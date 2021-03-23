let r, g, b, t, l;

$(function () {
    $('document').ready(function () {
        setInterval(function () {
            $('.circle').each(function () {
                r = Math.round(Math.random() * 255)
                g = Math.round(Math.random() * 255)
                b = Math.round(Math.random() * 255)
                $(this).css({
                    background: `rgb(${r},${g},${b})`,
                    border: `solid 5px rgb(${r + 120},${g - 20},${b - 120})`,
                    boxShadow: `0 0 10px 8px rgb(${r * 90},${g + 20},${b + 120})`,
                    transition:'.5s'
                })
                t = Math.round(Math.random() * 600)
                l = Math.round(Math.random() * 1460)
                $(this).animate({
                    marginTop: t,
                    marginLeft: l
                })
            }, 1000,'easeInSine')

        }, 1000,)


    })

})





