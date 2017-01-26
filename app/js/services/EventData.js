'use strict';

eventsApp.factory('eventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id: '@id'});
    return {
        getEvents: function () {
            return resource.get({id: 1});
        },
        save: function(event) {
            event.id = 999;
            return resource.save(event);
        }
    };
});

// eventsApp.factory('eventData', function ($http, $log) {
//     return {
//         getEvents: function (successcb) {
//             $http({
//                 method: 'GET',
//                 url: '/data/event/1'
//             }).then(function (response) {
//                 successcb(response.data);
//             }, function(response) {
//                 $log.warn(response);
//             });
//         }
//     }
// });