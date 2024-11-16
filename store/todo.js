/**
 * @description
 * 투두 리스트 스토어 버전을 위한 스토어로 전통적인 Nuxt2의 스토어를 따라갑니다.
 * state: 상태값
 * getters: state를 그대로 내리거나 매핑해서 내리고싶을때
 * actions: api 호출
 * mutations: state CRUD
 */

/**
 * @description
 * 스토어 초기값.
 * 간혹 스토어를 초기화시키고 싶을 때,
 * mutations에서 state를 initState로 덮어버리면 간단하게 해결
 */
const initState = () => {
  return {
    // todoList: [],
    todoList: Array.from({ length: 100 }, (_, index) => ({ id: index })),
  };
};

export const state = () => initState();

export const getters = {
  todoList: ({ todoList }) => todoList,
};

export const actions = {
  /**
   * @description
   * todoList를 가져와 store에 세팅해줍니다.
   */
  async getTodoList({ commit }) {
    try {
      const res = await this.$axios.$get(`/rest/v1/todo`);

      // mutation으로 state값 변경
      commit('SET_TODO_LIST', res);
    } catch (e) {
      console.error(e);
    }
  },
};

export const mutations = {
  // store 초기화
  RESET_TODO_STORE(state) {
    Object.assign(state, initState());
  },
  // set todoList
  SET_TODO_LIST(state, todoList) {
    state.todoList = [...state.todoList, ...todoList];
  },
};
