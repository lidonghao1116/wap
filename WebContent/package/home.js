var BASE_DOMAIN='http://member3.ichano.cn/user',F_ACTION="/wap";
loadScript(F_ACTION+'/lib/jquery/jquery-1.9.1.min.js',function(){
    $(function () {
        var API_ACT = BASE_DOMAIN + '/api/wap/cidlist';
        var array = new Array(),pack = new Array(),user,utime,lang='1',isLite=false;
        var f_info = location.href.split('?'),q_str = '',sid='',cid='',lite;
		if (f_info.length >= 2) {
            lite=f_info[1].split("#")
            if(lite.length >= 2){
                f_info[1]=lite[0];
                if($.inArray("lite",lite)>0) isLite=true;
            }
			var a = new Object(),b = f_info[1],d = b.split("&");
			for (var c in d) {
				if (/sessionid=/i.test(d[c])) {
					sid = d[c];
				}else if(/cid=/i.test(d[c])) {
					cid = d[c];
				}else if(/lang=/i.test(d[c])) {
					lang = d[c].split("=")[1];
				}
				q_str += d[c] + "&";
			}
			q_str = API_ACT+"?"+q_str.substr(0, q_str.length - 1);
		}
        $.ajax({type: 'GET',dataType: 'jsonp',jsonp: 'callback',jsonpCallback:"success_callback",url: q_str,success: BASE_SUCCESS});//result.lang
        function BASE_SUCCESS(result){
            if (result.list instanceof Array) {
            	array = result.list;
            }
            if (result.pack instanceof Array) {
            	pack = result.pack;
            }
            if (result.user instanceof Object) {
            	user = result.user;
            }
            javascripts();
            if (result.code == '1000') {
                return pageinfo(initPage)
            }
        }
        function javascripts(){
            loadScript(F_ACTION+"/package/files/lang.js", function(){
                var lg = langage[lang];
                $('[data-text]').each(function(){
                    $(this).append(lg[$(this).data().text]);
                });
            });
        }
        function pageinfo(f){
            var time;
            loadScript(F_ACTION+"/lib/page/simplePagination.js", function(){ 
                time = setInterval(function(){
                    if(typeof langage ==='object'){
                        f(),userjs(),clearInterval(time),time=null;
                    }
                },500);
            	
            })
        }
        function initPage(){
            $("#pagination").pagination({
                items: array.length,
                currentPage: 1,
                itemsOnPage: 6,
                nextText: langage[lang].nextPg,
                onPageClick:function(a,n){
                    $(".spec-table").empty(),innHtml(this);
                },
                onInit:function(){
                    innHtml(this);
                }
            })
        }
        function innHtml(page){
            var s = page.currentPage*page.itemsOnPage,e=(page.pages==(page.currentPage+1)?page.items:(s+page.itemsOnPage));
        	for (var i = s; i < e; i++) {
        		add(i)
	        }
            wrapper();
        }
        function wrapper(){
            if($('.body-wrapper').hasClass('hide')) $('.body-wrapper').removeClass('hide'),$('#load').hide();
        }
        function add(i){
        	var tab = $('<div class="row">'+
					'	<div class="r-title">'+
					'		<i class="icon i-'+array[i].type+'"></i>'+
					'		<div class="tel">'+
					'			<h3 class="ak-size15">'+array[i].cuser+'</h3>'+
					'			<p class="cid_code">CID: '+array[i].cid+'</p>'+
					'		</div>'+
					'	</div>'+
    				'</div>');
            array[i].code && (isLite || array[i].code=='1004'? btnpoint(tab,i,array[i].time):btnul(tab,i))
            return $(".spec-table").append(tab);
        }
        function btnul(to,i){
            var point='',tree=(langage[lang]).free||'',tab=$('<div class="r-button"><ul></ul></div>');
        		for (var j = 0; j < pack.length; j++) {
					if(pack[j].status==0){
						var li = $('<li><div class="color"><a href="#this" price="'+pack[j].currencysign+pack[j].price+'" text="'+pack[j].pacobjname+'" class="button button-glow button-border button-primary">'+pack[j].pacobjname+'</a></div></li>');
						if(pack[j].pointratio==1){
							li.find('a').attr({'price': pack[j].pacobjname,'text': tree}).html(tree)
						}
                        li.on('click',[i,j],postform);
						if(pack[j].poindex==4) point=li;
						else tab.find('ul').append(li);
					}
        		}
        		tab.find('ul').append(point);
        		
        		tab.find("ul>li").each(function(){
            		$(this).find('a').mouseover(function(){
    	            	$(this).html(this.getAttribute('price')).animate({'text-shadow': '0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3)','text-transform': 'uppercase'})
    	            }).mouseout(function(){
    	            	$(this).html(this.getAttribute('text')).animate({'text-shadow': '0 0 1px white, 0 1px 2px rgba(0, 0, 0, 0.3)','text-transform': 'uppercase'})
    	            });
            	});
            return to.find('div.r-title').after(tab);
        }
        function btnpoint(to,i,tm){
            var p = to.find('div.r-title'),r = p.siblings('div.r-point'),data = [i];
            if(true){
                return setHtml(p,r).on('click','a',data,pointClick);
            }
            fonut404(p)
        }
        function pointClick(e){
            var obj=array[e.data[0]],i=3,page,type = this.getAttribute('type')
				if(type==='d') i = 4;
				page = pack[i];
            return getMethod(obj,page);
        }
        function userjs(){
        	$('.account').html(langage[lang].account+user.account);
        	$('.point').html(langage[lang].surplus+user.point);
        }
        function postform(a){
        	var obj=array[a.data[0]]
        		page=pack[a.data[1]]
            if(page.pointratio==1){
                return point(a)
            }
			return getMethod(obj,page);
        }
        function message(obj){
            var lag=langage[lang],msg = lag.message,rtn = new Object(),isv = isPoint(),num=obj.duration,unit={1:{m:'个月',d:'天'},2:{m:'month',d:'day'},3:{m:'個月',d:'天'}}[lang];
            rtn.body=(isv?msg.s:msg.p).replace('#price',obj.price+(obj.currencysign||'')).replace('#number',isv?num:(num+(num==1?unit.m:unit.d)));
            rtn.title=isv?lag.altl:lag.albd;
            rtn.buttons=[msg.k,msg.c]
            function isPoint(){
                return obj.pointratio==0;
            }
            return rtn;
        }
		function getMethod(obj,page){
            var msg = message(page),buttons = new Object();
            if(page.price>user.point){
                var lag=langage[lang]
                buttons[msg.buttons[0]] = function(){
                    this.hide()
                }
                return lib.modal({title:lag.message.mt,body:lag.message.mb,buttons: buttons})
            }
            buttons[msg.buttons[0]] = function(){
                var data={
        			poid:page.id,
        			avscid:obj.cid,
        			currency:page.currency,
                    language: lang,
        			account:user.account,
        			paytype:'0',
        			coupon:''
        		}
                var action = BASE_DOMAIN+'/websuborderview';
                if (data instanceof Object) {
                    var frm = $('<form action="'+action+'" method="get"></form>')
                    for(var o in data){
                        frm.append('<input name="'+o+'" value="'+data[o]+'" />')
                    }
                    var s = sid.split("="),v = s[1].split("#");
                    frm.append('<input name="'+s[0]+'" value="'+v[0]+'" />');
                    frm.appendTo("body").submit();
                }
            }
            buttons[msg.buttons[1]] = function(){
                this.hide()
            }
            lib.modal({title:msg.title,body:msg.body,buttons: buttons})
		}
        function point(e){
            var p = $(e.currentTarget).parents('div.r-button'),r = p.siblings('div.r-point'),data = e.data;
            return setHtml(p,r).on('click','a',data,pointClick);
        }
        function setHtml(p,r){
            var point = langage[lang].point;
            if(!r.length){
                p.after('<div class="r-point in"></div>')
				var m = $('<div class="span12"><span>'+point.month+'</span><a type="m" class="button">'+point.change+'</a></div>'),
					d = $('<div class="span12"><span>'+point.date+'</span><a type="d" class="button">'+point.change+'</a></div>');
					t = '<div class="span12"><p>'+point.explain+'</p></div>'
				return p.next().append(m,d,t)
            }
            if(r.hasClass('in')){
                return r.removeClass('in')
            }
            return r.addClass('in')
        }
        function fonut404(p){
            var tyb = langage[lang].tyb;
            p.after('<div class="r-point in"></div>')
            var m = $('<div class="span12 error">'+tyb+'</div>');
            return p.next().append(m)
        }
    });
});
!function(c) {
    var MCLASS = "modal";
    var b = document,me = b.getElementById("myModal");
    Object.keys = Object.keys || function(obj){
        if (obj !== Object(obj)){
            return;
        }
        var arr = [];
        for(var i in obj){
            if(Object.prototype.hasOwnProperty.call(obj,i)){
                arr.push(i)
            }
        }
        return arr;
    };
    var Modal = function(e) {
        this.o = {t:'',m:''};
        typeof e == 'object' && this.set(e)
        this.k();
    }
    Modal.prototype.h = function(g, d, e) {
        var c = b.createElement(g);
        d && (c.className = d), e && (c.innerHTML = e);
        return c;
    }
    Function.prototype.bind=function (obj){
    	var method = this;
    	return function() {
    		return method.apply(obj, arguments);
    	}
    }
    Modal.prototype.i = function(c) {
        c.innerHTML='';
        var _t = this,v,i=0,b=this.o.b,clas = Object.keys(b).length==1?'btn btn-d':'btn btn-m';
        for(var s in b){
            v=this.h('a',clas+(i++),s);
            v.onclick = this.o.b[s].bind(_t);
            c.appendChild(v);
        }
        return c;
    }
    Modal.prototype.hide = function(o){
        me.className=MCLASS;
        b.body.style.overflow=''
    }
    Modal.prototype.c = function(e) {
        var l = e.className;
        l.indexOf('in')>0? l=MCLASS : l+=" in";
        tag('h3',this.o.t),tag('p',this.o.m),this.i(e.getElementsByTagName('div')[1]);
        function tag(k,v){
            e.getElementsByTagName(k)[0].innerHTML = v;
        }
        b.body.style.overflow='hidden',e.className=l
    }
    Modal.prototype.m = function(c) {
    	var _t = this,g = _t.h('div',MCLASS+'-content'),f = _t.h("div", MCLASS + "-footer");
    	g.appendChild(_t.h("h3", "", _t.o.t)),g.appendChild(_t.h("p", "", _t.o.m)),g.appendChild(f);
    	c.id="myModal",c.appendChild(g),b.body.style.overflow='hidden',b.body.appendChild(c),_t.i(f),_t.size(g);
    	window.onresize = function(){
    		_t.size(g);
    	}
    }
    Modal.prototype.size = function(g) {
    	var ml = (document.body.clientWidth*0.25)-(g.clientWidth/2);
		g.style.marginLeft = (ml<0?0:ml)+'px';
    }
    Modal.prototype.k = function() {
        me==null ? (me=this.h("div", MCLASS+" in"),this.m(me)) : this.c(me);
    }
    Modal.prototype.set = function(o){
        this.o.t=o.title;
        this.o.m=o.body;
        this.o.b=o.buttons;
    }
    c.modal = function(o){
       return new Modal(o)
    }
}(window.lib || (window.lib = {}))
function loadScript(a, b) {
	var c = document.createElement("script");
	c.type = "text/javascript",
	c.async = !0,
	c.src = a,
	dcsReady(c, b),
	document.getElementsByTagName("head")[0].appendChild(c)
}
function dcsReady(a, b) {
	a.readyState ? a.onreadystatechange = function() { ("loaded" == a.readyState || "complete" == a.readyState) && (a.onreadystatechange = null, b())
	}: a.onload = function() {
		b()
	}
}