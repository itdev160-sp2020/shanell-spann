var messages = [];
var messageType = {
    out: 'out-message',
    in: 'in-message',
    unknown: 'unknown-message'
};
var data = [
    {
        type: messageType.out,
        user: 'You',
        message: 'Wanna hang out?'
    },
    {
        type: messageType.in,
        user: 'Shanell',
        message: 'Yeah! Let\'s go to Blockbuster.'
    },
    {
        type: messageType.out,
        user:'You',
        message: 'Aw man, I was hoping you would say Circuit City.'
    },
    {
        type: messageType.in,
        user: 'Shanell',
        message: 'They are out of business. Meet me @ Sam Goody.'
    }
];

function Message(type, user, message){
    this.type = type;
    this.user = user;
    this.message = message; 
}

function createMessageElement(message) {
    var messageText = document.createTextNode(
        message.user + ': ' + message.message);
    var messageEl = document.createElement('div');
    
    messageEl.appendChild(messageText);
    messageEl.className = message.type;

    return messageEl;
}

function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messagesContainerEl = document.getElementById('message-container');

    switch(event.target.id) {
        case 'send-button':
            user = 'Shanell';
            type = messageType.in;
            break;
        case 'reply-button':
            user = 'You';
            type = messageType.out;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
    }

    if(messageInput.value != ''){
        var message = new Message(type, user, messageInput.value);
        messages.push(message);
        var el = createMessageElement(message);
        messagesContainerEl.appendChild(el);
        messageInput.value = '';
    }
}

function loadSeedData(){
    for (var i = 0; i < data.length; i++) {
        var message = new Message(data[i].type, data[i].user, data[i].message);
        messages.push(message);
    }
    
    var messagesContainerEl = document.getElementById('message-container');

    for (var i = 0; i < messages.length; i++) {
        var message = messages[i];
        var el = createMessageElement(message)

        messagesContainerEl.appendChild(el);
    }
}

var init = function() {
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;

    loadSeedData();
};

init();