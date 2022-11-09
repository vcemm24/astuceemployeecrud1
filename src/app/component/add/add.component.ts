import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from 'src/app/service/myservice.service';
import { employee } from '../view/employemodel';
interface gender{
  value:string;
  viewvalue:string;
}
interface position{
  value:string;
  viewvalue:string;
}
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
usergender:gender[]=[
  {value:'male',viewvalue:'male'},
  {value:'female',viewvalue:'female'}
]
userposition:position[]=[
  {value:'angulardev',viewvalue:'Angular developer'},
  {value:'vuedev',viewvalue:'Vue developer'},
  {value:'laraveldev',viewvalue:'Laravel developer'}
]
public empy:employee={} as employee;
  constructor(private employeservice:MyserviceService,private router:Router) { }

  ngOnInit(): void {

  }
  add(){
    this.employeservice.createuser(this.empy).subscribe((data:employee)=>{
      //console.log(data);
      alert("data added successfuly")
      this.router.navigate(['/view'])
    },
      err=>{
        alert("something went wrong")
        this.router.navigate(['/'])
      }
    )
  }

}
