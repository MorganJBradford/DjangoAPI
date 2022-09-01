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
  
  displayedColumns: string[] = ['DepartmentId','DepartmentName'];
  public dataSource: MatTableDataSource<Department> = {} as MatTableDataSource<Department>;


  private dataArray: any;

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.subs.add(this.service.getDepList()
      .subscribe((res) => {
        console.log(res);
        this.dataArray = res;
        this.dataSource = new MatTableDataSource<Department>(this.dataArray);
        console.log(this.dataSource)
      },
        (err: HttpErrorResponse) => {
          console.log(err);
        }));
  }

  ngOnDestroy() {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

}