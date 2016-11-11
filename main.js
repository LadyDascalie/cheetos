var avgCheetosPerBag = 237.5;
var avgCheetosPriceInGPB = 1.29;
var avgCheetosBagWeight = 85;

function howManyCheetos(salary) {
    var bags = salary / avgCheetosPriceInGPB;
    var totalCheetos = bags * avgCheetosPerBag;
    var cheetosKgs = (bags * avgCheetosBagWeight) / 1000;

    render(bags.toFixed(3), totalCheetos.toFixed(3), cheetosKgs.toFixed(3));
}

function render(bags, total, kgs) {
    var res = document.getElementById('res');

    var b = document.createElement('p');
    var t = document.createElement('p');
    var k = document.createElement('p');

    b.id = "bags"; b.classList += "no-pad";
    t.id = "total"; t.classList += "no-pad";
    k.id = "kgs"; k.classList += "no-pad";

    b.innerText = "That is " + bags + " total bags of Cheetos";
    t.innerText = "Meaning " + total + " individual Cheetos";
    k.innerText = "Weighing in at " + kgs + " kgs!";

    res.appendChild(b);
    res.appendChild(t);
    res.appendChild(k);
}
