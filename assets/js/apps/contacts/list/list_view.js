ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {
  // define view for nav link
  List.NavLink = Marionette.ItemView.extend({
    tagName: "span",
    className: "brand",
    template: "#nav-link",
  });

  // define view for collection of nav links
  List.NavLinks = Marionette.CollectionView.extend({
    childView: List.NavLink
  });

  // define view for contact
  List.Contact = Marionette.ItemView.extend({
    tagName: "li",
    template: "#contact-list-item"
  });

  // define view for collection of contacts
  List.Contacts = Marionette.CollectionView.extend({
    tagName: "ul",
    childView: List.Contact
  });
});
