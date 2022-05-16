(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["node-modules/cl-uni/components/cl-tabs/cl-tabs"],{

/***/ 190:
/*!****************************************************************************************!*\
  !*** D:/WebProject/Book-Lending-fe/node_modules/cl-uni/components/cl-tabs/cl-tabs.vue ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cl_tabs_vue_vue_type_template_id_26f732b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cl-tabs.vue?vue&type=template&id=26f732b0& */ 191);
/* harmony import */ var _cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cl-tabs.vue?vue&type=script&lang=js& */ 193);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);

var renderjs




/* normalize component */

var component = Object(_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cl_tabs_vue_vue_type_template_id_26f732b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cl_tabs_vue_vue_type_template_id_26f732b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _cl_tabs_vue_vue_type_template_id_26f732b0___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "node_modules/cl-uni/components/cl-tabs/cl-tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 191:
/*!***********************************************************************************************************************!*\
  !*** D:/WebProject/Book-Lending-fe/node_modules/cl-uni/components/cl-tabs/cl-tabs.vue?vue&type=template&id=26f732b0& ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_template_id_26f732b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cl-tabs.vue?vue&type=template&id=26f732b0& */ 192);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_template_id_26f732b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_template_id_26f732b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_template_id_26f732b0___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_template_id_26f732b0___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 192:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WebProject/Book-Lending-fe/node_modules/cl-uni/components/cl-tabs/cl-tabs.vue?vue&type=template&id=26f732b0& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    clIcon: function() {
      return Promise.all(/*! import() | node-modules/cl-uni/components/cl-icon/cl-icon */[__webpack_require__.e("common/vendor"), __webpack_require__.e("node-modules/cl-uni/components/cl-icon/cl-icon")]).then(__webpack_require__.bind(null, /*! cl-uni/components/cl-icon/cl-icon.vue */ 237))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  var s0 = _vm.__get_style([_vm.style])

  var s1 = _vm.showDropdown ? _vm.__get_style([_vm.style]) : null
  _vm.$mp.data = Object.assign(
    {},
    {
      $root: {
        s0: s0,
        s1: s1
      }
    }
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 193:
/*!*****************************************************************************************************************!*\
  !*** D:/WebProject/Book-Lending-fe/node_modules/cl-uni/components/cl-tabs/cl-tabs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./cl-tabs.vue?vue&type=script&lang=js& */ 194);
/* harmony import */ var _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_cl_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 194:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/WebProject/Book-Lending-fe/node_modules/cl-uni/components/cl-tabs/cl-tabs.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 33));



























































































var _utils = __webpack_require__(/*! ../../utils */ 16);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}
/**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * tabs 选项卡
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @description 选项卡，支持滑动，自定义内容
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @tutorial https://docs.cool-js.com/uni/components/nav/tabs.html
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {String, Number} value 绑定值
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {Array} labels 标签列表
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {Boolean} loop 是否循环显示，默认true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {Boolean} swipeable 是否滑动
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {Number} swipeThreshold 滑动阈值，默认60
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {Boolean} sticky 是否吸顶
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {String} stickyTop 吸顶顶部距离
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {Boolean} scrollView 是否滚动视图，默认true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {Boolean} fill 标签是否填充
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {String} justify 水平布局
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {Boolean} border 是否带有下边框，默认true
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {Number} gutter 标签间隔，默认20
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {String} color 字体及浮标颜色，默认主色
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {Boolean} showDropdown 是否显示下拉按钮
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @property {String, Number} height 高度，默认80
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     * @example 见教程
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     */var _default =

{
  name: "cl-tabs",

  componentName: "ClTabs",

  props: {
    // 绑定值
    value: [String, Number],
    // 离开前
    beforeLeave: Function,
    // 标签列表
    labels: {
      type: Array,
      default: null },

    // 是否循环显示
    loop: {
      type: Boolean,
      default: true },

    // 是否滑动
    swipeable: Boolean,
    // 滑动阈值
    swipeThreshold: {
      type: Number,
      default: 60 },

    // 是否吸顶
    sticky: Boolean,
    // 吸顶顶部距离
    stickyTop: String,
    // 是否滚动视图
    scrollView: {
      type: Boolean,
      default: true },

    // 标签是否填充
    fill: Boolean,
    // 水平布局
    justify: {
      type: String,
      default: "start" },

    // 是否带有下边框
    border: {
      type: Boolean,
      default: true },

    // 标签间隔
    gutter: {
      type: Number,
      default: 20 },

    // 字体及浮标颜色，默认主色
    color: {
      type: String,
      default: "" },

    // 未选中字体颜色
    unColor: {
      type: String,
      default: "" },

    // 背景颜色
    backgroundColor: {
      type: String,
      default: "#fff" },

    // 是否显示下拉
    showDropdown: Boolean,
    // 高度
    height: {
      type: [String, Number],
      default: 80 } },



  data: function data() {
    return {
      list: [],
      current: 0,
      lineLeft: 0,
      scrollLeft: 0,
      clientX: "",
      clientY: "",
      offsetLeft: 0,
      width: 375,
      dropdown: {
        visible: false,
        height: "200rpx",
        timer: null } };


  },

  watch: {
    value: {
      immediate: true,
      handler: function handler(val) {
        this.current = val || 0;
      } },


    current: function current(val) {
      this.onOffset(val);
    },

    labels: function labels() {
      this.refresh();
    } },


  computed: {
    tabs: function tabs() {
      return (this.labels || this.list).map(function (e, i) {
        e.name = e.name === undefined ? i : e.name;
        return e;
      });
    },

    isSticky: function isSticky() {
      return this.sticky ? "cl-tabs--sticky" : "";
    },

    classList: function classList() {
      var list = [];

      if (this.$slots.default || this.$slots.$default) {
        list.push("is-content");
      }

      if (this.sticky) {
        list.push("is-sticky");
      }

      if (this.fill) {
        list.push("is-fill");
      }

      if (this.border) {
        list.push("is-border");
      }

      if (this.showDropdown) {
        list.push("is-dropdown");
      }

      return list.join(" ");
    },

    style: function style() {
      return {
        height: (0, _utils.isNumber)(this.height) ? "".concat(this.height, "rpx") : this.height,
        backgroundColor: this.backgroundColor };

    } },


  mounted: function mounted() {
    this.refresh();
  },

  methods: {
    refresh: function refresh() {var _this = this;
      this.$nextTick(function () {





        var children = _this.$children;


        _this.list = children.map(function (e, i) {
          return {
            label: e.label,
            prefixIcon: e.prefixIcon,
            suffixIcon: e.suffixIcon,
            lazy: e.lazy };

        });

        // 获取选项卡宽度
        uni.createSelectorQuery().

        in(_this).

        select(".cl-tabs").
        boundingClientRect(function (d) {
          _this.offsetLeft = d.left;
          _this.width = d.width;
          _this.getRect();
        }).
        exec();
      });
    },

    onTouchStart: function onTouchStart(e) {
      this.clientX = e.changedTouches[0].clientX;
      this.clientY = e.changedTouches[0].clientY;
    },

    onTouchEnd: function onTouchEnd(e) {
      var subX = e.changedTouches[0].clientX - this.clientX;
      var subY = e.changedTouches[0].clientY - this.clientY;

      // 判断手势滑动方式
      if (this.swipeable) {
        if (subY < 50 && subY > -50) {
          if (subX > this.swipeThreshold) {
            this.prev();
          } else if (subX < -this.swipeThreshold) {
            this.next();
          }
        }
      }
    },

    onDropdown: function onDropdown() {var _this2 = this;
      this.dropdown.visible = !this.dropdown.visible;

      // 清除计时器
      clearTimeout(this.dropdown.timer);

      if (this.dropdown.visible) {
        var fn = function fn() {
          uni.createSelectorQuery().

          in(_this2).

          select(".cl-tabs__dropdown-box").
          boundingClientRect(function (res) {
            _this2.dropdown.height = res.height + "px";
          }).
          exec();
        };

        // 获取下拉区域高度
        this.dropdown.timer = setTimeout(fn, 300);
      }
    },

    closeDropdown: function closeDropdown() {
      this.dropdown.visible = false;
    },

    change: function change(index) {var _this3 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var name, flag, fn;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                name = _this3.tabs[index].name;

                flag = true;if (!

                _this3.beforeLeave) {_context.next = 11;break;}
                fn = _this3.beforeLeave(name);if (!(

                !!fn && typeof fn.then === "function")) {_context.next = 10;break;}_context.next = 7;return (
                  fn.catch(function () {return null;}));case 7:flag = !!_context.sent;_context.next = 11;break;case 10:

                flag = fn;case 11:



                if (flag) {
                  _this3.$emit("input", name);
                  _this3.$emit("tab-change", name);
                  _this3.current = name;
                }case 12:case "end":return _context.stop();}}}, _callee);}))();
    },

    getIndex: function getIndex() {var _this4 = this;
      return this.tabs.findIndex(function (e) {return e.name == _this4.current;});
    },

    prev: function prev() {
      var index = this.getIndex();

      this.change(index <= 0 ? this.loop ? this.list.length - 1 : 0 : index - 1);
    },

    next: function next() {
      var index = this.getIndex();

      this.change(
      index >= this.list.length - 1 ? this.loop ? 0 : this.list.length - 1 : index + 1);

    },

    getRect: function getRect() {var _this5 = this;
      this.$nextTick(function () {
        uni.createSelectorQuery().
        in(_this5).
        selectAll(".cl-tabs__bar-item").
        fields({ rect: true, size: true }).
        exec(function (d) {
          _this5.tabRect = d[0];
          _this5.onOffset();
        });
      });
    },

    onOffset: function onOffset() {var _this6 = this;
      if (this.tabRect) {
        this.$nextTick(function () {
          var item = _this6.tabRect[_this6.getIndex()];

          if (item) {
            var scrollLeft =
            item.left - (_this6.width - item.width) / 2 - _this6.offsetLeft;

            if (scrollLeft < 0) {
              scrollLeft = 0;
            }

            _this6.scrollLeft = scrollLeft;
            _this6.lineLeft = item.left + item.width / 2 - 8 - _this6.offsetLeft;
          }
        });
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

}]);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/node-modules/cl-uni/components/cl-tabs/cl-tabs.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'node-modules/cl-uni/components/cl-tabs/cl-tabs-create-component',
    {
        'node-modules/cl-uni/components/cl-tabs/cl-tabs-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(190))
        })
    },
    [['node-modules/cl-uni/components/cl-tabs/cl-tabs-create-component']]
]);
