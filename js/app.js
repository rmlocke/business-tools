function clearNav() {
  $("nav ul.nav li").removeClass("active");
}
$(document).ready(function() {

  var app = {};

  $('#dashboard').on("click", function(e) {
    $( "#content" ).load( "views/dashboard.html" );
    clearNav();
    $(this).closest("li").addClass("active");
  });

  $('#transactions').on("click", function(e) {
    $( "#content" ).load( "views/transactions.html" );
    clearNav();
    $(this).closest("li").addClass("active");
  });

  $('#invoices').on("click", function(e) {
    $( "#content" ).load( "views/invoices.html" );
    clearNav();
    $(this).closest("li").addClass("active");
  });

  $('#tasks').on("click", function(e) {
    $( "#content" ).load( "views/tasks.html" );
    clearNav();
    $(this).closest("li").addClass("active");
  });

  $('#contacts').on("click", function(e) {
    $( "#content" ).load( "views/contacts.html" );
    clearNav();
    $(this).closest("li").addClass("active");
  });

  $('#jobs').on("click", function(e) {
    $( "#content" ).load( "views/jobs.html" );
    clearNav();
    $(this).closest("li").addClass("active");
  });

  $('#timesheets').on("click", function(e) {
    $( "#content" ).load( "views/timesheets.html" );
    clearNav();
    $(this).closest("li").addClass("active");
  });

  $('#reports').on("click", function(e) {
    $( "#content" ).load( "views/reports.html" );
    clearNav();
    $(this).closest("li").addClass("active");
  });

  $('#calendar').on("click", function(e) {
    $( "#content" ).load( "views/calendar.html" );
    clearNav();
    $(this).closest("li").addClass("active");
  });

  $('#assistant').on("click", function(e) {
    $( "#content" ).load( "views/assistant.html" );
    clearNav();
    $(this).closest("li").addClass("active");
  });

});
