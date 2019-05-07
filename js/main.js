/*----- constants -----*/
const aceVentura = {
    quote: 'Alrighty then!',
    correctVideoUrl: 'https://youtu.be/0tJGk4ofc18',
    incorrectVideoUrl: 'https://youtu.be/WLQcBoKekmQ',
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
    correctVideoUrl: 'https://youtu.be/gRvu0yHoHy8?t=60',
    incorrectVideoUrl: 'https://youtu.be/N1uTsqJVAeo',
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
    correctVideoUrl: 'https://youtu.be/j4RowL_tZug',
    incorrectVideoUrl: 'https://youtu.be/3Slv-p4Fato',
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
    correctVideoUrl: 'https://youtu.be/VdLkYcnml4s?t=34',
    incorrectVideoUrl: 'https://youtu.be/hxJPJ6JY0Pk?t=11',
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
    correctVideoUrl: 'https://youtu.be/I5cYgRnfFDA?t=11',
    incorrectVideoUrl: 'https://youtu.be/BWUP5QxdwPg',
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
    correctVideoUrl: 'https://youtu.be/VNWO9lfBg-s',
    incorrectVideoUrl: 'https://youtu.be/Y-4-q3AiTcw',
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
    correctVideoUrl: 'https://youtu.be/PKxsOlzuH0k?t=39',
    incorrectVideoUrl: 'https://youtu.be/vvB6Ld1g8vA?t=26',
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
    correctVideoUrl: 'https://youtu.be/g1DexW96bkA',
    incorrectVideoUrl: 'https://youtu.be/AiA1NVEf9K4',
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
    correctVideoUrl: 'https://youtu.be/3pwvB4_Te8A?t=19',
    incorrectVideoUrl: 'https://youtu.be/HaoySOGlZ_U?t=58',
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
    correctVideoUrl: 'https://youtu.be/zLhoDB-ORLQ',
    incorrectVideoUrl: 'https://youtu.be/pjc4ZPTX1XQ?t=16',
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

/*----- cached element references -----*/


/*----- event listeners -----*/


//if person clicks button where isCorrect=true, correctVideoURL plays
//if person clicks button where isCorrect=false, incorrectVideoURL plays

//video is played in 'movieQuote' div and the buttons do not display
//a new button will fade in that will allow the person to render the next question



/*----- functions -----*/

const questionCounter = [];

function playQuestion() {
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

function playVideo() {
    document.getElementById('answerOne').addEventListener('click', function() {
        questionCounter[0].options[0].isCorrect === true  
        ? alert("true") 
        : alert("false");
    });
}

playVideo();