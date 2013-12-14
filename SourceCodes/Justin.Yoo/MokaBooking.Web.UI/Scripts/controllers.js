﻿var bookings = [{
    "givenName": "Edward",
    "surname": "Kim",
    "email": "edward@mokabooking.com",
    "bookingDate": "2013-12-12, 18:00",
    "numberOfGuests": 2
},
{
    "givenName": "Hayley",
    "surname": "Heo",
    "email": "hayley@mokabooking.com",
    "bookingDate": "2013-12-13, 18:00",
    "numberOfGuests": 2
},
{
    "givenName": "Jiman",
    "surname": "Kim",
    "email": "jiman@mokabooking.com",
    "bookingDate": "2013-12-13, 20:00",
    "numberOfGuests": 4
},
{
    "givenName": "Justin",
    "surname": "Yoo",
    "email": "justin@mokabooking.com",
    "bookingDate": "2013-12-14, 18:00",
    "numberOfGuests": 4
},
{
    "givenName": "Robin",
    "surname": "Kang",
    "email": "robin@mokabooking.com",
    "bookingDate": "2013-12-14, 20:00",
    "numberOfGuests": 2
},
{
    "givenName": "Sunju",
    "surname": "Choi",
    "email": "sunju@mokabooking.com",
    "bookingDate": "2013-12-14, 20:00",
    "numberOfGuests": 6
}];

(function (angular) {
    var module = angular.module("bookingApp", []);

    module.controller("bookingController", function ($scope, $http) {
        $scope.bookings = bookings;
    });
})(angular);