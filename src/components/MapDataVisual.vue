<template>
<div class="mapview">
  <div  ref="bmap" style="  position: absolute;height:100%; width:100%;" ></div>
  <div  ref='echart2' style="width:400px;height:250px;top:30px;left:50px;float"></div>
</div>
</template>

<script>
require('echarts');
require('echarts/extension/bmap/bmap');
import data from './data/dataValue'
import geoCoordMap from './data/geoCoordMap'
import * as echarts from 'echarts'
import { loadModules } from 'esri-loader';
import config from './config';
import { loadBMap } from './map.js'
export default {
  name: 'BmapScatter',
   return: {
            station: [],
            currentData:[],
   },
 
 mounted () {
    this.initechart2();
    this.initBmap();
    // this.initData();
  },

  methods: {
     async initechart2(){
            const _self = this;
            const [QueryTask, Query] = await loadModules(
                ['esri/tasks/QueryTask', 'esri/tasks/support/Query'],
                config.options,
            );
            const queryTask = new QueryTask({
                url: 'https://services3.arcgis.com/U26uBjSD32d7xvm2/arcgis/rest/services/TONGJI/FeatureServer/6',
            });
            let query = new Query();
            query.returnGeometry = false;
            query.outFields = ['*'];
            query.where = '1=1';
            const currentData = [];
            //Promise then 链式调用
            queryTask.execute(query).then(function (results) {
                if (results.features.length > 0) {
                    results.features.map((item) => {
                        currentData.push({
                            value: item.attributes.车站,
                            X: item.attributes.X,
                            Y: item.attributes.Y,
                            Name:item.attributes.NAME,

                        });
                    });
                    _self.station = currentData;
                    //  console.log(currentData);
                 return currentData;
                  

                } else {
                    _self.$message({
                        message: '暂时没有省份数据',
                        type: 'warning',
                    });
                }
            // console.log(currentData)
});
        console.log(currentData)
        
       setTimeout(() => {
  const convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[currentData[i].Name];
    if (geoCoord) {
      res.push({
        name: currentData[i].Name,
        value: currentData[i].value
      });
    }
  }
 
  return res;
};

  const convertData2 = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[currentData[i].Name];
    if (geoCoord) {
      res.push({
        // name: currentData[i].Name,
        value: currentData[i].Name
      });
    }
  }
 
  return res;
};



        var myChart2 = echarts.init(this.$refs.echart2);
        var option2 = {
            title: {
                text: '各省火车站数量'
            },
            tooltip: {},
            legend: {
                data:convertData(currentData)
            },
            xAxis: {
                data: convertData2(currentData)
            },
            yAxis: {},
            series: [{
                name: '省',
                type: 'bar',
                data: convertData(currentData),
            }]
        };

        myChart2.setOption(option2);

        }, 4000); 
    },

    initBmap () {
      const convertData = function (data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }    
      return res;
      };

      
        loadBMap("xnFdpzA5UPeR4wf8Bfe8YbvVaETx3lWn").then(()=>{
             const myChart = this.$echarts.init(this.$refs.bmap)
      myChart.setOption({
        bmap: {
          // key: 'xnFdpzA5UPeR4wf8Bfe8YbvVaETx3lWn',
          center: [104.114129, 37.550339] // 当前视角中心位置的坐标
        },
        series: [
            {
              name: '火车站数量',
              type: 'scatter',
              coordinateSystem: 'bmap',
              data: convertData(data),
              symbolSize: function (val) {
                return val[2] ;
              },
              encode: {
                value: 2
              },
              label: {
              formatter: '{b}',
              position: 'right',
              show: false
              },
              emphasis: {
                label: {
                show: true
                }
              }
            },
            {
              name: 'Top 5',
              type: 'effectScatter',
              coordinateSystem: 'bmap',
              data: convertData(
                  data
                    .sort(function (a, b) {
                    return b.value - a.value;
                  })
                  .slice(0, 6)
              ),
              symbolSize: function (val) {
                return val[2];
              },
              encode: {
              value: 2
              },
              showEffectOn: 'render',
              rippleEffect: {
              brushType: 'stroke'
              },
              label: {
              formatter: '{b}',
              position: 'right',
              show: true
              },
              itemStyle: {
              shadowBlur: 10,
              shadowColor: '#333'
              },
              emphasis: {
              scale: true
              },
            zlevel: 1
            }
        ],
        title: {
          text: '各省火车站数量',
          left: 'center'
        },
        tooltip: {  // 提示框
            formatter: (params) => {
              return `${params.seriesName}<br />${params.marker} ${params.data.name}: ${params.data.value[2]}`
            }
        },
      });
        })
      


   
    },
  }
}
</script>



<style>
.mapview{
  position: absolute;
  height:100%;
  width:100%;
}

.BMap_cpyCtrl {
    display: none;
}
.anchorBL {
    display: none;
}
</style>