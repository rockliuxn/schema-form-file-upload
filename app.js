/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
var app = angular.module('app', ['schemaForm-file-upload', 'pascalprecht.translate'])
    .controller('UploadController', function($scope, $rootScope) {

    $scope.flowOptions = {
        target: '/upload',
        testChunks: false,
        singleFile: true,
        headers: {
            Authorization: 'Base ......... '
        }
    };

    $scope.fileSuccess = function (data) {
      return JSON.parse(data);
    };

    $scope.form = [{
        key: 'image_id',
        flowOptions: $scope.flowOptions,
        fileSuccess: $scope.fileSuccess
    }];

    $scope.schema = {
        type: 'object',
        title: 'Upload',
        properties: {
            // name: {
            //   title: 'Name',
            //   type: 'string'
            // },
            image_id: {
                title: 'Image',
                type: 'object',
                format: 'file_upload',
                description: 'This is a upload element'
            }
        }
    };
    $scope.model = {
        image_id: ''//'http://o84hq08cy.bkt.clouddn.com/image/campaign_description/29/test?imageView2/2/w/640/h/480/q/85'
    };
    $scope.success = function($flow, $file, message) {
        $scope.model.image_id = message.id;
        console.log($scope.model);
    }
    $scope.uploadStarted = function() {
        console.log('started');
    }
    $scope.changeSource = function() {
        $scope.model.image_id = 'data:image/gif;base64,R0lGODdhyACWAOMAAO/v76qqqubm5t3d3bu7u7KystXV1cPDw8zMzAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAyACWAAAE/hDISau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3TAMFBQO4LAUBAQW+K8DCxCoGu73IzSUCwQECAwQBBAIVCMAFCBrRxwDQwQLKvOHV1xbUwQfYEwIHwO3BBBTawu2BA9HGwcMT1b7Vw/Dt3z563xAIrHCQnzsAAf0F6ybhwDdwgAx8OxDQgASN/sKUBWNmwQDIfwBAThRoMYDHCRYJGAhI8eRMf+4OFrgZgCKgaB4PHqg4EoBQbxgBROtlrJu4ofYm0JMQkJk/mOMkTA10Vas1CcakJrXQ1eu/sF4HWhB3NphYlNsmxOWKsWtZtASTdsVb1mhEu3UDX3RLFyVguITzolQKji/GhgXNvhU7OICgsoflJr7Qd2/isgEPGGAruTTjnSZTXw7c1rJpznobf2Y9GYBjxIsJYQbXstfRDJ1luz6t2TDvosSJSpMw4GXG3TtT+hPpEoPJ6R89B7AaUrnolgWwnUQQEKVOAy199mlonPDfr3m/GeUHFjBhAf0SUh28+P12QOIIgDbcPdwgJV+Arf0jnwTwsHOQT/Hs1BcABObjDAcTXhiCOGppKAJI6nnIwQGiKZSViB2YqB+KHtxjjXMsxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdghinmmGSW6UsEADs='
    }


});
