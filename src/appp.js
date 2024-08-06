let input = document.querySelectorAll('input');
let btn = document.querySelector('button');
let p = document.querySelector('b');

let usr = [
    {
        ism: "MarsIT",
        kod: "marsit1233",
        navigator: './admin.jsx'
    }
];

btn.addEventListener('click', () => {
    let kodd = input[1].value;
    let min = 8;
    let max = 12;

    if (kodd.length < min || kodd.length > max) {
        p.innerHTML = 'Parol uzunligi 8 va 12 oralig\'da bo\'lishi kerak';
        return;
    }

    let user = usr.find(v => v.ism === input[0].value && v.kod === input[1].value);

    if (user) {
        console.log('Tori');
        window.location.href = user.navigator;
    } else {
        p.innerHTML = 'Bunday foydalanuvchi yo\'q!';
    }
});
