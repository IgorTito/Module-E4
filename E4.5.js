// создаем класс "Телевизор"
class TvDevice {
    constructor(type) {
        this.type = type;
    }
}


// создаем класс-наследник "Приставка"
class TvBox extends TvDevice {
    constructor(on, channel, volume, type) {
        super(type);
        this.channel = channel;
        this.volume = volume;
        this.isSwitch = on;
    }

    getPowerCalc(amper, volt) {
        console.log(`Потребляемая мощность приставки равна - ${amper * volt} ватт`)
    }

    getOn() {
        if (this.isSwitch === "on") {
            console.log(this.type + " включен")
        } else if (this.isSwitch === "off") {
            console.log(this.type + " выключен")
        }
    }
}
// создаем класс-наследник "Спутниковая тарелка"
class SputnikTv extends TvDevice {
    constructor(on, channel, frequency, type) {
        super(type);
        this.channel = channel;
        this.frequency = frequency;
        this.isSwitch = on;
    }
    getPowerCalc(amper, volt) {
        console.log(`Потребляемая мощность спутниковой тарелки - ${amper * volt} ватт`)
    }
    getOn() {
        if (this.isSwitch === "on") {
            console.log(this.type + " включен")
        } else if (this.isSwitch === "off") {
            console.log(this.type + " выключен")
        }
    }
    currentFreq() {
        console.log(`Текущая частота составляет ${this.frequency} Гц`)
    }
}


// создаем экземпляры класса "Приставка"
const box1 = new TvBox("on", 4, 52, "Приставка")
// создаем свойства
box1.getOn()
box1.getPowerCalc(0.3, 220)


const sputnik = new SputnikTv("on", 13, 75.78, "Спутниковая тарелка")

sputnik.getOn()
sputnik.getPowerCalc(1, 12)
sputnik.currentFreq()


