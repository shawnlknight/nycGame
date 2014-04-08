
var gestures = ["play", "no"];

function no(index) {
    alert("LAME!!! You aren't very fun are you?");
}

function play(index) {




        var transport = prompt("Here's the scenario: You are living in NYC and working for a newspaper...How do you commute? (taxi, subway, or bicycle?");

switch(transport) {
    case 'taxi':
        var payment = prompt("You are stuck in traffic on 5th Ave. The driver says he knows of a 'secret' route but you have to pay him $20 extra. Do you accept? (yes/no?)");
        if(payment === 'yes') {
            alert("Good choice! The experienced driver got you to work only a few minutes late...but you did miss out on free donuts! (You earned 25 points)");
        } else if(payment === 'no') {
            alert("Too bad you didn't pay the extra dough. You are super late and missed your big meeting. You're FIRED!!! (You earned 0 points)");
        }

        break;

    case 'subway':
        var help = prompt("On your way down to the subway you see an old lady trying to make her way across the busy street. Do you help her and take a risk being late to work? (yes/no)");
        if(help === 'yes') {
            alert("Very good of you! The CEO of your newspaper sees your good deed as he drives by in his limo. He recognizes you as the low-level gossip column writer and decides to promote you to head writer of political affairs!!! (You earned 100 points)");
        } else if(help === 'no') {
            alert("Too bad...you are still late to work and your boss rejected your recent article. Maybe you should move back to South Carolina and re-think your career choice...(You earned 0 points)");
        }

        break;

    case 'bicycle':
        var stop = prompt("Do you stop at all stop lights/signs? (yes/no)");
        if(stop === 'no') {
            alert("You beat all the traffic and are really early to work! Although, it's August and you are soaked with sweat...Press 'ok' to continue.");
        } else if(stop === 'yes') {
            alert("Safe thinking, but now you are definitely late for work and you will miss your big meeting...(You earned 0 points)");
        }
    

switch(stop) {
    case 'no':
        var suit = prompt("You have a huge meeting first thing. Do you show up all sweaty or borrow your co-worker's extra suit that is way too small for you? (sweaty/small)");
        if(suit === 'sweaty') {
            alert("Congradulations! Your boss assumes that the sweat is from all the hard work you are doing and decides to put your article in the front of the section! (You earned 50 points)");
        } else if(suit === 'small') {
            alert("You may not be soaked in sweat anymore but everyone is laughing at how ridiculous you look. Fail...(You earned 0 points)");
        }
}

}}