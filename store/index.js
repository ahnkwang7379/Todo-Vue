/**
 * @description
 * 전역에서 쓰이는 값 관리를 위한 스토어
 * 현재는 todo에 쓰이는 api 호출부로 사용중으로 actions만 씁니다.
 */

export const actions = {
  /**
   * @description
   * TodoList를 받아와 리턴
   */
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
  // TODO: CRUD API
};
