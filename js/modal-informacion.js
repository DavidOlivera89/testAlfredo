	/* Ventana afiliarse
   * ------------------------------------------------------ */
	const open_informacion = document.getElementById("open-informacion");
	const modal_container_informacion = document.getElementById("modal_container_informacion");
	const close_informacion = document.getElementById("close-informacion");
	const submit_informacion = document.getElementById("submit-informacion");
	
	submit_informacion.disabled=false;


	var check = true;
  
	open_informacion.addEventListener("click", () => {
	  modal_container_informacion.classList.add("show");
	  document.body.style.overflow="hidden";
	});
  
	close_informacion.addEventListener("click", () => {
		//console.log("saliu");
      event.preventDefault();
	  modal_container_informacion.classList.remove("show");
	  document.body.style.overflow="auto";
	});
	/*
	----------------------------------------------------------*/

	/*---------------------------------------------------------
	*VALIDATION FORM AFILIARSE
	*
	*--------------------------------------------------------*/
	const form_informacion = document.getElementById('david-informacion');
	//const usuario = document.getElementById('interestedname');
	const names_informacion = document.getElementById('names-informacion');
	const surname_informacion = document.getElementById('surname-informacion');
	// const dni = document.getElementById('dni');
	const email_informacion = document.getElementById('email-informacion');
	const phone_informacion = document.getElementById('phone-informacion');
	// const adress = document.getElementById('adress');
	// const obraSocial = document.getElementById('obraSocial');
	// const planObraSocial = document.getElementById('planObraSocial');
	// const birthday = document.getElementById('birthday');
	 //const cbox = document.getElementById('cbox-terms');
	
	/* cbox.addEventListener('click', event => {
		if(event.target.checked) {
			submit_informacion.disabled=false;
			//check=true;
			//console.log("checkbox");
		}
		if(!event.target.checked){
			//check=false;
			submit_informacion.disabled=true;
		}
	}); */
	
	/*const password = document.getElementById('password');
	const password2 = document.getElementById('password2');
 	*/
	
	/* const interested = {
	names: "camila",
	surname: "dsadsa",
	dni: "5231223",
	email: "macasdca@gmail.com",
	phone: "1234565678",
	address: "Calle falsa 123",
	active: true
	} */
	
	 const createInterested = (interested) => {
		//console.log("estoy en el axios");
		//axios.post('http://82.180.162.21:3001/client', interested)
		axios.post('http://localhost:3001/interested', interested)
		.then(response => {
		//console.log("hizo api function");
		
		})
		.catch(error => console.error(error));
		}; 
	

		

	submit_informacion.addEventListener("click", () => {
		//console.log("saliu");
		//console.log("INICIALMENTE el valor de check es "+check); */
		checkInputs_informacion();
		if (check) {
			/* console.log("este es el interested" + interested)
			console.log(interested); */
			const interested={
				names_informacion: names_informacion.value,
				surname_informacion: surname_informacion.value,
				email_informacion: email_informacion.value,
				phone_informacion: phone_informacion.value,
				// address: adress.value,
				// active: true,
				// dateBirth: birthday.value,
				// obraSocial: obraSocial.value,
				// planObraSocial: planObraSocial.value
                //dni: dni.value,
			}
			//console.log(client) 
			//createInterested(interested);
			createInterested(interested);
			console.log("enviado "+ interested);
			alert("Gracias!! Sus datos han sido cargados, nos comunicaremos a la brevedad. Además si lo desea a continuación puede comunicarse por whatsaap con una operadora.");
			window.open("https://api.whatsapp.com/send?phone=542974930840&text=Hola,%20¿qué%20tal?%20%20Me%20interesan%20los%20servicios%20de%20PRIMACY.%20Quisiera%20obtener%20más%20información%20sobre%20la%20afiliacion.");
			
		}else{
            event.preventDefault();
			console.log("no paso el check");
			check=true;
		};
			//
		// console.log(names_informacion.value);
        // console.log( surname_informacion.value + dni.value + email_informacion.value + phone_informacion.value + adress.value + "los valores");
	});


/* 	form_informacion. addEventListener('submit_informacion', e => {
		console.log("entra a addeventlistenner");
		e.preventDefault();
		
		if (checkInputs()) {

		modal_container_informacion.classList.remove("show");
	  	document.body.style.overflow="auto";
		}else{
			console.log("esra mal");
		}
	}); */

	function checkInputs_informacion() {
		// trim to remove the whitespaces
		console.log("entra a checks");
		
		const namesValue_informacion = names_informacion.value.trim();
		const surnameValue_informacion = surname_informacion.value.trim();
	
		const emailValue_informacion = email_informacion.value.trim();
		const phoneValue_informacion = phone_informacion.value.trim();
	
		
		if(namesValue_informacion === '') {
			setErrorFor_informacion(names_informacion, 'Debe ingresar un nombre');
		} else {
			setSuccessFor_informacion(names_informacion);
		}

		if(surnameValue_informacion === '') {
			setErrorFor_informacion(surname_informacion, 'Debe ingresar un apellido');
		} else {
			setSuccessFor_informacion(surname_informacion);
		}

	
        if((emailValue_informacion === '') && (phoneValue_informacion === '')) {
			setErrorFor_informacion(email_informacion, 'Ingrese al menos un medio de contacto');
            setErrorFor_informacion(phone_informacion, 'Ingrese al menos un medio de contacto');
		}



	
		if (!isEmail_informacion(emailValue_informacion)) {
			setErrorFor_informacion(email_informacion, 'Ingrese un email válido');
		} else {
			setSuccessFor_informacion(email_informacion);
		}

		
        if (!isPhone_informacion(phoneValue_informacion)) {
			setErrorFor_informacion(phone_informacion, 'Ingrese un nro. de teléfono válido');
		}else {
			setSuccessFor_informacion(phone_informacion);
		}

	
	}

	function setErrorFor_informacion(input, message) {
		const formControl_informacion = input.parentElement;
		const small_informacion = formControl_informacion.querySelector('small');
		formControl_informacion.className = 'form-control-informacion error';
		small_informacion.innerText = message;
		check=false;
	}

	function setSuccessFor_informacion(input) {
		const formControl_informacion = input.parentElement;
		formControl_informacion.className = 'form-control success';
		//check=true;
	}

	function isEmail_informacion(email_informacion) {
		return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email_informacion);
	}

	function isPhone_informacion(phone_informacion) {
		//return /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/.test(phone);
		return /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(phone_informacion);
	}
 
	

