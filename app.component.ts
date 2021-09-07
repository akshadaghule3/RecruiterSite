import { ProviderAst } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { NEVER, never } from 'rxjs';
// import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

name='Angular';
userForm:FormGroup;



ngOnInit(): void {
  const notFocused = false;
}

  constructor(private fb:FormBuilder){
   

    this.userForm=this.fb.group({
      firstName:['', [Validators.required,Validators.minLength(5)]],
      lastName:['',Validators.compose([Validators.required])],
      email:[null, [Validators.required]],
      password:[null, [Validators.required]],

    })
  }
  
  



  


  
  
  }
    
 
  

