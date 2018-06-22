// Document refers to the html document. When it is ready, call on this function.
$(document).ready(function() {
    //Global Variables
        gems = ['assets/images/red.png','assets/images/blue.png','assets/images/yellow.png','assets/images/green.png'];
    
        var counter = 0;
        var wins = 0;
        var losses = 0;
        //Setting the win and loss condition
        $('#win').text(wins);
        $('#loss').text(losses);
        
        // We are calling a function before it exists. You cannot do that in most other languages. NOTE: Research "You Don't Know JS"
        newGems();
        newGame();
        function newGems () {
            var numbers = []
                // Use a while loop when you don't know how many times you will loop through an array
                while(numbers.length < 4){
                    //Math.ceil will round up to an integer. The if statement will create a random number. Thi is the winning number if the user guesses correctly.
                  var randomNumber = Math.ceil(Math.random()*12)
                  var found = false;
                  for (var i=0; i< numbers.length; i++){
                    if (numbers[i] == randomNumber){
                        found = true; break
                    }
                  }
                  if(!found)numbers[numbers.length]=randomNumber;
                }
            //Below, we are adding attributes and a call to the image tag. 	
            for (i = 0; i < numbers.length; i++) {
                var imageCrystal = $('<img>');
                imageCrystal.attr('data-num', numbers[i]);
                imageCrystal.attr('src', gems[i]);
                imageCrystal.attr('alt', 'gems');
                imageCrystal.addClass('crystalImage')
                // We are then going to append image to the gems ID.
                $('#gems').append(imageCrystal);
            }
        }
    
        function newGame() {
    
            counter = 0;
            $('#yourScore').text(counter);
    
            function randomIntFromInterval(min,max){
                   return Math.floor(Math.random()*(max-min)+1);
                }
    
            var numberToGuess = randomIntFromInterval(19,120);
    
            $('.value').text(numberToGuess);
    
    
            $('.crystalImage').on('click', function(){
                counter = counter + parseInt($(this).data('num'));
               
                $('#yourScore').text(counter);
    //Trigger win
                if (counter == numberToGuess){
                  $('#status').text('You won!!!!');
                  wins ++;
                  $('#win').text(wins);
                    // console.log(wins)
                  $('#gems').empty();
                  newGems();
                  newGame();
        //Trigger loss     
                } else if ( counter > numberToGuess){
                    $('#status').text('You lost!');
                    losses ++;
                    $('#loss').text(losses);
                    // console.log(losses)
                    $('#gems').empty();
                    newGems();
                    newGame();
                }
            });
        }
    
    });