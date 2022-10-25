import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


const allCategories = ['all', ...new Set(items.map(item => item.category))]



function App() {
  const [menus, setMenus] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  console.log(categories)


  const filterItems = category => {
    if(category === 'all'){
      setMenus(items)
      return;
    }
      const newMenu = items.filter(item => item.category === category)
      setMenus(newMenu)  
  }
  return <main>
    
    <section className="menu section">
          <div className="title">
            <h1>Our Menu</h1>
            <div className="underline"> </div>
              <Categories filterItems={filterItems} categories={categories}/>
              <Menu items={menus} />
           
          </div>
         </section>
    
         
  </main>;
}

export default App;
