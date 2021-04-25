import { Component, OnInit, SimpleChanges, OnChanges } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {

    constructor() { }

    ngOnChanges(changes: SimpleChanges){
        console.log(changes);
    }

    ngOnInit(): void {

    }

    ngAfterViewInit(): void {
        
    }
    
}