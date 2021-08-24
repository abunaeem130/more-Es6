//declare variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
console.log('myObject.p', myObject?.p?.q);


// destructruing array
const [p, q, r] = [45, 54, 91, 68];
// console.log(p, q, r);
const [best, faltu] = ['momotaj', 'porshi'];
console.log(best, faltu);
const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };

// chaining
const company = {
    name: 'gp',
    ceo: { id: 1, name: 'ajmal', food: 'fucka' },
    web: {
        work:
            'website devolopment', employee: 22, frameWork: 'react', tech: {
                first: 'html', second: 'css', thrid: 'js'
            }
    }
}
// console.log(company.web.tech.thrid);
// console.log(company.backe.tech.thrid);