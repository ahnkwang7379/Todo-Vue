import { format } from 'date-fns';
import { ko } from 'date-fns/locale';

/**
 * @description
 * date를 받아서 date-fns format을 이용해 ko 포멧으로 내려주는 함수
 */
export const makeDateFormat = (date, dateFormat) => {
  if (!date) return null;

  try {
    const formatType = dateFormat || 'yyyy. M. d. (EEEEE) aa h:mm';

    return format(date, formatType, { locale: ko });
  } catch (e) {
    console.error(e);
    return null;
  }
};
