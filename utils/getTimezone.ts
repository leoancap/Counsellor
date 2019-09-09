export const getTimezone = () => {
  try {
    const offSet = new Date().getTimezoneOffset() / 60
    return (
      Intl.DateTimeFormat()
        .resolvedOptions()
        .timeZone.split('/')[1] +
      ' (' +
      (offSet < 0 ? `+${offSet * -1}` : `-${offSet}`) +
      ')'
    )
      .split('_')
      .join(' ')
  } catch (_) {
    // Ignore error for now
    // The function above only works in modern browsers as far as I know
    return 'Lisbon (+1)'
  }
}
