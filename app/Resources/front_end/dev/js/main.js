$(document).ready(function(){
    $("#form_keyword1").keyup(function(){
        var keyword = $(this).val();
        if ( keyword.length >= 3 ) {
            $.ajax({
                type: "POST",
                url: "/autocomplete",
                data: {keyword: keyword},
                dataType: 'json',
                timeout: 3000,
                success: function(response){
                    var data = [];
                    for(var i=0; i < response.length; i++){
                        data.push(response[i]['tag']);
                        $('#input1 ul').append('<li>'+ response[i]['tag'] + '</li>');
                        console.log(response[i]['tag']);
                    }
                    $('#form_keyword1.autocomplete').autocomplete({
                        data: data
                    });
                },
                error: function() {
                    $('#wordautocomp').text('Ajax call error');
                }
            });
        }
    });
    $("#form_keyword2").keyup(function(){
        var keyword = $(this).val();
        if ( keyword.length >= 3 ) {
            $.ajax({
                type: "POST",
                url: "/autocomplete",
                data: {keyword: keyword},
                dataType: 'json',
                timeout: 3000,
                success: function(response){
                    var data = [];
                    for(var i=0; i < response.length; i++){
                        data.push(response[i]['tag']);
                        $('#input2 ul').append('<li>'+ response[i]['tag'] + '</li>');
                        console.log(response[i]['tag']);
                    }
                    $('#form_keyword2.autocomplete').autocomplete({
                        data: data
                    });
                },
                error: function() {
                    $('#wordautocomp').text('Ajax call error');
                }
            });
        }
    });
    $("#form_keyword3").keyup(function(){
        var keyword = $(this).val();
        if ( keyword.length >= 3 ) {
            $.ajax({
                type: "POST",
                url: "/autocomplete",
                data: {keyword: keyword},
                dataType: 'json',
                timeout: 3000,
                success: function(response){
                    var data = [];
                    for(var i=0; i < response.length; i++){
                        data.push(response[i]['tag']);
                        $('#input3 ul').append('<li>'+ response[i]['tag'] + '</li>');
                        console.log(response[i]['tag']);
                    }
                    $('#form_keyword3.autocomplete').autocomplete({
                        data: data
                    });
                },
                error: function() {
                    $('#wordautocomp').text('Ajax call error');
                }
            });
        }
    });
    $("#form_keyword4").keyup(function(){
        var keyword = $(this).val();
        if ( keyword.length >= 3 ) {
            $.ajax({
                type: "POST",
                url: "/autocomplete",
                data: {keyword: keyword},
                dataType: 'json',
                timeout: 3000,
                success: function(response){
                    var data = [];
                    for(var i=0; i < response.length; i++){
                        data.push(response[i]['tag']);
                        $('#input4 ul').append('<li>'+ response[i]['tag'] + '</li>');
                        console.log(response[i]['tag']);
                    }
                    $('#form_keyword4.autocomplete').autocomplete({
                        data: data
                    });
                },
                error: function() {
                    $('#wordautocomp').text('Ajax call error');
                }
            });
        }
    });
    $("#form_keyword5").keyup(function(){
        var keyword = $(this).val();
        if ( keyword.length >= 3 ) {
            $.ajax({
                type: "POST",
                url: "/autocomplete",
                data: {keyword: keyword},
                dataType: 'json',
                timeout: 3000,
                success: function(response){
                    var data = [];
                    for(var i=0; i < response.length; i++){
                        data.push(response[i]['tag']);
                        $('#input5 ul').append('<li>'+ response[i]['tag'] + '</li>');
                        console.log(response[i]['tag']);
                    }
                    $('#form_keyword5.autocomplete').autocomplete({
                        data: data
                    });
                },
                error: function() {
                    $('#wordautocomp').text('Ajax call error');
                }
            });
        }
    });

    $('button').click(function(e){
         e.preventDefault();
         var keyword1 = $("#form_keyword1").val();
         var keyword2 = $("#form_keyword2").val();
         var keyword3 = $("#form_keyword3").val();
         var keyword4 = $("#form_keyword4").val();
         var keyword5 = $("#form_keyword5").val();
         var words = [keyword1, keyword2, keyword3, keyword4, keyword5];
         $.ajax({
             type: 'POST',
             url: '/result',
             data: {words: words},
             dataType: 'json',
             timeout: 3000,
             success: function(response){
                 $('#jobs').html(" ");
                 for(var i=0; i< response.length; i++){
                     $('#jobs').append(
                         '<div class="z-depth-3 jobcards hoverable col s4 offset-s1"><h4 class="center-align">'+ response[i] +'</h4></div>'
                     )
                 }
             },
             error: function() {
                 $('#wordautocomp').text('Ajax call error');
             }

         })
    });

    $('#showInput2').click(function(e){
        e.preventDefault();
        $('#input2').removeClass('hide');
        $(this).addClass('hide');
    });
    $('#hideInput2').click(function(e){
        e.preventDefault();
        $('#input2').addClass('hide');
        $('#showInput2').removeClass('hide');
    });
    $('#showInput3').click(function(e){
        e.preventDefault();
        $('#input3').removeClass('hide');
        $(this).addClass('hide');
    });
    $('#hideInput3').click(function(e){
        e.preventDefault();
        $('#input3').addClass('hide');
        $('#showInput3').removeClass('hide');
    });
    $('#showInput4').click(function(e){
        e.preventDefault();
        $('#input4').removeClass('hide');
        $(this).addClass('hide');
    });
    $('#hideInput4').click(function(e){
        e.preventDefault();
        $('#input4').addClass('hide');
        $('#showInput4').removeClass('hide');
    });
    $('#showInput5').click(function(e){
        e.preventDefault();
        $('#input5').removeClass('hide');
        $(this).addClass('hide');
    });
    $('#hideInput5').click(function(e){
        e.preventDefault();
        $('#input5').addClass('hide');
        $('#showInput5').removeClass('hide');
    });

});