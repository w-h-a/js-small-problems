// Create an object that expresses the frequency with which
// each letter occurs in this string:

let statement = "The Flintstones Rock";

let frequencyDistribution = statement.split('').reduce((acc, ele) => {
  if (ele !== ' ') {
    if (acc[ele] === undefined) {
      acc[ele] = 1;
    } else {
      acc[ele] += 1;
    }
  }
  return acc;
}, {});

console.log(frequencyDistribution);
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }


const toRecord =
    (acc, ele) =>
        ({ ...acc
         , ...(ele === ' ' ? {}
                           : { [ele]: acc[ele] === undefined ? 1
                                                             : acc[ele] + 1
                             })
        });

const frequencyDistribution2 =
    statement.split ("")
             .reduce (toRecord, {});


console.log (frequencyDistribution2);
