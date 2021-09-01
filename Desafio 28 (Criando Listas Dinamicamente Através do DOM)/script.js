var list = [1,2,3]
var listElement = document.querySelector('ul');

function render(){
  var html = '';
  for(let item of list){
    html += `<li>Item ${item}`;
  }

  listElement.innerHTML = html;

}

render();