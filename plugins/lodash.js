import { merge } from 'lodash-es'
// import Vue from 'vue'
// // Bad
// import lodash from 'lodash'
// // Vue uniquement
// import VueLodash from 'vue-lodash'
// Vue.use(VueLodash, {
//   name: '$lodash',
//   // lodash,
//   lodash: {
//     merge,
//   },
// })

// Nuxt + Vue
export default (context, inject) => {
  inject('lodash', {
    merge,
  })
}
