// File: searchCandies.test.js

const searchCandies = require('./searchCandies');

describe( 'searchCandies', () => {
  it( 'returns the expected result searching with arguments ("Ma",10)', () => {
    expect(searchCandies('Ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
  it( 'returns the expected result searching with arguments ("Ma",2)', () => {
    expect(searchCandies('Ma', 2)).toEqual([ 'Mars' ]);
  });
  it( 'returns the expected result searching with arguments ("S",10)', () => {
    expect(searchCandies('S', 10)).toEqual([ 'Skitties', 'Skittles', 'Starburst' ]);
  });
  it( 'returns the expected result searching with arguments ("S",4)', () => {
    expect(searchCandies('S', 4)).toEqual([ 'Skitties', 'Skittles' ]);
  });
  it( 'returns the expected result searching with arguments ("ma",10)', () => {
    expect(searchCandies('ma', 10)).toEqual([ 'Mars', 'Maltesers' ]);
  });
});
