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

  // Create a command for "Namasté" word
  let commands = {
    'Namasté' : function () {
      console.log('Bravo tu as dit Namasté !')
    }
  }

  // Add the command to annyang
  annyang.addCommands(commands)

  // Start listening
  annyang.start({ autoRestart: true, continuous: false })

  // If the user didn't say "Namasté"
  annyang.addCallback('resultNoMatch', function(phrases) {
    if(commands !== phrases[0])
    {
      console.log('Faux')
      console.log('Je pense avoir compris les mots suivants :', phrases)
    }
  })
}