const menu = () => {

const content = document.querySelector('#content');
const menuContent = document.createElement('div');


menuContent.innerHTML = `
<div class = "menu-content">
<div class = "menu-grid">
<div class = "starters">
 <h1>Starters</h1>
<div class = "menu-items">
<div>Calamari</div>
<div>$8</div>
</div>
<div class = "menu-items">
<div>Caramelized Onion Dip</div>
<div>$10</div>
</div>

<div class = "menu-items">
<div>Hogs in a Blanket</div>
<div>$12</div>
</div>
</div>

<div class = "main">
<h1>Main</h1>
<div class = "menu-items">
<div>Chicken Tenders</div>
<div>$14</div>
</div>
<div class = "menu-items">
<div>Cheesburger</div>
<div>$16</div>
</div>

<div class = "menu-items">
<div>Fish and Chips</div>
<div>$16</div>
</div>
</div>

<div class = "desserts">
<h1>Desserts</h1>
<div class = "menu-items">
<div>Choclate Cheescake</div>
<div>$6</div>
</div>
<div class = "menu-items">
<div>Fried Ice Cream</div>
<div>$6</div>
</div>

<div class = "menu-items">
<div>Choclate Moose</div>
<div>$8</div>
</div>
</div>
</div>
</div>
</div>

`

content.appendChild(menuContent);
}


export default menu