!function(a) {
    function b(a) {
        var b = this.os = {}, c = this.browser = {}, d = a.match(/WebKit\/([\d.]+)/), e = a.match(/(Android)\s+([\d.]+)/), f = a.match(/(iPad).*OS\s([\d_]+)/), g = !f && a.match(/(iPhone\sOS)\s([\d_]+)/), h = a.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), i = h && a.match(/TouchPad/), j = a.match(/Kindle\/([\d.]+)/), k = a.match(/Silk\/([\d._]+)/), l = a.match(/(BlackBerry).*Version\/([\d.]+)/), m = a.match(/(BB10).*Version\/([\d.]+)/), n = a.match(/(RIM\sTablet\sOS)\s([\d.]+)/), o = a.match(/PlayBook/), p = a.match(/Chrome\/([\d.]+)/) || a.match(/CriOS\/([\d.]+)/), q = a.match(/Firefox\/([\d.]+)/);
        (c.webkit = !!d) && (c.version = d[1]), e && (b.android = !0, b.version = e[2]), 
        g && (b.ios = b.iphone = !0, b.version = g[2].replace(/_/g, ".")), f && (b.ios = b.ipad = !0, 
        b.version = f[2].replace(/_/g, ".")), h && (b.webos = !0, b.version = h[2]), i && (b.touchpad = !0), 
        l && (b.blackberry = !0, b.version = l[2]), m && (b.bb10 = !0, b.version = m[2]), 
        n && (b.rimtabletos = !0, b.version = n[2]), o && (c.playbook = !0), j && (b.kindle = !0, 
        b.version = j[1]), k && (c.silk = !0, c.version = k[1]), !k && b.android && a.match(/Kindle Fire/) && (c.silk = !0), 
        p && (c.chrome = !0, c.version = p[1]), q && (c.firefox = !0, c.version = q[1]), 
        b.tablet = !!(f || o || e && !a.match(/Mobile/) || q && a.match(/Tablet/)), b.phone = !(b.tablet || !(e || g || h || l || m || p && a.match(/Android/) || p && a.match(/CriOS\/([\d.]+)/) || q && a.match(/Mobile/)));
    }
    b.call(a, navigator.userAgent), a.__detect = b;
}(window.lib || (window.lib = {}))
!function(j) {
    var a = "modal", b = document,o = load.setval({t:'tlt',m:'htm'});
    function h(g, d, e) {
        var c = b.createElement(g);
        d && (c.className = d), e && (c.innerHTML = e);
        return c;
    }
    function i(c) {
        c.addEventListener?c.addEventListener("touchstart",function(){
            this.className=a;
        }):c.onclick = function(){this.className=a;}
        return c;
    }
    function m(c) {
    	var g = h('div',a+'-content');
    	g.appendChild(h("h3", "", o.t)),g.appendChild(h("p", "", o.m)),g.appendChild(h("div", a + "-footer"));
    	c.appendChild(g),b.body.appendChild(c),i(c);
    }
    function k() {
        var e = b.querySelector("div.modal"),l;
        if(e==null) return m(h("div", a+" in"));
        l = e.className,l.indexOf('in')>0? l=a : l+=" in",e.className=l;
    }
    k.prototype.set=function(a){
        this.m = this.m.replace('@emil',a)
    }.bind(o)
    j.__modal = k;
}(window.lib || (window.lib = {}))
!function(a) {
    function f(b, a) {
        var c = window.XMLHttpRequest ? new XMLHttpRequest: new ActiveXObject("Microsoft.XMLHTTP");
        c.open("GET", b, !0);
        c.onreadystatechange = function() {
            c.readyState == 4 && a()
        };
        c.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        c.send(null)
    }
    a.__open=f;
}(window.lib || (window.lib = {}))
!function(a) {
    var d = a.browser,c=(navigator.standalone, navigator.userAgent, a.os),s={
        down: function(){
            var down = {
                ios:{
                    1:"http://a.app.qq.com/o/simple.jsp?pkgname=com.ichano.athome.camera",
                    2:""
                },
                android:{
                    1:"http://download.ichano.cn/beta/download/AtHome_beta_7.29_360.apk",
                    2:""
                }
            }
            var t = s.type(),area=s.path().area || 1,u=down[t];
            if(typeof u=='object'){
                window.open(u[area])
            }
        },
        type: function(){
            return (c.android && typeof c.android=='boolean')?'android':(c.ios && typeof c.ios == 'boolean')?'ios':'';
        },
        path: function(){
            var k = load.args().split("&"),h = new Object();
            for (var l in k) {
                $item = k[l].split("=");
                h[$item[0]] = $item[1];
            }
            return h;
        },
        url:function(e){
            var h = s.path();
            a.__modal.prototype.set(h.email)
            return e+'?email='+h.email+'&language='+h.lang+'&devtype='+s.type()+'&area'+h.area+'&callback=jsonp1'
        },
        emil: function(){
            a.__open(s.url('http://member3.ichano.cn/push/guideemail'),function() {
                a.__modal()
            })
        }
    };
    Array.prototype.slice.call(document.getElementsByTagName('a')).forEach(function(e){
        e.className.match(/btn-down/i)?e.onclick = s.down:e.className.match(/btn-emil/i)?e.onclick=s.emil:void 0;
    })
    
}(window.lib || (window.lib = {}))
var d = lib.$controller__detect