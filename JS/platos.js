const { createApp } = Vue
createApp({
    data() {
        return {
            platos: [],
            url: 'http://refusilo.pythonanywhere.com/platos',
            // si el backend esta corriendo local usar localhost 5000(si no lo subieron a pythonanywhere)
            error: false,
            cargando: true,
            /*atributos para el guardar los valores del formulario */
            id: 0,
            nombre: "",
            imagen: "",
            descrip: "",
            precio: 0,
        }
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.platos = data;
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                })
        },
        eliminar(plato) {
            const url = this.url + '/' + plato;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    location.reload();
                })
        },
        grabar() {
            let plato = {
                nombre: this.nombre,
                precio: this.precio,
                descrip: this.descrip,
                imagen: this.imagen
            }
            var options = {
                body: JSON.stringify(plato),
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                redirect: 'follow'
            }
            fetch(this.url, options)
                .then(function () {
                    alert("Registro grabado")
                    console.log(options)
                    window.location.href = "../templates/carta.html";
                })
                .catch(err => {
                    console.error(err);
                    alert("Error al Grabar")
                })
        }
    },
    created() {
        this.fetchData(this.url)
    },
}).mount('#app')

