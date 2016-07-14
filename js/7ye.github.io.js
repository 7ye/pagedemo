function initParamJson(){
	var datajson = "./params.json";
	$.getJSON(datajson, function(data){
		var example1 = new Vue({
			el: '#navlist',
			data: {
				items: data
			}
		})
	});
}
$(document).ready(function(a) {
	//加载首页参数
	initParamJson();
});