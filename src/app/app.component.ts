import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'singlePageApp';

  Heading: String = 'App components(one way binding from component to DOM)';
  
  textValueDisplay: String = 'text is editable';

  onSubmit(): void {
    alert("DOM to component");
  }
  
ngDoCheck(): void{
  console.log(this.textValueDisplay); 
}
  

}
