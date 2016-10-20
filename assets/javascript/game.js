// Game Start
// Player chooese character by clicking on the fighter's picture. The player will fight that character for the rest of the game.	

var pikachu = {
	name: "Pikachu", 
	health: 160, 
	attack: 6, 
	counterAttack: 2, 
	image: '<img src="assets/images/pikachu.gif" class="image">'
};
var mewtwo = {
	name: "Mewtwo", 
	health: 140, 
	attack: 4, 
	counterAttack: 2, 
	image: '<img src="assets/images/mewtwo.gif" class="image">'
};
var snorlax = {
	name: "Snorlax", 
	health: 190, 
	attack: 4, 
	counterAttack: 2, 
	image: '<img src="assets/images/snorlax.gif" class="image">'
};
var blastoise = {
	name: "Blastoise", 
	health: 150, 
	attack: 6, 
	counterAttack: 2, 
	image: '<img src="assets/images/blastoise.gif" class="image">'
};

var pikachuBox = $('<div>')
    .append(pikachu.name,pikachu.image,pikachu.health)
    .addClass('characters')
    .data('health', pikachu.health).data('attack', pikachu.attack )
    .data('counterAttack', pikachu.counterAttack).data('playerName', pikachu.name);

var mewtwoBox = $('<div>')
    .append(mewtwo.name,mewtwo.image,mewtwo.health)
    .addClass('characters')
    .data('health', mewtwo.health).data('attack', mewtwo.attack )
    .data('counterAttack', mewtwo.counterAttack).data('playerName', mewtwo.name);

var snorlaxBox = $('<div>')
    .append(snorlax.name,snorlax.image,snorlax.health)
    .addClass('characters')
    .data('health', snorlax.health).data('attack', snorlax.attack )
    .data('counterAttack', snorlax.counterAttack).data('playerName', snorlax.name);

var blastoiseBox = $('<div>')
    .append(blastoise.name,blastoise.image,blastoise.health)
    .addClass('characters')
    .data('health', blastoise.health).data('attack', blastoise.attack )
    .data('counterAttack', blastoise.counterAttack).data('playerName', blastoise.name);

var characters = [pikachuBox, mewtwoBox, snorlaxBox, blastoiseBox];
var selectedCharacter = [];
var enemy = [];
var enemiesLeft = [];
var button = '<p><a class="btn btn-primary btn-lg" href="#" role="button">Atack!</a></p>';

	// Display characters in div #selectChracters
	for (var characterIndex = 0; characterIndex < characters.length; characterIndex++) {
	    $('#charactersList').append(characters); 
	};


	$("#text").html('Select your Pokemon!'); // Update text

	$(".characters").on("click", function(){ // On click of characters
	    $(this).addClass("clickedcharacter").removeClass("characters").appendTo("#selected");

			$(".characters").removeClass("characters").addClass("charactersRemaining").appendTo('#charactersLeft');

	    	$("#text").html('Select your Enemy!');


	    // Select Enemy
		$(".charactersRemaining").on("click", function(){
			$(this).addClass("enemy").removeClass("charactersRemaining").appendTo("#defender");

			  	if ($(".charactersRemaining").hasClass('charactersRemaining')){ 
	    			
	    			$(".charactersRemaining").removeClass("charactersRemaining")
	    			.addClass("charactersLeft").appendTo('#charactersRemaining');
	    		
	    			$("#text").html('Press attack to battle!<br /><br />'); // Update text

	    			// If there is a character in player AND enemy section, enable button to start 
			        if($('#selected .clickedcharacter').length &&  $('#defender .enemy').length){
			        	$("#text").append(button);
						   
			        			var playerName = $(".clickedcharacter").data('playerName');
								var playerHP = $(".clickedcharacter").data('health');
								var playerAtk = $(".clickedcharacter").data('attack');
								var platerCtrAtk = $(".clickedcharacter").data('counterAttack');

								var computerName = $('.enemy').data('playerName');
								var computerHP = $('.enemy').data('health');
								var computerAtk = $('.enemy').data('attack');

						    // Attack Button
							$(".btn").click(function() {
								playerHP = playerHP - computerAtk;

								computerHP = computerHP - (Math.pow(playerAtk, platerCtrAtk));

								

							if (computerHP <= 0) { // if computer hp is less that 0, remove .enemy
								$('.enemy').remove();
								$("#text").html('You defeated ' + computerName + '! <br /><br />Select another enemy to fight!<br /><br />');
									
									$('.charactersLeft').click(function()	{
										if($('#selected .clickedcharacter').length &&  $('#defender .enemy').length){
							        		$("#text").append(button);

							        		$(".btn").click(function() {

											});

												var computerName = $('.enemy').data('name');
												var computerHP = $('.enemy').data('health');
												var computerAtk = $('.enemy').data('attack');
												console.log(computerName);

											playerHP = playerHP - computerAtk;
											computerHP = computerHP - (Math.pow(playerAtk, 2)); 

							        	};
							        });
							};

								console.log(playerHP);
								console.log(computerHP);
						    });

			        	console.log($(".clickedcharacter").data('health'));
			        	console.log($(".clickedcharacter").data('attack'));
			        	console.log($('.enemy').data('health'));
			        	console.log($('.enemy').data('counterAttack'));
					};
			};


		}); // End onClick .charactersRemaining    Math.pow(base, exponent)

	}); // End .on("Click" of .characters




// console.log(".clickedcharacter"characters.data());
 

            // damage = $(this).data('attack');
            // counter = $('#fighter .foes').data('cattack');
            // playerHP = $('.charContainer').data('hpp');
            // enemyHP = $('#fighter .foes').data('hpp');
            // playerHP -= counter;
            // console.log(playerHP);
            // enemyHP -= damage;
            // console.log();
            // console.log("#charactersList.clickedcharacter.name");





// If there is no character in charater area, alert: 'You have been defeated. GAME OVER!!'

// if there is no defender in defender area, alert:
			// 'You have defeated ________, you can choose to fight another enemy'

// If there are no characters in available to attack, alert: 'You Won!!! GAME OVER!!'

// If there is a character in character section and there is a character in the defender area, activate Race button. 
	// When race button is pressed,
		// Health of character goes down by attack of defender
		// Health of defender goes down by attack of character
		// Attack of character goes up by x.    example: people[2][3][1] = "brown";
		// Alert the user: 'You attacked _________ for __ damage. __________ attacked back for 25 damage!'



// Game Start

// Player chooese character by clicking on the fighter's picture. The player will fight that character for the rest of the game.

// Player must then defeat all the remaining fighters. Enemies should be moved to a different area of the screen. 

// The player chooses an opponent by clicking on an enemy's picture. 

// Once the player selects an opponent, that enemy is moved to a 'defender area'

// The player will now be able to click the 'attack' button. 

// Whenever the player clicks 'attack', their character damagers the defender. The opponent will lose 'HP'. These points are displayed at the bottom of the defender's picture. 

// The opponent character will instantly counter the attack. When that happens, the player's character will lose some of their 'hp'. These points are shown at the bottom of the player character's picture. 





