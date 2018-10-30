$(function(){
  $('#verification').click(function(){
    name = $('#name').val();
    userName = $('#userName').val();
    date = $('#date').val();
    lieu = $('#lieu').val();
    job = $('#job').val();
    place = $('#place').val();
    //Ci-dessus, récupération de la valeur des variable.
    //Ci-dessous, teste de validité de chaque champs rempli.
    //Je limite les nom et prénom de 3 à 20 caractères maxi.
    if (name = /^[a-zA-Z_-]{3,20}$/ .test(name)){
      alert('Merci ! Votre Nom est Valide.');
    }else {
      alert('Désolé ! Votre Nom est Invalide !');
    }
    if (userName = /^[a-zA-Z_-]{3,20}$/ .test(userName)){
      alert('Merci ! Votre Prénom est Valide.');
    }else {
      alert('Désolé ! Votre Prénom est Invalide !');
    }
    //Je met en format de date JJ/MM/AAAA.
    if (date = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/ .test(date)){
      alert('Merci ! Votre date de naissance est Valide.');
    }else {
      alert('Désolé ! Votre date de naissance est Invalide !');
    }
    //Je limite le lieu de naissance, nom et lieu de travail de 3 à 30 caractères maxi.
    if (lieu = /^[a-zA-Z_-]{3,30}$/ .test(lieu)){
      alert('Merci ! Votre lieu de naissance est Valide.');
    }else {
      alert('Désolé ! votre lieu de naissance est Invalide !');
    }
    if (job = /^[a-zA-Z_-]{3,30}$/ .test(job)){
      alert('Merci ! Votre métier est Valide.');
    }else {
      alert('Désolé ! Votre métier est Invalide !');
    }
    if (place = /^[a-zA-Z_-]{3,30}$/ .test(place)){
      alert('Merci ! Votre lieu d\'emploi est Valide.');
    }else {
      alert('Désolé ! Votre lieu d\'emploi est Invalide !');
    }
    //Ci-dessous, text de présentation du client.
    $('#result').empty();
    result = (''+userName+' '+name+', né le: '+date+' à '+lieu+' , actuellement '+job+ ' à ' +place+'.');
    return $('#result').append(result);
  });
});
