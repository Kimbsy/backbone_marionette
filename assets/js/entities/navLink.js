ContactManager.module("Entities", function(Entities, ContactManager, Backbone, Marionette, $, _) {

  // define model for nav link
  Entities.NavLink = Backbone.Model.extend({
    title: ""
  });

  // define a colection for nav links
  Entities.NavLinkCollection = Backbone.Collection.extend({
    model: Entities.NavLink,
    comparator: "weight"
  });

  // collection of nav links
  var navLinks;

  // methos to initialize nav links
  var initializeNavLinks = function() {
    navLinks = new Entities.NavLinkCollection([
      {
        title: "Contacts",
        weight: 10
      },
      {
        title: "Allocation",
        weight: 20
      },
      {
        title: "Settings",
        weight: 30
      }
    ]);
  };

  // public method to get nav links
  var API = {
    getNavLinkEntities: function() {
      if (navLinks === undefined) {
        initializeNavLinks();
      }
      return navLinks;
    }
  }

  ContactManager.reqres.setHandler("navLink:entities", function() {
    return API.getNavLinkEntities();
  });

});
