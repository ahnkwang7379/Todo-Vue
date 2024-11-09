/**
 * @description
 * 투두 리스트 스토어 버전을 위한 간단 스토어
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
    stateTest: 'isTest',
    todoList: [],
  };
};

export const state = () => initState();

export const getters = {
  stateTest: ({ stateTest }) => stateTest,
  todoList: ({ todoList }) => todoList,
};

export const actions = {
  async getTodoList() {
    try {
      const res = await this.$axios.$get(`/rest/v1/todo`);

      return res;
    } catch (e) {
      console.error(e);
      // error 처리는 간단하게 빈 배열 내려서 ui에서 안그리는 방식.
      return [];
    }
  },
};

export const mutations = {
  // store 초기화
  RESET_TODO_STORE(state) {
    Object.assign(state, initState());
  },
};
