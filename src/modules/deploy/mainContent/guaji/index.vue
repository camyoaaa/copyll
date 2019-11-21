<template>
    <div ng-controller="CtrlGuaji" class="task-page scroll-full ng-scope">
        <div class="page-guaji">
            <div class="guaji-banner">
                <div class="image"></div>
            </div>
            <div class="guaji-body clearfix">
                <div class="guaji-header">
                    <ul class="draw-list list-unstyled">
                        <!-- ngRepeat: item in drawRecardList track by $index -->
                        <li><span class="text-gray">11:28</span><span>188****8003提现</span><span class="text-orange">780.792元</span></li>
                        <li><span class="text-gray">04:59</span><span>155136****@qq.com提现</span><span class="text-orange">677元</span></li>
                        <li><span class="text-gray">10:41</span><span>188****8003提现</span><span class="text-orange">670.374元</span></li>
                        <li><span class="text-gray">01:41</span><span>181****8908提现</span><span class="text-orange">602元</span></li>
                        <li><span class="text-gray">10:04</span><span>159****2111提现</span><span class="text-orange">465元</span></li>
                        <li><span class="text-gray">10:11</span><span>159****2111提现</span><span class="text-orange">465元</span></li>
                        <li><span class="text-gray">09:55</span><span>136****2701提现</span><span class="text-orange">395.234元</span></li>
                        <li><span class="text-gray">09:43</span><span>188****8003提现</span><span class="text-orange">286.16元</span></li>
                        <li><span class="text-gray">09:43</span><span>188****6006提现</span><span class="text-orange">280元</span></li>
                        <li><span class="text-gray">04:10</span><span>188****8003提现</span><span class="text-orange">209.4元</span></li>
                        <li><span class="text-gray">08:18</span><span>27767****@qq.com提现</span><span class="text-orange">206元</span></li>
                        <li><span class="text-gray">11:49</span><span>1343056****@chen.cn提现</span><span class="text-orange">144.596元</span></li>
                        <li><span class="text-gray">11:51</span><span>1323557****@chen.cn提现</span><span class="text-orange">109.306元</span></li>
                        <li><span class="text-gray">10:56</span><span>170****0449提现</span><span class="text-orange">85.226元</span></li>
                        <li><span class="text-gray">01:18</span><span>27484****@qq.com提现</span><span class="text-orange">81元</span></li>
                        <li><span class="text-gray">10:08</span><span>151****7873提现</span><span class="text-orange">51元</span></li>
                        <li><span class="text-gray">08:43</span><span>188****2695提现</span><span class="text-orange">43.7元</span></li>
                        <li><span class="text-gray">08:57</span><span>186****9449提现</span><span class="text-orange">37.246元</span></li>
                        <li><span class="text-gray">11:41</span><span>1867611****@chen.com提现</span><span class="text-orange">34.096元</span></li>
                        <li><span class="text-gray">09:24</span><span>185****9935提现</span><span class="text-orange">33.6元</span></li>
                        <li><span class="text-gray">08:44</span><span>135****7373提现</span><span class="text-orange">30元</span></li>
                        <li><span class="text-gray">03:48</span><span>185****7077提现</span><span class="text-orange">30元</span></li>
                        <li><span class="text-gray">01:45</span><span>150****9577提现</span><span class="text-orange">25元</span></li>
                        <li><span class="text-gray">03:37</span><span>137****1342提现</span><span class="text-orange">24元</span></li>
                        <li><span class="text-gray">09:39</span><span>77420****@qq.com提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">09:43</span><span>135****7373提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">04:29</span><span>****@qq.com提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">10:41</span><span>77420****@qq.com提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">08:29</span><span>186****9449提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">08:29</span><span>186****9449提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">08:28</span><span>186****9449提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">10:36</span><span>77420****@qq.com提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">10:36</span><span>77420****@qq.com提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">11:01</span><span>158****7600提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">10:50</span><span>158****7600提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">09:54</span><span>136****2701提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">09:40</span><span>77420****@qq.com提现</span><span class="text-orange">10000元</span></li>
                        <li><span class="text-gray">09:40</span><span>186****7908提现</span><span class="text-orange">9092.148元</span></li>
                        <li><span class="text-gray">08:29</span><span>186****9449提现</span><span class="text-orange">7757.428元</span></li>
                        <li><span class="text-gray">08:25</span><span>f****@tixian.com提现</span><span class="text-orange">7385元</span></li>
                        <li><span class="text-gray">07:10</span><span>201796****@qq.com提现</span><span class="text-orange">6419.772元</span></li>
                        <li><span class="text-gray">11:00</span><span>158****7600提现</span><span class="text-orange">4060元</span></li>
                        <li><span class="text-gray">01:47</span><span>****@qq.com提现</span><span class="text-orange">2596.96元</span></li>
                        <li><span class="text-gray">04:30</span><span>****@qq.com提现</span><span class="text-orange">2310元</span></li>
                        <li><span class="text-gray">12:54</span><span>f****@tixian.com提现</span><span class="text-orange">2233元</span></li>
                        <li><span class="text-gray">07:48</span><span>taizi****@163.com提现</span><span class="text-orange">2087元</span></li>
                        <li><span class="text-gray">10:42</span><span>77420****@qq.com提现</span><span class="text-orange">1823元</span></li>
                        <li><span class="text-gray">08:35</span><span>taizi****@163.com提现</span><span class="text-orange">1773元</span></li>
                        <li><span class="text-gray">10:16</span><span>186****5003提现</span><span class="text-orange">1654.344元</span></li>
                    </ul>
                </div>
                <div class="guaji-section">
                    <h2>什么是挂机？</h2>
                    <h3>使用猎流挂机功能，只要有电脑有网络，系统将自动为您赚钱！</h3>
                    <ol class="list-unstyled">
                        <li><span class="text-orange">◆</span> 所有用户自由参与，没有任何门槛收费 </li>
                        <li><span class="text-orange">◆</span> 只要有网络，开着电脑无需看管，让电脑为您赚钱</li>
                        <li><span class="text-orange">◆</span> 海量任务、自动结算，超多佣金、自由提现</li>
                        <li><span class="text-orange">◆</span> 具体挂机详情，请查看 《猎流挂机规则》</li>
                    </ol>
                    <hr>
                    <h2>挂机步骤</h2>
                    <h3>挂机获得收藏金币，可随时提现或兑换积分哦！</h3>
                    <ul class="list-unstyled">
                        <li><span class="text-orange">1.</span> 请在挂机页面点击“+添加小号”添加您的淘宝账号（注：添加小号越多收入越高！）</li>
                        <li><span class="text-orange">2.</span> 添加完账号，请“点击登录”并“加入挂机”</li>
                        <li><span class="text-orange">3.</span> 最后不要忘记点击“开始挂机”按钮哦！</li>
                    </ul>
                </div>
                <div class="guaji-rank">
                    <div>
                        <h2>近一周收益排行</h2>
                    </div>
                    <!-- <div ui-spinner="" ng-show="!drawRankList" class="ng-isolate-scope ng-hide" style=""><div class="loading-box"><div><div class="load-spinner"><div class="load-inner"><div class="bounce bounce1"></div><div class="bounce bounce2"></div><div class="bounce bounce3"></div></div><p class="mtm">加载中...</p></div></div></div></div> -->
                    <ul class="list-unstyled">
                        <!-- ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding rank-top" ng-class="{'rank-top': $index < 3}">1</i>133****7668</div>
                            <div class="pull-right text-right ng-binding">818.49</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding rank-top" ng-class="{'rank-top': $index < 3}">2</i>39313****@qq.com</div>
                            <div class="pull-right text-right ng-binding">671.09</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding rank-top" ng-class="{'rank-top': $index < 3}">3</i>50734****@qq.com</div>
                            <div class="pull-right text-right ng-binding">633.85</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding" ng-class="{'rank-top': $index < 3}">4</i>l****@163.com</div>
                            <div class="pull-right text-right ng-binding">532.26</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding" ng-class="{'rank-top': $index < 3}">5</i>l****@163.com</div>
                            <div class="pull-right text-right ng-binding">530.46</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding" ng-class="{'rank-top': $index < 3}">6</i>1335818****@qq.com</div>
                            <div class="pull-right text-right ng-binding">498.75</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding" ng-class="{'rank-top': $index < 3}">7</i>170****8255</div>
                            <div class="pull-right text-right ng-binding">458.94</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding" ng-class="{'rank-top': $index < 3}">8</i>ckl****@163.com</div>
                            <div class="pull-right text-right ng-binding">446.88</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding" ng-class="{'rank-top': $index < 3}">9</i>1530150****@qq.com</div>
                            <div class="pull-right text-right ng-binding">421.49</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding" ng-class="{'rank-top': $index < 3}">10</i>cxq****@163.com</div>
                            <div class="pull-right text-right ng-binding">416.81</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                        <li class="clearfix ng-scope" ng-repeat="item in drawRankList track by $index">
                            <div class="pull-left ng-binding"><i class="rank-num ng-binding" ng-class="{'rank-top': $index < 3}">11</i>l****@163.com</div>
                            <div class="pull-right text-right ng-binding">394.58</div>
                        </li><!-- end ngRepeat: item in drawRankList track by $index -->
                    </ul>
                </div>
            </div>
            <div class="guaji-footer">
                <a-affix :offsetBottom="0" style="position:absolute;bottom:0px">
                    <div class="task-footer">
                        <a class="btn btn-lg btn-warning btn-square" ng-click="downloadClient();" href="javascript:void(0);"><i class="lion lion-xiazai"></i> 我要挂机赚钱</a>
                    </div>
                </a-affix>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "guaji"
};
</script>