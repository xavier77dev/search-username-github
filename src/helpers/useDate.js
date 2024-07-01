const useDate = (date) => {
  const getDate = new Date(date);
  const year = getDate.getFullYear();
  const mounth = getDate.getMonth() < 10 ?  `0${(getDate.getMonth()+1).toString()}` : getDate.getMonth()+1
  const day = getDate.getDate() < 10 ?  `0${getDate.getDate().toString()}` : getDate.getDate();
  return `${year}-${mounth}-${day}`
}

export default useDate
