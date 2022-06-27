// File: searchCandies.test.js

const searchCandies = require('./searchCandies');

describe( 'searchCandies', () => {
  it( 'searches the candies object', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
});
