let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function removeDots(text) {
  return text.replace(/\./g, '');
}

function titleize(words) {
  return words.split(' ').map(word => {
    let chars = word.split('');
    chars[0] = chars[0].toUpperCase();
    return chars.join('');
  }).join(' ');
}

function processBands(data) {
  return data.map(band => {
    return {
      name: titleize(removeDots(band.name)),
      country: 'Canada',
      active: band.active
    };
  });
}

console.log(processBands(bands));

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]
