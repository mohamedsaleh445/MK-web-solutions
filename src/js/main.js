$(window).on("load", function () {

    setTimeout(() => {
        $("#loader").fadeOut(1000)
    }, 300)

    AOS.init({
        delay: 10,
        duration: 1000,
        once: false,
        easing: 'ease-out-sine'
    });

    $("#open").on("click", function () {
        // $("#sideMenu").slideDown(900)
        // $(this).addClass('hidden')
        // $("#close").removeClass("hidden")

        $(this).fadeOut(300, function () {
            $("#sideMenu").slideDown(300)
            $("#close").fadeIn(200)
        })
    })

    $("#close").on("click", function () {
        // $("#sideMenu").slideUp(900)
        // $(this).addClass('hidden')
        // $("#open").removeClass("hidden")
        $(this).fadeOut(300, function () {
            $("#sideMenu").slideUp(300)
            $("#open").fadeIn(200)
        })
    })


    let animationTriiget = false
    function circleAnimation() {
        let circles = $(".outer-circle")
        circles.each(function () {
            let outer = $(this)
            let inner = outer.find(".inner-circle")
            let target = outer.attr("data-precent")
            let count = 0;

            let interval = setInterval(() => {
                if (count >= target) {
                    clearInterval(interval)
                } else {
                    count++;
                    inner.text(count + "%")
                    outer.css("background-image", `conic-gradient(#3b82f6 ${count}%,#1e293b 0%)`)
                }
            }, 30)
        })

    }


    $(".dark").click(function () {
        $(this).fadeOut(300, function () {
            $('html').addClass("dark")
            $(".light").fadeIn(300)
        })
    })
    $(".light").click(function () {
        $(this).fadeOut(300, function () {
            $('html').removeClass("dark")
            $(".dark").fadeIn(300)
        })
    })

    $(window).on("scroll", function () {
        let scrollTop = $(window).scrollTop()
        let section = $("#progress").offset().top;
        let windwoHeight = $(window).height()

        if (!animationTriiget && scrollTop + windwoHeight >= section) {
            circleAnimation()
            animationTriiget = true

        }


    })

})