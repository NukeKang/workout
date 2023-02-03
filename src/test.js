function msConvertToDate(ms) {
  let msToSec = Math.floor(ms / 1000);

  let second = msToSec;
  let minute = (msToSec = msToSec / 60);
  let hour = (msToSec = msToSec / 60);
  let day = (msToSec = msToSec / 24);
  let month = (msToSec = msToSec / 30);
  let year = (msToSec = msToSec / 12);

  return {
    second: Math.floor(second % 60),
    minute: Math.floor(minute % 60),
    hour: Math.floor(hour % 24),
    day: Math.floor(day % 30),
    month: Math.floor(month % 12),
    year: Math.floor(year),
  };
}

console.log(msConvertToDate(360000 * 1000));
// 연산은 최대한 안하게 짜기, 쓴 애들 다시 재활용할 수 있도록 짜기.
