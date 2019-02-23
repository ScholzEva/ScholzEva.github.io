$('#send').on('click', (event) => {
    event.preventDefault();
    let title = $('.post-title').val();
    let text = $('.post-text').val();

    $('body').append(`
      <h3>${title}</h3>
      <h4>${text}</h4>
  `);

    console.log(title)
    console.log(text)
});

