function activeButton(value) {
const currentURL=  window.location.href ;
}

// Page 2.html Script
$(document).ready(function() {
  var activeTab = getUrlParameter('active');
  console.log(activeTab);
  $(".sidenav").find(`[data-tab='${activeTab}']`).addClass("active");

});

var getUrlParameter = function getUrlParameter(sParam) {
  var results = new RegExp('[\?&#]' + sParam + '=([^&#]*)').exec(window.location.href);
  if (results == null) {
    return null;
  } else {
    return decodeURI(results[1]) || 0;
  }
};
