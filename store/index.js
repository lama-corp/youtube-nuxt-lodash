export const state = () => ({})

export const actions = {
  myAction() {
    // eslint-disable-next-line no-console
    console.log('Store myAction')
    // eslint-disable-next-line no-console
    console.log(this.app.$lodash.merge({}, { test1: 1 }, { test2: 2 }))
  },
}

export const mutations = {}
