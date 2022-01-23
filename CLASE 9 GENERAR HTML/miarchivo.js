const arrayPaises = [{Bandera:"MEX.png",Pais:"Mexico",Capital:"Ciudad de Mexico",Moneda:"MXN"},
                     {Bandera:"URU.png",Pais:"Uruguay",Capital:"Montevideo",Moneda:"UYU"},
                     {Bandera:"ARG.png",Pais:"Argentina",Capital:"Buenos Aires",Moneda:"ARS"},
                     {Bandera:"COL.png",Pais:"Colombia",Capital:"Bogotá",Moneda:"COP"}]


let divCard = document.createElement("div")
divCard.className = "row align-items-start"

for (let paises of arrayPaises){
    let divimg = document.createElement("div")
    divimg.className = "card col"
    divimg.innerHTML = `<img src="/CLASE 9 GENERAR HTML/IMG/${paises.Bandera}" class="card-img-top" alt=""></img>
                        <div class="card-body">
                            <h5 class="card-title">${paises.Pais}</h5>
                            <p class="card-text">Capital:${paises.Capital}   Moneda:${paises.Moneda}</p>
                            <a href="#" class="btn btn-primary">IR</a>
                        </div>`
    divCard.appendChild(divimg)
    
}

document.body.appendChild(divCard)