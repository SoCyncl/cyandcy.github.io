class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
<div class="footer">
        2025
        <br>
        Created by Cyncl. Additional credits can be found <a href="/credits.html">here</a>.
        <br>
        <img src="/assets/img/homepage/biblio.gif" style="width: 80px;">
        <br>
        View count: <span id="hitcount"></span>
        <br>
        Last Updated: <span id="lastupdate"></span>
    </div>
      `;
    }
  }

  customElements.define('footer-block', Footer);

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var site_data = JSON.parse(this.responseText);
          var num_arr = site_data.info.views.toString().split("");
          var num_str = "";
          for (i = 0; i < num_arr.length; i++) {
              num_str += num_arr[i];
              if ( (num_arr.length-1 - i) % 3 == 0 && (num_arr.length-1 - i) != 0 ) {num_str += ",";}
              var date_str = site_data.info.last_updated;
              var date_obj = new Date(site_data.info.last_updated);
              document.getElementById("lastupdate").innerHTML = (date_obj.getMonth()+1) + "-" + date_obj.getDate() + "-" + date_obj.getFullYear();
          }
          document.getElementById("hitcount").innerHTML = num_str;
      }
  };
  xhttp.open("GET", "https://weirdscifi.ratiosemper.com/neocities.php?sitename=solstitheo", true);
  xhttp.send();