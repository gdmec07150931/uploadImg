import { create, update, remove, query } from '../../framework/service/index';

export default {

  namespace: 'mediators',

  state: {
    list: [],

  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(location => {
        if(location.pathname === '/mediators') {
          dispatch({
            type: 'query',
          })
        }
      })
    },
  },

  effects: {
    *query({ payload }, { call, put }) {
      const { code, data, message } = yield call(query, '/api/mediators/list', {});
      if (code === 200 && data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.records
          }
        })
      }
    },
  },

  reducers: {
    querySuccess(state, action) {
      return { ...state, ...action.payload };
    },
  }

};
