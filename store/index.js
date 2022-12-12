import Vue from 'vue';
import Vuex from 'vuex';
import statisticModule from './statistic/index';
import localeModule from './locale/index';
import CountryModule from './country/index'

Vue.use(Vuex);

export default () => new Vuex.Store({
  modules: {
    statistic: statisticModule,
    locale: localeModule,
    country:CountryModule
  }
})

