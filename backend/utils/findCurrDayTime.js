/**
 * Returns the current time and date formatted based on the city's timezone.
 * @param {number} dt - The UNIX timestamp for the current time.
 * @param {number} timezoneOffset - The timezone offset in seconds from UTC.
 * @returns {Object} - Contains formatted time and date.
 */
export const getCurrentTimeAndDate = (dt, timezoneOffset) => {
  const date = new Date((dt + timezoneOffset) * 1000); // Adjust for the timezone

  // Convert the adjusted time to a local date and time string
  const time = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
    timeZone: "UTC",
  });
  const dateFormatted = date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });

  return { time, date: dateFormatted };
};
