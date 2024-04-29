//function which hides and shows the content under the "descriptive-content" class
$(document).ready(function () {
    $(".visibility").click(function () {
      $(".descriptive-content").toggle("slow");
    });
  });
  
  //function for the drop-down menu on the website's landing page
  $(document).ready(function () {
    $(".sub-menu").hide();
  
    $(".dropdown-menu li").hover(
      function () {
        $(this).find(".sub-menu").stop().slideDown(1000);
      },
      function () {
        $(this).find(".sub-menu").stop().slideUp(1000);
      }
    );
  });
  
  //animation effect added to the hyperlinks on the "webpage sources" page
  $(document).ready(function () {
    $(".animationButton").click(function () {
      $(".alternate").fadeOut(3000).fadeIn(3000);
    });
  });
  
  //chained function for sliding the elements with an h2 tag
  $(document).ready(function () {
    $("h2").css("color", "darkgreen").slideUp(2000).slideDown(2000);
  });
  