import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactoService } from 'src/app/services/contacto.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  contactoForm: FormGroup;
  constructor(private fb: FormBuilder,
			  private _contactoService: ContactoService,
			  private toastr: ToastrService) { 
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      telefono: ['', Validators.required],
	  mensaje: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }
	
  enviarFormulario(){
	  
	  var nombre = this.contactoForm.get('nombre')?.value;
	  var apellido = this.contactoForm.get('apellido')?.value;
	  var correo = this.contactoForm.get('correo')?.value;
	  var telefono = this.contactoForm.get('telefono')?.value;
	  var mensaje = this.contactoForm.get('mensaje')?.value;
	  
	  if(nombre=='' || apellido=='' || correo=='' || telefono=='' || mensaje==''){
		  this.toastr.error('¡Debe completar el formulario!', 'Contacto Clubify:');
	  }else{

		 const CONTACTO  = {
			to: "dgonzalez@wit.la",
			subject: "Nuevo mensaje del Formulario de Contacto",
			content: "Nombre: "+nombre+"<br>Apellido: "+apellido+"<br>Correo: "+correo+"<br>Telefono: "+telefono+"<br>Mensaje: "+mensaje,
		}
		
		
		//console.log(CONTACTO);
		this._contactoService.enviarEmail(CONTACTO).subscribe(data => {
		   this.toastr.success('¡Mensaje enviado!', 'Contacto Clubify:');
		}, error => {
		  this.toastr.error(error, 'Contacto Clubify:');
		  console.log(error);
		  this.contactoForm.reset();
		})
	
	  }
	
  }
}
