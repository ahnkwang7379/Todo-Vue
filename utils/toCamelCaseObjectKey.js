/**
 * @description
 * supabase에서 내려주는 데이터는 스네이크 케이스로, Vue에서 사용하기 위해
 * Object의 key값을 카멜케이스로 변환해서 내려줍니다
 */
export default function toCamelCaseObjectKey(obj) {
  const returnObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    const camelKey = key.replace(/_([a-z])/g, (_, letter) =>
      letter.toUpperCase(),
    );
    returnObj[camelKey] = value;
  });

  return returnObj;
}
