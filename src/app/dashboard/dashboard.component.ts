import {Component, OnInit} from '@angular/core';
import {Hero} from '../_models/hero';
import {HeroService} from '../_services/hero.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    cols: any[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) {}

    ngOnInit() {
        this.getHeroes();
        this.cols = [
            {field: 'id', header: 'Id'},
            {field: 'name', header: 'Name'}
        ];
    }

    getHeroes(): void {
        this.heroService.getHeroes()
            .subscribe(heroes => this.heroes = heroes.slice(1, 5));
    }

    onRowSelect(event) {
        this.heroService.log("Hero selected : " + event.data.name);
    }
}