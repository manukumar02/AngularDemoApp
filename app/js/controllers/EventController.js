'use strict';

eventsApp.controller('EventController', function($scope) {
    $scope.sortorder = 'creatorName';
    $scope.event = {
        name: 'Angular Boot Camp',
        date: new Date(),
        time: '10:10am',
        location: {
            address: 'Google HQ',
            city: 'Mountain View',
            province: 'CA'
        },
        imageUrl: '/img/angularjs-logo.png',
        sessions: [
            {
                "id": 1,
                "creatorName": "Martha Wells",
                "duration": 1,
                "level": "Business Development",
                "upVoteCount": 0,
                "abstract": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque"
            }, {
                "id": 2,
                "creatorName": "Thomas Robinson",
                "duration": 3,
                "level": "Product Management",
                "upVoteCount": 0,
                "abstract": "purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero"
            }, {
                "id": 3,
                "creatorName": "John Bailey",
                "duration": 2,
                "level": "Marketing",
                "upVoteCount": 2,
                "abstract": "egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum"
            }, {
                "id": 4,
                "creatorName": "Ruby Wright",
                "duration": 7,
                "level": "Training",
                "upVoteCount": 4,
                "abstract": "eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam"
            }, {
                "id": 5,
                "creatorName": "Denise Sullivan",
                "duration": 5,
                "level": "Support",
                "upVoteCount": 6,
                "abstract": "est donec odio justo sollicitudin ut suscipit a feugiat et"
            }
        ]
    };

    $scope.upVoteSession = function(session) {
        session.upVoteCount++;
    };
    $scope.downVoteSession = function(session) {
        session.upVoteCount--;
    }
})