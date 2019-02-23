database = firebase.database();

$('#send').on('click', (event) => {
    event.preventDefault();
    let title = $('.post-title').val();
    let text = $('.post-text').val();

    $('body').append(`
      <h3>${title}</h3>
      <h4>${text}</h4>
  `);

  let dataToSave = { postTitle: title, postText: text };
  database.ref("post").push(dataToSave);

    console.log(title)
    console.log(text)
});

