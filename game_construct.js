 var TopDonut = function(shopLoc, mincust, maxcust, avgDonuts) {
    this.shopLoc = shopLoc;
    this.mincust = mincust;
    this.maxcust = maxcust;
    this.avgDonuts = avgDonuts;
    this.hourlyArray = [];

    };
 TopDonut.prototype.hourlyTotals = function () {
   var customersPerHour = Math.floor(Math.random() * (this.maxcust - this.mincust) + 1) +this.mincust;
   return Math.round(customersPerHour * this.avgDonuts)
 }
 // Thanks to stackoverflow
 TopDonut.prototype.dailyTotals = function () {
   var daysTotal = 0;
   for (var i = 0; i < 11; i++) {
     var totalperHour = this.hourlyTotals();
   this.hourlyArray.push(totalperHour);
   daysTotal += totalperHour;

   }
   return daysTotal;
    };

  TopDonut.prototype.render = function () {
    var dailyTotal = this.dailyTotals();
    var Tr = document.getElementById(this.shopLoc);
    for (var i = 0; i < 13; i++) {
      var elTd = document.createElement('td');
      elTd.textContent = this.hourlyArray[i];
      Tr.appendChild(elTd);
    };
    elTd.textContent = dailyTotal;
    Tr.appendChild(elTd);

};

 var downtown = new TopDonut("downtown", 8, 43, 4.50);
 var ballard = new TopDonut("ballard", 8, 58, 3.75);
 var slu = new TopDonut("slu", 9, 23, 6.33);
 var wedgewood = new TopDonut("wedgewood", 2, 28, 1.25);
 var capitolhill = new TopDonut("capitolhill", 8, 58, 3.75);
 downtown.render();
 ballard.render();
 slu.render();
 wedgewood.render();
 capitolhill.render();

