import Abstract from './abstract.js';

function createItemsListTemplate() {
  return '<ul class="trip-events__list"></ul>';
}

export default class ItemsList extends Abstract{

  getTemplate(){
    return createItemsListTemplate();
  }

}
