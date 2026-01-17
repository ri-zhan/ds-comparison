// filter

const filterDropDown = document.getElementById('selection'); 
const components = document.querySelectorAll('.comparison-table-content .items');
var checkOption;
var checkOptionLabel;

var componentsArray = [];

for (let i = 0; i < components.length; i++) {
    const component = components[i];
    const componentName = component.firstElementChild.textContent;
    component.value = componentName;
    componentsArray.push(componentName);

    checkOptionDiv = document.createElement('div');
    
    checkOptionLabel = document.createElement('label');
    checkOptionLabel.innerText = componentName;
    checkOptionLabel.htmlFor = componentName;

    checkOption = document.createElement('input');
    checkOption.type = 'checkbox';
    checkOption.name = componentName;
    checkOption.value = componentName;
    checkOptionLabel.textContent = componentName;
    
    
    filterDropDown.appendChild(checkOptionDiv);
    checkOptionDiv.appendChild(checkOption);
    checkOptionDiv.appendChild(checkOptionLabel);
}

filterDropDown.addEventListener("click", function(){
  // Query for only the checked checkboxes and put the result in an array
  let checked = document.querySelectorAll("input[type='checkbox']:checked");
  // Loop over the array and inspect contents
  checkedArray = [];
  
  checked.forEach(function(cb){
    checkedArray.push(cb.value)
    
    
    for (let i = 0; i < components.length; i++) {
      if (!checkedArray.includes(components[i].value)) {
        components[i].style.display = 'none';
      } else {
        components[i].style.display = 'flex';
      }
    }
  });
});


