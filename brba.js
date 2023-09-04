    //Traemos el boton y el parrafo del html
    const btn = document.getElementById("btn")
    let frase = document.getElementById("frase")
    let autor = document.getElementById("autor")

    //Logica para que funcione el click  
        btn.addEventListener("click", ()=>{
                    
            fetch('https://api.breakingbadquotes.xyz/v1/quotes/5')
        .then(res => res.json())
        .then(data => {
            console.log(data.value)

            //Cuando se vuelve a clicker en el boton este se borra y le da paso a otra frase(si no se acumulan las frases)
            frase.innerHTML = "";
            autor.innerHTML = "";

            //Usamos innerHTMl para que le agregue al parafo la frase
                frase.innerHTML += '"' + data[0].quote + '"';
                let theAuthor = autor.innerHTML += data[0].author + `<p class="p">~<p>`;         
        })
        // Para ver si hay errores
        .catch(error => {
            console.log('ERROR', error);
        });
        })  


   




