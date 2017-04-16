var Hamburger =  function(){
    var hamburger = function(size, stuffing){
    this.size = size;
    this.stuffing = [];
    this.topping = [];
    this.toppingNames = [];
    this.stuffingNames = [];
    
    
    if(stuffing !== null &&stuffing !== Hamburger.NO_STUFFING) {
        this.stuffing.push(stuffing);
    }

    
    this.addStuffing = function(stuffing) {
        if( this.stuffing.indexOf(stuffing) < 0 && this.stuffing.length < 5) {
                 this.stuffing.push(stuffing);
                 this.stuffingNames.push(stuffing.name);
        }
        else if(this.stuffing.indexOf(stuffing) > 0 || this.stuffing.length >= 5){
                console.log('Нельзя добалять начинку к маленькому гамбургеру, если такая уже есть, и если уже добавлено 5 начинок!!!');
            }
        
    };
    
    this.addTopping = function(topping) {
        if(this.topping.indexOf(topping) === -1 && this.topping.length <= 5) {
            this.topping.push(topping);
            this.toppingNames.push(topping.name);
        }
        else{
            console.log("Нельзя добавлять более 5 топпингов и нельзя добавлять топпинг если такой уже есть !");
        }
    };
    
    this.remuveTopping = function(topping) { 
      for(var i = 0; i < this.topping.length;i++) {
          if(this.topping[i] === topping) {
              this.topping.splice(i,1);
              this.toppingNames.splice(i,1);
          }
      }
    };
    
    this.remuveStuffing = function(stuffing) {
      for(var i = 0; i < this.stuffing.length;i++) {
          if(this.stuffing[i] === stuffing) {
              this.stuffing.splice(i, 1);
              this.stuffingNames.splice(i, 1);
          }
      }
    };    
    
    this.getSize = function() {
        
        return this.size;
        
    };
    
    this.getStuffing = function() {
        return this.stuffing;
    };
    
    this.getTopping = function() {
        return this.topping;
    };
    
    this.calculateCalories = function() {
        var result;
        var mainCalories = 200;
        var k = 33.6;
        var toppingCalor = k * (this.topping.length / 2);
        var stuffingCalor = k * this.stuffing.length;
        result = toppingCalor + stuffingCalor + mainCalories;
        return result;
            
    };
    
    this.calculatePrice = function() {
        var result;
        var priceOfStuffing = this.stuffing.length * 0.1;
        var priceOfTopping = this.topping.length * 0.15;
        
        result = this.size.startprice + (priceOfStuffing + priceOfTopping);  
        
        return result;
    }
    
    
    
}
    return hamburger;
}();


var Assorty = (function(){ Hamburger.STUFFING_CHEESE = {name: 'Cheese', calories: 25, Price:  0.1};
Hamburger.STUFFING_CHICKEN = {name: 'Chicken', calories: 23, Price: 0.15};
Hamburger.STUFFING_POTATO = {name: 'Potato', calories: 27, Price: 0.2};
Hamburger.STUFFING_SALAD = {name: 'Salad', calories: 23, Price: 0.1};
Hamburger.STUFFING_ONION = {name: 'Onion', calories: 23, Price: 0.1};
Hamburger.STUFFING_PAPRICA = {name: 'Paprica', calories: 28, Price: 0.3};
Hamburger.NO_STUFFING = {name: 'No stuffing', calories: 0, Price: 0};                          
                          
Hamburger.TOPPING_MAYO = {name: 'Mayo', calories: 21, Price: 0.2};
Hamburger.TOPPING_SPICE = {name: 'Spice', calories: 24, Price: 0.3};
Hamburger.TOPPING_KETCHUP = {name: 'Ketchup', calories: 21, Price: 0.1};
Hamburger.TOPPING_SOURCREAM = {name: 'sour cream', calories: 22, Price: 0.3};
Hamburger.TOPPING_TOMATO = {name: 'Tomato', calories: 21, Price: 0.2};   
                          
Hamburger.SIZE_SMALL = { name: "Small", maxSize: 5, startprice: 0.7};  
Hamburger.SIZE_LARGE = { name: "Large", maxSize: 10, startprice: 1.5};
                          
})();


var sizes = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE]; //Размеры 



// Начинки в ассортименте |
var stuffings = [Hamburger.STUFFING_CHEESE, Hamburger.STUFFING_CHICKEN, Hamburger.STUFFING_POTATO, Hamburger.STUFFING_SALAD, Hamburger.STUFFING_ONION, Hamburger.STUFFING_PAPRICA];



// Топпинги в ассортименте 
var toppings = [Hamburger.TOPPING_MAYO, Hamburger.TOPPING_SPICE, Hamburger.TOPPING_KETCHUP, Hamburger.TOPPING_SOURCREAM, Hamburger.TOPPING_TOMATO];

///////сайт
$(document).ready(function() {
    var closeButtons = $(".btn.btn-danger").bind('click', removeTableChild);
    
    setAssortyments();
    
    addClone();
    
    console.log($(".col-xs-4.form-control-static").get(0).textContent);
});


var hamburger;

hamburger = new Hamburger(Hamburger.SIZE_LARGE,Hamburger.NO_STUFFING);

var clickMainButtons = function(e) {
    $('#newHamburger').hide(1000);
    $('#hamburgerFilling').show(2000);
    if(e.currentTarget === buttonLarge[0]) {
        hamburger.size = Hamburger.SIZE_LARGE;
    }else if(e.currentTarget === buttonSmall[0]){
       hamburger.size = Hamburger.SIZE_SMALL;
        
    }
    setInfo();
    countChange();
};

var InfoBlockInfo = $(".dl-horizontal").get(0);
var InfoBlockPrice = $(".dl-horizontal").get(1);

var setInfo = function() {
    $(InfoBlockInfo.children[1]).text(hamburger.size.name);
    $(InfoBlockInfo.children[3]).text(hamburger.topping.length);
    $(InfoBlockInfo.children[5]).text(hamburger.stuffing.length);
    $(InfoBlockInfo.children[7]).text(hamburger.calculateCalories()); 
    $(InfoBlockPrice.children[1]).text(hamburger.calculatePrice());
};
    
var setAssortyments = function() {
    for(var i = 0,len = toppings.length;i < len; i++) {
        $("<li><a href=\"#\">" + toppings[i].name + "</a><li/>").appendTo(dropdownMenuTopping);
    }
    
    for(var i = 0,len = stuffings.length;i < len; i++) {
        $("<li><a href=\"#\">" + stuffings[i].name + "</a><li/>").appendTo(dropdownMenuStuffing);
    }
};

var removeTableChild = function(e) {
    var tr = e.currentTarget.parentNode.parentNode;
    tr.remove();
    var item = tr.childNodes[3];
    for(var i = 0;i < hamburger.topping.length;i++) {
        if(hamburger.topping[i].name === item.textContent ) {
            hamburger.remuveTopping(hamburger.topping[i]);   
        }
    }
    for(var i = 0;i < hamburger.stuffing.length;i++) {
        if(hamburger.stuffing[i].name === item.textContent) {
            hamburger.remuveStuffing(hamburger.stuffing[i]);
        }
    }
    setInfo();
    countChange();
};

var tableTopping = $("tbody").get(0);
var tableStuffing = $("tbody").get(1);
var tableRow = $(tableTopping).children();
var tableStuffingRow = $(tableStuffing).children();
var clone;
var cloneChilds;
var flag = true;

var addClone = function() {
    clone = $(tableRow[0]).clone().get(0);
    cloneChilds = $(clone).children();
    if(flag === true) {
        $(tableRow[0]).remove();
        $(tableStuffingRow[0]).remove();
        $(tableStuffingRow[1]).remove();
    }
    flag = false;
};
var dropDownClick = function(e) {
    
    for(var i = 0; i < toppings.length; i++) {
        if(e.target.textContent === toppings[i].name && hamburger.toppingNames.indexOf(e.target.textContent) < 0) {
            hamburger.addTopping(toppings[i]);
            var n = hamburger.topping.length; 
            $(cloneChilds[0]).text(n);
            $(cloneChilds[1]).text(toppings[i].name);
            $(cloneChilds[2]).text(toppings[i].Price);
            $(cloneChilds[3].firstElementChild).bind("click", removeTableChild);
            
            $(tableTopping).append(clone);
          n++;  
        }else if(e.target.textContent === toppings[i].name && hamburger.toppingNames.indexOf(e.target.textContent) >= 0) {
            alert("Нельзя добавлять более 5 топпингов и нельзя добавлять топпинг если такой уже есть !!!");
        }
    }
    
    for(var i = 0; i < stuffings.length; i++) {
        if(e.target.textContent === stuffings[i].name && hamburger.stuffingNames.indexOf(e.target.textContent) < 0 && hamburger.stuffing.length < 5) {
            hamburger.addStuffing(stuffings[i]);
            var n = hamburger.stuffing.length; 
            $(cloneChilds[0]).text(n);
            $(cloneChilds[1]).text(stuffings[i].name);
            $(cloneChilds[2]).text(stuffings[i].Price);
            $(cloneChilds[3].firstElementChild).bind("click", removeTableChild);
            
            $(tableStuffing).append(clone);
          n++;  
        }else if(e.target.textContent === stuffings[i].name && hamburger.stuffingNames.indexOf(e.target.textContent) > 0 || e.target.textContent === stuffings[i].name && hamburger.stuffing.length === 5) {
            alert("Нельзя добавлять более 5 начинок и нельзя добавлять начинку если такая уже есть !!!");
        }
    }
    
    addClone();
    setInfo();
    countChange();  
};

var countChange = function() {
    
    var count = $("#count").val();
    var price = hamburger.calculatePrice();
    var TotalEl = $(".col-xs-4.form-control-static").get(0);
    console.log("TotalEl: " + TotalEl);
    TotalEl.textContent = price * count;
    
};

var openCheck =function() {
    $("#checkList").css("display", "inline");
    for(var i = 0; i < hamburger.topping.length; i++) {
        $("<tr><td>" + hamburger.topping[i].name + "</td><td>" + hamburger.topping[i].Price + "</td></tr>").appendTo("#checkTopping");
    }
    for(var i = 0; i < hamburger.stuffing.length; i++) {
        $("<tr><td>" + hamburger.stuffing[i].name + "</td><td>" + hamburger.stuffing[i].Price + "</td></tr>").appendTo("#checkStuffing");
    }
    
    $("<tr><td>" + hamburger.size.name + "</td><td>" + hamburger.size.startprice + "</td></tr>").appendTo("#sizePrise");
    
    //-------------------------------------------------------------------------
    var TotalEl = $(".col-xs-4.form-control-static").get(0);
    var totalChilds = $("#total").children();
    totalChilds[0].lastChild.textContent = ': ' + $("#count").val();
    totalChilds[1].lastChild.textContent = ': ' + TotalEl.textContent;
}


    var buttonLarge = $("#selectLargeSize").bind("click", clickMainButtons);
    var buttonSmall = $("#selectSmallSize").bind("click", clickMainButtons);


    var dropdownMenuTopping = $(".dropdown-menu").get(0);
    var dropdownMenuStuffing = $(".dropdown-menu").get(1);
    $(dropdownMenuTopping).bind("click", dropDownClick);
    $(dropdownMenuStuffing).bind("click", dropDownClick);
    $(window).bind("load", addClone);
    $("#count").bind("change", countChange);
    $(".btn.btn-lg.btn-success").bind("click", openCheck);
    



    