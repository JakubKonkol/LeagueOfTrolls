import {Component, ElementRef, OnInit, Renderer2} from '@angular/core';
import {Fetcher} from "../../tools/Fetcher";
import {Item} from "../../model/Item";
import champions from "../../tools/champions.json"
import {Champion} from "../../model/Champion";

@Component({
  selector: 'app-builds',
  templateUrl: './builds.component.html',
  styleUrls: ['./builds.component.css']
})
export class BuildsComponent implements OnInit{
  items: Item[] = [];
  champions: Champion[] = [];
  roles: string[] = [
    'Top',
    'Jungle',
    'Mid',
    'ADC',
    'Support'
  ]
  currentBuilds: any;
  numBuilds: number = 1;
  constructor(private el: ElementRef, private renderer: Renderer2) {
  }
  ngOnInit(): void {
    const fetcher = new Fetcher();
    this.items = fetcher.items;
    for(let champ of champions){
      this.champions.push(
        {name: champ.name}
      )
    }
  }
  generateBuilds(number: number){
    if (number <= 0) {
      return [];
    }
    const uniqueChampions = [...this.champions];
    const uniqueRoles = [...this.roles];
    const builds = [];
    for (let i = 0; i < number; i++) {
      if (uniqueChampions.length === 0 || uniqueRoles.length === 0) {
        break;
      }
      const randomChampionIndex = Math.floor(Math.random() * uniqueChampions.length);
      const randomRoleIndex = Math.floor(Math.random() * uniqueRoles.length);
      const champion = uniqueChampions.splice(randomChampionIndex, 1)[0];
      const role = uniqueRoles.splice(randomRoleIndex, 1)[0];
      const items = this.generateItems();
      builds.push({
        champion: champion,
        role: role,
        items: items
      });
    }
    console.log(builds);
    this.currentBuilds = builds;
    return builds;
  }
  generateItems(): Item[]{
    let items = [];
    let boots = this.items.filter((item: Item) => item.type === "Boots");
    let mythics = this.items.filter((item: Item) => item.type === "Mythic");
    let legendaries = this.items.filter((item: Item) => item.type === "Legendary");

    items.push(boots[Math.floor(Math.random() * boots.length)]);
    items.push(mythics[Math.floor(Math.random() * mythics.length)]);
    items.push(legendaries[Math.floor(Math.random() * legendaries.length)]);
    items.push(legendaries[Math.floor(Math.random() * legendaries.length)]);
    items.push(legendaries[Math.floor(Math.random() * legendaries.length)]);
    items.push(legendaries[Math.floor(Math.random() * legendaries.length)]);

    return items;
  }


}
