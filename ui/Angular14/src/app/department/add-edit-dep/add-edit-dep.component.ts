import { SharedService } from './../../shared.service';
import { Component, OnInit, OnChanges} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core'

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {
  ModalTitle: string = this.data.ModalTitle;
  DepartmentId?: number = 0;
  DepartmentName?: string = '';

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: SharedService
  ) { }

  ngOnInit(): void {
    if (this.data.dep) {
      this.DepartmentId = this.data.dep.DepartmentId;
      this.DepartmentName = this.data.dep.DepartmentName;
    } 
  }

  ngOnChanges(): void {
    console.log(this.DepartmentName);
  }

  addDepartment() {
    const val = {DepartmentId: this.DepartmentId,
                  DepartmentName: this.DepartmentName}
    this.service.addDepartment(val).subscribe(res => {
      alert(res.toString());
    })
  }

}
