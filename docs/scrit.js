var form = document.querySelector('.form');
var btn_sub = form.querySelector('.btn_sub');
var result = document.querySelector('.result');

form.onsubmit = function(e) {
  e.preventDefault();
  var summResult = 0;

  for (var i=2; i < e.target.length; i++) {
    e.target[i].checked ? summResult += parseInt(e.target[i].value) : null;
  }

  if (e.target.allergy.value == '10') {
    summResult = 'Вам не следует заводить котика.'
  }else {
    if ( e.target.name.value == 'Котик-тортик') {
      summResult = 'Тебе не котик нужен, а кардиолог.'
    } else {
      if ( e.target.age.value < 15) {
        summResult = 'Вы слишком юны, посоветуйтесь лучше с родителями.'
      } else {
        if ( e.target.cats.value == '10' ) {
          summResult = 'Вам не нужен никакой котик, Вы не тот человек,  с которым котикам будет хорошо.'
        } else {
          if ( summResult == 10) {
            summResult = 'Вам очень нужен котик, вы с ним будете лучшими друзьями.'
          } else {
            if (summResult > 20) {
              summResult = 'Это серьёзный вопрос, Вам стоит его более детально изучить.'
            } else {
              summResult = 'Возможно, это будет хорошая идея.'
            }
          }
        }
      }
    }
  }

  result.textContent = summResult;
}
