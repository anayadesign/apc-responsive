function validateFooterEmail() {
  var moduleEmail_I0 = new htmlControl(document.getElementById("formcm_I0").email, Array(CHECK_BLANK, CHECK_REGEXP_EMAIL), Array("NLError01_I0", "NLError02_I0"));
  var moduleForm_I0 = new htmlForm(document.getElementById("formcm_I0"), Array(moduleEmail_I0), "");
  moduleForm_I0.validateEmailForm();
  if (!moduleForm_I0.submitForm) {
    RaiseError('NLError03_I0');
  }
  return moduleForm_I0.submitForm;
}
function b() {
  $(".accordion .accordion-section-title").removeClass("active");
  $(".accordion .accordion-section-content").slideUp(300).removeClass("open");
}
$(".accordion-section-title").click(function(h) {
  if ((screen.width < 1008) || ($(window).width() < 1008)) {
    var g = $(this).attr("name");
    if ($(h.target).is(".active")) {
      b();
    } else {
      b();
      $(this).addClass("active");
      $(".accordion " + g).slideDown(300).addClass("open");
    }
    h.preventDefault();
  }
});
$('#footer-chervon').click(function(event) {
  event.preventDefault();
});
