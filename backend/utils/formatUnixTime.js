 /**
   * Extracts sunrise and sunset times and formats them in AM/PM.
   * @param {number} sunrise - The sunrise time in UNIX timestamp format.
   * @param {number} sunset - The sunset time in UNIX timestamp format.
   * @param {number} timezoneOffset - The timezone offset should be in seconds from UTC.
   * @returns {Object} - Contains formatted sunrise and sunset times in AM/PM format as strings.
   */
 export const getFormattedSunTimes = (sunrise, sunset, timezoneOffset) => {
   
    // Format sunrise and sunset times
    const sunriseFormatted = formatUnixTimeToAmPm(sunrise, timezoneOffset);
    const sunsetFormatted = formatUnixTimeToAmPm(sunset, timezoneOffset);
  
    return {
      sunrise: sunriseFormatted,
      sunset: sunsetFormatted,
    };
  };

/**
 * Converts UNIX time to a formatted 12-hour clock time with AM/PM.
 * @param {number} unixTime - The UNIX timestamp in seconds.
 * @param {number} timezoneOffset - The timezone offset in seconds (from UTC).
 * @returns {string} - Formatted time as HH:MM AM/PM.
 */
const formatUnixTimeToAmPm = (unixTime, timezoneOffset) => {
    // Convert UNIX time (seconds) to milliseconds
    const date = new Date((unixTime + timezoneOffset) * 1000); // Adjust for the timezone
  
    // Get time in 12-hour format
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true, // 12-hour clock
      timeZone: "UTC", // Set to UTC and adjust with offset
    };
  
    return date.toLocaleTimeString("en-US", options);
  };
  
 
  