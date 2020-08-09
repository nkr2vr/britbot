
module.exports = {
// convert fahrenheit to celsius
  f2c : function(f) {
    //input f = float
    console.log("f2c begin");
      return (f-32)/1.8;
  },
// convert celsius to fahrenheit
  c2f : function(c) {
    //input c = float
    console.log("c2f begin");
    return (c*1.8)+32;
  }
}
