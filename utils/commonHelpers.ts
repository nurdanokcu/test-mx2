export const manageNoScroll = () => {
  if (document.body.classList.contains('no-scroll')) {
    document.body.classList.remove('no-scroll');
  } else {
    document.body.classList.add('no-scroll');
  }
};

/**
 * Formats a metric name by capitalizing the first letter of each word
 * and converting it to a title case.
 *
 * @param {string} metricName - The metric name to be formatted.
 * @returns {string} The formatted metric name in title case.
 */
export const formatMetricName = (metricName: string): string => {
  const words = metricName.split('_');

  const formattedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  const formattedMetricName = formattedWords.join(' ');
  return formattedMetricName;
};

/**
 * Formats a metric value by adding commas to the thousands place.
 *
 * @param {number} metricValue - The metric value to be formatted.
 * @returns {string} The formatted metric value.
 */
export const sliceLongTexts = (text: string, maxLength: number) => {
  if (!text) {
    return '';
  }
  if (text.length > maxLength) {
    return `${text.slice(0, maxLength)}...`;
  }
  return text;
};

export const extractDateFromISO = (date: string) => {
  return date.split('T')[0];
};

export const handleRevokeBlob = (blobUrl: string) => {
  URL.revokeObjectURL(blobUrl);
};
