function slideout() {
    return {
        open: false,
        usedKeyboard: false,
        init() {
            this.$watch('open', value => {
                value && this.$refs.closeButton.focus()
                this.toggleOverlay()
            })
            this.toggleOverlay()
        },
        toggleOverlay() {
            document.body.classList[this.open ? 'add' : 'remove']('h-screen', 'overflow-hidden')
        }
    }
}

function chatBot() {
    return {
        prompts: [
            ["Vihaan"],
            ["hi", "hey", "hello", "good morning", "good afternoon", "good evening"],
            ["how are you", "how is life", "how are things"],
            ["what are you doing", "what is going on", "what is up"],
            ["how old are you"],
            ["who are you", "are you human", "are you bot", "are you human or bot"],
            ["who created you", "who made you"],
            ["your name please", "your name", "may i know your name", "what is your name", "what call yourself"],
            ["i love you"],
            ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
            ["bad", "bored", "tired"],
            ["tell me story", "tell me joke"],
            ["ah", "yes", "ok", "okay", "nice"],
            ["bye", "good bye", "goodbye", "see you later"],
            ["what should i eat today"],
            ["bro"],
            ["what", "why", "how", "where", "when"],
            ["no", "not sure", "maybe", "no thanks"],
            [""],
            ["haha", "ha", "lol", "hehe", "funny", "joke"],
            ["flip a coin", "heads or tails", "tails or heads", "head or tails", "head or tail", "tail or heads", "tail or head"],
            ["beer", "buy me a beer", "want a beer"],
            ["Thanks", "Thank you", "Thanks a lot", "Thank you so much"],
            ["Could you help me?", "give me a hand please", "Can you help?", "What can you do for me?", "I need a support", "I need a help", "support me please", "Help me", "I need help", "Help"],
            ["have a complaint", "I want to raise a complaint", "there is a complaint about a service"],
            ["Java about", "Java intro", "What is java?", "Who created java?"],
            ["Java installation", "explain java installation"],
            ["Java syntax", "explain java syntax"],
            ["Java variables", "Explain java variables "],
            ["java data types", "Explain java data types"],
            ["Java operators", "explain java operators", "Explain java operators"],
            ["Java arrays", "explain java arrays"],
            ["Java conditional statements", "Explain java conditional statements"],
            ["Java loops", "Explain java loops"],
            ["java methods", "explain java methods"],
            ["Java Classes and objects", "Explain java classes and objects"],
            ["java inheritance", "explain java inheritance"],
            ["Java interfaces", "Explain java interfaces"],
            ["Java Abstract classes", "Explain java abstract classes"],
            ["java packages", "Explain java packages"],
            ["Java access modifiers", "access modifiers", "Explain java access specifiers"],
            ["Java Exception handling", "Explain Java exception handling"],
            ["Java threads", "Explain java threads"],
            ["java"]
        ],
        replies: [
            ["Vihaan the Champion"],
            ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
            ["Fine... how are you?", "Pretty well, how are you?", "Fantastic, how are you?"],
            ["Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually"],
            ["I am infinite"],
            ["I am just a bot", "I am a bot. What are you?"],
            ["The one true God, JavaScript"],
            ["I am nameless", "I don't have a name"],
            ["I love you too", "Me too"],
            ["Have you ever felt bad?", "Glad to hear it"],
            ["Why?", "Why? You shouldn't!", "Try watching TV"],
            ["What about?", "Once upon a time..."],
            ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
            ["Bye", "Goodbye", "See you later"],
            ["Sushi", "Pizza"],
            ["Bro!"],
            ["Great question"],
            ["That's ok", "I understand", "What do you want to talk about?"],
            ["Please say something :("],
            ["Haha!", "Good one!"],
            ["Heads", "Tails"],
            ["You can buy me a beer at: <a href=\"https://www.buymeacoffee.com/scottwindon\" target=\"_blank\" style=\"text-decoration:underline;\">https://www.buymeacoffee.com/scottwindon</a>"],
            ["Happy to help!", "Any time!", "My pleasure", "You're most welcome!"],
            ["Tell me how can assist you", "Tell me your problem to assist you", "Yes Sure, How can I support you"],
            ["Please provide us your complaint in order to assist you", "Please mention your complaint, we will reach you and sorry for any inconvenience caused"],
            ["Java is a high level, robust, object-oriented and secure programming language.Developed by Sun Microsystems in the year 1995. \nJames Gosling is known as the father of Java"],
            ["It can already be installed on your device. If it not installed, one can install it from oracle.com for free"],
            ["Every line of code that runs in Java must be inside a class. The main() method is required in every program.\nVariables need to be declared with data types.\n Comments are written with //"],
            ["Variables are containers for storing data values. \nJava has data types such as string, int, float, char, etc. \nTo create a variable, you must specify the type and assign it a value"],
            ["Java has 2 types of data types: primitive (byte, short , int long,...) and non-primitive(string, arrays, ...)"],
            ["Java has multiple types of operators as arithmetic(+,-,/,*), assignment(=,+=), comparison(==, !=) and more"],
            ["Arrays are used to store multiple values in a single variable. \nTo declare an array, define the variable type with square brackets: String[] cars; \nElements are accessed via index"],
            ["Use if to specify a block of code to be executed, if a specified condition is true. \nUse else to specify a block of code to be executed, if the same condition is false. \nUse else if to specify a new condition to test, if the first condition is false .\nUse switch to specify many alternative blocks of code to be executed "],
            ["There are 3 types of loops in java: for loop, do while loop and while loop"],
            ["A method must be declared within a class. \nIt is defined with the name of the method, followed by parentheses (). \nJava provides some pre-defined methods, such as System.out.println(), but you can also create your own methods to perform certain actions: "],
            ["A Class is like an object constructor, or a blueprint for creating objects. \nTo create a class, use the keyword class. "],
            ["Inheritance is used for method overriding and code reusability. There are single, multilevel, and heirarchical inheritance in java"],
            ["An interface is a completely abstract class that is used to group related methods with empty bodies.\n Create it with interface keyword and place abstract methods in it"],
            ["It is a restricted class that cannot be used to create obejccts. \n Created with abstract keyword.\nIt has one or more abstract methods"],
            ["A package in Java is used to group related classes.\nImport it using tha import keyword"],
            ["Access modifiers are used to limit the acces level. there are 4 access modifiers: private, protected, friendly(default), and public"],
            ["The try statement allows you to define a block of code to be tested for errors while it is being executed.\nThe catch statement allows you to define a block of code to be executed, if an error occurs in the try block. \nThe try and catch keywords come in pairs.\nThe finally block statements will always be executed"],
            ["Threads can be used to perform complicated tasks in the background without interrupting the main program. \nIt can be created by extending the Thread class and overriding its run() method. \nAnother way to create a thread is to implement the Runnable interface"],
            ["Please be more specific"]
        ],
        alternative: ["Same", "Go on...", "Bro...", "Try again", "I'm listening...", "I don't understand :/"],
        coronavirus: ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"],
        botTyping: false,
        messages: [{
            from: 'bot',
            text: 'Welcome!'
        }],
        output: function(input) {
            let product;

            // Regex remove non word/space chars
            // Trim trailing whitespce
            // Remove digits - not sure if this is best
            // But solves problem of entering something like 'hi1'

            let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();
            text = text
                .replace(/ a /g, " ") // 'tell me a story' -> 'tell me story'
                .replace(/i feel /g, "")
                .replace(/whats/g, "what is")
                .replace(/please /g, "")
                .replace(/ please/g, "")
                .replace(/r u/g, "are you");

            if (this.compare(this.prompts, this.replies, text)) {
                // Search for exact match in `prompts`
                product = this.compare(this.prompts, this.replies, text);
            } else if (text.match(/thank/gi)) {
                product = "You're welcome!"
            } else if (text.match(/(corona|covid|virus)/gi)) {
                // If no match, check if message contains `coronavirus`
                product = this.coronavirus[Math.floor(Math.random() * this.coronavirus.length)];
            } else {
                // If all else fails: random this.alternative
                product = this.alternative[Math.floor(Math.random() * this.alternative.length)];
            }

            // Update DOM
            this.addChat(input, product);
        },
        compare: function(promptsArray, repliesArray, string) {
            let reply;
            let replyFound = false;
            for (let x = 0; x < promptsArray.length; x++) {
                for (let y = 0; y < promptsArray[x].length; y++) {
                    if (promptsArray[x][y] === string) {
                        let replies = repliesArray[x];
                        reply = replies[Math.floor(Math.random() * replies.length)];
                        replyFound = true;
                        // Stop inner loop when input value matches this.prompts
                        break;
                    }
                }
                if (replyFound) {
                    // Stop outer loop when reply is found instead of interating through the entire array
                    break;
                }
            }
            if (!reply) {
                for (let x = 0; x < promptsArray.length; x++) {
                    for (let y = 0; y < promptsArray[x].length; y++) {
                        if (this.levenshtein(promptsArray[x][y], string) >= 0.75) {
                            let replies = repliesArray[x];
                            reply = replies[Math.floor(Math.random() * replies.length)];
                            replyFound = true;
                            // Stop inner loop when input value matches this.prompts
                            break;
                        }
                    }
                    if (replyFound) {
                        // Stop outer loop when reply is found instead of interating through the entire array
                        break;
                    }
                }
            }
            return reply;
        },
        levenshtein: function(s1, s2) {
            var longer = s1;
            var shorter = s2;
            if (s1.length < s2.length) {
                longer = s2;
                shorter = s1;
            }
            var longerLength = longer.length;
            if (longerLength == 0) {
                return 1.0;
            }
            return (longerLength - this.editDistance(longer, shorter)) / parseFloat(longerLength);
        },
        editDistance: function(s1, s2) {
            s1 = s1.toLowerCase();
            s2 = s2.toLowerCase();

            var costs = new Array();
            for (var i = 0; i <= s1.length; i++) {
                var lastValue = i;
                for (var j = 0; j <= s2.length; j++) {
                    if (i == 0)
                        costs[j] = j;
                    else {
                        if (j > 0) {
                            var newValue = costs[j - 1];
                            if (s1.charAt(i - 1) != s2.charAt(j - 1))
                                newValue = Math.min(Math.min(newValue, lastValue),
                                    costs[j]) + 1;
                            costs[j - 1] = lastValue;
                            lastValue = newValue;
                        }
                    }
                }
                if (i > 0)
                    costs[s2.length] = lastValue;
            }
            return costs[s2.length];
        },
        addChat: function(input, product) {

            // Add user message
            this.messages.push({
                from: 'user',
                text: input
            });

            // Keep messages at most recent
            this.scrollChat();

            // Fake delay to seem "real"
            setTimeout(() => {
                this.botTyping = true;
                this.scrollChat();
            }, 1000)

            // add bit message with Fake delay to seem "real"
            setTimeout(() => {
                this.botTyping = false;
                this.messages.push({
                    from: 'bot',
                    text: product
                });
                this.scrollChat();
            }, ((product.length / 10) * 1000) + (Math.floor(Math.random() * 2000) + 1500))

        },
        scrollChat: function() {
            const messagesContainer = document.getElementById("messages");
            messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
            setTimeout(() => {
                messagesContainer.scrollTop = messagesContainer.scrollHeight - messagesContainer.clientHeight;
            }, 100);
        },
        updateChat: function(target) {
            if (target.value.trim()) {
                this.output(target.value.trim());
                target.value = '';
            }
        }
    }
}

function music() {
    var element = document.getElementById("musicplay");
    var hidden = element.getAttribute("hidden");

    if (hidden) {
        element.removeAttribute("hidden");
    } else {
        element.setAttribute("hidden", "hidden");
    }
}