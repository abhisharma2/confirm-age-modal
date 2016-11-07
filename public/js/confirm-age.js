//**********************//
// Confirm Age Modal JS //
// Author: Abhi Sharma //
// Nov, 2016           //
//*********************//

(function() {
  // Define our constructor
  this.Modal = function() {

    // Create global element references
    this.modal = null;
    this.overlay = null;
    this.destination = null;

    // Define option defaults
    var defaults = {
      className: 'confirm-age-modal',
      content: "",
      maxWidth: 600,
      minWidth: 280,
      overlay: true
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

  }

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

}());

