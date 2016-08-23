
(function(){
var app = angular.module('store',[]);
app.controller("StoreController", function(){
  this.products = gems;
});
var gems = [
{
  name: "oko",
  price: 2.83,
  desc: "dd ff ss",
  canPurchase: true,

},
{
  name: "oko1",
  price: 3.43,
  desc: "rr freeef rrrs",
  canPurchase: true,

}
];
})();
app.controller("PanelController", function(){
this.tab = 1;
});
