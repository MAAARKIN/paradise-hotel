'use strict';

/**
* @ngdoc function
* @name paradiseHotelApp.controller:ContactCtrl
* @description
* # AboutCtrl
* Controller of the paradiseHotelApp
*/
angular.module('paradiseHotelApp')
.controller('ContactCtrl', function ($scope, $window, ContactService) {
  //send form contact mail
  $scope.sendContact = function (contact) {
    var mail = { "to" : contact.email, "message" : contact.message };
    //send contact to back-end
    ContactService.save(mail, function() {
      console.log("Contato realizado com sucesso");
    }, function(error) {
      console.log("Problema ao entrar em contato");
    })

    $scope.contactForm.$setPristine();
    $scope.contact = {};
    // $window.location.href = '/';
  }
});
