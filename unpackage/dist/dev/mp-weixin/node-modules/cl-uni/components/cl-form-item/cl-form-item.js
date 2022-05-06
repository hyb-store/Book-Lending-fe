(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/cl-uni/components/cl-form-item/cl-form-item"],{

/***/ 191:
/*!*******************************************************************************************!*\
  !*** E:/hyb/Book-Lending-fe/node_modules/cl-uni/components/cl-form-item/cl-form-item.vue ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cl_form_item_vue_vue_type_template_id_74cdc63c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cl-form-item.vue?vue&type=template&id=74cdc63c& */ 192);
/* harmony import */ var _cl_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cl-form-item.vue?vue&type=script&lang=js& */ 194);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cl_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cl_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs




/* normalize component */

var component = Object(_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cl_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cl_form_item_vue_vue_type_template_id_74cdc63c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cl_form_item_vue_vue_type_template_id_74cdc63c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _cl_form_item_vue_vue_type_template_id_74cdc63c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/cl-uni/components/cl-form-item/cl-form-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 192:
/*!**************************************************************************************************************************!*\
  !*** E:/hyb/Book-Lending-fe/node_modules/cl-uni/components/cl-form-item/cl-form-item.vue?vue&type=template&id=74cdc63c& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_template_id_74cdc63c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cl-form-item.vue?vue&type=template&id=74cdc63c& */ 193);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_template_id_74cdc63c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_template_id_74cdc63c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_template_id_74cdc63c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_template_id_74cdc63c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 193:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/hyb/Book-Lending-fe/node_modules/cl-uni/components/cl-form-item/cl-form-item.vue?vue&type=template&id=74cdc63c& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  if (_vm.$scope.data.scopedSlotsCompiler === "augmented") {
    _vm.$setScopedSlotsParams("error", {
      message: _vm.message,
      error: _vm.showMessage2
    })
  }
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 194:
/*!********************************************************************************************************************!*\
  !*** E:/hyb/Book-Lending-fe/node_modules/cl-uni/components/cl-form-item/cl-form-item.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cl-form-item.vue?vue&type=script&lang=js& */ 195);
/* harmony import */ var _F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_F_uni_app_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_form_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 195:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!E:/hyb/Book-Lending-fe/node_modules/cl-uni/components/cl-form-item/cl-form-item.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;





















var _asyncValidator = _interopRequireDefault(__webpack_require__(/*! ../../utils/async-validator */ 190));
var _emitter = _interopRequireDefault(__webpack_require__(/*! ../../mixins/emitter */ 14));
var _parent = _interopRequireDefault(__webpack_require__(/*! ../../mixins/parent */ 196));
var _utils = __webpack_require__(/*! ../../utils */ 15);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}

/**
                                                                                                                                                                                                                                                                                                                                             * form-item 表单项
                                                                                                                                                                                                                                                                                                                                             * @description 表单项，基于 async-validator 的验证
                                                                                                                                                                                                                                                                                                                                             * @tutorial https://docs.cool-js.com/uni/components/form/rules.html
                                                                                                                                                                                                                                                                                                                                             * @property {Object} model 表单数据对象
                                                                                                                                                                                                                                                                                                                                             * @property {Object} rules 表单验证规则
                                                                                                                                                                                                                                                                                                                                             * @property {Boolean} border 是否带有边框
                                                                                                                                                                                                                                                                                                                                             * @property {Boolean} showMessage 是否显示消息提示
                                                                                                                                                                                                                                                                                                                                             * @property {String} labelWidth 表单域标签的宽度，默认150rpx
                                                                                                                                                                                                                                                                                                                                             * @property {String} labelPosition 表单域标签的位置，默认right
                                                                                                                                                                                                                                                                                                                                             * @property {String} justify 水平布局，默认start
                                                                                                                                                                                                                                                                                                                                             * @property {String} validateOnRuleChange 是否在 rules 属性改变后立即触发一次验证，默认true
                                                                                                                                                                                                                                                                                                                                             * @example <cl-form-item prop="name"></cl-form-item>
                                                                                                                                                                                                                                                                                                                                             */var _default =

{
  name: "cl-form-item",
  componentName: "ClFormItem",

  props: {
    // 表单域 model 字段
    prop: String,
    // 标签文本
    label: String,
    // 表单域标签的的宽度
    labelWidth: String,
    // 表单域标签的位置
    labelPosition: String,
    // 是否显示消息提示
    showMessage: {
      type: Boolean,
      default: false },

    // 水平布局
    justify: {
      type: String,
      default: "start" },

    // 是否在 rules 属性改变后立即触发一次验证
    validateOnRuleChange: {
      type: Boolean,
      default: false } },



  mixins: [_emitter.default, _parent.default],

  data: function data() {
    return {
      required: false,
      message: "",
      error: false,
      validator: null,
      Keys: [
      "labelWidth",
      "labelPosition",
      "showMessage",
      "model",
      "removeField",
      "rules2",
      "validateOnRuleChange"],

      ComponentName: "ClForm" };

  },

  computed: {
    label2: function label2() {
      return this.label == "true" ? "" : this.label;
    },

    labelWidth2: function labelWidth2() {
      return this.labelWidth || this.parent.labelWidth;
    },

    labelPosition2: function labelPosition2() {
      return this.labelPosition || this.parent.labelPosition;
    },

    showMessage2: function showMessage2() {
      return (this.showMessage || this.parent.showMessage) && this.error;
    },

    contentWidth: function contentWidth() {
      return "calc(100% - ".concat(this.labelWidth, " - 20rpx)");
    },

    isJustify: function isJustify() {
      return this.justify !== "start" ? "is-justify-".concat(this.justify) : "";
    },

    isRequired: function isRequired() {
      return this.required ? "cl-form-item--required" : "";
    },

    isError: function isError() {
      return this.required && this.error ? "cl-form-item--error" : "";
    },

    isSuffix: function isSuffix() {
      return this.$slots.suffix ? "cl-form-item--suffix" : "";
    },

    isLabelPosition: function isLabelPosition() {
      return this.labelPosition2 ? "cl-form-item--".concat(this.labelPosition2) : "";
    } },


  created: function created() {var _this = this;
    this.$on("form.event", function (_ref) {var props = _ref.props,action = _ref.action,model = _ref.model,rules = _ref.rules;
      var isValid = props.includes(_this.prop);

      switch (action) {
        case "change-rule":
          _this.changeRule(rules);
          break;

        case "validate":
          if (isValid) {
            _this.validate(model[_this.prop]);
          }
          break;

        case "clearValidate":
          if (isValid) {
            _this.clearValidate();
          }
          break;}

    });
  },

  mounted: function mounted() {
    // 初始化验证规则
    this.changeRule(this.parent.rules2);
  },

  destroyed: function destroyed() {
    if (this.parent.removeField) {
      this.parent.removeField(this.prop);
    }
  },

  methods: {
    changeRule: function changeRule(rules) {var _this2 = this;
      if (!rules) {
        return false;
      }

      var rule = rules[this.prop];

      if (rule) {
        this.required = false;
        this.clearValidate();

        if ((0, _utils.isArray)(rule)) {
          rule.forEach(function (e) {
            if (e.required) {
              _this2.required = e.required;
            }

            if (e.message) {
              _this2.message = e.message;
            }
          });
        } else {
          this.required = rule.required;
          this.message = rule.message;
        }

        // 检验器
        this.validator = new _asyncValidator.default(_defineProperty({},
        this.prop, rule));


        // 是否在 rules 属性改变后立即触发一次验证
        if (this.validateOnRuleChange || this.parent.validateOnRuleChange) {
          this.validate(this.parent.model[this.prop]);
        }
      }
    },

    validate: function validate(val) {var _this3 = this;
      if (this.required) {
        this.validator.validate(_defineProperty({}, this.prop, val), function (errors, fields) {
          _this3.error = Boolean(errors);
          _this3.message = errors[0].message;
        });
      }
    },

    clearValidate: function clearValidate() {
      this.error = false;
      this.message = "";
    } } };exports.default = _default;

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/cl-uni/components/cl-form-item/cl-form-item.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/cl-uni/components/cl-form-item/cl-form-item-create-component',
    {
        'node-modules/cl-uni/components/cl-form-item/cl-form-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(191))
        })
    },
    [['node-modules/cl-uni/components/cl-form-item/cl-form-item-create-component']]
]);
