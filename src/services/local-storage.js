
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

function validateRequest(request) {
  let items = getItems();

  if(!items?.length) {
    return true;
  }

  let sameFields = items.filter(item => {
    if(request.id) {
      return (item.contact == request.contact || item.email == request.email) && request.id != item.id;
    } 
    return item.contact == request.contact || item.email == request.email
  })

  if(sameFields.length) {
    throw new Error('Contact alredy exists')
  }
}

function store(contact) {
  let items = getItems();

  validateRequest(contact)

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

  validateRequest(contact)

  items = items.map(function(item) {
    if(item.id == contact.id) {
      return item = contact;
    }
    return item;
  })
  
  setItem(items);
}

export { getItems, findItem, removeItem, store, update };
