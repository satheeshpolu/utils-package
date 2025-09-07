const calculateTimeDifference = (diffMs) => {
  const totalSeconds = Math.floor(diffMs / 1000);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    duration: `${hours}h ${minutes}m ${seconds}s`,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
};

module.exports = {
  calculateTimeDifference: calculateTimeDifference,
};
