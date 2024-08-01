document.getElementById
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const price = document.getElementById('price')
const title = document.getElementById('title')
const nome = document.getElementById('name')
const recensioni = document.getElementById('reviews')
const description = document.getElementById('description')
const reviewList = document.getElementById('reviewList')
const rating = document.getElementById('rating')
const shipping = document.getElementById('shipping')
const date = new Date();
let day = date.getDate()
const months = ["gen", "feb", "mar", "apri", "mag", "giu", "lug", "ago", "set", "ott", "nov", "dic"];
let month = months[date.getMonth()]
let nReview = 0;
let punteggio = 0;

function loadProd(id) {
    const url = `http://localhost:8080/product/${id}`
    fetch(url)
        .then(res => res.json())
        .then(prod => {
            console.log(prod)
            console.log(date)
            title.innerHTML = prod.nome
            nome.innerHTML = prod.nome
            price.innerHTML = `${prod.prezzo}€`
            description.innerHTML = prod.descrizione + `<br><br><strong> Categoria : </strong>` + prod.category.nome
            shipping.innerHTML = `Ordina oggi per riceverlo entro il giorno <strong>${day + 2}-${day + 7}  ${month} </strong>`
        })
}

function loadReviews(id) {
    const url = `http://localhost:8080/review`
    fetch(url)
        .then(res => res.json())
        .then(reviews => {
            reviews.forEach(review => {
                console.log(review)
                if (review.product.id == id) {
                    console.log(`AAA`)
                    nReview++
                    console.log(nReview)
                    punteggio = (punteggio + review.punteggio)
                    const li = document.createElement('li')
                    li.classList = "list-group-item recensione"
                    for (let i = 0; i < review.punteggio; i++) {
                        const star2 = document.createElement('i')
                        star2.classList = "fa-solid fa-star"
                        li.appendChild(star2)
                    }
                    const descrizione = document.createElement('p')
                    descrizione.classList="h6"
                    descrizione.innerHTML = review.descrizione
                    li.appendChild(descrizione)
                    

                    const utente=document.createElement('p')
                    utente.innerHTML= review.user.nome+` `+review.user.cognome
                    utente.classList="text-end"
                    li.appendChild(utente)
                    reviewList.appendChild(li)
                }

            })
            recensioni.innerHTML = `<strong> ${nReview} Recensioni`
            punteggio = punteggio / nReview
            punteggio = Math.round(punteggio)
            for (let i = 0; i < punteggio; i++) {
                const star = document.createElement('i')
                star.classList = "fa-solid fa-star"
                rating.appendChild(star)
            }

        })
}