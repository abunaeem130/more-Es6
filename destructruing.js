const fish = { id: 58, name: 'king hilsha', price: 9000, phone: '017175555', address: 'chandpur', dress: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, price, dress, id } = fish;


// console.log(phone, price);
// console.log(phone, dress);
// console.log(phone, dress);
// console.log(phone, price);
// console.log(phone, id);

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
// const work = company.web.work;
// const frameWork = company.web.frameWork;
const { work, frameWork } = company.web;
const { food } = company.ceo;
const { second, thrid } = company.web.tech;
console.log(work, food, frameWork);