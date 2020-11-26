function sortByPriceAscending(jsonString) {
    const arr = JSON.parse(jsonString);
    arr.sort((a, b) => (a.price > b.price) ? 1 : (a.price === b.price) ? ((a.name > b.name) ? 1: -1) : -1);
    return JSON.stringify(arr);
}

console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));

console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));