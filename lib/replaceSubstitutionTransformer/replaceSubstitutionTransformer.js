'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
  return {
    onSubstitution: function onSubstitution(substitution, resultSoFar) {
      if (replaceWhat == null || replaceWith == null) {
        throw new Error('replaceSubstitutionTransformer requires at least 2 arguments.');
      }

      // Do not touch if null or undefined
      if (substitution == null) {
        return substitution;
      } else {
        return substitution.toString().replace(replaceWhat, replaceWith);
      }
    }
  };
};

exports.default = replaceSubstitutionTransformer;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIvcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyLmpzIl0sIm5hbWVzIjpbInJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciIsInJlcGxhY2VXaGF0IiwicmVwbGFjZVdpdGgiLCJvblN1YnN0aXR1dGlvbiIsInN1YnN0aXR1dGlvbiIsInJlc3VsdFNvRmFyIiwiRXJyb3IiLCJ0b1N0cmluZyIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsaUNBQWlDLFNBQWpDQSw4QkFBaUMsQ0FBQ0MsV0FBRCxFQUFjQyxXQUFkO0FBQUEsU0FBK0I7QUFDcEVDLGtCQURvRSwwQkFDckRDLFlBRHFELEVBQ3ZDQyxXQUR1QyxFQUMxQjtBQUN4QyxVQUFJSixlQUFlLElBQWYsSUFBdUJDLGVBQWUsSUFBMUMsRUFBZ0Q7QUFDOUMsY0FBTSxJQUFJSSxLQUFKLENBQ0osK0RBREksQ0FBTjtBQUdEOztBQUVEO0FBQ0EsVUFBSUYsZ0JBQWdCLElBQXBCLEVBQTBCO0FBQ3hCLGVBQU9BLFlBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPQSxhQUFhRyxRQUFiLEdBQXdCQyxPQUF4QixDQUFnQ1AsV0FBaEMsRUFBNkNDLFdBQTdDLENBQVA7QUFDRDtBQUNGO0FBZG1FLEdBQS9CO0FBQUEsQ0FBdkM7O2tCQWlCZUYsOEIiLCJmaWxlIjoicmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyID0gKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCkgPT4gKHtcbiAgb25TdWJzdGl0dXRpb24oc3Vic3RpdHV0aW9uLCByZXN1bHRTb0Zhcikge1xuICAgIGlmIChyZXBsYWNlV2hhdCA9PSBudWxsIHx8IHJlcGxhY2VXaXRoID09IG51bGwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lciByZXF1aXJlcyBhdCBsZWFzdCAyIGFyZ3VtZW50cy4nLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBEbyBub3QgdG91Y2ggaWYgbnVsbCBvciB1bmRlZmluZWRcbiAgICBpZiAoc3Vic3RpdHV0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdWJzdGl0dXRpb24udG9TdHJpbmcoKS5yZXBsYWNlKHJlcGxhY2VXaGF0LCByZXBsYWNlV2l0aCk7XG4gICAgfVxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcjtcbiJdfQ==