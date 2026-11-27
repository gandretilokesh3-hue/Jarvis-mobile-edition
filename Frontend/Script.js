
const chat = document.getElementById('chat');
const input = document.getElementById('msg');
const send = document.getElementById('send');

// Send button
send.onclick = () => {

    const t = input.value.trim();

    if (!t) return;

    // Display user message
    add('YOU: ' + t, 'user');

    input.value = '';

    // Display AI processing message
    const aiMessage = add(
        'J.A.R.V.I.S: Processing...',
        'ai'
    );

    // Simulated AI response
    setTimeout(() => {

        aiMessage.innerText =
            'J.A.R.V.I.S: Systems online. How may I assist you, Boss?';

    }, 1000);

};

// Add message to chat
function add(text, who) {

    const d = document.createElement('div');

    d.className = 'msg ' + who;
    d.innerText = text;

    chat.appendChild(d);

    chat.scrollTop = chat.scrollHeight;

    return d;
}

// Press Enter to send
input.addEventListener('keydown', (event) => {

    if (event.key === 'Enter') {
        send.click();
    }

});
