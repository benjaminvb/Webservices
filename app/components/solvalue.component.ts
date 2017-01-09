import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  moduleId: module.id,
  selector: 'sol-value',
  templateUrl: 'solvalue.component.html',
  providers: [DataService]
  //styleUrls: ['solvalue.component.css']
})
export class SolValueComponent implements OnInit {

  private solvalues = [];
  private isLoading = true;

  private solvalue = {};
  private isEditing = false;

  private addSolValueForm: FormGroup;
  private datum = new FormControl("", Validators.required);
  private waarde = new FormControl("", Validators.required);
  private max = new FormControl("", Validators.required);

  
  constructor(private http: Http,
              private dataService: DataService,
              private formBuilder: FormBuilder) {}
  
  ngOnInit() {
    this.getSolValues();
    
     var newSolValue = {datum: "12/05/2001", waarde: 210, max: 350};
        this.solvalues.push(newSolValue);
    

    this.addSolValueForm = this.formBuilder.group({
      datum: this.datum,
      waarde: this.waarde,
      max: this.max
    });
  }

  getSolValues() {
    this.dataService.getSolLog().subscribe(
      data => this.solvalues = data,
      error => console.log(error),
      () => this.isLoading = false
    );
  }
  
  addSolValue() {
    this.dataService.addSolLog(this.addSolValueForm.value).subscribe(
      res => {
        var newSolValue = res.json();
        this.solvalues.push(newSolValue);
        this.addSolValueForm.reset();
      },
      error => console.log(error)
    );
  }

  enableEditing(sv) {
    this.isEditing = true;
    this.solvalue = sv;
  }

  cancelEditing() {
    this.isEditing = false;
    this.solvalue = {};
    // reload the solvalues to reset the editing
    this.getSolValues();
  }

  editSolValue(sv) {
    this.dataService.editSolLog(sv).subscribe(
      res => {
        this.isEditing = false;
        this.solvalue = sv;
      },
      error => console.log(error)
    );
  }

  deleteSolValue(sv) {
    if(window.confirm("Are you sure you want to permanently delete this item?")) {
      this.dataService.deleteSolLog(sv).subscribe(
        res => {
          var pos = this.solvalues.map(solvalue => { return sv._id }).indexOf(sv._id);
          this.solvalues.splice(pos, 1);
          this.getSolValues();
        },
        error => console.log(error)
      );
      
    }
  }
}