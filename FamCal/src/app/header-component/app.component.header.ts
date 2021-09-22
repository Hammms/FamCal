
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from 'rxjs';

import { DayService} from "../Services/day.service";
import { Day } from "../day";

@Component({
    selector: 'app-header',
    templateUrl: './app.component.header.html',
    styleUrls: ['./app.component.header.css']
})

export class HeaderComponent implements OnInit, OnDestroy {
   
    days: Day[] = [];
    private daysSub: Subscription;
    
    constructor(public dayService: DayService ) {}
    ngOnInit()  {
        this.dayService.getDays();
        this.daysSub = this.dayService.getDaysUpdatedListener()
            .subscribe((days: Day[]) => {
            this.days = days;
        })

    }

    ngOnDestroy(){
        this.daysSub.unsubscribe();
    }



    

}
    // showConfig() {
    //     this.dayService.getDays()
    //     .subscribe((data: Config) => this.config = {...data});
        
    // }

        //  fetchPosts() {
    //   this.http.get('localhost:3000/test')
    //   .subscribe(day => {
    //     console.log(day)
    //   });
    


