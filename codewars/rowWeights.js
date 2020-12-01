/**
 * https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9/train/javascript
 * @param {*} array 
 */

function rowWeights(array){
    let team1 = 0;
    let team2 = 0;
    for (i = 0; i < array.length; i++) {
      if (i % 2 === 0) {
        team1 += array[i];
      } else {
        team2 += array[i];
      }
    }
    return [team1, team2];
  }

  function rowWeightsFilter(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
  }