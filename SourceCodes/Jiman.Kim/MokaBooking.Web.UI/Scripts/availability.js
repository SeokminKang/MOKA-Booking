var bookingStates = [
{
    "bookingDate": "2014-01-01, 20:00",
    "booked": true
},
{
    "bookingDate": "2014-01-02, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-03, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-04, 18:00",
    "booked": false
},
{
    "bookingDate": "2014-01-04, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-05, 18:00",
    "booked": true
},
{
    "bookingDate": "2014-01-05, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-06, 20:00",
    "booked": true
},
{
    "bookingDate": "2014-01-07, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-08, 20:00",
    "booked": true
},
{
    "bookingDate": "2014-01-09, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-10, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-11, 18:00",
    "booked": true
},
{
    "bookingDate": "2014-01-11, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-12, 18:00",
    "booked": false
},
{
    "bookingDate": "2014-01-12, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-13, 20:00",
    "booked": true
},
{
    "bookingDate": "2014-01-14, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-15, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-16, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-17, 20:00",
    "booked": true
},
{
    "bookingDate": "2014-01-18, 18:00",
    "booked": false
},
{
    "bookingDate": "2014-01-18, 20:00",
    "booked": true
},
{
    "bookingDate": "2014-01-19, 18:00",
    "booked": false
},
{
    "bookingDate": "2014-01-19, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-20, 20:00",
    "booked": true
},
{
    "bookingDate": "2014-01-21, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-22, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-23, 20:00",
    "booked": true
},
{
    "bookingDate": "2014-01-24, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-25, 18:00",
    "booked": true
},
{
    "bookingDate": "2014-01-25, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-26, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-27, 20:00",
    "booked": true
},
{
    "bookingDate": "2014-01-28, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-29, 20:00",
    "booked": true
},
{
    "bookingDate": "2014-01-30, 20:00",
    "booked": false
},
{
    "bookingDate": "2014-01-31, 20:00",
    "booked": false
}
];

(function (angular) {
    var module = angular.module("availabilityApp", []);

    module.controller("availabilityController", function ($scope, $http) {
        $scope.bookingStates = bookingStates;
    });
})(angular);