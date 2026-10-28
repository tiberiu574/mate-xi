// Conținutul introductiv al celor două secțiuni.
const content = {
  theory: {
    icon: '▤',
    title: 'Teorie',
    description: 'Aici vor apărea lecțiile, conceptele și explicațiile pentru materia de clasa a XI-a.'
  },
  help: {
    icon: '◇',
    title: 'Ajutor la probleme',
    description: 'Aici vei putea găsi sprijin pentru rezolvarea problemelor, pas cu pas.'
  }
};

const tabs = document.querySelectorAll('.tab');
const panel = document.getElementById('panel');
const panelIcon = document.getElementById('panel-icon');
const panelTitle = document.getElementById('panel-title');
const panelDescription = document.getElementById('panel-desc');

// Schimbă secțiunea activă când utilizatorul apasă pe un tab.
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => {
      item.setAttribute('aria-selected', String(item === tab));
    });

    const selected = content[tab.dataset.tab];
    panelIcon.textContent = selected.icon;
    panelTitle.textContent = selected.title;
    panelDescription.textContent = selected.description;
    panel.setAttribute('aria-labelledby', tab.id);
  });
});
