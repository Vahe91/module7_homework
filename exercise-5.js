class ElectricalAppliance {
    constructor (subjectName, brand, model) {
        this.subjectName = subjectName;
        this.brand = brand;
        this.model = model;
        this.isOn = false;
    }

    plugInOrOut() {
        if (this.isOn) {
            console.log(this.subjectName + ' выключен(a) из розетки');
            return this.isOn = false;
        } else {
            console.log(this.subjectName + ' включен(a) в розетку');
            return this.isOn = true;
        }
    }
}

class Phone extends ElectricalAppliance {
    constructor (subjectName, brand, model) {
        super(subjectName, brand, model);
        this.contacts = {};
        this.flashlight = false;

    }
    

    addContact(name, number) {
        if (name in this.contacts) {
            console.log('номер с таким именем уже записан');
        } else {
            return this.contacts[name] =  number;
        }
    }

    getLight() {
        if (this.flashlight) {
            console.log('фонарик выключен');
            return this.flashlight = false;
        } else {
            console.log('фонарик включен');
            return this.flashlight = true;
        }
    }
}

class DescLamp extends ElectricalAppliance {
    constructor (subjectName, brand, model, power) {
        super(subjectName, brand, model);
        this.power = power;
        this.isSwitchOn = false;
    }
    

    getSwitch() {
        if (this.isSwitchOn) {
            console.log('лампочка не горит');
            return this.isSwitchOn = false;
        } else {
            console.log('лампочка загорелась');
            return this.isSwitchOn = true;
        }
    }
}

const myPhone = new Phone('телефон', 'Apple', 'iPhone Xs');
const myLamp = new DescLamp('настольная лампа', 'Manila Evoluce', 'SLE107504-01', 40);


myPhone.plugInOrOut();
myPhone.addContact('ivan', 123456);
console.log(myPhone.contacts);
myPhone.addContact('ivan', 234567);
console.log(myPhone.contacts);
myPhone.addContact('alex', 987654);
console.log(myPhone.contacts);
myPhone.getLight();
myLamp.plugInOrOut();
myLamp.getSwitch();
myLamp.getSwitch();