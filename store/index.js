/**
 * @description
 * 전역에서 쓰이는 값 관리를 위한 스토어
 */

const initState = () => {
  return {
    stateTest: 'isTest',
  };
};

export const state = () => initState();

export const getters = {
  stateTest: ({ stateTest }) => stateTest,
};

export const actions = {
  // actions
};

export const mutations = {
  // mutations
};
