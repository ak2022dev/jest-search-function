// File: searchCandies.test.js

const searchCandies = require('./searchCandies');

describe( 'searchCandies', () => {
  it( 'returns the expected result searching with arguments ("Ma",10)', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
  it( 'returns the expected result searching with arguments ("Ma",2)', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });
});
