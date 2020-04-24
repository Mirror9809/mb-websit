$(function () {
    $(".scroll").hover(function () {
        $(".arrow").show()
    }, function () {
        $(".arrow").hide()
    })

    var index = 0
    $(".right").click(function () {
        index++
        if (index > 5) {
            index = 0
        }
        $(".pic ul li").eq(index).show().siblings().hide()
    })

    $(".left").click(function () {
        index--
        if (index < 0) {
            index = 5
        }
        $(".pic ul li").eq(index).show().siblings().hide()
    })

    var run = function () {
        index++
        if (index > 5) {
            index = 0
        }
        $(".pic ul li").eq(index).show().siblings().hide()
    }

    var id = setInterval(run, 2000)

    $(".scroll").hover(function () {
        clearInterval(id)
    }, function () {
        id = setInterval(run, 2000)
    })


})