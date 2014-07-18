$( document ).ready(function() {
  // Handler for .ready() called.
  var nlpopUp=$('#newsletter_footer_top0').removeClass('newsletter')
.clone();
$('#newsletter_footer_top0').remove();
var cookieValue = $.cookie("nlSignup"); 
if(typeof cookieValue === 'undefined' || cookieValue !='dgsdffdf_yes'){
   // your code here.
  $('#nlPopUp').append(nlpopUp);
  $('#nlBGWrapper').show();
  $('#nlPopUp').show();
  $( "<a class='noThanks button button_mini' href='#'>No Thanks</a>" ).insertAfter( ".btn-arrow-right" );
  $('.box-heading').remove();
  $('#formNewLestter').addClass('PopUpForm');
   $('form.PopUpForm').attr('action', '');
   $('form.PopUpForm').submit(function(event){
     event.preventDefault();
     $('#popUpSucessDiv').remove();
     var values = $(this).serialize();
     var inputCheck=$('.inputNew').val();
     if(inputCheck=='' || inputCheck=="Your email address")
     {
        $('.block_content').append("<div id='popUpSucessDiv' class='warning_inline alert alert-danger'>You didnt enter your email address</div>");
     }
     else
     {
       $.ajax({
        url: "http://www.hijab2go.com/index.php?route=module/pavnewsletter/subscribe",
        type: "post",
        data: values,
        success: function(data){
        var response=JSON.parse(data);
          
         if(response.error!='' && typeof response.error != 'undefined')
         {
           $('.block_content').append("<div id='popUpSucessDiv' class='warning_inline alert alert-danger'>"+response.error+"</div>");
           $.cookie('nlSignup', 'dgsdffdf_yes', { expires: 365, path: '/' });
            setTimeout(function() { $("#nlBGWrapper").hide(); }, 5000);
         }
          else
          {
             $('.block_content').append("<div id='popUpSucessDiv' class='success_inline alert alert-success'>"+response.success+"</div>");
            $.cookie('nlSignup', 'dgsdffdf_yes', { expires: 365, path: '/' });
            setTimeout(function() { $("#nlBGWrapper").hide(); }, 5000);
          }
             
        },
        error:function(){
            alert("failure");
           // $("#result").html('There is error while submit');
        }
    });
   }
 });
  $('.noThanks').click(function(event){
    event.preventDefault();
     $.cookie('nlSignup', 'dgsdffdf_yes', { expires: 30, path: '/' });
      setTimeout(function() { $("#nlBGWrapper").hide(); }, 5000);
  });
 };
});