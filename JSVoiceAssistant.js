function runSpeechRecognition() {
    const frida = document.querySelector("#frida");
    const texto = document.querySelector("#output");

    // new speech recognition object in Spanish!
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-us";

    let speech = new SpeechSynthesisUtterance();
    var voices = window.speechSynthesis.getVoices();
    speech.voice = voices[4];

    // This runs when the speech recognition service starts
    recognition.onstart = function() {
        frida.classList.add("listening");
    };

    // stop listenting the speech recognition
    recognition.onspeechend = function() {
        recognition.stop();
    }

    // This runs when the speech recognition service returns result
    recognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript.toLowerCase();
        const confidence = event.results[0][0].confidence;

        let textToSpeak = "Sorry. Please speak again";

        // only run the special sentences if confidence is "high"
        if (confidence > 0.75) {
            const dias = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
            const meses = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
            const d = new Date();

            if ((transcript.indexOf("day") > -1 || transcript.indexOf("day") > -1) && transcript.indexOf("today") > -1) {
                textToSpeak = `Today is ${dias[d.getDay()]}`;
            } else if ((transcript.indexOf("day") > -1 || transcript.indexOf("day") > -1) && transcript.indexOf("tomorrow") > -1) {
                const n = d.getDay();
                textToSpeak = `Tomorrow will be ${dias[(n + 1) % 7]}`;
            } else if (transcript.indexOf("time") > -1) {
                let hour = d.getHours();
                if (hour > 12) hour -= 12;
                if (hour === 0) hour = 12;
                const minutes = d.getMinutes();
                let textMinutes = `and ${minutes} minutes`;
                if (minutes === 0) { textMinutes = "o'clock"; }
                if (minutes === 1) { textMinutes = "and 1 minute"; }
                if (minutes === 15) { textMinutes = "and quarter"; }
                if (minutes === 30) { textMinutes = "and a half"; }
                textToSpeak = `It is ${hour} ${textMinutes}`;
            } else if (transcript.indexOf("date") > -1 && transcript.indexOf("today") > -1) {
                textToSpeak = `Today is ${d.getDate()} of ${meses[d.getMonth()]}`;
            } else if (transcript.indexOf("date") > -1 && transcript.indexOf("tomorrow") > -1) {
                d.setDate(d.getDate() + 1)
                textToSpeak = `Tomorrow will be ${d.getDate()} of ${meses[d.getMonth()]}`;
            } else if (transcript.indexOf("best") > -1 && transcript.indexOf(" teacher") > -1) {
                textToSpeak = `Miss Geeta is the best teacher`;
            } else if (transcript === "hi" || transcript === "hello") {
                textToSpeak = `hello`;
            } else if ((transcript.indexOf("what") > -1 || transcript.indexOf("what") > -1) && transcript.indexOf("name") > -1) {
                textToSpeak = "My name is Frida. What is your name ?"
            } else if ((transcript.indexOf("are") > -1 || transcript.indexOf("are") > -1) && (transcript.indexOf("you") > -1 || transcript.indexOf("you"))) {
                textToSpeak = "I am fine. You ?"
            } else if ((transcript.indexOf("covid") > -1 || transcript.indexOf("covid") > -1) && transcript.indexOf("19") > -1) {
                textToSpeak = "wear a mask"
            } else if ((transcript.indexOf("java") > -1 || transcript.indexOf("java") > -1) && transcript.indexOf("language") > -1) {
                textToSpeak = "Tough Language"
            } else if ((transcript.indexOf("do") > -1 || transcript.indexOf("do") > -1) && transcript.indexOf("know") > -1) {
                textToSpeak = "Vihaan is a God!"
            }

        }

        // show the closed captioned and remove after 3 seconds
        texto.textContent = textToSpeak;
        setTimeout(function() {
            texto.textContent = "";
        }, 3000)

        // read out loud the answer
        let speech = new SpeechSynthesisUtterance();
        var voices = window.speechSynthesis.getVoices();
        speech.voice = voices[2];
        speech.lang = "en-us";
        speech.text = textToSpeak;
        speech.onend = function(event) {
            console.log(event.elapsedTime);
            setTimeout(function() {
                frida.classList.remove("speaking");
            }, 600 - (event.elapsedTime % 600));
        }
        frida.classList.remove("listening");
        frida.classList.add("speaking");
        window.speechSynthesis.speak(speech);
    };

    // start recognition
    recognition.start();
}