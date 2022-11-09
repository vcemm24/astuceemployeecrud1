import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';
import { employee } from '../view/employemodel';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public empy:employee={} as employee;
  myemployee:any;
  constructor(private employeservice:MyserviceService,private router:Router) { }

  ngOnInit(): void {
    this.getmyuser();
  }
  getmyuser(){
    this.employeservice.getuser().subscribe(res=>{
      this.myemployee=res;
    })
  }

}
