

let condicao = false;
const Inicio = () => {
    const Numero = 20;
    const Caractere = '#';
    return DesenharAmpulheta(Numero, Caractere, 0);
}
    const DesenharAmpulheta = (Numero, Caractere, LinhaAtual) => {

    if( LinhaAtual === Numero){
        return;
    }
    let ComprimentoPadrao = 0;
    let mid = (Numero + 1) / 2;
    if (LinhaAtual < mid) {
        ComprimentoPadrao = Numero - (LinhaAtual * 2);
    } else {
        ComprimentoPadrao = 2 * (LinhaAtual - mid + 1) + 1;
    }
    let EspacoEmBranco = (Numero - ComprimentoPadrao) / 2;
    let Padronizar = ComprimentoPadrao; 
    const teste2 = (Padronizar > 2 ) ? Padronizar - 2 : Padronizar;

    const ItensApulheta = "#" + " ". repeat(EspacoEmBranco) + "#".repeat(Padronizar) + " ".repeat(EspacoEmBranco) + "#";
    const padrao2 = "#" + " ".repeat(EspacoEmBranco) + "#" + " ".repeat(teste2) + "#" + " ".repeat(EspacoEmBranco) + "#";
    

    if (Padronizar !== 0 ){
        if (!condicao){
                console.log(ItensApulheta)
        } else {
            if (Numero === Padronizar) {
                console.log(ItensApulheta)
            } else {
                    console.log(padrao2)
            }   
        }
    } else {
        condicao = true
    }

    DesenharAmpulheta(Numero, Caractere, LinhaAtual + 1);
}

Inicio()
