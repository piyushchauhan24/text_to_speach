function convertText() {
    const textToSpeech = document.getElementById('textToSpeech').value;
    const outputDiv = document.getElementById('output');
    const speech = new SpeechSynthesisUtterance();

    speech.text = textToSpeech;

    window.speechSynthesis.speak(speech);

    outputDiv.innerHTML = `<p>Spoken Text: <strong>${textToSpeech}</strong></p>`;
}