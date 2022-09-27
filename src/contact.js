const contact = () => {

const content = document.querySelector('#content');

const contactDiv = document.createElement('div');

contactDiv.innerHTML = `
<div class = "contact-content">
 <div class = "contact-grid">
 <h1>Get in Touch</h1>
 <div class = "contact-items">
 Email:
 <a class = "contact-link" href = "mailto:michelldaniel426@gmail.com">mitchelldaniel426@gmail.com</a>
 </div>

 <div class = "contact-items">
 LinkedIn:
 <a class = "contact-link" href = "https://www.linkedin.com/in/daniel-f-mitchell/">https://www.linkedin.com/in/daniel-f-mitchell/</a>
 </div>

 <div class = "contact-items">
 GitHub:
 <a class = "contact-link" href = "https://github.com/DanielMitchell444">https://github.com/DanielMitchell444</a>
 </div>
</div>
</div>

`

content.appendChild(contactDiv);

}

export default contact;