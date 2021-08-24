class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}



class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
class StudentCare extends TeamMember {
    designation = 'care Web Dev';
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditior;
    designation = 'neptune app Dev';
    constructor(name, address, editior) {
        super(name, address);
        this.codeEditior = editior;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}

const amir = new Support('amir khan', 'BD', 11);
const salman = new Support('solaiman khan', 'china', 4);
const sharuk = new Support('Srk', 'dubai');
const akshay = new Support('akashay kumar', 'itali', 9);

const alia = new StudentCare('alia batt', 'mumbai');
const ash = new NeptuneDev('ash', 'mumbai', 'android studio');
ash.releaseApp('4.5');
console.log(ash.name);

// console.log(alia);
