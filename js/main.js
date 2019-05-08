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
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/gRvu0yHoHy8?controls=0&amp;start=60" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/N1uTsqJVAeo?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/hxJPJ6JY0Pk?controls=0&amp;start=11" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
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

const backToTheFuture = {
    quote: '1.21 gigawatts? Great scott!',
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/I5cYgRnfFDA?controls=0&amp;start=11" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/BWUP5QxdwPg?controls=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: false,
        movie: 'Flubber'
        },
        {
        isCorrect: false,
        movie: 'Jurassic Park'
        },
        {
        isCorrect: true,
        movie: 'Back to the Future'
        },
        {
        isCorrect: false,
        movie: 'A Beautiful Mind'
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

const christmasStory = {
    quote: "I can't put my arms down!",
    correctVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/PKxsOlzuH0k?controls=0&amp;start=39" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    incorrectVideoUrl: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vvB6Ld1g8vA?controls=0&amp;start=26" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    options: [
        {
        isCorrect: false,
        movie: 'Space Jam'
        },
        {
        isCorrect: false,
        movie: 'Rookie of the Year'
        },
        {
        isCorrect: false,
        movie: "Harry Potter and the Scorcerer's Stone"
        },
        {
        isCorrect: true,
        movie: 'A Christmas Story'
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
const questions = [theRoom, willyWonka, myCousinVinny, christmasStory, homeAlone, backToTheFuture, sandLot, lordOfTheRings, aceVentura];

let scoreKeeper = 0;

const questionCounter = [];


/*----- cached element references -----*/
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

/*----- event listeners -----*/

function playVideo() {

    document.getElementById('answerOne').addEventListener('click', function() {
        hideButtons();
        questionCounter[questionCounter.length-1].options[0].isCorrect === true  
        ? (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].correctVideoUrl,
        document.getElementById('movieQuote').innerHTML = "CORRECT!")
        : (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].incorrectVideoUrl,
        document.getElementById('movieQuote').innerHTML = "WRONG!");
    });

    document.getElementById('answerTwo').addEventListener('click', function() {
        hideButtons();
        questionCounter[questionCounter.length-1].options[1].isCorrect === true  
        ? (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].correctVideoUrl,
        document.getElementById('movieQuote').innerHTML = "CORRECT!")
        : (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].incorrectVideoUrl,
        document.getElementById('movieQuote').innerHTML = "WRONG!");
    });

    document.getElementById('answerThree').addEventListener('click', function() {
        hideButtons();
        questionCounter[questionCounter.length-1].options[2].isCorrect === true  
        ? (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].correctVideoUrl,
        document.getElementById('movieQuote').innerHTML = "CORRECT!")
        : (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].incorrectVideoUrl,
        document.getElementById('movieQuote').innerHTML = "WRONG!");
    });

    document.getElementById('answerFour').addEventListener('click', function() {
        hideButtons();
        questionCounter[questionCounter.length-1].options[3].isCorrect === true  
        ? (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].correctVideoUrl,
        document.getElementById('movieQuote').innerHTML = "CORRECT!")
        : (document.getElementById('embeddedMovie').innerHTML = questionCounter[0].incorrectVideoUrl,
        document.getElementById('movieQuote').innerHTML = "WRONG!");
    });

}

playVideo();

// function nextButton() {
//    
//     document.getElementById('nextButton').addEventListener('click', function() {
//         playQuestion();
//     }
//
// }
