+function ($) {
	var ismoe = false;
	$('[placeholder]').on("blur", function() {
		if(this.type=='text'){
			var b = $(this).val(),c = this.getAttribute("placeholder");
			return "" === b ? ($(this).val(c)) : (this.style.color='#555');
		}
	}).on("focus", function() {
		if(this.type=='text'){
			var a = $(this).val(), b = this.getAttribute("placeholder");
			return a === b ? ($(this).val(""),this.style.color='',this.focus()) : void 0;
		}
	});
	function setMsg(e){
		ismoe = false;
		$('#login-sub').removeClass('active');
		$('#msg').text(e);
	}
	function ref(){
		$('form').find('img').attr('src','http://www.ichano.cn/img/captcha?'+Math.floor(Math.random() * 100)).fadeIn();
	}
	$('#refreshimg').on('click',ref);
	$('#login-sub').on('click',function(e){
		if(ismoe){
			return ;
		}
		ismoe = true;
		$(this).addClass('active')
		var z = load.args(),f = z.split("&"),m='',l = load.setval({t:'m1',m:'m2',b:'m3',c:'m4',e:'m5',x:'m6'}),d="",o=new Object();
		Array.prototype.slice.call($('form').get(0).querySelectorAll('input')).forEach(function(a) {
			if(d)return;var b = a.value,c = a.getAttribute("placeholder")
			return (b==="" || b===c) ? d = a : o[a.name]=b;
		})
		if(d){
			return setMsg(d.getAttribute("placeholder")||l.e),d.focus();
		}
		var pat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!pat.test(o.account)) {
			return setMsg(l.x)
		}
		for (var d in f) {
			if (/m=/i.test(f[d])) {
				m = f[d].split("=")[1];
			}
		}
		if((o.pwd||'')===(o.epwd||'')){
			e.currentTarget.disabled="true"
			$.getJSON('http://www.ichano.cn/user/reg.do',{account: o.account,password:o.pwd,language:load.lang,userkey: m,type: 0,captcha: o.captcha},function(opt){
				if(opt.code!=undefined && opt.code==1000){
					return location.href = fallback;
				}
				if(opt.code=='1006'){
					setMsg(l.t);
				}else if(opt.code=='1004'){
					setMsg(l.m);
				}else{
					setMsg(l.b);
				}
				ref();
				e.currentTarget.removeAttribute('disabled')
			});
		}else{
			setMsg(l.c);
		}
	})
}(jQuery);