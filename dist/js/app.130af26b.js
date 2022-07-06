(function(){var e={73919:function(e,t,s){"use strict";var a=s(28935),i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("el-container",{staticClass:"app-out-pannel"},[s("el-header",{staticClass:"sys-header"},[s("span",[e._v("标题")]),s("div",{staticClass:"user-info"},[s("i",{staticClass:"el-icon-user"}),s("span",[e._v("当前用户：")]),s("span",{on:{click:e.handleUserLogin}},[e._v(e._s(e.username))])])]),s("el-container",{staticClass:"app-content-pannel"},[s("el-aside",{staticClass:"sys-menu"},[s("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":"1","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b",collapse:!0},on:{select:e.handleMenuSelect}},[s("el-menu-item",{attrs:{index:"1"}},[s("i",{staticClass:"el-icon-monitor"}),s("span",{attrs:{slot:"title"},slot:"title"},[e._v("首页大屏")])]),s("el-menu-item",{attrs:{index:"2"}},[s("i",{staticClass:"el-icon-picture-outline"}),s("span",{attrs:{slot:"title"},slot:"title"},[e._v("标题")])])],1)],1),s("el-main",{staticClass:"sys-content"},[s("router-view")],1)],1)],1),s("el-dialog",{attrs:{title:"用户登录/注册",visible:e.loginDialogVisible,width:"30%","show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.loginDialogVisible=t}}},[s("div",{staticClass:"login-content"},[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.loginSwitch,expression:"!loginSwitch"}],staticClass:"login-content-login"},[s("p",[e._v("用户名：")]),s("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userNameInput,callback:function(t){e.userNameInput=t},expression:"userNameInput"}}),s("p",[e._v("密码：")]),s("el-input",{attrs:{placeholder:"请输入密码","show-password":""},model:{value:e.userPsdInput,callback:function(t){e.userPsdInput=t},expression:"userPsdInput"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:e.loginSwitch,expression:"loginSwitch"}],staticClass:"login-content-insert"},[s("p",[e._v("用户名：")]),s("el-input",{attrs:{placeholder:"请输入用户名",clearable:""},model:{value:e.userNameInput_insert,callback:function(t){e.userNameInput_insert=t},expression:"userNameInput_insert"}}),s("p",[e._v("密码：")]),s("el-input",{attrs:{placeholder:"请输入密码",clearable:""},model:{value:e.userPsdInput_insert,callback:function(t){e.userPsdInput_insert=t},expression:"userPsdInput_insert"}}),s("p",[e._v("手机号：")]),s("el-input",{attrs:{placeholder:"请输入手机号",clearable:""},model:{value:e.userPhoneInput_insert,callback:function(t){e.userPhoneInput_insert=t},expression:"userPhoneInput_insert"}}),s("p",[e._v("邮箱：")]),s("el-input",{attrs:{placeholder:"请输入邮箱",clearable:""},model:{value:e.userEmailInput_insert,callback:function(t){e.userEmailInput_insert=t},expression:"userEmailInput_insert"}})],1)]),s("br"),s("el-switch",{attrs:{"active-text":"注册","inactive-text":"登录"},model:{value:e.loginSwitch,callback:function(t){e.loginSwitch=t},expression:"loginSwitch"}}),s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:function(t){e.loginDialogVisible=!1}}},[e._v("取 消")]),s("el-button",{attrs:{type:"primary"},on:{click:e.userLogin}},[e._v(e._s(e.loginSwitch?"注册":"登录"))])],1)],1)],1)},n=[],r=s(26166),o=s.n(r),l=s(57421),c=s.n(l),u={name:"App",components:{},data(){return{username:"未登录",loginDialogVisible:!0,userNameInput:"",userPsdInput:"",loginSwitch:!1,userNameInput_insert:"",userPsdInput_insert:"",userPhoneInput_insert:"",userEmailInput_insert:""}},methods:{handleMenuSelect(e){"1"===e?this.$router.push("/"):"2"===e&&this.$router.push("/onemap")},handleUserLogin(){this.loginDialogVisible=!0},userLogin(){const e=this;if(e.loginSwitch){const t=e.userNameInput_insert,s=e.userPsdInput_insert,a=e.userPhoneInput_insert,i=e.userEmailInput_insert;if(!t||!s)return void e.$message({message:"请填写用户名或密码",type:"warning"});o().post("http://localhost:3001/user/insert",c().stringify({name:t,psd:s,phone:a,email:i})).then((function(t){"success"===t.data.status?e.$message({message:"用户注册成功，请登录",type:"success"}):e.$message.error("用户注册失败")})).catch((function(t){e.loginDialogVisible=!1,console.log(t)}))}else{const t=e.userNameInput,s=e.userPsdInput;o().get("http://localhost:3001/user/get",{params:{name:t}}).then((function(t){if("success"===t.data.status){const a=t.data.data[0].psd;a===s?(e.$message({message:"恭喜你，登陆成功",type:"success"}),e.username=t.data.data[0].name,e.loginDialogVisible=!1):e.$message.error("登录失败，用户名或密码错误")}})).catch((function(t){e.loginDialogVisible=!0,e.$message.error("登陆失败，用户名错误"),console.log(t)}))}}}},p=u,d=s(43736),m=(0,d.Z)(p,i,n,!1,null,null,null),g=m.exports,h=s(74549),y=s.n(h),v=s(12809),f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"datavisual-page"},[s("MapDataVisual")],1)},w=[],b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mapview"},[s("div",{ref:"bmap",staticStyle:{position:"absolute",height:"100%",width:"100%"}}),s("div",{ref:"echart2",staticStyle:{width:"400px",height:"250px",top:"30px",left:"50px"}})])},_=[];let M={"浙江":[120.103332,29.104967],"云南":[101.301313,24.141072],"新疆":[85.658103,42.002464],"西藏":[89.115946,31.100655],"四川":[102.897281,34.115401],"陕西":[108.76452,33.38],"山西":[112.382576,37.6985],"山东":[118.430148,36.177868],"青海":[96.477113,35.723426],"宁夏":[105.985434,37.366408],"内蒙古":[111.071687,41.38647],"辽宁":[123.516401,41.473741],"江西":[115.633583,27.734628],"吉林":[126.450145,43.501435],"湖南":[111.57941,28.015791],"湖北":[113.030128,30.899748],"黑龙江":[127.88688,46.770255],"河南":[113.585097,33.800391],"北京市":[117.349074,40.222103],"天津市":[121.48,39.220634],"海南":[109.7747777,19.222206],"贵州":[106.611163,23.015048],"广西":[108.411451,40.97],"甘肃":[103.797119,35.948809],"福建":[118.024644,26.003525],"安徽":[117.187964,32.01357],"上海":[121.681155,31.213965],"重庆":[107.76514,29.799532],"江苏":[119.965609,32.471626],"广东":[113.357876,23.277226],"河北":[115.402864,38.222459]};var T=M,k=s(84759),C=s.n(k),D=s(51969);const V={options:{url:"https://js.arcgis.com/4.18/init.js",css:"https://js.arcgis.com/4.18/esri/themes/light/main.css"}};var S=V;s(4226);s(84759),s(76484);var x={name:"BmapScatter",return:{station:[],currentData:[]},mounted(){this.initechart2(),this.initBmap()},methods:{async initechart2(){const e=this,[t,s]=await(0,D.loadModules)(["esri/tasks/QueryTask","esri/tasks/support/Query"],S.options),a=new t({url:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/TONGJI/FeatureServer/6"});let i=new s;i.returnGeometry=!1,i.outFields=["*"],i.where="1=1";const n=[];a.execute(i).then((function(t){if(t.features.length>0)return t.features.map((e=>{n.push({value:e.attributes.车站,X:e.attributes.X,Y:e.attributes.Y,Name:e.attributes.NAME})})),e.station=n,n;e.$message({message:"暂时没有省份数据",type:"warning"})})),setTimeout((()=>{const e=function(e){for(var t=[],s=0;s<e.length;s++){var a=T[n[s].Name];a&&t.push({name:n[s].Name,value:n[s].value})}return t},t=function(e){for(var t=[],s=0;s<e.length;s++){var a=T[n[s].Name];a&&t.push({value:n[s].Name})}return t};var s=k.init(this.$refs.echart2),a={title:{text:"各省火车站数量"},tooltip:{},legend:{data:e(n)},xAxis:{data:t(n)},yAxis:{},series:[{name:"省",type:"bar",data:e(n)}]};s.setOption(a)}),4e3)},initBmap(){const e=this.$echarts.init(this.$refs.bmap);e.setOption({series:[{type:"map",map:"china"}],title:{text:"各省火车站数量",left:"center"}})}}},$=x,z=(0,d.Z)($,b,_,!1,null,null,null),I=z.exports,L={name:"DataVisual",components:{MapDataVisual:I},methods:{}},P=L,Q=(0,d.Z)(P,f,w,!1,null,null,null),B=Q.exports,Z=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"onemap-page"},[s("Mapview"),s("MapTools"),s("MapTree"),s("XZQHComponent"),s("ResultTable")],1)},N=[],O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mapview-pannel"},[s("div",{attrs:{id:"mapview"}}),s("div",{attrs:{id:"basemapToggle"}}),s("div",{attrs:{id:"scaleBar"}}),s("div",{attrs:{id:"zoom"}}),s("div",{staticClass:"view-change",on:{click:e.handleViewChale}},[s("span",[e._v(e._s(e.viewModel))])])])},F=[],j={name:"Mapview",components:{},data(){return{viewModel:"3D"}},mounted:function(){this._createMapView()},methods:{async _createMapView(){document.getElementById("basemapToggle").innerHTML="",document.getElementById("scaleBar").innerHTML="",document.getElementById("zoom").innerHTML="";const[e,t,s,a,i,n,r]=await(0,D.loadModules)(["esri/Map","esri/views/MapView","esri/Basemap","esri/layers/TileLayer","esri/widgets/BasemapToggle","esri/widgets/ScaleBar","esri/widgets/Zoom"],S.options);let o=new s({baseLayers:[new a({url:"http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",title:"Basemap"})],title:"basemap",id:"basemap"});const l=new e({basemap:o}),c=new t({container:"mapview",map:l,zoom:10,center:[104.072745,30.663774]});this.basemapToggle=new i({view:c,nextBasemap:"hybrid",container:"basemapToggle"}),c.ui.add(this.basemapToggle),this.scaleBar=new n({view:c,unit:"metric",container:"scaleBar"}),c.ui.add(this.scaleBar),this.zoom=new r({view:c,container:"zoom"}),c.ui.add(this.zoom),c.ui.components=[],this.$store.commit("_setDefaultMapView",c)},async _createSceneView(){document.getElementById("basemapToggle").innerHTML="",document.getElementById("scaleBar").innerHTML="",document.getElementById("zoom").innerHTML="";const[e,t,s,a]=await(0,D.loadModules)(["esri/Map","esri/views/SceneView","esri/Basemap","esri/layers/TileLayer"],S.options);let i=new s({baseLayers:[new a({url:"http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",title:"Basemap"})],title:"basemap",id:"basemap"});const n=new e({basemap:i}),r=new t({container:"mapview",map:n});setTimeout((()=>{r.goTo({zoom:10,center:[104.072745,30.663774]})}),3e3),r.ui.components=[],this.$store.commit("_setDefaultMapView",r)},handleViewChale(){"3D"===this.viewModel?(this._createSceneView(),this.viewModel="2D"):(this._createMapView(),this.viewModel="3D")}}},E=j,H=(0,d.Z)(E,O,F,!1,null,null,null),R=H.exports,X=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"maptools-view"},[s("span",{staticClass:"maptools-item",attrs:{id:"xzqh"},on:{click:e.handleMapToolsitemClick}},[e._v("行政区导航")]),s("span",{staticClass:"maptools-item",attrs:{id:"maptree"},on:{click:e.handleMapToolsitemClick}},[e._v("目录树管理")]),s("el-dropdown",{staticClass:"maptools-item",attrs:{trigger:"click"},on:{command:e.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[e._v("地图测量"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{icon:"el-icon-plus",command:"distance"}},[e._v("距离测量")]),s("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus",command:"area"}},[e._v("面积测量")])],1)],1),s("el-dropdown",{staticClass:"maptools-item",attrs:{trigger:"click"},on:{command:e.handleCommand}},[s("span",{staticClass:"el-dropdown-link"},[e._v("更多功能"),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),s("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[s("el-dropdown-item",{attrs:{icon:"el-icon-search",command:"spacequery"}},[e._v("空间查询")]),s("el-dropdown-item",{attrs:{icon:"el-icon-film",command:"morescreen"}},[e._v("多屏对比")]),s("el-dropdown-item",{attrs:{icon:"el-icon-reading",command:"swipanalyst"}},[e._v("卷帘分析")]),s("el-dropdown-item",{attrs:{icon:"el-icon-picture-outline",command:"printmap"}},[e._v("地图打印")]),s("el-dropdown-item",{attrs:{icon:"el-icon-view",command:"openPopup"}},[e._v("开启图层弹窗")])],1)],1),s("span",{staticClass:"maptools-item",attrs:{id:"clear"},on:{click:e.handleMapToolsitemClick}},[e._v("清屏")])],1)},A=[],G={name:"MapTools",mounted:function(){const e=setInterval((()=>{this.$store.getters._getDefaultMapView&&(this._initSketchTool(),clearInterval(e))}),200)},methods:{async _initSketchTool(){const e=this,t=e.$store.getters._getDefaultMapView,[s,a]=await(0,D.loadModules)(["esri/widgets/Sketch/SketchViewModel","esri/layers/GraphicsLayer"],S.options),i=t.map.findLayerById("polygonGraphicLayer");i&&t.map.remove(i),e.graphicsLayer=new a({id:"polygonGraphicLayer",elevationInfo:{mode:"on-the-ground"}}),t.map.add(e.graphicsLayer);const n={type:"simple-fill",color:"rgba(216,30,6, 0.4)",style:"solid",outline:{color:"#d81e06",width:1}};e.sketchViewModel=new s({updateOnGraphicClick:!1,view:t,layer:e.graphicsLayer,polygonSymbol:n})},handleMapToolsitemClick(e){switch(e.target.id){case"xzqh":this.openXZQHPannel();break;case"maptree":this.openMapTreePannel();break;case"clear":this.handleClearMap();break;default:break}},handleCommand(e){switch(e){case"distance":this.initDistanceMap();break;case"area":this.initAreaMap();break;case"spacequery":this.initSpaceQuery();break;case"morescreen":this.$router.push("/onemap/one");break;case"swipanalyst":this._initSwipe();break;case"printmap":this.handlePrintMap();break;case"openPopup":this.openMapPopup();break;default:break}},openXZQHPannel(){let e=this.$store.getters._getDefaultXZQHVisible;this.$store.commit("_setDefaultXZQHVisible",!e)},openMapTreePannel(){let e=this.$store.getters._getDefaultMapTreeVisible;this.$store.commit("_setDefaultMapTreeVisible",!e)},async initDistanceMap(){const e=this,t=e.$store.getters._getDefaultMapView,[s]=await(0,D.loadModules)(["esri/widgets/DistanceMeasurement2D"],S.options);this.measurementWidget&&this.measurementWidget.destroy(),this.measurementWidget=new s({view:t}),t.ui.add(this.measurementWidget,"top-left")},async initAreaMap(){const e=this,t=e.$store.getters._getDefaultMapView,[s]=await(0,D.loadModules)(["esri/widgets/AreaMeasurement2D"],S.options);this.measurementWidget&&this.measurementWidget.destroy(),this.measurementWidget=new s({view:t}),t.ui.add(this.measurementWidget,"top-left")},async initSpaceQuery(){const e=this,t=e.$store.getters._getDefaultMapView,[s,a]=await(0,D.loadModules)(["esri/Graphic","esri/layers/GraphicsLayer"],S.options),i=t.map.findLayerById("polygonGraphicLayer");i&&t.map.remove(i),e.graphicsLayer=new a({id:"polygonGraphicLayer",elevationInfo:{mode:"on-the-ground"}}),t.map.add(e.graphicsLayer),e.sketchViewModel.create("polygon"),e.sketchViewModel.on("create-complete",(function(t){const a=new s({geometry:t.geometry,symbol:e.sketchViewModel.graphic.symbol});e.graphicsLayer.add(a)})),e.sketchViewModel.on("create",(function(t){"complete"===t.state&&e.handleSpaceQuery(t.graphic)}))},handleSpaceQuery(e){const t=this,s=t.$store.getters._getDefaultMapView,a=s.map.findLayerById("layerid");if(!a)return void t.$message({message:"尚未添加业务图层，不能进行空间查询",type:"warning"});const i=a.createQuery();i.geometry=e.geometry,a.queryFeatures(i).then((function(e){let s=[];e.features.length>0?(t.renderResultLayer(e.features),e.features.map(((e,t)=>{s.push({name:e.attributes.站名,type:e.attributes.性质,tieluju:e.attributes.铁路局,address:e.attributes.省,lon:e.attributes.lng火星,lat:e.attributes.lat火星,key:t})}))):s.length=0,t.$message({message:`查询成功，共查到 ${e.features.length} 条数据`,type:"success"}),t.$store.commit("_setDefaultQueryResult",s),t.$store.commit("_setDefaultQueryResultVisible",!0)})).catch((function(e){console.log(e),t.$message.error("空间查询失败，请联系管理员")}))},async renderResultLayer(e){const t=this.$store.getters._getDefaultMapView,[s]=await(0,D.loadModules)(["esri/layers/FeatureLayer"],S.options),a=t.map.findLayerById("initResultLayer");a&&t.map.remove(a);const i=this._translateLonLat(e);let n={title:"{name}-{adress}",content:[{type:"fields",fieldInfos:[{fieldName:"name",label:"名称"},{fieldName:"type",label:"类型"},{fieldName:"tieluju",label:"铁路局"},{fieldName:"address",label:"省"}]}]};const r=new s({source:i,id:"initResultLayer",objectIdField:"FID",renderer:{type:"simple",symbol:{type:"picture-marker",url:"static/icon/train.png",width:"25px",height:"25px"}},fields:[{name:"FID",type:"oid"},{name:"name",type:"string"},{name:"tieluju",type:"string"},{name:"type",type:"string"},{name:"address",type:"string"}],popupTemplate:n});t.map.add(r)},_translateLonLat(e){const t=this;return e.length>0&&(t.geoData=[],e.map(((e,s)=>{t.geoData.push({geometry:{type:"point",x:Number(e.attributes.lng火星),y:Number(e.attributes.lat火星)},attributes:{FID:s+1,name:e.attributes.站名,type:e.attributes.性质,tieluju:e.attributes.铁路局,address:e.attributes.省}})}))),t.geoData},async _initSwipe(){const e=this,t=e.$store.getters._getDefaultMapView,[s]=await(0,D.loadModules)(["esri/widgets/Swipe"],S.options),a=t.map.findLayerById("swipeLayerTop"),i=t.map.findLayerById("swipeLayerBottom");a&&i?(e.swipe=new s({leadingLayers:[a],trailingLayers:[i],position:35,view:t}),t.ui.add(e.swipe)):e.$message({message:"请添加至少两张业务图层",type:"warning"})},async handlePrintMap(){const e=this,t=e.$store.getters._getDefaultMapView,[s,a,i]=await(0,D.loadModules)(["esri/tasks/PrintTask","esri/tasks/support/PrintTemplate","esri/tasks/support/PrintParameters"],S.options);let n=new s({url:"https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"}),r=new a({format:"pdf",exportOptions:{dpi:100},layout:"a4-portrait",layoutOptions:{titleText:"地图出图demo",authorText:"admin",customTextElements:[{location:"四川省 成都市"},{date:"08/11/2021, 08:20:20 AM"}]}}),o=new i({view:t,template:r});n.execute(o).then(((e,t)=>{console.log(e,t),e.url&&window.open(e.url),t&&this.$message.error("地图打印失败")}))},openMapPopup(){const e=this,t=e.$store.getters._getDefaultMapView,s=t.map.findLayerById("layerid");s?t.on("click",(function(e){t.hitTest(e).then((function(e){if(console.log("1",e),e.results.length){let t=e.results.filter((function(e){return"layerid"===e.graphic.layer.id}))[0].graphic;console.log(t.attributes)}}))})):e.$message({message:"请添加业务图层",type:"warning"})},handleClearMap(){const e=this.$store.getters._getDefaultMapView,t=e.map.findLayerById("swipeLayerTop"),s=e.map.findLayerById("swipeLayerBottom"),a=e.map.findLayerById("layerid"),i=e.map.findLayerById("measurementGraphicLayer");t&&e.map.remove(t),s&&e.map.remove(s),a&&e.map.remove(a),i&&e.map.remove(i),this.swipe&&this.swipe.destroy(),this.measurementWidget&&this.measurementWidget.destroy()}}},U=G,W=(0,d.Z)(U,X,A,!1,null,null,null),q=W.exports,Y=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.getters._getDefaultMapTreeVisible,expression:"this.$store.getters._getDefaultMapTreeVisible"}],staticClass:"maptree-pannel"},[s("div",{staticClass:"maptree-header"},[s("span",[e._v("图层管理")]),s("i",{staticClass:"el-icon-close",on:{click:e.closeMapTreePannel}})]),s("el-tree",{attrs:{data:e.data,props:e.defaultProps},on:{"node-click":e.handleNodeClick}})],1)},J=[],K={name:"MapTree",components:{},data(){return{data:[{label:"底图数据",children:[{label:"暖色系图层",layerid:"layerid",layerurl:"http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetWarm/MapServer"},{label:"灰色系图层",layerid:"layerid",layerurl:"http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer"}]},{label:"行政区划数据",children:[{label:"省数据",layerid:"layerid",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/sheng/FeatureServer"},{label:"市数据",layerid:"layerid",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/cityccc/FeatureServer"},{label:"县数据",layerid:"layerid",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/county/FeatureServer"}]},{label:"业务数据",children:[{label:"火车站数据",layerid:"layerid",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/station/FeatureServer"},{label:"卷帘分析 top",layerid:"swipeLayerTop",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/cityccc/FeatureServer"},{label:"卷帘分析 bottom",layerid:"swipeLayerBottom",layerurl:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/county/FeatureServer"}]}],defaultProps:{children:"children",label:"label"}}},mounted:function(){},methods:{async handleNodeClick(e){if(e.layerurl){const t=this.$store.getters._getDefaultMapView,s=t.map.findLayerById("layerid");s&&t.map.remove(s);const[a,i]=await(0,D.loadModules)(["esri/layers/TileLayer","esri/layers/FeatureLayer"],S.options),n=e.layerurl.split("/"),r=n[n.length-1];let o="";switch(r){case"MapServer":o=new a({url:e.layerurl,id:e.layerid});break;case"FeatureServer":o=new i({url:e.layerurl,id:e.layerid});break;default:break}t.map.add(o)}},closeMapTreePannel(){const e=this.$store.getters._getDefaultMapTreeVisible;this.$store.commit("_setDefaultMapTreeVisible",!e)}}},ee=K,te=(0,d.Z)(ee,Y,J,!1,null,null,null),se=te.exports,ae=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.getters._getDefaultXZQHVisible,expression:"this.$store.getters._getDefaultXZQHVisible"}],staticClass:"XZQHComponent-pannel"},[s("div",{staticClass:"XZQHComponent-header"},[s("span",[e._v("行政区划导航")]),s("i",{staticClass:"el-icon-close",on:{click:e.closeXZQHPannel}})]),s("div",{staticClass:"XZQH-select-pannel"},[s("span",{staticClass:"XZQH-select-label"},[e._v("省份：")]),s("el-select",{attrs:{size:"mini",clearable:"",placeholder:"请选择省份"},on:{change:e.handleProvinceValueChange},model:{value:e.provinceValue,callback:function(t){e.provinceValue=t},expression:"provinceValue"}},e._l(e.provinceOptions,(function(e){return s("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})})),1)],1),s("div",{staticClass:"XZQH-content-pannel"},[s("tbody",e._l(e.cityAndCountyOptions,(function(t){return s("tr",{key:t.label},[s("td",{staticStyle:{"min-width":"50px"}},[s("span",{staticClass:"city-item",attrs:{value:t.value},on:{click:function(s){return e.handleItemClick(t.value,"city")}}},[e._v(" "+e._s(t.label)+" ")])]),s("td",e._l(t.children,(function(t){return s("span",{key:t.attributes.NAME,staticClass:"county-item",attrs:{value:t.attributes.PAC},on:{click:function(s){return e.handleItemClick(t.attributes.PAC,"county")}}},[e._v(e._s(t.attributes.NAME))])})),0)])})),0)])])},ie=[];let ne="";var re={name:"XZQHComponent",components:{},data(){return{provinceOptions:[],provinceValue:"",cityAndCountyOptions:[]}},mounted:function(){this.getProvinceData()},methods:{async getProvinceData(){const e=this,[t,s]=await(0,D.loadModules)(["esri/tasks/QueryTask","esri/tasks/support/Query"],S.options),a=new t({url:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/sheng/FeatureServer/2"});let i=new s;i.returnGeometry=!1,i.outFields=["*"],i.where="1=1",a.execute(i).then((function(t){let s=[];t.features.length>0?(t.features.map((e=>{s.push({value:e.attributes.省代码,label:e.attributes.省})})),e.provinceOptions=s):e.$message({message:"暂时没有省份数据",type:"warning"})}))},async handleProvinceValueChange(e){this.getCityAndCountyData(e)},async getCityAndCountyData(e){const t=this,s=e.toString().substring(0,2),[a,i]=await(0,D.loadModules)(["esri/tasks/QueryTask","esri/tasks/support/Query"],S.options),n=new a({url:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/cityccc/FeatureServer/5"});let r=new i;r.returnGeometry=!1,r.outFields=["*"],r.where="市代码 like '"+s+"%'";let o=await n.execute(r),l=[];o.features.length>0?(o.features.map((e=>{l.push({value:e.attributes.市代码,label:e.attributes.市})})),Promise.all(l.map((async e=>{const t=e.value.toString().substring(0,4),s=new a({url:"https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/county/FeatureServer/4"});let n=new i;n.returnGeometry=!1,n.outFields=["*"],n.where="市代码 like '"+t+"%'";const r=await s.execute(n);return e.children=r.features,console.log(t),e}))).then((e=>{this.cityAndCountyOptions=e}))):t.$message({message:"暂时没有市级数据",type:"warning"})},async handleItemClick(e,t){let s="",a="";const i=this.$store.getters._getDefaultMapView;"city"===t?(a=e.toString().substring(0,4),s="https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/cityccc/FeatureServer/5"):"county"===t&&(a=e.toString().substring(0,6),s="https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/county/FeatureServer/4");const[n,r,o]=await(0,D.loadModules)(["esri/tasks/QueryTask","esri/tasks/support/Query","esri/Graphic"],S.options),l=new n({url:s});let c=new r;c.returnGeometry=!0,c.outFields=["*"],"city"===t?c.where="省代码 like '"+a+"%'":"county"===t&&(c.where="PAC like '"+a+"%'");let u=await l.execute(c);const p=u.features[0];ne&&i.graphics.remove(ne);const d={type:"simple-fill",color:[188,240,234,.1],outline:{color:"#00FFFF",width:2}};ne=new o({geometry:p.geometry,symbol:d}),i.graphics.add(ne),i.goTo({center:[p.geometry.extent.center.longitude,p.geometry.extent.center.latitude],zoom:8})},closeXZQHPannel(){const e=this.$store.getters._getDefaultXZQHVisible;this.$store.commit("_setDefaultXZQHVisible",!e)}}},oe=re,le=(0,d.Z)(oe,ae,ie,!1,null,null,null),ce=le.exports,ue=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{directives:[{name:"show",rawName:"v-show",value:this.$store.getters._getDefaultQueryResultVisible,expression:"this.$store.getters._getDefaultQueryResultVisible"}],staticClass:"result-table-view"},[s("div",{staticClass:"result-table-header"},[s("span",[e._v("空间查询结果")]),s("i",{staticClass:"el-icon-close",on:{click:e.closeResultQueryPannel}})]),s("div",{staticClass:"result-table-content"},[s("el-table",{staticStyle:{width:"100%"},attrs:{data:this.$store.getters._getDefaultQueryResult,height:"250"}},[s("el-table-column",{attrs:{prop:"name",label:"站名"}}),s("el-table-column",{attrs:{prop:"type",label:"类型"}}),s("el-table-column",{attrs:{prop:"tieluju",label:"铁路局"}}),s("el-table-column",{attrs:{prop:"address",label:"地址"}})],1)],1)])},pe=[],de={name:"ResultTable",methods:{closeResultQueryPannel(){const e=this.$store.getters._getDefaultQueryResultVisible;this.$store.commit("_setDefaultQueryResultVisible",!e)}}},me=de,ge=(0,d.Z)(me,ue,pe,!1,null,null,null),he=ge.exports,ye={name:"OneMap",components:{Mapview:R,MapTools:q,MapTree:se,XZQHComponent:ce,ResultTable:he},methods:{}},ve=ye,fe=(0,d.Z)(ve,Z,N,!1,null,null,null),we=fe.exports,be=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"morescreen-view"},[e._m(0),e._m(1),s("div",[s("el-button",{staticClass:"maptools-view",on:{click:e.back}},[e._v("返回")])],1)])},_e=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"morescreen-top-view"},[s("div",{staticClass:"map-item",attrs:{id:"top-left"}}),s("div",{staticClass:"map-item",attrs:{id:"top-right"}})])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"morescreen-bottom-view"},[s("div",{staticClass:"map-item",attrs:{id:"buttom-left"}}),s("div",{staticClass:"map-item",attrs:{id:"buttom-right"}})])}],Me={name:"MoreScreen",mounted:function(){this._initMap()},methods:{async _initMap(){const[e,t,s,a]=await(0,D.loadModules)(["esri/Map","esri/views/MapView","esri/Basemap","esri/layers/TileLayer","esri/core/watchUtils"],S.options),i=new s({baseLayers:[new a({url:"http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer",title:"Basemap"})],title:"basemap",id:"basemap"}),n=new e({basemap:i}),r=new t({container:"top-left",map:n,zoom:10,center:[104.072745,30.663774]}),o=new e({basemap:i}),l=new t({container:"top-right",map:o,zoom:10,center:[104.072745,30.663774]}),c=new e({basemap:i}),u=new t({container:"buttom-left",map:c,zoom:10,center:[104.072745,30.663774]}),p=new e({basemap:i}),d=new t({container:"buttom-right",map:p,zoom:10,center:[104.072745,30.663774]});r.ui.components=[],l.ui.components=[],u.ui.components=[],d.ui.components=[];var m=!0,g=!0,h=!0,y=!0;r.on("mouse-wheel",(function(){m?window.setTimeout((function(){l.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),u.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),d.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),g=!1,h=!1,y=!1}),100):m||(m=!0)})),r.on("drag",(function(){console.log(m),m?window.setTimeout((function(){l.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),u.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),d.goTo({center:[r.center.longitude,r.center.latitude],zoom:r.zoom}),y=!1}),100):m||(m=!0)})),l.on("mouse-wheel",(function(){g?window.setTimeout((function(){r.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),u.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),d.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),g=!1,h=!1,y=!1}),100):g||(g=!0)})),l.on("drag",(function(){console.log(g),g?window.setTimeout((function(){r.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),u.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),d.goTo({center:[l.center.longitude,l.center.latitude],zoom:l.zoom}),y=!1}),100):g||(g=!0)})),u.on("mouse-wheel",(function(){h?window.setTimeout((function(){r.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),l.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),d.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),g=!1,m=!1,y=!1}),100):h||(m=!0)})),u.on("drag",(function(){console.log(h),h?window.setTimeout((function(){r.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),l.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),d.goTo({center:[u.center.longitude,u.center.latitude],zoom:u.zoom}),y=!1}),100):h||(h=!0)})),d.on("mouse-wheel",(function(){y?window.setTimeout((function(){l.goTo({center:[d.center.longitude,d.center.latitude],zoom:d.zoom}),u.goTo({center:[d.center.longitude,d.center.latitude],zoom:d.zoom}),r.goTo({center:[d.center.longitude,d.center.latitude],zoom:d.zoom}),g=!1,h=!1,m=!1}),100):y||(y=!0)})),d.on("drag",(function(){console.log(y),y?window.setTimeout((function(){l.goTo({center:[d.center.longitude,d.center.latitude],zoom:d.zoom}),u.goTo({center:[d.center.longitude,d.center.latitude],zoom:d.zoom}),r.goTo({center:[d.center.longitude,d.center.latitude],zoom:d.zoom}),m=!1}),100):y||(y=!0)}))},back(){this.$router.push("/onemap")}}},Te=Me,ke=(0,d.Z)(Te,be,_e,!1,null,null,null),Ce=ke.exports;a["default"].use(v.Z);var De=new v.Z({routes:[{path:"/",component:B},{path:"/onemap",component:we},{path:"/onemap/one",component:Ce}],mode:"history"}),Ve=s(34665);a["default"].use(Ve.ZP);const Se={_defaultMapView:"",_defaultXZQHVisible:!1,_defaultMapTreeVisible:!1,_defaultQueryResultVisible:!1,_defaultQueryResult:[]},xe={_getDefaultMapView(){return Se._defaultMapView},_getDefaultXZQHVisible(){return Se._defaultXZQHVisible},_getDefaultMapTreeVisible(){return Se._defaultMapTreeVisible},_getDefaultQueryResultVisible(){return Se._defaultQueryResultVisible},_getDefaultQueryResult(){return Se._defaultQueryResult}},$e={_setDefaultMapView(e,t){e._defaultMapView=t},_setDefaultXZQHVisible(e,t){e._defaultXZQHVisible=t},_setDefaultMapTreeVisible(e,t){e._defaultMapTreeVisible=t},_setDefaultQueryResultVisible(e,t){e._defaultQueryResultVisible=t},_setDefaultQueryResult(e,t){e._defaultQueryResult=t}},ze=new Ve.ZP.Store({state:Se,getters:xe,mutations:$e});var Ie=ze;a["default"].prototype.$echarts=C(),a["default"].config.productionTip=!1,a["default"].use(y()),new a["default"]({store:Ie,router:De,render:e=>e(g)}).$mount("#app")},24654:function(){}},t={};function s(a){var i=t[a];if(void 0!==i)return i.exports;var n=t[a]={exports:{}};return e[a].call(n.exports,n,n.exports,s),n.exports}s.m=e,function(){var e=[];s.O=function(t,a,i,n){if(!a){var r=1/0;for(u=0;u<e.length;u++){a=e[u][0],i=e[u][1],n=e[u][2];for(var o=!0,l=0;l<a.length;l++)(!1&n||r>=n)&&Object.keys(s.O).every((function(e){return s.O[e](a[l])}))?a.splice(l--,1):(o=!1,n<r&&(r=n));if(o){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[a,i,n]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,a){var i,n,r=a[0],o=a[1],l=a[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(l)var u=l(s)}for(t&&t(a);c<r.length;c++)n=r[c],s.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return s.O(u)},a=self["webpackChunkwebgis2"]=self["webpackChunkwebgis2"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(73919)}));a=s.O(a)})();
//# sourceMappingURL=app.130af26b.js.map