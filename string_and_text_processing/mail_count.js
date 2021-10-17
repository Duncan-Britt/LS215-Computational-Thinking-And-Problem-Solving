function mailCount(emailData) {
  const emails = emailData.split(/##\|\|##/);
  console.log(`Count of Email: ${emails.length}`);
  const dateInfo = emails.map(email => {
    const dateCaptures = email.match(/Date: (\d{2})-(\d{2})-(\d+)#\/#/);
    const year = parseInt(dateCaptures[3], 10);
    const monthIdx = parseInt(dateCaptures[1], 10) - 1;
    const day = parseInt(dateCaptures[2], 10);
    return new Date(year, monthIdx, day);
  });

  dateInfo.sort((a, b) => {
    return a - b;
  });

  let firstDate = String(dateInfo[0]).slice(0, 15);
  let lastDate = String(dateInfo[dateInfo.length - 1]).slice(0, 15);

  console.log(`Date Range: ${firstDate} - ${lastDate}`);
}

mailCount(emailData);

// console output

// Count of Email: 5
// Date Range: Sat Jun 25 2016 - Thu Aug 11 2016
