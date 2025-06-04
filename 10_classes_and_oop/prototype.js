

let myHero = ['thor', 'spiderman']

let heroPower = {
    thor : 'hammer',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.mohan = function(){
    console.log(`Mohan function is present here `);
}

Array.prototype.heyMohan = function(){
    console.log(`Mohan   says hello`);   
}

// heroPower.mohan()
myHero.mohan()
myHero.heyMohan()
// heroPower.heyMohan()



// Inheritance 

const User = {
    name : 'chai',
    email : 'chai@google.com'
}

const teacher = {
    makeVideo : true
}


const TeachingSupport = {
    isAvailabe : false
}

const TASupport = {
    makeAssignment : 'JS Assignment ',
    fullTime : true ,
    __proto__ : TeachingSupport
}

teacher.__proto__ = User;   // yaha Teacher User ki sari property use kar sakta hai


// Modern Syntax 

Object.setPrototypeOf(TeachingSupport, teacher);    // TeachingSupport ko access diya jaa rha hai m tecaher ki 

const anotherusername = 'Mohan      '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`);
}

anotherusername.trueLength()
'Krishan'.trueLength()
'Mohan'.trueLength()

