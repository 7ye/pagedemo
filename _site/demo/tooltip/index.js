
function tooltip() {
    $("a, img").each(function() {//这里只设置了a标签和img标签，如果想让更多标签有此功能可以继续加
        $("#tooltip").remove();
        if (this.title) {
            var a = this.title;
            $(this).mouseover(function(b) {
                this.title = "";
                $("body").append('<div id="tooltip">' + a + "</div>");
                $("#tooltip").css({
                    left: b.pageX - 15 + "px",
                    top: b.pageY + 30 + "px",
                    opacity: "0.8"
                }).fadeIn(250)
            }).mouseout(function() {
                    this.title = a;
                    $("#tooltip").remove()
                }).mousemove(function(a) {
                    $("#tooltip").css({
                        left: a.pageX - 15 + "px",
                        top: a.pageY + 30 + "px"
                    })
                })
        }
    })
}
(function(a) {
    a.fn.WIT_SetTab = function(b) {
        function c(a) {
            b.Field.filter(":visible").fadeOut(b.OutTime, function() {
                b.Field.eq(a).fadeIn(b.InTime).siblings().hide()
            });
            b.Nav.eq(a).addClass(b.CurCls).siblings().removeClass(b.CurCls)
        }
        b = a.extend({
            Nav: null,
            Field: null,
            K: 0,
            CurCls: "cur",
            Auto: !1,
            AutoTime: 5E3,
            OutTime: 100,
            InTime: 150,
            CrossTime: 60
        }, b || {});
        var d = null,
            f = !1,
            h = null;
        c(b.K);
        b.Nav.hover(function() {
            b.K = b.Nav.index(this);
            b.Auto && clearInterval(h);
            f = a(this).hasClass(b.CurCls);
            d = setTimeout(function() {
                f || c(b.K)
            }, b.CrossTime)
        }, function() {
            clearTimeout(d);
            b.Ajax && b.AjaxFun();
            b.Auto && (h = setInterval(function() {
                b.K++;
                c(b.K);
                b.K == b.Field.size() && (c(0), b.K = 0)
            }, b.AutoTime))
        }).eq(0).trigger("mouseleave")
    }
})(jQuery);

$(document).ready(function(a) {
    //tip
    tooltip();
});


