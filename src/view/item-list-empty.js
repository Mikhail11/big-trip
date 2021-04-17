import Abstract from './abstract.js';

function createItemListEmptyTemplate() {
  return '<p class="trip-events__msg">Click New Event to create your first point</p>';
}

export default class ItemListEmpty extends Abstract{

  getTemplate(){
    return createItemListEmptyTemplate();
  }
}
