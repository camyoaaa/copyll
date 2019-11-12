<template>
<div>
<!-- 加载图标开始 -->
	
	<div id="wrapper">
		<!-- 顶部菜单开始 -->
		<div class="page-header-topbar">
			<!-- ngIf: !!ispc --><!-- ngInclude: '/views/header.html' --><div class="topbar-main ng-scope" ng-if="!!ispc" ng-include="&#39;/views/header.html&#39;"><div class="topbar-main ng-scope" ng-controller="HeaderCtrl">
	<a class="logo" href="https://www.lieliu.com/" target="_blank">
        <!-- <img ng-src="/images/site-logo.svg" src="./lieliu_files/site-logo.svg"> -->
	</a>
	<!-- ngIf: user.p > '0' && ispc -->
	<!-- ngIf: user.p === '0' --><div class="pull-right topbar-nav list-unstyled ng-scope" ng-if="user.p === &#39;0&#39;">
		<div class="login-btn-group">
			<a href="javascript:void(0);" ng-click="login();" class="btn btn-yellow btn-square lion lion-yonghu2"> 登录</a>
			<a href="javascript:void(0);" ng-click="regist();" class="btn btn-yellow btn-square lion lion-zhuce"> 注册</a>
		</div>
	</div><!-- end ngIf: user.p === '0' -->
	<ul class="pull-right topbar-nav list-unstyled">
		<li class="hidden-md dropdown"><a href="javascript:void(0);" ng-click="download();"><i class="lion lion-xiazai"></i> 客户端下载</a></li>
		<li class="hidden-md dropdown"><a href="https://www.lieliu.com/price" target="_blank"><i class="lion lion-qian"></i> 任务价格表</a></li>
	</ul>
	<!-- ngIf: !oem --><ul class="pull-left topbar-nav list-unstyled ng-scope" style="margin-left: 55px;" ng-if="!oem">
		<li class="hidden-md dropdown ng-scope" ng-controller="AnnounceCtrl"><a href="https://e.lieliu.com/#/notice.html" class="notice ng-binding"><i class="lion lion-gonggao"></i> 公告：遇到恶意退款和虚假交易怎么办？</a></li>
	</ul><!-- end ngIf: !oem -->
</div></div><!-- end ngIf: !!ispc -->
		</div>
		<!-- 主内容区开始 -->
		<div class="page-container" style="min-height: 582px;">
			<!-- 左菜单开始 -->
			<!-- ngIf: !!ispc --><!-- ngInclude: '/views/sidebar.html' --><div id="sidebar" ng-if="!!ispc" ng-include="&#39;/views/sidebar.html&#39;" class="ng-scope"><div class="inner ng-scope" ng-controller="HeaderCtrl" style="top: 0px;">
	<div class="side-user text-center">
		<div class="power_tag power_tag_0"></div>
		<div class="headimg pointer" ng-class="{&#39;vip&#39;: user.p &gt; 10}"></div>
		<div class="power ng-hide" ng-show="user.p &gt; 0">
			<a href="javascript:void(0);" class="btn btn-xs btn-square mbs ng-binding">ID:</a>
		</div>
		<small ng-show="user.z !== &#39;N&#39;" class="ng-binding ng-hide">N</small>
	</div>
	<!-- ngIf: user.p > '0' -->
	<!-- <div class="side-btns list-unstyled">
		<li ng-if="!oem || showRecharge === '1'"><a ng-click="recharge()" href="javascript:void(0);" class="btn btn-xs btn-block btn-warning btn-radius-sm">点此充值</a></li>
		<li ng-if="user.p >= '18' && ispc"><a ng-click="withdraw()" href="javascript:void(0);" class="btn btn-xs btn-block btn-warning btn-radius-sm">余额提现</a></li>
		<li ng-show="!hideTutor"><a ng-click="services();" href="javascript:void(0);" class="btn btn-xs btn-block btn-outlined btn-warning btn-radius-sm">联系导师</a></li>
	</div> -->
	<div class="side-btns flex">
		<!-- ngIf: !oem || showRecharge === '1' --><a ng-if="!oem || showRecharge === &#39;1&#39;" ng-click="recharge()" href="javascript:void(0);" class="flex-grow btn btn-warning ng-scope">点此充值</a><!-- end ngIf: !oem || showRecharge === '1' -->
		<!-- ngIf: user.p == '18' -->
		<a ng-show="!hideTutor" ng-click="services();" href="javascript:void(0);" class="flex-grow btn btn-outlined btn-warning">联系导师</a>
	</div>
	<ul id="side-menu" class="list-unstyled">
		<!-- <li ng-class="{'active': path === 'tool'}">
			<a href="#/tool/credit.html">
				<i class="lion" ng-class="{'lion-tools': path === 'tool', 'lion-tools-o': path !== 'tool'}"></i>
				<span>工具箱 <img src="//mapp.alicdn.com/1554947343820g7bjTMPScqo2zWF.gif" alt="NEW"></span>
			</a>
		</li> -->
		<li ng-class="{&#39;active&#39;: path === &#39;tb&#39;}" class="active">
			<a href="https://e.lieliu.com/#/tb/flow.html">
				<i class="lion lion-tb" ng-class="{&#39;lion-tb&#39;: path === &#39;tb&#39;, &#39;lion-tb-o&#39;: path !== &#39;tb&#39;}"></i>
				<span>淘宝任务</span>
			</a>
		</li>
		<li ng-class="{&#39;active&#39;: path === &#39;jd&#39;}">
			<a href="https://e.lieliu.com/#/jd/flow.html">
				<i class="lion lion-jd-o" ng-class="{&#39;lion-jd&#39;: path === &#39;jd&#39;, &#39;lion-jd-o&#39;: path !== &#39;jd&#39;}"></i>
				<span>京东任务</span>
			</a>
		</li>
		<li ng-class="{&#39;active&#39;: path === &#39;pdd&#39;}">
			<a href="https://e.lieliu.com/#/pdd/flow.html">
				<i class="lion lion-pdd-o" ng-class="{&#39;lion-pdd&#39;: path === &#39;pdd&#39;, &#39;lion-pdd-o&#39;: path !== &#39;pdd&#39;}"></i>
				<span>拼多多任务</span>
			</a>
		</li>
		<!-- ngIf: user.is_old --><li ng-if="user.is_old" ng-class="{&#39;active&#39;: path === &#39;douyin&#39;}" class="ng-scope">
			<a href="https://e.lieliu.com/#/douyin/flow.html">
				<i class="lion lion-douyin-o" ng-class="{&#39;lion-douyin&#39;: path === &#39;douyin&#39;, &#39;lion-douyin-o&#39;: path !== &#39;douyin&#39;}"></i>
				<span>抖音任务</span>
			</a>
		</li><!-- end ngIf: user.is_old -->
		<!-- ngIf: !oem --><li ng-if="!oem" ng-class="{&#39;active&#39;: path === &#39;guaji&#39;}" class="ng-scope">
			<a href="https://e.lieliu.com/#/guaji.html">
				<i class="lion lion-guaji-o" ng-class="{&#39;lion-guaji&#39;: path === &#39;guaji&#39;, &#39;lion-guaji-o&#39;: path !== &#39;guaji&#39;}"></i>
				<span>挂机赚钱</span>
			</a>
		</li><!-- end ngIf: !oem -->
		<li ng-class="{&#39;active&#39;: path === &#39;list&#39;}">
			<a href="https://e.lieliu.com/#/list/task.html">
				<i class="lion lion-chaxun-o" ng-class="{&#39;lion-chaxun&#39;: path === &#39;list&#39;, &#39;lion-chaxun-o&#39;: path !== &#39;list&#39;}"></i>
				<span>业务查询</span>
			</a>
		</li>
		<li ng-class="{&#39;active&#39;: path === &#39;template&#39;}">
			<a href="https://e.lieliu.com/#/template.html">
				<i class="lion lion-moban lion-moban-o" ng-class="{&#39;lion-moban&#39;: path === &#39;template&#39;, &#39;lion-moban-o&#39;: path !== &#39;template&#39;}"></i>
				<span>任务模板</span>
			</a>
		</li>
		<!-- <li ng-class="{'active': path === 'dianpu'}">
			<a href="#/user.html">
				<i class="lion" ng-class="{'lion-dianpu': path === 'dianpu', 'lion-dianpu-o': path !== 'dianpu'}"></i>
				<span>开店管家</span>
			</a>
		</li> -->
	</ul>
</div></div><!-- end ngIf: !!ispc -->
			<!-- 页面切换内容区 -->
			<div id="page-wrapper" class="scroll-full">
				<!-- ngView:  --><div class="scroll-full ng-scope" ng-view=""><div ng-controller="TbFlowCtrl" class="task-page scroll-full ng-scope">
<form ui-validate="validate" class="scroll-full ng-pristine ng-isolate-scope ng-invalid ng-invalid-maxlength" action="https://e.lieliu.com/#" method="post" onsubmit="return false;" on-submit="save()" novalidate="novalidate">		<!-- 移动端头部 -->
	<div class="scroll-fixed hidden-pc app-page-header">
		<div class="pull-left" ng-show="!oem">
			<a href="https://e.lieliu.com/#/douyin/flow.html" class="link">抖音任务</a>
		</div>
		<div class="pull-right">
			<div class="dropdown" dropdown="">
				<a href="javascript:;" class="btn btn-xs btn-warning btn-radius-sm" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">模板管理</a>
				<ul class="dropdown-menu">
					<li><a href="javascript:;" ng-click="saveAs();"> 保存模板</a></li>
					<li><a href="https://e.lieliu.com/#/template.html"> 任务模板</a></li>
				</ul>
			</div>
		</div>
		<h3>发布任务</h3>
	</div>
	<!-- 滚动区域开始 -->
	<div class="scroll-viewer">
		<!-- ngInclude: '/views/tb/nav.html' --><div class="sub-sidebar-menu ng-scope" ng-include="&#39;/views/tb/nav.html&#39;"><ul id="generalTab" class="nav nav-tabs ul-edit ng-scope">
	<li ng-class="{&#39;active&#39;: pageName === &#39;flow&#39;}" class="active">
		<a href="https://e.lieliu.com/#/tb/flow.html">流量</a>
	</li>
	<!-- <li ng-class="{'active': pageName === 'visit'}">
		<a href="#/tb/visit.html">直访流量</a>
	</li> -->
	<li ng-class="{&#39;active&#39;: pageName === &#39;favorite&#39;}">
		<a href="https://e.lieliu.com/#/tb/favorite.html">收藏</a>
	</li>
	<li ng-class="{&#39;active&#39;: pageName === &#39;cart&#39;}">
		<a href="https://e.lieliu.com/#/tb/cart.html">加购</a>
	</li>
	<li ng-class="{&#39;active&#39;: pageName === &#39;live&#39;}">
		<a href="https://e.lieliu.com/#/tb/live.html">直播</a>
	</li>
	<li ng-class="{&#39;active&#39;: pageName === &#39;article&#39;}">
		<a href="https://e.lieliu.com/#/tb/article.html">文章</a>
	</li>
</ul></div>
		<div class="tab-content mbn task-content">
			<!-- 任务表单开始 -->
			<div class="form-horizontal">
				<div class="form-group position-static">
					<label class="col-sm-2 control-label">任务类型</label>
					<div class="col-sm-9 position-static">
						<div class="btn-group btn-group-sm">
							<label class="btn btn-radio ng-pristine ng-untouched ng-valid active" ng-model="model.tab" btn-radio="&#39;app&#39;"><i class="lion lion-shouji1"></i> APP流量</label>
							<label class="btn btn-radio ng-pristine ng-untouched ng-valid" ng-model="model.tab" btn-radio="&#39;pc&#39;"><i class="lion lion-pc"></i> PC流量</label>
							<label class="btn btn-radio ng-pristine ng-untouched ng-valid" ng-model="model.tab" btn-radio="&#39;visit&#39;"><i class="lion lion-lianjie"></i> 直访流量</label>
							<!-- <label class="btn btn-radio" ng-model="model.tab" btn-radio="'1212'"><i class="lion lion-1212"></i> 投票</label> -->
						</div>
						<div class="btn-group pull-right task-btn-group">
							<!-- ngIf: !!caseLink && !ispc -->
							<!-- ngIf: !!caseLink && !!ispc --><a ng-href="//www.lieliu.com/case/taobao_flow_visit.html" target="new" ng-if="!!caseLink &amp;&amp; !!ispc" class="btn-reset lion lion-help ng-scope" title="查看任务示例" href="https://www.lieliu.com/case/taobao_flow_visit.html"><span>示例</span></a><!-- end ngIf: !!caseLink && !!ispc -->
							<a href="javascript:void(0);" ng-click="resetForm();" class="btn-reset lion lion-chongzhi" title="重置任务参数"><span>重置</span></a>
							<a href="javascript:void(0);" ng-click="saveAs();" class="btn-reset lion lion-save hidden-xs" title="另存任务方案"><span>另存</span></a>
						</div>
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">任务日期</label>
					<div class="col-sm-9 form-inline">
						<div class="btn-group mbs">
							<div class="input-group input-group- input-daterange" ui-date-range="" start-date="model.startDate" end-date="model.endDate" min-date="2019-11-11" max-date="2019-12-11">				<input type="text" class="form-control start" placeholder="0000-00-00" value="2019-11-11" readonly="">				<span class="input-group-addon">-</span>				<input type="text" class="form-control end" placeholder="0000-00-00" value="2019-11-11" readonly="">			</div>
						</div>
						<div class="btn-group">
							<span class="text-gray">快速选择：</span>
							<!-- ngRepeat: day in dayOptions track by $index --><a href="javascript:void(0);" class="pts ng-binding ng-scope text-orange" ng-class="{&#39;text-orange&#39;: model.days === day}" ng-click="setDays(day);" ng-repeat="day in dayOptions track by $index">1天 </a><!-- end ngRepeat: day in dayOptions track by $index --><a href="javascript:void(0);" class="pts ng-binding ng-scope" ng-class="{&#39;text-orange&#39;: model.days === day}" ng-click="setDays(day);" ng-repeat="day in dayOptions track by $index">3天 </a><!-- end ngRepeat: day in dayOptions track by $index --><a href="javascript:void(0);" class="pts ng-binding ng-scope" ng-class="{&#39;text-orange&#39;: model.days === day}" ng-click="setDays(day);" ng-repeat="day in dayOptions track by $index">7天 </a><!-- end ngRepeat: day in dayOptions track by $index --><a href="javascript:void(0);" class="pts ng-binding ng-scope" ng-class="{&#39;text-orange&#39;: model.days === day}" ng-click="setDays(day);" ng-repeat="day in dayOptions track by $index">10天 </a><!-- end ngRepeat: day in dayOptions track by $index --><a href="javascript:void(0);" class="pts ng-binding ng-scope" ng-class="{&#39;text-orange&#39;: model.days === day}" ng-click="setDays(day);" ng-repeat="day in dayOptions track by $index">15天 </a><!-- end ngRepeat: day in dayOptions track by $index --><a href="javascript:void(0);" class="pts ng-binding ng-scope" ng-class="{&#39;text-orange&#39;: model.days === day}" ng-click="setDays(day);" ng-repeat="day in dayOptions track by $index">30天 </a><!-- end ngRepeat: day in dayOptions track by $index -->
						</div>
					</div>
					<div class="col-sm-9 col-sm-offset-2">
						任务时长 <b class="font-georgia text-red text-lg ng-binding">1</b> 天，每天发布 <b class="font-georgia text-red text-lg ng-binding">100</b> 个任务量，此次合计发布 <b class="font-georgia text-red text-lg ng-binding">100</b> 个任务。
					</div>
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label ng-binding">商品链接</label>
					<div class="col-sm-9">
						<div class="input-icon input-icon-sm right">
							<i class="fa fa-times-circle text-gray ng-hide" ng-click="clearUrl();" ng-show="model.url !== &#39;&#39; &amp;&amp; !loadData"></i>
							<i class="fa fa-spinner fa-spin text-gray ng-hide" ng-show="!!loadData"></i>
							<input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength" name="target" ng-model="model.url" maxlength="512" placeholder="输入商品链接（或淘口令）" onfocus="this.select();" ng-blur="getItem();">
						</div>
					</div>
				</div>
				<div class="form-group ng-hide" ng-show="!!item">
					<div class="col-sm-9 col-sm-offset-2">
						<div class="task-item clearfix">
							<div class="item-pic">
								<img>
							</div>
							<div class="item-content">
								<h4 class="mts ng-binding"><small class="text-gray mll ng-binding"></small></h4>
								<div class="row text-gray">
									<div class="col-sm-6 ng-binding">店铺：</div>
									<div class="col-sm-6 ng-binding">卖家：</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="form-group ng-hide" ng-show="!!shop &amp;&amp; model.tab === &#39;visit&#39;">
					<div class="col-sm-9 col-sm-offset-2">
						<div class="task-item clearfix">
							<div class="item-pic">
								<img>
							</div>
							<div class="item-content">
								<h4 class="mts ng-binding">
									
									<span ng-show="shop.site === &#39;taobao&#39;" class="shop-rank  ng-hide"></span>
									<span ng-show="shop.site === &#39;tmall&#39;" class="shop-rank rank-tmall ng-hide"></span>
								</h4>
								<div class="row text-gray">
									<div class="col-sm-6 ng-binding">掌柜旺旺：</div>
									<div class="col-sm-6 ng-binding">粉丝数量：</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- ngIf: model.tab !== 'visit' && model.tab !== '1212' --><div ui-task-keywords="" ng-if="model.tab !== &#39;visit&#39; &amp;&amp; model.tab !== &#39;1212&#39;" ng-model="model.keywords" ng-change="keywordsChange();" count="model.taskCount" days="model.days" type="1" target="" class="ng-scope ng-isolate-scope ng-valid">				<!-- ngRepeat: keyword in keywords track by $index --><div ng-repeat="keyword in keywords track by $index" class="mbm ng-scope">					<div class="form-group mbn">						<label class="col-sm-2 control-label ng-binding">关键词一</label>						<div class="col-sm-9" style="position: static;">							<div class="row">								<div class="col-sm-5 mbs">									<div class="input-group" ng-class="{&#39;input-group&#39;: !!showRank}">										<input type="text" placeholder="请输入关键词" class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength" ng-class="{error: keyword.error}" ng-model="keyword.words" maxlength="30">										<!-- ngIf: !!showRank --><a ng-if="!!showRank" class="input-group-addon btn btn-default fa fa-search ng-scope" href="http://www.kehuda.com/#username=&amp;keyword=&amp;shebei=1" target="_blank"> 查排名</a><!-- end ngIf: !!showRank -->									</div>								</div>								<div class="col-sm-7 mbs" style="position: static;">									<div class="flex">										<div class="flex-grow control-label text-ellipsis prl">数量</div>										<div class="flex-static">											<div class="input-group input-group- ng-valid ng-valid-maxlength" style="width: 140px;" type="text" ui-input-number="" maxlength="4" current="100" ng-model="keyword.num" max="999999" min="1" change="change();" placeholder="1"><div class="input-group-btn"><a class="btn btn-default" style="border-right: 0 !important;" href="javascript:void(0);" data-val="-1"><i class="fa fa-minus"></i></a></div><input value="100" type="tel" class="form-control text-center" onfocus="this.select();"><div class="input-group-btn"><a class="btn btn-default btn-" href="javascript:void(0);" data-val="1"><i class="fa fa-plus"></i></a></div></div>										</div>										<div class="flex-static plm">											<label class="btn btn-default ng-pristine ng-untouched ng-valid" ng-model="keyword.show" btn-radio="true" uncheckable="">时段</label>										</div>										<div class="flex-static plm ng-hide" ng-show="keywords.length &gt; 1">											<a href="javascript:void(0);" ng-click="minus($index);" class="btn btn-cricle btn-danger" tooltip="移除关键词"><i class="fa fa-minus"></i></a>										</div>										<div class="flex-static plm">											<a href="javascript:void(0);" ng-click="plus($index);" class="btn btn-cricle btn-success" tooltip="复制添加"><i class="fa fa-plus"></i></a>										</div>									</div>								</div>							</div>							<div class="task-timer ng-pristine ng-untouched ng-valid ng-isolate-scope ng-hide" onselectstart="return false;" ui-tasktimer="" ng-model="keyword.hour" count="keyword.num" days="1" assign="keyword.assign" ng-show="!!keyword.show" on-change="change();" style="">
	<div class="timer clearfix">
		<!-- ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">00:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">01:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">02:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">03:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">04:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">05:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">06:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">07:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">08:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">09:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">10:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">11:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">12:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="次日">13:00</div>
				<span class="timer-btn ng-binding">0.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding title-today" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="当日">14:00</div>
				<span class="timer-btn ng-binding">13.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding title-today" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="当日">15:00</div>
				<span class="timer-btn ng-binding">14.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding title-today" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="当日">16:00</div>
				<span class="timer-btn ng-binding">13.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding title-today" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="当日">17:00</div>
				<span class="timer-btn ng-binding">12.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding title-today" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="当日">18:00</div>
				<span class="timer-btn ng-binding">11.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding title-today" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="当日">19:00</div>
				<span class="timer-btn ng-binding">10.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding title-today" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="当日">20:00</div>
				<span class="timer-btn ng-binding">9.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding title-today" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="当日">21:00</div>
				<span class="timer-btn ng-binding">7.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding title-today" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="当日">22:00</div>
				<span class="timer-btn ng-binding">6.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index --><div class="col-xs-2 col-sm-1 ng-scope" ng-repeat="item in data track by $index">
			<div class="row item">
				<div class="title ng-binding title-today" ng-class="{&#39;title-today&#39;: $index &gt;= nowHour}" title="当日">23:00</div>
				<span class="timer-btn ng-binding">5.0%</span>
				<input type="tel" class="timer-input ng-pristine ng-untouched ng-valid" ng-model="data[$index]" ng-blur="check($index);" onclick="this.select();">
				<div class="timer-day"></div>
			</div>
		</div><!-- end ngRepeat: item in data track by $index -->
	</div>
	<div class="timer-footer clearfix">
		<!-- ngIf: !discount --><div class="pull-left ng-scope" ng-if="!discount">
			共 <b class="font-georgia text-blue ng-binding">100</b> 个任务，已分配 <b class="font-georgia text-green ng-binding">100</b> 个，剩余未分配 <b class="font-georgia text-red ng-binding">0</b> 个
		</div><!-- end ngIf: !discount -->
		<!-- ngIf: !!discount -->
		<div class="pull-right">
			<a class="btn btn-xs" ng-click="set(&#39;clear&#39;);" tooltip="清空"><i class="fa fa-trash"></i></a>
			<a class="btn btn-xs" ng-click="saveTemp();" tooltip="保存"><i class="fa fa-save"></i></a>
			<div class="btn-group">
				<label class="btn btn-xs btn-default ng-pristine ng-untouched ng-valid active" ng-model="type" btn-radio="&#39;today&#39;" ng-click="set(&#39;today&#39;)">当天完成</label>
				<!-- <label class="btn btn-xs btn-default" ng-model="type" btn-radio="'day'" ng-click="set('day')">仅白天</label> -->
				<label class="btn btn-xs btn-default ng-pristine ng-untouched ng-valid" ng-model="type" btn-radio="&#39;curve&#39;" ng-click="set(&#39;curve&#39;)">模拟流量</label>
				<a href="javascript:void(0);" class="btn btn-xs btn-default" ng-click="loadTemp();">自定义…</a>
			</div>
		</div>
	</div>
</div>						</div>					</div>				</div><!-- end ngRepeat: keyword in keywords track by $index -->			</div><!-- end ngIf: model.tab !== 'visit' && model.tab !== '1212' -->
				<!-- 商品浏览设置 -->
				<div ng-show="model.tab !== &#39;1212&#39;">
					<hr>
					<div class="form-group">
						<label class="col-sm-2 control-label mbm">浏览时间</label>
						<div class="col-sm-4 mbm">
							<div class="btn-group btn-group- mb10 dropdown ng-valid" dropdown="" ui-selector="" ng-model="model.browseTime" source="timeOptions" label="浏览时间">				<a href="javascript:void(0);" class="btn btn-default btn- dropdown-toggle" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">100 - 180秒（免费） <span class="fa fa-caret fa-angle-down"></span></a>				<ul class="dropdown-menu dropdown-menu-sm">					<!-- ngRepeat: item in source track by $index --><li ng-repeat="item in source track by $index" class="ng-scope"><a href="javascript:void(0);" ng-click="selectValue(item);" class="ng-binding">100 - 180秒（免费）</a></li><!-- end ngRepeat: item in source track by $index --><li ng-repeat="item in source track by $index" class="ng-scope"><a href="javascript:void(0);" ng-click="selectValue(item);" class="ng-binding">180 - 280秒（+5积分）</a></li><!-- end ngRepeat: item in source track by $index --><li ng-repeat="item in source track by $index" class="ng-scope"><a href="javascript:void(0);" ng-click="selectValue(item);" class="ng-binding">280 - 380秒（+10积分）</a></li><!-- end ngRepeat: item in source track by $index -->				</ul>			</div>
						</div>
						<label class="col-sm-2 control-label mbm">浏览深度</label>
						<div class="col-sm-4 mbm">
							<div class="btn-group btn-group- mb10 dropdown ng-valid" dropdown="" ui-selector="" ng-model="model.depth" source="visitOptions" label="浏览深度">				<a href="javascript:void(0);" class="btn btn-default btn- dropdown-toggle" dropdown-toggle="" aria-haspopup="true" aria-expanded="false">不浏览其它商品 <span class="fa fa-caret fa-angle-down"></span></a>				<ul class="dropdown-menu dropdown-menu-sm">					<!-- ngRepeat: item in source track by $index --><li ng-repeat="item in source track by $index" class="ng-scope"><a href="javascript:void(0);" ng-click="selectValue(item);" class="ng-binding">不浏览其它商品</a></li><!-- end ngRepeat: item in source track by $index --><li ng-repeat="item in source track by $index" class="ng-scope"><a href="javascript:void(0);" ng-click="selectValue(item);" class="ng-binding">随机浏览</a></li><!-- end ngRepeat: item in source track by $index --><li ng-repeat="item in source track by $index" class="ng-scope"><a href="javascript:void(0);" ng-click="selectValue(item);" class="ng-binding">深度浏览</a></li><!-- end ngRepeat: item in source track by $index -->				</ul>			</div>
						</div>
					</div>
				</div>
				<!-- 任务时间设置 -->
				<div class="form-group ng-hide" ng-show="model.tab === &#39;visit&#39; || model.tab === &#39;1212&#39;">
					<label class="col-sm-2 control-label">每日任务数量</label>
					<div class="col-sm-8 form-inline">
						<div class="btn-group" style="width: 120px;">
							<div class="input-group input-group- ng-invalid ng-invalid-maxlength" style="width: 140px;" type="text" ui-input-number="" maxlength="2" ng-model="model.taskCount" max="999999" min="1" placeholder="1"><div class="input-group-btn"><a class="btn btn-default" style="border-right: 0 !important;" href="javascript:void(0);" data-val="-1"><i class="fa fa-minus"></i></a></div><input value="100" type="tel" class="form-control text-center" onfocus="this.select();"><div class="input-group-btn"><a class="btn btn-default btn-" href="javascript:void(0);" data-val="1"><i class="fa fa-plus"></i></a></div></div>
						</div>
					</div>
				</div>
				<!-- 高级选项开始 -->
				<div ng-show="model.tab === &#39;visit&#39; || model.tab === &#39;1212&#39;" class="ng-hide">
					<div class="form-group">
						<label class="col-sm-2 control-label">任务时段</label>
						<div class="col-sm-9">
							<div class="btn-group ">
								<label class="btn btn-radio ng-pristine ng-untouched ng-valid active" ng-model="model.time" btn-radio="&#39;0&#39;">自动当天完成</label>
								<label class="btn btn-radio ng-pristine ng-untouched ng-valid" ng-model="model.time" btn-radio="&#39;1&#39;">手动指定时段</label>
							</div>
						</div>
					</div>
					<!-- ngIf: model.time === '1' -->
				</div>
				<div class="form-group">
					<label class="col-sm-2 control-label">任务备注</label>
					<div class="col-sm-9">
						<div class="input-icon input-icon-sm right">
							<input type="text" class="form-control ng-pristine ng-untouched ng-valid ng-valid-maxlength" name="title" ng-model="model.title" maxlength="512" placeholder="任务备注（可不填）" onfocus="this.select();" ng-blur="getItem();">
						</div>
					</div>
				</div>
				<!-- 高级选项结束 -->
			</div>
			<!-- 表单结束 -->
		</div>
		<!-- ngInclude: '/views/task-footer.html' --><div class="task-footer ui-border-t clearfix ng-scope" ng-include="&#39;/views/task-footer.html&#39;"><div class="pull-left ng-scope">
	<ul class="list-unstyled clearfix mbn">
		<li>任务耗时：<span class="font-georgia ng-binding">100-180</span>秒</li>
		<li>单次消费：<span class="font-georgia ng-binding">30</span>积分</li>
		<li>合计消费：<span class="font-georgia ng-binding">3,000</span>积分</li>
	</ul>
	<p ng-show="user.p === &#39;10&#39; || (user.p &gt; 20 &amp;&amp; user.p &lt; 25)" class="ng-hide">
		<span>升级VIP会员，最高可享受约<span class="text-red">5折</span>的优惠！</span>
		<a href="javascript:void(0);" class="text-underline text-blue" ng-show="!oem" ng-click="recharge();">升级VIP</a>
		<a href="https://www.lieliu.com/price" class="text-underline text-green" ng-show="!oem" target="new">价格对比</a></p>
</div>
<div class="pull-right ng-scope">
	<!-- ngIf: !oem --><a ng-if="!oem" href="https://e.lieliu.com/#/guaji.html" class="btn btn-lg btn-guaji ng-scope">&nbsp;</a><!-- end ngIf: !oem -->
	<button class="btn btn-lg btn-warning"><i class="fa fa-paper-plane"></i> 发布任务</button>
</div></div>
	</div>
	<div class="scroll-fixed hidden-pc app-task-footer">
		<button class="btn btn-warning">发布</button>
	</div>
</form>
</div></div>
			</div>
			<!-- ngIf: !ispc -->
		</div>
		<!-- 遮罩层 -->
		<div id="wrapperCover"></div>
	</div>
	<!-- ngIf: !!ispc --><div class="page-footer ng-scope" ng-if="!!ispc">
		<div class="inner ng-scope" ng-controller="HeaderCtrl">
			<a href="https://sycm.taobao.com/" target="_blank" rel="nofollow">生意参谋</a>
			<a href="javascript:void(0);" ng-show="!hideTutor" ng-click="services();">联系客服</a>
			<a href="http://v.cd-vv.com/#4" target="_blank" rel="nofollow">使用教程</a>
			<a href="http://www.kehuda.com/" target="_blank">电商工具</a>
			<a href="http://www.laqu.com/" target="_blank" rel="nofollow">安全补单</a>
			<!-- ngIf: !oem --><a ng-if="!oem" href="javascript:void(0);" ng-click="download();" class="ng-scope">手机版</a><!-- end ngIf: !oem -->
			<!-- ngIf: !oem --><a ng-if="!oem" href="javascript:void(0);" ng-click="download();" class="ng-scope">PC端</a><!-- end ngIf: !oem -->
			<!-- ngIf: !oem --><a ng-if="!oem" href="http://www.lieliu.com/api.html" target="_blank" class="ng-scope">诚招代理(OEM、API)</a><!-- end ngIf: !oem -->
		</div>
	</div><!-- end ngIf: !!ispc -->
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


<input id="textAngular-editableFix-010203040506070809" style="width:1px;height:1px;border:none;margin:0;padding:0;position:absolute; top: -10000; left: -10000;" unselectable="on" tabindex="-1">
--></div>
</template>

<script>
export default {};
</script>
