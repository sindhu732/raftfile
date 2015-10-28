'use strict';

var strVar = "";
strVar += "<div class='input-group date' data-ng-model=\"toDate\" id='toDatePicker'>";
strVar += "      <input type='text' placeholder=\"To Date\" class=\"form-control\" \/>";
strVar += "      <span class=\"input-group-addon\">";
strVar += "        <span class=\"glyphicon glyphicon-calendar\"><\/span>";
strVar += "      <\/span>";
strVar += "    <\/div>";

angular.module('mean.submit').
directive('datePicker', function() {
  return {
    template: strVar,
    restrict:'A',
    link: function(scope, element, attrs) {
      console.log(element);
      $(element).datetimepicker();
    }
  }
})
