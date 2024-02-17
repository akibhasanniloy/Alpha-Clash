// deafault function
function setBackgroundColorById(elementId)
{
    const element= document.getElementById(elementId);
    element.classList.add('bg-orange-400');

}
function removeBackgroundColorById(elementId)
{
    const element= document.getElementById(elementId);
    element.classList.remove('bg-orange-400');

}
function hideElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element= document.getElementById(elementId);
    element.classList.remove('hidden');
}
function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
function getElementTextById(elementId){
    const element= document.getElementById(elementId);
    const text= element.innerText;
    return text;
}

// others
function play(){
    // console.log('Play start now');
    // step 1: hide the home screen to hde the home screen 
    // const homeSection= document.getElementById('home-screen');
    // homeSection.classList.add('hidden');
    // hideElementById('home-screen');
    // console.log(homeSection.classList);

    

    // show the playground
    // const playgroundSection= document.getElementById('play-ground');
    // playgroundSection.classList.remove('hidden');
    
    // console.log(playgroundSection.classList);
    // hide everything and show play ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life',5)
    setTextElementValueById('current-score',0)
    continueGame();
}

function getARandomAlphabet(){
    //get alphabet arrat
    const alphabetString='abcdefghijklmnopqurstwvxyz';
    const alphabets= alphabetString.split('');
    // console.log(alphabets);

    //get a randome index between 0-25
    const randomNumber= Math.random() * 25;
    const index= Math.round(randomNumber);
    // console.log(index);   

    const alphabet= alphabets[index];
    // console.log(index,alphabet);
    return alphabet;
}

// right or wrong button
function handlekeyboardkeyupevent(event){
    // which key pressed
    const playerpressed= event.key;
    // console.log('player pressed ', playerpressed);

    // stop the game
    if(playerpressed === 'Escape')
    {
        gameover();
    }

    // get the expected to preesed
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentalphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentalphabet.toLowerCase();
    console.log(playerpressed, expectedAlphabet);

    // Check matched or not
    if(playerpressed=== expectedAlphabet){
        console.log('You get a point');

        // call by function for step 1:
        // const currentScore= getTextElementValueById('current-score');
        // console.log(currentScore);
        // console.log('You have pressed correctly', expectedAlphabet);
        // update score:
        // 1. get the current score
        const currentScoreElement= document.getElementById('current-score');
        const currentScoreText= currentScoreElement.innerText;
        const currentScore= parseInt(currentScoreText);
        console.log(currentScore);
        // 2. increase score by the 1
        const newScore= currentScore+1;

        // 3. show the updated value
        currentScoreElement.innerText= newScore;
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You missed and you lost a life');
        // step 1. get the current life no
        const currentLifeElement= document.getElementById('current-life');
        const currentLifeText= currentLifeElement.innerText;
        const currentLife= parseInt(currentLifeText);
        console.log(currentLife);
        // step 2. reduse the life number
        const newLife= currentLife-1;
        // step 3. updated life
        currentLifeElement.innerText=newLife;
        if(newLife === 0){
            gameover();
        }
    }
}
// life update and reduce but using common function
// function getTextElementValueById(elementId)
// {
//     const element= document.getElementById(elementId);
//     const elementValueText= element.innerText;
//     const value= parseInt(elementValueText);
//     return value;
// }

document.addEventListener('keyup',handlekeyboardkeyupevent);

function continueGame(){
    // Generate Random Alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your alphabet',alphabet);

    // set randomly genarated alphaber to the string{show it}
    const currentAlphabetElement= document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set color
    setBackgroundColorById(alphabet);
}

function gameover(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1. get the final score
    const lastScore= getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);

    // clear the last selected Alphabat highlight
    const currentAlphabet= getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

