document.body.querySelectorAll('.block-faq').forEach(faq => {
  const q = faq.querySelector('.block-faq-q');
  const a = faq.querySelector('.block-faq-a');

  // q.addEventListener('click', function(e) {
  //   a.classList.toggle('show');
  //   q.classList.toggle('collapsed');
  //   q.setAttribute('aria-expanded', !q.classList.contains('collapsed'));
  // })

  // temporary workaround because of this issue: https://github.com/berty/www.berty.tech/issues/97
  q.addEventListener('click', function(e) {
    if (q.classList.contains('collapsed')) {
      a.setAttribute('class', 'block-faq-a show');
      q.setAttribute('class', 'block-faq-q');
    } else {
      a.setAttribute('class', 'block-faq-a');
      q.setAttribute('class', 'block-faq-q collapsed');
    }
    q.setAttribute('aria-expanded', !q.classList.contains('collapsed'));
  })
})