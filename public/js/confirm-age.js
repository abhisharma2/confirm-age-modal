//**********************//
// Confirm Age Modal JS //
// Author: Abhi Sharma //
// Nov, 2016           //
//*********************//

(function() {

  var submit;
  var today = new Date();

  var css = {
    modal: {
      maxWidth: 600,
      minWidth: 300,
      padding: 2,
      bgColor: '#FFFFFF',
      textColor:'#000000',
      borderRadius: 3,
      position: 'absolute',
      zIdx: 9999,
      top: '40%',
      left: '35%',
    },
    button: {
      padding: '.5em 1em',
      border: 'none',
      marginTop: '40px',
      borderRadius: '3px',
      textColor: '#FFFFFF',
      bgColor: '#2DBF80',
      fontSize: '18px',
    }
  }

  function checkAge() {
    // Setup redirect links
    var successLink = '/page1';
    var errorLink = '/error';

    // Check that all fields have a value
    var year = document.getElementById('year').value;
    var month = document.getElementById('month').value;
    var day = document.getElementById('day').value;
    var enteredDate = new Date(year, month, day);

    // Store cookie if successful
    if (enteredDate < getMinAgeDate(today)) {
      setCookie();
      window.location = successLink;
    } else {
      window.location = errorLink;
    }
  }

  function checkCookie() {
    var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)canVape\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(cookieValue);
    if (cookieValue === "true") {
      return true;
    } else {
      return false;
    }
  }

  function setCookie() {
    var tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    var utc = tomorrow.toUTCString();
    document.cookie = "canVape=true; expires=" + utc;
  }

  function getMinAgeDate(date) {
    var minYear = date.getFullYear() - 18;
    var minMonth = date.getMonth();
    var minDate = date.getDate();
    var minAge = new Date(minYear, minMonth, minDate);
    return minAge;
  }

  function buildHtml() {
    // Create a DocumentFragment to build with
    var docFrag = document.createDocumentFragment();

    // Build the modal container
    var modal = document.createElement("div");
    modal.className = "confirm-age-modal";
    modal.style.minWidth = css.modal.minWidth + "px";
    modal.style.maxWidth = css.modal.maxWidth + "px";
    modal.style.padding = css.modal.padding + "em";
    modal.style.backgroundColor = css.modal.bgColor;
    modal.style.color = css.modal.textColor;
    modal.style.borderRadius = css.modal.borderRadius + "px";
    modal.style.position = css.modal.position;
    modal.style.zIndex = css.modal.zIdx;
    modal.style.top = css.modal.top;
    modal.style.left = css.modal.left;

    // Build content area inside modal
    var content = document.createElement("div");
    content.className = "confirm-age-modal-content";

    // Build the inputs (hard code for now)
    var month = '<div style="display:inline-block"><p>Month (e.g. 06)</p><input style="font-size:18px;padding:5px;max-width:75px;" name="month" type="number" maxlength="2" id="month"></div>';
    var day = '<div style="display:inline-block;margin-left:10px"><p>Day (e.g. 20)</p><input style="font-size:18px;padding:5px;max-width:75px;" name="day" type="number" maxlength="2" id="day"></div>';
    var year = '<div style="display:inline-block;margin-left:10px"><p>Year (e.g. 1987)</p><input style="font-size:18px;padding:5px;max-width:100px;" name="year" type="number" maxlength="4" id="year"></div>';

    // Build the button
    var button = document.createElement("button");
    button.innerHTML = "Submit";
    button.id = "checkAge";
    button.style.padding = css.button.padding;
    button.style.border = css.button.border;
    button.style.borderRadius = css.button.borderRadius;
    button.style.marginTop = css.button.marginTop;
    button.style.backgroundColor = css.button.bgColor;
    button.style.color = css.button.textColor;
    button.style.fontSize = css.button.fontSize;

    // Combine all the elements
    content.innerHTML = '<h2 style="margin-top:5px">Confirm Your Age</h2><div class="confirm-age-modal-inputs">' + month + day + year + '</div>';
    modal.appendChild(content);
    modal.appendChild(button);

    // Append modal to document
    docFrag.appendChild(modal);

    // Append DocumentFragment to body
    document.body.appendChild(docFrag);
  }

  // Keep this code sequential, 1st build HTML, then add event listener to button
  if (checkCookie() === false) {
    buildHtml();
    submit = document.getElementById('checkAge');
    submit.addEventListener('click', checkAge, false);
  }

}());
