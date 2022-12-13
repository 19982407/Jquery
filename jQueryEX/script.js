$(document).ready(function(){
  $('h1').css("color","grey");
  $('h1').css('text-align',"center")
  $("#p1").css("fontsize","30px");
  $("#p1").css('background-color', "yellow")
  $('#p1').css('padding','20px')
})

//HIDE//
/*
$(document).ready(function(){
$("h1").hide();
});
*/

/////HIDE-SHOW/////

/*
$(document).ready(function(){
  $("#btn1").click(function(){
    $('img').hide(2000);
  });
});

$(document).ready(function(){
    $("#btn2").click(function(){
      $('img').show(2000);
    });
  });
*/


//////////DBLClick///////////

/*
$(document).ready(function(){
    $("#btn1").dblclick(function(){
      $('img').hide(2000);
    });
  });
*/


////////////Mouseenter/////////

/*
$(document).ready(function(){
    $('img').mouseenter(function(){
        $(this).hide(2000);
    })
    $('#btn2').click(function(){
      $('img').show(2000);
    })
});
*/


//////////////Mousseleave/////////

/*

$(document).ready(function(){
    $('img').mouseleave(function(){
        $(this).hide(2000);
    })
    $('#btn2').click(function(){
        $('img').show(2000);
      })
});

*/
///////////////Valider////////

/*
$(document).ready(function(){
  $('#btn3').click(function(){
      alert($('#nom').val());
    })
  });

*/

