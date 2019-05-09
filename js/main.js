/*----- constants -----*/
const aceVentura = {
    quote: 'Alrighty then!',
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/0tJGk4ofc18?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/WLQcBoKekmQ?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: false,
        movie: 'Talladega Nights'
        },
        {
        isCorrect: false,
        movie: 'Jurassic Park'
        },
        {
        isCorrect: true,
        movie: 'Ace Ventura'
        },
        {
        isCorrect: false,
        movie: 'Liar Liar'
        }
    ]
}

const starWars = {
    quote: 'Never tell me the odds',
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Ea2HS8NL4s4?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Pw2sex1mJNI?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: true,
        movie: 'Star Wars: The Empire Strikes Back'
        },
        {
        isCorrect: false,
        movie: 'Star Trek'
        },
        {
        isCorrect: false,
        movie: 'Good Will Hunting'
        },
        {
        isCorrect: false,
        movie: 'Legally Blond'
        }
    ]
}

const lordOfTheRings = {
    quote: 'Nobody tosses a dwarf',
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/j4RowL_tZug?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3Slv-p4Fato?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: false,
        movie: 'Snow White and the Seven Dwarfs'
        },
        {
        isCorrect: false,
        movie: 'The Chronicles of Narnia'
        },
        {
        isCorrect: false,
        movie: 'The Hobbit'
        },
        {
        isCorrect: true,
        movie: 'Lord of the Rings: The Fellowship of the Ring'
        }
    ]
}

const sandLot = {
    quote: 'You never heard of the Sultan of Swat? The Titan of Terror? The Collosus of Clout?',
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VdLkYcnml4s?controls=0&amp;start=34" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/xs73-eVBu6I?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: false,
        movie: 'Major League'
        },
        {
        isCorrect: true,
        movie: 'The Sandlot'
        },
        {
        isCorrect: false,
        movie: 'A League of Their Own'
        },
        {
        isCorrect: false,
        movie: 'The Avengers'
        }
    ]
}

const airplane = {
    quote: "Don't call me Shirley",
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/KM2K7sV-K74?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AmA7Nm4qvGE?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: false,
        movie: 'Monty Python and the Holy Grail'
        },
        {
        isCorrect: false,
        movie: 'Jurassic Park'
        },
        {
        isCorrect: true,
        movie: 'Airplane'
        },
        {
        isCorrect: false,
        movie: 'Pink Panther'
        }
    ]
}

const homeAlone = {
    quote: 'Why the hell are you dressed like a chicken?',
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VNWO9lfBg-s?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Y-4-q3AiTcw?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: false,
        movie: 'Napoleon Dynamite'
        },
        {
        isCorrect: false,
        movie: 'Chicken Little'
        },
        {
        isCorrect: false,
        movie: 'Space Jam'
        },
        {
        isCorrect: true,
        movie: 'Home Alone'
        }
    ]
}

const stepBrothers = {
    quote: "I was watching Cops",
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/d8T2MTv5ri0?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/lFGv8m1kxIY?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: false,
        movie: 'Super Troopers'
        },
        {
        isCorrect: false,
        movie: 'Chips'
        },
        {
        isCorrect: false,
        movie: 'Anchorman'
        },
        {
        isCorrect: true,
        movie: 'Step Brothers'
        }
    ]
}

const myCousinVinny = {
    quote: "Oh, yeah, you blend",
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/g1DexW96bkA?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/AiA1NVEf9K4?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: true,
        movie: 'My Cousin Vinny'
        },
        {
        isCorrect: false,
        movie: 'The Hangover'
        },
        {
        isCorrect: false,
        movie: 'Mean Girls'
        },
        {
        isCorrect: false,
        movie: 'Get Shorty'
        }
    ]
}

const willyWonka = {
    quote: 'We are the music makers and we are the dreamers of the dreams',
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/3pwvB4_Te8A?controls=0&amp;start=19" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/HaoySOGlZ_U?controls=0&amp;start=58" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: false,
        movie: 'Bohemian Rhapsody'
        },
        {
        isCorrect: true,
        movie: 'Willy Wonka and the Chocolate Factory'
        },
        {
        isCorrect: false,
        movie: 'Almost Famous'
        },
        {
        isCorrect: false,
        movie: 'Dreamgirls'
        }
    ]
}

const theRoom = {
    quote: 'Oh, hi Mark',
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/zLhoDB-ORLQ?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/pjc4ZPTX1XQ?controls=0&amp;start=16" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: true,
        movie: 'The Room'
        },
        {
        isCorrect: false,
        movie: 'The Other Guys'
        },
        {
        isCorrect: false,
        movie: 'Ted'
        },
        {
        isCorrect: false,
        movie: 'The Departed'
        }
    ]
}

/*----- app's state (variables) -----*/
const questions = [theRoom, willyWonka, myCousinVinny, stepBrothers, homeAlone, airplane, sandLot, lordOfTheRings, starWars, aceVentura];

let scoreKeeper = 0;

const questionCounter = [];

document.getElementById('score').innerHTML = 'Score: ' + scoreKeeper;



/*----- functions -----*/

function playQuestion() {
    showButtons();
    const selectedQuestion = questions.pop();
    questionCounter.push(selectedQuestion);
    document.getElementById('movieQuote').innerHTML = selectedQuestion.quote;
    document.getElementById('question-counter').innerHTML = 'Question ' + questionCounter.length + ' of 10';
    
    
    renderButton('One', selectedQuestion.options[0].movie)
    renderButton('Two', selectedQuestion.options[1].movie)
    renderButton('Three', selectedQuestion.options[2].movie)
    renderButton('Four', selectedQuestion.options[3].movie)
    
}

function renderButton(buttonNum, movieName) {
    document.getElementById(`answer${buttonNum}`).value = 
    movieName;
};

playQuestion();

function hideButtons() {
    document.getElementById('answerOne').style.visibility = 'hidden';
    document.getElementById('answerTwo').style.visibility = 'hidden';
    document.getElementById('answerThree').style.visibility = 'hidden';
    document.getElementById('answerFour').style.visibility = 'hidden';
    document.getElementById('nextButton').style.visibility = 'visible';
}

function showButtons() {
    document.getElementById('answerOne').style.visibility = 'visible';
    document.getElementById('answerTwo').style.visibility = 'visible';
    document.getElementById('answerThree').style.visibility = 'visible';
    document.getElementById('answerFour').style.visibility = 'visible';
    document.getElementById('nextButton').style.visibility = 'hidden';
}


function incrementScore() {
    scoreKeeper += 1;
    console.log(scoreKeeper);
    document.getElementById('score').innerHTML = 'Score: ' + scoreKeeper;
}


/*----- event listeners -----*/

function playVideo() {

    document.getElementById('answerOne').addEventListener('click', function() {
        hideButtons();
        if (questionCounter[questionCounter.length - 1].options[0].isCorrect === true) {  
            document.getElementById('embeddedMovie').innerHTML = questionCounter[questionCounter.length-1].correctVideoUrl;
            document.getElementById('movieQuote').innerHTML = "CORRECT!";
            incrementScore();
        } else {
            document.getElementById('embeddedMovie').innerHTML = questionCounter[questionCounter.length-1].incorrectVideoUrl;
            document.getElementById('movieQuote').innerHTML = "WRONG!";
        }
    });

    document.getElementById('answerTwo').addEventListener('click', function() {
        hideButtons();
        if (questionCounter[questionCounter.length-1].options[1].isCorrect === true) {  
            document.getElementById('embeddedMovie').innerHTML = questionCounter[questionCounter.length-1].correctVideoUrl;
            document.getElementById('movieQuote').innerHTML = "CORRECT!";
            incrementScore();
        } else {
            document.getElementById('embeddedMovie').innerHTML = questionCounter[questionCounter.length-1].incorrectVideoUrl;
            document.getElementById('movieQuote').innerHTML = "WRONG!";
        }
    });

    document.getElementById('answerThree').addEventListener('click', function() {
        hideButtons();
        if (questionCounter[questionCounter.length-1].options[2].isCorrect === true) {  
            document.getElementById('embeddedMovie').innerHTML = questionCounter[questionCounter.length-1].correctVideoUrl;
            document.getElementById('movieQuote').innerHTML = "CORRECT!";
            incrementScore();
        } else {
            document.getElementById('embeddedMovie').innerHTML = questionCounter[questionCounter.length-1].incorrectVideoUrl;
            document.getElementById('movieQuote').innerHTML = "WRONG!";
        }
    });

    document.getElementById('answerFour').addEventListener('click', function() {
        hideButtons();
        if (questionCounter[questionCounter.length-1].options[3].isCorrect === true) {  
            document.getElementById('embeddedMovie').innerHTML = questionCounter[questionCounter.length-1].correctVideoUrl;
            document.getElementById('movieQuote').innerHTML = "CORRECT!";
            incrementScore();
        } else {
            document.getElementById('embeddedMovie').innerHTML = questionCounter[questionCounter.length-1].incorrectVideoUrl;
            document.getElementById('movieQuote').innerHTML = "WRONG!";
        }
    });    
}

playVideo();



function nextButton() {
    document.getElementById('nextButton').addEventListener('click', function() {
        document.getElementById('embeddedMovie').innerHTML = '';
        if (questions.length === 0) {
            document.getElementById('movieQuote').innerHTML = 'GAME OVER!';
            document.getElementById('embeddedMovie').innerHTML = 'You got ' + scoreKeeper + ' right out of 10!'
            document.getElementById('nextButton').style.visibility =  'hidden';
        } else {
            playQuestion();
        }
    });
}

nextButton();


//landing page with game rules?