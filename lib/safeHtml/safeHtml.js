'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TemplateTag = require('../TemplateTag');

var _TemplateTag2 = _interopRequireDefault(_TemplateTag);

var _stripIndentTransformer = require('../stripIndentTransformer');

var _stripIndentTransformer2 = _interopRequireDefault(_stripIndentTransformer);

var _inlineArrayTransformer = require('../inlineArrayTransformer');

var _inlineArrayTransformer2 = _interopRequireDefault(_inlineArrayTransformer);

var _trimResultTransformer = require('../trimResultTransformer');

var _trimResultTransformer2 = _interopRequireDefault(_trimResultTransformer);

var _splitStringTransformer = require('../splitStringTransformer');

var _splitStringTransformer2 = _interopRequireDefault(_splitStringTransformer);

var _replaceSubstitutionTransformer = require('../replaceSubstitutionTransformer');

var _replaceSubstitutionTransformer2 = _interopRequireDefault(_replaceSubstitutionTransformer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var safeHtml = new _TemplateTag2.default((0, _splitStringTransformer2.default)('\n'), _inlineArrayTransformer2.default, _stripIndentTransformer2.default, _trimResultTransformer2.default, (0, _replaceSubstitutionTransformer2.default)(/&/g, '&amp;'), (0, _replaceSubstitutionTransformer2.default)(/</g, '&lt;'), (0, _replaceSubstitutionTransformer2.default)(/>/g, '&gt;'), (0, _replaceSubstitutionTransformer2.default)(/"/g, '&quot;'), (0, _replaceSubstitutionTransformer2.default)(/'/g, '&#x27;'), (0, _replaceSubstitutionTransformer2.default)(/`/g, '&#x60;'));

exports.default = safeHtml;
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zYWZlSHRtbC9zYWZlSHRtbC5qcyJdLCJuYW1lcyI6WyJzYWZlSHRtbCIsIlRlbXBsYXRlVGFnIiwiaW5saW5lQXJyYXlUcmFuc2Zvcm1lciIsInN0cmlwSW5kZW50VHJhbnNmb3JtZXIiLCJ0cmltUmVzdWx0VHJhbnNmb3JtZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTUEsV0FBVyxJQUFJQyxxQkFBSixDQUNmLHNDQUF1QixJQUF2QixDQURlLEVBRWZDLGdDQUZlLEVBR2ZDLGdDQUhlLEVBSWZDLCtCQUplLEVBS2YsOENBQStCLElBQS9CLEVBQXFDLE9BQXJDLENBTGUsRUFNZiw4Q0FBK0IsSUFBL0IsRUFBcUMsTUFBckMsQ0FOZSxFQU9mLDhDQUErQixJQUEvQixFQUFxQyxNQUFyQyxDQVBlLEVBUWYsOENBQStCLElBQS9CLEVBQXFDLFFBQXJDLENBUmUsRUFTZiw4Q0FBK0IsSUFBL0IsRUFBcUMsUUFBckMsQ0FUZSxFQVVmLDhDQUErQixJQUEvQixFQUFxQyxRQUFyQyxDQVZlLENBQWpCOztrQkFhZUosUSIsImZpbGUiOiJzYWZlSHRtbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUZW1wbGF0ZVRhZyBmcm9tICcuLi9UZW1wbGF0ZVRhZyc7XG5pbXBvcnQgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lciBmcm9tICcuLi9zdHJpcEluZGVudFRyYW5zZm9ybWVyJztcbmltcG9ydCBpbmxpbmVBcnJheVRyYW5zZm9ybWVyIGZyb20gJy4uL2lubGluZUFycmF5VHJhbnNmb3JtZXInO1xuaW1wb3J0IHRyaW1SZXN1bHRUcmFuc2Zvcm1lciBmcm9tICcuLi90cmltUmVzdWx0VHJhbnNmb3JtZXInO1xuaW1wb3J0IHNwbGl0U3RyaW5nVHJhbnNmb3JtZXIgZnJvbSAnLi4vc3BsaXRTdHJpbmdUcmFuc2Zvcm1lcic7XG5pbXBvcnQgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyIGZyb20gJy4uL3JlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcic7XG5cbmNvbnN0IHNhZmVIdG1sID0gbmV3IFRlbXBsYXRlVGFnKFxuICBzcGxpdFN0cmluZ1RyYW5zZm9ybWVyKCdcXG4nKSxcbiAgaW5saW5lQXJyYXlUcmFuc2Zvcm1lcixcbiAgc3RyaXBJbmRlbnRUcmFuc2Zvcm1lcixcbiAgdHJpbVJlc3VsdFRyYW5zZm9ybWVyLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLyYvZywgJyZhbXA7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvPC9nLCAnJmx0OycpLFxuICByZXBsYWNlU3Vic3RpdHV0aW9uVHJhbnNmb3JtZXIoLz4vZywgJyZndDsnKSxcbiAgcmVwbGFjZVN1YnN0aXR1dGlvblRyYW5zZm9ybWVyKC9cIi9nLCAnJnF1b3Q7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvJy9nLCAnJiN4Mjc7JyksXG4gIHJlcGxhY2VTdWJzdGl0dXRpb25UcmFuc2Zvcm1lcigvYC9nLCAnJiN4NjA7JyksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBzYWZlSHRtbDtcbiJdfQ==