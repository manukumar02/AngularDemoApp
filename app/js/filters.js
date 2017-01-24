'use strict';
eventsApp.filter('durations', function () {
    return function (duration) {
        switch (duration) {
            case 1:
                return 'Half Hour';
                break;
            case 3:
                return '3 Hours';
                break;
            case 2:
                return '2 Hours';
                break;
            case 7:
                return '7 Hours';
                break;
            case 5:
                return '5 Hours';
                break;
            default:
                return 'Full Day';
                break;
        }
    }
})