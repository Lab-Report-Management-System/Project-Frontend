import { doLogin, logout, getInfo } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    // eslint-disable-next-line prefer-const
    let { email, password } = userInfo
    // setSha() {/
    password = require('js-sha256').sha256(password)
    // },
    return new Promise((resolve, reject) => {
      doLogin({ email: email.trim(), password: password }).then(response => {
        const { data } = response
        // console.log('呵呵')
        // Cookies.set('token', data.token)
        commit('SET_TOKEN', data.token)
        localStorage.setItem('token', data.token)
        setToken(data.token)
        // console.log(document.cookie)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo(state.token).then(response => {
        const { data } = response
        // debugger
        if (!data) {
          return reject('Verification failed, please Login again.')
        }

        const { roles, userName, userNickname, userPhoto } = data
        // debugger
        // console.log('11111')
        // console.log(roles)
        // roles must be a non-empty array
        if (!roles || roles.length <= 0) {
          reject('getInfo: roles must be a non-null array!')
        }

        // TODO commit失败
        commit('SET_ROLES', roles)
        // const { name, avatar } = data
        //
        commit('SET_NAME', userNickname)
        commit('SET_AVATAR', userPhoto)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      // console.log('????')
      // logout().then(() =>
      // debugger
      removeToken() // must remove  token  first
      resetRouter()
      console.log('退出退出注销')
      commit('RESET_STATE')
      location.reload()
      // this.$router.push('/')
      resolve()
    // }).catch(error => {
    //   reject(error)
    //   console.log('失败辣')
      // })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

