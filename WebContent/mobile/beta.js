(function(c) {
    var Beta = function(e) {
        var plans = c.plans();
        if(true){
            var arr = new Array(),point="积分";
            arr.push({"packid":1004,"packtype":1,"packvalue":300.0,"currency":"d"})
            arr.push({"packid":1009,"packtype":3,"packvalue":1000.0,"currency":"m"})
            switch (service.lang) {
              case "1":
                service.setVal("加载中...", "支付完成!", "获取积分", "7日服务", "一月服务");
                break;
              case "3":
                point = "積分"
                service.setVal("加載中...", "支付完成!", "積分獲取", "7日服務", "一月服務");
                break;
              default:
                point = "Points"
                service.setVal("Loading...", "Buy Success!", "Get Points", "7 days", "1 month");
                break;
            }
            arr.forEach(function(ret){
                ret.currencysymbol = point;
                var htm = plans.ret(ret,service.point.change);
                htm.find('button').attr('data-type',ret.currency)
            })
            plans.ret({"packid":0,"duration":1,"packtype":4,"packvalue":0.0,"productid":"","currencysymbol":"","currency":"CNY"},function(){
                service.active(this);
                if(!service.isLink){
                    return CloudJsObject.getPoint();
                }
                return location.href = "getpoint:{}"
            })
        }else{
            var div = '<div class="smger"><img src="../app_img/jth.png"/><h4><%=obj.tyb%></h4><p><%=obj.ukl%></p></div>';
            if (service.loding.isUseLSProxy()) {
                div = '<div class="smger"><img src="../app_img/jth_pad.png"/><h4 style="color: #FF7F66"><%=obj.tyb%></h4><p style="color: #FF7F66"><%=obj.ukl%></p></div>';
            }
            
            service.kvHtml(div,".pric_ls");
        }
        service.kvHtml('<%=obj.tty%>',".hd_tt");
    };
    var old = c.fn.beta
    
    c.beta = function(o){
       return new Beta(o)
    }
})(Zepto);