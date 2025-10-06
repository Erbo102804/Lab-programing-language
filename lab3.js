let number = prompt ("введите число от 2 до 10");

for (let i = 1; i <= 10; i++) {
    console.log(number + "x" + i + " = " + (number * i));
}

let cards = ["46782346", "45781218", "79874568", "12157845", "36151845", "41250895", "41201961"]

let Visacount =  0;
for  (let i = 0; i < cards.length; i++) {
    if (cards[i][0] === "4") {
        Visacount++;
    }
}
console.log("Карт VISA " + Visacount + " из " + cards.length);

let cardType = prompt("Введите тип карты ( Silver, Gold , Platinum )");
let liters = prompt("Сколько литров вы залили?");
let points = 0;

if (cardType === "Silver") {
    points = liters * 0.5;
} else if (cardType === "Gold") {
    points = liters * 0.75;
} else if (cardType === "Platinum") {
    points = liters * 1;
} else {
    console.log("Такой карты нет");
}
console.log("Вы получили " + points + " баллов");
