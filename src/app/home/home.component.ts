import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
// attempt first
  // thisName = ""
  // getName(Name:any)
  // {
  //   debugger;
  //   this.thisName = Name;
  //   Name.value = "";
  //   //alert(this.thisName);
  // }
  // attempt second
//   thisName = "";
//   tempName = "";

// submitName() {
//   this.thisName = this.tempName;
//   this.tempName = ""; // clears the textbox
//}


tempName = "";
namesList: string[] = [];

ngOnInit(): void {
  // Load list from localStorage on component load
    const storedList = localStorage.getItem('names');
    if (storedList) {
      this.namesList = JSON.parse(storedList);
    }
}

submitName() {
  if (this.tempName.trim() !== "") {
    this.namesList.push(this.tempName);
    this.tempName = ""; // Clear input box4
    this.updateLocalStorage();

  }
}

deleteName(index: number) {
  this.namesList.splice(index, 1);
  this.updateLocalStorage();
}
updateLocalStorage() {
    localStorage.setItem('names', JSON.stringify(this.namesList));
  }
}
