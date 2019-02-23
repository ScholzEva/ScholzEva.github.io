database = firebase.database();

$('#send').on('click', (event) => {
  event.preventDefault();
  let title = $('.post-title').val();
  let text = $('.post-text').val();

  $('.first').prepend(`
      <h3>${title}</h3>
      <h4>${text}</h4>
  `);

  let dataToSave = { title: title, text: text };
  database.ref("post").push(dataToSave);

  console.log(title)
  console.log(text)
});

database.ref("post").once('value').then(data => {
  data.forEach(element => {
    $('.first').prepend(`
      <h3>${element.child('title').val()}</h3>
      <h4>${element.child('text').val()}</h4>
       `);
  });
});
