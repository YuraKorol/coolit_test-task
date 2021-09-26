import checkLogin from './checkLogin'

export default {
  state: () => ({
    users: [
      {
        _id: 1,
        login: 'Yura',
        email: 'yura@gmail.com',
        password: '1111',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgolBdeaXdt7hZ4G28YiA8shOCg4jkBg08uA&usqp=CAU'
      },
      {
        _id: 2,
        login: 'Dmitriy',
        email: 'dmitriy@gmail.com',
        password: '2222',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZLQ9aUPQx3hl9nxSnOgL14LXt6GQu30Tm4w&usqp=CAU'
      },
      {
        _id: 3,
        login: 'Andrey',
        email: 'andrey@gmail.com',
        password: '3333',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvatlV1XCcuZ0wY_o4_EzNOspCKy1DH0_9aQ&usqp=CAU'
      },
      {
        _id: 4,
        login: 'Taras',
        email: 'taras@gmail.com',
        password: '4444',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE6sUVBjJoOSZxylawsipysrXvmlz3qGtaPw&usqp=CAU'
      },
      {
        _id: 5,
        login: 'Mykola',
        email: 'mykola@gmail.com',
        password: '5555',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPWM1Fb7n2wvfpvVefrytSSl3OwTalE23UqA&usqp=CAU'
      }
    ],
    user: null,
    error: {
      message: '',
      append: false
    }
  }),
  mutations: {
    signIn(state, payload) {
      if (checkLogin(state, payload)) {
        state.user = state.users.filter(
          i => i.email === payload.email && i.password === payload.password
        )[0]
        localStorage.setItem('user_id', JSON.stringify(state.user._id))
        this.$router.push('/profile/' + state.user._id)
      }
    },
    logout(state) {
      state.user = null
      localStorage.removeItem('user_id')
      this.$router.push('/signin')
    },
    loadUserFromLS(state) {
      if (localStorage.getItem('user_id')) {
        const userId = JSON.parse(localStorage.getItem('user_id'))
        const user = state.users.find(i => i._id === userId)
        state.user = user
      }
    }
  },
  actions: {
    signIn({ commit }, payload) {
      commit('signIn', payload)
    },
    logout({ commit }) {
      commit('logout')
    },
    loadUserFromLS({ commit }) {
      commit('loadUserFromLS')
    }
  },
  getters: {
    users: state => state.users,
    user: state => state.user,
    error: state => state.error
  }
}
