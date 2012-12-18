      $('document').ready(function() {
      
        current_file = 0;
        file_text = Array(8);
        
        $('.file').click(function(){
          var files = $('.file');
          
          current_file = $(this).index();

          if (file_text[current_file])
            $('#inputText').val($(this).text() + '\n' + file_text[current_file]);
          else
            $('#inputText').val('');
        });
        
        $('#inputText').bind('keyup change', function(){
          var text = $(this).val().split("\n");
          var name = text.shift();
          $('.file:eq(' + current_file + ')').text(name);
          $('.file:eq(' + current_file + ')').attr('id', 'file-' + name);
          file_text[current_file] = text.join("\n");
        });
        
        $('#preview').click(function(){
          var text = $('#inputText').val();
          text = text.replace(/<<<(.*)>>>/g, function(_,name){
            return file_text[$('#file-'+name).index()];
          });
          $('#outputText').val(text);
        });
        
        $('#submit').click(function() {
          $.get('/submit', function(res){
            alert(res);
          });
        });        
      });