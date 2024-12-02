export const getCurrentTime = () => {
  function formatNumber(num: number) {
    return num.toString().padStart(2, '0');
  }

  const getTime = () => {
    let time = '';
    let date = '';
    let twoWeeksLaterDate = '';
    const currentDate = new Date();
    const day = formatNumber(currentDate.getDate());
    const month = formatNumber(currentDate.getMonth() + 1);
    const hours = formatNumber(currentDate.getHours());
    const minutes = formatNumber(currentDate.getMinutes());

    const twoWeeksLater = new Date();
    twoWeeksLater.setDate(new Date().getDate() + 14);
    const twoWeeksLaterDay = formatNumber(twoWeeksLater.getDate());
    const twoWeeksLaterMonth = formatNumber(twoWeeksLater.getMonth() + 1);

    date = `${day}/${month}`;
    time = `${hours}:${minutes}`;
    twoWeeksLaterDate = `${twoWeeksLaterDay}/${twoWeeksLaterMonth}`;

    return {
      date,
      time,
      twoWeeksLaterDate,
    };
  };

  return {
    getTime,
  };
};
