export function VistaLista(controlador) {
	return Vue.createApp({
		data() {
			return {
				controlador: controlador,
				titulo: 'Vista Lista',
				clase: 'inactivo',
				listaCoches: ''
			}
		},
		template:
			`
	<div class="container col-10" :class=clase>
	<!--Titulo-->
	<div class="row">
		<div class="col" id="tituloListadoCRUD">
			<h3 class="fw-bold mb-3 mt-4">Listado de coches</h3>
			<h5>añadir los condicionales para las medias querys</h5> 
			<h5>Quedar mejor el footer cuando cambie la query</h5>  
		</div>
	</div>

	<!--Búsqueda-->
	<div class="row mt-4 mb-4">
		<div class="col-sm-2 col-xs-1">
			<h4 class="fw-bold">Búsqueda</h4>
		</div>
		<div class="col-sm-4">
			<label for="enFabh" style="display: none;">H</label>
			<select id="enFabh" class="form-select">
				<option selected>Marca</option>
				<option>Modelo</option>
			</select>
		</div>
		<div class="col-sm-4">
			<label for="enFabq" style="display: none;">Hola</label>
			<select id="enFabq" class="form-select">
				<option value="Alfa Romeo">Alfa Romeo</option>
				<option value="Aston Martin">Aston Martin</option>
				<option value="Audi">Audi</option>

				<option value="Autovaz">Autovaz</option>
				<option value="Bentley">Bentley</option>
				<option value="Bmw">Bmw</option>
				<option value="Cadillac">Cadillac</option>

				<option value="Caterham">Caterham</option>
				<option value="Chevrolet">Chevrolet</option>
				<option value="Chrysler">Chrysler</option>
				<option value="Citroen">Citroen</option>

				<option value="Cupra">Cupra</option>

				<option value="Daihatsu">Daihatsu</option>
				<option value="Dodge">Dodge</option>
				<option value="Ferrari">Ferrari</option>
				<option value="Fiat">Fiat</option>

				<option value="Ford">Ford</option>
				<option value="Honda">Honda</option>
				<option value="Hummer">Hummer</option>
				<option value="Hyundai">Hyundai</option>

				<option value="Isuzu">Isuzu</option>
				<option value="Jaguar">Jaguar</option>
				<option value="Jeep">Jeep</option>
				<option value="Kia">Kia</option>

				<option value="Lamborghini">Lamborghini</option>
				<option value="Lancia">Lancia</option>
				<option value="Land Rover">Land Rover</option>
				<option value="Lexus">Lexus</option>

				<option value="Lotus">Lotus</option>
				<option value="Maserati">Maserati</option>
				<option value="Mazda">Mazda</option>
				<option value="Mercedes Benz">Mercedes Benz</option>

				<option value="MG">MG</option>
				<option value="Mini">Mini</option>
				<option value="Mitsubishi">Mitsubishi</option>
				<option value="Morgan">Morgan</option>

				<option value="Nissan">Nissan</option>
				<option value="Opel">Opel</option>
				<option value="Peugeot">Peugeot</option>
				<option value="Porsche">Porsche</option>

				<option value="Renault">Renault</option>
				<option value="Rolls Royce">Rolls Royce</option>
				<option value="Rover">Rover</option>
				<option value="Saab">Saab</option>

				<option value="Seat">Seat</option>
				<option value="Skoda">Skoda</option>
				<option value="Smart">Smart</option>
				<option value="Ssangyong">Ssangyong</option>

				<option value="Subaru">Subaru</option>
				<option value="Suzuki">Suzuki</option>
				<option value="Tata">Tata</option>
				<option value="Toyota">Toyota</option>

				<option value="Volkswagen">Volkswagen</option>
				<option value="Volvo">Volvo</option>

			</select>
		</div>
		<div class="col-sm-2">
			<button class="btn btn-secondary" id="btnBuscar" @click=buscar>Buscar</button>
		</div>
	</div>

	<div class="row justify-content-center" id="listaCoches">

		<table class="table table-hover table-striped text-center align-middle">
			<thead>
				<tr>
					<th scope="col">Imagen</th>
					<th scope="col">Marca</th>
					<th scope="col">Modelo</th>
					<th scope="col">Año</th>
					<th scope="col">Precio</th>
					<th scope="col">Opciones</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="coche in listaCoches">
					<td><img width="80" :src=coche.imagen></td>
					<td>{{coche.modelo}}</td>
					<td>{{coche.marca}}</td>
					<td>{{coche.fechaFabricacion}}</td>
					<td>{{coche.precio}}€</td>
					<td>
						<a class="btn btn-secondary me-1" @click=consultar(coche.id)><em class="bi bi-search"></em></a>
						<a class="btn btn-warning me-1" @click=modificar(coche)><em class="bi bi-pencil-square"></em></a>
						<a class="btn btn-danger" @click=borrar(coche.id)><em class="bi bi-trash-fill"></em></a>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
	</div>
	`,


		methods: {
			mostrar(activo) {
				if (activo)
					this.clase = 'activo'
				else
					this.clase = 'inactivo'
			},

			listar(lista) {
				this.listaCoches = lista
			},

			buscar() {

			},

			consultar(id) {
				console.log(id);
			},
			modificar(coche) {
				console.log(coche.id);
				this.controlador.mostrarModificar(coche)
			},

			borrar(id) {
				this.controlador.borrar(id)
			}
		}
	})
}