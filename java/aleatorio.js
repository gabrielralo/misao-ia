const nomes = ["Gabriel", "Eduardo", "Leo", "Douglas", "Thomaz"];
export function aleatorio (lista){
    const posicao = Math.floor(Math.random()*lista.lenght);
    return lista[posicao];
}
export const nome = aleatorio(nomes)