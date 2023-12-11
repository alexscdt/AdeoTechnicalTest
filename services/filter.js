let {data} = require("../data");

/*
    * dataFilter
    * @description: Filter data by animal name
    * @param: filterValue
    * @return: Object
 */
const dataFilter = (filterValue) => {

    data.forEach(countrie => {
      countrie.people.forEach(person => {
        person.animals = person.animals.filter(animal =>
          animal.name.toLowerCase().includes(filterValue.toLowerCase())
        );
      });
      countrie.people = countrie.people.filter(person => person.animals.length > 0);
    });

    data = data.filter(item => item.people.length > 0);

    return data
}


module.exports = {
    dataFilter
}
