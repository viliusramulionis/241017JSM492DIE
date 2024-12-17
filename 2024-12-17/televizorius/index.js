class Televizorius {
    garsas = 50;
    kanalas = 1;

    constructor(gamintojas) {
        this.gamintojas = gamintojas;
    }

    setGarsas(garsas) {
        if(garsas >= 0 && garsas <= 100) {
            this.garsas = garsas;
        }        
    }

    setKanalas(kanalas) {
        if(kanalas <= 0 || kanalas > 50) {
            this.kanalas = 1
        } else {
            this.kanalas = kanalas;
        }
    }

    factoryReset() {
        this.kanalas = 1;
        this.garsas = 50;
    }

    currentStatus() {
        return `Televizorius ‘${this.gamintojas}’ šiuo metu rodo ${this.kanalas} kanalą. Garso lygis ${this.garsas}.`;
    }
}

const sony = new Televizorius('Sony');
const lg = new Televizorius('LG');


sony.setGarsas(105);
sony.setGarsas(99);
sony.setKanalas(50);
console.log(sony.currentStatus());

// sony.factoryReset();

console.log(sony);
console.log(lg);