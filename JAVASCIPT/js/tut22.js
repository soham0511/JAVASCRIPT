var flour=function(material,water)
{
  this.cakematerial=material;
  this.cakewater=water;
}
var cake=function(material,water,price,type)
{
 flour.call(this,material,water);
 this.cakeprice=price;
 this.caketype=type;
 document.write(this.cakematerial,this.cakewater,this.cakeprice,this.caketype);
}
new cake("floor","plain water",220,"Chocolate");
