var jogo;
var jogos = [
    {
        capa: "/imagem/imagem0.jpg",
        title: "Promoção de fim de semana",
        price: 120,
        discount: 50,
    },     
    {
        capa: "/imagem/imagem1.jpg",
        title: "Promoção de fim de semana",
        price: 130,
        discount: 60,
    },
    {
        capa: "/imagem/imagem2.jpg",
        title: "Promoção de fim de semana",
        price: 140,
        discount: 70,
    }
]

function randomGame(){
    jogo = jogos[Math.floor(Math.random() * jogos.length)]
    document.getElementById('img').src = jogo.capa
    document.getElementById('percentage').textContent = `-${jogo.discount}%`
    document.getElementById('realValue').textContent = `R$ ${jogo.price}`
    document.getElementById('discount').textContent = `R$ ${(jogo.discount/100*jogo.price)}`
}
randomGame()

setInterval(function(){
    randomGame()
}, 4 * 1000)