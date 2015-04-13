
  var Location = window.Note;
  var locationForm = document.getElementById('new_location')
  var tablelist = document.getElementById('locationsTable');
  var formlist = document.getElementById('new_location')
  var clearAdditions = document.getElementById('clear_additions')
  var tableData = [];

   var renderTable = function() {
    formlist.textContent = '';
    tableData.forEach(function(monkey) {
      formlist.appetndChild(monkey.render());
    });
  };
   var handleLocationFormSubmit = function(event)  {
       event.preventDefault();

       if (!event.target.location.value)  {
           return alert('location cannot be blank');
       }
  var newLocation = new Location(event.target.location.value, event.target.minCust.value, event.target.maxCust.value, event.target.avgDonuts.value);
  event.target.location.value = null;
  event.target.minCust.value = null;
  event.target.maxCust.value = null;
  event.target.avgDonuts.value = null;
  tableData.push(newLocation);
  newLocation.render();
}


 locationForm.addEventListener('submit', handleLocationFormSubmit);
 clearAdditions.addEventListener('click', function() {
   Tr.innerHTML = ' ' ;
   tableData = [];
 });






