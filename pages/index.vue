<template>
  <Welcome />
</template>

<script>
/* eslint-disable no-unused-vars */
import { mapActions } from 'vuex'
// import lodash from 'lodash' // Bad
// import * as lodash from 'lodash' // Bad
// import { merge, max } from 'lodash-es'
// import lodash from 'lodash-es' // Bad
// import * as lodash from 'lodash-es'

const o1 = { test1: 1 }
const o2 = { test2: 2 }

export default {
  name: 'PageIndex',
  asyncData({ $utils }) {
    // eslint-disable-next-line no-console
    console.log('PageIndex AsyncData')
    // console.log(merge({}, o1, o2))
    // eslint-disable-next-line no-console
    console.log($utils.merge({}, o1, o2))
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log('PageIndex Mounted')
    const o1 = { test1: 1 }
    const o2 = { test2: 2 }

    // eslint-disable-next-line no-console
    // console.log(lodash.merge({}, o1, o2))

    // Good
    // eslint-disable-next-line no-console
    // console.log(merge({}, o1, o2))
    // eslint-disable-next-line no-console
    console.log(this.$utils.merge({}, o1, o2))
    this.myAction()
  },
  methods: {
    ...mapActions({
      myAction: 'myAction',
    }),
  },
}
</script>
