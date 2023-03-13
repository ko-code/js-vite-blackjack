
// import { deck } from '../index.js';
/**
 * Funcion que pide carta
 * @param {Array<String>} deck es un arrglo de string
 * @returns {String} retorna el valor de la carta y lo elimina del arreglo.
 */
export const pedirCarta = (deck) => {
 
    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}