const speak = (msg) => {
    if ( "speechSynthesis" in window ) {
        var synthesis = window.speechSynthesis;
        var utterance = new SpeechSynthesisUtterance;
        utterance.text = msg;
        synthesis.speak(utterance)
    } else {
        alert("Text-To-Speech supported by your browser")
    }
}

document.addEventListener("click", (event) => {
    speak(event.target.innerHTML);
})