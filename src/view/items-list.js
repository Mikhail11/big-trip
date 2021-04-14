import {createNewElement} from '../utils.js';
function createItemsListTemplate() {
  // eslint-disable-next-line quotes
  return `<ul class="trip-events__list"></ul>`;
}

export default class ItemsList {
  constructor() {
    this._element = null;
  }

  getTemplate(){
    return createItemsListTemplate();
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
