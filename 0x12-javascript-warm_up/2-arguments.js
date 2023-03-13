#!/usr/bin/node

const lent = process.argv.length;

if (lent > 3) {
  console.log('Arguments found');
} else if (lent === 3) {
  console.log('Argument found');
} else {
  console.log('No argument');
}
