import { Component, inject } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  username='';
private route=inject(ActivatedRoute);

ngOnInit(){
  this.username=this.route.snapshot.paramMap.get('username')??'';
}
}
