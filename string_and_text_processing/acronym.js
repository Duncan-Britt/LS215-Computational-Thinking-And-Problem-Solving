function acronym(string) {
  let i = 2
  return string.replace(/((\b[A-Za-z])[a-zA-Z]+\b)/g, `$${i++}`)
               .replace(/[^a-z]/gi, '').toUpperCase();
}

function acronym(string) {
  return string.split(/\W+/)
               .map(word => word[0].toUpperCase())
               .join('');
}

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"
