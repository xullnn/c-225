var _ = function(element) {
   var utilities = {
     first: function() {
       return element[0];
     },

     last: function() {
       return element[element.length - 1];
     },

     without: function() {
       var toBeRemoved = Array.from(arguments);
       return element.filter(e => !toBeRemoved.includes(e));
     },

     range: function() {
       var newArray = [];
       if (arguments.length === 1) {
         for(let i = 0; i < arguments[0]; i += 1) {
           newArray.push(i);
         }
       } else if (arguments.length === 2) {
         for(let i = arguments[0]; i < arguments[1]; i += 1) {
           newArray.push(i)
         }
       }
       return newArray;
     },

     lastIndexOf: function(item) {
       var lastIndex = -1;
       for(let i = 0; i < element.length; i += 1) {
         if (element[i] === item) lastIndex = i;
       }

       return lastIndex;
     },

     sample: function(size) {
       function random(n) { return Math.floor(Math.random() * n)}; // used as index
       if (size === undefined) {
         return element[random(element.length)];
       } else {
         var copyArray = element.slice(0);
         var selected = [];
         var chosenIndex;
         for(let t = 1; t <= size; t += 1) {
           chosenIndex = random(copyArray.length);
           selected = selected.concat(copyArray.splice(chosenIndex, 1));
         }

         return selected;
       }
     },

     findWhere: function(obj) {
       function matchDgreeOf(obj1, obj2) {
         var degree = 0;
         for(let key in obj1) {
           if (obj1[key] === obj2[key]) degree += 1;
         }

         return degree;
       };

       var selectedIndex;
       var highestDegree = 0;
       var currentDegree;
       for(let i = 0; i < element.length; i += 1) {
         for(let key in obj) {
           currentDegree = matchDgreeOf(element[i], obj);
           if (currentDegree > highestDegree) {
             highestDegree = currentDegree;
             selectedIndex = i;
           }
         }
       }

     return highestDegree === 0 ? undefined : element[selectedIndex];
     },

     where: function(criterionObj) {
       function matchedCriteria(criterionObj, obj) {
         for(let key in criterionObj) {
           if (criterionObj[key] !== obj[key]) return false;
         }

         return true;
       };

       return element.filter(obj => matchedCriteria(criterionObj, obj));
     },

     pluck: function(key) {
       let values = [];
       element.forEach(function(obj) {
         for(let property in obj) {
           if (property === key) values.push(obj[property]);
         }
       })
       return values;
     },

     keys: function() {
       let keys = [];
       for(let key in element) {
         keys.push(key);
       }

       return keys;
     },

     values: function() {
       let values = [];
       for(let key in element) {
         values.push(element[key]);
       }
       return values;
     },

     extend: function() {
       // Object.assign
       function merge(obj1, obj2) {
         for(let key in obj2) {
           obj1[key] = obj2[key];
         }
         return obj1;
       }

       let args = Array.from(arguments);
       let mergeSource;
       while (args.length >= 2) {
         mergeSource = args.pop();
         merge(args[args.length - 1], mergeSource);
       }

       return args[0];
     },

     pick: function() {
       let keys = Array.from(arguments);
       let newObj = {};
       keys.forEach(key => newObj[key] = element[key]);
       return newObj;
     },

     omit: function() {
       let keys = Array.from(arguments);
       let newObj = {};
       for(let prop in element) {
         if (!(keys.includes(prop))) newObj[prop] = element[prop];
       }
       return newObj;
     },

     has: function(key) {
       for(let prop in element) {
         if (key === prop) return true;
       }

       return false;
     },
    };

  ["isElement", "isArray", "isObject", "isFunction", "isBoolean", "isString", "isNumber"].forEach(function(name) {
    utilities[name] = function() { _[name].call(utilities, elements) };
  });

   return utilities;
};

_.isElement = function(item) {
  if (item instanceof Element) return true;
  return false;
};

_.isArray = function(arg) {
  return Array.isArray(arg);
};

_.isObject = function(arg) {
  return (typeof arg === 'object') || (typeof arg === 'function');
};

_.isFunction = function(arg) {
  return typeof arg === 'function';
};

_.isBoolean = function(arg) {
 return toString.call(arg) === '[object Boolean]';
};

_.isString = function(arg) {
  return toString.call(arg) === '[object String]';
};

_.isNumber = function(arg) {
  return toString.call(arg) === '[object Number]';
}
