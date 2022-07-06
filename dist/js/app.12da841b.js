(function(){var e={36350:function(e,t,a){"use strict";var s=a(28935),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("el-container",{staticClass:"app-out-pannel"},[a("el-header",{staticClass:"sys-header"},[a("span",[e._v("标题")]),a("div",{staticClass:"user-info"},[a("i",{staticClass:"el-icon-user"}),a("span",[e._v("当前用户：")]),a("span",{on:{click:e.handleUserLogin}},[e._v(e._s(e.username))])])]),a("el-container",{staticClass:"app-content-pannel"},[a("el-aside",{staticClass:"sys-menu"},[a("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",collapse:!0},on:{select:e.handleMenuSelect}},[a("el-menu-item",{attrs:{index:"1"}},[a("i",{staticClass:"el-icon-monitor"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页大屏")])]),a("el-menu-item",{attrs:{index:"2"}},[a("i",{staticClass:"el-icon-picture-outline"}),a("span",{attrs:{slot:"title"},slot:"title"},[e._v("标题")])])],1)],1),a("el-main",{staticClass:"sys-content"},[a("router-view")],1)],1)],1),a("el-dialog",{attrs:{title:"用户登录/注册",visible:e.loginDialogVisible,width:"30%","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.loginDialogVisible=t}}},[a("div",{staticClass:"login-content"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!e.loginSwitch,expression:"!loginSwitch"}],staticClass:"login-content-login"},[a("p",[e._v("用户名：")]),a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userNameInput,callback:function(t){e.userNameInput=t},expression:"userNameInput"}}),a("p",[e._v("密码：")]),a("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.userPsdInput,callback:function(t){e.userPsdInput=t},expression:"userPsdInput"}})],1),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loginSwitch,expression:"loginSwitch"}],staticClass:"login-content-insert"},[a("p",[e._v("用户名：")]),a("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userNameInput_insert,callback:function(t){e.userNameInput_insert=t},expression:"userNameInput_insert"}}),a("p",[e._v("密码：")]),a("el-input",{attrs:{placeholder:"请输入密码",clearable:""},model:{value:e.userPsdInput_insert,callback:function(t){e.userPsdInput_insert=t},expression:"userPsdInput_insert"}}),a("p",[e._v("手机号：")]),a("el-input",{attrs:{placeholder:"请输入手机号",clearable:""},model:{value:e.userPhoneInput_insert,callback:function(t){e.userPhoneInput_insert=t},expression:"userPhoneInput_insert"}}),a("p",[e._v("邮箱：")]),a("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmailInput_insert,callback:function(t){e.userEmailInput_insert=t},expression:"userEmailInput_insert"}})],1)]),a("br"),a("el-switch",{attrs:{"active-text":"注册","inactive-text":"登录"},model:{value:e.loginSwitch,callback:function(t){e.loginSwitch=t},expression:"loginSwitch"}}),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.loginDialogVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.userLogin}},[e._v(e._s(e.loginSwitch?"注册":"登录"))])],1)],1)],1)},n=[],r=a(26166),o=a.n(r),l=a(57421),c=a.n(l),u={name:"App",components:{},data(){return{username:"未登录",loginDialogVisible:!0,userNameInput:"",userPsdInput:"",loginSwitch:!1,userNameInput_insert:"",userPsdInput_insert:"",userPhoneInput_insert:"",userEmailInput_insert:""}},methods:{handleMenuSelect(e){"1"===e?this.$router.push("/"):"2"===e&&this.$router.push("/onemap")},handleUserLogin(){this.loginDialogVisible=!0},userLogin(){const e=this;if(e.loginSwitch){const t=e.userNameInput_insert,a=e.userPsdInput_insert,s=e.userPhoneInput_insert,i=e.userEmailInput_insert;if(!t||!a)return void e.$message({message:"请填写用户名或密码",type:"warning"});o().post("http://localhost:3001/user/insert",c().stringify({name:t,psd:a,phone:s,email:i})).then((function(t){"success"===t.data.status?e.$message({message:"用户注册成功，请登录",type:"success"}):e.$message.error("用户注册失败")})).catch((function(t){e.loginDialogVisible=!1,console.log(t)}))}else{const t=e.userNameInput,a=e.userPsdInput;o().get("http://localhost:3001/user/get",{params:{name:t}}).then((function(t){if("success"===t.data.status){const s=t.data.data[0].psd;s===a?(e.$message({message:"恭喜你，登陆成功",type:"success"}),e.username=t.data.data[0].name,e.loginDialogVisible=!1):e.$message.error("登录失败，用户名或密码错误")}})).catch((function(t){e.loginDialogVisible=!0,e.$message.error("登陆失败，用户名错误"),console.log(t)}))}}}},p=u,m=a(43736),d=(0,m.Z)(p,i,n,!1,null,null,null),g=d.exports,h=a(74549),v=a.n(h),y=a(12809),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"datavisual-page"},[a("MapDataVisual")],1)},w=[],b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mapview"},[a("div",{ref:"bmap",staticStyle:{position:"absolute",height:"100%",width:"100%"}}),a("div",{ref:"echart2",staticStyle:{width:"400px",height:"250px",top:"30px",left:"50px"}})])},_=[];let M=[{name:"浙江",value:9},{name:"云南",value:12},{name:"新疆",value:12},{name:"西藏",value:12},{name:"四川",value:14},{name:"陕西",value:15},{name:"山西",value:16},{name:"山东",value:18},{name:"青海",value:18},{name:"宁夏",value:19},{name:"内蒙古",value:21},{name:"辽宁",value:21},{name:"江西",value:21},{name:"吉林",value:22},{name:"湖南",value:23},{name:"湖北",value:24},{name:"黑龙江",value:24},{name:"河南",value:25},{name:"北京市",value:25},{name:"天津市",value:25},{name:"海南",value:25},{name:"贵州",value:25},{name:"广西",value:25},{name:"甘肃",value:26},{name:"福建",value:26},{name:"安徽",value:26},{name:"上海",value:27},{name:"重庆",value:27},{name:"江苏",value:27},{name:"广东",value:28},{name:"河北",value:29}];var T=M;let k={"浙江":[120.103332,29.104967],"云南":[101.301313,24.141072],"新疆":[85.658103,42.002464],"西藏":[89.115946,31.100655],"四川":[102.897281,34.115401],"陕西":[108.76452,33.38],"山西":[112.382576,37.6985],"山东":[118.430148,36.177868],"青海":[96.477113,35.723426],"宁夏":[105.985434,37.366408],"内蒙古":[111.071687,41.38647],"辽宁":[123.516401,41.473741],"江西":[115.633583,27.734628],"吉林":[126.450145,43.501435],"湖南":[111.57941,28.015791],"湖北":[113.030128,30.899748],"黑龙江":[127.88688,46.770255],"河南":[113.585097,33.800391],"北京市":[117.349074,40.222103],"天津市":[121.48,39.220634],"海南":[109.7747777,19.222206],"贵州":[106.611163,23.015048],"广西":[108.411451,40.97],"甘肃":[103.797119,35.948809],"福建":[118.024644,26.003525],"安徽":[117.187964,32.01357],"上海":[121.681155,31.213965],"重庆":[107.76514,29.799532],"江苏":[119.965609,32.471626],"广东":[113.357876,23.277226],"河北":[115.402864,38.222459]};var C=k,D=a(84759),S=a.n(D),V=a(51969);const x={options:{url:"https://js.arcgis.com/4.18/init.js",css:"https://js.arcgis.com/4.18/esri/themes/light/main.css"}};var $=x;a(4226);a(84759),a(76484);var z={name:"BmapScatter",return:{station:[],currentData:[]},mounted(){this.initechart2(),this.initBmap()},methods:{async initechart2(){const e=this,[t,a]=await(0,V.loadModules)(["esri/tasks/QueryTask","esri/tasks/support/Query"],$.options),s=new t({url:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/TONGJI/FeatureServer/6"});let i=new a;i.returnGeometry=!1,i.outFields=["*"],i.where="1=1";const n=[];s.execute(i).then((function(t){if(t.features.length>0)return t.features.map((e=>{n.push({value:e.attributes.车站,X:e.attributes.X,Y:e.attributes.Y,Name:e.attributes.NAME})})),e.station=n,n;e.$message({message:"暂时没有省份数据",type:"warning"})})),console.log(n),setTimeout((()=>{const e=function(e){for(var t=[],a=0;a<e.length;a++){var s=C[n[a].Name];s&&t.push({name:n[a].Name,value:n[a].value})}return t},t=function(e){for(var t=[],a=0;a<e.length;a++){var s=C[n[a].Name];s&&t.push({value:n[a].Name})}return t};var a=D.init(this.$refs.echart2),s={title:{text:"各省火车站数量"},tooltip:{},legend:{data:e(n)},xAxis:{data:t(n)},yAxis:{},series:[{name:"省",type:"bar",data:e(n)}]};a.setOption(s)}),4e3)},initBmap(){const e=function(e){for(var t=[],a=0;a<e.length;a++){var s=C[e[a].name];s&&t.push({name:e[a].name,value:s.concat(e[a].value)})}return t},t=this.$echarts.init(this.$refs.bmap);t.setOption({bmap:{key:"xnFdpzA5UPeR4wf8Bfe8YbvVaETx3lWn",center:[104.114129,37.550339]},series:[{name:"火车站数量",type:"scatter",coordinateSystem:"bmap",data:e(T),symbolSize:function(e){return e[2]},encode:{value:2},label:{formatter:"{b}",position:"right",show:!1},emphasis:{label:{show:!0}}},{name:"Top 5",type:"effectScatter",coordinateSystem:"bmap",data:e(T.sort((function(e,t){return t.value-e.value})).slice(0,6)),symbolSize:function(e){return e[2]},encode:{value:2},showEffectOn:"render",rippleEffect:{brushType:"stroke"},label:{formatter:"{b}",position:"right",show:!0},itemStyle:{shadowBlur:10,shadowColor:"#333"},emphasis:{scale:!0},zlevel:1}],title:{text:"各省火车站数量",left:"center"},tooltip:{formatter:e=>`${e.seriesName}<br />${e.marker} ${e.data.name}: ${e.data.value[2]}`}})}}},I=z,L=(0,m.Z)(I,b,_,!1,null,null,null),P=L.exports,B={name:"DataVisual",components:{MapDataVisual:P},methods:{}},Q=B,Z=(0,m.Z)(Q,f,w,!1,null,null,null),N=Z.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"onemap-page"},[a("Mapview"),a("MapTools"),a("MapTree"),a("XZQHComponent"),a("ResultTable")],1)},O=[],F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mapview-pannel"},[a("div",{attrs:{id:"mapview"}}),a("div",{attrs:{id:"basemapToggle"}}),a("div",{attrs:{id:"scaleBar"}}),a("div",{attrs:{id:"zoom"}}),a("div",{staticClass:"view-change",on:{click:e.handleViewChale}},[a("span",[e._v(e._s(e.viewModel))])])])},j=[],H={name:"Mapview",components:{},data(){return{viewModel:"3D"}},mounted:function(){this._createMapView()},methods:{async _createMapView(){document.getElementById("basemapToggle").innerHTML="",document.getElementById("scaleBar").innerHTML="",document.getElementById("zoom").innerHTML="";const[e,t,a,s,i,n,r]=await(0,V.loadModules)(["esri/Map","esri/views/MapView","esri/Basemap","esri/layers/TileLayer","esri/widgets/BasemapToggle","esri/widgets/ScaleBar","esri/widgets/Zoom"],$.options);let o=new a({baseLayers:[new s({url:"http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",title:"Basemap"})],title:"basemap",id:"basemap"});const l=new e({basemap:o}),c=new t({container:"mapview",map:l,zoom:10,center:[104.072745,30.663774]});this.basemapToggle=new i({view:c,nextBasemap:"hybrid",container:"basemapToggle"}),c.ui.add(this.basemapToggle),this.scaleBar=new n({view:c,unit:"metric",container:"scaleBar"}),c.ui.add(this.scaleBar),this.zoom=new r({view:c,container:"zoom"}),c.ui.add(this.zoom),c.ui.components=[],this.$store.commit("_setDefaultMapView",c)},async _createSceneView(){document.getElementById("basemapToggle").innerHTML="",document.getElementById("scaleBar").innerHTML="",document.getElementById("zoom").innerHTML="";const[e,t,a,s]=await(0,V.loadModules)(["esri/Map","esri/views/SceneView","esri/Basemap","esri/layers/TileLayer"],$.options);let i=new a({baseLayers:[new s({url:"http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",title:"Basemap"})],title:"basemap",id:"basemap"});const n=new e({basemap:i}),r=new t({container:"mapview",map:n});setTimeout((()=>{r.goTo({zoom:10,center:[104.072745,30.663774]})}),3e3),r.ui.components=[],this.$store.commit("_setDefaultMapView",r)},handleViewChale(){"3D"===this.viewModel?(this._createSceneView(),this.viewModel="2D"):(this._createMapView(),this.viewModel="3D")}}},R=H,X=(0,m.Z)(R,F,j,!1,null,null,null),A=X.exports,G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"maptools-view"},[a("span",{staticClass:"maptools-item",attrs:{id:"xzqh"},on:{click:e.handleMapToolsitemClick}},[e._v("行政区导航")]),a("span",{staticClass:"maptools-item",attrs:{id:"maptree"},on:{click:e.handleMapToolsitemClick}},[e._v("目录树管理")]),a("el-dropdown",{staticClass:"maptools-item",attrs:{trigger:"click"},on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[e._v("地图测量"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{icon:"el-icon-plus",command:"distance"}},[e._v("距离测量")]),a("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus",command:"area"}},[e._v("面积测量")])],1)],1),a("el-dropdown",{staticClass:"maptools-item",attrs:{trigger:"click"},on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[e._v("更多功能"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{icon:"el-icon-search",command:"spacequery"}},[e._v("空间查询")]),a("el-dropdown-item",{attrs:{icon:"el-icon-film",command:"morescreen"}},[e._v("多屏对比")]),a("el-dropdown-item",{attrs:{icon:"el-icon-reading",command:"swipanalyst"}},[e._v("卷帘分析")]),a("el-dropdown-item",{attrs:{icon:"el-icon-picture-outline",command:"printmap"}},[e._v("地图打印")]),a("el-dropdown-item",{attrs:{icon:"el-icon-view",command:"openPopup"}},[e._v("开启图层弹窗")])],1)],1),a("span",{staticClass:"maptools-item",attrs:{id:"clear"},on:{click:e.handleMapToolsitemClick}},[e._v("清屏")])],1)},U=[],W={name:"MapTools",mounted:function(){const e=setInterval((()=>{this.$store.getters._getDefaultMapView&&(this._initSketchTool(),clearInterval(e))}),200)},methods:{async _initSketchTool(){const e=this,t=e.$store.getters._getDefaultMapView,[a,s]=await(0,V.loadModules)(["esri/widgets/Sketch/SketchViewModel","esri/layers/GraphicsLayer"],$.options),i=t.map.findLayerById("polygonGraphicLayer");i&&t.map.remove(i),e.graphicsLayer=new s({id:"polygonGraphicLayer",elevationInfo:{mode:"on-the-ground"}}),t.map.add(e.graphicsLayer);const n={type:"simple-fill",color:"rgba(216,30,6, 0.4)",style:"solid",outline:{color:"#d81e06",width:1}};e.sketchViewModel=new a({updateOnGraphicClick:!1,view:t,layer:e.graphicsLayer,polygonSymbol:n})},handleMapToolsitemClick(e){switch(e.target.id){case"xzqh":this.openXZQHPannel();break;case"maptree":this.openMapTreePannel();break;case"clear":this.handleClearMap();break;default:break}},handleCommand(e){switch(e){case"distance":this.initDistanceMap();break;case"area":this.initAreaMap();break;case"spacequery":this.initSpaceQuery();break;case"morescreen":this.$router.push("/onemap/one");break;case"swipanalyst":this._initSwipe();break;case"printmap":this.handlePrintMap();break;case"openPopup":this.openMapPopup();break;default:break}},openXZQHPannel(){let e=this.$store.getters._getDefaultXZQHVisible;this.$store.commit("_setDefaultXZQHVisible",!e)},openMapTreePannel(){let e=this.$store.getters._getDefaultMapTreeVisible;this.$store.commit("_setDefaultMapTreeVisible",!e)},async initDistanceMap(){const e=this,t=e.$store.getters._getDefaultMapView,[a]=await(0,V.loadModules)(["esri/widgets/DistanceMeasurement2D"],$.options);this.measurementWidget&&this.measurementWidget.destroy(),this.measurementWidget=new a({view:t}),t.ui.add(this.measurementWidget,"top-left")},async initAreaMap(){const e=this,t=e.$store.getters._getDefaultMapView,[a]=await(0,V.loadModules)(["esri/widgets/AreaMeasurement2D"],$.options);this.measurementWidget&&this.measurementWidget.destroy(),this.measurementWidget=new a({view:t}),t.ui.add(this.measurementWidget,"top-left")},async initSpaceQuery(){const e=this,t=e.$store.getters._getDefaultMapView,[a,s]=await(0,V.loadModules)(["esri/Graphic","esri/layers/GraphicsLayer"],$.options),i=t.map.findLayerById("polygonGraphicLayer");i&&t.map.remove(i),e.graphicsLayer=new s({id:"polygonGraphicLayer",elevationInfo:{mode:"on-the-ground"}}),t.map.add(e.graphicsLayer),e.sketchViewModel.create("polygon"),e.sketchViewModel.on("create-complete",(function(t){const s=new a({geometry:t.geometry,symbol:e.sketchViewModel.graphic.symbol});e.graphicsLayer.add(s)})),e.sketchViewModel.on("create",(function(t){"complete"===t.state&&e.handleSpaceQuery(t.graphic)}))},handleSpaceQuery(e){const t=this,a=t.$store.getters._getDefaultMapView,s=a.map.findLayerById("layerid");if(!s)return void t.$message({message:"尚未添加业务图层，不能进行空间查询",type:"warning"});const i=s.createQuery();i.geometry=e.geometry,s.queryFeatures(i).then((function(e){let a=[];e.features.length>0?(t.renderResultLayer(e.features),e.features.map(((e,t)=>{a.push({name:e.attributes.站名,type:e.attributes.性质,tieluju:e.attributes.铁路局,address:e.attributes.省,lon:e.attributes.lng火星,lat:e.attributes.lat火星,key:t})}))):a.length=0,t.$message({message:`查询成功，共查到 ${e.features.length} 条数据`,type:"success"}),t.$store.commit("_setDefaultQueryResult",a),t.$store.commit("_setDefaultQueryResultVisible",!0)})).catch((function(e){console.log(e),t.$message.error("空间查询失败，请联系管理员")}))},async renderResultLayer(e){const t=this.$store.getters._getDefaultMapView,[a]=await(0,V.loadModules)(["esri/layers/FeatureLayer"],$.options),s=t.map.findLayerById("initResultLayer");s&&t.map.remove(s);const i=this._translateLonLat(e);let n={title:"{name}-{adress}",content:[{type:"fields",fieldInfos:[{fieldName:"name",label:"名称"},{fieldName:"type",label:"类型"},{fieldName:"tieluju",label:"铁路局"},{fieldName:"address",label:"省"}]}]};const r=new a({source:i,id:"initResultLayer",objectIdField:"FID",renderer:{type:"simple",symbol:{type:"picture-marker",url:"static/icon/train.png",width:"25px",height:"25px"}},fields:[{name:"FID",type:"oid"},{name:"name",type:"string"},{name:"tieluju",type:"string"},{name:"type",type:"string"},{name:"address",type:"string"}],popupTemplate:n});t.map.add(r)},_translateLonLat(e){const t=this;return e.length>0&&(t.geoData=[],e.map(((e,a)=>{t.geoData.push({geometry:{type:"point",x:Number(e.attributes.lng火星),y:Number(e.attributes.lat火星)},attributes:{FID:a+1,name:e.attributes.站名,type:e.attributes.性质,tieluju:e.attributes.铁路局,address:e.attributes.省}})}))),t.geoData},async _initSwipe(){const e=this,t=e.$store.getters._getDefaultMapView,[a]=await(0,V.loadModules)(["esri/widgets/Swipe"],$.options),s=t.map.findLayerById("swipeLayerTop"),i=t.map.findLayerById("swipeLayerBottom");s&&i?(e.swipe=new a({leadingLayers:[s],trailingLayers:[i],position:35,view:t}),t.ui.add(e.swipe)):e.$message({message:"请添加至少两张业务图层",type:"warning"})},async handlePrintMap(){const e=this,t=e.$store.getters._getDefaultMapView,[a,s,i]=await(0,V.loadModules)(["esri/tasks/PrintTask","esri/tasks/support/PrintTemplate","esri/tasks/support/PrintParameters"],$.options);let n=new a({url:"https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"}),r=new s({format:"pdf",exportOptions:{dpi:100},layout:"a4-portrait",layoutOptions:{titleText:"地图出图demo",authorText:"admin",customTextElements:[{location:"四川省 成都市"},{date:"08/11/2021, 08:20:20 AM"}]}}),o=new i({view:t,template:r});n.execute(o).then(((e,t)=>{console.log(e,t),e.url&&window.open(e.url),t&&this.$message.error("地图打印失败")}))},openMapPopup(){const e=this,t=e.$store.getters._getDefaultMapView,a=t.map.findLayerById("layerid");a?t.on("click",(function(e){t.hitTest(e).then((function(e){if(console.log("1",e),e.results.length){let t=e.results.filter((function(e){return"layerid"===e.graphic.layer.id}))[0].graphic;console.log(t.attributes)}}))})):e.$message({message:"请添加业务图层",type:"warning"})},handleClearMap(){const e=this.$store.getters._getDefaultMapView,t=e.map.findLayerById("swipeLayerTop"),a=e.map.findLayerById("swipeLayerBottom"),s=e.map.findLayerById("layerid"),i=e.map.findLayerById("measurementGraphicLayer");t&&e.map.remove(t),a&&e.map.remove(a),s&&e.map.remove(s),i&&e.map.remove(i),this.swipe&&this.swipe.destroy(),this.measurementWidget&&this.measurementWidget.destroy()}}},q=W,Y=(0,m.Z)(q,G,U,!1,null,null,null),J=Y.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.getters._getDefaultMapTreeVisible,expression:"this.$store.getters._getDefaultMapTreeVisible"}],staticClass:"maptree-pannel"},[a("div",{staticClass:"maptree-header"},[a("span",[e._v("图层管理")]),a("i",{staticClass:"el-icon-close",on:{click:e.closeMapTreePannel}})]),a("el-tree",{attrs:{data:e.data,props:e.defaultProps},on:{"node-click":e.handleNodeClick}})],1)},ee=[],te={name:"MapTree",components:{},data(){return{data:[{label:"底图数据",children:[{label:"暖色系图层",layerid:"layerid",layerurl:"http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer"},{label:"灰色系图层",layerid:"layerid",layerurl:"http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer"}]},{label:"行政区划数据",children:[{label:"省数据",layerid:"layerid",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/sheng/FeatureServer"},{label:"市数据",layerid:"layerid",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/cityccc/FeatureServer"},{label:"县数据",layerid:"layerid",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/county/FeatureServer"}]},{label:"业务数据",children:[{label:"火车站数据",layerid:"layerid",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/station/FeatureServer"},{label:"卷帘分析 top",layerid:"swipeLayerTop",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/cityccc/FeatureServer"},{label:"卷帘分析 bottom",layerid:"swipeLayerBottom",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/county/FeatureServer"}]}],defaultProps:{children:"children",label:"label"}}},mounted:function(){},methods:{async handleNodeClick(e){if(e.layerurl){const t=this.$store.getters._getDefaultMapView,a=t.map.findLayerById("layerid");a&&t.map.remove(a);const[s,i]=await(0,V.loadModules)(["esri/layers/TileLayer","esri/layers/FeatureLayer"],$.options),n=e.layerurl.split("/"),r=n[n.length-1];let o="";switch(r){case"MapServer":o=new s({url:e.layerurl,id:e.layerid});break;case"FeatureServer":o=new i({url:e.layerurl,id:e.layerid});break;default:break}t.map.add(o)}},closeMapTreePannel(){const e=this.$store.getters._getDefaultMapTreeVisible;this.$store.commit("_setDefaultMapTreeVisible",!e)}}},ae=te,se=(0,m.Z)(ae,K,ee,!1,null,null,null),ie=se.exports,ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.getters._getDefaultXZQHVisible,expression:"this.$store.getters._getDefaultXZQHVisible"}],staticClass:"XZQHComponent-pannel"},[a("div",{staticClass:"XZQHComponent-header"},[a("span",[e._v("行政区划导航")]),a("i",{staticClass:"el-icon-close",on:{click:e.closeXZQHPannel}})]),a("div",{staticClass:"XZQH-select-pannel"},[a("span",{staticClass:"XZQH-select-label"},[e._v("省份：")]),a("el-select",{attrs:{size:"mini",clearable:"",placeholder:"请选择省份"},on:{change:e.handleProvinceValueChange},model:{value:e.provinceValue,callback:function(t){e.provinceValue=t},expression:"provinceValue"}},e._l(e.provinceOptions,(function(e){return a("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1),a("div",{staticClass:"XZQH-content-pannel"},[a("tbody",e._l(e.cityAndCountyOptions,(function(t){return a("tr",{key:t.label},[a("td",{staticStyle:{"min-width":"50px"}},[a("span",{staticClass:"city-item",attrs:{value:t.value},on:{click:function(a){return e.handleItemClick(t.value,"city")}}},[e._v(" "+e._s(t.label)+" ")])]),a("td",e._l(t.children,(function(t){return a("span",{key:t.attributes.NAME,staticClass:"county-item",attrs:{value:t.attributes.PAC},on:{click:function(a){return e.handleItemClick(t.attributes.PAC,"county")}}},[e._v(e._s(t.attributes.NAME))])})),0)])})),0)])])},re=[];let oe="";var le={name:"XZQHComponent",components:{},data(){return{provinceOptions:[],provinceValue:"",cityAndCountyOptions:[]}},mounted:function(){this.getProvinceData()},methods:{async getProvinceData(){const e=this,[t,a]=await(0,V.loadModules)(["esri/tasks/QueryTask","esri/tasks/support/Query"],$.options),s=new t({url:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/sheng/FeatureServer/2"});let i=new a;i.returnGeometry=!1,i.outFields=["*"],i.where="1=1",s.execute(i).then((function(t){let a=[];t.features.length>0?(t.features.map((e=>{a.push({value:e.attributes.省代码,label:e.attributes.省})})),e.provinceOptions=a):e.$message({message:"暂时没有省份数据",type:"warning"})}))},async handleProvinceValueChange(e){this.getCityAndCountyData(e)},async getCityAndCountyData(e){const t=this,a=e.toString().substring(0,2),[s,i]=await(0,V.loadModules)(["esri/tasks/QueryTask","esri/tasks/support/Query"],$.options),n=new s({url:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/cityccc/FeatureServer/5"});let r=new i;r.returnGeometry=!1,r.outFields=["*"],r.where="市代码 like '"+a+"%'";let o=await n.execute(r),l=[];o.features.length>0?(o.features.map((e=>{l.push({value:e.attributes.市代码,label:e.attributes.市})})),Promise.all(l.map((async e=>{const t=e.value.toString().substring(0,4),a=new s({url:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/county/FeatureServer/4"});let n=new i;n.returnGeometry=!1,n.outFields=["*"],n.where="市代码 like '"+t+"%'";const r=await a.execute(n);return e.children=r.features,console.log(t),e}))).then((e=>{this.cityAndCountyOptions=e}))):t.$message({message:"暂时没有市级数据",type:"warning"})},async handleItemClick(e,t){let a="",s="";const i=this.$store.getters._getDefaultMapView;"city"===t?(s=e.toString().substring(0,4),a="https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/cityccc/FeatureServer/5"):"county"===t&&(s=e.toString().substring(0,6),a="https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/county/FeatureServer/4");const[n,r,o]=await(0,V.loadModules)(["esri/tasks/QueryTask","esri/tasks/support/Query","esri/Graphic"],$.options),l=new n({url:a});let c=new r;c.returnGeometry=!0,c.outFields=["*"],"city"===t?c.where="省代码 like '"+s+"%'":"county"===t&&(c.where="PAC like '"+s+"%'");let u=await l.execute(c);const p=u.features[0];oe&&i.graphics.remove(oe);const m={type:"simple-fill",color:[188,240,234,.1],outline:{color:"#00FFFF",width:2}};oe=new o({geometry:p.geometry,symbol:m}),i.graphics.add(oe),i.goTo({center:[p.geometry.extent.center.longitude,p.geometry.extent.center.latitude],zoom:8})},closeXZQHPannel(){const e=this.$store.getters._getDefaultXZQHVisible;this.$store.commit("_setDefaultXZQHVisible",!e)}}},ce=le,ue=(0,m.Z)(ce,ne,re,!1,null,null,null),pe=ue.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.getters._getDefaultQueryResultVisible,expression:"this.$store.getters._getDefaultQueryResultVisible"}],staticClass:"result-table-view"},[a("div",{staticClass:"result-table-header"},[a("span",[e._v("空间查询结果")]),a("i",{staticClass:"el-icon-close",on:{click:e.closeResultQueryPannel}})]),a("div",{staticClass:"result-table-content"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:this.$store.getters._getDefaultQueryResult,height:"250"}},[a("el-table-column",{attrs:{prop:"name",label:"站名"}}),a("el-table-column",{attrs:{prop:"type",label:"类型"}}),a("el-table-column",{attrs:{prop:"tieluju",label:"铁路局"}}),a("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)])},de=[],ge={name:"ResultTable",methods:{closeResultQueryPannel(){const e=this.$store.getters._getDefaultQueryResultVisible;this.$store.commit("_setDefaultQueryResultVisible",!e)}}},he=ge,ve=(0,m.Z)(he,me,de,!1,null,null,null),ye=ve.exports,fe={name:"OneMap",components:{Mapview:A,MapTools:J,MapTree:ie,XZQHComponent:pe,ResultTable:ye},methods:{}},we=fe,be=(0,m.Z)(we,E,O,!1,null,null,null),_e=be.exports,Me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"morescreen-view"},[e._m(0),e._m(1),a("div",[a("el-button",{staticClass:"maptools-view",on:{click:e.back}},[e._v("返回")])],1)])},Te=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"morescreen-top-view"},[a("div",{staticClass:"map-item",attrs:{id:"top-left"}}),a("div",{staticClass:"map-item",attrs:{id:"top-right"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"morescreen-bottom-view"},[a("div",{staticClass:"map-item",attrs:{id:"buttom-left"}}),a("div",{staticClass:"map-item",attrs:{id:"buttom-right"}})])}],ke={name:"MoreScreen",mounted:function(){this._initMap()},methods:{async _initMap(){const[e,t,a,s]=await(0,V.loadModules)(["esri/Map","esri/views/MapView","esri/Basemap","esri/layers/TileLayer","esri/core/watchUtils"],$.options),i=new a({baseLayers:[new s({url:"http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",title:"Basemap"})],title:"basemap",id:"basemap"}),n=new e({basemap:i}),r=new t({container:"top-left",map:n,zoom:10,center:[104.072745,30.663774]}),o=new e({basemap:i}),l=new t({container:"top-right",map:o,zoom:10,center:[104.072745,30.663774]}),c=new e({basemap:i}),u=new t({container:"buttom-left",map:c,zoom:10,center:[104.072745,30.663774]}),p=new e({basemap:i}),m=new t({container:"buttom-right",map:p,zoom:10,center:[104.072745,30.663774]});r.ui.components=[],l.ui.components=[],u.ui.components=[],m.ui.components=[];var d=!0,g=!0,h=!0,v=!0;r.on("mouse-wheel",(function(){d?window.setTimeout((function(){l.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),u.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),m.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),g=!1,h=!1,v=!1}),100):d||(d=!0)})),r.on("drag",(function(){console.log(d),d?window.setTimeout((function(){l.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),u.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),m.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),v=!1}),100):d||(d=!0)})),l.on("mouse-wheel",(function(){g?window.setTimeout((function(){r.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),u.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),m.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),g=!1,h=!1,v=!1}),100):g||(g=!0)})),l.on("drag",(function(){console.log(g),g?window.setTimeout((function(){r.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),u.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),m.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),v=!1}),100):g||(g=!0)})),u.on("mouse-wheel",(function(){h?window.setTimeout((function(){r.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),l.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),m.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),g=!1,d=!1,v=!1}),100):h||(d=!0)})),u.on("drag",(function(){console.log(h),h?window.setTimeout((function(){r.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),l.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),m.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),v=!1}),100):h||(h=!0)})),m.on("mouse-wheel",(function(){v?window.setTimeout((function(){l.goTo({center:[m.center.longitude,m.center.latitude],zoom:m.zoom}),u.goTo({center:[m.center.longitude,m.center.latitude],zoom:m.zoom}),r.goTo({center:[m.center.longitude,m.center.latitude],zoom:m.zoom}),g=!1,h=!1,d=!1}),100):v||(v=!0)})),m.on("drag",(function(){console.log(v),v?window.setTimeout((function(){l.goTo({center:[m.center.longitude,m.center.latitude],zoom:m.zoom}),u.goTo({center:[m.center.longitude,m.center.latitude],zoom:m.zoom}),r.goTo({center:[m.center.longitude,m.center.latitude],zoom:m.zoom}),d=!1}),100):v||(v=!0)}))},back(){this.$router.push("/onemap")}}},Ce=ke,De=(0,m.Z)(Ce,Me,Te,!1,null,null,null),Se=De.exports;s["default"].use(y.Z);var Ve=new y.Z({routes:[{path:"/",component:N},{path:"/onemap",component:_e},{path:"/onemap/one",component:Se}],mode:"history"}),xe=a(34665);s["default"].use(xe.ZP);const $e={_defaultMapView:"",_defaultXZQHVisible:!1,_defaultMapTreeVisible:!1,_defaultQueryResultVisible:!1,_defaultQueryResult:[]},ze={_getDefaultMapView(){return $e._defaultMapView},_getDefaultXZQHVisible(){return $e._defaultXZQHVisible},_getDefaultMapTreeVisible(){return $e._defaultMapTreeVisible},_getDefaultQueryResultVisible(){return $e._defaultQueryResultVisible},_getDefaultQueryResult(){return $e._defaultQueryResult}},Ie={_setDefaultMapView(e,t){e._defaultMapView=t},_setDefaultXZQHVisible(e,t){e._defaultXZQHVisible=t},_setDefaultMapTreeVisible(e,t){e._defaultMapTreeVisible=t},_setDefaultQueryResultVisible(e,t){e._defaultQueryResultVisible=t},_setDefaultQueryResult(e,t){e._defaultQueryResult=t}},Le=new xe.ZP.Store({state:$e,getters:ze,mutations:Ie});var Pe=Le;s["default"].prototype.$echarts=S(),s["default"].config.productionTip=!1,s["default"].use(v()),new s["default"]({store:Pe,router:Ve,render:e=>e(g)}).$mount("#app")},24654:function(){}},t={};function a(s){var i=t[s];if(void 0!==i)return i.exports;var n=t[s]={exports:{}};return e[s].call(n.exports,n,n.exports,a),n.exports}a.m=e,function(){var e=[];a.O=function(t,s,i,n){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],i=e[u][1],n=e[u][2];for(var o=!0,l=0;l<s.length;l++)(!1&n||r>=n)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(o=!1,n<r&&(r=n));if(o){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,i,n]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var i,n,r=s[0],o=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in o)a.o(o,i)&&(a.m[i]=o[i]);if(l)var u=l(a)}for(t&&t(s);c<r.length;c++)n=r[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},s=self["webpackChunkwebgis2"]=self["webpackChunkwebgis2"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(36350)}));s=a.O(s)})();
//# sourceMappingURL=app.12da841b.js.map