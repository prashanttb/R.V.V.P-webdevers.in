$(document).ready(function(){
    $(".Md").hide();
    $(".Kk").hide();
    $(".Lm").hide();
    $(".Ab").hide();
    $("#goback").hide();
    $("#Mdbtn").click(function(){
      $(".head1").hide();
      $(".Singers").hide();
      $(".Md").show();
      $("#goback").show();
    });
    $("#Lmbtn").click(function(){
      $(".head1").hide();
      $(".Singers").hide();
      $(".Lm").show();
      $("#goback").show();
    })
    $("#Kkbtn").click(function(){
      $(".head1").hide();
      $(".Singers").hide();
      $(".Kk").show();
      $("#goback").show();
    });
    $("#Abbtn").click(function(){
      $(".head1").hide();
      $(".Singers").hide();
      $(".Ab").show();
      $("#goback").show();
    });
    $("#goback").click(function(e){
      $(this).hide();
      $(".Md").hide();
      $(".Lm").hide();
      $(".Kk").hide();
      $(".Ab").hide();
      $(".head1").show();
      $(".Singers").show();
    });
    $("audio").bind("play",function (){
      $("audio").not(this).each(function (index, audio) {
        audio.pause();
      });
    });
});
