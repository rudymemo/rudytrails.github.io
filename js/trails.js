var map = new BMapGL.Map('container');
var point = new BMapGL.Point(116.404, 39.925);
map.centerAndZoom(point, 5);
map.enableScrollWheelZoom(true);
var navi3DCtrl = new BMapGL.NavigationControl3D();  // 添加3D控件
map.addControl(navi3DCtrl);
// 创建城市选择控件
var cityControl = new BMapGL.CityListControl({
	// 控件的停靠位置（可选，默认左上角）
	anchor: BMAP_ANCHOR_TOP_LEFT,
	// 控件基于停靠位置的偏移量（可选）
	offset: new BMapGL.Size(10, 5)
});
// 将控件添加到地图上
map.addControl(cityControl);
map.setMapStyleV2({     
  styleId: '4451b1c86197a837621c030aa2eb4930'
});

var points = [
	// 北京
	{"lng":116.404, "lat":39.925, "title":"故宫", "img":"img/place/beijing/IMG_1416.JPG", "content":"第一次去北京跟我哥一起去的，很多人排队，当时有租学生证的，买票会便宜不少，哈哈！"} 
	,{"lng":116.303548, "lat":40.007763, "title":"圆明园遗址", "img":"img/place/beijing/IMG_0943.JPG", "content":"对雕刻艺术表示尊敬，不过没有近距离观察，放一张园内的风景吧。"}
	,{"lng":116.188382, "lat":39.990412, "title":"香山公园", "img":"img/place/beijing/IMG_0736.JPG", "content":"🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁🍁呢？"}
	,{"lng":116.296524, "lat":40.154127, "title":"盛辉公寓", "img":"img/place/beijing/IMG_0562.JPG", "content":"刚来北京时候的落脚点。这是周边的农贸市场，现在估计应该没了吧。"}
	,{"lng":116.264333, "lat":40.165005, "title":"北街家园", "img":"img/place/beijing/tianAnMen.jpg", "content":"从盛辉公寓搬到北街家园，听说郭德纲姚明在前面的玫瑰园有房子，可惜没时间去拜访~~"}
	,{"lng":116.294679, "lat":40.264869, "title":"莽山森林公园", "img":"img/place/beijing/tianAnMen.jpg", "content":"自由总是与痛苦相伴，幸福却往往失去自由。大多数人都是选择走第二条路。"}
	,{"lng":116.262774, "lat":40.259433, "title":"十三陵水库", "img":"img/place/beijing/IMG_1536.JPG", "content":"曾驾驭小黄车绕水库骑行，与别人的山地车和公路自行车格格不入，回头率反正不低，贼尴尬~然后傻傻的去追逐落日。"}
	,{"lng":117.277318, "lat":40.654251, "title":"古北水镇", "img":"img/place/beijing/IMG_0601.JPG", "content":"来北京第一年公司组织团建去的地方，风景不错，有古北水镇、司马台长城。第一次玩三国杀，现在完全忘记怎么玩了。"}
	,{"lng":116.079159, "lat":40.296972, "title":"居庸关", "img":"img/place/beijing/IMG_1107.JPG", "content":"从下面看很雄伟，爬的时候也很陡，最陡的地方几乎要直上直下了。"}
	// 秦皇岛
	,{"lng":119.541332, "lat":39.826987, "title":"北戴河", "img":"img/place/beijing/IMG_2120.JPG", "content":"汪国真在《假如你不够快乐》中写到：假如你不够快乐，也不要把眉头深锁，人生本来短暂，为什么还要栽培苦涩？打开尘封的门窗，让阳光雨露洒遍每个角落，走向生命的原野，让风儿熨平前额。"}
	// 内蒙古
	,{"lng":117.227612, "lat":42.602345, "title":"乌兰布统风景区", "img":"img/place/beijing/IMG_2169.JPG", "content":"好朋友来北京玩，带去草原转了一圈，这是他辞职创业的开始，祝好。"}
	// 承德
	,{"lng":117.464597, "lat":40.594467, "title":"雾灵山风景区", "img":"img/place/beijing/IMG_0659.JPG", "content":"天然氧吧。下山的时候不注意滑了一跤，摔的不轻，不过没事，那时候还年轻呢！"}
	
	// 大连
	,{"lng":121.588799, "lat":38.876344, "title":"星海湾", "img":"img/place/dalian/xinghaiwan.jpg", "content":"我们所有人的当下，都只是行走在未来的飘忽不定的记忆中罢了。"}
	,{"lng":121.693195, "lat":38.932155, "title":"猫の天空之城", "img":"img/place/dalian/theairofcat.jpg", "content":"猫の天空之城概念书店，可以撸猫哦。类似的还有喵星球、猫小院～～"}
	
	// 济南
	
	// 青岛
	
	// 老家
	
	// 南京
	
	// 上海
	
	// 苏州
	
	// 杭州
	
	// 佛山
	
	// 东莞
	
	// 深圳
	
	// 香港
	
	// **************にほん*****************
	// 名古屋市
	,{"lng":136.908344, "lat":35.172324, "title":"名古屋电视塔", "img":"img/place/dalian/theairofcat.jpg", "content":"附近转悠了一圈，在商场帮朋友买了一个YSL口红。去HYSTERIC MINI店里帮嫂子问了一下包没找到。"}
	,{"lng":136.909072, "lat":35.125538, "title":"热田神宫", "img":"img/place/dalian/theairofcat.jpg", "content":"独自出门坐地铁按照地图去了热田神宫，回来在松屋吃了碗拉面，然后去超市买了点东西，算是没有障碍吧。"}
	
	// 京都府
	,{"lng":135.729218, "lat":35.039421, "title":"金阁寺", "img":"img/place/dalian/theairofcat.jpg", "content":"学习日本语的时候老师经常说到金阁寺银阁寺，这次只去了金阁寺，都说穿金不如戴银，期待下次去了。"}
	,{"lng":135.78419, "lat":34.995892, "title":"清水寺", "img":"img/place/dalian/theairofcat.jpg", "content":"学习日本语的时候老师经常说到金阁寺银阁寺，这次只去了金阁寺，都说穿金不如戴银，期待下次去了。"}
	,{"lng":135.780907, "lat":34.99637, "title":"二年坡和三年坡", "img":"img/place/jingdu/wallhaven-2eq3gg.jpg", "content":"很有风格的一个地方，找网图代替了，当时拍的不是很好，没有全景，人也挺多的。"}
	,{"lng":135.775185, "lat":35.005115, "title":"花见小路", "img":"img/place/jingdu/wallhaven-2eq3gg.jpg", "content":"很有风格的一个地方，找网图代替了，当时拍的不是很好，没有全景，人也挺多的。"}
	,{"lng":135.748219, "lat":35.014229, "title":"二条城", "img":"img/place/jingdu/wallhaven-2eq3gg.jpg", "content":"很有风格的一个地方，找网图代替了，当时拍的不是很好，没有全景，人也挺多的。"}
	,{"lng":135.747934, "lat":34.994769, "title":"FUJITAYAKYOTO", "img":"img/place/jingdu/wallhaven-2eq3gg.jpg", "content":"京都居住的酒店，在那里跟一群素昧平生的人一起跨年。伴随着跨年夜的钟声，有日本小哥给做的年糕果腹，有纽约小弟的WHISKY助兴，有意大利的摄影师做纪念，有香港的妹纸来翻译，有深圳的银行家的法国故事，还有凑了两双耳朵的程序员，哈哈，不亦乐乎！"}

	// 大阪府
	
	// 神戸市
	
	
	]
function addMarker(point){
	var pointObj = new BMapGL.Point(point.lng, point.lat);
	var marker = new BMapGL.Marker(pointObj);
	
	map.addOverlay(marker);
	// 创建图文信息窗口
	if (point.title !== "") {
		// 创建小车图标
		var myIcon = new BMapGL.Icon("./img/custom/sign.png", new BMapGL.Size(52, 26));
		// 创建Marker标注
		// var marker = new BMapGL.Marker(pointObj, {icon: myIcon});
		var marker = new BMapGL.Marker(pointObj);
		map.addOverlay(marker);
		var sContent = `<h4 style='margin:0 0 5px 0;'>`+point.title+`</h4>
			<img style='float:right;margin:0 4px 22px' id='imgDemo' src='`+point.img+`' width='139' height='104'/>
			<p style='margin:0;line-height:1.5;font-size:13px;text-indent:2em'>
			`+point.content+`
			</p></div>`;
		var infoWindow = new BMapGL.InfoWindow(sContent); // 创建信息窗口对象
		marker.addEventListener("click", function(){
			this.openInfoWindow(infoWindow);
		});
	}
}

for (var i = 0; i < points.length; i++) {
	addMarker(points[i]);
}
$(".anchorBL").eq(0).remove();