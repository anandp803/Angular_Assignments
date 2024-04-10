import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent {

  Username="";

  OnInputfieldUpdated(event:any){    
    console.log(event.target.value);
  }

  OnUpdateInputvalue(){
    this.Username="";
  }

}
