
function getItems() {
  return JSON.parse(localStorage.getItem("contacts"));
}

function findItem(id) {
  return getItems().find((item) => item.id == id);
}

function removeItem(id) {
  let newItems = getItems().filter(function (item) {
    return item.id !== id;
  });
  setItem(newItems);
}

function setItem(item) {
  localStorage.setItem("contacts", JSON.stringify(item));
}

function store(contact) {
  let items = getItems();

  if (!Object.keys(contact).length) {
    return;
  }

  if (!items?.length) {
    setItem([{ ...contact, id: 1 }]);
    return 1;
  }
  
  let id = items.length + 1;
  
  items.push({...contact, id})
  setItem(items);

  return id;
}

function update(contact) {
  let items = getItems();

  items = items.map(function(item) {
    if(item.id == contact.id) {
      return item = contact;
    }
    return item;
  })
  
  setItem(items);
}

export { getItems, findItem, removeItem, store, update };
