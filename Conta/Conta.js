//Classe abstrata ***

export class Conta {

    constructor(saldoInicial, cliente, agencia){
        if (this.constructor == Conta) {
            throw new Error ('Voce nao deve instanciar objeto do tipo Conta diretamente, pois essa e uma classe abstrata')
        };
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;


    };

    //assessores

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
        this._cliente = novoValor;
    }
    };

    get cliente(){
        return this._cliente;
    };

    get saldo(){
        return this._saldo;
    };


 
//atributos

    //Metodo abstrato
sacar(valor) {
    throw new Error ('O Metodo sacar da conta e abstrato')
};
//** */

_sacar (valor, taxa) {
    const valorSacado = taxa*valor
    if(this._saldo >= valorSacado) {
       this._saldo -= valorSacado;   
       return valorSacado;
    }else console.log('saldo insuficiente')
};
depositar(valor) {
    if(valor > 0){
        this._saldo += valor;
    } else console.log('impossivel depositar valor negativo')
};

transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);

};
};