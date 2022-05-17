let row1Group1 = document.querySelector('#row1Group1Id');
let row1Group2 = document.querySelector('#row1Group2Id');
let row1Group3 = document.querySelector('#row1Group3Id');
let row1Group4 = document.querySelector('#row1Group4Id');
let row2Group1 = document.querySelector('#row2Group1Id');
let row2Group2 = document.querySelector('#row2Group2Id');
let row2Group3 = document.querySelector('#row2Group3Id');
let row2Group4 = document.querySelector('#row2Group4Id');

let chatLink = 'https://rs20-online-chat-app.herokuapp.com/';

let redirectToTheChatWebPage = function() {
    window.location = chatLink;
}

row1Group1.addEventListener('click', redirectToTheChatWebPage);
row1Group2.addEventListener('click', redirectToTheChatWebPage);
row1Group3.addEventListener('click', redirectToTheChatWebPage);
row1Group4.addEventListener('click', redirectToTheChatWebPage);
row2Group1.addEventListener('click', redirectToTheChatWebPage);
row2Group2.addEventListener('click', redirectToTheChatWebPage);
row2Group3.addEventListener('click', redirectToTheChatWebPage);
row2Group4.addEventListener('click', redirectToTheChatWebPage);