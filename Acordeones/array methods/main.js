
//indexOf

const randomStuff = ['credit card', 'keys', 'receipt', 'gum', 'key', 'keys', 'plastic spoon'];

const buscaIndex = array => array.indexOf('keys',2);

console.log(buscaIndex(randomStuff))

//MAP & TOUPPERCASE

const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];

const agrega = array => array.map(item => item.toUpperCase() + '!');

//console.log(agrega(greetings))

//FILTER & INCLUDES

const arr1 = ['uno','dos','tres','cuatro','cinco'];
const arr2 = ['uno','ocho','trece','cinco','diez','dos'];

const compara = (array1,array2) => array1.filter(item => array2.includes(item));

//console.log(compara(arr1,arr2));

//EVERY

const dinner = [{name: 'cheese', source: 'plant'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'twinkies', source:'plant'}];

const mismoValor = array => array.every(item => item.source === 'plant');

console.log(mismoValor(dinner))

//SORT & REVERSE

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922];

const ordena = array => array.sort().reverse();

//console.log(ordena(years));

// SORT( comparingFuntion )

const species = [ {name:'shark', teeth:50}, {name:'dog', teeth:42}, {name:'alligator', teeth:80}, {name:'human', teeth:32}];

const ordenaPropiedades = array => {
    return array.sort((a,b) => {
        if(a.teeth < b.teeth){
            return -1;
        }else if(a.teeth > b.teeth){
            return 1;
        }else{
            return 0;
        }
    });
}

//console.log(ordenaPropiedades(species));