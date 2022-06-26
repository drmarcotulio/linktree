const shareBtn = document.getElementById('shareBtn')

shareBtn.addEventListener('click', event => {

  // Check for Web Share api support
  if (navigator.share) {
    // Browser supports native share api
    navigator.share({
      text: 'Venha conhecer o Dr Marco Túlio',
      url: 'https://drmarcotulio.github.io/home/'
    }).then(() => {
      console.log('Sharing!');
    })
      .catch((err) => console.error(err));
  } else {
    // Fallback
    alert("Esse navegador não suporta compartilhar o link, por favor copie o link e envie para seus amigos!!")
  }
});