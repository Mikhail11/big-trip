import Abstract from '../view/abstract.js';

export const RenderPosition = {
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
};

export function render(container, element, place) {

  if(container instanceof Abstract){
    container = container.getElement();
  }

  if(element instanceof Abstract){
    element = element.getElement();
  }

  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
}

export function createNewElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstChild;
}

export function replace(newChild, oldChild) {

  if(newChild instanceof Abstract){
    newChild = newChild.getElement();
  }

  if(oldChild instanceof Abstract){
    oldChild = oldChild.getElement();
  }

  const parent = oldChild.parentElement;

  if(parent === null || newChild === null || oldChild === null){
    throw new Error('Can\t replace unexisting elements');
  }

  parent.replaceChild(newChild, oldChild);
}
