<template> 
    <div class="morescreen-view">
        <div class="morescreen-top-view">
            <div id="top-left" class="map-item"></div>
            <div id="top-right" class="map-item"></div>
        </div>
        <div class="morescreen-bottom-view">
            <div id="buttom-left" class="map-item"></div>
            <div id="buttom-right" class="map-item"></div>
        </div>
        <div>
            <el-button class="maptools-view" @click="back">返回</el-button>
        </div>
    </div>
</template>

<script>
import { loadModules } from 'esri-loader';
import config from './config';
export default {
    name: 'MoreScreen',
    mounted: function () {
        this._initMap();
    },
    methods:{
        async _initMap() {
            const [Map, MapView, Basemap, TileLayer, ] = await loadModules(
                ['esri/Map', 'esri/views/MapView', 'esri/Basemap', 'esri/layers/TileLayer', 'esri/core/watchUtils'],
                 config.options,
            );
            const basemap = new Basemap({
                baseLayers: [
                    new TileLayer({
                        url: 'http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer',
                        title: 'Basemap',
                    }),
                ],
                title: 'basemap',
                id: 'basemap',
            });
            const map01 = new Map({
                basemap,
            });
            const mapView01 = new MapView({
                container: 'top-left',
                map: map01,
                zoom: 10,
                center: [104.072745, 30.663774],
            });
            const map02 = new Map({
                basemap,
            });
            const mapView02 = new MapView({
                container: 'top-right',
                map: map02,
                zoom: 10,
                center: [104.072745, 30.663774],
            });
            const map03 = new Map({
                basemap,
            });
            const mapView03 = new MapView({
                container: 'buttom-left',
                map: map03,
                zoom: 10,
                center: [104.072745, 30.663774],
            });
            const map04 = new Map({
                basemap,
            });
            const mapView04 = new MapView({
                container: 'buttom-right',
                map: map04,
                zoom: 10,
                center: [104.072745, 30.663774],
            });
            mapView01.ui.components = [];
            mapView02.ui.components = [];
            mapView03.ui.components = [];
            mapView04.ui.components = [];
            //地图联动
            var flag1=true;
            var flag2=true;
            var flag3=true;
            var flag4=true;
            mapView01.on("mouse-wheel",function(){
                if(flag1){
                    window.setTimeout(function(){
                        mapView02.goTo({
                        center: [mapView01.center.longitude, mapView01.center.latitude],
                        zoom: mapView01.zoom,
                    });
                    mapView03.goTo({
                        center: [mapView01.center.longitude, mapView01.center.latitude],
                        zoom: mapView01.zoom,
                    });
                    mapView04.goTo({
                        center: [mapView01.center.longitude, mapView01.center.latitude],
                        zoom: mapView01.zoom,
                         });
                        flag2= false;
                        flag3= false;
                        flag4 = false;
                    },100)
                }else if(!flag1){
                    flag1 = true;
                }
            });
            mapView01.on("drag",function(){
                console.log(flag1)
                if(flag1){                  
                    window.setTimeout(function(){
                        mapView02.goTo({
                        center: [mapView01.center.longitude, mapView01.center.latitude],
                        zoom: mapView01.zoom,
                    });
                    mapView03.goTo({
                        center: [mapView01.center.longitude, mapView01.center.latitude],
                        zoom: mapView01.zoom,
                    });
                    mapView04.goTo({
                        center: [mapView01.center.longitude, mapView01.center.latitude],
                        zoom: mapView01.zoom,
                         });
                    flag2,flag3,flag4=false;
                        },100)
                }else if(!flag1){
                    flag1 = true;
                }
            });

            mapView02.on("mouse-wheel",function(){
                if(flag2){
                    window.setTimeout(function(){
                        mapView01.goTo({
                        center: [mapView02.center.longitude, mapView02.center.latitude],
                        zoom: mapView02.zoom,
                    });
                    mapView03.goTo({
                        center: [mapView02.center.longitude, mapView02.center.latitude],
                        zoom: mapView02.zoom,
                    });
                    mapView04.goTo({
                        center: [mapView02.center.longitude, mapView02.center.latitude],
                        zoom: mapView02.zoom,
                         });
                        flag2= false;
                        flag3= false;
                        flag4 = false;
                    },100)
                }else if(!flag2){
                    flag2 = true;
                }
            });
            mapView02.on("drag",function(){
                console.log(flag2)
                if(flag2){                  
                    window.setTimeout(function(){
                        mapView01.goTo({
                        center: [mapView02.center.longitude, mapView02.center.latitude],
                        zoom: mapView02.zoom,
                    });
                    mapView03.goTo({
                        center: [mapView02.center.longitude, mapView02.center.latitude],
                        zoom: mapView02.zoom,
                    });
                    mapView04.goTo({
                        center: [mapView02.center.longitude, mapView02.center.latitude],
                        zoom: mapView02.zoom,
                         });
                    flag1,flag3,flag4=false;
                        },100)
                }else if(!flag2){
                    flag2 = true;
                }
            });

                mapView03.on("mouse-wheel",function(){
                if(flag3){
                    window.setTimeout(function(){
                        mapView01.goTo({
                        center: [mapView03.center.longitude, mapView03.center.latitude],
                        zoom: mapView03.zoom,
                    });
                    mapView02.goTo({
                        center: [mapView03.center.longitude, mapView03.center.latitude],
                        zoom: mapView03.zoom,
                    });
                    mapView04.goTo({
                        center: [mapView03.center.longitude, mapView03.center.latitude],
                        zoom: mapView03.zoom,
                         });
                        flag2= false;
                        flag1= false;
                        flag4 = false;
                    },100)
                }else if(!flag3){
                    flag1 = true;
                }
            });
            mapView03.on("drag",function(){
                console.log(flag3)
                if(flag3){                  
                    window.setTimeout(function(){
                        mapView01.goTo({
                        center: [mapView03.center.longitude, mapView03.center.latitude],
                        zoom: mapView03.zoom,
                    });
                    mapView02.goTo({
                        center: [mapView03.center.longitude, mapView03.center.latitude],
                        zoom: mapView03.zoom,
                    });
                    mapView04.goTo({
                        center: [mapView03.center.longitude, mapView03.center.latitude],
                        zoom: mapView03.zoom,
                         });
                    flag1,flag2,flag4=false;
                        },100)
                }else if(!flag3){
                    flag3 = true;
                }
            });

            mapView04.on("mouse-wheel",function(){
                if(flag4){
                    window.setTimeout(function(){
                        mapView02.goTo({
                        center: [mapView04.center.longitude, mapView04.center.latitude],
                        zoom: mapView04.zoom,
                    });
                    mapView03.goTo({
                        center: [mapView04.center.longitude, mapView04.center.latitude],
                        zoom: mapView04.zoom,
                    });
                    mapView01.goTo({
                        center: [mapView04.center.longitude, mapView04.center.latitude],
                        zoom: mapView04.zoom,
                         });
                        flag2= false;
                        flag3= false;
                        flag1 = false;
                    },100)
                }else if(!flag4){
                    flag4 = true;
                }
            });
            mapView04.on("drag",function(){
                console.log(flag4)
                if(flag4){                  
                    window.setTimeout(function(){
                        mapView02.goTo({
                        center: [mapView04.center.longitude, mapView04.center.latitude],
                        zoom: mapView04.zoom,
                    });
                    mapView03.goTo({
                        center: [mapView04.center.longitude, mapView04.center.latitude],
                        zoom: mapView04.zoom,
                    });
                    mapView01.goTo({
                        center: [mapView04.center.longitude, mapView04.center.latitude],
                        zoom: mapView04.zoom,
                         });
                    flag2,flag3,flag1=false;
                        },100)
                }else if(!flag4){
                    flag4 = true;
                }
            });
        },
            back(){
                
                    this.$router.push('/onemap');
            },
    },
};
</script>

<style>
.morescreen-view {
    width: 100%;
    height: 100%;
}
.map-item {
    width: calc(50% - 2.5px);
    height: 100%;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
}
.morescreen-top-view {
    width: 100%;
    height: calc(50% - 2.5px);
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.5px;
}
.morescreen-bottom-view {
    width: 100%;
    height: calc(50% - 2.5px);
    display: flex;
    justify-content: space-between;
    margin-top: 2.5px;
}
#top-left {
    margin-right: 2.5px;
}
#top-right {
    margin-left: 2.5px;
}
#buttom-left {
    margin-right: 2.5px;
}
#buttom-right {
    margin-left: 2.5px;
}
.maptools-view{
    top: 6%;
    /* background-color:transparent; */
    
}
</style>