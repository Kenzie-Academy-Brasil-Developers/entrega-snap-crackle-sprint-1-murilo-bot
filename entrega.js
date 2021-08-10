function snapCrackle (maxValue){
    let resultado = [];
    let str = '';
  for (let count = 1; count <= maxValue; count++){
      if (count % 2 !== 0){          
          str += 'Snap, ';              
        } if (count % 5 === 0) {
            str += 'Crackle, ';           
        } if (count %2 !== 0 && count % 5 === 0){
            str += 'SnapCrackle, ';
        } if(count % 2 === 0 && count % 5 !== 0 ) {
             str += (count + ', ');
        }
    }
       
    return str;
}
console.log(snapCrackle(25));

function snapCracklePrime(maxValue){
    let resultado = [];
    let str = '';
  for (let count = 1; count <= maxValue; count++){
      if (count % 2 !== 0){          
          str += 'Snap, ';              
        } if (count % 5 === 0) {
            str += 'Crackle, ';           
        } if (count %2 !== 0 && count % 5 === 0){
            str += 'SnapCrackle, ';
        } if(count % 2 === 0 && count % 5 !== 0 ) {
             str += (count + ', ');
        } if (count % 2 !== 0 && count / 1 === count){
            str += 'Prime, ';
        }
    }
      
    return str;

}
console.log(snapCracklePrime(25));