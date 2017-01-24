'use strict';

eventsApp.controller('EventController', function($scope, eventData) {
    $scope.sortorder = 'creatorName';
    $scope.event = eventData.events;

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };
    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    }
})