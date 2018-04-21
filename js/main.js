'use strict';

const ALL_MEMBERS = [];

// Save data in Local Storage
function saveDataLocalStorage() {
  localStorage.setItem('adalab_Members', JSON.stringify(ALL_MEMBERS));
};
// There are no data in Local Storage
function checkDataLocalStorage() {
  let membersSaved = localStorage.getItem('adalab_Members');

  if (membersSaved === null || typeof(membersSaved) === 'undefined') {
    callMembers();
  }
};

// Call API
function callMembers() {
  fetch('http://hp-api.herokuapp.com/api/characters')
    .then(function(response){
      return response.json();
    })
    .then(function(response){
      ALL_MEMBERS.push(response);
      saveDataLocalStorage(ALL_MEMBERS);
    })
};
checkDataLocalStorage();
