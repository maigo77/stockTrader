import stocks from '@/data/stocks'

export default{
  state: {
    stocks: []
  },
  mutations: {
    setStocks(states, stocks) {
      states.stocks = stocks
    }
  },
  actions: {
    buyStock({ commit }, order){
      commit()
    },
    initStocks({ commit }){
      commit('setStocks', stocks)
    }
  },
  getters: {
    stocks(states){
      return states.stocks
    }
  }
}