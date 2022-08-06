	/* Ventana afiliarse
   * ------------------------------------------------------ */
	const open2 = document.getElementById("open2");
	const modal_container = document.getElementById("modal_container");
	const close = document.getElementById("close");
	const submit = document.getElementById("submit");
	
	submit.disabled=true;


	var check = true;
  
	open2.addEventListener("click", () => {
	  modal_container.classList.add("show");
	  document.body.style.overflow="hidden";
	});
  
	close.addEventListener("click", () => {
		//console.log("saliu");
      event.preventDefault();
	  modal_container.classList.remove("show");
	  document.body.style.overflow="auto";
	});
	/*
	----------------------------------------------------------*/

	/*---------------------------------------------------------
	*VALIDATION FORM AFILIARSE
	*
	*--------------------------------------------------------*/
	const form = document.getElementById('david');
	//const usuario = document.getElementById('username');
	const names = document.getElementById('names');
	const surname = document.getElementById('surname');
	const dni = document.getElementById('dni');
	const email = document.getElementById('email');
	const phone = document.getElementById('phone');
	const adress = document.getElementById('adress');
	const obraSocial = document.getElementById('obraSocial');
	const planObraSocial = document.getElementById('planObraSocial');
	const birthday = document.getElementById('birthday');
	
	let checkbox1= false;
	let checkbox2= false;
	const cbox = document.getElementById('cbox-terms');
	const cbox_contract = document.getElementById('cbox-contract');
	
	
	cbox.addEventListener('click', event => {
		console.log("checkbox click");
		if((checkbox2)&&(event.target.checked)){
			submit.disabled=false;
			//check=true;
			console.log("checkbox");
		}
		if (event.target.checked) {
			checkbox1=true;
		}
		if(!event.target.checked){
			//check=false;
			checkbox2=false;
			submit.disabled=true;
		}
	});

	cbox_contract.addEventListener('click', event => {
		console.log("checkbox click");
		
		if((checkbox1)&&(event.target.checked)) {
			submit.disabled=false;
			//check=true;
			//console.log("checkbox");
		}
		if (event.target.checked) {
			checkbox2=true;
		}

		if(!event.target.checked){
			//check=false;
			checkbox1=false; 
			submit.disabled=true;
		}
	});
	
	/*const password = document.getElementById('password');
	const password2 = document.getElementById('password2');
 	*/
	
	/* const user = {
	names: "camila",
	surname: "dsadsa",
	dni: "5231223",
	email: "macasdca@gmail.com",
	phone: "1234565678",
	address: "Calle falsa 123",
	active: true
	} */
	
	 const createUser = (user) => {
		//console.log("estoy en el axios");
		//axios.post('http://82.180.162.21:3001/client', user)
		//axios.post('https://www.primacy34607735api.com.ar/client', user)
		axios.post('http://localhost:3001/client', user)
		.then(response => {
			console.log(newClient);
		console.log("hizo api function");
		
		})
		.catch(error => console.error(error));
		}; 
	

		

	submit.addEventListener("click", () => {
		/* console.log("saliu");
		console.log("INICIALMENTE el valor de check es "+check); */
		checkInputs()
		if (check) {
			/* console.log("este es el user" + user)
			console.log(user); */
			const client={
				names: names.value,
				surname: surname.value,
				dni: dni.value,
				email: email.value,
				phone: phone.value,
				address: adress.value,
				active: true,
				dateBirth: birthday.value,
				obraSocial: obraSocial.value,
				planObraSocial: planObraSocial.value

			}
			//console.log(client) 
			//createUser(user);
			createUser(client);
			
			alert("Gracias!! Sus datos han sido cargados, nos comunicaremos a la brevedad. Además si lo desea a continuación puede comunicarse por whatsaap con una operadora.");
			//window.open("https://api.whatsapp.com/send?phone=542976233642&text=Hola,%20¿qué%20tal?%20%20Me%20interesaría%20afiliarme%20a%20Primacy.%20Quiero%20que%20me%20contacten.");
			
		}else{
            event.preventDefault();
			//console.log("no paso el check");
			check=true;
		};
			//
		// console.log(names.value);
        // console.log( surname.value + dni.value + email.value + phone.value + adress.value + "los valores");
	});


/* 	form.addEventListener('submit', e => {
		console.log("entra a addeventlistenner");
		e.preventDefault();
		
		if (checkInputs()) {

		modal_container.classList.remove("show");
	  	document.body.style.overflow="auto";
		}else{
			console.log("esra mal");
		}
	}); */

	function checkInputs() {
		// trim to remove the whitespaces
		//console.log("entra a checks");
		
		const namesValue = names.value.trim();
		const surnameValue = surname.value.trim();
		const dniValue = dni.value.trim();
		const emailValue = email.value.trim();
		const phoneValue = phone.value.trim();
		const adressValue = adress.value.trim();
		const obraSocialValue = obraSocial.value.trim();
		const planObraSocialValue = planObraSocial.value.trim();
		const birthdayValue = birthday.value.trim();
		
		//const passwordValue = password.value.trim();
		//const password2Value = password2.value.trim();
		
		if(namesValue === '') {
			setErrorFor(names, 'Debe ingresar un nombre');
		} else {
			setSuccessFor(names);
		}

		if(surnameValue === '') {
			setErrorFor(surname, 'Debe ingresar un apellido');
		} else {
			setSuccessFor(surname);
		}

		if(dniValue === '') {
			setErrorFor(dni, 'Debe ingresar su dni');
		} else if (!isDni(dniValue)) {
			setErrorFor(dni, 'Debe ingresar un dni válido');
		}else{
			setSuccessFor(dni);
		}

	
		if(emailValue === '') {
			setErrorFor(email, 'Ingrese un email válido');
		} else if (!isEmail(emailValue)) {
			setErrorFor(email, 'Ingrese un email válido');
		} else {
			setSuccessFor(email);
		}

		if(phoneValue === '') {
			setErrorFor(phone, 'Ingrese un nro. de teléfono válido');
		} else if (!isPhone(phoneValue)) {
			setErrorFor(phone, 'Ingrese un nro. de teléfono válido');
		}else {
			setSuccessFor(phone);
		}

		if(adressValue === '') {
			setErrorFor(adress, 'Ingrese una dirección válida');
		} else {
			setSuccessFor(adress);	
		}

		/* if(obraSocialValue === '') {
			setErrorFor(obraSocial, 'Debe ingresar una de contacto');
		} else {
			setSuccessFor(obraSocial);
		}

		if(planObraSocialValue === '') {
			setErrorFor(planObraSocial, 'Debe ingresar un teléfono de contacto');
		} else {
			setSuccessFor(planObraSocial);
		} */

		if(birthdayValue === '') {
			setErrorFor(birthday, 'Ingrese su fecha de nacimiento');
		} else if (!isFechaValida(birthday)) {
			setErrorFor(birthday, 'Fecha inválida. Debe ser mayor a 18 años');
		}else{
			setSuccessFor(birthday);
		}
		
		/* if(passwordValue === '') {
			setErrorFor(password, 'Password no debe ingresar en blanco.');
		} else {
			setSuccessFor(password);
		}
		
		if(password2Value === '') {
			setErrorFor(password2, 'Password2 no debe ngresar en blanco');
		} else if(passwordValue !== password2Value) {
			setErrorFor(password2, 'Passwords no coinciden');
		} else{
			setSuccessFor(password2);
		} */
	}

	function setErrorFor(input, message) {
		const formControl = input.parentElement;
		const small = formControl.querySelector('small');
		formControl.className = 'form-control error';
		small.innerText = message;
		check=false;
	}

	function setSuccessFor(input) {
		const formControl = input.parentElement;
		formControl.className = 'form-control success';
		//check=true;
	}

	function isEmail(email) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
	}

	function isPhone(phone) {
		//return /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(phone);
		return /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(phone);
	}
 
	function isDni(dni){
		return /^[\d]{1,3}\.?[\d]{3,3}\.?[\d]{3,3}$/.test(dni);
	}

	function isFechaValida(birthday){
		const fecha = new Date(birthday.value);
		const fechaElegida=formatoFecha(fecha, 'dd/mm/yyyy');
		const hoy = new Date();
		const mostrar = formatoFecha(hoy, 'dd-mm-yy');
		
		var edad = calcularEdad(fecha, hoy);
		
		return edad >= 18 && edad< 130;
	}

	function formatoFecha(fecha, formato) {
		const map = {
			dd: fecha.getDate(),
			mm: fecha.getMonth() + 1,
			yy: fecha.getFullYear().toString().slice(-2),
			yyyy: fecha.getFullYear()
		}
	
		return formato.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
	}


	function calcularEdad(fechaElegida, hoy) {
		//var hoy = new Date();
		//console.log(hoy);
		//var cumpleanos = new Date(fecha_nacimiento);
		//console.log("get full year "+ hoy.getFullYear());
		var edad = hoy.getFullYear() - fechaElegida.getFullYear();
		var m = hoy.getMonth() - fechaElegida.getMonth();
		if (m < 0 || (m === 0 && hoy.getDate() < fechaElegida.getDate())) {
			edad--;
		}
		return edad;
	}

