import {Component, OnInit} from '@angular/core';
import {Item} from "../../model/Item";
import champions from "../../tools/champions.json"
import {Champion} from "../../model/Champion";
import {ItemService} from "../../service/ItemService";

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
  constructor(private itemService: ItemService) {
  }
  ngOnInit(): void {
    this.items = this.itemService.items
    for(let champ of champions){
      this.champions.push(
        {name: champ.name,
        icon: this.parseIcon(champ.id)
        }
      )
    }
  }
  parseIcon(id: number): string{
    return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-tiles/${id}/${id}000.jpg`
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
    let uniqueLegendaries = this.items.filter((item: Item) => item.type === "Legendary")

    items.push(boots[Math.floor(Math.random() * boots.length)]);
    items.push(mythics[Math.floor(Math.random() * mythics.length)]);
    for(let i = 0; i < 4; i++){
      let randomIndex = Math.floor(Math.random() * uniqueLegendaries.length);
      items.push(uniqueLegendaries[randomIndex]);
      uniqueLegendaries.splice(randomIndex, 1);

    }

    return items;
  }


}
