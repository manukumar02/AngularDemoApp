'use strict';

eventsApp.controller('EditEventController', function($scope) {
    $scope.saveEvent = function(event, newFormEvent) {
        if(newFormEvent.$valid) {
            console.log(newFormEvent);
            window.alert('Event '+ event.name + ' Saved');
        }
    };
    $scope.cancelEdit = function() {
        window.location = '/EventsDetails.html';
    }
});