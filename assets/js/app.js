var ContactManager = new Marionette.Application();

// define regions for nav bar and contact list
ContactManager.addRegions({
  navRegion: '#nav-region',
  mainRegion: "#main-region"
});

ContactManager.on("start", function() {
  // display the nav links
  ContactManager.ContactsApp.List.Controller.listNavLinks()

  // display the contacts
  ContactManager.ContactsApp.List.Controller.listContacts();
});
