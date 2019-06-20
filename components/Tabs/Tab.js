class TabLink {
    constructor(links) {
       this.links = links;
       this.data = this.links.dataset.tab;
       this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);
       this.tabItem = new TabItem(this.itemElement);
       this.links.addEventListener('click', () => {this.select()});
    };
  
    select() {
       const links = document.querySelectorAll('.tabs-link');
       Array.from(links).forEach(item => item.classList.remove('tabs-link-selected'));
       this.links.classList.add('tabs-link-selected');
         this.tabItem.select();
    }
  }
  
  class TabItem {
    constructor(tabItm) {
       this.tabItm = tabItm;
       console.log('tab item now', tabItm)
    }
  
    select() {
       const items = document.querySelectorAll('.tabs-item');
         items.forEach(item => item.classList.remove('tabs-item-selected'));
      this.tabItm.classList.add('tabs-item-selected');
    }
  }
  
  const links = document.querySelectorAll('.tabs-link').forEach(link => new TabLink(link));
  
  