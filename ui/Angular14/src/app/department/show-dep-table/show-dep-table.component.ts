import { AddEditDepComponent } from './../add-edit-dep/add-edit-dep.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatSort} from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpErrorResponse } from '@angular/common/http';
import { Department } from 'src/app/interfaces/company-interfaces';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep-table',
  templateUrl: './show-dep-table.component.html',
  styleUrls: ['./show-dep-table.component.css']
})
export class ShowDepTableComponent implements OnInit, OnDestroy {

  constructor(private service: SharedService, public dialog: MatDialog) { }

  dep: Department = {} as Department;

  private subs = new Subscription();
  
  displayedColumns: string[] = ['DepartmentId','DepartmentName', 'Options'];
  public dataSource: MatTableDataSource<Department> = {} as MatTableDataSource<Department>;


  private dataArray: any;

  addDepartment(){
    this.dep={
      DepartmentId: 0,
      DepartmentName: "",
    }
    this.dialog.open(AddEditDepComponent, {data: {ModalTitle: "Add Department"}});
  }
  editDepartment(){
    this.dep={
      DepartmentId: 0,
      DepartmentName: "",
    }
    this.dialog.open(AddEditDepComponent, {data: {ModalTitle: "Edit Department"}});
  }

  getDepartments(): void {
    this.subs.add(this.service.getDepList()
      .subscribe((res) => {
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<Department>(this.dataArray);
      }));
  }

  ngOnInit() {
    this.getDepartments();
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}