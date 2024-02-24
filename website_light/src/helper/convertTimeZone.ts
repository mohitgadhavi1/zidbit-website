function convertTimestampToReadable(timestamp: string | number | Date, timezone: string) {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZone: timezone === "IST" ? 'Asia/Kolkata' : 'UTC'
    };
  
    const formattedDate = new Date(timestamp).toLocaleString('en-US', options);
    return formattedDate;
  }