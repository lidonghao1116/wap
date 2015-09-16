<%@ page language="java" contentType="text/html; charset=utf-8"
    pageEncoding="utf-8"%>
<html><head>
<meta charset="utf-8">
<title>分期商城</title>
<meta content="width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0, user-scalable=0" name="viewport">
<meta http-equiv="content-language" content="zh-cn">
<meta http-equiv="x-ua-compatible" content="ie=emulateie9">
<meta name="copyright" content="本页版权归中国平安所有。All Rights Reserved">
<meta name="robots" content="index,follow">
<meta name="author" content="中国平安">
<meta name="generator" content="Dreamweaver">
<style>
*{margin:0;padding:0}
a img{border:none;}
.clear{clear:both}
.app_fqsc{width:100%;background:#ededf3;padding:0 0 1.5rem 0}
.app_fqsc p.tHead{font-size:1.4rem;font-family:"黑体";font-weight:bold;color:#000;padding:0 1.5rem;height:4rem;line-height:4rem}
.app_fqsc div.banner{height:140px}
.app_fqsc div.downLoad{background:#fff;border-bottom:1px solid #C8C8C8;padding:1rem 1.5rem}
.app_fqsc div.downLoad p.tt{color:#999999;font-size:1.3rem;font-family:"黑体";height:3rem;}
.app_fqsc div.downLoad a{width:46%}
.app_fqsc div.downLoad img{width:100%}
.app_fqsc div.downLoad .ios_btn{float:left}
.app_fqsc div.downLoad .and_btn{float:right}

.app_fqsc div.fqsc_nav{width:100%;overflow:scroll;overflow-y:hidden;height:8rem}
.app_fqsc div.fqsc_nav ul{width:76rem;height:6rem;padding:0 1.5rem 1rem 0;margin:0 0 0 1.5rem;position:relative;border-bottom:1px solid #CCCCCC}
.app_fqsc div.fqsc_nav ul li{width:6rem;float:left;margin:0 1rem 0 0;list-style:none}
.app_fqsc div.fqsc_nav ul li.last{margin:0}

.app_fqsc div.fqsc_nav ul li a{border:1px solid #ccc;border-radius:0.5rem;text-decoration:none;display:inline-block;width:6rem;height:6rem;position:relative;background:#fff;}
.app_fqsc div.fqsc_nav ul li a p{color:#333;position:absolute;left:0;width:100%;bottom:0;text-align:center;font-size:0.8rem;font-family:"黑体";height:1.8rem;line-height:1.8rem;font-weight:bold}
.fqsc_nav img{width:100%;border-radius:0.5rem;}
.app_fqsc div.chooseInner{padding:0 1.5rem}
.app_fqsc div.chooseInner .choose{border:1px solid #C8C8C8;border-radius:0.25rem;margin:0 0 1.5rem 0}
.app_fqsc div.chooseInner div.last{margin:0 0 0 0}
.app_fqsc div.chooseInner .choose a.top{text-decoration:none;display:block;height:4rem;background:url("http://3.jkimg.net/app_images/wanlitong/v40/wap/appStore/article_bg.jpg") no-repeat;background-size:cover;padding:0.5rem;position:relative;border-bottom:1px solid #C8C8C8;}
.app_fqsc div.chooseInner .choose a.top dl dt{padding:0.3rem 0;float:left;display:inline-block;margin:0 1.2rem 0 0}
.app_fqsc div.chooseInner .choose a.top dl dt img{width:3.4rem;}
.app_fqsc div.chooseInner .choose a.top dl dd{float:left}
.app_fqsc div.chooseInner .choose a.top dl dd p.t{font-size:1.4rem;height:2.4rem;line-height:2.4rem;font-family:"方正兰亭中黑_GBK";color:#000;font-weight:bold}
.app_fqsc div.chooseInner .choose a.top dl dd p.d{font-size:1.1rem;height:1.6rem;line-height:1.6rem;font-family:"黑体";color:#666666;font-weight:bold}
.app_fqsc div.chooseInner .choose a.top span.r_arrow{background:url("http://3.jkimg.net/app_images/wanlitong/v40/wap/appStore/r_arrow.png") no-repeat center center;background-size:0.5rem;display:inline-block;position:absolute;height:5rem;width:0.5rem;top:0;right:1rem;}
.app_fqsc div.chooseInner .choose .pro{padding:1.2rem 0;background:#fff;text-align:center}
.app_fqsc div.chooseInner .choose .pro img{width:46%;border: #ededed solid 1px;border-radius: 3px;}
.app_fqsc div.chooseInner .choose .pro img.l{margin:0 1% 0 0;border: #ededed solid 1px;border-radius: 3px;}
.app_fqsc .dis_block{display:block}

.img_ad{ height:140px; width:320px; margin:0 auto; overflow:hidden;position:relative;}
.img_ad img{width:320px; height:140px;}
.img_wrap{position:absolute;left:0; top:0;height:140px; width:320px; background:#666;}
.img_wrap ul{position:absolute; left:0px;}
.img_wrap ul li{ list-style:none;float:left;display:inline;height:140px; width:320px;}
.imgFlashIco{width:54px;overflow:hidden; margin:0 auto; position:relative; top:-15px; }
.imgFlashIco li{background:url(http://3.jkimg.net/app_images/wanlitong/v40/wap/appStore/ico_base.png) no-repeat 0 0;  list-style:none;float:left; width:10px; margin-left:6px; text-align:center;height:10px; cursor:pointer;}
.imgFlashIco li.on{ background:url(http://3.jkimg.net/app_images/wanlitong/v40/wap/appStore/ico_base.png) no-repeat 0 -18px;}
.imgFlashSpan{ display:inline-block; height:26px;line-height:26px;  color:#F00;overflow:hidden;margin-left:8px; cursor:pointer;}
@media only screen and (max-width:480px) {
    html {
        font-size:75%;
    }
}
@media only screen and (min-width:481px) and (max-width:720px) {
    html {
        font-size:125%;
    }
}
@media only screen and (min-width:721px) {
    html {
        font-size:150%;
    }
}
#store_ul li:last-child{
	margin-right:0px;
	}
</style>
<link rel="stylesheet" href="/wap/athome/css/carousel.css">

<body>
	<div class="app_fqsc">
	<div class="banner">
	</div>
<div class="downLoad">
  <p class="tt">下载万里通APP查看更多</p>
  <p>
   <a class="ios_btn" href="https://itunes.apple.com/cn/app/wan-li-tong/id608091269?mt=8"><img src="http://3.jkimg.net/app_images/wanlitong/v40/wap/appStore/ios_btn.jpg" alt="iphone下载"></a>
   <a class="and_btn" href="http://h1.jkimg.net/mobilecms/client/wanlitong_v370-3-mobileappcms.wanlitong.com.apk"><img src="http://3.jkimg.net/app_images/wanlitong/v40/wap/appStore/and_btn.jpg" alt="安卓下载"></a>
  </p>
  <div class="clear"></div>
</div>   
	<p class="tHead">所有分类</p>
	<div class="fqsc_nav" id="store_nav">
		<ul id="store_ul" style="width: 91rem;">	
	
		<li><a href="fqsc.jsp?v=410"><img src="http://h4.jkimg.net/mobilecms/activity/20141022/20141022151344_73781.jpg"><p>苹果</p></a></li><li><a href="fqsc.jsp?v=412"><img src="http://h4.jkimg.net/mobilecms/activity/20141022/20141022151602_51446.jpg"><p>小米</p></a></li><li><a href="fqsc.jsp?v=414"><img src="http://h2.jkimg.net/mobilecms/activity/20141022/20141022152345_98727.jpg"><p>三星</p></a></li><li><a href="fqsc.jsp?v=434"><img src="http://h2.jkimg.net/mobilecms/activity/20141023/20141023170643_38516.jpg"><p>精品腕表</p></a></li><li><a href="fqsc.jsp?v=436"><img src="http://h4.jkimg.net/mobilecms/activity/20141023/20141023171512_42874.jpg"><p>黄金藏品</p></a></li><li><a href="fqsc.jsp?v=438"><img src="http://h1.jkimg.net/mobilecms/activity/20141023/20141023171710_74857.jpg"><p>美酒佳酿</p></a></li><li><a href="fqsc.jsp?v=758"><img src="http://h4.jkimg.net/mobilecms/activity/20141114/20141114153337_88217.jpg"><p>生活电器</p></a></li><li><a href="fqsc.jsp?v=872"><img src="http://h2.jkimg.net/mobilecms/activity/20141125/20141125152240_65493.jpg"><p>数码精品</p></a></li><li><a href="fqsc.jsp?v=628"><img src="http://h2.jkimg.net/mobilecms/activity/20150116/20150116102935_40341.jpeg"><p>服装配饰</p></a></li><li><a href="fqsc.jsp?v=670"><img src="http://h1.jkimg.net/mobilecms/activity/20141117/20141117152523_28031.jpg"><p>汽车生活</p></a></li><li><a href="fqsc.jsp?v=836"><img src="http://h3.jkimg.net/mobilecms/activity/20141119/20141119152542_94496.jpg"><p>温馨家纺</p></a></li><li><a href="fqsc.jsp?v=892"><img src="http://h4.jkimg.net/mobilecms/activity/20150109/20150109134316_85797.jpeg"><p>兰蔻</p></a></li><li><a href="fqsc.jsp?v=962"><img src="http://h3.jkimg.net/mobilecms/activity/20141222/20141222152339_31919.jpg"><p>美容瘦身</p></a></li></ul>
	</div>
	<p class="tHead">精选推荐</p>
	<div class="chooseInner">
		
		<div class="choose"><a href="fqsc.jsp?v=410" class="top"><dl><dt><img src="http://h1.jkimg.net/mobilecms/activity/20141023/20141023165709_75564.png"></dt><dd><p class="t">苹果扫货专场</p><p class="d">iPhone 6 16G 公开版火爆开售</p></dd></dl><span class="r_arrow"></span>	</a><div class="pro"><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=10&amp;productId=00243513&amp;timestamp" target="_blank" otype="button"><img class="l" src="http://h2.jkimg.net/mobilecms/activity/20150126/20150126111338_58266.jpeg"></a><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=7&amp;productId=00243162&amp;timestamp" target="_blank" otype="button"><img src="http://h2.jkimg.net/mobilecms/activity/20150128/20150128173456_78952.jpeg"></a></div></div><div class="choose"><a href="fqsc.jsp?v=412" class="top"><dl><dt><img src="http://h2.jkimg.net/mobilecms/activity/20141023/20141023170030_81116.png"></dt><dd><p class="t">小米专区</p><p class="d">官网抢不到，万里通特供</p></dd></dl><span class="r_arrow"></span>	</a><div class="pro"><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00218802&amp;timestamp" target="_blank" otype="button"><img class="l" src="http://h1.jkimg.net/mobilecms/activity/20141030/20141030171044_99056.jpg"></a><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00229897&amp;timestamp" target="_blank" otype="button"><img src="http://h2.jkimg.net/mobilecms/activity/20141127/20141127104725_61973.jpg"></a></div></div><div class="choose"><a href="fqsc.jsp?v=414" class="top"><dl><dt><img src="http://h1.jkimg.net/mobilecms/activity/20141023/20141023170326_63237.png"></dt><dd><p class="t">三星专区</p><p class="d">Galaxy Note 4霸气首发</p></dd></dl><span class="r_arrow"></span>	</a><div class="pro"><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00220353&amp;timestamp" target="_blank" otype="button"><img class="l" src="http://h3.jkimg.net/mobilecms/activity/20150107/20150107153734_11317.jpeg"></a><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00229914&amp;timestamp" target="_blank" otype="button"><img src="http://h3.jkimg.net/mobilecms/activity/20141127/20141127104715_32547.jpg"></a></div></div><div class="choose"><a href="fqsc.jsp?v=434" class="top"><dl><dt><img src="http://h4.jkimg.net/mobilecms/activity/20141023/20141023172343_50241.png"></dt><dd><p class="t">精品腕表专区</p><p class="d">经典手表，新年特惠</p></dd></dl><span class="r_arrow"></span>	</a><div class="pro"><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00252168&amp;timestamp" target="_blank" otype="button"><img class="l" src="http://h3.jkimg.net/mobilecms/activity/20150116/20150116145825_89985.jpeg"></a><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00252157&amp;timestamp" target="_blank" otype="button"><img src="http://h1.jkimg.net/mobilecms/activity/20150116/20150116145855_99143.jpeg"></a></div></div><div class="choose"><a href="fqsc.jsp?v=436" class="top"><dl><dt><img src="http://h3.jkimg.net/mobilecms/activity/20141023/20141023172517_45481.png"></dt><dd><p class="t">黄金藏品专区</p><p class="d">珠光宝气，欢喜过大年</p></dd></dl><span class="r_arrow"></span>	</a><div class="pro"><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00252381&amp;timestamp" target="_blank" otype="button"><img class="l" src="http://h4.jkimg.net/mobilecms/activity/20150116/20150116150452_71404.jpeg"></a><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00228981&amp;timestamp" target="_blank" otype="button"><img src="http://h3.jkimg.net/mobilecms/activity/20150116/20150116150507_80790.jpeg"></a></div></div><div class="choose"><a href="fqsc.jsp?v=758" class="top"><dl><dt><img src="http://h4.jkimg.net/mobilecms/activity/20141114/20141114155050_65233.jpg"></dt><dd><p class="t">生活电器专区</p><p class="d">认真生活，守护家人健康</p></dd></dl><span class="r_arrow"></span>	</a><div class="pro"><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00218400&amp;timestamp=1415946270409" target="_blank" otype="button"><img class="l" src="http://h1.jkimg.net/mobilecms/activity/20141114/20141114155057_99498.jpg"></a><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00225714&amp;timestamp=1415946270409" target="_blank" otype="button"><img src="http://h1.jkimg.net/mobilecms/activity/20141114/20141114163249_65258.jpg"></a></div></div><div class="choose"><a href="fqsc.jsp?v=628" class="top"><dl><dt><img src="http://h1.jkimg.net/mobilecms/activity/20150116/20150116133200_14038.jpeg"></dt><dd><p class="t">服装配饰</p><p class="d">iPhone6钱包 限量抢购</p></dd></dl><span class="r_arrow"></span>	</a><div class="pro"><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00251933&amp;timestamp" target="_blank" otype="button"><img class="l" src="http://h3.jkimg.net/mobilecms/activity/20150116/20150116133210_99874.jpeg"></a><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00251940&amp;timestamp" target="_blank" otype="button"><img src="http://h1.jkimg.net/mobilecms/activity/20150116/20150116133243_50686.jpeg"></a></div></div><div class="choose"><a href="fqsc.jsp?v=438" class="top"><dl><dt><img src="http://h2.jkimg.net/mobilecms/activity/20141125/20141125141220_69213.jpg"></dt><dd><p class="t">美酒佳酿</p><p class="d">全球美酒聚集，优惠分期</p></dd></dl><span class="r_arrow"></span>	</a><div class="pro"><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00263761&amp;timestamp" target="_blank" otype="button"><img class="l" src="http://h1.jkimg.net/mobilecms/activity/20150205/20150205173558_77012.jpeg"></a><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00263797&amp;timestamp" target="_blank" otype="button"><img src="http://h2.jkimg.net/mobilecms/activity/20150205/20150205173628_55490.jpeg"></a></div></div><div class="choose"><a href="fqsc.jsp?v=872" class="top"><dl><dt><img src="http://h3.jkimg.net/mobilecms/activity/20141126/20141126174305_93769.jpg"></dt><dd><p class="t">数码精品</p><p class="d">华硕、华为、HTC等全线特惠！</p></dd></dl><span class="r_arrow"></span>	</a><div class="pro"><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00253617&amp;timestamp" target="_blank" otype="button"><img class="l" src="http://h1.jkimg.net/mobilecms/activity/20150204/20150204174230_32779.jpeg"></a><a href="http://m.pingan.com/c3/xinyongka/shangcheng/shangpin.html?saleTypeId=4&amp;productId=00249472&amp;timestamp" target="_blank" otype="button"><img src="http://h1.jkimg.net/mobilecms/activity/20150112/20150112104607_88133.jpeg"></a></div></div></div>
		
	

		
	</div>	
		    <div class="last">
			<a href="http://kffz.wanlitong.com/new/client.php?m=mobile&amp;arg=admin&amp;WT.mc_id=0011040103121801" target="_blank" otitle="客服" otype="button"><img style="width:100%" src="http://3.jkimg.net/app_images/wanlitong/v40/wap/appStore/kefu.jpg"></a>
		</div>
<script data-main="/wap/athome/home.js" src="/wap/lib/require/require.min.js"></script>
</body></html>