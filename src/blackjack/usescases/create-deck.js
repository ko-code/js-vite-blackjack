import _ from 'underscore';

 /**
    *Esta funcion crea un nuevo deck 
     * @param {Array<string>} tiposDeCarta Ejemplo:  ['C','D','H','S']
     * @param {Array<string>} tiposDeEspeciales Ejemplo:  ['A','J','Q','K']
     * @returns {Array<string>} retorna un nuevo deck de cartas
     */
 

export const crearDeck = (tiposDeCarta, tiposDeEspeciales) => {

   
    if(!tiposDeCarta || tiposDeCarta === 0) 
        throw new Error('Tipos de carta es obligatorio como un arreglo de string');

    if(!tiposDeEspeciales || tiposDeEspeciales === 0)
        throw new Error('Tipos de cartas especiales es obligatorio como un arreglo de string');

        
    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposDeEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}