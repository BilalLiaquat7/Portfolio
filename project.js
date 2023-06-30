// --------------------- Email Validation ----------------------
const email = document.getElementById('email');
email.addEventListener('input', (event) => {
  const text = event.target.value;
  if (text === text.toLowerCase()) {
    email.setCustomValidity('');
  } else {
    email.setCustomValidity('Please write email in LowerCase');
  }
});

// ------------------------- Local Storage ----------------------
const form = document.getElementById('form');
let fDataObj;
form.addEventListener('submit', (event) => {
  const myFormData = new FormData(event.target);
  fDataObj = {};
  myFormData.forEach((value, key) => {
    fDataObj[key] = value;
  });
  const formData = JSON.stringify(fDataObj);
  localStorage.setItem('Data', formData);
});

const userData = JSON.parse(localStorage.getItem('Data'));
window.onload = () => {
  email.value = userData.email;
  document.getElementById('name').value = userData.tet;
  document.getElementById('message').value = userData.meage;
};

// ------------------ Project's Object -----------------------
const projects = [
  {
    id: 1,
    card: 'project1',
    image: './assets/SnapshootPortfolio.svg',
    Projectname: 'Tonic',
    history: {
      proName: 'CANOPY',
      tech: 'Backend Dev',
      date: 2015,
    },
    disc: 'A daily selection of privately personalized reads;no accounts or sign-ups required.',
    tags: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
    },
    button: 'myBtn',
  },
  {
    id: 2,
    card: 'project2',
    image: './assets/SnapshootPortfolio1.svg',
    Projectname: 'Multi-Post',
    history: {
      proName: 'CANOPY',
      tech: 'Backend Dev',
      date: 2015,
    },
    disc: 'A daily selection of privately personalized reads;no accounts or sign-ups required.',
    tags: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
    },
    button: 'myBtn',
  },
  {
    id: 3,
    card: 'project3',
    image: './assets/SnapshootPortfolio2.svg',
    Projectname: 'Tonic',
    history: {
      proName: 'CANOPY',
      tech: 'Backend Dev',
      date: 2015,
    },
    disc: 'A daily selection of privately personalized reads;no accounts or sign-ups required.',
    tags: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
    },
    button: 'myBtn',
  },
  {
    id: 4,
    card: 'project4',
    image: './assets/SnapshootPortfolio3.svg',
    Projectname: 'MultiPost',
    history: {
      proName: 'CANOPY',
      tech: 'Backend Dev',
      date: 2015,
    },
    disc: 'A daily selection of privately personalized reads;no accounts or sign-ups required.',
    tags: {
      html: 'HTML',
      css: 'CSS',
      javascript: 'JavaScript',
    },
    button: 'myBtn',
  },
];

const section = document.getElementById('works');

const projectMethod = () => {
  projects.map((card) => {
    const project = document.createElement('div');
    project.classList.add('project');
    project.classList.add(card.card);
    project.innerHTML = `
    <div>
        <img class="image" src="${card.image}" alt="Project">
    </div>

    <div class="projectDescription">
        <div class="projectTitle">
            <span class="heading">${card.Projectname}</span>
        </div>
        <ul class="projectTools">
            <li class="canopy">${card.history.proName}</li>
            <li><img src="./assets/Counter.svg" alt="dot"></li>
            <li>${card.history.tech}</li>
            <li><img src="./assets/Counter.svg" alt="dot"></li>
            <li>${card.history.date}</li>
        </ul>
        <div class="projectSummary">
            <p>${card.disc}</p>
        </div>
        <ul class="projectTechnology">
            <li class="tag">${card.tags.html}</li>
            <li class="tag">${card.tags.css}</li>
            <li class="tag">${card.tags.javascript}</li>
        </ul>
        <div class="projectDemo">
            <button onclick="button(${card.id})" class="button button1" id="btn" type="button">See project</button>
        </div>
    </div>`;

    return section.appendChild(project);
  });
};

projectMethod();

const modal = document.getElementById('model');
// eslint-disable-next-line no-unused-vars
function button(id) {
  modal.style.display = 'flex';
  const card = projects.find((card) => card.id === id);
  const project = document.createElement('div');
  project.classList.add('modelsection');
  project.classList.add(card.card);
  project.innerHTML = `<div class="header">
        <div>
            <h2>${card.Projectname}</h2>
            <div class="card_historyy">
                <div class="card_history_detaill">
                    <p>${card.history.proName}</p>
                </div>
                <div>
                    <img src="./assets/Counter.svg" alt="dot" />
                </div>
                <div class="card_history_detail">
                    <p>${card.history.tech}</p>
                </div>
                <div>
                    <img src="./assets/Counter.svg" alt="dot" />
                </div>
                <div class="card_history_detail">
                    <p>${card.history.date}</p>
                </div>
            </div>
        </div>
        <a href="#" id="modelcross" class="Menuicon">
            <span
                id="modelcrossIcon"
                style="color: black"
                class="material-symbols-outlined">
                    close
            </span>
        </a>
    </div>
    <div class="modelimage">
        <img
            class="card_imagee"
            src=${card.image}
            alt="Tonic Project"/>
    </div>
    <div class="modeldisc">
        <div class="card_discription">
            <p>
                ${card.disc}
            </p>
    </div>
    <div class="card_tags">
        <div class="modeltags">
            <div class="tag">
                <span class="small">${card.tags.html}</span>
            </div>
            <div class="tag">
                <span class="small">${card.tags.css}</span>
            </div>
            <div class="tag">
                <span class="small">${card.tags.javascript}</span>
            </div>
        </div>
        <hr class="hr">
        <div class="card_action">
            <button class="modelbtn button button1" type="button"> See lice <img style="height: 24px; width: 24px; margin-left: 6px;" src="./assets/see_live.svg" alt=""></button>
            <button class="modelbtn button button1" type="button"> See source <img style="height: 24px; width: 24px; margin-left: 6px;" src="./assets/see source.svg" alt=""> </button>
        </div>
    </div>
</div>`;

  modal.appendChild(project);
  setTimeout(() => {
    const span = document.getElementById('modelcrossIcon');
    span.onclick = function shah() {
      modal.style.display = 'none';
      modal.removeChild(project);
    };
  }, 50);
}
