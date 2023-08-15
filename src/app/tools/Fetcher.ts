import axios from 'axios';
import {Item} from "../model/Item";
export class Fetcher{
  private mythicList: string[] = [
    'Youmuu\'s Ghostblade',
    'Trinity Force',
    'Stridebreaker',
    'Shurelya\'s Battlesong',
    'Rod of Ages',
    'Riftmaker',
    'Radiant Virtue',
    'Night Harvester',
    'Navori Quickblades',
    'Moonstone Renewer',
    'Luden\'s Tempest',
    'Locket of the Iron Solari',
    'Liandry\'s Anguish',
    'Jak\'Sho, The Protean',
    'Infinity Edge',
    'Iceborn Gauntlet',
    'Hextech Rocketbelt',
    'Heartsteel',
    'Guinsoo\'s Rageblade',
    'Goredrinker',
    'Galeforce',
    'Evenshroud',
    'Everfrost',
    'Eclipse',
    'Echoes of Helia',
    'Duskblade of Draktharr',
    'Divine Sunderer',
    'Crown of the Shattered Queen'
  ];
  private bootsList: string[] = [
    'Berserker\'s Greaves',
    'Boots of Swiftness',
    'Ionian Boots of Lucidity',
    'Mercury\'s Treads',
    'Plated Steelcaps',
    'Sorcerer\'s Shoes',
    'Mobility Boots'
  ]
   constructor() {
     this.fetchItems().then(r => console.log("Items fetched"))
  }
  URL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/items.json";
  IMG_URL = "https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/assets/items/icons2d/"
  items: Item[] = [];
  async fetchItems(){
    axios.get(this.URL).then((response) => {
      for(let item in response.data){
        if(response.data[item].categories.includes("Boots") && response.data[item].priceTotal >= 900){
          this.items.push(
            {
              name: response.data[item].name,
              type: this.filterItem(response.data[item].name),
              icon: this.parseIcon(response.data[item].iconPath),
            }
          )
        }
        if(response.data[item].from.length >= 2 && response.data[item].priceTotal > 2000){
          this.items.push(
            {
              name: response.data[item].name,
              type: this.filterItem(response.data[item].name),
              icon: this.parseIcon(response.data[item].iconPath),
            }
          )
        }

      }
    });
    console.log(this.items)
  }
  parseIcon(iconString: string){
    iconString = iconString.replace('/lol-game-data/assets/ASSETS/Items/Icons2D/', this.IMG_URL);
    iconString = iconString.replace(' ', '_');
    return iconString.toLowerCase();
  }
  filterItem(name: string): string{
    if(this.mythicList.includes(name)){
      return "Mythic";
    }else if(this.bootsList.includes(name)){
      return "Boots";
    }
    return "Legendary";
  }
}
