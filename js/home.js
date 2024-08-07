document.addEventListener('DOMContentLoaded', () => {
    const idSales = [22, 4, 17];
    const idNew = [27, 28, 29];
    const idTop = [10, 4, 15];
    const topSellers = document.getElementById('topSellersTab');
    let cardTopSellers = ``;
    fetch('http://localhost:8080/product')
        .then(res => res.json())
        .then(json => {
            const articoli = json;
            console.log(articoli)
            for (let i = 0; i < json.length; i++) {
                let product = json[i];
                const img = product.img.split(', ');
                if (idSales.includes(product.id)) {
                    cardTopSellers += ` <div class="col-6 col-md-4 col-lg-3 mb-3">
                        <!-- Card -->
                        <div class="card mb-7">
                            <!-- Badge -->
                            <div class="badge card-badge card-badge-start text-uppercase saldi">
                                Sale
                            </div>
                            <!-- Image -->
                            <div class="card-img">
                                <!-- Image -->
                                <a class="card-img-hover"
                                    href=""><!-- Mettere Link alla pagina della categoria-->
                                    <img class="card-img-top card-img-back"
                                        src="assets/img/products/${img[0]}"
                                        alt="...">
                                </a>
                            </div>
                            <!-- Body -->
                            <div class="card-body px-1 carteProdotto">
                                <!-- Category -->
                                <div class="fs-xs">
                                    <a class="text-muted linkTesto"
                                        href="">${product.category.nome}</a><!-- Mettere Link alla pagina della categoria-->
                                </div>
                                <!-- Title -->
                                <div class="fw-bold">
                                    <a class="text-body linkTesto stretched-link"
                                        href="prodotto.html?id=${product.id}"><!-- Mettere Link alla pagina della categoria-->
                                        ${product.nome}
                                    </a>
                                </div>
                                <!-- Price -->
                                <div class="fw-bold linkTesto">
                                    <span class="fs-xs text-gray-350 text-decoration-line-through">€${(product.prezzo * (1 + 0.20)).toFixed(2)}</span>
                                    <span class="prezzoScontato">€${(product.prezzo).toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                } else if (idNew.includes(product.id)) {
                    cardTopSellers += ` <div class="col-6 col-md-4 col-lg-3 mb-3">
                        <!-- Card -->
                        <div class="card mb-7">
                            <!-- Badge -->
                            <div class="badge text-body card-badge card-badge-start text-uppercase prodNuovo">
                                New
                            </div>
                            <!-- Image -->
                            <div class="card-img">
                                <!-- Image -->
                                <a class="card-img-hover"
                                    href=""><!-- Mettere Link alla pagina della categoria-->
                                    <img class="card-img-top card-img-back"
                                        src="assets/img/products/${img[0]}"
                                        alt="..."><!-- Mettere Link alla pagina della categoria-->
                                </a>
                            </div>
                            <!-- Body -->
                            <div class="card-body px-1 carteProdotto">
                                <!-- Category -->
                                <div class="fs-xs">
                                    <a class="text-muted linkTesto stretched-link"
                                        href="">${product.category.nome}</a><!-- Mettere Link alla pagina della categoria-->
                                </div>
                                <!-- Title -->
                                <div class="fw-bold">
                                    <a class="text-body linkTesto"
                                        href="prodotto.html?id=${product.id}"><!-- Mettere Link alla pagina della categoria-->
                                        ${product.nome}
                                    </a>
                                </div>
                                <!-- Price -->
                                <div class="fw-bold text-muted linkTesto">
                                   € ${product.prezzo}
                                </div>
                            </div>
                        </div>
                    </div>`;
                } else if (idTop.includes(product.id)) {
                    cardTopSellers += `<div class="col-6 col-md-4 col-lg-3 py-3 mb-3">
                        <!-- Card -->
                        <div class="card mb-7">
                            <!-- Image -->
                            <div class="card-img">
                                <!-- Image -->
                                <a href="#!">
                                    <img class="card-img-top card-img-front"
                                        src="assets/img/products/${img[0]}"
                                        alt="...">
                                </a>
                            </div>
                            <!-- Body -->
                            <div class="card-body px-1 carteProdotto">
                                <!-- Category -->
                                <div class="fs-xs">
                                    <a class="text-muted linkTesto"
                                        href="">${product.category.nome}</a><!-- Mettere Link alla pagina della categoria-->
                                </div>
                                <!-- Title -->
                                <div class="fw-bold ">
                                    <a class="text-body linkTesto stretched-link"
                                        href="prodotto.html?id=${product.id}"><!-- Mettere Link alla pagina della categoria-->
                                        ${product.nome}
                                    </a>
                                </div>
                                <!-- Price -->
                                <div class="fw-bold text-muted linkTesto">
                                    €${(product.prezzo).toFixed(2)}
                                </div>
                            </div>
                        </div>
                    </div>`;
                };
            }
            topSellers.innerHTML = cardTopSellers;
        })
        .catch(err => {
            console.error('Errore durante il fetch delle categorie:', err);
        });

        const cardT = document.getElementById('last-reviews');
let cardReview = ``;
const reviewsPerPage = 2;

fetch('http://localhost:8080/review')
.then(res => res.json())
.then(json => {
    // Assicurati che gestiamo il caso in cui ci sono meno di 6 recensioni
    const start = Math.max(0, json.length - 15);
    const reviews = json.slice(start); // Prendi le ultime 6 recensioni

    let pageIndex = 0;
    while (pageIndex < reviews.length) {
        const reviewsPage = reviews.slice(pageIndex, pageIndex + reviewsPerPage);
        cardReview += `<div class="carousel-item${pageIndex === 0 ? ' active' : ''}">
            <div class="row">
                ${reviewsPage.map(review => {
                    const reviewRate = review.punteggio;
                    let starsRate = ``;

                    // Genera l'HTML per la valutazione con stelle
                    for (let j = 1; j <= 5; j++) {
                        if (j <= reviewRate) {
                            starsRate += `<div class="rating-item">
                                <i class="fa-solid fa-star fa-xs" style="color: #FFD43B;"></i>
                              </div>`;
                        } else {
                            starsRate += `<div class="rating-item">
                             <i class="fa-regular fa-star fa-xs" style="color: #FFD43B;"></i>
                </div>`;
                        }
                    }

                    return `<div class="col-12 col-md-6 px-4 my-2 justify-content-center">
                        <div class="card-lg card border">
                            <div class="card-body cardRecensioni rounded">
                                <div class="row align-items-center mb-6">
                                    <div class="col-4">
                                        <img src="assets/img/products/${review.product.img.split(', ')[0]}"
                                             alt="..." class="img-fluid rounded">
                                    </div>
                                    <div class="col-8 ms-n2">
                                        <a class="fs-xs text-muted linkTesto" href="">
                                            ${review.product.category.nome}
                                        </a>
                                        <a  href="prodotto.html?id=${review.product.id}" class="d-block fw-bold text-body linkTesto">
                                           ${review.product.nome}
                                        </a>
                                        <div class="rating fs-xxs text-warning d-flex justify-content-start my-2 mx-1" data-value="3">
                                            ${starsRate}
                                        </div>
                                    </div>
                                </div>
                                <blockquote class="mb-0">
                                    <p class="text-muted linkTesto">
                                        ${review.descrizione}
                                    </p>
                                    <section class="fs-xs text-muted linkTesto">
                                        ${review.user.nome}  ${review.user.cognome}
                                    </section>
                                </blockquote>
                            </div>
                        </div>
                    </div>`;
                }).join('')}
            </div>
        </div>`;
        pageIndex += reviewsPerPage;
    }
    cardT.innerHTML = cardReview;
})
.catch(err => {
    console.error('Errore durante il fetch delle recensioni:', err);
});
});