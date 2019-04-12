let inner = document.getElementById('inn');


function getData() {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
        console.log('status peticion info ' + resp.status)
        return resp.json()
    })
    .then(data => {
        console.log(data)
        var lista = data.map( (u, i) => {
          if(i < 4) {
            inner.innerHTML +=  `
            <div class="card"  style="width: 18rem; margin-left: 20px; margin-top: 10px;">
                <div class="card-body">
                    <h5 class="card-title">Nombre: ${u.name}</h5>
                    <h6>Telefono: ${u.phone}</h6>
                    <p>Direccion: ${u.address.street}</p>
                    <p class="card-text">Habilidades: ${u.company.catchPhrase}</p>
                    <a href="#" class="btn btn-primary">Llamar</a>
                </div>
            </div>
        `;
          }
        });
      
    })
}

getData();

function getPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(respuesta => {
        console.log('status peticion fotos ' + respuesta.status);
        return respuesta.json();
    })
    .then(fotos => {
        console.log(fotos);
        let imagenes = fotos.map( (foto, i) => {
            if(i <= 5) {
            console.log(foto.url);
            fo.innerHTML += 
            `
            <div class="col-sm-4">
              <img src=${foto.url} style="width: 370px; heigth: 300px; margin-top: 5px;"/> 
            </div>
            `;

             }
        })
    })
}

getPhotos();

// let x = ['a', 'b', 'c', 'd', 'e', 'f'];

// let y = x.map( (u, i) => {
//     if(i >=3) {
//       console.log(u);
//     }
// })



//     // for(i in x) {
//     //     if(i < 1) {
//     //     console.log(x[i]);
//     //     }
//     // }

