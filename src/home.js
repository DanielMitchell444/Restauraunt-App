const home = () => {
 
  const content = document.querySelector('#content');
  const homeDiv = document.createElement('div');

  homeDiv.innerHTML = `
  <div class = "tabs-content">
  <div class = "home-content">
  <h1>The Purple Penguin</h1>
  <p>Established in 1960</p>
  <img src = "Images/hamburgers-with-fries-cup-sauce-wooden-tray.jpg">
  </div>
  </div>
  `


  content.appendChild(homeDiv);
  
}


export default home;