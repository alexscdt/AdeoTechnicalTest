const {CountPeopleAndAnimals} = require("../services/count");
const {dataFilter} = require("../services/filter");

const dispatchNodeArgs = (arg) => {

    if (!arg) return '--- please, pass an argument like `--filter=ry` or `--count`'

    if (arg.indexOf('--filter=') != -1) {
        const filterValue = arg.split('=')[1]

        if (!filterValue) return '--- please, pass an argument like `--filter=ry` or `--count`'

        const data = dataFilter(filterValue)

        if (data.length > 0) {
            return data
        } else {
            return `no data found with : ${filterValue}`
        }
    }

    if (arg === '--count') return CountPeopleAndAnimals()

    return '--- please, pass an argument like `--filter=ry` or `--count`'
}


module.exports = {
    dispatchNodeArgs
}
