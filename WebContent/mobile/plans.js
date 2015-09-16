!function(c) {
    var Plans = function(e) {
        service.loding.hide();
        e && typeof e == 'object' && this.exd(e)
    }
    Plans.prototype.exd = function(e){
        if (c.isArray(e)) {
            c.extend(true, service.packArray, e);
        }
        var _t = this,d=service.packArray;
        return c.each(d, function() {
            var h = this;
            if (h === Object(h)) {
                h.paytype = service.paytype[h.packtype];
                h.packvalue = parseFloat(h.packvalue).toFixed(2);
                _t.ret(h,service.click)
            }
        });
    }
    Plans.prototype.ret = function(h,a){
         var f = c("<div/>", {
                 "class":"cell"
         }),g = service.packtype;
         f.append('<div class="step-next"><button class="btn btn-primary-" type="button"><h3>' + (h.packtype == 4 ? "<i></i>" :('<font>' + h.currencysymbol + '</font>'+h.packvalue)) + "</h3></button></div>");
         f.append('<p class="pice">' + g[h.packtype] + "</p>");
         if (service.loding.isUseLSProxy()) {
             f.find("button").css("border", "2px solid #ff7f66");
             f.find("h3").css("border", "1px solid #ff7f66");
             f.find("p").css("color", "#FF7F66");
         }
         a && f.on("click", "button", a);
        c(".pric_ls").append(f);
        return f;
    }
    var old = c.fn.plans
    
    c.plans = function(o){
       return new Plans(o)
    }
}(Zepto);
!function(c) {
    var a = "http://member3.ichano.cn/user", b = "/wap";
    service = {
        lang:"1",
        sessionid:"",
        cid:"",
        fback: "false",
        packArray:[],
        isLink:true,
        lite:false,
        reflsh:"",
        msg:"",
        packtype:{},
        paytype:{
            4:3,
            1:1,
            3:1
        },
        settings:{
            evaluate:/<%([\s\S]+?)%>/g,
            interpolate:/<%=([\s\S]+?)%>/g
        },
        point:{
            option:{},
            template:function(m, h) {
                var f, g = service.settings;
                var i = new RegExp([ g.interpolate.source, g.evaluate.source ].join("|") + "|$", "g");
                var j = 0;
                var d = "";
                m.replace(i, function(n, e, p, o) {
                    d += m.slice(j, o);
                    if (e) {
                        d += "'+\n((__t=(" + e + "))==null?'':__t)+\n'";
                    }
                    if (p) {
                        d += "';\n" + p + "\n__p+='";
                    }
                    j = o + n.length;
                    return n;
                });
                d += "';\n";
                d = "var __t,__p='" + d + "return __p;\n";
                try {
                    f = new Function("obj", d);
                } catch (k) {
                    k.source = d;
                    throw k;
                }
                if (h) {
                    return f(h);
                }
                var l = function(e) {
                    return f.call(this, e);
                };
                l.source = "function(" + (g.variable || "obj") + "){\n" + d + "}";
                return l;
            },
            html:[ '<div class="row head-point">', '<div class="point-log"><img src="/wap/app_img/point_2x.png"><%=obj.surplus%>：<font><%=obj.point%></font></div>', '<button class="btn btn-group pull_right" type="button"><%=obj.getpoint%></button>', "</div>", '<div class="row body-point">', '<div class="span12">', "<span><%=obj.month%></span>", '<a data-type="m" class="pull_right"><%=obj.change%></a>', "</div>", '<div class="span12">', "<span><%=obj.date%></span>", '<a data-type="d" class="pull_right"><%=obj.change%></a>', "</div>", "</div>", '<div class="row footer-point">', "<p><%=obj.explain%></p>", "</div>" ],
            init:function(e) {
                service.url_analysis();
                var d = a + "/point/getpointforjsonp?sessionid=" + service.sessionid;
                service.loadScript(b + "/mobile/files/lang.js", function() {
                    var f = langage.point[service.lang];
                    c("#loading").html(f.loading).show();
                    c.ajax({
                        type:"GET",
                        url:d,
                        dataType:"jsonp",
                        jsonp:"callback",
                        context:this,
                        timeout:5e3,
                        success:function(g) {
                            f.point = g.desc;
                            service.point.time(f);
                        }
                    });
                });
            },
            click:function() {
                var d = langage.point[service.lang] || new Object();
                c(".wrapper").css("overflow", "hidden"), c("#exchange").css("width", "100%").addClass("section");
                setTimeout(function() {
                    location.href = "point.html?sessionid=" + service.sessionid + "&lang=" + service.lang + "&device=" + (service.isLink ? "1" :"0");
                }, 800);
            },
            time:function(d) {
                setTimeout(function() {
                    var e = service.point.template(service.point.html.join(""), d);
                    c("#paper").html(e).css({
                        "background-color":"#F5F0EC"
                    });
					if(service.lang!='2') c("#paper").find('.body-point').addClass('s15');
                    c("#loading").hide(), c("#exchange").hide(), c(".wrapper").css("overflow", "");
                    c("#paper").find(".body-point").on("click", "a", service.point.change);
                    c('.head-point').find('button').on('click',function(){
                    	service.active(this);
                        if(!service.isLink){
                            return CloudJsObject.getPoint();
                        }
                        return location.href = "getpoint:{}"
                    })
                }, 800);
            },
            change:function(f) {
            	service.active(this);
                var d = this.getAttribute("data-type"),pid=1004,msg = langage.point[service.lang].message.m;
                if(d==='d'){
                    pid = 1009,msg = langage.point[service.lang].message.d;
                }
                if (!service.isLink) {
                    return CloudJsObject.requestPoint(pid,msg);
                }
                return location.href = "iospackageinfo:" + JSON.stringify({packid: pid,message: msg,paytype: 3});
            }
        },
        loding:{
            show:function() {
                if (this.isUseLSProxy()) {
                    c(".row.bg_0").css("background-color", "#FCF1DF");
                    c(".paper .head").css("color", "#FF7F66");
                    c(".re_falch p").css("color", "#FF7F66");
                }
                this.pk = c('<div class="re_falch pk"></div>').append('<div id="escaping" class="escaping"></div><p>' + service.reflsh + "</p>");
                this.dl = c('<div class="re_falch dl"><img src="/wap/app_img/reflag_.gif"></div>');
                c(".pric_ls").append(this.pk);
            },
            isString:function(d) {
                return "string" == typeof d;
            },
            hide:function() {
                this.pk.remove();
                this.dl.remove();
            },
            trim:function(d) {
                return this.isString(d) ? d.replace(/^\s+|\s+$/g, "") :"";
            },
            isUseLSProxy:function() {
                var d = navigator.userAgent;
                if (d.indexOf("AppleWebKit") > -1) {
                    if (d.match(/\bMobile\/\d+/) == null) {
                        return false;
                    }
                    if (d.match(/iPad/i) == null) {
                        return false;
                    }
                    return true;
                }
                return false;
            }
        },
        url_analysis:function() {
            var e = this.get_query_args(location.href);
            for (var d in e) {
                if (c.type(e[d]) != null) {
                    if (d == "device" && e[d] == "0") {
                        this.isLink = false;
                    } else {
                        if (d == "lang") {
                            this.lang = e[d];
                        }
                    }
                }
            }
            this.fback = e.fallback || "false";
            this.sessionid = e.sessionid;
            this.cid = e.cid;
        },
        setVal:function(i, j, h, g, k){
            this.reflsh = i;
            this.msg = j;
            this.packtype = {4:h,1:g,3:k};
        },
        setPage:function() {
            var e = this;
            switch (e.lang) {
              case "1":
                e.setVal("加载中...", "支付完成!", "积分兑换", "每月", "每年");
                break;
              case "3":
                e.setVal("加載中...", "支付完成!", "積分兌換", "每月", "每年");
                break;
              default:
                e.setVal("Loading...", "Buy Success!", "Redeem", "Monthly", "Annually");
                break;
            }
            e.loding.show();
            this.loadScript(b + "/mobile/files/lang.js", function() {
                var e = langage[service.lang];
                c("[data-text]").each(function() {
                    var f = c(this).attr("data-text".toLowerCase());
                    c(this).append(e[f]);
                });
            });
        },
        init:function() {
            this.url_analysis(),this.setPage();
            if(this.fback==="true"){
                return this.okey();
            }
            var d = a + "/getproobjsweb?sessionid=" + this.sessionid + "&cid=" + this.cid;
            c.ajax({
                type:"GET",
                url:d,
                dataType:"jsonp",
                jsonp:"callback",
                context:this,
                timeout:5e3,
                success:function(g) {
                    if (service.lite || g.code == "1004") {
                        return service.loadScript(b + "/mobile/beta.js", function() {
                            var bt = c.beta(g.time);
                        })
                    }
                    var e = g.desc.proobjs, f = 0;
                    if (c.isArray(e)) {
                        c.map(this.packtype, function(i, h) {
                            return c.each(e, function() {
                                if (this.packtype == h) {
                                    return service.packArray[f++] = this;
                                }
                            });
                        });
                        this.isLink?this.link():c.plans({})
                    }
                }
            });
        },
        kvHtml:function(html,name){
            langage && c(name).html(service.point.template(html, langage[service.lang]));
        },
        loadScript:function(e, d) {
            var f = document.createElement("script");
            f.type = "text/javascript", f.async = !0, f.src = e, f.readyState ? f.onreadystatechange = function() {
                ("loaded" == f.readyState || "complete" == f.readyState) && (f.onreadystatechange = null, 
                d());
            } :f.onload = function() {
                d();
            };
            document.getElementsByTagName("head")[0].appendChild(f);
        },
        get_query_args:function(j) {
            var h = new Object(),i = j.split("?"),lite;
            if (i.length >= 2) {
                lite=i[1].split("#"),(lite.length >= 2) && (i[1]=lite[0],service.lite=true)
                var g = i[1],k = g.split("&");
                for (var l in k) {
                    $item = k[l].split("=");
                    h[$item[0]] = $item[1];
                }
            }
            return h;
        },
        breakObj:function(f) {
            var d = c(f).closest("div.cell").index();
            return service.packArray[d - 1];
        },
        click:function(f) {
            service.active(this);
            var d = service.breakObj(this);
            if (d.packtype == "4") {
                return service.point.click();
            }
            if (!service.isLink) {
                return service.android(d);
            }
            service.ios(d);
        },
        android:function(g) {
            var d = g.currencysymbol, f = g.packvalue, e = g.duration;
            CloudJsObject.requestNewOrder(g.paytype, g.packid, d.toString(), f.toString(), e.toString(), g.currency);
        },
        ios:function(d) {
            location.href = "iospackageinfo:" + JSON.stringify(d);
        },
        link:function() {
            var e = new Array(), f = this.packArray;
            for (it in f) {
                if (f[it].packtype != "4") {
                    e.push(f[it]);
                }
            }
            location.href = "loadinginfo:" + JSON.stringify(e);
        },
        fallback:function(){
            location.href = "index.html?sessionid=" + service.sessionid + "&lang=" + service.lang + "&device=" + (service.isLink ? "1" :"0") + "&fallback=true";
        },
        active:function(d) {
            c(d).addClass("active");
            setTimeout(function() {
                c(d).removeClass("active");
            }, 500);
        },
        okey:function() {
            var d = '<img src="/wap/app_img/icon_success_iphone.png">', e = "<p>";
            if (this.loding.isUseLSProxy()) {
                d = '<img src="/wap/app_img/icon_success_iPad.png">';
                e = '<p style="color: #FF7F66">';
            }
            c(".pric_ls").empty().append('<div class="okey">' + d + e + this.msg + "</p></div>");
        },
        set:function(d) {
            c.plans(d);
        }
    };
}(Zepto);