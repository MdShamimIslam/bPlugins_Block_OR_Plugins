window.copyBPlAdminShortcode = function (postID) {

  var copyText = document.querySelector('#bPlAdminShortcode-' + postID + ' input');
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  document.execCommand("copy");

  var tooltip = document.querySelector('#bPlAdminShortcode-' + postID + ' .tooltip');
  tooltip.innerHTML = "Copied Successfully!";
}