export const getFormattedPrice = (n: number) => n.toLocaleString("ko-KR");
export const getStartDate = (date: Date) => {
  const newDate = new Date(date);
  const month = newDate.getMonth();
  const day = newDate.getDay();
  const week = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  return `${month}월 ${day}일 (${week[day]})부터`;
};
export const isNewCar = (date: Date) => {
  const newDate = new Date(date);
  const today = new Date();
  const gap = today.getDay() - newDate.getDay();
  return gap < 1;
};
