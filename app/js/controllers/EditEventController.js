'use strict';

eventsApp.controller('EditEventController', function ($scope, eventData) {
    $scope.saveEvent = function (event, newFormEvent) {
        if (newFormEvent.$valid) {
            eventData.save(event)
                .$promise
                .then(function (response) {
                    console.log('Success ', response);
                }).catch(function (response) {
                    console.log('Failure ', response);
                });
        }
    };
    $scope.cancelEdit = function () {
        window.location = '/EventsDetails.html';
    }
});