export const getTimezone = () => {
  try {
    return (
      Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone.split("/")[1] +
      " (+" +
      (new Date().getTimezoneOffset() / 60) * -1 +
      ")"
    );
  } catch (_) {
    // Ignore error for now
    // The function above only works in modern browsers as far as I know
    return "Lisbon";
  }
};
