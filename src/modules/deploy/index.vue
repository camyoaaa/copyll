<template>
  <div>
    <!-- 加载图标开始 -->

    <div id="wrapper">
      <top-header />
      <!-- 主内容区开始 -->
      <div class="page-container" style="height:100%">
        <sider-bar />
        <!-- 页面切换内容区 -->
        <mainContent />
      </div>
      <!-- 遮罩层 -->
      <div id="wrapperCover"></div>
    </div>
    <!-- ngIf: !!ispc -->
    <div class="page-footer ng-scope">
      <pageFooter />
    </div>
    <!-- end ngIf: !!ispc -->
    <!-- <script src="./lieliu_files/jquery-1.8.0.min.js"></script>
<script src="./lieliu_files/fly-zomm-img.min.js"></script>
<script src="./lieliu_files/fengs.3.0.js"></script>
<script src="./lieliu_files/angular.min.js"></script>
<script src="./lieliu_files/plugins.min.js"></script>
<script src="./lieliu_files/crypto.js"></script>
<script src="http://js.kehuda.cn/3.0/fengs.js"></script>
<script>
Fengs.config({'name': 'js', 'path': '/', 'remote': {'api': ['/'], 'js': ["https://file.cd-vv.com/3.0","https://file.cd-vv.net/3.0"]}, 'locals': [], 'tag': '111100', 'lib': ['jQuery', 'angular'], 'depend': ['moment']}).fail(function(result){
	if(result.count > 3){
		var loc = location
		if(loc.protocol === 'https:'){
			var url = 'http://'+ loc.host + loc.pathname;
			url += loc.search === '' ? '?https=0' : loc.search;
			loc.href = url;
		};
		return false;
	}else{
		return true;
	};
});
</script>
	<script>
	Fengs.use(function(S, $, A){
		//判断终端用户类型
		var agent = this.navigator.userAgent 																//UA
			, ispc = agent.match(/(Android|iPhone|SymbianOS|Windows\ Phone|iPad|iPod)/i) === null			//判断移动端
			, isie = agent.match(/(msie)/i) !== null;														//判断IE
		S.set('ispc', ispc);
		//开始加载模块
		S.use('lieliu/main');
		//$('[name="viewport"]').attr('content', 'initial-scale=0.8, maximum-scale=0.8, user-scalable=no');
	});
	</script>
	
	<div id="tongjiqi"><script src="./lieliu_files/hm.js"></script></div>
	
	<script type="text/javascript">
	$(function(){
        document.addEventListener('touchstart',function (event) {
          if(event.touches.length>1){
            event.preventDefault();
          }
        });
        var lastTouchEnd=0;
        document.addEventListener('touchend',function (event) {
          var now=(new Date()).getTime();
          if(now-lastTouchEnd<=300){
            event.preventDefault();
          }
          lastTouchEnd=now;
        },false);
        document.addEventListener('gesturestart', function (event) {
          event.preventDefault();
        });
	});
	</script>
-->

    <input
      id="textAngular-editableFix-010203040506070809"
      style="width:1px;height:1px;border:none;margin:0;padding:0;position:absolute; top: -10000; left: -10000;"
      unselectable="on"
      tabindex="-1"
    />
  </div>
</template>

<script>
import topHeader from "./topHeader";
import siderBar from "./siderBar";
import mainContent from "./mainContent";
import pageFooter from "./pageFooter";

export default {
  components: { topHeader, siderBar, mainContent, pageFooter },
  data() {
    return {
      ispc: true,
      isie: false
    };
  },
  created() {
    //判断终端用户类型
    let agent = window.navigator.userAgent; //UA
    let deviceReg = /(Android|iPhone|SymbianOS|Windows Phone|iPad|iPod)/i;
    this.ispc = agent.match(deviceReg) === null; //判断移动端
    this.isie = agent.match(/(msie)/i) !== null; //判断IE
    this.$log("是否是ie浏览器", this.ispc);
  }
};
</script>
<style>
body {
  font-size: 13px;
}
#wrapper {
  /* min-height: calc(100% - 65px); */
}
.cursor-pointer {
  cursor: pointer;
}
a {
  color: #777777;
}
a {
  color: #777777;
  text-decoration: none;
}
a:hover,
a:focus {
  color: #ff6600;
  text-decoration: none;
}
a:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}
.ant-input {
  border-radius: 0px;
}
.el-input {
  border-radius: 0px;
}
.el-input-group__append,
.el-input-group__prepend,
.el-input__inner {
  border-radius: 0px !important;
}
.el-button--default {
  background-color: #eee;
}
.el-button--default:hover {
  background-color: #dbdbdb;
  border-color: #c6c6c6;
}
</style>
