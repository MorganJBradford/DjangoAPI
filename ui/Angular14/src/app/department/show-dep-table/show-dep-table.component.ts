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
  
  private subs = new Subscription();
  
  displayedColumns: string[] = ['DepartmentId','DepartmentName', 'Options'];
  public dataSource: MatTableDataSource<Department> = {} as MatTableDataSource<Department>;


  private dataArray: any;

  constructor(private service: SharedService) { }

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