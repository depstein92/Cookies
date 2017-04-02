document.addEventListener("DOMContentLoaded", function(){

var chocolate = document.getElementById("chocolateButton");
var lemon = document.getElementById("lemonButton");
var sugar = document.getElementById("sugarButton");
var index_choc = 0;
var index_sugar = 0;
var index_lem = 0;
/*
echo -e '\nalias served="ruby -run -e httpd . -p 5000"' >> ~/.bash_profile && source ~/.bash_profile
served

*/
chocolate.addEventListener("click", function(){
  Cookies.set("choco", index_choc);
    increase = parseInt(Cookies.get("choco"));
    increase++;
      chocolate.innerHTML = index_choc++;
})
lemon.addEventListener("click", function(){
  Cookies.set("lemon",index_lem);
    increase = parseInt(Cookies.get("lemon"));
    increase++;
      lemon.innerHTML = index_lem++;

})
sugar.addEventListener("click", function(){
  Cookies.set("sugar", index_sugar);
    increase = parseInt(Cookies.get("sugar"));
    increase++;
      sugar.innerHTML = index_sugar++;
})

clear_box.addEventListener("click", function(){
Cookies.set("choco", index_choc);
Cookies.set("lemon",index_lem);
Cookies.set("sugar", index_sugar);

  var_sugar = parseInt(Cookies.get("choco"));
  var_lemon = parseInt(Cookies.get("lemon"));
  var_choco = parseInt(Cookies.get("sugar"));

    sugar.innerHTML = var_sugar = 0;
    lemon.innerHTML = var_lemon = 0;
    chocolate.innerHTML = var_choco = 0;
})


})

/*Choc_store.prototype.addChoc() =  function(){
this.c_store.push(index++);
}
Sugar_store.prototype.addSugar() =  function(){
this.c_store.push(index++);
}
Lemon_store.prototype.addLemon() =  function(){
this.c_store.push(index++);
}*/
