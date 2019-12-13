/*
*Init annyang* 
*/

//Setting language

annyang.setLanguage('fr-FR')

// Check if the user's browser supports speech recognition
if (!annyang) {
  console.log("Speech Recognition is not supported")
}

// Recognize "Namaste" word
if (annyang) {
  
  // Knowing if the user said "Namaste"
  annyang.addCallback('resultNoMatch', function(phrases) {
    console.log("Je pense que l'utilisateur a dit: ", phrases[0])
    console.log("Mais ça pourrait être aussi: ", phrases)
  })

  // Start listening.
  annyang.start() 
} 

/*
*Init SpeechKITT* 
*/

// Init the browser's own Speech Recognition
let recognition = new webkitSpeechRecognition();

// Tell KITT the command to use to start listening
SpeechKITT.setStartCommand(function() {recognition.start()})

// Tell KITT the command to use to abort listening
SpeechKITT.setAbortCommand(function() {recognition.abort()})

// Register KITT's recognition start event with the browser's Speech Recognition
recognition.addEventListener('start', SpeechKITT.onStart)

// Register KITT's recognition end event with the browser's Speech Recognition
recognition.addEventListener('end', SpeechKITT.onEnd)

// Tell KITT to use annyang
SpeechKITT.annyang();

// Define a stylesheet for KITT to use
SpeechKITT.setStylesheet('https://cdnjs.cloudflare.com/ajax/libs/SpeechKITT/1.0.0/themes/flat-amethyst.css')

// Render KITT's interface
SpeechKITT.vroom()