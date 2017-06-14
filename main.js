// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
(function () {
  'use strict';

  // declaring variables
  var url = 'https://randomuser.me/api/?results=12';
  var customers = document.querySelector('.customers');
  var infoBegins = [];
  var picture;
  var firstName;
  var lastName;
  var name;
  var email;
  var address;
  var street;
  var city;
  var state;
  var postcode;
  var phone;

  // fetching users data with get request
  fetch(url).then(function(response){
    console.log('response', response);
    response.json().then(function(data){
      // console.log(data);
      infoBegins = data.results;
      // console.log('infoBegins', infoBegins);
      // var data = data;
      // return infoBegins;

      for (var i = 0; i < infoBegins.length; i++) {
        console.log('person', infoBegins[i]);
        // photo
        var picture = '<img src="' + infoBegins[i].picture.large + '">';
        console.log('picture: ', picture);

        // name
        var name = infoBegins[i].name.first + ' ' + infoBegins[i].name.last;
        console.log('full name: ', name);

        // email
        var email = infoBegins[i].email;
        console.log('email: ', email);

        

      }

      // console.log(infoBegins.picture.large);
      //

      street = infoBegins.location.street;
      console.log (street);
      city = infoBegins.location.city;
      console.log(city);
      state = infoBegins.location.state;
      console.log(state);
      postcode = infoBegins.location.postcode;
      console.log(postcode);
      address = street + ' ' + city + ', ' + state + ' ' + postcode;
      console.log(address);
      // function displayCustomers(infoBegins.gender);

      // function to create elements
      function customerPhoto(infoBegins){
        // console.log(infoBegins);
        var divNode = document.createElement('div');
        divNode.innerHTML = picture
        console.log(divNode.innerHTML = picture);
        customers.appendChild(divNode);
      }

      function customerName(infoBegins){
        // console.log(infoBegins);
        var divNode = document.createElement('div');
        divNode.textConent = name;
        console.log(divNode.textContent = name);
        customers.appendChild(divNode);
      }

      function customerEmail(infoBegins){
        // console.log(infoBegins);
        var divNode = document.createElement('div');
        divNode.textConent = email;
        console.log(divNode.textContent = email);
        customers.appendChild(divNode);
      }

      function customerAddress(infoBegins){
        // console.log(infoBegins);
        var divNode = document.createElement('div');
        divNode.textConent = address;
        console.log(divNode.textContent = address);
        customers.appendChild(divNode);
      }


      customerPhoto(infoBegins);
      customerName(infoBegins);
      customerEmail(infoBegins);
      customerAddress(infoBegins);

    })
  });

  // function to create elements
  // function displayCustomers(infoBegins){
  //   console.log(infoBegins);
  // }
  //
  // displayCustomers(infoBegins);
  //

// from example in class
  // function displayCoffee(coffee){
  //   console.log(coffee);
  //   var tile = document.createElement('div');
  //   tile.innerHTML = '<img src="' + coffee.image + '">' + coffee.name;
  //   container.appendChild(tile);
  // }



})();
