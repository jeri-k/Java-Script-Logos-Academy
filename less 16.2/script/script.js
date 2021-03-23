$(function () {
    let modalDiv = $('.modal');
    $(".box").each(function (index, elem) {
        $(elem).click(function () {
            $(".modal_container").css({
                backgroundColor: '#000000c7',
                transition: '2s',
                zIndex: 2
            });
            modalDiv.css('top', (window.innerHeight - modalDiv.height()) / 2);
            modalDiv.css('left', (window.innerWidth - modalDiv.width()) / 2);
            modalDiv.css({
                display: 'block'
            })
            if (index === 0) {
                $('.item').eq(1).css({zIndex: -1})
                $('.item').eq(2).css({zIndex: -1})
                $('.item').eq(3).css({zIndex: -1})
                $('.item').eq(4).css({zIndex: -1})
                $(`.item:eq(${index})`)
                    .animate({
                            width: 400,
                            height: 400,
                            top: `120%`,
                            left: `145%`,
                        },
                        2000
                    )
                    .css({
                        zIndex: 30
                    })

            } else if (index === 1) {
                $('.item').eq(0).css({zIndex: -1})
                $('.item').eq(2).css({zIndex: -1})
                $('.item').eq(3).css({zIndex: -1})
                $('.item').eq(4).css({zIndex: -1})
                $(`.item:eq(${index})`)
                    .animate({
                            width: 400,
                            height: 400,
                            top: `120%`,
                            left: `40%`,
                        },
                        2000
                    )
                    .css({
                        zIndex: 40
                    })

            } else if (index === 2) {
                $('.item').eq(1).css({zIndex: -1})
                $('.item').eq(0).css({zIndex: -1})
                $('.item').eq(3).css({zIndex: -1})
                $('.item').eq(4).css({zIndex: -1})
                $(`.item:eq(${index})`)
                    .animate({
                            width: 400,
                            height: 400,
                            top: `120%`,
                            left: `-65%`,
                        },
                        2000
                    ).css({
                    zIndex: 30
                })

            } else if (index === 3) {
                $('.item').eq(1).css({zIndex: -1})
                $('.item').eq(2).css({zIndex: -1})
                $('.item').eq(0).css({zIndex: -1})
                $('.item').eq(4).css({zIndex: -1})
                $(`.item:eq(${index})`)
                    .animate({
                            width: 400,
                            height: 400,
                            top: `120%`,
                            left: `-175%`,
                        },
                        2000
                    )
                    .css({
                        zIndex: 30
                    })
            } else if (index === 4) {
                $('.item').eq(1).css({zIndex: -1})
                $('.item').eq(2).css({zIndex: -1})
                $('.item').eq(3).css({zIndex: -1})
                $('.item').eq(0).css({zIndex: -1})
                $(`.item:eq(${index})`)
                    .animate({
                            width: 400,
                            height: 400,
                            top: `120%`,
                            left: `-280%`,
                        },
                        2000
                    ).css({
                    zIndex: 30
                })

            }
        })
        $('.modal').click(function () {
            if (index === 0) {
                $(`.item`).eq('0').animate({
                        width: `100%`,
                        height: `100%`,
                        top: 0,
                        left: 0,
                    },
                    2000
                )
                    .css({
                        zIndex: 60
                    });
            }
            if (index === 1) {
                $(`.item`).eq('1').animate({
                        width: `100%`,
                        height: `100%`,
                        top: 0,
                        left: 0,
                    },
                    2000
                )
                    .css({
                        zIndex: 50
                    });
            }
            if (index === 2) {
                $(`.item`).eq('2').animate({
                        width: `100%`,
                        height: `100%`,
                        top: 0,
                        left: 0,
                    },
                    2000
                )
                    .css({
                        zIndex: 40
                    });
            }
            if (index === 3) {
                $(`.item`).eq('3').animate({
                        width: `100%`,
                        height: `100%`,
                        top: 0,
                        left: 0,
                    },
                    2000
                )
                    .css({
                        zIndex: 40
                    });
            }
            if (index === 4) {
                $(`.item`).eq('4').animate({
                        width: `100%`,
                        height: `100%`,
                        top: 0,
                        left: 0,
                    },
                    2000
                )
                    .css({
                        zIndex: 40
                    });
            }
            $('.modal_container').css({
                backgroundColor: '#fff',
                zIndex: -2,
                transition: '2s',

            });
            modalDiv.css({
                display: 'none'
            })


        });


    })
})