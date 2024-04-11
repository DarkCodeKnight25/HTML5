const user = {
    name: 'GITHUB',
    addres: 'https://github.com/DarkcodeDev25',
}

const user2 = {
    hello: 'youtube',
    dom: 'https://www.youtube.com/watch?v=GbfOBGhRbe0',
}

function printUserInfo(user) {
    return '<a href="' + user.addres + '" target="_blank" class="button">' + user.name + '</a>';
}

function printUserInfo2(user2) {
    return '<a href="' + user2.dom + '" target="_blank" class="button2">' + user2.hello + '</a>';
}

const userInfoHTML = printUserInfo(user);
const userInfo2HTML = printUserInfo2(user2);


document.body.innerHTML = userInfoHTML  + userInfo2HTML;

