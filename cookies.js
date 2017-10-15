
document.addEventListener("DOMContentLoaded", function() {

    var chocolate = document.getElementById("chocolateButton");
    var lemon = document.getElementById("lemonButton");
    var sugar = document.getElementById("sugarButton");
    var emptyCart = document.getElementById('clear_box');
    var index_choc = 0;
    var index_sugar = 0;
    var index_lem = 0;


    chocolate.addEventListener("click", function() {
        Cookies.set("choco", index_choc);
        increase = parseInt(Cookies.get("choco"));
        increase++;
        chocolate.innerHTML = index_choc++;
    })

    lemon.addEventListener("click", function() {
        Cookies.set("lemon", index_lem);
        increase = parseInt(Cookies.get("lemon"));
        increase++;
        lemon.innerHTML = index_lem++;
    })

    sugar.addEventListener("click", function() {
        Cookies.set("sugar", index_sugar);
        increase = parseInt(Cookies.get("sugar"));
        increase++;
        sugar.innerHTML = index_sugar++;
    })

    emptyCart.addEventListener("click", function() {

        index_choc = 0;
        index_lem = 0;
        index_sugar = 0;

        Cookies.set("choco", index_choc);
        Cookies.set("lemon", index_lem);
        Cookies.set("sugar", index_sugar);

        var_sugar = parseInt(Cookies.get("sugar"));
        var_lemon = parseInt(Cookies.get("lemon"));
        var_choco = parseInt(Cookies.get("choco"));


        if (isNaN(var_sugar) === true || isNaN(var_lemon) === true || isNaN(var_choco) === true) {
            return (sugar.innerHTML = lemon.innerHTML = chocolate.innerHTML = '0')
        }
        //lemon.innerHTML = '0',
        //chocolate.innerHTML = '0'

        sugar.innerHTML = var_sugar;
        lemon.innerHTML = var_lemon;
        chocolate.innerHTML = var_choco;
    })

})
