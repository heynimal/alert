import { Component, OnInit } from '@angular/core';  
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  constructor(private toastr: ToastrService) { }  
  
  ngOnInit() {  
    document.body.classList.add('bg-img');
  }  

   showToaster(){
    this.toastr.success("Hello, <h1> hi </h1>")
} 


 errorsmsg(){  
    this.toastr.error("Toastr Error Notification",'Error')  
  
}  
infotoastr()  
{  
this.toastr.info("Important News", 'Information');  
}  

toastrwaring()  
{  
  this.toastr.warning("Battery about to Die", 'Warning');  
} 


}  