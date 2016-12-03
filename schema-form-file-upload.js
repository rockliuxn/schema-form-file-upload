angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/upload/file_upload.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess()}\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <div class=\"form-group\">\n    <div class=\"gallery-box\">\n      <span ng-show=\"$$value$$.file_name\" class=\"title\">{{$$value$$.file_name}}</span>\n      <div ng-if=\"$$value$$\" class=\"img-thumbnail\">\n        <img width=\"200\" ng-src=\"{{ $$value$$ ? $$value$$.file_path : \'data:image/gif;base64,R0lGODdhyACWAOMAAO/v76qqqubm5t3d3bu7u7KystXV1cPDw8zMzAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAyACWAAAE/hDISau9OOvNu/9gKI5kaZ5oqq5s675wLM90bd94ru987//AoHBILBqPyKRyyWw6n9CodEqtWq/YrHbL7Xq/4LB4TC6bz+i0es1uu9/wuHxOr9vv+Lx+z+/7/4CBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3TAMFBQO4LAUBAQW+K8DCxCoGu73IzSUCwQECAwQBBAIVCMAFCBrRxwDQwQLKvOHV1xbUwQfYEwIHwO3BBBTawu2BA9HGwcMT1b7Vw/Dt3z563xAIrHCQnzsAAf0F6ybhwDdwgAx8OxDQgASN/sKUBWNmwQDIfwBAThRoMYDHCRYJGAhI8eRMf+4OFrgZgCKgaB4PHqg4EoBQbxgBROtlrJu4ofYm0JMQkJk/mOMkTA10Vas1CcakJrXQ1eu/sF4HWhB3NphYlNsmxOWKsWtZtASTdsVb1mhEu3UDX3RLFyVguITzolQKji/GhgXNvhU7OICgsoflJr7Qd2/isgEPGGAruTTjnSZTXw7c1rJpznobf2Y9GYBjxIsJYQbXstfRDJ1luz6t2TDvosSJSpMw4GXG3TtT+hPpEoPJ6R89B7AaUrnolgWwnUQQEKVOAy199mlonPDfr3m/GeUHFjBhAf0SUh28+P12QOIIgDbcPdwgJV+Arf0jnwTwsHOQT/Hs1BcABObjDAcTXhiCOGppKAJI6nnIwQGiKZSViB2YqB+KHtxjjXMsxijjjDTWaOONOOao44489ujjj0AGKeSQRBZp5JFIJqnkkkw26eSTUEYp5ZRUVmnllVhmqeWWXHbp5ZdghinmmGSW6UsEADs=\'}}\" />\n      </div>\n      <div flow-init=\"form.flowOptions\" flow-files-submitted=\"$flow.upload()\"\n         flow-file-added=\"!flow.imageOnly || !!{png:1,gif:1,jpg:1,jpeg:1}[$file.getExtension()]\"\n         flow-drop flow-drop-enabled=\"!!flow.dropEnabled\"\n         flow-drag-enter=\"!!flow.dropEnabled ? flowClass=\'flow-drag-enter\' : flowClass={}\" flow-drag-leave=\"flowClass={}\" ng-class=\"flowClass\"\n         flow-file-success=\"$$value$$=form.fileSuccess($message)\"\n         >\n        <div class=\"file-upload-wrapper center-block\">\n          <div ng-if=\"$flow.files.length\" ng-hide=\"$flow.files[0].progress()==1\" class=\"progress progress-striped\" ng-class=\"{active: $flow.files[0].isUploading()}\">\n            <div class=\"progress-bar\" role=\"progressbar\"\n                 aria-valuenow=\"{{$flow.files[0].progress() * 100}}\"\n                 aria-valuemin=\"0\"\n                 aria-valuemax=\"100\"\n                 ng-style=\"{width: ($flow.files[0].progress() * 100) + \'%\'}\">\n              <span class=\"sr-only\">{{$flow.files[0].progress()}}% Complete</span>\n            </div>\n          </div>\n          <div class=\"buttons\">\n            <span class=\"btn btn-flat btn-primary\" flow-btn=\"\">{{\'buttons.FileUpload\' | translate }}<input type=\"file\" multiple=\"multiple\" style=\"visibility: hidden; position: absolute;\"></span>\n          </div>\n        </div>\n      </div>\n\n      <input type=\"hidden\" sf-changed=\"form\" ng-model=\"$$value$$\" schema-validate=\"form\" />\n      <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || form.description}}</span>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n</div>\n");}]);
angular.module('schemaForm-file-upload', ['schemaForm', 'flow']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var file_upload = function(name, schema, options) {
    if (schema.type === 'object' && schema.format == 'file_upload') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'file_upload';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.object.unshift(file_upload);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'file_upload',
    'directives/decorators/bootstrap/upload/file_upload.html');
    schemaFormDecoratorsProvider.createDirective('file_upload',
    'directives/decorators/bootstrap/upload/file_upload.html');
  }]);
