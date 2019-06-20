
class TabLink {
  constructor(links) {
    // Assign this.element to the passed in DOM element
    // this.element;
    
    // Get the custom data attribute on the Link
    // this.data;
    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    
    // Add a click event listener on this instance, calling the select method on click
    this.links = links;
    this.data = this.links.dataset.tab;
    this.itemElement= document.querySelector(`.tabs-item[data-tab='$(this.data)']`);
    this.tabItem=new TabItem(this.itemElement);
    this.links.addEventListener('click', () => {this.select()});
    
  };

  select() {
    // Get all of the elements with the tabs-link class
    // const links;

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();

    // Add a class named "tabs-link-selected" to this link
    // this.element;
    
    // Call the select method on the item associated with this link
      const links = document.querySelectorAll('.tabs-links');
      Array.from(links).forEach(item => item.classList.remove('tabs-links-selected'));
      this.links.classList.add('tabs-link-selected');
      this.tabItem.select();
  }

}

class TabItem {
  constructor(tabItm) {
    // Assign this.element to the passed in element
    // this.element;
    this.tabItm=tabItm;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    // const items;

    // Remove the class "tabs-item-selected" from each element
    
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    const items = document.querySelectorAll('.tabs-item');
    items.forEach(items => items.classList.remove('tabs-item-selected'));
    this.tabItm.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/
const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));