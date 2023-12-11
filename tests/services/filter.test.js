const { dataFilter } = require('../../services/filter');

describe('dataFilter function', () => {
  it('should filter data by animal name', () => {
    const filterValue = 'ry'; // Animal name

    const expectedResult = [
  {
    name: 'Uzuzozne',
    people: [
      {
        name: 'Lillie Abbott',
        animals: [
          {
            name: 'John Dory'
          }
        ]
      }
    ]
  },
  {
    name: 'Satanwi',
    people: [
      {
        name: 'Anthony Bruno',
        animals: [
          {
            name: 'Oryx'
          }
        ]
      }
    ]
  }
];

    const result = dataFilter(filterValue);

    expect(result).toEqual(expectedResult);
  });

  it('should return empty data if no matching animal name is found', () => {
    const filterValue = 'nonexistent'; // Nonexistent animal name

    const expectedResult = [];

    const result = dataFilter(filterValue);

    expect(result).toEqual(expectedResult);
  });

});
