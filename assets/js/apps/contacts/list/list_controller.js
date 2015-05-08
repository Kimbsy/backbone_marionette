ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {
  List.Controller = {
    listNavLinks: function() {
      // create collection of nav links
      var navs = ContactManager.request("navLink:entities");

      // instantiate view for nav link collection
      var navLinksView = new List.NavLinks({
        collection: navs
      });

      // display the view
      ContactManager.navRegion.show(navLinksView);
    },

    listContacts: function() {
      // create collection of contacts
      var contacts = ContactManager.request("contact:entities");

      // instantiate view for contact collection
      var contactsListView = new List.Contacts({
        collection: contacts
      });

      // display the view
      ContactManager.mainRegion.show(contactsListView);
    }
  }
});
