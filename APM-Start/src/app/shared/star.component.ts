import { Component, OnChanges, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges
{
    
    starWidth : number;

    @Input()
    rating : number;

    @Output()
    onRatingClickedEvent: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void 
    {
        this.starWidth = (75 / 5) * this.rating;
    }    

    onClickStars(): void
    {
        //console.log('Rating ' + this.rating + ' was clicked');
        this.onRatingClickedEvent.emit(`The rating ${this.rating} was clicked`);
    }
}