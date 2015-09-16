load = {
    lang:"1",
    run:new Array(),
    action:location.href,
    args:function() {
        var b = this.action.split("?");
        if (b.length >= 2) {
            return b[1];
        }
        return "";
    },
    input:function() {
        this.getjs(function() {
            var b = langage[load.lang];
            Array.prototype.slice.call(document.querySelectorAll("input")).forEach(function(d) {
                var a = d.name, f = b[a] || "";
                f != "" && d.setAttribute("placeholder", f);
            });
        });
        return this;
    },
    setlang:function() {
        var e = this.args(), a = e.split("&"),bc = document.body.className;
        for (var b in a) {
            if (/lang=/i.test(a[b])) {
                this.lang = a[b].split("=")[1];
            }
        }
        document.body.className = bc + getClass()
        Array.prototype.slice.call(document.querySelectorAll("[data-img]")).forEach(function(d) {
            var a = d.getAttribute("data-img");
            d.src = a.replace('@file',getClass());
        });
        function getClass(){
            return (load.lang.toString() == '2' ? ' en' : ' zh');
        }
    },
    eval:function() {
        try {
            Array.prototype.slice.call(load.run).forEach(function(d) {
                load.run.shift();
                if (typeof d == "function") {
                    return d.call(load);
                }
                var a = new Function(d);
                a.call(load);
            });
        } catch (b) {
            throw b;
        }
    },
    setval:function(b) {
        this.val = new Object();
        typeof b == "object" && this.getjs(function() {
            var a = langage[load.lang];
            for (v in b) {
                var d = b[v];
                load.val[v] = a[d] || d;
            }
        });
        return this.val;
    },
    init:function() {
        this.setlang();
        this.getjs(function() {
            var b = langage[load.lang];
            Array.prototype.slice.call(document.querySelectorAll("[data-text]")).forEach(function(d) {
                var a = d.getAttribute("data-text");
                d.innerHTML = b[a] || '';
            });
        });
        return this;
    },
    getjs:function(b) {
        this.run.push(b);
        typeof jsname == "undefined" ? jsname = new Object() :typeof langage == "undefined" ? void 0 :this.eval();
        if (!jsname.langage) {
            return jsname.langage = !0, this.loadScript("//member3.ichano.cn/wap/guide/files/lang.js", this.eval);
        }
    },
    loadScript:function(c, a) {
        var b = document.createElement("script");
        b.type = "text/javascript", b.async = !0, b.src = c, this.dcsReady(b, a), document.getElementsByTagName("head")[0].appendChild(b);
    },
    dcsReady:function(a, b) {
        a.readyState ? a.onreadystatechange = function() {
            ("loaded" == a.readyState || "complete" == a.readyState) && (a.onreadystatechange = null, 
            b());
        } :a.onload = function() {
            b();
        };
    }
};