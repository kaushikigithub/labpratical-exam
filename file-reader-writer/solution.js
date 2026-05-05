const fs = require('fs');
const path = require('path');

// Show exactly where Node is looking
console.log('Looking for file at:', path.resolve('input.txt'));

fs.readFile('input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('ERROR:', err.message);  // This will tell us the exact problem
    return;
  }

  const lines = data.trim().split('\n');
  const totalLines = lines.length;

  const totalWords = lines.reduce((count, line) => {
    return count + line.trim().split(/\s+/).filter(Boolean).length;
  }, 0);

  const output = `Total Lines: ${totalLines}\nTotal Words: ${totalWords}`;

  fs.writeFile('output.txt', output, (err) => {
    if (err) {
      console.error('Write error:', err.message);
      return;
    }
    console.log('Done! output.txt created successfully.');
  });
});

