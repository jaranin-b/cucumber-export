import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';
import Login from '@/pages/Login/Login';
import ErrorPage from '@/pages/Error/Error';
// Core
import TypographyPage from '@/pages/Typography/Typography';

// Tables
import TablesBasicPage from '@/pages/Tables/Basic';

// Maps
import GoogleMapPage from '@/pages/Maps/Google';

// Main
import AnalyticsPage from '@/pages/Dashboard/Dashboard';

// Charts
import ChartsPage from '@/pages/Charts/Charts';


// Ui
import IconsPage from '@/pages/Icons/Icons';
import NotificationsPage from '@/pages/Notifications/Notifications';

// RestQA
import TestSuitesPage from '@/pages/RestQA/TestSuites';
import FeaturePage from '@/pages/RestQA/FeaturePage';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Layout,
      children: [
        {
          path: '/',
          name: 'TestSuitesPage',
          component: TestSuitesPage
        },
        {
          path: '/features/:id',
          name: 'FeaturePage',
          component: FeaturePage
        }
      ]
    }
  ],
});
