const storageMixin =  {
  methods: {
    getItems() {
      return JSON.parse(localStorage.getItem('contacts'))
    },
    findItem(id) {
      return this.getItems().find((item) => item.id == id)
    },
    removeItem(id) {
      let newItems = this.getItems().filter(function (item) {
        return item.id !== id;
      });
      this.setItem(newItems);
    },
    setItem(item) {
      localStorage.setItem("contacts", JSON.stringify(item));
    },
    validateRequest(request) {
      let items = this.getItems();
    
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
    },
    store(contact) {
      let items = this.getItems();
    
      this.validateRequest(contact)
    
      if (!items?.length) {
        this.setItem([{ ...contact, id: 1 }]);
        return 1;
      }
      
      let id = items.length + 1;
      items.push({...contact, id})
      this.setItem(items);
    
      return id;
    },
    update(contact) {
      let items = this.getItems();
    
      this.validateRequest(contact)
    
      items = items.map(function(item) {
        if(item.id == contact.id) {
          return item = contact;
        }
        return item;
      })
      
      this.setItem(items);
    }
  }
}

export default storageMixin