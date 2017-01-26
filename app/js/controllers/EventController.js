'use strict';

eventsApp.controller('EventController', function ($scope, eventData, $anchorScroll) {
    $scope.sortorder = 'creatorName';
    eventData.getEvents()
        .$promise
        .then(function (event) {
            $scope.event = event;
            console.log(event);
        }).catch(function (response) {
            console.log(response);
        });
    // eventData.getEvents(function(event) {
    //     $scope.event = event;
    // });

    $scope.upVoteSession = function (session) {
        session.upVoteCount++;
    };
    $scope.downVoteSession = function (session) {
        session.upVoteCount--;
    };

    $scope.scrollToSession = function() {
        $anchorScroll();
    }
})