
function getItems() {
  return JSON.parse(localStorage.getItem('contacts'))
}

function findItem(id) {
  return getItems().find(item => item.id === id)
}

function removeItem(id) {
  let newItems = getItems().filter(function( item ) {
    return item.id !== id;
  })
  setItem(newItems)
}

function setItem(item) {
  localStorage.setItem('contacts', JSON.stringify(item))
}

function store(item) {
  const items = getItems();

  if(!Object.keys(item).length) {
    return;
  }

  if(!items) {
    setItem([{id: 1 ,...item}]);
    return;
  }

  let maxId = items.reduce((accumulator, current) => {
    return (accumulator = accumulator > current.id ? accumulator : current.id)
  })

  setItem([...items, {id: ++maxId ,...item}]);
}

export { getItems, findItem, removeItem, store };