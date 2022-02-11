const nunentrada = document.getElementById('nunentrada')
const numsaida = document.getElementById('numsaida')
const res = document.getElementById('res')

function contar() {
    if (nunentrada.value <= 0 || numsaida.value <= 0) {
        alert('[ERRO] Prencha os campos com dados validos')
    } else {
        troco = Number(nunentrada.value) - Number(numsaida.value)
        if (troco <= 0) {
            alert('[ERRO] Não a troco ou valor de saida invalido')
        } else {
            res.classList.add('hide')

            const Umreal = document.getElementById('Umreal')
            let real = 1 * troco

            const umcinquentacem = document.getElementById('cinquentacem')
            let cinquentacem = 2 * troco

            const vvintecinco = document.getElementById('vintecinco')
            let vintecinco = 2 * cinquentacem 
            
            const ddezcentavis = document.getElementById('dezcentavis')
            let dezcentavis = 10 * real

            const ccincocentavos = document.getElementById('cincocentavos')
            let cincocentavos = 20 * real

            const trocos = document.getElementById('trocos')

            Umreal.innerHTML = '<img src="img/moeda_brasil_1_real_25_anos_plano_real_fc_3001_2_47d71b20da7f0e8cb4bd727e2f7dceea.png" alt="1real">'
            Umreal.innerHTML += `${real} Moedas`
            umcinquentacem.innerHTML = '<img src="img/moeda_brasil_50_centavos_2017_sob_2235_1_7690c989eb3465b521cf2c6bbc1b8ed2.png" alt="50centavos">'
            umcinquentacem.innerHTML += `${cinquentacem} Moedas`
            vvintecinco.innerHTML = '<img src="img/25_Centavos_T_wholly_inside_stripes_Deodoro_da_Fonseca-removebg-preview.png" alt="25centavos">'
            vvintecinco.innerHTML += `${vintecinco} Moedas`
            ddezcentavis.innerHTML = '<img src="img/moeda_colecionavel_brasil_10_centavos_2009_fc_943_1_364ae5518d823b3dc2c440b546d323e2.png">'
            ddezcentavis.innerHTML += `${dezcentavis} Moedas`
            ccincocentavos.innerHTML = '<img src="img/IMG_199.png" alt="5centavos">'
            ccincocentavos.innerHTML += `${cincocentavos} Moedas` 
            trocos.innerHTML = `<h2> Seu troco é de ${troco} reais`              
        }

    }

}

/*function contar(){
    if(numtxt.value == 0 || numtxt.value < 0){
        alert('[ERRO] coloque dados validos!')
    }else{
        let real = 1 * Number(numtxt.value)
        let resto = real - Math.trunc(real)
        if (resto > 0){
            alert('teste')
        }


        alert(real)
    }
}*/