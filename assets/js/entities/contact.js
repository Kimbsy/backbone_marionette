ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _) {

  // define model for single contact
  Entities.Contact = Backbone.Model.extend({
    defaults: {
      firstName: "",
      phoneNumber: "No phone number!"
    }
  });

  // define a collection for contacts
  Entities.ContactCollection = Backbone.Collection.extend({
    model: Entities.Contact,
    comparator: function(contact) {
      return contact.get("firstName") + " " + contact.get("lastName")
    }
  });

  // collection of contacts
  var contacts;

  // method to initialize contacts
  var initializeContacts = function() {
    contacts = new Entities.ContactCollection([
      {
        id: 1,
        firstName: "Alice",
        lastName: "Arten",
        phoneNumber: "555-0123"
      },
      {
        id: 2,
        firstName: "Bob",
        lastName: "Brigham",
        phoneNumber: "555-1415"
      },
      {
        id: 3,
        firstName: "Charlie",
        lastName: "Campbell",
        phoneNumber: "555-9999"
      }
    ]);
  };

  // public method to get contacts
  var API = {
    getContactEntities: function() {
      if (contacts === undefined) {
        initializeContacts();
      }
      return contacts;
    }
  }

  ContactManager.reqres.setHandler("contact:entities", function() {
    return API.getContactEntities();
  });

});
