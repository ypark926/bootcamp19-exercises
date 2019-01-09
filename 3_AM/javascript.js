var quotes = ['as he read, I fell in love the way you fall asleep: slowly, and then all at once. - john green',
    'my thoughts are stars I can\'t fathom into constellations. - john green',
    'it\'s a metaphor, see: You put the killing thing right between your teeth, but you don\'t give it the power to do its killing. - john green',
    'my major vice is sarcasm with a side of caffeine addiction. - rosemary clement-moore',
    'it is so hard to leave—until you leave. And then it is the easiest goddamned thing in the world. - john green',
    'with great power...comes great need to take a nap. wake me up later. - rick riordan',
    'be careful of love. it\'ll twist your brain around and leave you thinking up is down and right is wrong. - rick riordan',
    'people are more difficult to work with than machines. and when you break a person, he can\'t be fixed. - rick riordan',
    'the boy never cried again, and he never forgot what he\'d learned: that to love is to destroy, and that to be loved is to be the one destroyed. - cassandra clare',
    'the only way out of the labyrinth of suffering is to forgive. - john green',
    'dreams are only dreams until you wake up and make them real. - ned vizzini',
    'people are screwed up in this world. i\'d rather be with someone screwed up and open about it than somebody perfect and ready to explode. = ned vizzini',
    'that\'s life for you. all the happiness you gather to yourself, it will sweep away like it\'s nothing. if you ask me i don\'t think there are any such things as curses. i think there is only life. that\'s enough. - junot diaz',
    'but we aren\'t transparent. if we want someone to know us, we have to tell them stuff. - ava dellaira',
    'you are all the colors in one, at full brightness. - jennifer niven',
    'i\'m surviving on caffeine and a cold heart. - kay whitley',
    'just because she likes the same bizzaro crap you do doesn\'t mean she\'s your soul mate. - (500) days of summer',
    'it just wasn\'t me that you were right about. - (500) days of summer',]

function newQuote()
{
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

var answers = ['it is certain.',
    'it is decidedly so.',
    'without a doubt.',
    'definitely',
    'you may rely on it.',
    'as I see it, yes.',
    'most likely.',
    'outlook good.',
    'yes.',
    'signs point to yes.',
    'reply hazy, try again.',
    'ask again later.',
    'better not tell you now.',
    'cannot predict now.',
    'concentrate and ask again.',
    'don\'t count on it.',
    'my reply is no.',
    'my sources say no.',
    'outlook not so good.',
    'very doubtful.',]

function magicAnswers()
{
    var randomNumber = Math.floor(Math.random() * (answers.length));
    document.getElementById('answerDisplay').innerHTML = answers[randomNumber];
}