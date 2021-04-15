import {createNewElement} from '../utils.js';

function createItemListEmptyTemplate() {
  // eslint-disable-next-line quotes
  return `<p class="trip-events__msg">Click New Event to create your first point</p>`;
}

export default class ItemListEmpty {
  constructor() {
    this._element = null;
  }

  getTemplate(){
    return createItemListEmptyTemplate();
  }

  getElement(){
    if(!this._element){
      this._element = createNewElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement(){
    this._element = null;
  }
}
