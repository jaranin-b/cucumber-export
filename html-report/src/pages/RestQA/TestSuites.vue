<template>
  <div class="dashboard-page">
    <h1 class="page-title">Dashboard</h1>
    <b-row>
      <b-col lg="6">
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0" title="Features" >
            <highcharts :options="features"></highcharts>
            {{ result.total }} Features
          </Widget>
        </div>
      </b-col>
      <b-col lg="6">
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0" title="Scenarios">
            <highcharts :options="scenarios"></highcharts>
          </Widget>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';
import { Chart } from 'highcharts-vue';

export default {
  name: "TestSuites",
  components: {
    Widget,
    highcharts: Chart
  },
  data() {
    return {
      result: {
        total: this.getResult().total,
        passed: this.getResult().passed,
        failed: this.getResult().failed
      }
    }
  },
  methods: {
    getFeatureData() {
      return [{
        label: 'Passed',
        data: this.getResult().passed
      },{
        label: 'Failed',
        data: this.getResult().failed
      }]
    },
    getScenarioData() {
      return [{
        label: 'Passed',
        data: this.getResult().scenarios.passed
      },{
        label: 'Failed',
        data: this.getResult().scenarios.failed
      },{
        label: 'skipped',
        data: this.getResult().scenarios.skipped
      },{
        label: 'undefined',
        data: this.getResult().scenarios.undefined
      }]
    }
  },
  computed: {
    features() {
      let {success, danger} = this.appConfig.colors;
      let series = [
        {
          name: 'Features',
          data: this.getFeatureData().map(s => {
            return {
              name: s.label,
              y: s.data
            }
          })
        }
      ];
      return {
        chart: {
          type: 'pie',
          height: 300
        },
        credits: {
          enabled: false
        },
        title: false,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>:<br>{point.percentage:.1f} %<br>value: {point.y}'
            },
            borderColor: null,
            showInLegend: true,
            innerSize: 100,
            size: 200,
            states: {
              hover: {
                halo: {
                  size: 1
                }
              }
            }
          }
        },
        colors: [success, danger],
        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical',
          itemStyle: {
            color: '#495057',
            fontWeight: 100,
            fontFamily: 'Montserrat'
          },
          itemMarginBottom: 5,
          symbolRadius: 0
        },
        exporting: {
          enabled: false
        },
        series
      };
    },
    scenarios() {
      let {success, danger, info, secondary} = this.appConfig.colors;
      let series = [
        {
          name: 'Scenarios',
          data: this.getScenarioData().map(s => {
            return {
              name: s.label,
              y: s.data
            }
          })
        }
      ];
      return {
        chart: {
          type: 'pie',
          height: 300
        },
        credits: {
          enabled: false
        },
        title: false,
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>:<br>{point.percentage:.1f} %<br>value: {point.y}'
            },
            borderColor: null,
            //showInLegend: true,
            innerSize: 100,
            size: 200,
            states: {
              hover: {
                halo: {
                  size: 1
                }
              }
            }
          }
        },
        colors: [success, danger, info, secondary],
        legend: {
          align: 'right',
          verticalAlign: 'middle',
          layout: 'vertical',
          itemStyle: {
            color: '#495057',
            fontWeight: 100,
            fontFamily: 'Montserrat'
          },
          itemMarginBottom: 5,
          symbolRadius: 0
        },
        exporting: {
          enabled: false
        },
        series
      };
    }
  }
};
</script>
