'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isValidValue = function isValidValue(x) {
  return x != null && !Number.isNaN(x) && typeof x !== 'boolean';
};

var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
  return {
    onSubstitution: function onSubstitution(substitution) {
      if (Array.isArray(substitution)) {
        return substitution.filter(isValidValue);
      }
      if (isValidValue(substitution)) {
        return substitution;
      }
      return '';
    }
  };
};

exports.default = removeNonPrintingValuesTransformer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyL3JlbW92ZU5vblByaW50aW5nVmFsdWVzVHJhbnNmb3JtZXIuanMiXSwibmFtZXMiOlsiaXNWYWxpZFZhbHVlIiwieCIsIk51bWJlciIsImlzTmFOIiwicmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lciIsIm9uU3Vic3RpdHV0aW9uIiwic3Vic3RpdHV0aW9uIiwiQXJyYXkiLCJpc0FycmF5IiwiZmlsdGVyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQU1BLGVBQWUsU0FBZkEsWUFBZTtBQUFBLFNBQ25CQyxLQUFLLElBQUwsSUFBYSxDQUFDQyxPQUFPQyxLQUFQLENBQWFGLENBQWIsQ0FBZCxJQUFpQyxPQUFPQSxDQUFQLEtBQWEsU0FEM0I7QUFBQSxDQUFyQjs7QUFHQSxJQUFNRyxxQ0FBcUMsU0FBckNBLGtDQUFxQztBQUFBLFNBQU87QUFDaERDLGtCQURnRCwwQkFDakNDLFlBRGlDLEVBQ25CO0FBQzNCLFVBQUlDLE1BQU1DLE9BQU4sQ0FBY0YsWUFBZCxDQUFKLEVBQWlDO0FBQy9CLGVBQU9BLGFBQWFHLE1BQWIsQ0FBb0JULFlBQXBCLENBQVA7QUFDRDtBQUNELFVBQUlBLGFBQWFNLFlBQWIsQ0FBSixFQUFnQztBQUM5QixlQUFPQSxZQUFQO0FBQ0Q7QUFDRCxhQUFPLEVBQVA7QUFDRDtBQVQrQyxHQUFQO0FBQUEsQ0FBM0M7O2tCQVllRixrQyIsImZpbGUiOiJyZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaXNWYWxpZFZhbHVlID0geCA9PlxuICB4ICE9IG51bGwgJiYgIU51bWJlci5pc05hTih4KSAmJiB0eXBlb2YgeCAhPT0gJ2Jvb2xlYW4nO1xuXG5jb25zdCByZW1vdmVOb25QcmludGluZ1ZhbHVlc1RyYW5zZm9ybWVyID0gKCkgPT4gKHtcbiAgb25TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3Vic3RpdHV0aW9uKSkge1xuICAgICAgcmV0dXJuIHN1YnN0aXR1dGlvbi5maWx0ZXIoaXNWYWxpZFZhbHVlKTtcbiAgICB9XG4gICAgaWYgKGlzVmFsaWRWYWx1ZShzdWJzdGl0dXRpb24pKSB7XG4gICAgICByZXR1cm4gc3Vic3RpdHV0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVtb3ZlTm9uUHJpbnRpbmdWYWx1ZXNUcmFuc2Zvcm1lcjtcbiJdfQ==