function ElectricalAppliance(name, brand, model) {
    this.brand = brand,
    this.model = model,
    this.isOn = false,

    this.plugInOrOut = function() {
        if (this.isOn) {
            console.log(name + ' выключен(a) из розетки');
            return this.isOn = false;
        } else {
            console.log(name + ' включен(a) в розетку');
            return this.isOn = true;
        }
    }
}

function Phone (brand, model) {
    this.brand = brand,
    this.model = model,
    this.contacts = {},
    this.flashlight = false,

    this.addContact = function (name, number) {
        if (name in this.contacts) {
            console.log('номер с таким именем уже записан');
        } else {
            return this.contacts[name] =  number;
        }
    },

    this.getLight = function() {
        if (this.flashlight) {
            console.log('фонарик выключен');
            return this.flashlight = false;
        } else {
            console.log('фонарик включен');
            return this.flashlight = true;
        }
    }
}

function DescLamp(brand, model, power) {
    this.brand = brand,
    this.model = model,
    this.power = power,
    this.isSwitchOn = false,

    this.getSwitch = function () {
        if (this.isSwitchOn) {
            console.log('лампочка не горит');
            return this.isSwitchOn = false;
        } else {
            console.log('лампочка загорелась');
            return this.isSwitchOn = true;
        }
    }
}

Phone.prototype = new ElectricalAppliance('телефон');
DescLamp.prototype = new ElectricalAppliance('настольная лампа');

const myPhone = new Phone('Apple', 'iPhone Xs');
const myLamp = new DescLamp('Manila Evoluce', 'SLE107504-01', 40);


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