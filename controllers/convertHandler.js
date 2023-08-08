function ConvertHandler() {
  
  this.getNum = function(input) {
    if(input.match(/[.\d\/]+/g)) {
      if(input.includes('/')){
        if(input.indexOf('/') === input.lastIndexOf('/')) {
          let result = input.match(/[.\d\/]+/g)[0].split('/')
          if(result[0].match(/[0-9]+/) && result[1].match(/[0-9]+/)) {
            return result[0] / result[1]
          } 
        }
      }
      else{
        return parseFloat(input.match(/[.\d\/]+/g) || 1);
      }
    }
    else {
      return 1;
    }
  };
  
  this.getUnit = function(input) {
    let result = input.match(/[A-Za-z]+/g)[0];
    switch(result.toLowerCase()) {
      case "gal":
        return "gal";
      case "l":
        return "L";
      case "mi":
        return "mi";
      case "km":
        return "km";
      case "lbs":
        return "lbs"
      case "kg":
        return "kg"
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    switch(initUnit) {
      case "gal":
        return "L";
      case "L":
        return "gal";
      case "mi":
        return "km";
      case "km":
        return "mi";
      case "lbs":
        return "kg"
      case "kg":
        return "lbs"
    }
  };

  this.spellOutUnit = function(unit) {
    switch(unit) {
      case "gal":
        return "gallons";
      case "L":
        return "liters";
      case "mi":
        return "miles";
      case "km":
        return "kilometers";
      case "lbs":
        return "pounds"
      case "kg":
        return "kilograms"
    }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;

    let result;

    switch(initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "L":
        result = initNum / galToL;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
    }
    if(result !== undefined) {
      return parseFloat(result.toFixed(5));
    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
  
}

module.exports = ConvertHandler;
