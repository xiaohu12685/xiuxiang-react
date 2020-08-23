
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

function counter(state = 0, action) {
    switch (action.type) {
        case 'upData':
            return action.data;
        default:
            return state;
    }
}
function* Saga() {
    // 用Promise模拟网络请求
    var str = yield new Promise((resolve, reject) => {
      resolve('小明')
    })
  
    store.dispatch({ type: 'upData', data: str });
  
  }

let store = createStore(counter, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(Saga)

export default store
