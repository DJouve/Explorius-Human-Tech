/*
*Init annyang and SpeechKITT* 
*/

// Check if the user's browser supports speech recognition
if (!annyang) 
{
  console.log("Speech Recognition is not supported")
}

// Set up SpeechKITT for the page's feature
if (annyang) 
{

  // Tell KITT to use annyang
  SpeechKITT.annyang()

  // Define a stylesheet for KITT to use
  SpeechKITT.setStylesheet('https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat-amethyst.css')

  //Instructional text
  SpeechKITT.setInstructionsText('Rapproche toi du micro et dis "Namasté"')

  // When a sound is detected, SpeechKITT change the text to the one defined in the function
  annyang.addCallback('soundstart', function() {
    SpeechKITT.setInstructionsText('Un instant...')
  })

  // Render KITT's interface
  SpeechKITT.vroom()
}

// Set up annyang for the page's feature
if (annyang)
{

  // Set language for annyang
  annyang.setLanguage('fr-FR')

  // Create a command for "Namasté" and display pop up by hearing the right word
  const showPopUp = document.querySelector('.background-pop-up')
  const textForSuccess= document.querySelector('.content-pop-up.correct-prononciation')
  let commands = {
    'Namasté' : function () {
      showPopUp.classList.remove('js-hidden')
      textForSuccess.classList.remove('js-hidden')
    }
  }

  // Add the command to annyang
  annyang.addCommands(commands)

  // Start listening
  annyang.start({ autoRestart: true, continuous: false })

  // If the user didn't say "Namasté" or not correctly
  const textForFailure= document.querySelector('.content-pop-up.wrong-prononciation')
  annyang.addCallback('resultNoMatch', function(phrases) {
    if(phrases[0] !== commands)
    {
      showPopUp.classList.remove('js-hidden')
      textForFailure.classList.remove('js-hidden')
      // console.log('Je pense avoir compris les mots suivants :', phrases)
    }
  })
}

/*
*Pop up interaction* 
*/

// Get HTML elements
const buttonInteraction = document.querySelectorAll('.primary-button')
const hidePopUp = document.querySelector('.background-pop-up')

// Close pop-up on click of the button element
for(let i = 0; i < buttonInteraction.length;i++)
{
  buttonInteraction[i].addEventListener('click', () => {
    if(hidePopUp !== hidePopUp.classList.contains('js-hidden'))
    {
      hidePopUp.classList.add('js-hidden')
    }
  })
}

