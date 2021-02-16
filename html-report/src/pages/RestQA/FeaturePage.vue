<template>
  <div class="dashboard-page">
    <h1 class="page-title">Feature:  {{ feature.feature_name }}</h1>
    <b-row>
      <b-col md="6" xl="3" sm="6" xs="12">
        <div class="pb-xlg h-100">
          <Widget class="h-100 mb-0" title="Visits Today" close>
            <div class="d-flex justify-content-between align-items-center mb-lg">
              <h2></h2>
              <i class="la la-arrow-right text-primary la-lg rotate-315" />
            </div>
            <div class="d-flex flex-wrap justify-content-between">
              <div class="mt">
                <h6>+830</h6><p class="text-muted mb-0 mr"><small>Logins</small></p>
              </div>
              <div class="mt">
                <h6>0.5%</h6><p class="text-muted mb-0"><small>Sign Out</small></p>
              </div>
              <div class="mt">
                <h6>4.5%</h6><p class="text-muted mb-0 mr"><small>Rate</small></p>
              </div>
            </div>
          </Widget>
        </div>
      </b-col>
        <Widget
          title="<h5>Table <span class='fw-semi-bold'>Styles</span></h5>"
          customHeader settings close
        >
          <div class="table-resposive">
            <table class="table">
              <thead>
                <tr>
                  <th class="hidden-sm-down">#</th>
                  <th>Picture</th>
                  <th>Description</th>
                  <th class="hidden-sm-down">Info</th>
                  <th class="hidden-sm-down">Date</th>
                  <th class="hidden-sm-down">Size</th>
                  <th class="hidden-sm-down">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="row in tableStyles" :key="row.id">
                  <td>{{row.id}}</td>
                  <td>
                    <img class="img-rounded" :src="row.picture" alt="" height="50" />
                  </td>
                  <td>
                    {{row.description}}
                    <div v-if="row.label">
                      <b-badge :variant="row.label.colorClass">{{row.label.text}}</b-badge>
                    </div>
                  </td>
                  <td>
                    <p class="mb-0">
                      <small>
                        <span class="fw-semi-bold">Type:</span>
                        <span class="text-muted">&nbsp; {{row.info.type}}</span>
                      </small>
                    </p>
                    <p>
                      <small>
                        <span class="fw-semi-bold">Dimensions:</span>
                        <span class="text-muted">&nbsp; {{row.info.dimensions}}</span>
                      </small>
                    </p>
                  </td>
                  <td class="text-semi-muted">
                    {{parseDate(row.date)}}
                  </td>
                  <td class="text-semi-muted">
                    {{row.size}}
                  </td>
                  <td class="width-150">
                    <b-progress
                      :variant="row.progress.colorClass" :value="row.progress.percent" :max="100"
                      class="progress-sm mb-xs"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="clearfix">
            <div class="float-right">
              <b-button variant="default" class="mr-3" size="sm">Send to...</b-button>
              <b-dropdown variant="inverse" class="mr-xs" size="sm" text="Clear" right>
                <b-dropdown-item>Clear</b-dropdown-item>
                <b-dropdown-item>Move ...</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
                <b-dropdown-divider />
                <b-dropdown-item>Separated link</b-dropdown-item>
              </b-dropdown>
            </div>
            <p>Basic table with styled content</p>
          </div>
        </Widget>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: "FeaturePage",
  components: {
    Widget
  },
  data() {
    return {
      feature: RESTQA_RESULT.features.find(feature => feature.id === this.$route.params.id)
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.feature = RESTQA_RESULT.features.find(feature => feature.id === to.params.id)
    next()
  }
};
</script>
