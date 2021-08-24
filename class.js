class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
const amir = new Support('amir khan', 'BD');
const salman = new Support('solaiman khan', 'china');
const sharuk = new Support('Srk', 'dubai');
const akshay = new Support('akashay kumar', 'itali');

amir.startSession();
salman.startSession();
console.log(amir, salman, sharuk, akshay);