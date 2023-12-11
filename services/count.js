const {data} = require("../data");

/*
    * CountPeopleAndAnimals
    * @description: Count people and animals in data
    * @return: Array
 */
const CountPeopleAndAnimals = () => {

    data.map((countrie) => {
        countrie.name += ' [' + countrie.people.length.toString() + ']'

        countrie.people.map((people) => {
            people.name += ' [' + people.animals.length.toString() + ']'
        })

    })

    return data
}


module.exports = {
    CountPeopleAndAnimals
}
