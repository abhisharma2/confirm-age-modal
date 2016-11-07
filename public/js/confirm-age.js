//**********************//
// Confirm Age Modal JS //
// Author: Abhi Sharma //
// Nov, 2016           //
//*********************//

(function() {

  var today = new Date();

  console.log(today);

  var css = {
    modal: {
      maxWidth: 600,
      minWidth: 300,
      padding: 1,
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
      marginTop: '10px',
      borderRadius: '3px',
      textColor: '#FFFFFF',
      bgColor: '#2DBF80',
      fontSize: '18px',
    }
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
    var month = '<div style="display:inline-block"><p>Month (e.g. 06)</p><input name="month" type="number" maxlength="2" id="month"></div>';
    var day = '<div style="display:inline-block;margin-left:10px"><p>Day (e.g. 20)</p><input name="day" type="number" maxlength="2" id="day"></div>';
    var year = '<div style="display:inline-block;margin-left:10px"><p>Year (e.g. 1987)</p><input name="year" type="number" maxlength="4" id="year"></div>';

    // Build the button
    var button = document.createElement("button");
    button.innerHTML = "Submit";
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

  buildHtml();

}());
