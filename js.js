let money;
let name;
let time;






function start() {
    money = prompt('Your budget?');
    while (isNaN(money) || money == '' || money == null) {
        money = prompt('enter the number');
    }
    name = prompt('The name of your shop?').toUpperCase();
    time = 21;

}
// start();
let mainList = {
    budget: money,
    nameShop: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: true


};

function chooseGoods() {
    for (let i = 0; i < 5; i++) {

        let a = prompt('What type of products will sell?');

        if(a != "" && (typeof(a)) === 'string' &&  (typeof(a)) != null && a.length < 50) {
            mainList.shopGoods[i] = a;
        }else {
            i = i - 1;
        }

    }
}

function workTime() {
    if (time < 0) {
        console.log('its not happend')
    }else if (time > 8 && time < 20){
        console.log("time  to work")
    }else if (time > 24) {
        console.log('it is too late')
    }
}

function dayBudget() {
    alert(mainList.budget / 30);
}

function giveDiscount(price) {
    if(mainList.discount === 'true') {
        price = price - price/5;

    }
    alert(price);
}

function hireEmployes() {

    for(let i = 0; i < 4; i++) {
        let name = prompt("Your name?");
        if(name != "" && (typeof(name)) === 'string' &&  (typeof(name)) != null && isNaN(name)) {
            mainList.employers[i] = name;
        }else{
            i = i - 1;
        }
    }
}

// giveDiscount(50);

// dayBudget();
hireEmployes();

console.log(mainList);


