AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Presentation",
    cardImage: "assets/images/info.jpg",
   
   
    desp: "Je m'appelle Donia Laajili et je suis basée à Vichy, en France. En tant qu'étudiante ingénieur passionnée, je consacre mon engagement à l'informatique et je suis constamment motivée par la volonté de relever de nouveaux défis afin de développer davantage mes compétences.Actuellement, je suis inscrite en licence de Gestion des Systèmes d'Information à l'Université Internationale SUPINFO, située en France.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");


const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "javascript",
    
    image: "assets/images/JS1.png",
    desp: "Niveau: avancé",
    
  },
  {
    title: "html",
    
    image: "assets/images/html1.png",
    desp: "Niveau: avancé",
    
  },
  {
    title: "css",
    subtitle: "Judge",
    image: "assets/images/css1.png",
    desp: "Niveau: avancé",
   
  },
  {
    title: "python",
    
    image: "assets/images/PYTHON1.png",
    desp: "Niveau: Intermediaire",
    
  },
  {
    title: "c++",
    
    image: "assets/images/ch1.png",
    desp: "Niveau: Debutant",
    
  },
  {
    title: "C#",
    
    image: "assets/images/c1.png",
    desp: "Niveau: Debutant",
   
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, desp,}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <div class="blog-slider__text">${desp}</div>  
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
