const name = prompt('Есіміңізді енгізіңіз:');
if (name) {
  document.querySelector('#welcome').innerHTML = `<b>${name}</b>, тестілеу бетіне қош келдіңіз!`;
} else {
  document.querySelector('#welcome').innerHTML = '<b>Құрметті тесттен өтуші</b>, тестілеу бетіне қош келдіңіз!';
}