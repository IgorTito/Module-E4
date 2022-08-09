// создаем объект "Телевизор"
function Tv(channel, volume, on) {
    this.switch = function () {
        if (on === "on") {
            console.log("Телевизор включен")
        } else if (on === "off"){
            console.log("Телевизор выключен")
        }
    };
    this.channel = function () {
        console.log(`Установлен канал на телевизоре - ${channel}`)
    };
    this.volume = function () {
        if(volume > 100){
            volume = 100
        }
        console.log(`Установлена громкость телевизора - ${volume}`)
    };
    this.amper = 1.5;
    this.voltage = 220;
}

Tv.prototype.power = function () {
    console.log(`Потребляемая мощность телевизора равна ${this.voltage * this.amper} ватт`)
}

// создаем объект-наследник "Приставка"
function TvBox(qual, volume, level){
    this.quality = function (qual) {
        console.log(`Установлено качество видео - ${qual}`)
    };
    this.bright = function (level) {
        console.log(`Установлена яркость - ${level}`)
    };
    this.amper = 0.3;
    this.voltage = 220;
    this.volume = function () {
        if(volume > 100){
            volume = 100
        }
        console.log(`Установлена громкость на приставке - ${volume}`)
    };
}
// делегируемся от родителя "Телевизор"
TvBox.prototype = new Tv()

TvBox.prototype.power = function () {
    console.log(`Потребляемая мощность приставки равна ${this.voltage * this.amper} ватт`)
}
// создаем экземпляры класса "Приставка"
const tvBox1 = new TvBox("HD", 85, 50)
// создаем свойства
tvBox1.power()
tvBox1.volume()
tvBox1.bright(56)
tvBox1.quality('FullHd')


console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~")

// создаем экземпляры класса "Телевизор"
const tv1 = new Tv(5, 35, "on");
// создаем свойства
tv1.switch()
tv1.power()
tv1.volume()
tv1.channel()














// function Conditioner(name, temp, mode) {
//     this.name = name;
//     this.switch = "on";
//     this.temp = temp;
//     this.mode = mode;
//     this.speed = 1;
//     if(mode === "freeze"){
//         this.amper = 3.5;
//     } else if(mode === "heat"){
//         this.amper = 4.5;
//     }
//     this.voltage = 220;
//     this.power = function () {
//         console.log(`Потребляемая мощность равна ${this.voltage * this.amper} ватт`)
//     }
// }
//
// const cond = new Conditioner("lg", 25, "freeze")
// cond.power()

