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
	 const CONTACTO  = {
		to: "dgonzalez@wit.la",
		subject: "Nuevo mensaje del Formulario de Contacto",
		content: "Nombre: "+this.contactoForm.get('nombre')?.value+"<br>Apellido: "+this.contactoForm.get('apellido')?.value+"<br>Correo: "+this.contactoForm.get('correo')?.value+"<br>Telefono: "+this.contactoForm.get('telefono')?.value+"<br>Mensaje: "+this.contactoForm.get('mensaje')?.value,
	}
	
	
	//console.log(CONTACTO);
	this._contactoService.enviarEmail(CONTACTO).subscribe(data => {
       this.toastr.success('¡Mensaje enviado!', 'Contacto Clubify:');
    }, error => {
      console.log(error);
      this.contactoForm.reset();
    })
	
  }
}
