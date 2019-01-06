import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService2 } from '../services/data/data.service';
import { Data } from '../services/data/class.data';
import { DataTest } from '../models/dataTest';
import { MatPaginator, MatTableDataSource, MatSort, PageEvent } from '@angular/material';
import $ from "jquery";
import Swal from 'sweetalert';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  pageEvent: PageEvent;
datasource: null;
pageIndex:number;
pageSize:number;
length:number=10;
check:boolean = true;




  error: any;
  headers: string[];
  config: DataTest[];
  bandera: boolean = false;
  dataSource = new MatTableDataSource<DataTest>();
  displayedColumns = ["userId", "id", "title", "body"];
  constructor(public dataService2: DataService2) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ngOnInit() {
    this.showConfigResponse();
  }
  showConfigResponse() {
    this.dataService2.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        // const keys = resp.headers.keys();
        // this.headers = keys.map(key =>
        //   `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        // this.config={ ... resp.body };
        var auxs = resp.body;
        var aux2 = JSON.stringify(auxs);
        this.config = JSON.parse(aux2);

        this.dataSource = new MatTableDataSource<DataTest>(this.config);




        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.bandera = true;


        //  for (let aux of this.config)
        console.log(this.dataSource.paginator)
        //    ;

        // console.log(aux);
      });
  }
  
  applyFilter($event) {
    let filterValue=$event.target.value
    $event.target.value="4";
    this.dataSource.filter = filterValue.trim().toLowerCase();
    
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  public getServerData(event?:PageEvent){
    console.log(event);
    this.dataService2.getConfigResponse().subscribe(
      response =>{
        if(false) {
          // handle error
        } else {
          console.log("hola");
          this.dataSource = null;
          this.pageIndex = 5;
          this.pageSize = 5;
          this.length = 100;
        }
      },
      error =>{
        // handle error
      }
    );
    return event;
  }

  selectedIndexChange(val :number ){
    //this.selectedIndex=val;
  }
  aux($event){
    swal({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success",
    });

    // Swal({
    //   title: "Are you sure?",
    //   text: "Once deleted, you will not be able to recover this imaginary file!",
    //   type: "error",
    //   buttons: true,
    //   dangerMode: true,
    // })
    // .then((willDelete) => {
    //   if (willDelete) {
    //   //  $event.value=false;
    //   $event.target.checked=true;
    //     console.log($event)
    //     }
    //    else {
    //    // $event.value=true;
    //     console.log(($event))
    //   }
    // }
    // );




  }

}
