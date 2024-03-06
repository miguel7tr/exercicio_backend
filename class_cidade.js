class Cidade{
    constructor(nome,estado,populacao,numHomem,numMulher){
        this.nome = nome
        this.estado = estado
        this.populacao = populacao
        this.numHomem = numHomem
        this.numMulher = numMulher
    }
    percentualHomens(){
        let percentual = 0.0
        percentual = this.numHomem/this.populacao * 100.0
        return percentual
    }
    percentualMulheres(){
        let percentual = 0.0
        percentual = this.numMulher/this.populacao * 100.0
        return percentual
    }
}
module.exports = Cidade