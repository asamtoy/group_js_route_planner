var setUpDropDown = function (items, select) {
  items.forEach(function (item) {
    var option = document.createElement('option')
    option.innerText = item.name
    select.appendChild(option)
  })
}
