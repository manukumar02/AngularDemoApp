'use strict';

eventsApp.controller('EventController', function($scope) {
    $scope.event = {
        name: 'Angular Boot Camp',
        date: '1/1/2017',
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
                "duration": "4:48 PM",
                "level": "Business Development",
                "abstract": "arcu adipiscing molestie hendrerit at vulputate vitae nisl aenean lectus pellentesque"
            }, {
                "id": 2,
                "creatorName": "Thomas Robinson",
                "duration": "1:05 PM",
                "level": "Product Management",
                "abstract": "purus phasellus in felis donec semper sapien a libero nam dui proin leo odio porttitor id consequat in consequat ut nulla sed accumsan felis ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero"
            }, {
                "id": 3,
                "creatorName": "John Bailey",
                "duration": "10:09 PM",
                "level": "Marketing",
                "abstract": "egestas metus aenean fermentum donec ut mauris eget massa tempor convallis nulla neque libero convallis eget eleifend luctus ultricies eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum"
            }, {
                "id": 4,
                "creatorName": "Ruby Wright",
                "duration": "9:56 AM",
                "level": "Training",
                "abstract": "eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam"
            }, {
                "id": 5,
                "creatorName": "Denise Sullivan",
                "duration": "11:01 AM",
                "level": "Support",
                "abstract": "est donec odio justo sollicitudin ut suscipit a feugiat et"
            }, {
                "id": 6,
                "creatorName": "Andrew Daniels",
                "duration": "6:54 PM",
                "level": "Business Development",
                "abstract": "donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis"
            }, {
                "id": 7,
                "creatorName": "Timothy Gibson",
                "duration": "7:46 AM",
                "level": "Human Resources",
                "abstract": "primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac"
            }, {
                "id": 8,
                "creatorName": "Ryan Alvarez",
                "duration": "9:15 PM",
                "level": "Training",
                "abstract": "at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam ultrices libero non mattis pulvinar nulla pede ullamcorper augue a suscipit nulla elit ac nulla sed vel enim sit"
            }
        ]
    }
})