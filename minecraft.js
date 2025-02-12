/**
 * POO
 * Abstração, Herança e polimosfico
 * @author Luis Gustavo Rodrigues Da Silva
 */


// Classe modelo (Iniciar sempre com letra maiúscula)

class bloco {
    //atributos
    constructor (textura,resistencia,conquista){
        this.textura = textura
        this.resistencia = resistencia
    }
    //açoes
    criarbloco(){
        console.log("-------------------------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`resistência ${this.resistencia}`)
    }
    construir() {
        console.log("□ □ □ □ Recursos obtidos!")
    }
    minerar(){
            console.log("□ □ □ □ Recursos obtidos!")
    }
    
}

// Classe modelo enxaida com herança de bloco
class enxada extends bloco {
    constructor(textura, resistencia ,conquista){
        super(textura, resistencia)
        this.conquista = conquista
    }

    // ações
    criarenxada() {
        console.log("-------------------------------------------------")
        console.log("-")
        console.log(" /")
        console.log(`enxada de ${this.textura}`)
        console.log(`enxada de ${this.resistencia}`)
    }

    // 

    arar() {
        console.log("-_-_-_-_-_-_- Terra arada")
        if (this.conquista == true) {
            console.log("☀ Conquista obtida!")
        }
    }

    // poliomorfisio (obrigatorio manter o nome da classe pai)
    minerar() {
        console.log("✞ Dano atribuído!")
    }

}

//*********Mundo **********//

console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")

console.log("")

//Instanciando (criando) um obejto
const bloco1 = new bloco("terra",1)
bloco1.criarbloco()

const bloco2 = new bloco("Madeira",2)
bloco2.criarbloco()
bloco2.construir()

const bloco3 = new bloco("Pedra",5)
bloco3.criarbloco()
bloco3.minerar()

const enxada1 = new enxada("Madeira", 2, false)
enxada1.criarenxada()
enxada1.arar()

const enxada2 = new enxada("Ferro", 10, true)
enxada2.criarenxada()
enxada2.arar()

const enxada3 = new enxada("Diamante", 14, true)
enxada2.criarenxada()
enxada2.arar()