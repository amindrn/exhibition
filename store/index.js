export const state = () => ({
    counter: true
  })

  export const mutations = {
    increment(state) {
      state.counter = false
    },
    increment2(state) {
      state.counter = true
    }
  }