import $ from '@/utils'

export default {
  HOME_DATA: ({commit, state}, data) => {
    commit('home_data', data)
  }
}
