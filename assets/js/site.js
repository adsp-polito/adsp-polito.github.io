(() => {
  'use strict';
  document.documentElement.classList.add('js');

  const navigation = document.querySelector('#site-nav');
  const menuButton = document.querySelector('.menu-toggle');
  if (navigation && menuButton) {
    const closeMenu = () => {
      navigation.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
    };
    menuButton.addEventListener('click', () => {
      const opened = navigation.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(opened));
      menuButton.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
    });
    navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
        closeMenu();
        menuButton.focus();
      }
    });
    window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
  }

  const editionMenu = document.querySelector('.edition-menu');
  if (editionMenu) {
    document.addEventListener('click', event => {
      if (!editionMenu.contains(event.target)) editionMenu.open = false;
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && editionMenu.open) {
        editionMenu.open = false;
        editionMenu.querySelector('summary').focus();
      }
    });
  }

  const tools = document.querySelector('.resource-tools');
  const search = document.querySelector('#lecture-search');
  const rows = Array.from(document.querySelectorAll('.resource-row'));
  if (tools && search && rows.length) {
    tools.hidden = false;
    let activePillar = 'all';
    const buttons = Array.from(tools.querySelectorAll('[data-filter]'));
    const count = document.querySelector('#resource-count');
    const empty = document.querySelector('.no-results');
    const applyFilters = () => {
      const query = search.value.trim().toLocaleLowerCase();
      let visible = 0;
      rows.forEach(row => {
        const matchesPillar = activePillar === 'all' || row.dataset.pillar === activePillar;
        const matchesSearch = row.querySelector('.resource-title').textContent.toLocaleLowerCase().includes(query);
        row.hidden = !(matchesPillar && matchesSearch);
        if (!row.hidden) visible++;
      });
      buttons.forEach(button => {
        const selected = button.dataset.filter === activePillar;
        button.classList.toggle('is-active', selected);
        button.setAttribute('aria-pressed', String(selected));
      });
      count.textContent = `${visible} ${visible === 1 ? 'topic' : 'topics'}`;
      empty.hidden = visible > 0;
    };
    buttons.forEach(button => button.addEventListener('click', () => {
      activePillar = button.dataset.filter;
      applyFilters();
    }));
    search.addEventListener('input', applyFilters);
    document.querySelectorAll('[data-pillar-link]').forEach(link => {
      link.addEventListener('click', () => {
        activePillar = link.dataset.pillarLink;
        search.value = '';
        applyFilters();
      });
    });
    document.querySelector('#reset-filters').addEventListener('click', () => {
      activePillar = 'all';
      search.value = '';
      applyFilters();
      search.focus();
    });
  }

  if (navigation && 'IntersectionObserver' in window) {
    const navLinks = Array.from(navigation.querySelectorAll('a'));
    const sections = navLinks.map(link => document.getElementById(new URL(link.href).hash.slice(1))).filter(Boolean);
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) navLinks.forEach(link => {
          link.classList.toggle('is-active', new URL(link.href).hash === `#${entry.target.id}`);
        });
      });
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    sections.forEach(section => observer.observe(section));
  }
})();
