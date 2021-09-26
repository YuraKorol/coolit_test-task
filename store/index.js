import { Store } from 'vuex'

import login from './auth/index'
import error from './error'

const createStore = () => {
  return new Store({
    namespaced: true,
    state: () => ({}),
    modules: {
      login,
      error
    }
  })
}

export default createStore
