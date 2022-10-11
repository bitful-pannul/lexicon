'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var styled = require('styled-components');
var styledSystem = require('styled-system');
var React = require('react');
var polished = require('polished');
var hooks = require('@datepicker-react/hooks');
var sigilJs = require('@tlon/sigil-js');
var ReactDOM = require('react-dom');

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var styled__default = /*#__PURE__*/_interopDefault(styled);
var React__namespace = /*#__PURE__*/_interopNamespace(React);
var ReactDOM__default = /*#__PURE__*/_interopDefault(ReactDOM);

var Box = styled__default["default"].div.withConfig({
  displayName: "Box",
  componentId: "sc-3972ms-0"
})({
  display: 'inline-flex',
  boxSizing: 'border-box'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position));

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

var Flex = styled__default["default"](Box).withConfig({
  displayName: "Flex",
  componentId: "sc-17hpvwk-0"
})({
  display: 'flex',
  boxSizing: 'border-box',
  // @ts-ignore
  flex: function flex(props) {
    return props.fx;
  },
  // @ts-ignore
  gap: function gap(props) {
    return props.gap === _typeof('string') ? props.gap : "".concat(props.gap, "px");
  },
  //@ts-ignore
  alignItems: function alignItems(props) {
    return props.itemsCenter ? 'center' : 'initial';
  },
  //@ts-ignore
  justifyContent: function justifyContent(props) {
    return props.justifyCenter ? 'center' : 'initial';
  }
}, styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.position));
Flex.defaultProps = {
  gap: 0
};

var Grid = styled__default["default"](Box).withConfig({
  displayName: "Grid",
  componentId: "sc-ujqw1-0"
})({
  display: 'grid'
}, styledSystem.grid);

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

var CUSTOM_CONF = 'base';
var DIMENSIONS = ['xs', 'sm', 'md', 'lg', 'xl'];
var BASE_CONF = {
  mediaQuery: 'only screen',
  columns: {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12,
    xl: 12
  },
  gutterWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  paddingWidth: {
    xs: 1,
    sm: 1,
    md: 1.5,
    lg: 1.5,
    xl: 1.5
  },
  container: {
    xs: 'full',
    // 'full' = max-width: 100%
    sm: 'full',
    // 'full' = max-width: 100%
    md: 'full',
    // 'full' = max-width: 100%
    lg: 90,
    // max-width: 1440px
    xl: 90 // max-width: 1440px

  },
  breakpoints: {
    xs: 1,
    sm: 48,
    // 768px
    md: 64,
    // 1024px
    lg: 90,
    // 1440px
    xl: 120 // 1920px

  }
};
var configs = [];

var hasCustomConf = function hasCustomConf(props) {
  return JSON.stringify(props.theme && props.theme[CUSTOM_CONF] || {});
};

var resolveConfig = function resolveConfig(props) {
  var themeConf = props.theme && props.theme[CUSTOM_CONF] || {};

  var conf = _objectSpread2(_objectSpread2({}, BASE_CONF), themeConf);

  conf.media = Object.keys(conf.breakpoints).reduce(function (media, breakpoint) {
    var breakpointWidth = conf.breakpoints[breakpoint];
    media[breakpoint] = makeMedia([conf.mediaQuery, breakpointWidth >= 0 && "(min-width: ".concat(breakpointWidth, "rem)")].filter(Boolean).join(' and '));
    return media;
  }, {});
  return conf;
};

function config() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var customConf = hasCustomConf(props);

  if (configs[0] === customConf) {
    return configs[1];
  }

  var conf = resolveConfig(props);
  configs[0] = customConf;
  configs[1] = conf;
  return conf;
} // @ts-nocheck

function makeMedia(media) {
  // css();
  return function () {
    return styled.css(["@media ", "{", "}"], media, // @ts-expect-error
    styled.css.apply(void 0, arguments));
  };
}

var _templateObject$2, _templateObject2$2, _templateObject3$1, _templateObject4$1, _templateObject5, _templateObject6, _templateObject7;
var Column = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Column",
  componentId: "sc-1etip5k-1"
})(["box-sizing:border-box;flex:1 0 auto;max-width:100%;height:", ";", ";display:flex;flex-direction:column;", " ", " ", " ", " ", " ", " ", " ", ""], function (p) {
  return p.marginTop ? "calc(100% - ".concat(String(p.marginTop), ")") : 'fit-content';
}, function (props) {
  return props.gap && styled.css(["gap:", "px;"], props.gap);
}, function (p) {
  return !p.noGutter && styled.css(["", ""], DIMENSIONS.map(function (d) {
    return config(p).breakpoints[d] && config(p).media[d](_templateObject$2 || (_templateObject$2 = _taggedTemplateLiteral(["\n      padding-right: ", "rem;\n      padding-left: ", "rem;\n    "])), config(p).gutterWidth[d] / 2, config(p).gutterWidth[d] / 2);
  }));
}, function (p) {
  return styled.css(["", ""], DIMENSIONS.map(function (d) {
    return p[d] && config(p).breakpoints[d] && config(p).media[d](_templateObject2$2 || (_templateObject2$2 = _taggedTemplateLiteral(["\n      flex: 1 1 ", "%;\n      max-width: ", "%;\n    "])), p[d] / config(p).columns[d] * 100, p[d] / config(p).columns[d] * 100);
  }));
}, function (p) {
  return p.offset && styled.css(["", ""], DIMENSIONS.map(function (d) {
    return config(p).breakpoints[d] && config(p).media[d](_templateObject3$1 || (_templateObject3$1 = _taggedTemplateLiteral(["\n    ", ";\n    "])), _typeof(p.offset) === 'object' ? p.offset[d] !== undefined && "margin-left: ".concat(p.offset[d] > 0 ? p.offset[d] / config(p).columns[d] * 100 : 0, "%") : "margin-left: ".concat(p.offset / config(p).columns['xs'] * 100, "%"));
  }));
}, function (p) {
  return p.order !== undefined && styled.css(["", ""], DIMENSIONS.map(function (d) {
    return config(p).breakpoints[d] && config(p).media[d](_templateObject4$1 || (_templateObject4$1 = _taggedTemplateLiteral(["\n    ", ";\n    "])), _typeof(p.order) === 'object' ? p.order[d] !== undefined && "order: ".concat(p.order[d]) : "order: ".concat(p.order));
  }));
}, function (p) {
  return p.reverse && styled.css(["", ""], Array.isArray(p.reverse) ? DIMENSIONS.map(function (d) {
    return config(p).breakpoints[d] && config(p).media[d](_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n        flex-direction: ", ";\n      "])), Array.isArray(p.reverse) && p.reverse.indexOf(d) !== -1 ? 'column-reverse' : 'column');
  }) : 'flex-direction: column-reverse;');
}, function (p) {
  return p.align && styled.css(["", ""], _typeof(p.align) === 'object' ? DIMENSIONS.map(function (d) {
    return config(p).breakpoints[d] && config(p).media[d](_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["", ""])), p.align[d] && "align-items: ".concat(p.align[d]));
  }) : "align-items: ".concat(p.align, ";"));
}, function (p) {
  return p.justify && styled.css(["", ""], _typeof(p.justify) === 'object' ? DIMENSIONS.map(function (d) {
    return config(p).breakpoints[d] && config(p).media[d](_templateObject7 || (_templateObject7 = _taggedTemplateLiteral(["", ""])), p.justify[d] && "justify-content: ".concat(p.justify[d]));
  }) : "justify-content: ".concat(p.justify, ";"));
}, function (_ref) {
  var debug = _ref.debug;
  return debug && styled.css(["background-color:#5901ad40;outline:#fff solid 1px;"]);
})).withConfig({
  displayName: "Column",
  componentId: "sc-1etip5k-0"
})(styledSystem.compose(styledSystem.layout, styledSystem.space));
Column.displayName = 'Column';
Column.defaultProps = {
  debug: false // xs: 4,
  // sm: 8,
  // md: 8,
  // lg: 12,
  // xl: 12,

};

var _templateObject$1, _templateObject2$1, _templateObject3, _templateObject4;
var Row = styled__default["default"].div.withConfig({
  displayName: "Row",
  componentId: "sc-1crndfl-0"
})(["box-sizing:border-box;display:flex;flex:1 1 auto;flex-wrap:wrap;", " ", " ", " ", " ", " ", ""], function (p) {
  return p.fill && styled.css(["width:100%;"]);
}, function (p) {
  return styled.css(["", ""], DIMENSIONS.map(function (d) {
    return config(p).container[d] && config(p).media[d](_templateObject$1 || (_templateObject$1 = _taggedTemplateLiteral(["\n      margin-left: -", "rem;\n      margin-right: -", "rem;\n    "])), config(p).gutterWidth[d] / 2, config(p).gutterWidth[d] / 2);
  }));
}, function (p) {
  return p.reverse && styled.css(["", ""], Array.isArray(p.reverse) ? DIMENSIONS.map(function (d) {
    return config(p).breakpoints[d] && config(p).media[d](_templateObject2$1 || (_templateObject2$1 = _taggedTemplateLiteral(["\n         ", ";\n        \n      "])), Array.isArray(p.reverse) && p.reverse.indexOf(d) !== -1 ? "\n             flex-direction: row-reverse;\n             flex-wrap: wrap-reverse;\n             " : "\n                 flex-direction: row;\n                 flex-wrap: wrap;\n               ");
  }) : "\n            flex-direction: row-reverse;\n            flex-wrap: wrap-reverse;\n          ");
}, function (p) {
  return p.align && styled.css(["", ""], _typeof(p.align) === 'object' ? DIMENSIONS.map(function (d) {
    return config(p).breakpoints[d] && config(p).media[d](_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["", ""])), p.align[d] && "align-items: ".concat(p.align[d]));
  }) : "align-items: ".concat(p.align, ";"));
}, function (p) {
  return p.justify && styled.css(["", ""], _typeof(p.justify) === 'object' ? DIMENSIONS.map(function (d) {
    return config(p).breakpoints[d] && config(p).media[d](_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["", ""])), p.justify[d] && "justify-content: ".concat(p.justify[d]));
  }) : "justify-content: ".concat(p.justify, ";"));
}, function (_ref) {
  var debug = _ref.debug;
  return debug && styled.css(["background-color:#5901ad40;outline:#fff solid 1px;"]);
});
Row.displayName = 'Row';
Row.defaultProps = {
  debug: false
};

var _templateObject, _templateObject2;
var Container$1 = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Container",
  componentId: "sc-6z65dl-1"
})(["margin-right:auto;margin-left:auto;width:100vw;max-width:100vw;height:", ";box-sizing:border-box;overflow-y:", ";color:", ";", " ", " ", ""], function (props) {
  return props.offset ? "calc(100% - ".concat(props.offset, "px)") : 'inherit';
}, function (props) {
  return props.scroll ? 'scroll' : 'visible';
}, function (props) {
  return props.theme.colors.text.primary;
}, function (p) {
  return styled.css(["", ""], DIMENSIONS.map(function (d) {
    return config(p).container[d] && config(p).media[d](_templateObject || (_templateObject = _taggedTemplateLiteral(["\n      padding-left: ", "rem;\n      padding-right: ", "rem;\n    "])), config(p).paddingWidth[d], config(p).paddingWidth[d]);
  }));
}, function (p) {
  return !p.fluid && styled.css(["", ""], DIMENSIONS.map(function (d) {
    return config(p).container[d] && config(p).media[d](_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n      ", "\n    "])), typeof config(p).container[d] === 'number' ? "max-width: ".concat(config(p).container[d], "rem;") : "width: 100%;");
  }));
}, function (_ref) {
  var debug = _ref.debug;
  return debug && styled.css(["background-color:#5901ad40;outline:#fff solid 1px;"]);
})).withConfig({
  displayName: "Container",
  componentId: "sc-6z65dl-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout));
Container$1.displayName = 'Container';
Container$1.defaultProps = {
  debug: false,
  scroll: false,
  offset: 0
};

var Grid2 = {
  Row: Row,
  Column: Column,
  Box: Container$1
};

var typographyFunctions = styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.typography);

var defaultTextStyles = {
  fontFamily: 'body',
  fontWeight: 'regular',
  lineHeight: 'solid',
  color: 'text.primary',
  mt: 0,
  mb: 0
};
var textVariants = styledSystem.variant({
  variants: {
    h1: _objectSpread2(_objectSpread2({}, defaultTextStyles), {}, {
      fontWeight: 'bold',
      lineHeight: 'copy',
      fontSize: 8
    }),
    h2: _objectSpread2(_objectSpread2({}, defaultTextStyles), {}, {
      fontWeight: 'semiBold',
      lineHeight: 'copy',
      fontSize: 7
    }),
    h3: _objectSpread2(_objectSpread2({}, defaultTextStyles), {}, {
      fontWeight: 'semiBold',
      lineHeight: 'title',
      fontSize: 6
    }),
    h4: _objectSpread2(_objectSpread2({}, defaultTextStyles), {}, {
      fontWeight: 'medium',
      lineHeight: 'title',
      fontSize: 5
    }),
    h5: _objectSpread2(_objectSpread2({}, defaultTextStyles), {}, {
      fontWeight: 'medium',
      lineHeight: 'title',
      fontSize: 4
    }),
    h6: _objectSpread2(_objectSpread2({}, defaultTextStyles), {}, {
      fontWeight: 'regular',
      lineHeight: 'normal',
      fontSize: 3
    }),
    body: _objectSpread2(_objectSpread2({}, defaultTextStyles), {}, {
      fontSize: 2
    }),
    caption: _objectSpread2(_objectSpread2({}, defaultTextStyles), {}, {
      fontSize: 2
    }),
    hint: _objectSpread2(_objectSpread2({}, defaultTextStyles), {}, {
      fontSize: 1
    }),
    label: _objectSpread2(_objectSpread2({}, defaultTextStyles), {}, {
      fontFamily: 'heading',
      fontSize: 2,
      fontWeight: '500'
    }),
    inherit: {
      mt: 0,
      mb: 0
    },
    patp: {
      mt: 0,
      mb: 0,
      fontWeight: 400,
      fontFamily: 'monospace',
      color: 'text.primary',
      fontSize: 2
    }
  }
});
var Text = styled__default["default"].p.withConfig({
  displayName: "Text",
  componentId: "sc-vod5mv-0"
})(["", " ", ";", ";", ""], textVariants, typographyFunctions, function (props) {
  return props.fontByName && styled.css(["font-family:", ";"], props.theme.fontByName[props.fontByName]);
}, function (props) {
  return props.fontByType && styled.css(["font-family:", ";"], props.theme.fonts[props.fontByType]);
});
Text.defaultProps = {
  variant: 'inherit'
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

var lastId = 0;
function uuid() {
  lastId++;
  return "icon-".concat(lastId);
}

var _excluded$12 = ["title"];
var SvgComponent$U = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$12);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
});
var SvgCheckCircle = styled__default["default"](SvgComponent$U).withConfig({
  displayName: "check-circle__SvgCheckCircle",
  componentId: "sc-1x4nyub-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$11 = ["title"];
var SvgComponent$T = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$11);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
  }));
});
var SvgCheckboxBlank = styled__default["default"](SvgComponent$T).withConfig({
  displayName: "checkbox-blank__SvgCheckboxBlank",
  componentId: "sc-1swzh8x-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$10 = ["title"];
var SvgComponent$S = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$10);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
  }));
});
var SvgCheckboxChecked = styled__default["default"](SvgComponent$S).withConfig({
  displayName: "checkbox-checked__SvgCheckboxChecked",
  componentId: "sc-7yuhdn-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$$ = ["title"];
var SvgComponent$R = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$$);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
  }));
});
var SvgCheckboxIndeterminate = styled__default["default"](SvgComponent$R).withConfig({
  displayName: "checkbox-indeterminate__SvgCheckboxIndeterminate",
  componentId: "sc-1m3c97k-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$_ = ["title"];
var SvgComponent$Q = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$_);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
  }));
});
var SvgClose = styled__default["default"](SvgComponent$Q).withConfig({
  displayName: "close__SvgClose",
  componentId: "sc-yzqlv4-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$Z = ["title"];
var SvgComponent$P = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$Z);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M4.61539 6.1978C4.61539 5.32386 5.32386 4.61539 6.19781 4.61539C7.07175 4.61539 7.78022 5.32386 7.78022 6.1978C7.78022 7.07175 7.07175 7.78022 6.19781 7.78022C5.32386 7.78022 4.61539 7.07175 4.61539 6.1978Z",
    fill: "currentcolor"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M4.6153 12.0001C4.6153 11.1261 5.32377 10.4177 6.19771 10.4177C7.07166 10.4177 7.78013 11.1261 7.78013 12.0001C7.78013 12.874 7.07166 13.5825 6.19771 13.5825C5.32377 13.5825 4.6153 12.874 4.6153 12.0001Z",
    fill: "currentcolor"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M4.6153 17.8022C4.6153 16.9283 5.32377 16.2198 6.19771 16.2198C7.07166 16.2198 7.78013 16.9283 7.78013 17.8022C7.78013 18.6762 7.07166 19.3846 6.19771 19.3846C5.32377 19.3846 4.6153 18.6762 4.6153 17.8022Z",
    fill: "currentcolor"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M10.4177 6.19783C10.4177 5.32389 11.1261 4.61542 12.0001 4.61542C12.874 4.61542 13.5825 5.32389 13.5825 6.19783C13.5825 7.07178 12.874 7.78025 12.0001 7.78025C11.1261 7.78025 10.4177 7.07178 10.4177 6.19783Z",
    fill: "currentcolor"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M10.4177 12.0001C10.4177 11.1261 11.1261 10.4177 12.0001 10.4177C12.874 10.4177 13.5825 11.1261 13.5825 12.0001C13.5825 12.874 12.874 13.5825 12.0001 13.5825C11.1261 13.5825 10.4177 12.874 10.4177 12.0001Z",
    fill: "currentcolor"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M10.4177 17.8022C10.4177 16.9283 11.1261 16.2198 12.0001 16.2198C12.874 16.2198 13.5825 16.9283 13.5825 17.8022C13.5825 18.6762 12.874 19.3846 12.0001 19.3846C11.1261 19.3846 10.4177 18.6762 10.4177 17.8022Z",
    fill: "currentcolor"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M16.2196 6.19783C16.2196 5.32389 16.928 4.61542 17.802 4.61542C18.6759 4.61542 19.3844 5.32389 19.3844 6.19783C19.3844 7.07178 18.6759 7.78025 17.802 7.78025C16.928 7.78025 16.2196 7.07178 16.2196 6.19783Z",
    fill: "currentcolor"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M16.2196 12.0001C16.2196 11.1261 16.928 10.4177 17.802 10.4177C18.6759 10.4177 19.3844 11.1261 19.3844 12.0001C19.3844 12.874 18.6759 13.5825 17.802 13.5825C16.928 13.5825 16.2196 12.874 16.2196 12.0001Z",
    fill: "currentcolor"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M16.2196 17.8022C16.2196 16.9283 16.928 16.2198 17.802 16.2198C18.6759 16.2198 19.3844 16.9283 19.3844 17.8022C19.3844 18.6762 18.6759 19.3846 17.802 19.3846C16.928 19.3846 16.2196 18.6762 16.2196 17.8022Z",
    fill: "currentcolor"
  }));
});
var SvgApps = styled__default["default"](SvgComponent$P).withConfig({
  displayName: "apps__SvgApps",
  componentId: "sc-1ggs5se-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$Y = ["title"];
var SvgComponent$O = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$Y);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
  }));
});
var SvgError = styled__default["default"](SvgComponent$O).withConfig({
  displayName: "error__SvgError",
  componentId: "sc-if5qbq-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$X = ["title"];
var SvgComponent$N = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$X);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentcolor",
    width: "1em",
    height: "1em",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
});
var SvgExpandMore = styled__default["default"](SvgComponent$N).withConfig({
  displayName: "expand-more__SvgExpandMore",
  componentId: "sc-1w3a32q-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$W = ["title"];
var SvgComponent$M = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$W);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
  }));
});
var SvgInfo = styled__default["default"](SvgComponent$M).withConfig({
  displayName: "info__SvgInfo",
  componentId: "sc-nluq1f-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$V = ["title"];
var SvgComponent$L = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$V);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1em",
    height: "1em",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"
  }));
});
var SvgLoader = styled__default["default"](SvgComponent$L).withConfig({
  displayName: "loader__SvgLoader",
  componentId: "sc-67zgax-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$U = ["title"];
var SvgComponent$K = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$U);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    height: "1em",
    viewBox: "0 0 24 24",
    width: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M0 0h24v24H0z",
    fill: "none"
  }));
});
var SvgPlace = styled__default["default"](SvgComponent$K).withConfig({
  displayName: "place__SvgPlace",
  componentId: "sc-8tiyvw-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$T = ["title"];
var SvgComponent$J = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$T);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
});
var SvgRadioChecked = styled__default["default"](SvgComponent$J).withConfig({
  displayName: "radio-checked__SvgRadioChecked",
  componentId: "sc-1p0vcvr-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$S = ["title"];
var SvgComponent$I = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$S);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }));
});
var SvgRadioUnchecked = styled__default["default"](SvgComponent$I).withConfig({
  displayName: "radio-unchecked__SvgRadioUnchecked",
  componentId: "sc-n75kjc-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$R = ["title"];
var SvgComponent$H = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$R);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
  }));
});
var SvgSearch = styled__default["default"](SvgComponent$H).withConfig({
  displayName: "search__SvgSearch",
  componentId: "sc-1xpj1s8-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$Q = ["title"];
var SvgComponent$G = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$Q);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
  }));
});
var SvgVisibility = styled__default["default"](SvgComponent$G).withConfig({
  displayName: "visibility__SvgVisibility",
  componentId: "sc-ml9kgl-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$P = ["title"];
var SvgComponent$F = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$P);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46A11.804 11.804 0 001 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"
  }));
});
var SvgVisibilityOff$q = styled__default["default"](SvgComponent$F).withConfig({
  displayName: "visibility-off__SvgVisibilityOff",
  componentId: "sc-1tcu4b9-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$O = ["title"];
var SvgComponent$E = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$O);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.5 8.76923C11.5 11.5448 9.933 12.5385 8 12.5385C11.866 12.5385 15 14.2419 15 19H1C1 14.2427 4.13296 12.539 7.99806 12.5385C6.06595 12.5378 4.5 11.5439 4.5 8.76923C4.5 5.99365 6.067 5 8 5C9.933 5 11.5 5.99365 11.5 8.76923ZM19.5 7C19.5 6.44772 19.0523 6 18.5 6C17.9477 6 17.5 6.44772 17.5 7V9.5H15C14.4477 9.5 14 9.94771 14 10.5C14 11.0523 14.4477 11.5 15 11.5H17.5V14C17.5 14.5523 17.9477 15 18.5 15C19.0523 15 19.5 14.5523 19.5 14V11.5H22C22.5523 11.5 23 11.0523 23 10.5C23 9.94771 22.5523 9.5 22 9.5H19.5V7Z"
  }));
});
var SvgAddUser$5 = styled__default["default"](SvgComponent$E).withConfig({
  displayName: "add-user__SvgAddUser",
  componentId: "sc-1yu96zz-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$N = ["title"];
var SvgComponent$D = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$N);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M20 20C20 20.2653 19.8946 20.5196 19.7071 20.7071C19.5196 20.8947 19.2652 21 19 21H5C4.73478 21 4.48043 20.8947 4.29289 20.7071C4.10536 20.5196 4 20.2653 4 20V11H1L11.327 1.61204C11.5111 1.44452 11.7511 1.35168 12 1.35168C12.2489 1.35168 12.4889 1.44452 12.673 1.61204L23 11H20V20Z"
  }));
});
var SvgVisibilityOff$p = styled__default["default"](SvgComponent$D).withConfig({
  displayName: "home__SvgVisibilityOff",
  componentId: "sc-1xzxqh4-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$M = ["title"];
var SvgComponent$C = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$M);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M8 18H18.237L20 19.385V9H21C21.2652 9 21.5196 9.10536 21.7071 9.29289C21.8946 9.48043 22 9.73478 22 10V23.5L17.545 20H9C8.73478 20 8.48043 19.8946 8.29289 19.7071C8.10536 19.5196 8 19.2652 8 19V18ZM5.455 16L1 19.5V4C1 3.73478 1.10536 3.48043 1.29289 3.29289C1.48043 3.10536 1.73478 3 2 3H17C17.2652 3 17.5196 3.10536 17.7071 3.29289C17.8946 3.48043 18 3.73478 18 4V16H5.455Z"
  }));
});
var SvgVisibilityOff$o = styled__default["default"](SvgComponent$C).withConfig({
  displayName: "chat__SvgVisibilityOff",
  componentId: "sc-advxuz-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$L = ["title"];
var SvgComponent$B = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$L);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M2 19V8H1V6H4V4C4 3.73478 4.10536 3.48043 4.29289 3.29289C4.48043 3.10536 4.73478 3 5 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289C19.8946 3.48043 20 3.73478 20 4V6H23V8H22V19H23V21H1V19H2ZM13 19V12H11V19H13ZM8 19V12H6V19H8ZM18 19V12H16V19H18ZM6 5V6H18V5H6Z"
  }));
});
var SvgVisibilityOff$n = styled__default["default"](SvgComponent$B).withConfig({
  displayName: "governance__SvgVisibilityOff",
  componentId: "sc-np38zv-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$K = ["title"];
var SvgComponent$A = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$K);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M21 21H13V6C13 5.20435 13.3161 4.44129 13.8787 3.87868C14.4413 3.31607 15.2044 3 16 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21ZM11 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H8C8.79565 3 9.55871 3.31607 10.1213 3.87868C10.6839 4.44129 11 5.20435 11 6V21ZM11 21H13V23H11V21Z"
  }));
});
var SvgVisibilityOff$m = styled__default["default"](SvgComponent$A).withConfig({
  displayName: "book__SvgVisibilityOff",
  componentId: "sc-12ml9pq-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$J = ["title"];
var SvgComponent$z = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$J);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V10H22V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22ZM18 12V19C18 19.2652 18.1054 19.5196 18.2929 19.7071C18.4804 19.8946 18.7348 20 19 20C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V12H18ZM5 6V12H11V6H5ZM5 13V15H15V13H5ZM5 16V18H15V16H5ZM7 8H9V10H7V8Z"
  }));
});
var SvgVisibilityOff$l = styled__default["default"](SvgComponent$z).withConfig({
  displayName: "newspaper__SvgVisibilityOff",
  componentId: "sc-1ibvmk8-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$I = ["title"];
var SvgComponent$y = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$I);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M10 20H6V22H4V20H3C2.73478 20 2.48043 19.8947 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V4.00001C2 3.73479 2.10536 3.48044 2.29289 3.2929C2.48043 3.10537 2.73478 3.00001 3 3.00001H10V1.59001C10 1.51743 10.0159 1.44573 10.0464 1.37988C10.0769 1.31404 10.1214 1.25563 10.1768 1.20872C10.2322 1.16181 10.2971 1.12752 10.3671 1.10823C10.4371 1.08893 10.5104 1.08511 10.582 1.09701L21.164 2.86101C21.3975 2.89983 21.6097 3.02022 21.7627 3.20077C21.9158 3.38131 21.9999 3.6103 22 3.84701V6.00001H23V8.00001H22V15H23V17H22V19.153C21.9999 19.3897 21.9158 19.6187 21.7627 19.7993C21.6097 19.9798 21.3975 20.1002 21.164 20.139L20 20.333V22H18V20.667L10.582 21.903C10.5104 21.9149 10.4371 21.9111 10.3671 21.8918C10.2971 21.8725 10.2322 21.8382 10.1768 21.7913C10.1214 21.7444 10.0769 21.686 10.0464 21.6201C10.0159 21.5543 10 21.4826 10 21.41V20ZM12 19.64L20 18.306V4.69401L12 3.36101V19.639V19.64ZM16.5 14C15.672 14 15 12.88 15 11.5C15 10.12 15.672 9.00001 16.5 9.00001C17.328 9.00001 18 10.12 18 11.5C18 12.88 17.328 14 16.5 14Z"
  }));
});
var SvgVisibilityOff$k = styled__default["default"](SvgComponent$y).withConfig({
  displayName: "safe__SvgVisibilityOff",
  componentId: "sc-1he9ncy-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$H = ["title"];
var SvgComponent$x = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$H);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 11C13.3261 11 14.5979 11.5268 15.5355 12.4645C16.4732 13.4021 17 14.6739 17 16V22H7V16C7 14.6739 7.52678 13.4021 8.46447 12.4645C9.40215 11.5268 10.6739 11 12 11ZM5.288 14.006C5.12886 14.5428 5.03485 15.0968 5.008 15.656L5 16V22H2V17.5C1.9998 16.6376 2.31803 15.8054 2.89363 15.1632C3.46924 14.521 4.2617 14.1139 5.119 14.02L5.289 14.006H5.288ZM18.712 14.006C19.6019 14.0602 20.4376 14.452 21.0486 15.1012C21.6596 15.7505 21.9999 16.6084 22 17.5V22H19V16C19 15.307 18.9 14.638 18.712 14.006ZM5.5 8C6.16304 8 6.79893 8.26339 7.26777 8.73223C7.73661 9.20107 8 9.83696 8 10.5C8 11.163 7.73661 11.7989 7.26777 12.2678C6.79893 12.7366 6.16304 13 5.5 13C4.83696 13 4.20107 12.7366 3.73223 12.2678C3.26339 11.7989 3 11.163 3 10.5C3 9.83696 3.26339 9.20107 3.73223 8.73223C4.20107 8.26339 4.83696 8 5.5 8ZM18.5 8C19.163 8 19.7989 8.26339 20.2678 8.73223C20.7366 9.20107 21 9.83696 21 10.5C21 11.163 20.7366 11.7989 20.2678 12.2678C19.7989 12.7366 19.163 13 18.5 13C17.837 13 17.2011 12.7366 16.7322 12.2678C16.2634 11.7989 16 11.163 16 10.5C16 9.83696 16.2634 9.20107 16.7322 8.73223C17.2011 8.26339 17.837 8 18.5 8ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2Z"
  }));
});
var SvgVisibilityOff$j = styled__default["default"](SvgComponent$x).withConfig({
  displayName: "team__SvgVisibilityOff",
  componentId: "sc-15fti4e-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$G = ["title"];
var SvgComponent$w = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$G);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M14 2C15.8299 1.99913 17.6049 2.62567 19.0288 3.77513C20.4527 4.92458 21.4395 6.52748 21.8246 8.31647C22.2097 10.1055 21.9699 11.9724 21.145 13.6059C20.3202 15.2395 18.9602 16.5408 17.292 17.293C16.7587 18.4719 15.9475 19.5039 14.9278 20.3004C13.9082 21.097 12.7105 21.6343 11.4376 21.8663C10.1647 22.0984 8.85446 22.0182 7.61933 21.6327C6.3842 21.2472 5.261 20.5678 4.34608 19.6529C3.43115 18.738 2.7518 17.6148 2.36628 16.3796C1.98076 15.1445 1.90058 13.8343 2.13262 12.5614C2.36466 11.2884 2.90199 10.0908 3.69854 9.07114C4.49508 8.05148 5.52705 7.24024 6.70596 6.707C7.34011 5.30389 8.36555 4.1135 9.65931 3.27861C10.9531 2.44371 12.4602 1.99976 14 2ZM9.99996 8C9.21203 8 8.43182 8.1552 7.70386 8.45672C6.97591 8.75825 6.31447 9.20021 5.75732 9.75736C5.20017 10.3145 4.75822 10.9759 4.45669 11.7039C4.15516 12.4319 3.99996 13.2121 3.99996 14C3.99996 14.7879 4.15516 15.5681 4.45669 16.2961C4.75822 17.0241 5.20017 17.6855 5.75732 18.2426C6.31447 18.7998 6.97591 19.2417 7.70386 19.5433C8.43182 19.8448 9.21203 20 9.99996 20C11.5913 20 13.1174 19.3679 14.2426 18.2426C15.3678 17.1174 16 15.5913 16 14C16 12.4087 15.3678 10.8826 14.2426 9.75736C13.1174 8.63214 11.5913 8 9.99996 8ZM14 4C13.1526 3.99901 12.3148 4.17794 11.5418 4.52496C10.7688 4.87198 10.0783 5.37918 9.51596 6.013C10.6462 5.94439 11.7782 6.1165 12.837 6.51795C13.8958 6.9194 14.8573 7.54105 15.6579 8.34178C16.4586 9.14252 17.0801 10.1041 17.4814 11.1629C17.8827 12.2218 18.0547 13.3537 17.986 14.484C18.8952 13.6756 19.5372 12.6099 19.8268 11.4283C20.1164 10.2467 20.04 9.00491 19.6076 7.86772C19.1752 6.73053 18.4074 5.75164 17.4059 5.06088C16.4044 4.37013 15.2166 4.00014 14 4Z"
  }));
});
var SvgVisibilityOff$i = styled__default["default"](SvgComponent$w).withConfig({
  displayName: "token__SvgVisibilityOff",
  componentId: "sc-1daaqhn-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$F = ["title"];
var SvgComponent$v = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$F);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"
  }));
});
var Svg$7 = styled__default["default"](SvgComponent$v).withConfig({
  displayName: "more__Svg",
  componentId: "sc-13wtcul-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$E = ["title"];
var SvgComponent$u = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$E);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13ZM16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
  }));
});
var Svg$6 = styled__default["default"](SvgComponent$u).withConfig({
  displayName: "more-line__Svg",
  componentId: "sc-1an1ftd-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$D = ["title"];
var SvgComponent$t = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$D);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12.0001 15L7.75708 10.757L9.17208 9.34302L12.0001 12.172L14.8281 9.34302L16.2431 10.757L12.0001 15Z"
  }));
});
var SvgVisibilityOff$h = styled__default["default"](SvgComponent$t).withConfig({
  displayName: "arrow-dropdown__SvgVisibilityOff",
  componentId: "sc-1vsfwhy-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$C = ["title"];
var SvgComponent$s = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$C);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M17 2V4H20.007C20.555 4 21 4.445 21 4.993V21.007C21 21.555 20.555 22 20.007 22H3.993C3.445 22 3 21.555 3 21.007V4.993C3 4.445 3.445 4 3.993 4H7V2H17ZM7 6H5V20H19V6H17V8H7V6ZM9 16V18H7V16H9ZM9 13V15H7V13H9ZM9 10V12H7V10H9ZM15 4H9V6H15V4Z"
  }));
});
var SvgVisibilityOff$g = styled__default["default"](SvgComponent$s).withConfig({
  displayName: "survey-line__SvgVisibilityOff",
  componentId: "sc-wkzo1s-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$B = ["title"];
var SvgComponent$r = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$B);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M2.21301 14.06C1.92542 12.7017 1.92542 11.2983 2.21301 9.94001C3.32301 10.07 4.29301 9.70301 4.60901 8.93901C4.92601 8.17401 4.50101 7.22901 3.62301 6.53601C4.38005 5.37233 5.37233 4.38005 6.53601 3.62301C7.22801 4.50001 8.17401 4.92601 8.93901 4.60901C9.70401 4.29201 10.071 3.32301 9.94001 2.21301C11.2983 1.92542 12.7017 1.92542 14.06 2.21301C13.93 3.32301 14.297 4.29301 15.061 4.60901C15.826 4.92601 16.771 4.50101 17.464 3.62301C18.6277 4.38005 19.62 5.37233 20.377 6.53601C19.5 7.22801 19.074 8.17401 19.391 8.93901C19.708 9.70401 20.677 10.071 21.787 9.94001C22.0746 11.2983 22.0746 12.7017 21.787 14.06C20.677 13.93 19.707 14.297 19.391 15.061C19.074 15.826 19.499 16.771 20.377 17.464C19.62 18.6277 18.6277 19.62 17.464 20.377C16.772 19.5 15.826 19.074 15.061 19.391C14.296 19.708 13.929 20.677 14.06 21.787C12.7017 22.0746 11.2983 22.0746 9.94001 21.787C10.07 20.677 9.70301 19.707 8.93901 19.391C8.17401 19.074 7.22901 19.499 6.53601 20.377C5.37233 19.62 4.38005 18.6277 3.62301 17.464C4.50001 16.772 4.92601 15.826 4.60901 15.061C4.29201 14.296 3.32301 13.929 2.21301 14.06V14.06ZM4.00001 12.21C5.10001 12.515 6.00701 13.212 6.45701 14.296C6.90601 15.381 6.75701 16.516 6.19501 17.508C6.29101 17.61 6.39001 17.709 6.49201 17.805C7.48501 17.243 8.61901 17.095 9.70401 17.543C10.788 17.993 11.485 18.9 11.79 20C11.93 20.004 12.07 20.004 12.21 20C12.515 18.9 13.212 17.993 14.296 17.543C15.381 17.094 16.516 17.243 17.508 17.805C17.61 17.709 17.709 17.61 17.805 17.508C17.243 16.515 17.095 15.381 17.543 14.296C17.993 13.212 18.9 12.515 20 12.21C20.004 12.07 20.004 11.93 20 11.79C18.9 11.485 17.993 10.788 17.543 9.70401C17.094 8.61901 17.243 7.48401 17.805 6.49201C17.7086 6.3904 17.6096 6.29137 17.508 6.19501C16.515 6.75701 15.381 6.90501 14.296 6.45701C13.212 6.00701 12.515 5.10001 12.21 4.00001C12.07 3.9963 11.93 3.9963 11.79 4.00001C11.485 5.10001 10.788 6.00701 9.70401 6.45701C8.61901 6.90601 7.48401 6.75701 6.49201 6.19501C6.39001 6.29101 6.29101 6.39001 6.19501 6.49201C6.75701 7.48501 6.90501 8.61901 6.45701 9.70401C6.00701 10.788 5.10001 11.485 4.00001 11.79C3.99601 11.93 3.99601 12.07 4.00001 12.21V12.21ZM12 15C11.2044 15 10.4413 14.6839 9.87869 14.1213C9.31608 13.5587 9.00001 12.7957 9.00001 12C9.00001 11.2044 9.31608 10.4413 9.87869 9.87869C10.4413 9.31608 11.2044 9.00001 12 9.00001C12.7957 9.00001 13.5587 9.31608 14.1213 9.87869C14.6839 10.4413 15 11.2044 15 12C15 12.7957 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7957 15 12 15ZM12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13V13Z"
  }));
});
var SvgVisibilityOff$f = styled__default["default"](SvgComponent$r).withConfig({
  displayName: "settings-line__SvgVisibilityOff",
  componentId: "sc-1cliwix-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$A = ["title"];
var SvgComponent$q = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$A);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M7 9C7.66304 9 8.29893 8.73661 8.76777 8.26777C9.23661 7.79893 9.5 7.16304 9.5 6.5C9.5 5.83696 9.23661 5.20107 8.76777 4.73223C8.29893 4.26339 7.66304 4 7 4C6.33696 4 5.70107 4.26339 5.23223 4.73223C4.76339 5.20107 4.5 5.83696 4.5 6.5C4.5 7.16304 4.76339 7.79893 5.23223 8.26777C5.70107 8.73661 6.33696 9 7 9ZM7 11C6.40905 11 5.82389 10.8836 5.27792 10.6575C4.73196 10.4313 4.23588 10.0998 3.81802 9.68198C3.40016 9.26412 3.06869 8.76804 2.84254 8.22208C2.6164 7.67611 2.5 7.09095 2.5 6.5C2.5 5.90905 2.6164 5.32389 2.84254 4.77792C3.06869 4.23196 3.40016 3.73588 3.81802 3.31802C4.23588 2.90016 4.73196 2.56869 5.27792 2.34254C5.82389 2.1164 6.40905 2 7 2C8.19347 2 9.33807 2.47411 10.182 3.31802C11.0259 4.16193 11.5 5.30653 11.5 6.5C11.5 7.69347 11.0259 8.83807 10.182 9.68198C9.33807 10.5259 8.19347 11 7 11V11ZM17.5 13C18.0304 13 18.5391 12.7893 18.9142 12.4142C19.2893 12.0391 19.5 11.5304 19.5 11C19.5 10.4696 19.2893 9.96086 18.9142 9.58579C18.5391 9.21071 18.0304 9 17.5 9C16.9696 9 16.4609 9.21071 16.0858 9.58579C15.7107 9.96086 15.5 10.4696 15.5 11C15.5 11.5304 15.7107 12.0391 16.0858 12.4142C16.4609 12.7893 16.9696 13 17.5 13V13ZM17.5 15C16.4391 15 15.4217 14.5786 14.6716 13.8284C13.9214 13.0783 13.5 12.0609 13.5 11C13.5 9.93913 13.9214 8.92172 14.6716 8.17157C15.4217 7.42143 16.4391 7 17.5 7C18.5609 7 19.5783 7.42143 20.3284 8.17157C21.0786 8.92172 21.5 9.93913 21.5 11C21.5 12.0609 21.0786 13.0783 20.3284 13.8284C19.5783 14.5786 18.5609 15 17.5 15ZM20 21V20.5C20 19.837 19.7366 19.2011 19.2678 18.7322C18.7989 18.2634 18.163 18 17.5 18C16.837 18 16.2011 18.2634 15.7322 18.7322C15.2634 19.2011 15 19.837 15 20.5V21H13V20.5C13 19.9091 13.1164 19.3239 13.3425 18.7779C13.5687 18.232 13.9002 17.7359 14.318 17.318C14.7359 16.9002 15.232 16.5687 15.7779 16.3425C16.3239 16.1164 16.9091 16 17.5 16C18.0909 16 18.6761 16.1164 19.2221 16.3425C19.768 16.5687 20.2641 16.9002 20.682 17.318C21.0998 17.7359 21.4313 18.232 21.6575 18.7779C21.8836 19.3239 22 19.9091 22 20.5V21H20ZM10 21V17C10 16.2044 9.68393 15.4413 9.12132 14.8787C8.55871 14.3161 7.79565 14 7 14C6.20435 14 5.44129 14.3161 4.87868 14.8787C4.31607 15.4413 4 16.2044 4 17V21H2V17C2 15.6739 2.52678 14.4021 3.46447 13.4645C4.40215 12.5268 5.67392 12 7 12C8.32608 12 9.59785 12.5268 10.5355 13.4645C11.4732 14.4021 12 15.6739 12 17V21H10Z"
  }));
});
var SvgVisibilityOff$e = styled__default["default"](SvgComponent$q).withConfig({
  displayName: "parent-line__SvgVisibilityOff",
  componentId: "sc-1ntgptw-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$z = ["title"];
var SvgComponent$p = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$z);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M11.9999 3C11.2043 3 10.4412 3.31607 9.87861 3.87868C9.316 4.44129 8.99993 5.20435 8.99993 6V10C8.99993 10.7956 9.316 11.5587 9.87861 12.1213C10.4412 12.6839 11.2043 13 11.9999 13C12.7956 13 13.5586 12.6839 14.1213 12.1213C14.6839 11.5587 14.9999 10.7956 14.9999 10V6C14.9999 5.20435 14.6839 4.44129 14.1213 3.87868C13.5586 3.31607 12.7956 3 11.9999 3ZM11.9999 1C12.6565 1 13.3067 1.12933 13.9133 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6193 4.08658C16.8706 4.69321 16.9999 5.34339 16.9999 6V10C16.9999 11.3261 16.4731 12.5979 15.5355 13.5355C14.5978 14.4732 13.326 15 11.9999 15C10.6738 15 9.40208 14.4732 8.4644 13.5355C7.52672 12.5979 6.99993 11.3261 6.99993 10V6C6.99993 4.67392 7.52672 3.40215 8.4644 2.46447C9.40208 1.52678 10.6738 1 11.9999 1V1ZM3.05493 11H5.06993C5.31222 12.6648 6.1458 14.1867 7.41816 15.2873C8.69053 16.3879 10.3166 16.9936 11.9989 16.9936C13.6813 16.9936 15.3073 16.3879 16.5797 15.2873C17.8521 14.1867 18.6856 12.6648 18.9279 11H20.9439C20.7166 13.0287 19.8066 14.9199 18.3631 16.3635C16.9197 17.8071 15.0286 18.7174 12.9999 18.945V23H10.9999V18.945C8.97107 18.7176 7.07972 17.8074 5.63611 16.3638C4.1925 14.9202 3.28234 13.0289 3.05493 11V11Z"
  }));
});
var SvgVisibilityOff$d = styled__default["default"](SvgComponent$p).withConfig({
  displayName: "mic-on__SvgVisibilityOff",
  componentId: "sc-uru1ku-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$y = ["title"];
var SvgComponent$o = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$y);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M16.4251 17.839C15.3702 18.436 14.2049 18.8123 13.0001 18.945V23H11.0001V18.945C8.9712 18.7176 7.07985 17.8074 5.63624 16.3638C4.19263 14.9202 3.28248 13.0289 3.05507 11H5.07007C5.22597 12.0794 5.63186 13.1075 6.25538 14.0023C6.87891 14.8971 7.70284 15.6338 8.66149 16.1539C9.62014 16.6739 10.687 16.9628 11.7771 16.9975C12.8671 17.0323 13.9502 16.8119 14.9401 16.354L13.3891 14.804C12.6443 15.0194 11.8596 15.0586 11.097 14.9186C10.3344 14.7785 9.61485 14.4631 8.99516 13.9971C8.37547 13.5312 7.87264 12.9275 7.52638 12.2338C7.18013 11.5401 6.99994 10.7753 7.00007 9.99999V8.41399L1.39307 2.80799L2.80807 1.39299L22.6071 21.193L21.1921 22.607L16.4251 17.839V17.839ZM9.03307 10.447L11.5531 12.967C10.9189 12.8712 10.3321 12.5749 9.87866 12.1214C9.42518 11.6679 9.12884 11.0811 9.03307 10.447V10.447ZM19.3751 15.16L17.9321 13.718C18.4411 12.908 18.7881 11.988 18.9291 11H20.9451C20.78 12.4966 20.24 13.9275 19.3751 15.16ZM16.4651 12.251L14.9171 10.703C14.9711 10.477 15.0001 10.243 15.0001 9.99999V5.99999C15.0008 5.2947 14.753 4.61171 14.3001 4.07096C13.8473 3.53022 13.2185 3.1663 12.524 3.04312C11.8296 2.91993 11.1139 3.04536 10.5028 3.39738C9.89159 3.74939 9.42399 4.30549 9.18207 4.96799L7.68607 3.47099C8.24117 2.52361 9.0927 1.7853 10.1092 1.37005C11.1257 0.9548 12.2506 0.885706 13.3103 1.17343C14.3699 1.46116 15.3054 2.08971 15.9723 2.96204C16.6392 3.83436 17.0003 4.90196 17.0001 5.99999V9.99999C17.0012 10.7818 16.8183 11.553 16.4661 12.251H16.4651Z"
  }));
});
var SvgVisibilityOff$c = styled__default["default"](SvgComponent$o).withConfig({
  displayName: "mic-off__SvgVisibilityOff",
  componentId: "sc-ghh1eo-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$x = ["title"];
var SvgComponent$n = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$x);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    stroke: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M19.8539 19.4858L19.8226 19.5277L19.8391 19.5773L19.9701 19.9702L19.4858 19.8088L19.4462 19.7955L19.4089 19.8145L18.8497 20.0989C18.2771 20.3901 17.6285 20.5551 16.9368 20.5551C14.602 20.5551 12.7093 18.6623 12.7093 16.3275C12.7093 13.9927 14.602 12.1 16.9368 12.1C19.2716 12.1 21.1643 13.9927 21.1643 16.3275C21.1643 17.2785 20.8522 18.1519 20.3243 18.8573L19.8539 19.4858ZM21.7567 22.3577C22.1281 22.4815 22.4814 22.1282 22.3576 21.7569L21.7166 19.8338C22.4381 18.8519 22.8643 17.6393 22.8643 16.3275C22.8643 13.0538 20.2105 10.4 16.9368 10.4C13.6631 10.4 11.0093 13.0538 11.0093 16.3275C11.0093 19.6012 13.6631 22.2551 16.9368 22.2551C17.8875 22.2551 18.7863 22.0311 19.5829 21.6331L21.7567 22.3577Z",
    strokeWidth: "0.2"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M4.83227 14.6614L4.84596 14.6203L4.82538 14.5822L4.51678 14.0109C3.95333 12.9679 3.63284 11.7738 3.63284 10.5C3.63284 6.41309 6.94594 3.1 11.0328 3.1C15.1198 3.1 18.4328 6.41309 18.4328 10.5C18.4328 10.5727 18.4318 10.6452 18.4297 10.7175L18.4275 10.7953L18.5024 10.8165C19.0141 10.9616 19.4967 11.1761 19.9394 11.4491L20.0762 11.5335L20.0915 11.3735C20.1188 11.086 20.1328 10.7946 20.1328 10.5C20.1328 5.47421 16.0586 1.4 11.0328 1.4C6.00705 1.4 1.93284 5.47421 1.93284 10.5C1.93284 12.0473 2.3191 13.5047 3.00054 14.7807L1.7809 18.4396L1.76117 18.4988L1.58326 19.0325L1.42515 19.5069C1.30137 19.8782 1.65464 20.2315 2.02598 20.1077L2.50033 19.9496L3.03404 19.7717L3.09325 19.7519L6.75215 18.5323C8.02816 19.2137 9.48554 19.6 11.0328 19.6C11.3679 19.6 11.6988 19.5819 12.0246 19.5466L12.1844 19.5292L12.0983 19.3935C11.8193 18.9542 11.5985 18.4744 11.4468 17.9648L11.4246 17.8902L11.3468 17.8935C11.2427 17.8978 11.138 17.9 11.0328 17.9C9.75909 17.9 8.56495 17.5795 7.52191 17.0161L6.95063 16.7075L6.91254 16.6869L6.87148 16.7006L6.25549 16.9059L3.81266 17.7202L4.62694 15.2774L4.83227 14.6614Z",
    strokeWidth: "0.2"
  }));
});
var SvgVisibilityOff$b = styled__default["default"](SvgComponent$n).withConfig({
  displayName: "direct-messages__SvgVisibilityOff",
  componentId: "sc-okvl8m-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$w = ["title"];
var SvgComponent$m = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$w);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M18 7H21C21.2652 7 21.5196 7.10536 21.7071 7.29289C21.8946 7.48043 22 7.73478 22 8V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H18V7ZM4 9V19H20V9H4ZM4 5V7H16V5H4ZM15 13H18V15H15V13Z"
  }));
});
var SvgVisibilityOff$a = styled__default["default"](SvgComponent$m).withConfig({
  displayName: "wallet__SvgVisibilityOff",
  componentId: "sc-4xz88l-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$v = ["title"];
var SvgComponent$l = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$v);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    stroke: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M18.1635 16.0585L18.1326 16.1156L18.1531 16.1773L19.141 19.1411L16.1772 18.1532L16.1155 18.1327L16.0584 18.1636L15.4872 18.4721C14.4512 19.0318 13.2652 19.3501 12 19.3501C7.94068 19.3501 4.64998 16.0594 4.64998 12.0001C4.64998 7.9408 7.94068 4.6501 12 4.6501C16.0593 4.6501 19.35 7.9408 19.35 12.0001C19.35 13.2653 19.0317 14.4513 18.472 15.4873L18.1635 16.0585ZM20.991 21.6553C21.4015 21.7921 21.792 21.4016 21.6552 20.9911L20.0865 16.2853C20.7654 15.0068 21.15 13.5481 21.15 12.0001C21.15 6.94669 17.0533 2.8501 12 2.8501C6.94656 2.8501 2.84998 6.94669 2.84998 12.0001C2.84998 17.0534 6.94656 21.1501 12 21.1501C13.548 21.1501 15.0067 20.7655 16.2852 20.0866L20.991 21.6553Z",
    strokeWidth: "0.2"
  }));
});
var SvgVisibilityOff$9 = styled__default["default"](SvgComponent$l).withConfig({
  displayName: "chat-new__SvgVisibilityOff",
  componentId: "sc-14yflma-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$u = ["title"];
var SvgComponent$k = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$u);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M6.5 11.5C5.90905 11.5 5.32389 11.3836 4.77792 11.1575C4.23196 10.9313 3.73588 10.5998 3.31802 10.182C2.90016 9.76412 2.56869 9.26804 2.34254 8.72208C2.1164 8.17611 2 7.59095 2 7C2 6.40905 2.1164 5.82389 2.34254 5.27792C2.56869 4.73196 2.90016 4.23588 3.31802 3.81802C3.73588 3.40016 4.23196 3.06869 4.77792 2.84254C5.32389 2.6164 5.90905 2.5 6.5 2.5C7.69347 2.5 8.83807 2.97411 9.68198 3.81802C10.5259 4.66193 11 5.80653 11 7C11 8.19347 10.5259 9.33807 9.68198 10.182C8.83807 11.0259 7.69347 11.5 6.5 11.5V11.5ZM7 21.5C5.80653 21.5 4.66193 21.0259 3.81802 20.182C2.97411 19.3381 2.5 18.1935 2.5 17C2.5 15.8065 2.97411 14.6619 3.81802 13.818C4.66193 12.9741 5.80653 12.5 7 12.5C8.19347 12.5 9.33807 12.9741 10.182 13.818C11.0259 14.6619 11.5 15.8065 11.5 17C11.5 18.1935 11.0259 19.3381 10.182 20.182C9.33807 21.0259 8.19347 21.5 7 21.5V21.5ZM17 11.5C16.4091 11.5 15.8239 11.3836 15.2779 11.1575C14.732 10.9313 14.2359 10.5998 13.818 10.182C13.4002 9.76412 13.0687 9.26804 12.8425 8.72208C12.6164 8.17611 12.5 7.59095 12.5 7C12.5 6.40905 12.6164 5.82389 12.8425 5.27792C13.0687 4.73196 13.4002 4.23588 13.818 3.81802C14.2359 3.40016 14.732 3.06869 15.2779 2.84254C15.8239 2.6164 16.4091 2.5 17 2.5C18.1935 2.5 19.3381 2.97411 20.182 3.81802C21.0259 4.66193 21.5 5.80653 21.5 7C21.5 8.19347 21.0259 9.33807 20.182 10.182C19.3381 11.0259 18.1935 11.5 17 11.5V11.5ZM17 21.5C15.8065 21.5 14.6619 21.0259 13.818 20.182C12.9741 19.3381 12.5 18.1935 12.5 17C12.5 15.8065 12.9741 14.6619 13.818 13.818C14.6619 12.9741 15.8065 12.5 17 12.5C18.1935 12.5 19.3381 12.9741 20.182 13.818C21.0259 14.6619 21.5 15.8065 21.5 17C21.5 18.1935 21.0259 19.3381 20.182 20.182C19.3381 21.0259 18.1935 21.5 17 21.5ZM6.5 9.5C7.16304 9.5 7.79893 9.23661 8.26777 8.76777C8.73661 8.29893 9 7.66304 9 7C9 6.33696 8.73661 5.70107 8.26777 5.23223C7.79893 4.76339 7.16304 4.5 6.5 4.5C5.83696 4.5 5.20107 4.76339 4.73223 5.23223C4.26339 5.70107 4 6.33696 4 7C4 7.66304 4.26339 8.29893 4.73223 8.76777C5.20107 9.23661 5.83696 9.5 6.5 9.5V9.5ZM7 19.5C7.66304 19.5 8.29893 19.2366 8.76777 18.7678C9.23661 18.2989 9.5 17.663 9.5 17C9.5 16.337 9.23661 15.7011 8.76777 15.2322C8.29893 14.7634 7.66304 14.5 7 14.5C6.33696 14.5 5.70107 14.7634 5.23223 15.2322C4.76339 15.7011 4.5 16.337 4.5 17C4.5 17.663 4.76339 18.2989 5.23223 18.7678C5.70107 19.2366 6.33696 19.5 7 19.5ZM17 9.5C17.663 9.5 18.2989 9.23661 18.7678 8.76777C19.2366 8.29893 19.5 7.66304 19.5 7C19.5 6.33696 19.2366 5.70107 18.7678 5.23223C18.2989 4.76339 17.663 4.5 17 4.5C16.337 4.5 15.7011 4.76339 15.2322 5.23223C14.7634 5.70107 14.5 6.33696 14.5 7C14.5 7.66304 14.7634 8.29893 15.2322 8.76777C15.7011 9.23661 16.337 9.5 17 9.5ZM17 19.5C17.663 19.5 18.2989 19.2366 18.7678 18.7678C19.2366 18.2989 19.5 17.663 19.5 17C19.5 16.337 19.2366 15.7011 18.7678 15.2322C18.2989 14.7634 17.663 14.5 17 14.5C16.337 14.5 15.7011 14.7634 15.2322 15.2322C14.7634 15.7011 14.5 16.337 14.5 17C14.5 17.663 14.7634 18.2989 15.2322 18.7678C15.7011 19.2366 16.337 19.5 17 19.5Z"
  }));
});
var SvgVisibilityOff$8 = styled__default["default"](SvgComponent$k).withConfig({
  displayName: "apps-2__SvgVisibilityOff",
  componentId: "sc-1i4uyqv-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$t = ["title"];
var SvgComponent$j = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$t);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M13 21V23H11V21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73479 2.10536 3.48043 2.29289 3.2929C2.48043 3.10536 2.73478 3 3 3H9C9.56759 2.99933 10.1288 3.11976 10.6461 3.35325C11.1635 3.58674 11.625 3.92792 12 4.354C12.375 3.92792 12.8365 3.58674 13.3539 3.35325C13.8712 3.11976 14.4324 2.99933 15 3H21C21.2652 3 21.5196 3.10536 21.7071 3.2929C21.8946 3.48043 22 3.73479 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H13ZM20 19V5H15C14.4696 5 13.9609 5.21072 13.5858 5.58579C13.2107 5.96086 13 6.46957 13 7V19H20ZM11 19V7C11 6.46957 10.7893 5.96086 10.4142 5.58579C10.0391 5.21072 9.53043 5 9 5H4V19H11Z"
  }));
});
var SvgVisibilityOff$7 = styled__default["default"](SvgComponent$j).withConfig({
  displayName: "book-line__SvgVisibilityOff",
  componentId: "sc-d7ap4m-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$s = ["title"];
var SvgComponent$i = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$s);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M20 6H23V8H22V19H23V21H1V19H2V8H1V6H4V4C4 3.73478 4.10536 3.48043 4.29289 3.29289C4.48043 3.10536 4.73478 3 5 3H19C19.2652 3 19.5196 3.10536 19.7071 3.29289C19.8946 3.48043 20 3.73478 20 4V6ZM20 8H4V19H7V12H9V19H11V12H13V19H15V12H17V19H20V8ZM6 5V6H18V5H6Z"
  }));
});
var SvgVisibilityOff$6 = styled__default["default"](SvgComponent$i).withConfig({
  displayName: "governance-line__SvgVisibilityOff",
  componentId: "sc-1359pu7-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$r = ["title"];
var SvgComponent$h = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$r);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "none",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M5.25534 9.67822H18.7447C19.6332 9.67822 20.4153 10.2645 20.6644 11.1174L22 15.6894V19.6782C22 20.7828 21.1046 21.6782 20 21.6782H4.08398C2.99573 21.6782 2.1072 20.8081 2.08442 19.7201L2 15.6894L3.33557 11.1174C3.58473 10.2645 4.36676 9.67822 5.25534 9.67822Z",
    fill: "#DFDFDF"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M22 15.6894L20.6644 11.1174C20.4153 10.2645 19.6332 9.67822 18.7447 9.67822H5.25534C4.36676 9.67822 3.58473 10.2645 3.33557 11.1174L2 15.6894M22 15.6894H2M22 15.6894V19.6782C22 20.7828 21.1046 21.6782 20 21.6782H4.08398C2.99573 21.6782 2.1072 20.8081 2.08442 19.7201L2 15.6894",
    stroke: "#9A9A9A",
    strokeWidth: "1.2",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M9 2.6H15C15.7732 2.6 16.4 3.2268 16.4 4V12.4H7.6V4C7.6 3.2268 8.2268 2.6 9 2.6Z",
    fill: "#DFDFDF",
    stroke: "#9A9A9A",
    strokeWidth: "1.2"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M10 5.79321H13.8961",
    stroke: "#9A9A9A",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M10 7.79321H13.8961",
    stroke: "#9A9A9A",
    strokeLinecap: "round"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M10 9.79321H13.8961",
    stroke: "#9A9A9A",
    strokeLinecap: "round"
  }));
});
var SvgAddUser$4 = styled__default["default"](SvgComponent$h).withConfig({
  displayName: "app-ballot-sm__SvgAddUser",
  componentId: "sc-1stdy4m-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$q = ["title"];
var SvgComponent$g = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$q);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M16 20V4H4V19C4 19.2652 4.10536 19.5196 4.29289 19.7071C4.48043 19.8946 4.73478 20 5 20H16ZM19 22H5C4.20435 22 3.44129 21.6839 2.87868 21.1213C2.31607 20.5587 2 19.7956 2 19V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V10H22V19C22 19.7956 21.6839 20.5587 21.1213 21.1213C20.5587 21.6839 19.7956 22 19 22ZM18 12V19C18 19.2652 18.1054 19.5196 18.2929 19.7071C18.4804 19.8946 18.7348 20 19 20C19.2652 20 19.5196 19.8946 19.7071 19.7071C19.8946 19.5196 20 19.2652 20 19V12H18ZM6 6H12V12H6V6ZM8 8V10H10V8H8ZM6 13H14V15H6V13ZM6 16H14V18H6V16Z"
  }));
});
var SvgVisibilityOff$5 = styled__default["default"](SvgComponent$g).withConfig({
  displayName: "newspaper-line__SvgVisibilityOff",
  componentId: "sc-kbvpc1-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$p = ["title"];
var SvgComponent$f = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$p);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M20 20.3331V22.0001H18V20.6671L10.582 21.9031C10.5104 21.915 10.4371 21.9112 10.3671 21.8919C10.2971 21.8726 10.2322 21.8383 10.1768 21.7914C10.1214 21.7445 10.0769 21.6861 10.0464 21.6202C10.0159 21.5544 10 21.4827 10 21.4101V20.0001H6V22.0001H4V20.0001H3C2.73478 20.0001 2.48043 19.8947 2.29289 19.7072C2.10536 19.5197 2 19.2653 2 19.0001V4.0001C2 3.73489 2.10536 3.48053 2.29289 3.29299C2.48043 3.10546 2.73478 3.0001 3 3.0001H10V1.5901C10 1.51752 10.0159 1.44582 10.0464 1.37998C10.0769 1.31413 10.1214 1.25573 10.1768 1.20881C10.2322 1.1619 10.2971 1.12761 10.3671 1.10832C10.4371 1.08903 10.5104 1.0852 10.582 1.0971L21.164 2.8611C21.3975 2.89992 21.6097 3.02031 21.7627 3.20086C21.9158 3.3814 21.9999 3.6104 22 3.8471V6.0001H23V8.0001H22V15.0001H23V17.0001H22V19.1531C21.9999 19.3898 21.9158 19.6188 21.7627 19.7993C21.6097 19.9799 21.3975 20.1003 21.164 20.1391L20 20.3331ZM4 5.0001V18.0001H10V5.0001H4ZM12 19.6401L20 18.3061V4.6941L12 3.3611V19.6391V19.6401ZM16.5 14.0001C15.672 14.0001 15 12.8801 15 11.5001C15 10.1201 15.672 9.0001 16.5 9.0001C17.328 9.0001 18 10.1201 18 11.5001C18 12.8801 17.328 14.0001 16.5 14.0001Z"
  }));
});
var SvgVisibilityOff$4 = styled__default["default"](SvgComponent$f).withConfig({
  displayName: "safe-line__SvgVisibilityOff",
  componentId: "sc-ci0ldx-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$o = ["title"];
var SvgComponent$e = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$o);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12 11C13.3261 11 14.5979 11.5268 15.5355 12.4645C16.4732 13.4021 17 14.6739 17 16V22H15V16C15 15.2348 14.7077 14.4985 14.1827 13.9417C13.6578 13.385 12.9399 13.0499 12.176 13.005L12 13C11.2348 13 10.4985 13.2923 9.94174 13.8173C9.38499 14.3422 9.04989 15.0601 9.005 15.824L9 16V22H7V16C7 14.6739 7.52678 13.4021 8.46447 12.4645C9.40215 11.5268 10.6739 11 12 11ZM5.5 14C5.779 14 6.05 14.033 6.31 14.094C6.13902 14.603 6.03777 15.1328 6.009 15.669L6 16V16.086C5.88505 16.0449 5.76549 16.018 5.644 16.006L5.5 16C5.12712 16 4.76761 16.1389 4.49158 16.3896C4.21555 16.6403 4.0428 16.9848 4.007 17.356L4 17.5V22H2V17.5C2 16.5717 2.36875 15.6815 3.02513 15.0251C3.6815 14.3687 4.57174 14 5.5 14V14ZM18.5 14C19.4283 14 20.3185 14.3687 20.9749 15.0251C21.6313 15.6815 22 16.5717 22 17.5V22H20V17.5C20 17.1271 19.8611 16.7676 19.6104 16.4916C19.3597 16.2156 19.0152 16.0428 18.644 16.007L18.5 16C18.325 16 18.157 16.03 18 16.085V16C18 15.334 17.892 14.694 17.691 14.096C17.95 14.033 18.221 14 18.5 14ZM5.5 8C6.16304 8 6.79893 8.26339 7.26777 8.73223C7.73661 9.20107 8 9.83696 8 10.5C8 11.163 7.73661 11.7989 7.26777 12.2678C6.79893 12.7366 6.16304 13 5.5 13C4.83696 13 4.20107 12.7366 3.73223 12.2678C3.26339 11.7989 3 11.163 3 10.5C3 9.83696 3.26339 9.20107 3.73223 8.73223C4.20107 8.26339 4.83696 8 5.5 8V8ZM18.5 8C19.163 8 19.7989 8.26339 20.2678 8.73223C20.7366 9.20107 21 9.83696 21 10.5C21 11.163 20.7366 11.7989 20.2678 12.2678C19.7989 12.7366 19.163 13 18.5 13C17.837 13 17.2011 12.7366 16.7322 12.2678C16.2634 11.7989 16 11.163 16 10.5C16 9.83696 16.2634 9.20107 16.7322 8.73223C17.2011 8.26339 17.837 8 18.5 8V8ZM5.5 10C5.36739 10 5.24021 10.0527 5.14645 10.1464C5.05268 10.2402 5 10.3674 5 10.5C5 10.6326 5.05268 10.7598 5.14645 10.8536C5.24021 10.9473 5.36739 11 5.5 11C5.63261 11 5.75979 10.9473 5.85355 10.8536C5.94732 10.7598 6 10.6326 6 10.5C6 10.3674 5.94732 10.2402 5.85355 10.1464C5.75979 10.0527 5.63261 10 5.5 10ZM18.5 10C18.3674 10 18.2402 10.0527 18.1464 10.1464C18.0527 10.2402 18 10.3674 18 10.5C18 10.6326 18.0527 10.7598 18.1464 10.8536C18.2402 10.9473 18.3674 11 18.5 11C18.6326 11 18.7598 10.9473 18.8536 10.8536C18.9473 10.7598 19 10.6326 19 10.5C19 10.3674 18.9473 10.2402 18.8536 10.1464C18.7598 10.0527 18.6326 10 18.5 10ZM12 2C13.0609 2 14.0783 2.42143 14.8284 3.17157C15.5786 3.92172 16 4.93913 16 6C16 7.06087 15.5786 8.07828 14.8284 8.82843C14.0783 9.57857 13.0609 10 12 10C10.9391 10 9.92172 9.57857 9.17157 8.82843C8.42143 8.07828 8 7.06087 8 6C8 4.93913 8.42143 3.92172 9.17157 3.17157C9.92172 2.42143 10.9391 2 12 2V2ZM12 4C11.4696 4 10.9609 4.21071 10.5858 4.58579C10.2107 4.96086 10 5.46957 10 6C10 6.53043 10.2107 7.03914 10.5858 7.41421C10.9609 7.78929 11.4696 8 12 8C12.5304 8 13.0391 7.78929 13.4142 7.41421C13.7893 7.03914 14 6.53043 14 6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4V4Z"
  }));
});
var SvgVisibilityOff$3 = styled__default["default"](SvgComponent$e).withConfig({
  displayName: "team-line__SvgVisibilityOff",
  componentId: "sc-3o5vkt-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$n = ["title"];
var SvgComponent$d = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$n);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    stroke: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M20 2C20.552 2 21 2.448 21 3V6.757L19 8.757V4H5V20H19V17.242L21 15.242V21C21 21.552 20.552 22 20 22H4C3.448 22 3 21.552 3 21V3C3 2.448 3.448 2 4 2H20ZM21.778 8.808L23.192 10.222L15.414 18L13.998 17.998L14 16.586L21.778 8.808V8.808ZM13 12V14H8V12H13ZM16 8V10H8V8H16Z"
  }));
});
var SvgEle = styled__default["default"](SvgComponent$d).withConfig({
  displayName: "draft-line__SvgEle",
  componentId: "sc-stogfk-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$m = ["title"];
var SvgComponent$c = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$m);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M17 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H7V1H9V3H15V1H17V3ZM15 5H9V7H7V5H4V9H20V5H17V7H15V5ZM20 11H4V19H20V11Z"
  }));
});
var Svg$5 = styled__default["default"](SvgComponent$c).withConfig({
  displayName: "calendar__Svg",
  componentId: "sc-1p9lu5f-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$l = ["title"];
var SvgComponent$b = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$l);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M10.828 12L15.778 16.95L14.364 18.364L8 12L14.364 5.63599L15.778 7.04999L10.828 12Z"
  }));
});
var Svg$4 = styled__default["default"](SvgComponent$b).withConfig({
  displayName: "angle-left__Svg",
  componentId: "sc-1mm3hyi-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$k = ["title"];
var SvgComponent$a = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$k);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z"
  }));
});
var Svg$3 = styled__default["default"](SvgComponent$a).withConfig({
  displayName: "angle-right__Svg",
  componentId: "sc-1c4ipss-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$j = ["title"];
var SvgComponent$9 = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$j);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.22198L13.192 5.63598L7.828 11Z"
  }));
});
var Svg$2 = styled__default["default"](SvgComponent$9).withConfig({
  displayName: "arrow-left__Svg",
  componentId: "sc-ffmuqb-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$i = ["title"];
var SvgComponent$8 = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$i);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M16.172 11L10.808 5.63598L12.222 4.22198L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
  }));
});
var Svg$1 = styled__default["default"](SvgComponent$8).withConfig({
  displayName: "arrow-right__Svg",
  componentId: "sc-12r0rkh-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$h = ["title"];
var SvgComponent$7 = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$h);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M17.5 21C16.5717 21 15.6815 20.6313 15.0251 19.9749C14.3687 19.3185 14 18.4283 14 17.5C14 16.5717 14.3687 15.6815 15.0251 15.0251C15.6815 14.3687 16.5717 14 17.5 14C18.4283 14 19.3185 14.3687 19.9749 15.0251C20.6313 15.6815 21 16.5717 21 17.5C21 18.4283 20.6313 19.3185 19.9749 19.9749C19.3185 20.6313 18.4283 21 17.5 21V21ZM17.5 19C17.8978 19 18.2794 18.842 18.5607 18.5607C18.842 18.2794 19 17.8978 19 17.5C19 17.1022 18.842 16.7206 18.5607 16.4393C18.2794 16.158 17.8978 16 17.5 16C17.1022 16 16.7206 16.158 16.4393 16.4393C16.158 16.7206 16 17.1022 16 17.5C16 17.8978 16.158 18.2794 16.4393 18.5607C16.7206 18.842 17.1022 19 17.5 19ZM6.5 10C6.04037 10 5.58525 9.90947 5.16061 9.73358C4.73597 9.55769 4.35013 9.29988 4.02513 8.97487C3.70012 8.64987 3.44231 8.26403 3.26642 7.83939C3.09053 7.41475 3 6.95963 3 6.5C3 6.04037 3.09053 5.58525 3.26642 5.16061C3.44231 4.73597 3.70012 4.35013 4.02513 4.02513C4.35013 3.70012 4.73597 3.44231 5.16061 3.26642C5.58525 3.09053 6.04037 3 6.5 3C7.42826 3 8.3185 3.36875 8.97487 4.02513C9.63125 4.6815 10 5.57174 10 6.5C10 7.42826 9.63125 8.3185 8.97487 8.97487C8.3185 9.63125 7.42826 10 6.5 10V10ZM6.5 8C6.89782 8 7.27936 7.84196 7.56066 7.56066C7.84196 7.27936 8 6.89782 8 6.5C8 6.10218 7.84196 5.72064 7.56066 5.43934C7.27936 5.15804 6.89782 5 6.5 5C6.10218 5 5.72064 5.15804 5.43934 5.43934C5.15804 5.72064 5 6.10218 5 6.5C5 6.89782 5.15804 7.27936 5.43934 7.56066C5.72064 7.84196 6.10218 8 6.5 8V8ZM19.071 3.515L20.485 4.929L4.93 20.485L3.516 19.071L19.07 3.515H19.071Z"
  }));
});
var Svg = styled__default["default"](SvgComponent$7).withConfig({
  displayName: "percentage__Svg",
  componentId: "sc-j99227-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$g = ["title"];
var SvgComponent$6 = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$g);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3V3ZM4 5V19H20V5H4ZM12 15H18V17H12V15ZM8.667 12L5.838 9.172L7.253 7.757L11.495 12L7.253 16.243L5.838 14.828L8.667 12Z"
  }));
});
var SvgAddUser$3 = styled__default["default"](SvgComponent$6).withConfig({
  displayName: "terminal-line__SvgAddUser",
  componentId: "sc-zu8d6l-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$f = ["title"];
var SvgComponent$5 = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$f);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M11 4H21V6H11V4ZM11 8H17V10H11V8ZM11 14H21V16H11V14ZM11 18H17V20H11V18ZM3 4H9V10H3V4ZM5 6V8H7V6H5ZM3 14H9V20H3V14ZM5 16V18H7V16H5Z"
  }));
});
var SvgAddUser$2 = styled__default["default"](SvgComponent$5).withConfig({
  displayName: "list-options__SvgAddUser",
  componentId: "sc-182nhd5-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$e = ["title"];
var SvgComponent$4 = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$e);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M2 22C2 19.8783 2.84285 17.8434 4.34315 16.3431C5.84344 14.8429 7.87827 14 10 14C12.1217 14 14.1566 14.8429 15.6569 16.3431C17.1571 17.8434 18 19.8783 18 22H16C16 20.4087 15.3679 18.8826 14.2426 17.7574C13.1174 16.6321 11.5913 16 10 16C8.4087 16 6.88258 16.6321 5.75736 17.7574C4.63214 18.8826 4 20.4087 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.284 14.703C19.6893 15.3359 20.882 16.3612 21.7186 17.6557C22.5552 18.9502 23.0002 20.4587 23 22H21C21.0002 20.844 20.6666 19.7125 20.0391 18.7416C19.4116 17.7707 18.5171 17.0017 17.463 16.527L18.283 14.703H18.284ZM17.596 3.413C18.6035 3.8283 19.465 4.53354 20.071 5.43923C20.6771 6.34492 21.0004 7.41024 21 8.5C21.0004 9.87233 20.4877 11.1952 19.5625 12.2088C18.6374 13.2224 17.3667 13.8535 16 13.978V11.965C16.7409 11.8589 17.4283 11.518 17.9613 10.9925C18.4943 10.4669 18.8447 9.78432 18.9612 9.04493C19.0776 8.30555 18.954 7.5483 18.6084 6.88435C18.2628 6.22041 17.7134 5.68475 17.041 5.356L17.596 3.413V3.413Z"
  }));
});
var SvgAddUser$1 = styled__default["default"](SvgComponent$4).withConfig({
  displayName: "participants__SvgAddUser",
  componentId: "sc-ozg65j-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$d = ["title"];
var SvgComponent$3 = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$d);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId,
    width: "1em",
    height: "1em",
    fill: "currentcolor",
    ref: svgRef,
    viewBox: "0 0 24 24"
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M4.5 18H6.5V20H18.5V4H6.5V6H4.5V3C4.5 2.73478 4.60536 2.48043 4.79289 2.29289C4.98043 2.10536 5.23478 2 5.5 2H19.5C19.7652 2 20.0196 2.10536 20.2071 2.29289C20.3946 2.48043 20.5 2.73478 20.5 3V21C20.5 21.2652 20.3946 21.5196 20.2071 21.7071C20.0196 21.8946 19.7652 22 19.5 22H5.5C5.23478 22 4.98043 21.8946 4.79289 21.7071C4.60536 21.5196 4.5 21.2652 4.5 21V18ZM6.5 11H13.5V13H6.5V16L1.5 12L6.5 8V11Z"
  }));
});
var SvgAddUser = styled__default["default"](SvgComponent$3).withConfig({
  displayName: "leave__SvgAddUser",
  componentId: "sc-dn6ton-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$c = ["title"];
var SvgComponent$2 = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$c);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em" // fill="currentcolor"
    // stroke="currentcolor"
    ,
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12.036 0.130072V0.141895C12.0478 0.201008 12.0478 0.271944 12.0478 0.34288V8.86702C12.036 8.91431 12.0005 8.92613 11.965 8.94978C11.7168 9.068 11.4803 9.17441 11.232 9.28081C10.8892 9.43451 10.5345 9.60002 10.1916 9.75372L8.95026 10.3212C8.6074 10.4749 8.26455 10.6286 7.93351 10.7823C7.53154 10.9715 7.11775 11.1488 6.71578 11.338C6.37292 11.4916 6.03006 11.6572 5.67538 11.8109C5.39164 11.9409 5.1079 12.0591 4.83598 12.1892C4.81233 12.201 4.78868 12.2128 4.76504 12.2128C4.75322 12.2128 4.75322 12.2128 4.74139 12.201L5.06061 11.669C5.67538 10.6522 6.27834 9.64731 6.89312 8.63057C7.54336 7.54288 8.20543 6.4552 8.85568 5.36751C9.45864 4.36259 10.0734 3.35766 10.6764 2.35273C11.1138 1.61973 11.5631 0.886723 12.0005 0.153718C12.0123 0.130072 12.0242 0.11825 12.0242 0.0946045H12.036C12.0242 0.106427 12.036 0.11825 12.036 0.130072Z",
    fill: "#8A92B2"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M19.2946 12.2011L19.3064 12.2129L17.5685 13.2415L12.1064 16.469C12.0827 16.4809 12.0591 16.4927 12.0473 16.5045C12.0118 16.5045 12.0118 16.469 12.0118 16.4572V16.3508V9.04441C12.0118 9.00895 12.0118 8.96166 12.0236 8.92619C12.0355 8.8789 12.0709 8.89072 12.1064 8.90254C12.2601 8.97348 12.4256 9.04441 12.5793 9.11535C13.0404 9.32816 13.5015 9.54097 13.9625 9.74195C14.3645 9.91929 14.7547 10.1085 15.1566 10.2858C15.5586 10.4631 15.9606 10.6523 16.3625 10.8296C16.7054 10.9833 17.0601 11.1488 17.4029 11.3025C17.7458 11.4562 18.1005 11.6218 18.4433 11.7754C18.7153 11.8937 18.9872 12.0237 19.2591 12.142C19.2591 12.1774 19.2709 12.1892 19.2946 12.2011Z",
    fill: "#454A75"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12.0355 23.8464C12.0355 23.8582 12.0236 23.87 12.0236 23.8818H12.0118C12.0118 23.8582 11.9882 23.8464 11.9763 23.8227C11.2433 22.7941 10.5103 21.7537 9.77733 20.7252C9.0325 19.673 8.27585 18.6089 7.53102 17.5567C6.80984 16.5399 6.07684 15.5114 5.35565 14.4946C5.16649 14.2227 4.97733 13.9626 4.78817 13.6907C4.77634 13.667 4.76452 13.6552 4.74088 13.6198C4.77634 13.6198 4.79999 13.6434 4.81181 13.6552C5.84038 14.2582 6.85713 14.8611 7.8857 15.4641C9.06797 16.1616 10.2384 16.8592 11.4207 17.5567L12.0236 17.9114C12.0473 17.935 12.0473 17.9587 12.0473 17.9823V23.6808C12.0473 23.7399 12.0473 23.7991 12.0355 23.8464Z",
    fill: "#8A92B2"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M4.72906 12.2246V12.2128C5.10739 12.0473 5.47389 11.8699 5.85222 11.7044C6.33695 11.4798 6.82168 11.267 7.3064 11.0423C7.67291 10.8768 8.05123 10.6995 8.41773 10.534C8.96158 10.2857 9.4936 10.0492 10.0374 9.80097C10.4039 9.63545 10.7704 9.46994 11.1488 9.2926C11.4089 9.17437 11.6808 9.05614 11.9409 8.93792C11.9645 8.92609 12 8.91427 12.0118 8.89062C12.0236 8.89062 12.0236 8.90245 12.0118 8.91427V16.4217C12.0118 16.4571 12 16.4926 12.0236 16.5162C12 16.5517 11.9764 16.5162 11.9645 16.5044C11.8581 16.4453 11.7517 16.3862 11.6453 16.3153C9.36355 14.9675 7.06995 13.6079 4.78818 12.2601C4.77636 12.2483 4.75271 12.2364 4.72906 12.2246Z",
    fill: "#62688F"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M19.2709 13.6198H19.2828C19.2828 13.6434 19.2591 13.667 19.2473 13.6907C17.0719 16.7528 14.8966 19.8266 12.7212 22.8887C12.4966 23.2079 12.2601 23.5271 12.0355 23.8464C12.0237 23.8345 12.0237 23.8227 12.0237 23.8109V23.74V18.006V17.8996C12.5202 17.604 13.0049 17.3202 13.5015 17.0247C15.4168 15.8897 17.332 14.7665 19.2355 13.6316C19.2473 13.6434 19.2591 13.6316 19.2709 13.6198Z",
    fill: "#62688F"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12.0236 8.91426V8.89061V8.81968V0.236427C12.0236 0.200959 12.0118 0.177314 12.0355 0.141846C14.4355 4.12608 16.8355 8.0985 19.2236 12.0827C19.2473 12.1182 19.2828 12.1655 19.2946 12.2128C19.1291 12.1537 18.9754 12.0709 18.8217 12C18.6325 11.9172 18.4315 11.8226 18.2424 11.7399C18.1241 11.6808 17.9941 11.6335 17.8759 11.5744C17.6749 11.4798 17.4739 11.397 17.2729 11.3024C17.1547 11.2551 17.0365 11.196 16.9182 11.1369L16.1379 10.7822C16.0079 10.7231 15.8778 10.664 15.736 10.6049L15.1685 10.3566C15.0502 10.3093 14.932 10.2502 14.8138 10.1911L14.0335 9.83643C13.9034 9.77731 13.7734 9.7182 13.6315 9.65909L13.064 9.41081C12.934 9.3517 12.8158 9.29259 12.6857 9.23347C12.4611 9.12707 12.2365 9.02066 12 8.92608C12.0355 8.91426 12.0236 8.91426 12.0236 8.91426Z",
    fill: "#62688F"
  }));
});
var SvgVisibilityOff$2 = styled__default["default"](SvgComponent$2).withConfig({
  displayName: "ethereum__SvgVisibilityOff",
  componentId: "sc-o3ia9a-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var _excluded$b = ["title"];
var SvgComponent$1 = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded$b);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: "1em",
    height: "1em" // fill="currentcolor"
    // stroke="currentcolor"
    ,
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement("g", null, /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M23.5383 11.9999C23.5383 18.3724 18.3724 23.5383 11.9999 23.5383C5.62737 23.5383 0.461426 18.3724 0.461426 11.9999C0.461426 5.62737 5.62737 0.461426 11.9999 0.461426C18.3724 0.461426 23.5383 5.62737 23.5383 11.9999Z",
    fill: "white"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M18.2307 21.7133V2.28687C21.4234 4.33917 23.5384 7.92263 23.5384 12.0001C23.5384 16.0775 21.4234 19.661 18.2307 21.7133Z",
    fill: "#727BF2"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M0.461426 9.11527L2.30758 5.53835V18.4614L0.461426 14.9999V9.11527Z",
    fill: "#DC7C8A"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M2.76912 4.73066L4.61527 2.99989V20.9999L2.76912 19.3845V4.73066Z",
    fill: "#DC7C8A"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M5.07681 2.42296L6.92296 1.3845V22.6153L5.07681 21.5768V2.42296Z",
    fill: "#DC7C8A"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M7.3845 1.15373L9.23066 0.57681V23.423L7.3845 22.846V1.15373Z",
    fill: "#DC7C8A"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M9.6922 0.461426H11.5383V23.5383H9.6922V0.461426Z",
    fill: "#DC7C8A"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M17.7693 12.0001C17.7693 15.1863 15.1863 17.7693 12.0001 17.7693C8.8138 17.7693 6.23083 15.1863 6.23083 12.0001C6.23083 8.8138 8.8138 6.23083 12.0001 6.23083C15.1863 6.23083 17.7693 8.8138 17.7693 12.0001Z",
    fill: "white"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M18.2308 12.0001C18.2308 15.4412 15.4412 18.2308 12.0001 18.2308C8.5589 18.2308 5.76929 15.4412 5.76929 12.0001C5.76929 8.5589 8.5589 5.76929 12.0001 5.76929C15.4412 5.76929 18.2308 8.5589 18.2308 12.0001ZM12.0001 17.7693C15.1863 17.7693 17.7693 15.1863 17.7693 12.0001C17.7693 8.8138 15.1863 6.23083 12.0001 6.23083C8.8138 6.23083 6.23083 8.8138 6.23083 12.0001C6.23083 15.1863 8.8138 17.7693 12.0001 17.7693Z",
    fill: "white"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    d: "M12.0001 17.7693C13.5302 17.7693 14.9976 17.1615 16.0795 16.0795C17.1615 14.9976 17.7693 13.5302 17.7693 12.0001C17.7693 10.47 17.1615 9.00254 16.0795 7.92059C14.9976 6.83865 13.5302 6.23083 12.0001 6.23083V17.7693Z",
    fill: "#DC7C8A"
  }), /*#__PURE__*/React__namespace["default"].createElement("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12 23.5385C18.3725 23.5385 23.5385 18.3725 23.5385 12C23.5385 5.62748 18.3725 0.461538 12 0.461538C5.62748 0.461538 0.461538 5.62748 0.461538 12C0.461538 18.3725 5.62748 23.5385 12 23.5385Z",
    fill: "#727BF2"
  })));
});
var SvgVisibilityOff$1 = styled__default["default"](SvgComponent$1).withConfig({
  displayName: "uqbar__SvgVisibilityOff",
  componentId: "sc-1lmcj1o-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var NullIcon = function NullIcon() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 3H3V13H13V3ZM12 4.70711L4.70711 12H6.29289L12 6.29289V4.70711ZM12 7.70711L7.70711 12H9.29289L12 9.29289V7.70711ZM12 10.7071L10.7071 12H12V10.7071ZM4 11.2929L11.2929 4H9.70711L4 9.70711V11.2929ZM4 8.29289L8.29289 4H6.70711L4 6.70711V8.29289ZM4 5.29289L5.29289 4H4V5.29289Z"
  });
};

var ChevronSouth = function ChevronSouth() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.64648 5.35359L2.35359 4.64648L8.00004 10.2929L13.6465 4.64648L14.3536 5.35359L8.00004 11.7071L1.64648 5.35359Z"
  });
};

var ChevronWest = function ChevronWest() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.6464 1.64648L11.3535 2.35359L5.70707 8.00004L11.3535 13.6465L10.6464 14.3536L4.29286 8.00004L10.6464 1.64648Z"
  });
};

var ChevronEast = function ChevronEast() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.35359 14.3535L4.64648 13.6464L10.2929 7.99996L4.64648 2.35352L5.35359 1.64641L11.7071 7.99996L5.35359 14.3535Z"
  });
};

var ChevronNorth = function ChevronNorth() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.3535 10.6464L13.6464 11.3535L7.99996 5.70707L2.35352 11.3535L1.64641 10.6464L7.99996 4.29286L14.3535 10.6464Z"
  });
};

var ArrowRefresh = function ArrowRefresh() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.9999 2.8999C5.18325 2.8999 2.8999 5.18325 2.8999 7.9999H1.8999C1.8999 4.63096 4.63097 1.8999 7.9999 1.8999C9.67778 1.8999 11.1975 2.57776 12.2999 3.67327V1.9999H13.2999V5.2999L9.9999 5.2999V4.2999L11.5099 4.2999C10.5952 3.43173 9.35976 2.8999 7.9999 2.8999ZM7.9999 13.0999C10.8166 13.0999 13.0999 10.8166 13.0999 7.9999H14.0999C14.0999 11.3688 11.3688 14.0999 7.9999 14.0999C6.32203 14.0999 4.80225 13.422 3.6999 12.3265V13.9999H2.6999V10.6999H5.9999V11.6999H4.48986C5.4046 12.5681 6.64004 13.0999 7.9999 13.0999Z"
  });
};

var ArrowExpand = function ArrowExpand() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.2929 5H8V4H12V8H11V5.70711L5.70711 11H8V12H4V8H5V10.2929L10.2929 5Z"
  });
};

var ArrowExternal = function ArrowExternal() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 1H9V2H13.293L8.14648 7.14648L8.85359 7.85359L14 2.70718V7H15V2V1H14ZM7 3H2V14H13V9H12V13H3V4H7V3Z"
  });
};

var ArrowEast = function ArrowEast() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.0355 7.5L7.64641 4.11092L8.35352 3.40381L12.9497 8L8.35352 12.5962L7.64641 11.8891L11.0355 8.5L3.75732 8.5L3.75732 7.5H11.0355Z"
  });
};

var ArrowSouth = function ArrowSouth() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.5 11.0355L11.8891 7.64641L12.5962 8.35352L8 12.9497L3.4038 8.35352L4.11091 7.64641L7.5 11.0355L7.5 3.75732L8.5 3.75732V11.0355Z"
  });
};

var ArrowWest = function ArrowWest() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.9645 8.5L8.35359 11.8891L7.64648 12.5962L3.05029 8L7.64648 3.4038L8.35359 4.11091L4.9645 7.5L12.2427 7.5L12.2427 8.5L4.9645 8.5Z"
  });
};

var ArrowNorth = function ArrowNorth() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 4.96438L4.11092 8.35347L3.40381 7.64636L8 3.05017L12.5962 7.64636L11.8891 8.35347L8.5 4.96438L8.5 12.2426L7.5 12.2426V4.96438Z"
  });
};

var ArrowNorthEast = function ArrowNorthEast() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.2963 5H5.00346V4L12.0035 4V11H11.0035V5.70711L4.85701 11.8536L4.1499 11.1464L10.2963 5Z"
  });
};

var ArrowSouthEast = function ArrowSouthEast() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 10.2965L11 5.00358L12 5.00358L12 12.0036L5 12.0036L5 11.0036L10.2929 11.0036L4.14645 4.85713L4.85355 4.15002L11 10.2965Z"
  });
};

var ArrowSouthWest = function ArrowSouthWest() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.70707 11L11 11L11 12L3.99996 12L3.99996 5L4.99996 5L4.99996 10.2929L11.1464 4.14645L11.8535 4.85355L5.70707 11Z"
  });
};

var ArrowNorthWest = function ArrowNorthWest() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5 5.70707L5 11L4 11L4 3.99996L11 3.99996L11 4.99996L5.70711 4.99996L11.8536 11.1464L11.1464 11.8535L5 5.70707Z"
  });
};

var Locked = function Locked() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 7H12C12.5523 7 13 7.44772 13 8V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V8C3 7.44772 3.44772 7 4 7H5V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5V7ZM10 7V5C10 3.89543 9.10457 3 8 3C6.89543 3 6 3.89543 6 5V7H10ZM6 8H12V13H4V8H5H6Z"
  });
};

var Unlocked = function Unlocked() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 5C10 3.89543 9.10457 3 8 3C6.89543 3 6 3.89543 6 5V7H12C12.5523 7 13 7.44772 13 8V11V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V8C3 7.44772 3.44772 7 4 7H5V5C5 3.34315 6.34315 2 8 2C9.65685 2 11 3.34315 11 5H10ZM4 8H5H6H12V13H4V8Z"
  });
};

var Copy = function Copy() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.4999 4.29885L10.813 1.5L4.50002 1.50011L4.5 4.00007L5.5 4.00006L5.50001 2.5001L10.3868 2.50001L12.4999 4.70116V11.5H10.9999V12.5H13.4999V4.29885Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.81311 3.5L11.5 6.29885V14.5H2.5L2.50009 3.50011L8.81311 3.5ZM3.50008 4.5001L3.50001 13.5H10.5V6.70116L8.3869 4.50001L3.50008 4.5001Z"
  }));
};

var ChevronDouble = function ChevronDouble() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.00004 1.79285L4.14648 5.6464L4.85359 6.35351L8.00004 3.20706L11.1465 6.35351L11.8536 5.6464L8.00004 1.79285ZM4.85367 9.64648L4.14656 10.3536L8.00011 14.2071L11.8537 10.3536L11.1466 9.64648L8.00011 12.7929L4.85367 9.64648Z"
  });
};

var ChevronDoubleSmall = function ChevronDoubleSmall() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.00004 3.79285L5.14648 6.6464L5.85359 7.35351L8.00004 5.20706L10.1465 7.35351L10.8536 6.6464L8.00004 3.79285ZM5.85367 8.64648L5.14656 9.35358L8.00011 12.2071L10.8537 9.35358L10.1466 8.64648L8.00011 10.7929L5.85367 8.64648Z"
  });
};

var Plus = function Plus() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 8.5V13.5H8.5V8.5H13.5V7.5H8.5V2.5H7.5V7.5H2.5V8.5H7.5Z"
  });
};

var Checkmark = function Checkmark() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.3536 5.35359L6.50004 11.2071L3.64648 8.35359L4.35359 7.64648L6.50004 9.79293L11.6465 4.64648L12.3536 5.35359Z"
  });
};

var CheckmarkBold = function CheckmarkBold() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5304 5.53039L6.50006 11.5607L3.46973 8.53039L4.53039 7.46973L6.50006 9.4394L11.4697 4.46973L12.5304 5.53039Z"
  });
};

var Minus = function Minus() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5 8.5H2.5V7.5H13.5V8.5Z"
  });
};

var X = function X() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.29289 7.99995L3.75747 11.5354L4.46458 12.2425L8 8.70706L11.5355 12.2426L12.2426 11.5355L8.70711 7.99995L12.2428 4.46431L11.5356 3.7572L8 7.29285L4.46443 3.75728L3.75732 4.46438L7.29289 7.99995Z"
  });
};

var ExclaimationMark = function ExclaimationMark() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.58008 3.27273L8.49485 9.54545H7.50621L7.42099 3.27273H8.58008ZM8.00053 12.0682C7.79031 12.0682 7.60991 11.9929 7.45934 11.8423C7.30877 11.6918 7.23349 11.5114 7.23349 11.3011C7.23349 11.0909 7.30877 10.9105 7.45934 10.7599C7.60991 10.6094 7.79031 10.5341 8.00053 10.5341C8.21076 10.5341 8.39116 10.6094 8.54173 10.7599C8.69229 10.9105 8.76758 11.0909 8.76758 11.3011C8.76758 11.5114 8.69229 11.6918 8.54173 11.8423C8.39116 11.9929 8.21076 12.0682 8.00053 12.0682Z"
  });
};

var Bullet = function Bullet() {
  return /*#__PURE__*/React__namespace.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "3"
  });
};

var LargeBullet = function LargeBullet() {
  return /*#__PURE__*/React__namespace.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "5"
  });
};

var Circle = function Circle() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11ZM8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
  });
};

var TriangleEast = function TriangleEast() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    d: "M12 8L5 12L5 4L12 8Z"
  });
};

var TriangleSouth = function TriangleSouth() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8 12L4 5L12 5L8 12Z"
  });
};

var TriangleWest = function TriangleWest() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4 8L11 12L11 4L4 8Z"
  });
};

var TriangleNorth = function TriangleNorth() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8 4L4 11L12 11L8 4Z"
  });
};

var CreateGroup = function CreateGroup() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 8C3.5 5.51472 5.51472 3.5 8 3.5V2.5C4.96243 2.5 2.5 4.96243 2.5 8C2.5 11.0376 4.96243 13.5 8 13.5C11.0376 13.5 13.5 11.0376 13.5 8H12.5C12.5 10.4853 10.4853 12.5 8 12.5C5.51472 12.5 3.5 10.4853 3.5 8ZM10 3H11V5H13V6H11V8H10V6H8V5H10V3Z"
  });
};

var Blank = function Blank() {
  return /*#__PURE__*/React__namespace.createElement("path", null);
};

var ExclaimationMarkBold = function ExclaimationMarkBold() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    d: "M8.82872 3.27271L8.6881 9.43464H7.31594L7.17957 3.27271H8.82872ZM8.00202 12.0937C7.74349 12.0937 7.5219 12.0028 7.33725 11.821C7.15259 11.6363 7.06168 11.4148 7.06452 11.1562C7.06168 10.9005 7.15259 10.6818 7.33725 10.5C7.5219 10.3182 7.74349 10.2273 8.00202 10.2273C8.25486 10.2273 8.47361 10.3182 8.65827 10.5C8.84293 10.6818 8.93668 10.9005 8.93952 11.1562C8.93668 11.4148 8.84293 11.6363 8.65827 11.821C8.47361 12.0028 8.25486 12.0937 8.00202 12.0937Z"
  });
};

var Smiley = function Smiley() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("circle", {
    cx: "5",
    cy: "6",
    r: "1"
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    cx: "11",
    cy: "6",
    r: "1"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.61157 9C4.0663 11.004 5.85848 12.5 8.00006 12.5C10.1417 12.5 11.9338 11.004 12.3886 9H11.3551C10.9248 10.4457 9.58557 11.5 8.00006 11.5C6.41455 11.5 5.07528 10.4457 4.645 9H3.61157Z"
  }));
};

var XSmall = function XSmall() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.00004 7.29293L10.6465 4.64648L11.3536 5.35359L8.70714 8.00004L11.3536 10.6465L10.6465 11.3536L8.00004 8.70714L5.35359 11.3536L4.64648 10.6465L7.29293 8.00004L4.64648 5.35359L5.35359 4.64648L8.00004 7.29293Z"
  });
};

var PlusSmall = function PlusSmall() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    d: "M7.5 8.5L7.5 12H8.5V8.5H12V7.5H8.5V4H7.5L7.5 7.5H4V8.5H7.5Z"
  });
};

var Weather = function Weather() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.98161 5.97489L5.38136 6.00275C4.05616 6.06424 3 7.15907 3 8.5C3 9.75859 3.931 10.8015 5.1416 10.9746L5.31895 11H11C12.1046 11 13 10.1046 13 9C13 8.12681 12.4398 7.38188 11.6563 7.10987L11.0494 6.8992L10.9887 6.25966C10.8684 4.9922 9.79947 4 8.5 4C7.50315 4 6.64056 4.58341 6.23878 5.43182L5.98161 5.97489ZM5 11.9646C3.30385 11.7219 2 10.2632 2 8.5C2 6.62231 3.47861 5.08997 5.335 5.00382C5.89595 3.81929 7.1023 3 8.5 3C10.3201 3 11.8156 4.38924 11.9842 6.16517C13.1576 6.57251 14 7.68788 14 9C14 10.6569 12.6569 12 11 12H5V11.9646Z"
  });
};

var Clock = function Clock() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 5H8.5V8.19098L10.2236 9.05279L9.77639 9.94721L7.5 8.80902V5Z"
  }));
};

var Chat = function Chat() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.8571 12.2918L11.014 11.817L10.7959 11.745L10.5991 11.8635L10.8571 12.2918ZM12.2857 10.8623L11.8645 10.5929L11.7358 10.7942L11.8115 11.0207L12.2857 10.8623ZM13 13L12.8431 13.4747C13.0228 13.5341 13.2206 13.487 13.3541 13.353C13.4877 13.219 13.5342 13.021 13.4742 12.8415L13 13ZM10.5991 11.8635C9.94405 12.2582 8.87909 12.5 8 12.5V13.5C9.00806 13.5 10.2645 13.2326 11.1152 12.7201L10.5991 11.8635ZM8 12.5C5.51471 12.5 3.5 10.4853 3.5 8.00004H2.5C2.5 11.0376 4.96244 13.5 8 13.5V12.5ZM3.5 8.00004C3.5 5.51475 5.51472 3.5 8 3.5V2.5C4.96242 2.5 2.5 4.96247 2.5 8.00004H3.5ZM8 3.5C10.4853 3.5 12.5 5.51475 12.5 8.00004H13.5C13.5 4.96247 11.0376 2.5 8 2.5V3.5ZM12.5 8.00004C12.5 8.93552 12.2914 9.92518 11.8645 10.5929L12.707 11.1316C13.2729 10.2465 13.5 9.046 13.5 8.00004H12.5ZM10.7002 12.7665L12.8431 13.4747L13.1569 12.5253L11.014 11.817L10.7002 12.7665ZM13.4742 12.8415L12.7599 10.7038L11.8115 11.0207L12.5258 13.1585L13.4742 12.8415Z"
  });
};

var Attachment = function Attachment() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.78361 2.70909C8.30172 2.19097 9.00444 1.8999 9.73716 1.8999C11.263 1.8999 12.4999 3.13682 12.4999 4.66264C12.4999 5.39537 12.2088 6.09808 11.6907 6.6162L7.08483 11.2221C6.77888 11.528 6.36394 11.6999 5.93127 11.6999C5.03029 11.6999 4.2999 10.9695 4.2999 10.0685C4.2999 9.63587 4.47178 9.22092 4.77772 8.91498L9.24635 4.44635L9.95345 5.15346L5.48483 9.62209C5.36642 9.74049 5.2999 9.90108 5.2999 10.0685C5.2999 10.4172 5.58258 10.6999 5.93127 10.6999C6.09872 10.6999 6.25931 10.6334 6.37772 10.515L10.9836 5.90909C11.3142 5.57851 11.4999 5.13015 11.4999 4.66264C11.4999 3.68911 10.7107 2.8999 9.73716 2.8999C9.26965 2.8999 8.82129 3.08562 8.49071 3.4162L3.74757 8.15934C3.20482 8.7021 2.8999 9.43822 2.8999 10.2058C2.8999 11.8042 4.19564 13.0999 5.79401 13.0999C6.56158 13.0999 7.29771 12.795 7.84046 12.2522L12.4463 7.64635L13.1535 8.35346L8.54757 12.9593C7.81728 13.6896 6.8268 14.0999 5.79401 14.0999C3.64336 14.0999 1.8999 12.3564 1.8999 10.2058C1.8999 9.17301 2.31017 8.18252 3.04046 7.45224L7.78361 2.70909Z"
  }));
};

var Publish = function Publish() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.1001 1.8999H11.6001C12.7599 1.8999 13.7001 2.8401 13.7001 3.9999V11.1999C13.7001 12.3597 12.7599 13.2999 11.6001 13.2999H6.5001V13.9999H5.5001V13.2999H3.1001V1.8999ZM6.5001 12.2999H11.6001C12.2076 12.2999 12.7001 11.8074 12.7001 11.1999V3.9999C12.7001 3.39239 12.2076 2.8999 11.6001 2.8999H6.5001V12.2999ZM5.5001 2.8999V12.2999H4.1001V2.8999H5.5001ZM11.2001 6.0999H8.0001V5.0999H11.2001V6.0999Z"
  });
};

var Groups = function Groups() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.4 5.8C5.1732 5.8 5.8 5.1732 5.8 4.4C5.8 3.6268 5.1732 3 4.4 3C3.6268 3 3 3.6268 3 4.4C3 5.1732 3.6268 5.8 4.4 5.8ZM6.74784 4.9C6.55199 5.82422 5.82422 6.55199 4.9 6.74784V9.25216C5.82422 9.44801 6.55199 10.1758 6.74784 11.1H9.25216C9.44801 10.1758 10.1758 9.44801 11.1 9.25216V6.74784C10.1758 6.55199 9.44801 5.82422 9.25216 4.9H6.74784ZM9.25216 3.9C9.48219 2.8145 10.446 2 11.6 2C12.9255 2 14 3.07452 14 4.4C14 5.55402 13.1855 6.51781 12.1 6.74784V9.25216C13.1855 9.48219 14 10.446 14 11.6C14 12.9255 12.9255 14 11.6 14C10.446 14 9.48219 13.1855 9.25216 12.1H6.74784C6.51781 13.1855 5.55402 14 4.4 14C3.07452 14 2 12.9255 2 11.6C2 10.446 2.8145 9.48219 3.9 9.25216V6.74784C2.8145 6.51781 2 5.55402 2 4.4C2 3.07452 3.07452 2 4.4 2C5.55402 2 6.51781 2.8145 6.74784 3.9H9.25216ZM11.6 5.8C12.3732 5.8 13 5.1732 13 4.4C13 3.6268 12.3732 3 11.6 3C10.8268 3 10.2 3.6268 10.2 4.4C10.2 5.1732 10.8268 5.8 11.6 5.8ZM13 11.6C13 12.3732 12.3732 13 11.6 13C10.8268 13 10.2 12.3732 10.2 11.6C10.2 10.8268 10.8268 10.2 11.6 10.2C12.3732 10.2 13 10.8268 13 11.6ZM4.4 13C5.1732 13 5.8 12.3732 5.8 11.6C5.8 10.8268 5.1732 10.2 4.4 10.2C3.6268 10.2 3 10.8268 3 11.6C3 12.3732 3.6268 13 4.4 13Z"
  });
};

var Gear = function Gear() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.16271 3.76511L4.90354 2.81793C4.54968 3.02032 4.21841 3.25634 3.91432 3.5215L4.43733 4.95812C4.55802 5.28965 4.30665 5.63852 3.95397 5.62899L2.37764 5.58635C2.21487 5.94798 2.08756 6.3283 2 6.72309L3.28659 7.58453C3.58236 7.78256 3.58236 8.21744 3.28659 8.41547L2 9.27691C2.08756 9.6717 2.21487 10.052 2.37764 10.4136L3.95397 10.371C4.30665 10.3615 4.55802 10.7104 4.43733 11.0419L3.91432 12.4785C4.21841 12.7437 4.54968 12.9797 4.90354 13.1821L6.16271 12.2349C6.44057 12.0259 6.84165 12.1573 6.942 12.4902L7.38826 13.9706C7.58947 13.99 7.79355 14 8 14C8.20645 14 8.41053 13.99 8.61174 13.9706L9.058 12.4902C9.15835 12.1573 9.55943 12.0259 9.8373 12.2349L11.0965 13.1821C11.4503 12.9797 11.7816 12.7437 12.0857 12.4785L11.5627 11.0419C11.442 10.7104 11.6933 10.3615 12.046 10.371L13.6224 10.4136C13.7851 10.052 13.9124 9.6717 14 9.27691L12.7134 8.41547C12.4176 8.21744 12.4176 7.78256 12.7134 7.58453L14 6.72309C13.9124 6.3283 13.7851 5.94798 13.6224 5.58636L12.046 5.62899C11.6933 5.63852 11.442 5.28965 11.5627 4.95812L12.0857 3.5215C11.7816 3.25634 11.4503 3.02032 11.0965 2.81793L9.8373 3.76511C9.55943 3.97412 9.15835 3.84274 9.058 3.50984L8.61174 2.02941C8.41053 2.00996 8.20645 2 8 2C7.79355 2 7.58947 2.00996 7.38826 2.02941L6.942 3.50984C6.84165 3.84274 6.44057 3.97412 6.16271 3.76511ZM8 11C9.65685 11 11 9.65685 11 8C11 6.34315 9.65685 5 8 5C6.34315 5 5 6.34315 5 8C5 9.65685 6.34315 11 8 11Z"
  });
};

var LeapArrow = function LeapArrow() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9.28539 3.65234L9.97303 3.00035L14 6.81854L9.97303 10.6367L9.28539 9.98473L12.1348 7.28729L4.97528 7.28728C3.87865 7.28728 2.98876 8.1353 2.98876 9.17933L2.98876 12L2 12L2 9.17933C2 7.61967 3.33483 6.34978 4.97528 6.34978L12.1348 6.34979L9.28539 3.65234Z"
  });
};

var Home = function Home() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 1.34155L14.5 6.91298L14.5001 14.5001H9.21429V11.4287C9.21429 10.758 8.67063 10.2144 8 10.2144C7.32937 10.2144 6.78572 10.758 6.78572 11.4287V14.5001H1.50006L1.5 6.91298L8 1.34155ZM2.5 7.37291L2.50005 13.5001H5.78572V11.4287C5.78572 10.2057 6.77709 9.21438 8 9.21438C9.22292 9.21438 10.2143 10.2057 10.2143 11.4287V13.5001H13.5001L13.5 7.37292L8 2.65863L2.5 7.37291Z"
  });
};

var Menu$1 = function Menu() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 8.5H2V7.5H14V8.5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 2.5H14V3.5H2V2.5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 13.5H2V12.5H14V13.5Z"
  }));
};

var Node = function Node() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 8C3 10.7614 5.23858 13 8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7C8.55228 7 9 7.44772 9 8Z"
  }));
};

var BootNode = function BootNode() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.5 1.5V5.73077H7.5V1.5H8.5ZM5.80029 6.5074L3.03106 3.73817L3.73817 3.03106L6.5074 5.80029L5.80029 6.5074ZM9.4926 5.80029L12.2618 3.03106L12.9689 3.73817L10.1997 6.5074L9.4926 5.80029ZM10.2699 7.49519L14.5006 7.50065L14.4994 8.50064L10.2686 8.49519L10.2699 7.49519ZM1.5 7.49583H5.73077V8.49583H1.5V7.49583ZM6.5074 10.1997L3.73817 12.9689L3.03106 12.2618L5.80029 9.4926L6.5074 10.1997ZM12.2618 12.9689L9.4926 10.1997L10.1997 9.4926L12.9689 12.2618L12.2618 12.9689ZM8.5 10.2692V14.5H7.5V10.2692H8.5Z"
  });
};

var ShipActivated = function ShipActivated() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.09862 8L4.72266 6.41603L5.27736 5.58397L7.50001 7.06574V4.5H8.50001V7.06574L10.7227 5.58397L11.2774 6.41603L8.90139 8L11.2774 9.58397L10.7227 10.416L8.50001 8.93426V11.5H7.50001V8.93426L5.27736 10.416L4.72266 9.58397L7.09862 8Z"
  });
};

var ShipSpawned = function ShipSpawned() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "2"
  }));
};

var EscapeRequested = function EscapeRequested() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.5355 11.5355C10.6307 12.4404 9.38071 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C9.38071 3 10.6307 3.55964 11.5355 4.46447L12.2426 3.75736C11.1569 2.67157 9.65685 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C9.65685 14 11.1569 13.3284 12.2426 12.2426L11.5355 11.5355Z"
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "2"
  }));
};

var EscapeApproved = function EscapeApproved() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.5355 11.5355C10.6307 12.4404 9.38071 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C9.38071 3 10.6307 3.55964 11.5355 4.46447L12.2426 3.75736C11.1569 2.67157 9.65685 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C9.65685 14 11.1569 13.3284 12.2426 12.2426L11.5355 11.5355Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.3536 5.85355L10 10.2071L7.64645 7.85355L8.35355 7.14645L10 8.79289L13.6464 5.14645L14.3536 5.85355Z"
  }));
};

var EscapeRejected = function EscapeRejected() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.5355 11.5355C10.6307 12.4404 9.38071 13 8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C9.38071 3 10.6307 3.55964 11.5355 4.46447L12.2426 3.75736C11.1569 2.67157 9.65685 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C9.65685 14 11.1569 13.3284 12.2426 12.2426L11.5355 11.5355Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.2929 8L9.64645 6.35355L10.3536 5.64645L12 7.29289L13.6464 5.64645L14.3536 6.35355L12.7071 8L14.3536 9.64645L13.6464 10.3536L12 8.70711L10.3536 10.3536L9.64645 9.64645L11.2929 8Z"
  }));
};

var EjectedSponsor = function EjectedSponsor() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.00014 7.29279L10.3769 4.91605L11.084 5.62315L8.70725 7.9999L11.084 10.3766L10.3769 11.0838L8.00014 8.70701L5.6234 11.0838L4.91629 10.3766L7.29304 7.9999L4.91629 5.62315L5.6234 4.91605L8.00014 7.29279Z"
  }));
};

var BrokeContinuity = function BrokeContinuity() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 8.70714L4.35355 12.3536L3.64645 11.6465L7.29289 8.00004L3.64645 4.35359L4.35355 3.64648L8 7.29293L11.6464 3.64648L12.3536 4.35359L8.70711 8.00004L12.3536 11.6465L11.6464 12.3536L8 8.70714ZM5 8.50004H2V7.50004H5V8.50004ZM11 7.50004H14V8.50004H11V7.50004Z"
  });
};

var Upload = function Upload() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 8H3V12H13V8H14V13H2V8Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 2.9645L5.11092 5.35359L4.40381 4.64648L8 1.05029L11.5962 4.64648L10.8891 5.35359L8.5 2.9645L8.5 10.2427L7.5 10.2427V2.9645Z"
  }));
};

var Download = function Download() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 8H3V12H13V8H14V13H2V8Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8.5 8.82846L10.8891 6.43938L11.5962 7.14648L8 10.7427L4.4038 7.14648L5.11091 6.43938L7.5 8.82846L7.5 1.55029L8.5 1.55029V8.82846Z"
  }));
};

var Dojo = function Dojo() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14.4999 2.5L1.50008 2.50017L1.5 13.5H14.5L14.4999 2.5ZM1.50007 1.50017L14.4999 1.5C15.0522 1.49999 15.4999 1.9477 15.4999 2.49999L15.5 13.5C15.5 14.0523 15.0523 14.5 14.5 14.5H1.5C0.947713 14.5 0.499996 14.0523 0.5 13.5L0.500082 2.50016C0.500086 1.94789 0.947792 1.50018 1.50007 1.50017ZM8.02808 8.0001L3.74266 5.42885L4.25716 4.57136L9.97173 8.0001L4.25716 11.4288L3.74266 10.5714L8.02808 8.0001ZM12.4999 11.5001H8.99991V10.5001H12.4999V11.5001Z"
  });
};

var Adjust = function Adjust() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.1 8.35989L4.1 2H5.1L5.1 8.35989C6.0184 8.5842 6.7 9.4125 6.7 10.4C6.7 11.3875 6.0184 12.2158 5.1 12.4401V14H4.1V12.4401C3.1816 12.2158 2.5 11.3875 2.5 10.4C2.5 9.4125 3.1816 8.5842 4.1 8.35989ZM10.5 3.55989L10.5 2H11.5L11.5 3.55989C12.4184 3.7842 13.1 4.6125 13.1 5.6C13.1 6.5875 12.4184 7.4158 11.5 7.64011V14H10.5V7.64011C9.5816 7.4158 8.9 6.5875 8.9 5.6C8.9 4.6125 9.5816 3.7842 10.5 3.55989ZM11 4.5C10.3925 4.5 9.9 4.99249 9.9 5.6C9.9 6.20751 10.3925 6.7 11 6.7C11.6075 6.7 12.1 6.20751 12.1 5.6C12.1 4.99249 11.6075 4.5 11 4.5ZM4.6 9.3C3.99249 9.3 3.5 9.79249 3.5 10.4C3.5 11.0075 3.99249 11.5 4.6 11.5C5.20751 11.5 5.7 11.0075 5.7 10.4C5.7 9.79249 5.20751 9.3 4.6 9.3Z"
  });
};

var WestCarat = function WestCarat() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.7764 4.55273L3.88199 7.99995L10.7764 11.4472L11.2236 10.5527L6.11806 7.99995L11.2236 5.44716L10.7764 4.55273Z"
  });
};

var EastCarat = function EastCarat() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.22358 4.55273L12.118 7.99995L5.22358 11.4472L4.77637 10.5527L9.88194 7.99995L4.77637 5.44716L5.22358 4.55273Z"
  });
};

var Keyfile = function Keyfile() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.05556 5.11111C4.91467 5.11111 5.61111 4.41467 5.61111 3.55556C5.61111 2.69645 4.91467 2 4.05556 2C3.19645 2 2.5 2.69645 2.5 3.55556C2.5 4.41467 3.19645 5.11111 4.05556 5.11111ZM4.05556 6.11111C5.46695 6.11111 6.61111 4.96695 6.61111 3.55556C6.61111 2.14416 5.46695 1 4.05556 1C2.64416 1 1.5 2.14416 1.5 3.55556C1.5 4.96695 2.64416 6.11111 4.05556 6.11111Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.55566 5.47217H4.55566V8.8055H6V9.8055H4.55566V10.7222H6.61122V11.7222H4.55566V12.4999H3.55566V5.47217Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.5 2.5H7V1.5H10.2071L13.5 4.79289V14.5H3.5V13.5H12.5V5.5H9.5V2.5ZM10.5 3.2071L11.7929 4.5H10.5V3.2071Z"
  }));
};

var Image = function Image() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 3H3L3 13H13V3ZM3 2C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.99996 8.29297L6.99996 11.293L4.99996 9.29297L2.14641 12.1465L2.85352 12.8536L4.99996 10.7072L6.99996 12.7072L9.99996 9.70718L13.1464 12.8536L13.8535 12.1465L9.99996 8.29297Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 7C6.55228 7 7 6.55228 7 6C7 5.44772 6.55228 5 6 5C5.44772 5 5 5.44772 5 6C5 6.55228 5.44772 7 6 7ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z"
  }));
};

var Swap = function Swap() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.91421 5.34608L7.27996 7.71182L6.57285 8.41893L3 4.84608L6.53553 1.31055L7.24264 2.01765L4.91421 4.34608H12.1924V5.34608H4.91421Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.7782 11.3463L8.41243 8.98054L9.11954 8.27344L12.6924 11.8463L9.15685 15.3818L8.44975 14.6747L10.7782 12.3463H3.5L3.5 11.3463H10.7782Z"
  }));
};

var AddFile = function AddFile() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.2071 1.5L13.5 4.7929V14.5H2.5L2.50011 1.50013L10.2071 1.5ZM3.5001 2.50012L3.50001 13.5H12.5V5.5H9.5V2.50001L3.5001 2.50012ZM10.5 3.20711V4.5H11.7929L10.5 3.20711Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 8V6.5H8.5V8H10V9H8.5V10.5H7.5V9H6V8H7.5Z"
  }));
};

var Collection = function Collection() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 2H14V6H13V12.5C13 13.3284 12.3284 14 11.5 14H4.5C3.67157 14 3 13.3284 3 12.5V6H2V2ZM3 5H4V12.5C4 12.7761 4.22386 13 4.5 13H11.5C11.7761 13 12 12.7761 12 12.5V5H13V3H3V5ZM9.5 9H6.5V8H9.5V9Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5 6H3.5V5H12.5V6Z"
  }));
};

var Note = function Note() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.7113 1.5L13.5 4.36844V14.5H2.5L2.50011 1.50013L10.7113 1.5ZM3.5001 2.50012L3.50001 13.5H12.5V4.77443L10.2888 2.50001L3.5001 2.50012ZM5.00035 4.92599L9.33368 4.92891L9.33301 5.92891L4.99968 5.92599L5.00035 4.92599ZM5.00001 7.49608H11V8.49608H5.00001V7.49608ZM5.00057 10.0653L11.0006 10.072L10.9995 11.072L4.99945 11.0653L5.00057 10.0653Z"
  });
};

var Users = function Users() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 10H5C3.89543 10 3 10.8954 3 12V13H10V12C10 10.8954 9.10457 10 8 10ZM5 9C3.34315 9 2 10.3431 2 12V14H11V12C11 10.3431 9.65685 9 8 9H5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 11.5C13 10.9477 12.5523 10.5 12 10.5V9.5C13.1046 9.5 14 10.3954 14 11.5V14H12V13H13V11.5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 8C12.5523 8 13 7.55228 13 7C13 6.44772 12.5523 6 12 6C11.4477 6 11 6.44772 11 7C11 7.55228 11.4477 8 12 8ZM12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5 7C7.88071 7 9 5.88071 9 4.5C9 3.11929 7.88071 2 6.5 2C5.11929 2 4 3.11929 4 4.5C4 5.88071 5.11929 7 6.5 7ZM6.5 8C8.433 8 10 6.433 10 4.5C10 2.567 8.433 1 6.5 1C4.567 1 3 2.567 3 4.5C3 6.433 4.567 8 6.5 8Z"
  }));
};

var Server = function Server() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5 3H3.5C3.22386 3 3 3.22386 3 3.5V4.5C3 4.77614 3.22386 5 3.5 5H12.5C12.7761 5 13 4.77614 13 4.5V3.5C13 3.22386 12.7761 3 12.5 3ZM3.5 2C2.67157 2 2 2.67157 2 3.5V4.5C2 5.32843 2.67157 6 3.5 6H12.5C13.3284 6 14 5.32843 14 4.5V3.5C14 2.67157 13.3284 2 12.5 2H3.5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5 6H3.5C3.22386 6 3 6.22386 3 6.5V8.5C3 8.77614 3.22386 9 3.5 9H12.5C12.7761 9 13 8.77614 13 8.5V6.5C13 6.22386 12.7761 6 12.5 6ZM3.5 5C2.67157 5 2 5.67157 2 6.5V8.5C2 9.32843 2.67157 10 3.5 10H12.5C13.3284 10 14 9.32843 14 8.5V6.5C14 5.67157 13.3284 5 12.5 5H3.5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.5 10H3.5C3.22386 10 3 10.2239 3 10.5V12.5C3 12.7761 3.22386 13 3.5 13H12.5C12.7761 13 13 12.7761 13 12.5V10.5C13 10.2239 12.7761 10 12.5 10ZM3.5 9C2.67157 9 2 9.67157 2 10.5V12.5C2 13.3284 2.67157 14 3.5 14H12.5C13.3284 14 14 13.3284 14 12.5V10.5C14 9.67157 13.3284 9 12.5 9H3.5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 8H4V7H8V8ZM8 12H4V11H8V12Z"
  }));
};

var Info = function Info() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.2334 7.032H9.0014V11H7.8254V7.952H6.2334V7.032ZM8.3614 6.448C8.13207 6.448 7.94273 6.384 7.7934 6.256C7.6494 6.128 7.5774 5.95467 7.5774 5.736C7.5774 5.51733 7.6494 5.34133 7.7934 5.208C7.94273 5.06933 8.13207 5 8.3614 5C8.59073 5 8.7774 5.06933 8.9214 5.208C9.07073 5.34133 9.1454 5.51733 9.1454 5.736C9.1454 5.95467 9.07073 6.128 8.9214 6.256C8.7774 6.384 8.59073 6.448 8.3614 6.448Z"
  }));
};

var Dashboard = function Dashboard() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 3H3L3 6H6V3ZM3 2C2.44772 2 2 2.44772 2 3V6C2 6.55228 2.44772 7 3 7H6C6.55228 7 7 6.55228 7 6V3C7 2.44772 6.55228 2 6 2H3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 3H10L10 6H13V3ZM10 2C9.44772 2 9 2.44772 9 3V6C9 6.55228 9.44772 7 10 7H13C13.5523 7 14 6.55228 14 6V3C14 2.44772 13.5523 2 13 2H10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 10H10L10 13H13V10ZM10 9C9.44772 9 9 9.44772 9 10V13C9 13.5523 9.44772 14 10 14H13C13.5523 14 14 13.5523 14 13V10C14 9.44772 13.5523 9 13 9H10Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 10H3L3 13H6V10ZM3 9C2.44772 9 2 9.44772 2 10V13C2 13.5523 2.44772 14 3 14H6C6.55228 14 7 13.5523 7 13V10C7 9.44772 6.55228 9 6 9H3Z"
  }));
};

var Tutorial = function Tutorial() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 6V8H8V6H9ZM9 11.5V15H8V11.5H9Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.79289 6L2.29289 3.5L4.79289 0.999996L13 0.999996L13 6L4.79289 6ZM12 5L12 2L5.20711 2L3.70711 3.5L5.20711 5L12 5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 7L12.2071 7L14.7071 9.5L12.2071 12H4L4 7ZM5 8V11H11.7929L13.2929 9.5L11.7929 8L5 8Z"
  }));
};

var Visible = function Visible() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M0 8C0 8 2.95054 13 8 13C13.0495 13 16 8 16 8C16 8 13.0495 3 8 3C2.95054 3 0 8 0 8ZM1.2052 8C1.24559 8.05552 1.28944 8.11466 1.33669 8.17696C1.66482 8.60961 2.15124 9.18667 2.78078 9.76157C4.05021 10.9208 5.81985 12 8 12C10.1802 12 11.9498 10.9208 13.2192 9.76157C13.8488 9.18667 14.3352 8.60961 14.6633 8.17696C14.7106 8.11466 14.7544 8.05552 14.7948 8C14.7544 7.94448 14.7106 7.88534 14.6633 7.82304C14.3352 7.39039 13.8488 6.81333 13.2192 6.23843C11.9498 5.0792 10.1802 4 8 4C5.81985 4 4.05021 5.0792 2.78078 6.23843C2.15124 6.81333 1.66482 7.39039 1.33669 7.82304C1.28944 7.88534 1.24559 7.94448 1.2052 8ZM0.860361 7.49031C0.860155 7.48997 0.860124 7.48992 0.860269 7.49016L0.860361 7.49031Z"
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "3"
  }));
};

var Hidden = function Hidden() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("rect", {
    x: "3.05029",
    y: "0.635986",
    width: "16",
    height: "1",
    transform: "rotate(45 3.05029 0.635986)"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.26314e-07 7.00005C1.26314e-07 7.00005 2.95054 12 8 12C9.09567 12 10.0925 11.7646 10.9818 11.396L10.2072 10.6214C9.52841 10.8579 8.79124 11 8 11C5.81985 11 4.05021 9.92085 2.78078 8.76162C2.15124 8.18672 1.66482 7.60966 1.33669 7.17701C1.28944 7.11471 1.24559 7.05557 1.2052 7.00005C1.24559 6.94453 1.28944 6.88539 1.33669 6.82308C1.66482 6.39043 2.15124 5.81337 2.78078 5.23848C3.12449 4.9246 3.50488 4.61659 3.92015 4.33429L3.2017 3.61584C1.13496 5.07674 1.26314e-07 7.00005 1.26314e-07 7.00005ZM4.06753 3.06745C5.17694 2.44406 6.49527 2.00005 8 2.00005C13.0495 2.00005 16 7.00005 16 7.00005C16 7.00005 14.546 9.46399 11.9326 10.9326L11.1948 10.1947C11.9667 9.79532 12.6442 9.28668 13.2192 8.76162C13.8488 8.18672 14.3352 7.60966 14.6633 7.17701C14.7106 7.11471 14.7544 7.05557 14.7948 7.00005C14.7544 6.94453 14.7106 6.88539 14.6633 6.82308C14.3352 6.39043 13.8488 5.81337 13.2192 5.23848C11.9498 4.07924 10.1802 3.00005 8 3.00005C6.80739 3.00005 5.73763 3.32299 4.80539 3.80531L4.06753 3.06745ZM5.87874 4.87867C6.42163 4.33581 7.1716 4.00005 8 4.00005C9.65685 4.00005 11 5.34319 11 7.00005C11 7.82844 10.6642 8.57842 10.1214 9.12131L5.87874 4.87867ZM5.29241 5.70655L9.2935 9.70764C8.90184 9.89508 8.46318 10 8 10C6.34315 10 5 8.6569 5 7.00005C5 6.53687 5.10497 6.09821 5.29241 5.70655ZM0.860361 6.49036C0.860155 6.49002 0.860124 6.48996 0.860269 6.49021L0.860361 6.49036Z"
  }));
};

var LogOut = function LogOut() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 2H9V3H4V12H9V13H3V2ZM10.3536 4.64645L13.2071 7.5L10.3536 10.3536L9.64645 9.64645L11.2929 8H6V7H11.2929L9.64645 5.35355L10.3536 4.64645Z"
  }));
};

var LogIn = function LogIn() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 2H13V13H7V12H12V3H7V2ZM7.35355 4.64645L10.2071 7.5L7.35355 10.3536L6.64645 9.64645L8.29289 8H3V7H8.29289L6.64645 5.35355L7.35355 4.64645Z"
  }));
};

var Search$1 = function Search() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 7.5C11 9.433 9.433 11 7.5 11C5.567 11 4 9.433 4 7.5C4 5.567 5.567 4 7.5 4C9.433 4 11 5.567 11 7.5ZM10.3088 11.016C9.53901 11.6318 8.56251 12 7.5 12C5.01472 12 3 9.98528 3 7.5C3 5.01472 5.01472 3 7.5 3C9.98528 3 12 5.01472 12 7.5C12 8.56251 11.6318 9.53901 11.016 10.3088L13.3536 12.6464L12.6464 13.3536L10.3088 11.016Z"
  }));
};

var Ellipsis = function Ellipsis() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 8C1.5 7.17157 2.17157 6.5 3 6.5C3.82843 6.5 4.5 7.17157 4.5 8C4.5 8.82843 3.82843 9.5 3 9.5C2.17157 9.5 1.5 8.82843 1.5 8ZM6.5 8C6.5 7.17157 7.17157 6.5 8 6.5C8.82843 6.5 9.5 7.17157 9.5 8C9.5 8.82843 8.82843 9.5 8 9.5C7.17157 9.5 6.5 8.82843 6.5 8ZM11.5 8C11.5 7.17157 12.1716 6.5 13 6.5C13.8284 6.5 14.5 7.17157 14.5 8C14.5 8.82843 13.8284 9.5 13 9.5C12.1716 9.5 11.5 8.82843 11.5 8Z"
  }));
};

var Bitcoin = function Bitcoin() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M4.78285 11.3956L7.62037 11.9472C9.47626 12.3079 10.4191 11.5521 10.6486 10.371C10.8901 9.12866 10.1624 8.28684 9.45044 8.1007L9.46534 8.02401C10.176 7.97114 10.8606 7.64261 11.0574 6.63031C11.281 5.47996 10.696 4.39528 9.05481 4.07627L6.30933 3.5426L4.78285 11.3956ZM5.89778 10.7369L6.42847 8.00673L8.36105 8.38238C9.38869 8.58214 9.89872 9.39756 9.74369 10.1951C9.60952 10.8853 9.02672 11.3451 7.78435 11.1036L5.89778 10.7369ZM6.58946 7.17848L7.0963 4.57103L8.89084 4.91986C9.93382 5.12259 10.2866 5.7642 10.1525 6.45441C9.99147 7.28265 9.21225 7.6883 8.35333 7.52134L6.58946 7.17848Z"
  }), /*#__PURE__*/React__namespace.createElement("rect", {
    x: "8.07886",
    y: "2.86804",
    width: "1",
    height: "1",
    transform: "rotate(11 8.07886 2.86804)"
  }), /*#__PURE__*/React__namespace.createElement("rect", {
    x: "6.36157",
    y: "11.7025",
    width: "1",
    height: "1",
    transform: "rotate(11 6.36157 11.7025)"
  }));
};

var Messages = function Messages() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.2894 13.0305L13.603 12.6115C13.9633 12.1301 14.1763 11.5339 14.1763 10.885C14.1763 9.29167 12.8846 8 11.2913 8C9.69792 8 8.40625 9.29167 8.40625 10.885C8.40625 12.4784 9.69792 13.77 11.2913 13.77C11.7632 13.77 12.2059 13.6575 12.5968 13.4587L12.9696 13.2691L13.4189 13.4189L13.2894 13.0305ZM14.8419 14.5257C14.907 14.7211 14.7211 14.907 14.5257 14.8419L13.0501 14.35C12.522 14.6186 11.9243 14.77 11.2913 14.77C9.14563 14.77 7.40625 13.0307 7.40625 10.885C7.40625 8.73938 9.14563 7 11.2913 7C13.4369 7 15.1763 8.73938 15.1763 10.885C15.1763 11.7572 14.8889 12.5623 14.4036 13.2107L14.8419 14.5257Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2.95245 9.37231L3.15819 9.75316L3.0213 10.1638L2.43629 11.9189L4.19133 11.3338L4.60198 11.197L4.98284 11.4027C5.68769 11.7835 6.49464 12 7.35515 12C7.4262 12 7.4969 11.9985 7.56722 11.9956C7.67016 12.3413 7.81992 12.6668 8.00914 12.9648C7.79434 12.9881 7.57614 13 7.35515 13C6.32463 13 5.35479 12.7402 4.50756 12.2825L2.041 13.1047L2.00153 13.1179L1.64572 13.2365L1.32949 13.3419C1.13405 13.407 0.948116 13.2211 1.01326 13.0257L1.11867 12.7094L1.23728 12.3536L1.25043 12.3141L2.07262 9.84759C1.61494 9.00035 1.35515 8.03052 1.35515 7C1.35515 3.68629 4.04144 1 7.35515 1C10.6689 1 13.3551 3.68629 13.3551 7C13.3551 7.1943 13.3459 7.38644 13.3279 7.576C13.0276 7.39079 12.7002 7.24531 12.353 7.14689C12.3544 7.0981 12.3551 7.04913 12.3551 7C12.3551 4.23858 10.1166 2 7.35515 2C4.59372 2 2.35515 4.23858 2.35515 7C2.35515 7.8605 2.57169 8.66745 2.95245 9.37231Z"
  }));
};

var User = function User() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 10H6C4.89543 10 4 10.8954 4 12V13H11V12C11 10.8954 10.1046 10 9 10ZM6 9C4.34315 9 3 10.3431 3 12V14H12V12C12 10.3431 10.6569 9 9 9H6Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.5 7C8.88071 7 10 5.88071 10 4.5C10 3.11929 8.88071 2 7.5 2C6.11929 2 5 3.11929 5 4.5C5 5.88071 6.11929 7 7.5 7ZM7.5 8C9.433 8 11 6.433 11 4.5C11 2.567 9.433 1 7.5 1C5.567 1 4 2.567 4 4.5C4 6.433 5.567 8 7.5 8Z"
  }));
};

var Public = function Public() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5764 2.68741C3.64234 3.47359 1.90113 6.48944 2.68731 9.42351C2.95022 10.4047 3.46247 11.2525 4.13762 11.9169L4.34827 11.6979L3.39808 9.68284C3.30715 9.49001 3.28454 9.27199 3.33396 9.0646L3.80774 9.17752L3.33396 9.0646L3.65944 7.69896C3.6883 7.57787 3.74094 7.46373 3.81431 7.36317L4.58837 6.30227C4.69817 6.15179 4.85024 6.03736 5.02524 5.97353C5.20024 5.90971 5.39027 5.89938 5.57117 5.94384L5.45181 6.42939L5.57117 5.94384L6.06948 6.06634C6.28964 6.12046 6.48279 6.2524 6.61327 6.43781L6.68122 6.53436L6.79877 6.0837C6.83102 5.96008 6.88815 5.84434 6.96666 5.74356C7.04518 5.64278 7.14344 5.55908 7.25542 5.49759C7.3674 5.43609 7.49076 5.39809 7.61793 5.38592C7.7451 5.37374 7.87342 5.38764 7.99504 5.42676L8.88187 5.71206C8.82171 5.55491 8.80456 5.38357 8.83359 5.21601C8.87095 5.00038 8.98245 4.80457 9.14883 4.6624L10.1592 3.79901L9.66337 2.75688C8.69529 2.44873 7.63057 2.40495 6.5764 2.68741ZM11.1033 3.45909C11.1747 3.63339 11.1922 3.82557 11.1528 4.01057C11.1098 4.21257 11.0014 4.39476 10.8444 4.52893L9.83579 5.39075C9.91308 5.54423 9.94692 5.7163 9.93312 5.88823C9.91797 6.07707 9.84605 6.25691 9.72682 6.40413C9.60759 6.55136 9.44662 6.65907 9.26505 6.71314C9.08348 6.7672 8.8898 6.76509 8.70946 6.70707L7.75013 6.39845L7.61568 6.91387C7.57048 7.08718 7.47666 7.24394 7.34529 7.36567C7.21392 7.4874 7.05048 7.56903 6.87424 7.60092C6.69801 7.63282 6.51633 7.61365 6.35063 7.54568C6.18492 7.47771 6.04212 7.36378 5.93904 7.21732L5.80861 7.03198L5.37213 6.92469L4.62936 7.9427L4.31167 9.27566L5.27065 11.3094C5.35181 11.4815 5.37877 11.6742 5.34796 11.8619C5.31715 12.0497 5.23003 12.2237 5.09813 12.3608L4.91369 12.5526C6.18923 13.4165 7.81855 13.7426 9.42341 13.3126C10.5834 13.0018 11.557 12.3424 12.2616 11.4774L11.6505 11.1239L10.9846 11.3023C10.8543 11.3372 10.718 11.3436 10.585 11.3212C10.452 11.2987 10.3255 11.2478 10.2139 11.172C10.1023 11.0962 10.0084 10.9973 9.93846 10.8819C9.86855 10.7666 9.82431 10.6375 9.80875 10.5035L9.69093 9.4889C9.67381 9.3415 9.69187 9.19214 9.74362 9.05306C9.79538 8.91398 9.87936 8.78915 9.98867 8.6888L11.2279 7.55116C11.3683 7.42225 11.5446 7.33912 11.7334 7.31283C11.9222 7.28654 12.1146 7.31833 12.2849 7.40398L13.5013 8.0157C13.5023 7.54055 13.4414 7.05743 13.3125 6.5765C12.9583 5.25451 12.1514 4.17469 11.1033 3.45909ZM13.3939 9.08103L11.8732 8.31626L10.6878 9.40443L10.7939 10.3181L11.4161 10.1514C11.5354 10.1194 11.6598 10.1113 11.7822 10.1275C11.9046 10.1437 12.0227 10.1838 12.1295 10.2457L12.8215 10.6461C13.0889 10.1591 13.2831 9.63144 13.3939 9.08103ZM11.8356 8.29736L11.8358 8.29745L11.8356 8.29736ZM4.30256 9.25633C4.30258 9.25636 4.30259 9.25639 4.3026 9.25642L4.30256 9.25633ZM5.83063 7.0374C5.83067 7.03741 5.83072 7.03742 5.83076 7.03743L5.8453 6.97827L5.83076 7.03743L5.83063 7.0374ZM4.37721 11.6678L4.37736 11.6677L4.42127 11.7099L4.72313 12.0002L4.42127 11.7099L4.37736 11.6677C4.37731 11.6677 4.37726 11.6678 4.37721 11.6678ZM3.84133 12.9963C5.40903 14.2989 7.56367 14.8462 9.68223 14.2785C13.1498 13.3494 15.2075 9.78521 14.2784 6.31768C13.3493 2.85015 9.78511 0.792363 6.31758 1.72148C2.85005 2.65061 0.792265 6.2148 1.72139 9.68233C2.08284 11.0313 2.8431 12.1669 3.84133 12.9963Z"
  }));
};

var Notifications = function Notifications() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13 3H3L3 13H13V3ZM3 2C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 8.5H6.5V9C6.5 9.82843 7.17157 10.5 8 10.5C8.82843 10.5 9.5 9.82843 9.5 9V8.5H13V9.5H10.45C10.2184 10.6411 9.20948 11.5 8 11.5C6.79052 11.5 5.78164 10.6411 5.55001 9.5H3V8.5Z"
  }));
};

var AddUser = function AddUser() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 10H5C3.89543 10 3 10.8954 3 12V13H10V12C10 10.8954 9.10457 10 8 10ZM5 9C3.34315 9 2 10.3431 2 12V14H11V12C11 10.3431 9.65685 9 8 9H5Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.5 7C7.88071 7 9 5.88071 9 4.5C9 3.11929 7.88071 2 6.5 2C5.11929 2 4 3.11929 4 4.5C4 5.88071 5.11929 7 6.5 7ZM6.5 8C8.433 8 10 6.433 10 4.5C10 2.567 8.433 1 6.5 1C4.567 1 3 2.567 3 4.5C3 6.433 4.567 8 6.5 8Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 7V5H13V7H15V8H13V10H12V8H10V7H12Z"
  }));
};

var Delete = function Delete() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 3H6V4H10V3ZM11 4V3V2H10H6H5V3V4H4H2V5L3 5V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V5H14V4H12H11ZM12 5H11H10H6H5H4V13H12V5ZM6 7H7V11H6V7ZM10 7H9V11H10V7Z"
  }));
};

var Bug = function Bug() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.12336 10.9724C4.27259 11.2048 4.20521 11.5141 3.97286 11.6633C2.423 12.6587 1.5 14.1163 1.5 15.5C1.5 15.7762 1.27614 16 1 16C0.723858 16 0.5 15.7762 0.5 15.5C0.5 13.675 1.69284 11.9392 3.43246 10.8219C3.66481 10.6727 3.97414 10.7401 4.12336 10.9724ZM12.0885 11.0936C12.2453 10.8663 12.5567 10.8092 12.784 10.966C14.4033 12.0833 15.5 13.7508 15.5 15.5C15.5 15.7762 15.2761 16 15 16C14.7239 16 14.5 15.7762 14.5 15.5C14.5 14.1743 13.6536 12.781 12.216 11.7891C11.9888 11.6323 11.9316 11.3209 12.0885 11.0936Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 12C11.5518 12 14 9.77405 14 7.5C14 5.22595 11.5518 3 8 3C4.4482 3 2 5.22595 2 7.5C2 9.77405 4.4482 12 8 12ZM8 13C11.866 13 15 10.5376 15 7.5C15 4.46243 11.866 2 8 2C4.13401 2 1 4.46243 1 7.5C1 10.5376 4.13401 13 8 13Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M6.09327 6.50001C6.09327 6.82773 5.8276 7.0934 5.49988 7.0934C5.17216 7.0934 4.90649 6.82773 4.90649 6.50001C4.90649 6.17229 5.17216 5.90662 5.49988 5.90662C5.8276 5.90662 6.09327 6.17229 6.09327 6.50001Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M3.29266 1.28598C3.29266 1.77528 2.89601 2.17193 2.40671 2.17193C1.91741 2.17193 1.52075 1.77528 1.52075 1.28598C1.52075 0.79668 1.91741 0.400024 2.40671 0.400024C2.89601 0.400024 3.29266 0.79668 3.29266 1.28598Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M14.1555 1.28598C14.1555 1.77528 13.7588 2.17193 13.2695 2.17193C12.7802 2.17193 12.3835 1.77528 12.3835 1.28598C12.3835 0.79668 12.7802 0.400024 13.2695 0.400024C13.7588 0.400024 14.1555 0.79668 14.1555 1.28598Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.0933 6.50001C11.0933 6.82773 10.8276 7.09341 10.4999 7.09341C10.1722 7.09341 9.90649 6.82773 9.90649 6.50001C9.90649 6.17229 10.1722 5.90662 10.4999 5.90662C10.8276 5.90662 11.0933 6.17229 11.0933 6.50001Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    opacity: "0.5",
    d: "M5 7.625C5 7.97018 4.55228 8.25 4 8.25C3.44772 8.25 3 7.97018 3 7.625C3 7.27982 3.44772 7 4 7C4.55228 7 5 7.27982 5 7.625Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    opacity: "0.5",
    d: "M13 7.625C13 7.97018 12.5523 8.25 12 8.25C11.4477 8.25 11 7.97018 11 7.625C11 7.27982 11.4477 7 12 7C12.5523 7 13 7.27982 13 7.625Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.70003 7.60003C5.92094 7.43434 6.23434 7.47912 6.40003 7.70003C7.20003 8.7667 8.80003 8.7667 9.60003 7.70003C9.76571 7.47912 10.0791 7.43434 10.3 7.60003C10.5209 7.76571 10.5657 8.07912 10.4 8.30003C9.20003 9.90003 6.80003 9.90003 5.60003 8.30003C5.43434 8.07912 5.47912 7.76571 5.70003 7.60003Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.70679 3.52678C4.43064 3.52678 4.20679 3.30292 4.20679 3.02678C4.20679 2.7627 4.06971 2.45678 3.81987 2.20693C3.57002 1.95709 3.2641 1.82001 3.00002 1.82001C2.72388 1.82001 2.50002 1.59616 2.50002 1.32001C2.50002 1.04387 2.72388 0.820014 3.00002 0.820014C3.58933 0.820014 4.13678 1.10963 4.52698 1.49982C4.91717 1.89002 5.20679 2.43747 5.20679 3.02678C5.20679 3.30292 4.98293 3.52678 4.70679 3.52678Z"
  }), /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11.3201 3.52678C11.5962 3.52678 11.8201 3.30292 11.8201 3.02678C11.8201 2.7627 11.9571 2.45678 12.207 2.20693C12.4568 1.95709 12.7628 1.82001 13.0268 1.82001C13.303 1.82001 13.5268 1.59616 13.5268 1.32001C13.5268 1.04387 13.303 0.820014 13.0268 0.820014C12.4375 0.820014 11.8901 1.10963 11.4999 1.49982C11.1097 1.89002 10.8201 2.43747 10.8201 3.02678C10.8201 3.30292 11.0439 3.52678 11.3201 3.52678Z"
  }));
};

var Pause = function Pause() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.5 4C5.22386 4 5 4.22386 5 4.5V11.5C5 11.7761 5.22386 12 5.5 12H6.5C6.77614 12 7 11.7761 7 11.5V4.5C7 4.22386 6.77614 4 6.5 4H5.5ZM9.5 4C9.22386 4 9 4.22386 9 4.5V11.5C9 11.7761 9.22386 12 9.5 12H10.5C10.7761 12 11 11.7761 11 11.5V4.5C11 4.22386 10.7761 4 10.5 4H9.5Z"
  });
};

var Next = function Next() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.25 7.56699C10.5833 7.75944 10.5833 8.24056 10.25 8.43301L5.75 11.0311C5.41667 11.2235 5 10.983 5 10.5981L5 5.40192C5 5.01702 5.41667 4.77646 5.75 4.96891L10.25 7.56699Z"
  }), /*#__PURE__*/React__namespace.createElement("rect", {
    x: "12",
    y: "4",
    width: "1",
    height: "8",
    rx: "0.5"
  }));
};

var Previous = function Previous() {
  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M5.75 8.43301C5.41667 8.24056 5.41667 7.75944 5.75 7.56699L10.25 4.96891C10.5833 4.77646 11 5.01702 11 5.40192L11 10.5981C11 10.983 10.5833 11.2235 10.25 11.0311L5.75 8.43301Z"
  }), /*#__PURE__*/React__namespace.createElement("rect", {
    x: "4",
    y: "12",
    width: "1",
    height: "8",
    rx: "0.5",
    transform: "rotate(-180 4 12)"
  }));
};

var Play = function Play() {
  return /*#__PURE__*/React__namespace.createElement("path", {
    d: "M11.25 7.56699C11.5833 7.75944 11.5833 8.24056 11.25 8.43301L6.75 11.0311C6.41667 11.2235 6 10.983 6 10.5981L6 5.40192C6 5.01702 6.41667 4.77646 6.75 4.96891L11.25 7.56699Z"
  });
};

var iconIndex = {
  Visible: Visible,
  Hidden: Hidden,
  Info: Info,
  Locked: Locked,
  Unlocked: Unlocked,
  ArrowRefresh: ArrowRefresh,
  ArrowExternal: ArrowExternal,
  Swap: Swap,
  Checkmark: Checkmark,
  CheckmarkBold: CheckmarkBold,
  Minus: Minus,
  X: X,
  XSmall: XSmall,
  Plus: Plus,
  PlusSmall: PlusSmall,
  ExclaimationMark: ExclaimationMark,
  ExclaimationMarkBold: ExclaimationMarkBold,
  Bullet: Bullet,
  LargeBullet: LargeBullet,
  Circle: Circle,
  ArrowEast: ArrowEast,
  ArrowSouth: ArrowSouth,
  ArrowWest: ArrowWest,
  ArrowNorth: ArrowNorth,
  ArrowNorthEast: ArrowNorthEast,
  ArrowSouthEast: ArrowSouthEast,
  ArrowSouthWest: ArrowSouthWest,
  ArrowNorthWest: ArrowNorthWest,
  ArrowExpand: ArrowExpand,
  WestCarat: WestCarat,
  EastCarat: EastCarat,
  Upload: Upload,
  Download: Download,
  LogOut: LogOut,
  LogIn: LogIn,
  Ellipsis: Ellipsis,
  Menu: Menu$1,
  Search: Search$1,
  ChevronDouble: ChevronDouble,
  ChevronDoubleSmall: ChevronDoubleSmall,
  ChevronNorth: ChevronNorth,
  ChevronSouth: ChevronSouth,
  ChevronWest: ChevronWest,
  ChevronEast: ChevronEast,
  Adjust: Adjust,
  Gear: Gear,
  TriangleEast: TriangleEast,
  TriangleSouth: TriangleSouth,
  TriangleWest: TriangleWest,
  TriangleNorth: TriangleNorth,
  Bitcoin: Bitcoin,
  Weather: Weather,
  Clock: Clock,
  Chat: Chat,
  Publish: Publish,
  Note: Note,
  Collection: Collection,
  Attachment: Attachment,
  CreateGroup: CreateGroup,
  Dojo: Dojo,
  Notifications: Notifications,
  Dashboard: Dashboard,
  LeapArrow: LeapArrow,
  Messages: Messages,
  Tutorial: Tutorial,
  Groups: Groups,
  Home: Home,
  Copy: Copy,
  AddFile: AddFile,
  Keyfile: Keyfile,
  Image: Image,
  Users: Users,
  AddUser: AddUser,
  User: User,
  Smiley: Smiley,
  Blank: Blank,
  Server: Server,
  Public: Public,
  BootNode: BootNode,
  ShipActivated: ShipActivated,
  ShipSpawned: ShipSpawned,
  EscapeRequested: EscapeRequested,
  EscapeApproved: EscapeApproved,
  EscapeRejected: EscapeRejected,
  EjectedSponsor: EjectedSponsor,
  BrokeContinuity: BrokeContinuity,
  Node: Node,
  NullIcon: NullIcon,
  Bug: Bug,
  Delete: Delete,
  Pause: Pause,
  Next: Next,
  Previous: Previous,
  Play: Play
};

var _excluded$a = ["title", "icon"];
var SvgComponent = /*#__PURE__*/React.forwardRef(function (_ref, svgRef) {
  var title = _ref.title,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, _excluded$a);

  var _useState = React.useState(function () {
    return title ? uuid() : undefined;
  }),
      _useState2 = _slicedToArray(_useState, 1),
      titleId = _useState2[0];

  var InnerIcon = iconIndex[icon] || iconIndex.NullIcon;
  return /*#__PURE__*/React__namespace["default"].createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: '0 0 16 16',
    fill: "currentcolor",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace["default"].createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React__namespace["default"].createElement(InnerIcon, null));
});
var SvgVisibilityOff = styled__default["default"](SvgComponent).withConfig({
  displayName: "tlon-icon__SvgVisibilityOff",
  componentId: "sc-cvmbl8-0"
})({
  flex: 'none',
  verticalAlign: 'middle'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var Icons = {
  Apps: SvgApps,
  AppBallotSM: SvgAddUser$4,
  AddUser: SvgAddUser$5,
  ArrowLeft: Svg$2,
  ArrowRight: Svg$1,
  AngleLeft: Svg$4,
  AngleRight: Svg$3,
  Calendar: Svg$5,
  CheckCircle: SvgCheckCircle,
  CheckboxBlank: SvgCheckboxBlank,
  CheckboxChecked: SvgCheckboxChecked,
  CheckboxIndeterminate: SvgCheckboxIndeterminate,
  Close: SvgClose,
  DraftLine: SvgEle,
  Error: SvgError,
  ExpandMore: SvgExpandMore,
  Info: SvgInfo,
  Loader: SvgLoader,
  Place: SvgPlace,
  RadioChecked: SvgRadioChecked,
  RadioUnchecked: SvgRadioUnchecked,
  Search: SvgSearch,
  Visibility: SvgVisibility,
  VisibilityOff: SvgVisibilityOff$q,
  Home: SvgVisibilityOff$p,
  Chat: SvgVisibilityOff$o,
  ChatLine: SvgVisibilityOff$9,
  Book: SvgVisibilityOff$m,
  BookLine: SvgVisibilityOff$7,
  Governance: SvgVisibilityOff$n,
  GovernanceLine: SvgVisibilityOff$6,
  Newspaper: SvgVisibilityOff$l,
  NewspaperLine: SvgVisibilityOff$5,
  Safe: SvgVisibilityOff$k,
  SafeLine: SvgVisibilityOff$4,
  Team: SvgVisibilityOff$j,
  TeamLine: SvgVisibilityOff$3,
  Token: SvgVisibilityOff$i,
  More: Svg$7,
  MoreLine: Svg$6,
  ArrowDropdown: SvgVisibilityOff$h,
  SurveyLine: SvgVisibilityOff$g,
  SettingsLine: SvgVisibilityOff$f,
  ParentLine: SvgVisibilityOff$e,
  MicOn: SvgVisibilityOff$d,
  MicOff: SvgVisibilityOff$c,
  DMs: SvgVisibilityOff$b,
  Wallet: SvgVisibilityOff$a,
  Apps2: SvgVisibilityOff$8,
  Ethereum: SvgVisibilityOff$2,
  Uqbar: SvgVisibilityOff$1,
  Percentage: Svg,
  TerminalLine: SvgAddUser$3,
  ListOptions: SvgAddUser$2,
  Participants: SvgAddUser$1,
  Leave: SvgAddUser
};

var focusBorder = styled.css(["transition:0.2s ease;border:1px solid ", ";outline:none;"], function (props) {
  return props.theme.colors.brand.primary;
});
var focusRing = styled.css(["transition:0.2s ease;outline:1px solid ", ";"], function (props) {
  return props.theme.colors.brand.primary;
});
var selectableFocus = styled.css(["&:focus{", "}&:active{outline:none !important;}"], focusRing);
var Divider = styled__default["default"].hr.withConfig({
  displayName: "shared-styles__Divider",
  componentId: "sc-hcd863-0"
})(["width:calc(100% - ", "px);margin:0 ", "px;height:1px;border:none;background:", ";", ""], function (props) {
  return (props.spacing || 8) * 2;
}, function (props) {
  return props.spacing || 8;
}, function (props) {
  return polished.rgba(props.theme.colors.ui.borderColor, 0.5);
}, styledSystem.compose(styledSystem.space));

var _excluded$9 = ["children", "label", "disabled", "error", "mb", "mt", "mx", "my", "ml", "mr"];
var checkboxIconStyles = styled.css(["color:", ";font-size:", "px;margin-right:", "px;&:hover{color:", ";}input:focus ~ &{color:", ";}input:checked:disabled ~ &,input:disabled ~ &{color:", ";}input:checked ~ &{color:", ";}"], function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.fontSizes[3];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.primary;
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.primary;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.brand.primary;
});
var CheckboxUnchecked = styled__default["default"](Icons.CheckboxChecked).withConfig({
  displayName: "Checkbox__CheckboxUnchecked",
  componentId: "sc-5o7w34-0"
})(["display:none;input:checked ~ &{display:block;}", ""], checkboxIconStyles);
var CheckboxChecked = styled__default["default"](Icons.CheckboxBlank).withConfig({
  displayName: "Checkbox__CheckboxChecked",
  componentId: "sc-5o7w34-1"
})(["display:block;input:checked ~ &{display:none;}", ""], checkboxIconStyles);

var CheckboxIcon = function CheckboxIcon(props) {
  return /*#__PURE__*/React__namespace["default"].createElement(React__namespace["default"].Fragment, null, /*#__PURE__*/React__namespace["default"].createElement(CheckboxUnchecked, props), /*#__PURE__*/React__namespace["default"].createElement(CheckboxChecked, props));
};

var Checkbox = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  _ref.children;
      var label = _ref.label,
      disabled = _ref.disabled,
      error = _ref.error,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      props = _objectWithoutProperties(_ref, _excluded$9);

  return /*#__PURE__*/React__namespace["default"].createElement(Text, {
    as: "label",
    variant: "body",
    display: "flex",
    alignItems: "center",
    color: disabled ? 'text.disabled' : 'text.primary',
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    display: "inline-block"
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, _extends({
    ref: ref,
    as: "input",
    type: "checkbox",
    disabled: disabled
  }, props, {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: "hidden",
    "aria-invalid": error ? 'true' : 'false'
  })), /*#__PURE__*/React__namespace["default"].createElement(Box, {
    as: CheckboxIcon,
    display: "inline-block",
    "aria-hidden": "true",
    disabled: disabled,
    error: error
  })), label);
});
Checkbox.defaultProps = {};

var Field = styled__default["default"](Grid).attrs({
  gridGap: 1,
  role: 'group'
}).withConfig({
  displayName: "Field",
  componentId: "sc-fqteyn-0"
})(["", ""], function (props) {
  return props.inline && styled.css(["grid-gap:", "px;grid-template-columns:2fr 4fr;"], props.theme.space[4]);
});
Field.defaultProps = {
  border: 0,
  p: 0,
  ml: 0,
  mr: 0
};
var FieldSet = styled__default["default"](Grid).attrs({
  gridGap: 2,
  as: 'fieldset'
}).withConfig({
  displayName: "Field__FieldSet",
  componentId: "sc-fqteyn-1"
})([""]);
FieldSet.defaultProps = {
  border: 0,
  p: 0,
  ml: 0,
  mr: 0
};

var Hint = styled__default["default"](Text).attrs({
  variant: 'hint',
  color: 'text.secondary'
}).withConfig({
  displayName: "Messages__Hint",
  componentId: "sc-uz3zro-0"
})([""]);
var Error = styled__default["default"](Text).attrs({
  variant: 'hint',
  color: 'ui.intent.alert'
}).withConfig({
  displayName: "Messages__Error",
  componentId: "sc-uz3zro-1"
})([""]);

var FormControl = {
  Field: Field,
  FieldSet: FieldSet,
  Hint: Hint,
  Error: Error
};

var _excluded$8 = ["leftIcon", "leftInteractive", "rightIcon", "rightInteractive", "flex", "mb", "mt", "mx", "my", "ml", "mr", "disabled", "variant", "small", "borderWidth", "borderStyle", "borderRadius", "borderColor", "color", "bg"];
var inputTokens$1 = {
  iconSize: 4,
  // icon size on font-size scale
  y: 2,
  // padding y
  x: 2 // padding x

};
var InputWrapper = styled__default["default"](Flex).withConfig({
  displayName: "Input__InputWrapper",
  componentId: "sc-nsqs43-0"
})(["width:100%;pointer-events:none;transition:", ";border:1px solid ", ";border-radius:", "px;&:hover{transition:", ";border-color:", ";}&:focus{", " transition:", ";&::placeholder{color:transparent;}}&:disabled{-webkit-text-fill-color:currentColor;opacity:1;color:", ";background-color:", ";border-color:", ";&::placeholder{color:", ";opacity:1;}}&:-moz-read-only{background-color:", ";border-color:", ";}&:read-only{background-color:", ";border-color:", ";&::placeholder{color:", ";}}", ""], function (props) {
  return props.theme.transition;
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.input.borderRadius;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.input.borderHover;
}, focusBorder, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.colors.text.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.text.disabled;
}, function (props) {
  return props.theme.colors.ui.tertiary;
}, function (props) {
  return props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.colors.ui.tertiary;
}, function (props) {
  return props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.colors.text.placeholder;
}, function (props) {
  return props.borderColor && styled.css(["border-color:", ";&:hover{border-color:", ";}&:read-only{border-color:", ";}&:-moz-read-only{border-color:", ";}&:focus{border-color:", ";}"], props.borderColor, props.borderColor, props.borderColor, props.borderColor, props.borderColor);
});
InputWrapper.defaultProps = {
  // pt: inputTokens.y,
  // pb: inputTokens.y,
  pl: 2,
  pr: 2,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 4,
  color: 'text.primary',
  bg: 'ui.quaternary',
  mb: 0
};
var ContentArea$3 = styled__default["default"](Text).withConfig({
  displayName: "Input__ContentArea",
  componentId: "sc-nsqs43-1"
})(["display:block;pointer-events:all;width:100%;appearance:none;outline:none;border:none;:invalid::-webkit-datetime-edit{color:", ";}::-webkit-inner-spin-button,::-webkit-calendar-picker-indicator{display:none;-webkit-appearance:none;}&::placeholder{color:", ";}&:disabled{-webkit-text-fill-color:currentColor;opacity:1;color:", ";&::placeholder{color:", ";opacity:1;}}", ""], function (props) {
  return props.theme.colors.text.placeholder;
}, function (props) {
  return props.theme.colors.text.placeholder;
}, function (props) {
  return props.theme.colors.text.disabled;
}, function (props) {
  return props.theme.colors.text.disabled;
}, styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
ContentArea$3.defaultProps = {
  pt: inputTokens$1.y,
  pb: inputTokens$1.y,
  color: 'text.primary',
  bg: 'transparent',
  mb: 0
};
var LeftIcon$2 = styled__default["default"](Box).withConfig({
  displayName: "Input__LeftIcon",
  componentId: "sc-nsqs43-2"
})(["justify-self:flex-start;user-select:none;", " svg{display:block;font-size:", ";color:", ";}"], function (props) {
  return props.interactive && styled.css(["pointer-events:none;user-select:none;"]);
}, function (props) {
  return props.theme.fontSizes[3];
}, function (props) {
  return props.disabled ? props.theme.colors.text.disabled : props.theme.colors.text.primary;
});
var RightIcon$2 = styled__default["default"](Box).withConfig({
  displayName: "Input__RightIcon",
  componentId: "sc-nsqs43-3"
})(["justify-self:flex-end;user-select:none;", " svg{display:block;color:", ";font-size:", ";", ";}"], function (props) {
  return props.interactive && styled.css(["pointer-events:none;user-select:none;"]);
}, function (props) {
  return props.disabled ? props.theme.colors.text.disabled : props.theme.colors.text.primary;
}, function (props) {
  return props.theme.fontSizes[3];
}, function (props) {
  return props.disabled && {
    color: props.theme.colors.text.disabled
  };
});
var Input = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      leftInteractive = _ref.leftInteractive,
      rightIcon = _ref.rightIcon,
      rightInteractive = _ref.rightInteractive,
      flex = _ref.flex,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      disabled = _ref.disabled,
      variant = _ref.variant;
      _ref.small;
      _ref.borderWidth;
      _ref.borderStyle;
      _ref.borderRadius;
      var borderColor = _ref.borderColor,
      color = _ref.color,
      bg = _ref.bg,
      props = _objectWithoutProperties(_ref, _excluded$8);

  return /*#__PURE__*/React__namespace["default"].createElement(InputWrapper, {
    alignItems: "center",
    position: "relative",
    borderColor: borderColor,
    color: color,
    bg: bg,
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr,
    flex: flex,
    style: props.style
  }, leftIcon && /*#__PURE__*/React__namespace["default"].createElement(LeftIcon$2, {
    style: {
      pointerEvents: leftInteractive ? 'auto' : 'none'
    },
    mr: inputTokens$1.x,
    disabled: disabled
  }, leftIcon), /*#__PURE__*/React__namespace["default"].createElement(ContentArea$3, _extends({
    as: "input",
    variant: variant,
    ref: ref,
    hasLeftIcon: leftIcon,
    hasRightIcon: rightIcon,
    disabled: disabled,
    "aria-invalid": props.error ? 'true' : 'false'
  }, props, {
    style: {
      width: '100%'
    }
  })), rightIcon && /*#__PURE__*/React__namespace["default"].createElement(RightIcon$2, {
    style: {
      pointerEvents: rightInteractive ? 'auto' : 'none'
    },
    ml: inputTokens$1.x,
    disabled: disabled
  }, rightIcon));
});
Input.defaultProps = {
  error: false,
  leftInteractive: false,
  rightInteractive: false,
  type: 'text',
  variant: 'body'
};

var _excluded$7 = ["children", "as"];
var StyledLabel = styled__default["default"](Text).withConfig({
  displayName: "Label__StyledLabel",
  componentId: "sc-1i5197t-0"
})(["display:flex;width:100%;align-items:center;", ""], function (props) {
  return props.required && "&:after {\n      content: \"*\";\n      color: ".concat(props.theme.colors.brand.secondary, ";\n    }");
});
StyledLabel.defaultProps = {
  pl: 0,
  pr: 0
};
var Label = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      as = _ref.as,
      props = _objectWithoutProperties(_ref, _excluded$7);

  return /*#__PURE__*/React__namespace["default"].createElement(StyledLabel, _extends({
    as: as,
    variant: "label",
    ref: ref,
    color: "text.primary"
  }, props), children, props.adornment && /*#__PURE__*/React__namespace["default"].createElement(Box, {
    display: "inline-flex",
    alignItems: "center",
    color: "text.secondary",
    ml: 1
  }, props.adornment));
});
Label.defaultProps = {
  required: false,
  as: 'label'
};

var _excluded$6 = ["children", "label", "disabled", "error", "mb", "mt", "mx", "my", "ml", "mr"];
var radioIconStyles = styled.css(["color:", ";font-size:", "px;margin-right:", "px;&:hover{color:", ";}input:focus ~ &{outline:none;color:", ";}input:checked:disabled ~ &,input:disabled ~ &{color:", ";}input:checked ~ &{color:", ";}"], function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.secondary;
}, function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.theme.space[1];
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.primary;
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.primary;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.brand.primary;
});
var RadioUnchecked = styled__default["default"](Icons.RadioUnchecked).withConfig({
  displayName: "Radio__RadioUnchecked",
  componentId: "sc-1fe3d1b-0"
})(["display:block;input:checked ~ &{display:none;}", ""], radioIconStyles);
var RadioChecked = styled__default["default"](Icons.RadioChecked).withConfig({
  displayName: "Radio__RadioChecked",
  componentId: "sc-1fe3d1b-1"
})(["display:none;input:checked ~ &{display:block;}", ""], radioIconStyles);

var RadioIcon = function RadioIcon(props) {
  return /*#__PURE__*/React__namespace["default"].createElement(React__namespace["default"].Fragment, null, /*#__PURE__*/React__namespace["default"].createElement(RadioUnchecked, props), /*#__PURE__*/React__namespace["default"].createElement(RadioChecked, props));
};

var Radio = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  _ref.children;
      var label = _ref.label,
      disabled = _ref.disabled,
      error = _ref.error,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      props = _objectWithoutProperties(_ref, _excluded$6);

  return /*#__PURE__*/React__namespace["default"].createElement(Text, {
    as: "label",
    variant: "body",
    display: "flex",
    alignItems: "center",
    color: disabled ? 'text.disabled' : 'text.primary',
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    display: "inline-block"
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, _extends({
    ref: ref,
    as: "input",
    type: "radio",
    disabled: disabled
  }, props, {
    position: "absolute",
    opacity: 0,
    zIndex: -1,
    width: 1,
    height: 1,
    overflow: "hidden",
    "aria-invalid": error ? 'true' : 'false'
  })), /*#__PURE__*/React__namespace["default"].createElement(Box, {
    as: RadioIcon,
    display: "inline-block",
    "aria-hidden": "true",
    disabled: disabled,
    error: error
  })), label);
});
Radio.defaultProps = {};

var _excluded$5 = ["leftIcon", "rightIcon", "mb", "mt", "mx", "my", "ml", "mr", "disabled"];
var selectTokens = {
  iconSize: 4,
  // icon size on font-size scale
  y: 2,
  // padding y
  x: 2,
  // padding x
  iconRightOffset: 4
};
var ContentArea$2 = styled__default["default"](Text).withConfig({
  displayName: "Select__ContentArea",
  componentId: "sc-prta4j-0"
})(["display:block;width:100%;appearance:none;transition:", ";border-radius:", "px;padding-left:", ";padding-right:", "px;border-color:", ";&::placeholder{color:", ";}&:hover{transition:", ";border-color:", ";}&:focus{", " transition:", ";border-color:", ";&::placeholder{color:transparent;}}&:disabled{-webkit-text-fill-color:currentColor;opacity:1;color:", ";background-color:", ";border-color:", ";cursor:not-allowed;&::placeholder{color:", ";opacity:1;}}", ""], function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.colors.ui.input.borderRadius;
}, function (props) {
  return props.hasLeftIcon ? "calc(".concat(props.theme.fontSizes[selectTokens.iconSize], " + ").concat(2 * props.theme.space[selectTokens.x], "px)") : props.theme.space[selectTokens.x] + 'px';
}, function (props) {
  return props.hasRightIcon ? selectTokens.iconSize + 2 * props.theme.space[selectTokens.x] : props.theme.space[selectTokens.x];
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.colors.text.placeholder;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.input.borderHover;
}, focusBorder, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.colors.brand.primary;
}, function (props) {
  return props.theme.colors.text.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.text.disabled;
}, styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
ContentArea$2.defaultProps = {
  pt: selectTokens.y,
  pb: selectTokens.y,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 6,
  color: 'text.primary',
  bg: 'ui.quaternary',
  mb: 0
};
var LeftIcon$1 = styled__default["default"](Box).withConfig({
  displayName: "Select__LeftIcon",
  componentId: "sc-prta4j-1"
})(["position:absolute;svg{display:block;font-size:", ";color:", ";}"], function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.disabled ? props.theme.colors.text.disabled : props.theme.colors.text.primary;
});
var RightIcon$1 = styled__default["default"](Box).withConfig({
  displayName: "Select__RightIcon",
  componentId: "sc-prta4j-2"
})(["position:absolute;pointer-events:none;svg{display:block;font-size:", ";", ";}"], function (props) {
  return props.theme.fontSizes[4];
}, function (props) {
  return props.disabled && {
    color: props.theme.colors.text.disabled
  };
});
var HTMLSelect = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded$5);

  return /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    alignItems: "center",
    position: "relative",
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }, leftIcon && /*#__PURE__*/React__namespace["default"].createElement(LeftIcon$1, {
    left: selectTokens.x,
    disabled: disabled
  }, leftIcon), /*#__PURE__*/React__namespace["default"].createElement(ContentArea$2, _extends({
    as: "select",
    variant: "body",
    ref: ref,
    py: 2,
    hasLeftIcon: !!leftIcon,
    hasRightIcon: !!rightIcon,
    disabled: disabled,
    "aria-invalid": props.error ? 'true' : 'false'
  }, props)), rightIcon && /*#__PURE__*/React__namespace["default"].createElement(RightIcon$1, {
    right: selectTokens.iconRightOffset,
    disabled: disabled
  }, rightIcon), /*#__PURE__*/React__namespace["default"].createElement(RightIcon$1, {
    right: selectTokens.x,
    disabled: disabled
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.ExpandMore, {
    color: "text.primary",
    "aria-hidden": true
  })));
});
HTMLSelect.defaultProps = {
  error: false
};

var _excluded$4 = ["maxCharacters", "placeholder", "disabled", "error", "mb", "mt", "mx", "my", "ml", "mr"];
var ContentArea$1 = styled__default["default"](Text).withConfig({
  displayName: "TextArea__ContentArea",
  componentId: "sc-1cl5un1-0"
})(["box-sizing:border-box;display:block;appearance:none;-webkit-appearance:none;resize:vertical;width:100%;min-height:", "px;padding:", "px;transition:", ";border-radius:", "px;border-color:", ";&::placeholder{color:", ";font-size:", "px;font-weight:normal;}&:hover{transition:", ";border-color:", ";}&:focus{", " transition:", ";&::placeholder{color:transparent;}}&:-moz-read-only{background-color:", ";border-color:", ";}&:read-only{background-color:", ";border-color:", ";&::placeholder{color:", ";}}&:disabled{-webkit-text-fill-color:currentColor;opacity:1;color:", ";background-color:", ";border-color:", ";cursor:not-allowed;&::placeholder{color:", ";opacity:1;}}", ""], function (props) {
  return props.theme.sizes[3] + 14;
}, function (props) {
  return props.theme.space[2];
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.colors.ui.input.borderRadius;
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.colors.text.placeholder;
}, function (props) {
  return props.theme.fontSizes[2];
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.error ? props.theme.colors.ui.intent.alert : props.theme.colors.ui.input.borderHover;
}, focusRing, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.colors.ui.tertiary;
}, function (props) {
  return props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.colors.ui.tertiary;
}, function (props) {
  return props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.colors.text.placeholder;
}, function (props) {
  return props.theme.colors.text.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.text.disabled;
}, styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
ContentArea$1.defaultProps = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 6,
  bg: 'ui.quaternary'
};
var StyledText = styled__default["default"](Text).withConfig({
  displayName: "TextArea__StyledText",
  componentId: "sc-1cl5un1-1"
})(["color:", ";"], function (props) {
  return props.error ? props.theme.colors.text.error : props.theme.colors.text.secondary;
});
var TextArea = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var maxCharacters = _ref.maxCharacters,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      error = _ref.error,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      props = _objectWithoutProperties(_ref, _excluded$4);

  var _useState = React.useState(props.value ? props.value.length : 0),
      _useState2 = _slicedToArray(_useState, 2),
      characterCount = _useState2[0],
      setCharacterCount = _useState2[1];

  var isError = error || maxCharacters && characterCount > maxCharacters ? true : false;
  return /*#__PURE__*/React__namespace["default"].createElement(Box, {
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }, /*#__PURE__*/React__namespace["default"].createElement(ContentArea$1, _extends({
    as: "textarea",
    variant: "body",
    mb: 0,
    ref: ref,
    placeholder: placeholder,
    disabled: disabled,
    onChange: function onChange(e) {
      return setCharacterCount(e.target.value.length);
    },
    error: isError,
    "aria-invalid": isError ? 'true' : 'false'
  }, props)), maxCharacters ? /*#__PURE__*/React__namespace["default"].createElement(Text, {
    variant: "hint",
    width: "100%",
    color: isError ? 'text.error' : 'text.secondary',
    textAlign: "right"
  }, "".concat(characterCount, "/").concat(maxCharacters)) : null);
});
TextArea.defaultProps = {
  error: false,
  placeholder: '',
  maxCharacters: undefined
};

var SelectWrapper = styled__default["default"].div.withConfig({
  displayName: "Selectstyles__SelectWrapper",
  componentId: "sc-3e27x3-0"
})(["width:100%;input{cursor:pointer;&:hover{user-select:none;cursor:pointer;}}"]);
styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Selectstyles__SelectRow",
  componentId: "sc-3e27x3-2"
})(["position:relative;display:flex;flex-direction:row;justify-content:space-between;flex:1;min-width:125px;align-items:center;cursor:pointer;border-radius:", "px;width:", ";color:", ";&::placeholder{color:", ";}outline:none;", ";", " ", ""], function (props) {
  return props.theme.input.borderRadius;
}, function (props) {
  return props.large ? '100%' : 'initial';
}, function (props) {
  return props.theme.colors.text.primary;
}, function (props) {
  return props.theme.colors.text.placeholder;
}, function (props) {
  return props.large ? styled.css(["padding:5px 7px 5px 2px;background:transparent;border:1px solid transparent;transition:", ";&:hover{transition:", ";background:", ";}outline:transparent;"], function (props) {
    return props.theme.transition;
  }, function (props) {
    return props.theme.transition;
  }, function (props) {
    return props.theme.colors.highlights.bgHighlight;
  }) : styled.css(["font-size:", ";padding:4px 8px;background:", ";border:1px solid ", ";transition:", ";&:focus{", "}", ""], function (props) {
    return props.theme.fontSizes[2];
  }, function (props) {
    return props.gray ? props.theme.colors.ui.input.background : props.theme.colors.ui.input.secondary;
  }, function (props) {
    return props.theme.colors.ui.input.borderColor;
  }, function (props) {
    return props.theme.transition;
  }, focusRing, !props.isOpen ? styled.css(["&:hover{transition:", ";border-color:", ";}"], function (props) {
    return props.theme.transition;
  }, function (props) {
    return props.theme.colors.ui.input.borderHover;
  }) : styled.css(["transition:", ";border-color:", ";"], function (props) {
    return props.theme.transition;
  }, function (props) {
    return props.theme.colors.brand.primary;
  }));
}, function (props) {
  return props.small && styled.css(["padding:2px 8px 2px 8px;min-width:60px;"]);
}, function (props) {
  return props.gray && styled.css(["background:", ";"], function (props) {
    return props.theme.colors.bg.primary;
  });
})).withConfig({
  displayName: "Selectstyles__SelectRow",
  componentId: "sc-3e27x3-1"
})({}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.typography));
styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Selectstyles__SelectText",
  componentId: "sc-3e27x3-4"
})(["font-style:", ";font-weight:400;font-size:", ";color:", ";"], function (props) {
  return props.large ? 'bold' : 'normal';
}, function (props) {
  return props.large ? '16px' : '14px';
}, function (props) {
  return props.isPlaceholder ? props.theme.colors.text.placeholder : 'inherit';
})).withConfig({
  displayName: "Selectstyles__SelectText",
  componentId: "sc-3e27x3-3"
})({}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.typography));
styled__default["default"].div.withConfig({
  displayName: "Selectstyles__Dropdown",
  componentId: "sc-3e27x3-5"
})([""]);

var _excluded$3 = ["id", "style", "small", "large", "tabIndex", "placeholder", "options", "selectionOption", "menuWidth", "onSelected"];
var Select = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      style = _ref.style,
      small = _ref.small,
      large = _ref.large,
      tabIndex = _ref.tabIndex,
      placeholder = _ref.placeholder,
      options = _ref.options,
      selectionOption = _ref.selectionOption,
      menuWidth = _ref.menuWidth,
      onSelected = _ref.onSelected,
      props = _objectWithoutProperties(_ref, _excluded$3);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var toggleIsOpen = function toggleIsOpen() {
    setIsOpen(!isOpen);
  };

  var onClose = function onClose() {
    setIsOpen(false);
  };

  var selectedFull = options.find(function (option) {
    return option.value === selectionOption;
  });
  return /*#__PURE__*/React__namespace["default"].createElement(SelectWrapper, {
    style: style,
    small: small
  }, /*#__PURE__*/React__namespace["default"].createElement(Input, _extends({
    ref: ref,
    tabIndex: tabIndex,
    isPlaceholder: !selectionOption,
    rightInteractive: false,
    rightIcon: /*#__PURE__*/React__namespace["default"].createElement(Icons.ArrowDropdown, {
      size: 2,
      style: {
        opacity: 0.5
      },
      color: "text.primary",
      "aria-hidden": true
    }),
    small: small,
    large: large,
    readOnly: true,
    value: selectedFull === null || selectedFull === void 0 ? void 0 : selectedFull.label,
    placeholder: placeholder,
    onClick: toggleIsOpen
  }, props)), /*#__PURE__*/React__namespace["default"].createElement(Menu, {
    id: id,
    key: id,
    style: {
      marign: style && style.margin || 0,
      minWidth: menuWidth || 150
    },
    isOpen: isOpen,
    onClose: onClose
  }, options.map(function (option, index) {
    return /*#__PURE__*/React__namespace["default"].createElement(MenuItem, {
      key: "".concat(index),
      selected: selectionOption === option.value,
      disabled: option.disabled,
      onClick: function onClick() {
        onSelected({
          label: option.label,
          value: option.value
        });
        onClose();
      }
    }, option.label || option.value, " ", option.icon);
  })));
});

var _excluded$2 = ["leftIcon", "rightIcon", "flex", "mb", "mt", "mx", "my", "ml", "mr", "disabled"];
var inputTokens = {
  iconSize: 4,
  // icon size on font-size scale
  y: 2,
  // padding y
  x: 2 // padding x

};
var ContentArea = styled__default["default"](Text).withConfig({
  displayName: "InlineEdit__ContentArea",
  componentId: "sc-han1t3-0"
})(["display:block;width:100%;appearance:none;transition:", ";border-radius:", "px;padding-left:0px;padding-right:", "px;&::placeholder{color:", ";}&:hover{transition:", ";background:", ";padding-left:", "px;padding-right:", "px;}&:focus{outline:none;&::placeholder{color:transparent;}background:", ";padding-left:", "px;padding-right:", "px;}&:-moz-read-only{background-color:", ";border-color:", ";}&:read-only{background-color:", ";border-color:", ";&::placeholder{color:", ";}}&:disabled{-webkit-text-fill-color:currentColor;opacity:0.5;color:", ";background-color:transparent;border-color:transparent;&::placeholder{color:", ";opacity:1;}}", ""], function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.colors.ui.input.borderRadius;
}, function (props) {
  return props.hasRightIcon ? inputTokens.iconSize + 2 * props.theme.space[inputTokens.x] : props.theme.space[inputTokens.x];
}, function (props) {
  return props.theme.colors.text.placeholder;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return polished.darken(0.05, props.theme.colors.ui.tertiary);
}, function (props) {
  return props.hasLeftIcon ? inputTokens.iconSize + 2 * props.theme.space[inputTokens.x] / 2 : props.theme.space[inputTokens.x];
}, function (props) {
  return props.hasRightIcon ? inputTokens.iconSize + 2 * props.theme.space[inputTokens.x] : props.theme.space[inputTokens.x] - props.theme.space[inputTokens.x];
}, function (props) {
  return polished.darken(0.05, props.theme.colors.ui.tertiary);
}, function (props) {
  return props.hasLeftIcon ? inputTokens.iconSize + 2 * props.theme.space[inputTokens.x] : props.theme.space[inputTokens.x];
}, function (props) {
  return props.hasRightIcon ? inputTokens.iconSize + 2 * props.theme.space[inputTokens.x] : props.theme.space[inputTokens.x] - props.theme.space[inputTokens.x];
}, function (props) {
  return props.theme.colors.ui.tertiary;
}, function (props) {
  return props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.colors.ui.tertiary;
}, function (props) {
  return props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.colors.text.placeholder;
}, function (props) {
  return props.theme.colors.text.disabled;
}, function (props) {
  return props.theme.colors.text.disabled;
}, styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
ContentArea.defaultProps = {
  pt: inputTokens.y,
  pb: inputTokens.y,
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  borderRadius: 4,
  color: 'text.primary',
  bg: 'transparent',
  mb: 0
};
var LeftIcon = styled__default["default"](Box).withConfig({
  displayName: "InlineEdit__LeftIcon",
  componentId: "sc-han1t3-1"
})(["position:absolute;svg{display:block;font-size:", ";color:", ";}"], function (props) {
  return props.theme.fontSizes[3];
}, function (props) {
  return props.disabled ? props.theme.colors.text.disabled : props.theme.colors.text.primary;
});
var RightIcon = styled__default["default"](Box).withConfig({
  displayName: "InlineEdit__RightIcon",
  componentId: "sc-han1t3-2"
})(["position:absolute;svg{display:block;font-size:", ";", ";}"], function (props) {
  return props.theme.fontSizes[3];
}, function (props) {
  return props.disabled && {
    color: props.theme.colors.text.disabled
  };
});
var InlineEdit = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      flex = _ref.flex,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      disabled = _ref.disabled,
      props = _objectWithoutProperties(_ref, _excluded$2);

  if (!ref) ref = /*#__PURE__*/React__namespace["default"].createRef();

  var keypressHandler = function keypressHandler(event) {
    if (event.key === 'Enter') {
      // @ts-ignore
      ref.current.blur();
    }
  };

  return /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    alignItems: "center",
    position: "relative",
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr,
    flex: flex
  }, leftIcon && /*#__PURE__*/React__namespace["default"].createElement(LeftIcon, {
    left: inputTokens.x,
    disabled: disabled
  }, leftIcon), /*#__PURE__*/React__namespace["default"].createElement(ContentArea, _extends({
    as: "input",
    variant: "body",
    ref: ref,
    py: 2,
    hasLeftIcon: !!leftIcon,
    hasRightIcon: !!rightIcon,
    disabled: disabled,
    "aria-invalid": props.error ? 'true' : 'false',
    onKeyPress: function onKeyPress(event) {
      return keypressHandler(event);
    }
  }, props)), rightIcon && /*#__PURE__*/React__namespace["default"].createElement(RightIcon, {
    right: inputTokens.x,
    disabled: disabled
  }, rightIcon));
});
InlineEdit.defaultProps = {
  error: false,
  type: 'text'
};

var datepickerContextDefaultValue = {
  focusedDate: null,
  isDateFocused: function isDateFocused(_date) {
    return false;
  },
  isDateSelected: function isDateSelected(_date) {
    return false;
  },
  isDateHovered: function isDateHovered(_date) {
    return false;
  },
  isDateBlocked: function isDateBlocked(_date) {
    return false;
  },
  isFirstOrLastSelectedDate: function isFirstOrLastSelectedDate(_date) {
    return false;
  },
  onDateFocus: function onDateFocus(_date) {},
  onDateHover: function onDateHover(_date) {},
  onDateSelect: function onDateSelect(_date) {}
};
var DatepickerContext = /*#__PURE__*/React__namespace["default"].createContext(datepickerContextDefaultValue);

var getColor = function getColor(isSelected, isSelectedStartOrEnd, isWithinHoverRange, isDisabled) {
  return function (_ref) {
    var selectedFirstOrLastColor = _ref.selectedFirstOrLastColor,
        normalColor = _ref.normalColor,
        selectedColor = _ref.selectedColor,
        rangeHoverColor = _ref.rangeHoverColor,
        disabledColor = _ref.disabledColor;

    if (isSelectedStartOrEnd) {
      return selectedFirstOrLastColor;
    } else if (isSelected) {
      return selectedColor;
    } else if (isWithinHoverRange) {
      return rangeHoverColor;
    } else if (isDisabled) {
      return disabledColor;
    } else {
      return normalColor;
    }
  };
};

var Day = function Day(_ref2) {
  var dayLabel = _ref2.dayLabel,
      date = _ref2.date;
  var dayRef = React.useRef(null);

  var _useContext = React.useContext(DatepickerContext),
      focusedDate = _useContext.focusedDate,
      isDateFocused = _useContext.isDateFocused,
      isDateSelected = _useContext.isDateSelected,
      isDateHovered = _useContext.isDateHovered,
      isDateBlocked = _useContext.isDateBlocked,
      isFirstOrLastSelectedDate = _useContext.isFirstOrLastSelectedDate,
      onDateSelect = _useContext.onDateSelect,
      onDateFocus = _useContext.onDateFocus,
      onDateHover = _useContext.onDateHover;

  var _useDay = hooks.useDay({
    date: date,
    focusedDate: focusedDate,
    isDateFocused: isDateFocused,
    isDateSelected: isDateSelected,
    isDateHovered: isDateHovered,
    isDateBlocked: isDateBlocked,
    isFirstOrLastSelectedDate: isFirstOrLastSelectedDate,
    onDateFocus: onDateFocus,
    onDateSelect: onDateSelect,
    onDateHover: onDateHover,
    dayRef: dayRef
  }),
      isSelected = _useDay.isSelected,
      isSelectedStartOrEnd = _useDay.isSelectedStartOrEnd,
      isWithinHoverRange = _useDay.isWithinHoverRange,
      disabledDate = _useDay.disabledDate,
      _onClick = _useDay.onClick,
      onKeyDown = _useDay.onKeyDown,
      onMouseEnter = _useDay.onMouseEnter,
      tabIndex = _useDay.tabIndex;

  if (!dayLabel) {
    return /*#__PURE__*/React__namespace["default"].createElement("div", null);
  }

  var getColorFn = getColor(isSelected, isSelectedStartOrEnd, isWithinHoverRange, disabledDate);
  return /*#__PURE__*/React__namespace["default"].createElement(Button, {
    ref: dayRef,
    variant: "transparent",
    onClick: function onClick() {
      _onClick();
    },
    onKeyDown: onKeyDown,
    onMouseEnter: onMouseEnter,
    tabIndex: tabIndex,
    p: "0px",
    border: "1px solid transparent",
    color: getColorFn({
      selectedFirstOrLastColor: 'brand.primary',
      normalColor: 'text.primary',
      selectedColor: 'text.secondary',
      rangeHoverColor: 'text.secondary',
      disabledColor: 'text.disabled'
    }),
    background: getColorFn({
      selectedFirstOrLastColor: 'brand.primary',
      normalColor: 'bg.secondary',
      selectedColor: 'brand.muted',
      rangeHoverColor: 'brand.muted',
      disabledColor: 'bg.secondary'
    })
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    p: "8px"
  }, dayLabel));
};

var Month = function Month(_ref) {
  var year = _ref.year,
      month = _ref.month,
      firstDayOfWeek = _ref.firstDayOfWeek;

  var _useMonth = hooks.useMonth({
    year: year,
    month: month,
    firstDayOfWeek: firstDayOfWeek
  }),
      days = _useMonth.days,
      weekdayLabels = _useMonth.weekdayLabels,
      monthLabel = _useMonth.monthLabel;

  return /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    flexDirection: "column"
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    m: "6px 0 16px",
    justifyContent: "center"
  }, /*#__PURE__*/React__namespace["default"].createElement(Text, {
    variant: "h6",
    fontWeight: "500"
  }, monthLabel)), /*#__PURE__*/React__namespace["default"].createElement(Grid, {
    gridTemplateColumns: "repeat(7, 1fr)",
    justifyContent: "center",
    mb: "4px",
    fontSize: 1
  }, weekdayLabels.map(function (dayLabel) {
    return /*#__PURE__*/React__namespace["default"].createElement(Text, {
      variant: "body",
      textAlign: "center",
      opacity: 0.7,
      key: dayLabel
    }, dayLabel);
  })), /*#__PURE__*/React__namespace["default"].createElement(Grid, {
    gridTemplateColumns: "repeat(7, 1fr)",
    justifyContent: "center"
  }, days.map(function (day, index) {
    if (_typeof(day) === 'object') {
      return /*#__PURE__*/React__namespace["default"].createElement(Day, {
        date: day.date,
        key: day.date.toString(),
        dayLabel: day.dayLabel
      });
    }

    return /*#__PURE__*/React__namespace["default"].createElement("div", {
      key: index
    });
  })));
};

//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

var composeMonthGridStyles$1 = styledSystem.compose(styledSystem.overflow, styledSystem.height);
var MonthGrid$1 = styled__default["default"](Grid).withConfig({
  displayName: "DatePicker__MonthGrid",
  componentId: "sc-15eqe3w-0"
})(["", ""], composeMonthGridStyles$1);
var DatePicker = function DatePicker(_ref, ref) {
  var startDate = _ref.startDate,
      endDate = _ref.endDate,
      minBookingDate = _ref.minBookingDate,
      maxBookingDate = _ref.maxBookingDate,
      focusedInput = _ref.focusedInput,
      onDatesChange = _ref.onDatesChange,
      dayLabelFormat = _ref.dayLabelFormat,
      weekdayLabelFormat = _ref.weekdayLabelFormat,
      monthLabelFormat = _ref.monthLabelFormat,
      initialVisibleMonth = _ref.initialVisibleMonth,
      _ref$vertical = _ref.vertical,
      vertical = _ref$vertical === void 0 ? false : _ref$vertical,
      _ref$rtl = _ref.rtl,
      rtl = _ref$rtl === void 0 ? false : _ref$rtl,
      _ref$showResetDates = _ref.showResetDates,
      showResetDates = _ref$showResetDates === void 0 ? true : _ref$showResetDates,
      _ref$exactMinBookingD = _ref.exactMinBookingDays,
      exactMinBookingDays = _ref$exactMinBookingD === void 0 ? false : _ref$exactMinBookingD,
      _ref$isDateBlocked = _ref.isDateBlocked,
      isDateBlocked = _ref$isDateBlocked === void 0 ? function () {
    return false;
  } : _ref$isDateBlocked,
      _ref$minBookingDays = _ref.minBookingDays,
      minBookingDays = _ref$minBookingDays === void 0 ? 1 : _ref$minBookingDays,
      numberOfMonthsProp = _ref.numberOfMonths,
      firstDayOfWeekProp = _ref.firstDayOfWeek,
      _ref$unavailableDates = _ref.unavailableDates,
      unavailableDates = _ref$unavailableDates === void 0 ? [] : _ref$unavailableDates;

  var _useDatepicker = hooks.useDatepicker({
    startDate: startDate,
    endDate: endDate,
    focusedInput: focusedInput,
    onDatesChange: onDatesChange,
    minBookingDate: minBookingDate,
    maxBookingDate: maxBookingDate,
    minBookingDays: minBookingDays,
    isDateBlocked: isDateBlocked,
    exactMinBookingDays: exactMinBookingDays,
    unavailableDates: unavailableDates,
    initialVisibleMonth: initialVisibleMonth,
    numberOfMonths: numberOfMonthsProp,
    firstDayOfWeek: firstDayOfWeekProp
  }),
      activeMonths = _useDatepicker.activeMonths,
      isDateSelected = _useDatepicker.isDateSelected,
      isFirstOrLastSelectedDate = _useDatepicker.isFirstOrLastSelectedDate,
      isDateHovered = _useDatepicker.isDateHovered,
      firstDayOfWeek = _useDatepicker.firstDayOfWeek,
      _onDateSelect = _useDatepicker.onDateSelect,
      onResetDates = _useDatepicker.onResetDates,
      goToPreviousMonths = _useDatepicker.goToPreviousMonths,
      goToNextMonths = _useDatepicker.goToNextMonths,
      numberOfMonths = _useDatepicker.numberOfMonths,
      hoveredDate = _useDatepicker.hoveredDate,
      onDateHover = _useDatepicker.onDateHover,
      isDateFocused = _useDatepicker.isDateFocused,
      focusedDate = _useDatepicker.focusedDate,
      onDateFocus = _useDatepicker.onDateFocus,
      isDateBlockedFn = _useDatepicker.isDateBlocked;

  React.useImperativeHandle(ref, function () {
    return {
      onDateSelect: function onDateSelect(date) {
        _onDateSelect(date);
      }
    };
  });
  var monthGridRef = React.useRef(null);

  function scrollTopToMonthGrid() {
    if (monthGridRef && monthGridRef.current && vertical) {
      monthGridRef.current.scrollTop = 0;
    }
  }

  function handleGoToNextMonth() {
    goToNextMonths();
    scrollTopToMonthGrid();
  }

  function handleGoToPreviousMonth() {
    goToPreviousMonths();
    scrollTopToMonthGrid();
  }

  return /*#__PURE__*/React__namespace["default"].createElement(DatepickerContext.Provider, {
    value: {
      focusedDate: focusedDate,
      // @ts-ignore
      isDateFocused: isDateFocused,
      // @ts-ignore
      isDateSelected: isDateSelected,
      // @ts-ignore
      isDateHovered: isDateHovered,
      // @ts-ignore
      isFirstOrLastSelectedDate: isFirstOrLastSelectedDate,
      // @ts-ignore
      onDateSelect: _onDateSelect,
      // @ts-ignore
      onDateFocus: onDateFocus,
      // @ts-ignore
      onDateHover: onDateHover,
      // @ts-ignore
      isDateBlocked: isDateBlockedFn
    }
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    position: "relative"
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React__namespace["default"].createElement(MonthGrid$1, {
    "data-testid": "MonthGrid",
    overflow: "auto",
    gridTemplateColumns: vertical ? '1fr' : "repeat(".concat(numberOfMonths, ", 1fr)"),
    gridGap: "0 32px",
    pr: rtl ? '1px' : '0',
    ref: monthGridRef,
    onMouseLeave: function onMouseLeave() {
      if (hoveredDate) {
        onDateHover(null);
      }
    }
  }, activeMonths.map(function (month) {
    return /*#__PURE__*/React__namespace["default"].createElement(Month, {
      key: "month-".concat(month.year, "-").concat(month.month),
      year: month.year,
      month: month.month,
      firstDayOfWeek: firstDayOfWeek // @ts-ignore
      ,
      dayLabelFormat: dayLabelFormat || hooks.dayLabelFormat,
      weekdayLabelFormat: weekdayLabelFormat || hooks.weekdayLabelFormat,
      monthLabelFormat: monthLabelFormat || hooks.monthLabelFormat
    });
  })), showResetDates && /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    flex: "1",
    justifyContent: "flex-end",
    m: "2px 8px"
  }, /*#__PURE__*/React__namespace["default"].createElement(TextButton, {
    onClick: onResetDates
  }, "Reset"))), /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    alignItems: "center"
  }, /*#__PURE__*/React__namespace["default"].createElement(React__namespace["default"].Fragment, null, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    position: "absolute",
    top: "4px",
    left: "8px",
    right: "unset",
    bottom: "unset"
  }, /*#__PURE__*/React__namespace["default"].createElement(IconButton, {
    size: 2,
    onClick: handleGoToPreviousMonth
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.AngleLeft, null))), /*#__PURE__*/React__namespace["default"].createElement(Box, {
    position: "absolute",
    top: "4px",
    left: "unset",
    right: "8px",
    bottom: "unset"
  }, /*#__PURE__*/React__namespace["default"].createElement(IconButton, {
    size: 2,
    onClick: handleGoToNextMonth
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.AngleRight, null)))))));
};
var DatePicker$1 = /*#__PURE__*/React__namespace["default"].forwardRef(DatePicker);

var DateSingleInput = function DateSingleInput(_ref) {
  var date = _ref.date,
      tabIndex = _ref.tabIndex,
      minBookingDate = _ref.minBookingDate,
      maxBookingDate = _ref.maxBookingDate,
      firstDayOfWeek = _ref.firstDayOfWeek,
      onFocusChange = _ref.onFocusChange,
      onDateChange = _ref.onDateChange,
      dayLabelFormat = _ref.dayLabelFormat,
      weekdayLabelFormat = _ref.weekdayLabelFormat,
      monthLabelFormat = _ref.monthLabelFormat,
      onDayRender = _ref.onDayRender,
      initialVisibleMonth = _ref.initialVisibleMonth,
      _ref$numberOfMonths = _ref.numberOfMonths,
      numberOfMonths = _ref$numberOfMonths === void 0 ? 1 : _ref$numberOfMonths,
      _ref$showClose = _ref.showClose,
      showClose = _ref$showClose === void 0 ? true : _ref$showClose,
      _ref$showResetDate = _ref.showResetDate,
      showResetDate = _ref$showResetDate === void 0 ? true : _ref$showResetDate,
      _ref$isDateBlocked = _ref.isDateBlocked,
      isDateBlocked = _ref$isDateBlocked === void 0 ? function () {
    return false;
  } : _ref$isDateBlocked,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$displayFormat = _ref.displayFormat,
      displayFormat = _ref$displayFormat === void 0 ? 'MM/dd/yyyy' : _ref$displayFormat,
      _ref$inputId = _ref.inputId,
      inputId = _ref$inputId === void 0 ? 'startDate' : _ref$inputId,
      _ref$unavailableDates = _ref.unavailableDates,
      unavailableDates = _ref$unavailableDates === void 0 ? [] : _ref$unavailableDates;
  var ref = React.useRef(null);
  var show, setShow;
  var dateInputRef = React__namespace["default"].useRef(null);
  var config = useMenu(dateInputRef, {
    orientation: 'bottom',
    padding: 6 // menuWidth,

  });
  show = config.show;
  setShow = config.setShow;

  var handleDatepickerClose = function handleDatepickerClose() {
    onClose();
    onFocusChange(false);
  };

  var onDatesChange = function onDatesChange(_ref2) {
    var focusedInput = _ref2.focusedInput,
        startDate = _ref2.startDate;
    console.log('input changed', date);
    setShow(false);
    onDateChange({
      showDatepicker: focusedInput !== null,
      date: startDate
    });
  };

  var handleInputChange = function handleInputChange(date) {
    console.log('input changed', date); // @ts-ignore

    onDateChange({
      showDatepicker: false,
      date: date
    });

    if (ref && ref.current && ref.current.onDateSelect) {
      // @ts-ignore
      ref.current.onDateSelect(date);
    }
  };

  return /*#__PURE__*/React__namespace["default"].createElement(Box, {
    position: "relative"
  }, /*#__PURE__*/React__namespace["default"].createElement(Input, {
    readOnly: true,
    id: inputId,
    ref: dateInputRef,
    tabIndex: tabIndex,
    leftIcon: /*#__PURE__*/React__namespace["default"].createElement(Icons.Calendar, {
      style: {
        opacity: 0.5
      }
    }),
    rightIcon: /*#__PURE__*/React__namespace["default"].createElement(Icons.ArrowDropdown, {
      size: 2,
      style: {
        opacity: 0.5
      }
    }),
    ariaLabel: "Select date",
    placeholder: "Select date",
    type: "date",
    value: date ? date.toISOString().split('T')[0] : '',
    onClick: function onClick() {
      return onFocusChange(true);
    },
    onChange: handleInputChange // @ts-ignore
    // dateFormat={'MM-dd-yyyy'}

  }), /*#__PURE__*/React__namespace["default"].createElement(Menu, {
    preventDefault: false,
    id: "date-picker-single",
    style: {
      top: 34 + 2,
      minWidth: 225,
      width: 'max-content'
    },
    isOpen: show,
    onClose: function onClose() {
      return setShow(false);
    }
  }, /*#__PURE__*/React__namespace["default"].createElement(DatePicker$1, {
    ref: ref,
    exactMinBookingDays: true,
    minBookingDays: 1,
    onClose: handleDatepickerClose,
    startDate: date,
    endDate: date,
    minBookingDate: minBookingDate,
    maxBookingDate: maxBookingDate,
    firstDayOfWeek: firstDayOfWeek,
    numberOfMonths: numberOfMonths // @ts-ignore
    ,
    focusedInput: show ? hooks.START_DATE : null,
    displayFormat: displayFormat,
    onDatesChange: onDatesChange,
    isDateBlocked: isDateBlocked,
    showResetDates: showResetDate,
    showSelectedDates: false,
    showClose: showClose,
    dayLabelFormat: dayLabelFormat,
    weekdayLabelFormat: weekdayLabelFormat,
    monthLabelFormat: monthLabelFormat,
    onDayRender: onDayRender,
    unavailableDates: unavailableDates,
    initialVisibleMonth: initialVisibleMonth
  })));
};

function toISOLocal(d) {
  var z = function z(n) {
    return ('0' + n).slice(-2);
  };

  var zz = function zz(n) {
    return ('00' + n).slice(-3);
  };

  var off = d.getTimezoneOffset();
  var sign = off > 0 ? '-' : '+';
  off = Math.abs(off);
  return d.getFullYear() + '-' + z(d.getMonth() + 1) + '-' + z(d.getDate()) + 'T' + z(d.getHours()) + ':' + z(d.getMinutes()) + ':' + z(d.getSeconds()) + '.' + zz(d.getMilliseconds()) + sign + z(off / 60 | 0) + ':' + z(off % 60);
}

var TimeInputBox = styled__default["default"].form.withConfig({
  displayName: "TimeInput__TimeInputBox",
  componentId: "sc-163uh89-0"
})({
  display: 'flex',
  boxSizing: 'border-box',
  // @ts-ignore
  flex: function flex(props) {
    return props.fx;
  },
  // @ts-ignore
  gap: function gap(props) {
    return props.gap;
  },
  //@ts-ignore
  alignItems: function alignItems(props) {
    return props.itemsCenter ? 'center' : 'initial';
  },
  //@ts-ignore
  justifyContent: function justifyContent(props) {
    return props.justifyCenter ? 'center' : 'initial';
  },
  border: "1px solid ".concat(function (props) {
    return props.theme.colors.ui.input.borderColor;
  })
});
var TimeInput = function TimeInput(_ref) {
  var onTimeSelect = _ref.onTimeSelect,
      date = _ref.date,
      showSeconds = _ref.showSeconds,
      is24 = _ref.is24;
  var now = date ? new Date(date) : new Date(); // Get refs

  var hrRef = /*#__PURE__*/React__namespace["default"].createRef();
  var minRef = /*#__PURE__*/React__namespace["default"].createRef();
  var secRef = /*#__PURE__*/React__namespace["default"].createRef();
  var amPmRef = /*#__PURE__*/React__namespace["default"].createRef();
  var withPmAm = now.toLocaleTimeString('default', {
    // en-US can be set to 'default' to use user's browser settings
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: !is24
  });
  var timeArr = withPmAm.split(':');
  var secondPmAm = timeArr[2].split(' ');

  var _useState = React.useState({
    hr: timeArr[0],
    min: timeArr[1],
    sec: secondPmAm[0],
    amPm: secondPmAm[1]
  }),
      _useState2 = _slicedToArray(_useState, 2),
      timeObj = _useState2[0],
      setTimeObj = _useState2[1]; // return useMemo(() => {


  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === 'Enter') {
      event.target.blur();
    }
  };

  var handleFormChange = function handleFormChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setTimeObj(_objectSpread2(_objectSpread2({}, timeObj), {}, _defineProperty({}, name, value.toString())));

    if (name === 'amPm') {
      amPmRef.current.blur();
    }
  };

  var handleFormBlur = function handleFormBlur(_event) {
    // Set amPm
    if (_event.target.name === 'amPm') timeObj.amPm = _event.target.value; // Handle hour validation

    var intHr = parseInt(timeObj.hr);

    if (intHr < 10 && timeObj.hr.length === 1) {
      timeObj.hr = "0".concat(timeObj.hr);
    } else if (intHr > 12 && !is24) {
      timeObj.hr = '12';
    } else if (intHr > 23 && is24) {
      timeObj.hr = '23';
    } else if (intHr < 0) {
      timeObj.hr = '01';
    }

    hrRef.current.value = timeObj.hr; // Handle minute validation

    var intMin = parseInt(timeObj.min);

    if (intMin < 10 && timeObj.min.length === 1) {
      timeObj.min = "0".concat(timeObj.min);
    } else if (intMin > 59) {
      timeObj.min = '59';
    } else if (intMin < 0) {
      timeObj.min = '00';
    }

    minRef.current.value = timeObj.min;

    if (showSeconds) {
      // Handle second validation
      var intSec = parseInt(timeObj.sec);

      if (intSec < 10 && timeObj.sec.length === 1) {
        timeObj.sec = "0".concat(timeObj.sec);
      } else if (intSec > 59) {
        timeObj.sec = '59';
      } else if (intSec < 0) {
        timeObj.sec = '00';
      }

      secRef.current.value = timeObj.sec;
    }

    var newDate = new Date("".concat(toISOLocal(now).split('T')[0], " ").concat(timeObj.hr, ":").concat(timeObj.min, ":").concat(timeObj.sec, " ").concat(timeObj.amPm));
    onTimeSelect(newDate);
  };

  return /*#__PURE__*/React__namespace["default"].createElement(TimeInputBox, {
    px: "12px",
    mt: 1,
    mb: 2,
    gap: "4px",
    justifyCenter: true,
    itemsCenter: true,
    fx: 1,
    onChange: function onChange(evt) {
      return handleFormChange(evt);
    },
    onBlur: function onBlur(evt) {
      return handleFormBlur(evt);
    }
  }, /*#__PURE__*/React__namespace["default"].createElement(Input, {
    ref: hrRef,
    min: "1",
    name: "hr",
    max: is24 ? '24' : '12',
    required: true,
    width: "30px",
    type: "number",
    defaultValue: timeObj.hr,
    onKeyPress: handleKeyPress
  }), ":", /*#__PURE__*/React__namespace["default"].createElement(Input, {
    ref: minRef,
    required: true,
    name: "min",
    min: "0",
    max: "59",
    width: "30px",
    type: "number",
    defaultValue: timeObj.min,
    onKeyPress: handleKeyPress
  }), showSeconds && /*#__PURE__*/React__namespace["default"].createElement(React__namespace["default"].Fragment, null, ":", /*#__PURE__*/React__namespace["default"].createElement(Input, {
    ref: secRef,
    required: true,
    name: "seconds",
    bg: "transparent",
    width: "30px",
    type: "number",
    defaultValue: timeObj.sec,
    onKeyPress: handleKeyPress
  })), !is24 && /*#__PURE__*/React__namespace["default"].createElement(HTMLSelect, {
    ref: amPmRef,
    name: "amPm",
    ml: "8px",
    style: {
      width: '60px',
      background: 'transparent'
    },
    defaultValue: timeObj.amPm // onKeyPress={handleKeyPress} todo make tab+enter work

  }, /*#__PURE__*/React__namespace["default"].createElement("option", {
    value: "AM"
  }, "AM"), /*#__PURE__*/React__namespace["default"].createElement("option", {
    value: "PM"
  }, "PM"))); // }, [timeObj]);
};

var composeMonthGridStyles = styledSystem.compose(styledSystem.overflow, styledSystem.height);
var MonthGrid = styled__default["default"](Grid).withConfig({
  displayName: "TimePicker__MonthGrid",
  componentId: "sc-irzcbz-0"
})(["", ""], composeMonthGridStyles);
var DateTimePicker = function DateTimePicker(_ref, ref) {
  var startDate = _ref.startDate,
      endDate = _ref.endDate,
      minBookingDate = _ref.minBookingDate,
      maxBookingDate = _ref.maxBookingDate,
      focusedInput = _ref.focusedInput,
      onDatesChange = _ref.onDatesChange,
      dayLabelFormat = _ref.dayLabelFormat,
      weekdayLabelFormat = _ref.weekdayLabelFormat,
      monthLabelFormat = _ref.monthLabelFormat,
      initialVisibleMonth = _ref.initialVisibleMonth,
      _ref$vertical = _ref.vertical,
      vertical = _ref$vertical === void 0 ? false : _ref$vertical,
      _ref$rtl = _ref.rtl,
      rtl = _ref$rtl === void 0 ? false : _ref$rtl,
      _ref$exactMinBookingD = _ref.exactMinBookingDays,
      exactMinBookingDays = _ref$exactMinBookingD === void 0 ? false : _ref$exactMinBookingD,
      _ref$isDateBlocked = _ref.isDateBlocked,
      isDateBlocked = _ref$isDateBlocked === void 0 ? function () {
    return false;
  } : _ref$isDateBlocked,
      _ref$minBookingDays = _ref.minBookingDays,
      minBookingDays = _ref$minBookingDays === void 0 ? 1 : _ref$minBookingDays,
      numberOfMonthsProp = _ref.numberOfMonths,
      firstDayOfWeekProp = _ref.firstDayOfWeek,
      _ref$unavailableDates = _ref.unavailableDates,
      unavailableDates = _ref$unavailableDates === void 0 ? [] : _ref$unavailableDates;

  var _useDatepicker = hooks.useDatepicker({
    startDate: startDate,
    endDate: endDate,
    focusedInput: focusedInput,
    onDatesChange: onDatesChange,
    minBookingDate: minBookingDate,
    maxBookingDate: maxBookingDate,
    minBookingDays: minBookingDays,
    isDateBlocked: isDateBlocked,
    exactMinBookingDays: exactMinBookingDays,
    unavailableDates: unavailableDates,
    initialVisibleMonth: initialVisibleMonth,
    numberOfMonths: numberOfMonthsProp,
    firstDayOfWeek: firstDayOfWeekProp
  }),
      activeMonths = _useDatepicker.activeMonths,
      isDateSelected = _useDatepicker.isDateSelected,
      isFirstOrLastSelectedDate = _useDatepicker.isFirstOrLastSelectedDate,
      isDateHovered = _useDatepicker.isDateHovered,
      firstDayOfWeek = _useDatepicker.firstDayOfWeek,
      _onDateSelect = _useDatepicker.onDateSelect,
      goToPreviousMonths = _useDatepicker.goToPreviousMonths,
      goToNextMonths = _useDatepicker.goToNextMonths,
      numberOfMonths = _useDatepicker.numberOfMonths,
      hoveredDate = _useDatepicker.hoveredDate,
      onDateHover = _useDatepicker.onDateHover,
      isDateFocused = _useDatepicker.isDateFocused,
      focusedDate = _useDatepicker.focusedDate,
      onDateFocus = _useDatepicker.onDateFocus,
      isDateBlockedFn = _useDatepicker.isDateBlocked;

  var monthGridRef = React.useRef(null);
  React.useImperativeHandle(ref, function () {
    return {
      onDateSelect: function onDateSelect(date) {
        _onDateSelect(date);
      }
    };
  });

  function scrollTopToMonthGrid() {
    if (monthGridRef && monthGridRef.current && vertical) {
      monthGridRef.current.scrollTop = 0;
    }
  }

  function handleGoToNextMonth() {
    goToNextMonths();
    scrollTopToMonthGrid();
  }

  function handleGoToPreviousMonth() {
    goToPreviousMonths();
    scrollTopToMonthGrid();
  }

  return /*#__PURE__*/React__namespace["default"].createElement(DatepickerContext.Provider, {
    value: {
      focusedDate: focusedDate,
      // @ts-ignore
      isDateFocused: isDateFocused,
      // @ts-ignore
      isDateSelected: isDateSelected,
      // @ts-ignore
      isDateHovered: isDateHovered,
      // @ts-ignore
      isFirstOrLastSelectedDate: isFirstOrLastSelectedDate,
      // @ts-ignore
      onDateSelect: _onDateSelect,
      // @ts-ignore
      onDateFocus: onDateFocus,
      // @ts-ignore
      onDateHover: onDateHover,
      // @ts-ignore
      isDateBlocked: isDateBlockedFn
    }
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    px: 2,
    position: "relative"
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    flexDirection: "column"
  }, /*#__PURE__*/React__namespace["default"].createElement(MonthGrid, {
    "data-testid": "MonthGrid",
    overflow: "auto",
    gridTemplateColumns: vertical ? '1fr' : "repeat(".concat(numberOfMonths, ", 1fr)"),
    gridGap: "0 32px",
    pr: rtl ? '1px' : '0',
    ref: monthGridRef,
    onMouseLeave: function onMouseLeave() {
      if (hoveredDate) {
        onDateHover(null);
      }
    }
  }, activeMonths.map(function (month) {
    return /*#__PURE__*/React__namespace["default"].createElement(Month, {
      key: "month-".concat(month.year, "-").concat(month.month),
      year: month.year,
      month: month.month,
      firstDayOfWeek: firstDayOfWeek // @ts-ignore
      ,
      dayLabelFormat: dayLabelFormat || hooks.dayLabelFormat,
      weekdayLabelFormat: weekdayLabelFormat || hooks.weekdayLabelFormat,
      monthLabelFormat: monthLabelFormat || hooks.monthLabelFormat
    });
  })), /*#__PURE__*/React__namespace["default"].createElement(Divider, {
    style: {
      opacity: 0.6
    },
    my: "8px"
  }), /*#__PURE__*/React__namespace["default"].createElement(TimeInput, {
    is24: false,
    showSeconds: false,
    date: startDate,
    onTimeSelect: function onTimeSelect(time) {
      startDate.setHours(time.getHours(), time.getMinutes(), time.getSeconds());

      _onDateSelect(startDate);
    }
  })), /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    alignItems: "center"
  }, /*#__PURE__*/React__namespace["default"].createElement(React__namespace["default"].Fragment, null, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    position: "absolute",
    top: "4px",
    left: "8px",
    right: "unset",
    bottom: "unset"
  }, /*#__PURE__*/React__namespace["default"].createElement(IconButton, {
    size: 24,
    "data-prevent-menu-close": true,
    onClick: function onClick(evt) {
      evt.stopPropagation();
      handleGoToPreviousMonth();
    }
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.AngleLeft, null))), /*#__PURE__*/React__namespace["default"].createElement(Box, {
    position: "absolute",
    top: "4px",
    left: "unset",
    right: "8px",
    bottom: "unset"
  }, /*#__PURE__*/React__namespace["default"].createElement(IconButton, {
    size: 24,
    "data-prevent-menu-close": true,
    onClick: function onClick(evt) {
      evt.stopPropagation();
      handleGoToNextMonth();
    }
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.AngleRight, null)))))));
};
var DateTimePicker$1 = /*#__PURE__*/React__namespace["default"].forwardRef(DateTimePicker);

var DateTimeInput = function DateTimeInput(_ref) {
  var timePicker = _ref.timePicker,
      date = _ref.date,
      tabIndex = _ref.tabIndex,
      minBookingDate = _ref.minBookingDate,
      maxBookingDate = _ref.maxBookingDate,
      firstDayOfWeek = _ref.firstDayOfWeek,
      onFocusChange = _ref.onFocusChange,
      onDateChange = _ref.onDateChange,
      dayLabelFormat = _ref.dayLabelFormat,
      weekdayLabelFormat = _ref.weekdayLabelFormat,
      monthLabelFormat = _ref.monthLabelFormat,
      onDayRender = _ref.onDayRender,
      initialVisibleMonth = _ref.initialVisibleMonth,
      _ref$numberOfMonths = _ref.numberOfMonths,
      numberOfMonths = _ref$numberOfMonths === void 0 ? 1 : _ref$numberOfMonths,
      _ref$showClose = _ref.showClose,
      showClose = _ref$showClose === void 0 ? true : _ref$showClose,
      _ref$showResetDate = _ref.showResetDate,
      showResetDate = _ref$showResetDate === void 0 ? true : _ref$showResetDate,
      _ref$isDateBlocked = _ref.isDateBlocked,
      isDateBlocked = _ref$isDateBlocked === void 0 ? function () {
    return false;
  } : _ref$isDateBlocked,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$displayFormat = _ref.displayFormat,
      displayFormat = _ref$displayFormat === void 0 ? 'MM/dd/yyyy' : _ref$displayFormat,
      _ref$hasSeconds = _ref.hasSeconds,
      hasSeconds = _ref$hasSeconds === void 0 ? false : _ref$hasSeconds,
      _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$inputId = _ref.inputId,
      inputId = _ref$inputId === void 0 ? 'startDate' : _ref$inputId,
      _ref$unavailableDates = _ref.unavailableDates,
      unavailableDates = _ref$unavailableDates === void 0 ? [] : _ref$unavailableDates;
  var ref = React.useRef(null);
  var show, setShow;
  var dateInputRef = React__namespace["default"].useRef(null);
  var config = useMenu(dateInputRef, {
    orientation: placement,
    padding: 6 // menuWidth,

  });
  show = config.show;
  setShow = config.setShow;

  var handleDatepickerClose = function handleDatepickerClose() {
    onClose();
    onFocusChange(false);
  };

  var onDatesChange = function onDatesChange(_ref2) {
    var focusedInput = _ref2.focusedInput,
        startDate = _ref2.startDate;
    // console.log(date, startDate);
    onDateChange({
      showDatepicker: focusedInput !== null,
      date: startDate
    });
  };

  var handleInputChange = function handleInputChange(date) {
    // @ts-ignore
    onDateChange({
      showDatepicker: false,
      date: date
    });

    if (ref && ref.current && ref.current.onDateSelect) {
      // @ts-ignore
      ref.current.onDateSelect(date);
    }
  };

  var timeStr;
  var nowSplit = date ? toISOLocal(date).split('T') : toISOLocal(new Date()).split('T');

  if (timePicker) {
    var timeSplit = nowSplit[1].split(':');
    timeStr = "".concat(nowSplit[0], "T").concat(timeSplit[0], ":").concat(timeSplit[1]);
    if (hasSeconds) timeStr = "".concat(timeStr, ":").concat(timeSplit[2].split('.')[0]);
  } else {
    timeStr = "".concat(nowSplit[0]);
  }

  return /*#__PURE__*/React__namespace["default"].createElement(Box, {
    position: "relative"
  }, /*#__PURE__*/React__namespace["default"].createElement(Input, {
    readOnly: true,
    id: inputId,
    ref: dateInputRef,
    tabIndex: tabIndex,
    leftIcon: /*#__PURE__*/React__namespace["default"].createElement(Icons.Calendar, {
      style: {
        opacity: 0.5
      }
    }) // rightIcon={<Icons.ArrowDropdown size={2} style={{ opacity: 0.5 }} />}
    ,
    ariaLabel: "Select date",
    placeholder: "Select date",
    type: timePicker ? 'datetime-local' : 'date',
    value: timeStr,
    onClick: function onClick() {
      return onFocusChange(true);
    },
    onChange: handleInputChange // @ts-ignore
    ,
    dateFormat: 'MM-dd-yyyy hh:mm'
  }), /*#__PURE__*/React__namespace["default"].createElement(Menu, {
    preventDefault: false,
    id: "date-picker-single",
    style: {
      top: 34 + 2,
      minWidth: 225,
      width: 'max-content',
      paddingTop: 8
    },
    isOpen: show,
    onClose: function onClose() {
      return setShow(false);
    }
  }, /*#__PURE__*/React__namespace["default"].createElement(DateTimePicker$1, {
    ref: ref,
    exactMinBookingDays: true,
    minBookingDays: 1,
    onClose: handleDatepickerClose,
    startDate: date,
    endDate: date,
    minBookingDate: minBookingDate,
    maxBookingDate: maxBookingDate,
    firstDayOfWeek: firstDayOfWeek,
    numberOfMonths: numberOfMonths // @ts-ignore
    ,
    focusedInput: show ? hooks.START_DATE : null,
    displayFormat: displayFormat,
    onDatesChange: onDatesChange,
    isDateBlocked: isDateBlocked,
    showResetDates: showResetDate,
    showSelectedDates: false,
    showClose: showClose,
    dayLabelFormat: dayLabelFormat,
    weekdayLabelFormat: weekdayLabelFormat,
    monthLabelFormat: monthLabelFormat,
    onDayRender: onDayRender,
    unavailableDates: unavailableDates,
    initialVisibleMonth: initialVisibleMonth
  })));
};

var Ship = function Ship(props) {
  return /*#__PURE__*/React__namespace.createElement(Flex, {
    style: {
      gap: 8
    },
    alignItems: "center",
    padding: ['4px', 0, '4px', 0]
  }, /*#__PURE__*/React__namespace.createElement(Sigil, {
    clickable: false,
    avatar: props.avatar,
    patp: props.patp,
    size: 24,
    color: props.color ? [props.color, 'white'] : ['black', 'white']
  }), /*#__PURE__*/React__namespace.createElement(Text, {
    style: {
      opacity: props.textOpacity || 0.95
    },
    variant: "body",
    fontWeight: "400" // fontByType="monospace"

  }, props.nickname || props.patp));
};

var NotificationStyle = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Notificationstyles__NotificationStyle",
  componentId: "sc-g7skqi-1"
})(["display:flex;min-width:24px;min-height:24px;width:100%;padding:8px;justify-content:center;align-items:center;border-radius:", "px;border:", ";padding:4px;font-weight:", ";background:", ";color:", ";"], function (props) {
  return props.theme.containers.rounderBorderRadius;
}, function (props) {
  return props.hasBorder ? "1px solid ".concat(polished.rgba(props.customColor, 0.5)) : 'none';
}, function (props) {
  return props.theme.fontWeights.light;
}, function (props) {
  return polished.rgba(props.customColor, 0.2);
}, function (props) {
  return props.customColor;
})).withConfig({
  displayName: "Notificationstyles__NotificationStyle",
  componentId: "sc-g7skqi-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));

var Notification = function Notification(props) {
  return /*#__PURE__*/React__namespace.createElement(NotificationStyle, {
    hasBorder: props.hasBorder,
    customColor: props.customColor
  }, props.children);
};
Notification.defaultProps = {
  customColor: '#4E9EFD',
  hasBorder: false,
  children: '1'
};

var Group = function Group(props) {
  return /*#__PURE__*/React__namespace.createElement(Flex, {
    style: {
      gap: 8
    },
    alignItems: "center",
    padding: [4, 0, 4, 0],
    flexDirection: "row"
  }, props.sigil && /*#__PURE__*/React__namespace.createElement(Sigil, {
    clickable: props.clickable,
    size: props.size === 'medium' ? 32 : 24,
    patp: props.patp,
    color: props.color ? [props.color, 'white'] : ['black', 'white'],
    orientation: "bottom",
    menuOptions: props.menuOptions,
    entity: props.entity
  }), /*#__PURE__*/React__namespace.createElement(Flex, {
    flexDirection: "row",
    justifyContent: props.type ? 'space-between' : props.notification ? 'space-between' : 'flex-start',
    alignItems: "flex-end",
    padding: "0px",
    minWidth: props.noAttachments === true ? 0 : '320px',
    maxWidth: "100%"
  }, /*#__PURE__*/React__namespace.createElement(Flex, {
    flexDirection: "column",
    alignItems: "flex-start"
  }, /*#__PURE__*/React__namespace.createElement(Text, {
    style: {
      opacity: 0.75
    },
    variant: "h5",
    fontByType: "monospace"
  }, props.name), props.link && /*#__PURE__*/React__namespace.createElement(Text, {
    style: {
      opacity: 0.75
    },
    variant: "body",
    fontByType: "monospace"
  }, props.link), props.participantNumber && /*#__PURE__*/React__namespace.createElement(Text, {
    style: {
      opacity: 0.5
    },
    variant: "body",
    fontByType: "monospace"
  }, "".concat(props.participantNumber, " ").concat(props.participantType))), props.notification && /*#__PURE__*/React__namespace.createElement(Notification, {
    colour: props.customColour
  }, props.notification), props.type && /*#__PURE__*/React__namespace.createElement(Tag, {
    label: props.entity,
    minimal: true,
    custom: props.customColour
  })));
};
Group.defaultProps = {
  patp: '~lomder-librun',
  name: 'Holons',
  color: '#ff810a',
  size: 'medium',
  entity: 'Group'
};

var AvatarWrapper = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Sigilstyles__AvatarWrapper",
  componentId: "sc-t5ic5o-1"
})(["appearance:none;-webkit-appearance:none;-moz-appearance:none;border:none;outline:none;display:inline-flex;flex-direction:column;justify-content:center;position:relative;text-align:center;vertical-align:middle;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;overflow:visible;pointer-events:auto;img{pointer-events:", ";}transition:", ";", " ", ""], function (props) {
  return props.clickable ? 'none' : 'inherit';
}, function (props) {
  return props.theme.transition;
}, selectableFocus, function (props) {
  return props.clickable && styled.css(["cursor:pointer;"]);
})).withConfig({
  displayName: "Sigilstyles__AvatarWrapper",
  componentId: "sc-t5ic5o-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var SigilStyle = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Sigilstyles__SigilStyle",
  componentId: "sc-t5ic5o-3"
})(["appearance:none;-webkit-appearance:none;-moz-appearance:none;border:none;outline:none;display:inline-flex;flex-direction:column;justify-content:center;position:relative;text-align:center;vertical-align:middle;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;overflow:visible;height:", "px;width:", "px;background-color:", ";border-width:0px;border-radius:", ";transition:", ";pointer-events:auto;svg{pointer-events:", ";}", " ", ""], function (props) {
  return props.sigilSize;
}, function (props) {
  return props.sigilSize;
}, function (props) {
  return props.sigilColor;
}, function (props) {
  return props.borderRadiusOverride || '4px';
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.clickable ? 'none' : 'inherit';
}, selectableFocus, function (props) {
  return props.clickable && styled.css(["cursor:pointer;"]);
})).withConfig({
  displayName: "Sigilstyles__SigilStyle",
  componentId: "sc-t5ic5o-2"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));

var Sigil = function Sigil(props) {
  var avatar = props.avatar,
      clickable = props.clickable,
      borderRadiusOverride = props.borderRadiusOverride,
      contextMenu = props.contextMenu;
  var sigilRef = React__namespace.useRef();
  var anchorPoint, show, setShow;
  var menuWidth = 180; // Get the popup anchor

  if (clickable) {
    var config = useMenu(sigilRef, {
      orientation: 'bottom-left',
      padding: 6,
      menuWidth: menuWidth
    });
    anchorPoint = config.anchorPoint;
    show = config.show;
    setShow = config.setShow;
  }

  var sigilSize = props.size / 2;
  var horizontalPadding = sigilSize / 2;
  var element;

  if (avatar) {
    element = /*#__PURE__*/React__namespace.createElement(AvatarWrapper, {
      id: "ship",
      tabIndex: clickable ? 0 : -1,
      ref: sigilRef,
      style: {
        borderRadius: borderRadiusOverride || 4
      },
      clickable: clickable,
      onClick: function onClick(evt) {
        evt.preventDefault();
        evt.currentTarget.blur();
        clickable && !show && setShow && setShow(true);
      },
      active: clickable && show,
      borderRadiusOverride: borderRadiusOverride
    }, /*#__PURE__*/React__namespace.createElement("img", {
      style: {
        borderRadius: borderRadiusOverride || 4
      },
      height: props.size,
      width: props.size,
      src: avatar
    }));
  } else {
    var isValid = props.patp.split('-').length <= 2;
    element = /*#__PURE__*/React__namespace.createElement(SigilStyle, {
      id: "ship",
      tabIndex: clickable ? 0 : -1,
      ref: sigilRef,
      clickable: clickable,
      onClick: function onClick(evt) {
        evt.preventDefault();
        evt.currentTarget.blur();
        clickable && !show && setShow && setShow(true);
      },
      active: clickable && show,
      borderRadiusOverride: borderRadiusOverride,
      sigilColor: props.color[0],
      sigilSize: props.size,
      style: {
        paddingLeft: horizontalPadding,
        paddingRight: horizontalPadding
      }
    }, isValid ? sigilJs.sigil({
      patp: props.patp,
      renderer: sigilJs.reactRenderer,
      size: props.size / 2,
      icon: props.simple,
      colors: props.color,
      margin: false
    }) : /*#__PURE__*/React__namespace.createElement("div", {
      style: {
        backgroundColor: props.color[0],
        width: props.size / 2,
        height: props.size / 2
      }
    }));
  }

  return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, element, /*#__PURE__*/React__namespace.createElement(Menu, {
    id: "".concat(props.patp, "-user-menu"),
    style: {
      top: anchorPoint && anchorPoint.y + 6,
      left: anchorPoint && anchorPoint.x + 8,
      padding: '8px 4px',
      visibility: show ? 'visible' : 'hidden',
      width: menuWidth
    },
    isOpen: show,
    onClose: function onClose() {
      setShow(false);
    }
  }, contextMenu));
};
Sigil.defaultProps = {
  size: 30,
  simple: true,
  clickable: false
};

var _excluded$1 = ["block", "title", "size", "color"];
var sizes$1 = [16, 24, 32, 40, 48, 56, 64, 72, 80, 88];
var SimpleSpinner = styled__default["default"].div.withConfig({
  displayName: "Spinner__SimpleSpinner",
  componentId: "sc-nzhgkx-0"
})(["width:48px;height:48px;border:", "px solid ", ";border-bottom-color:", ";border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite;@keyframes rotation{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"], function (props) {
  return props.size < 2 ? 1 : 5;
}, function (props) {
  return polished.rgba(props.theme.colors.ui.secondary, 0.2);
}, function (props) {
  return props.theme.colors.brand.secondary;
});
var SimpleSpinnerComposed = styled__default["default"](SimpleSpinner).withConfig({
  displayName: "Spinner__SimpleSpinnerComposed",
  componentId: "sc-nzhgkx-1"
})({
  display: 'flex'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));
var defaultProps = {
  block: true,
  size: 4,
  title: 'Loading…',
  color: 'ui.primary'
};
var Spinner = /*#__PURE__*/React__namespace["default"].memo(function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultProps,
      block = _ref.block,
      title = _ref.title,
      size = _ref.size,
      color = _ref.color,
      props = _objectWithoutProperties(_ref, _excluded$1);

  return /*#__PURE__*/React__namespace["default"].createElement(Box, _extends({
    display: block ? 'block' : 'inline-block'
  }, props), /*#__PURE__*/React__namespace["default"].createElement(SimpleSpinnerComposed, {
    title: title,
    size: sizes$1[size],
    color: color
  }));
});

var underlineSize = 3;
var TabStyle = styled__default["default"].div.withConfig({
  displayName: "Tabstyles__TabStyle",
  componentId: "sc-19mrekc-0"
})(["text-transform:uppercase;display:flex;font-weight:700;font-size:14px;flex-direction:column;align-items:flex-start;padding-bottom:10px;text-decoration:none;border-bottom:", "px solid transparent;transition:all 0.3s;border-radius:", "px ", "px 0 0;cursor:pointer;-webkit-transform:translateY(1px);-ms-transform:translateY(1px);transform:translateY(1px);color:", ";:hover,:active,:focus{border-bottom:", "px solid ", ";}:visited{color:", ";}", " ", ""], underlineSize, function (p) {
  return p.theme.containers.innerBorderRadius;
}, function (p) {
  return p.theme.containers.innerBorderRadius;
}, function (p) {
  return p.theme.colors.text.disabled;
}, underlineSize, function (p) {
  return polished.rgba(p.theme.colors.text.disabled, 0.7);
}, function (p) {
  return p.theme.colors.text.disabled;
}, function (p) {
  return p.isActive && styled.css(["border-bottom:", "px solid ", ";pointer-events:none;color:", ";:hover{border-bottom:", "px solid ", ";}"], underlineSize, function (p) {
    return p.theme.colors.brand.primary;
  }, function (p) {
    return p.theme.colors.brand.primary;
  }, underlineSize, function (p) {
    return p.theme.colors.brand.primary;
  });
}, function (p) {
  return p.isDisabled && styled.css(["pointer-events:none;opacity:0.3;"]);
});

var Tab = function Tab(props) {
  var children = props.children,
      active = props.active,
      _onClick = props.onClick,
      label = props.label,
      isDisabled = props.isDisabled;
  return /*#__PURE__*/React__namespace.createElement(TabStyle, {
    isDisabled: isDisabled,
    isActive: active,
    onClick: function onClick(evt) {
      evt.stopPropagation();

      _onClick(label);
    }
  }, children);
};

var ColorLine = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Card__ColorLine",
  componentId: "sc-1i4b8ay-1"
})(["position:absolute;width:5px;height:inherit;border-radius:", "px 0 0 ", "px;transition:", ";background-color:", ";"], function (props) {
  return props.theme.containers.outerBorderRadius;
}, function (props) {
  return props.theme.containers.outerBorderRadius;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.colors.brand.primary;
})).withConfig({
  displayName: "Card__ColorLine",
  componentId: "sc-1i4b8ay-0"
})(styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.typography));
var CardInner = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Card__CardInner",
  componentId: "sc-1i4b8ay-3"
})(["position:relative;width:calc(100% - ", ");height:calc(100% - ", ");"], function (props) {
  return props.padding || '30px';
}, function (props) {
  return props.padding || '30px';
})).withConfig({
  displayName: "Card__CardInner",
  componentId: "sc-1i4b8ay-2"
})(styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.typography));
var Card = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Card",
  componentId: "sc-1i4b8ay-5"
})(["color:", ";background:", ";border:", ";transition:0.2s ease;border-radius:", "px;box-shadow:", ";-webkit-font-smoothing:antialiased;&:hover{transition:", ";}", ""], function (props) {
  return props.theme.colors.text.primary;
}, function (props) {
  return props.theme.colors.bg.secondary;
}, function (props) {
  return "".concat(props.borderThickness, "px solid ").concat(props.theme.colors.ui.input.borderColor);
}, function (props) {
  return props.theme.containers.rounderBorderRadius;
}, function (props) {
  return props.theme.elevations[props.elevation || 'one'];
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.selectable && styled.css(["transition:", ";cursor:pointer;&:hover{transition:", ";border-color:", ";}"], function (props) {
    return props.theme.transition;
  }, function (props) {
    return props.theme.transition;
  }, function (props) {
    return props.theme.colors.ui.input.borderHover;
  });
})).withConfig({
  displayName: "Card",
  componentId: "sc-1i4b8ay-4"
})({}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));
Card.defaultProps = {
  padding: '5px',
  borderThickness: 1
};

var margin = 2;
var placementMaps = {
  bottom: styled.css(["margin-top:", "px;top:100%;left:50%;transform:translate(-50%,0);"], margin),
  'bottom-right': styled.css(["top:100%;left:100%;"]),
  'bottom-left': styled.css(["top:100%;right:100%;"]),
  top: styled.css(["margin-bottom:", "px;bottom:100%;left:50%;transform:translate(-50%,0);"], margin),
  'top-right': styled.css(["bottom:100%;left:100%;"]),
  'top-left': styled.css(["bottom:100%;right:100%;"]),
  left: styled.css(["margin-right:", "px;bottom:50%;right:100%;transform:translate(0,50%);"], margin),
  right: styled.css(["margin-left:", "px;bottom:50%;left:100%;transform:translate(0,50%);"], margin)
}; // Tooltip

var TooltipStyle = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Tooltip__TooltipStyle",
  componentId: "sc-s73i3m-1"
})(["position:absolute;display:inline-flex;flex-direction:column;width:max-content;height:max-content;color:", ";box-shadow:", ";", ";"], function (props) {
  return props.theme.colors.text.primary;
}, function (props) {
  return props.theme.elevations.one;
}, function (props) {
  return placementMaps[props.placement];
})).withConfig({
  displayName: "Tooltip__TooltipStyle",
  componentId: "sc-s73i3m-0"
})(styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.typography)); // Parent wrapper

var TooltipWrapper = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Tooltip__TooltipWrapper",
  componentId: "sc-s73i3m-3"
})(["position:relative;z-index:4;& > ", "{transition:0.2s all;visibility:hidden;}&:hover{& > ", "{transition-delay:", "s;visibility:visible;}}"], TooltipStyle, TooltipStyle, function (props) {
  return props.delay;
})).withConfig({
  displayName: "Tooltip__TooltipWrapper",
  componentId: "sc-s73i3m-2"
})(styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.typography));
var Tooltip = function Tooltip(props) {
  var style = props.style,
      content = props.content,
      delay = props.delay,
      placement = props.placement,
      children = props.children;
  var body = content;

  if (typeof content === 'string') {
    body = /*#__PURE__*/React__namespace.createElement(Card, {
      style: {
        fontSize: 12
      },
      padding: '4px'
    }, content);
  }

  return /*#__PURE__*/React__namespace.createElement(TooltipWrapper, {
    style: style,
    delay: delay
  }, /*#__PURE__*/React__namespace.createElement(TooltipStyle, {
    placement: placement
  }, body), children);
};
Tooltip.defaultProps = {
  placement: 'bottom-right',
  delay: 0.5
};

var TextButton = styled__default["default"](styled__default["default"].button.withConfig({
  displayName: "TextButton",
  componentId: "sc-1ftspoh-1"
})(["font-family:", ";font-style:normal;font-weight:500;display:inline-flex;flex-direction:column;justify-content:center;height:26px;border-radius:3px;text-decoration:none;cursor:pointer;padding:0px 7px;border:none;background-color:transparent;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;", ";"], function (props) {
  return props.theme.fonts.body;
}, function (props) {
  return styled.css(["font-size:", ";color:", ";transition:.1s;:hover{transition:.1s background-color:", ";}:active{background-color:", ";}:disabled{pointer-events:none;opacity:.5;}"], props.fontSize ? "".concat(props.fontSize, "px") : '14px', props.highlightColor || props.theme.colors.brand.primary, props.highlightColor ? "".concat(props.highlightColor, "25") : "".concat(props.theme.colors.brand.primary, "25"), props.highlightColor ? "".concat(props.highlightColor, "30") : "".concat(props.theme.colors.brand.primary, "30"));
})).withConfig({
  displayName: "TextButton",
  componentId: "sc-1ftspoh-0"
})({}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));
TextButton.displayName = 'TextButton';

var IconButton = styled__default["default"](styled__default["default"].button.withConfig({
  displayName: "IconButton",
  componentId: "sc-11mwmtv-1"
})(["border:none;background-color:transparent;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;position:relative;pointer-events:auto;height:", ";width:", ";svg{fill:", ";pointer-events:none;height:", ";width:", ";}border-radius:", "px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;&:active{svg{fill:", ";}}", " ", " &:disabled{color:", ";background-color:transparent;border-color:transparent;cursor:default;svg{fill:", ";}&:hover{cursor:default;color:", ";background-color:transparent;border-color:transparent;}}"], function (props) {
  return "".concat(props.size, "px");
}, function (props) {
  return "".concat(props.size, "px");
}, function (props) {
  return props.color || polished.rgba(props.theme.colors.icon.app, 0.5);
}, function (props) {
  return "".concat(props.size - props.theme.space[1], "px");
}, function (props) {
  return "".concat(props.size - props.theme.space[1], "px");
}, function (props) {
  return props.theme.containers.innerBorderRadius;
}, function (props) {
  return props.theme.colors.brand.primary;
}, function (props) {
  return props.hoverReveal ? styled.css(["opacity:0;transition:0.2s ease;padding:3px;background:transparent;&:hover{opacity:1;background:", ";}"], function (props) {
    return props.theme.colors.highlights.bgHighlight;
  }) : styled.css(["transition:0.2s ease;&:hover{background:", ";svg{fill:", ";}}"], function (props) {
    return props.theme.colors.highlights.bgHighlight;
  }, function (props) {
    return props.color || polished.rgba(props.theme.colors.icon.app, 0.7);
  });
}, selectableFocus, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
}, function (props) {
  return props.theme.colors.ui.disabled;
})).withConfig({
  displayName: "IconButton",
  componentId: "sc-11mwmtv-0"
})({
  cursor: 'pointer'
}, styledSystem.compose(styledSystem.space, styledSystem.size, styledSystem.color, styledSystem.layout, styledSystem.typography));
IconButton.defaultProps = {
  size: 24
};

var _excluded = ["leftIcon", "rightIcon", "disabled", "isLoading", "children", "mb", "mt", "mx", "my", "ml", "mr"];
var defaultButtonStyles = {
  position: 'relative',
  fontFamily: 'body',
  fontSize: 2,
  fontWeight: 'regular',
  lineHeight: 'solid',
  borderRadius: 4,
  borderWidth: 1,
  borderStyle: 'solid',
  px: 2,
  ml: 0,
  mr: 0,
  mb: 0,
  height: 30,
  appearance: 'none',
  cursor: 'pointer'
};
var buttonVariants = styledSystem.variant({
  variants: {
    primary: _objectSpread2(_objectSpread2({}, defaultButtonStyles), {}, {
      bg: 'brand.primary',
      color: 'text.white',
      borderColor: 'transparent',
      ' svg': {
        color: 'text.white'
      },
      transition: '0.2s ease',
      '&:hover': {
        transition: '0.2s ease',
        backgroundColor: 'highlights.primaryHighlight'
      },
      '&:active, &:focus': {
        transition: '0.2s ease',
        backgroundColor: 'highlights.primaryExtraHighlight',
        borderColor: 'transparent'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'ui.disabled',
        borderColor: 'ui.disabled'
      }
    }),
    secondary: _objectSpread2(_objectSpread2({}, defaultButtonStyles), {}, {
      bg: 'bg.primary',
      color: 'ui.primary',
      borderColor: 'transparent',
      ' svg': {
        color: 'ui.secondary'
      },
      transition: '0.2s ease',
      '&:hover': {
        transition: '0.2s ease',
        borderColor: 'ui.input.borderColor'
      },
      '&:active, &:focus': {
        transition: '0.2s ease',
        borderColor: 'ui.input.borderHover'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'bg.primary',
        borderColor: 'ui.disabled'
      }
    }),
    minimal: _objectSpread2(_objectSpread2({}, defaultButtonStyles), {}, {
      bg: 'brand.muted',
      color: 'brand.primary',
      fontWeight: 600,
      borderColor: 'transparent',
      ' svg': {
        color: 'brand.primary'
      },
      transition: '0.2s ease',
      '&:hover': {
        transition: '0.2s ease',
        borderColor: 'transparent'
      },
      '&:active, &:focus': {
        transition: '0.2s ease',
        borderColor: 'highlights.primaryExtraHighlight'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'bg.primary',
        borderColor: 'ui.disabled'
      }
    }),
    transparent: _objectSpread2(_objectSpread2({}, defaultButtonStyles), {}, {
      bg: 'transparent',
      color: 'brand.primary',
      borderColor: 'transparent',
      transition: '0.2s ease',
      ' svg': {
        color: 'brand.primary'
      },
      '&:hover': {
        transition: '0.2s ease',
        backgroundColor: 'highlights.bgSoftHighlight'
      },
      '&:focus': {
        borderColor: 'transparent !important',
        outline: 'none'
      },
      '&:active, &:focus': {
        backgroundColor: 'highlights.bgSoftHighlight',
        borderColor: 'transparent'
      },
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'ui.disabled',
        borderColor: 'ui.disabled'
      }
    }),
    custom: _objectSpread2(_objectSpread2({}, defaultButtonStyles), {}, {
      borderColor: 'transparent',
      '&:disabled': {
        color: 'text.disabled',
        backgroundColor: 'ui.disabled',
        borderColor: 'ui.disabled'
      }
    })
  }
}); // const ButtonIcon = styled(Box)<BoxProps & { disabled?: boolean }>`
//   display: inline-block;
//   width: ${(props) => props.theme.fontSizes[4]};
//   height: ${(props) => props.theme.fontSizes[4]};
//   svg {
//     position: absolute;
//     display: block;
//     font-size: ${(props) => props.theme.fontSizes[4]};
//   }
// `;

var StyledButton = styled__default["default"].div.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-1310y9z-0"
})(["&:focus{}", " ", ""], buttonVariants, styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.color, styledSystem.background, styledSystem.flexbox, styledSystem.border, styledSystem.position));
// TODO add sizes
var Button = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var leftIcon = _ref.leftIcon,
      rightIcon = _ref.rightIcon,
      disabled = _ref.disabled,
      isLoading = _ref.isLoading,
      children = _ref.children,
      mb = _ref.mb,
      mt = _ref.mt,
      mx = _ref.mx,
      my = _ref.my,
      ml = _ref.ml,
      mr = _ref.mr,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__namespace["default"].createElement(StyledButton, _extends({
    as: "button",
    ref: ref,
    disabled: disabled,
    isLoading: isLoading
  }, props, {
    mx: mx,
    my: my,
    mb: mb,
    mt: mt,
    ml: ml,
    mr: mr
  }), isLoading && /*#__PURE__*/React__namespace["default"].createElement(Spinner, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    size: 0,
    color: "brand.primary"
  }), /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    opacity: isLoading ? 0 : 1
  }, leftIcon && /*#__PURE__*/React__namespace["default"].createElement(IconButton, {
    disabled: disabled,
    mr: 2
  }, leftIcon), children, rightIcon && /*#__PURE__*/React__namespace["default"].createElement(IconButton, {
    disabled: disabled,
    ml: 2
  }, rightIcon)));
});
Button.defaultProps = {
  variant: 'primary'
};

var SearchWrapper = styled__default["default"].div.withConfig({
  displayName: "Searchstyles__SearchWrapper",
  componentId: "sc-1uks3zh-0"
})(["position:relative;z-index:2;flex:3;-webkit-app-region:no-drag;"]);

var ResultList = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "ResultList",
  componentId: "sc-accgj8-1"
})(["display:inline-flex;flex-direction:column;"])).withConfig({
  displayName: "ResultList",
  componentId: "sc-accgj8-0"
})(styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.typography));
var SearchResultList = /*#__PURE__*/React__namespace["default"].memo(function (_ref) {
  var results = _ref.results;
  // api call to results
  // mocked for now
  var hasResults = results.length;
  return /*#__PURE__*/React__namespace["default"].createElement(ResultList, null, !hasResults ? /*#__PURE__*/React__namespace["default"].createElement("div", {
    className: "no-suggestions"
  }, /*#__PURE__*/React__namespace["default"].createElement("span", {
    role: "img",
    "aria-label": "tear emoji"
  }, "\uD83D\uDE2A"), ' ', /*#__PURE__*/React__namespace["default"].createElement("em", null, "sorry no suggestions")) : results.map(function (result, index) {
    return /*#__PURE__*/React__namespace["default"].createElement("div", {
      key: "".concat(index)
    }, "Result: ", result.content.toString());
  }));
});

var mockResults = [{
  id: 'jYZJ0q0PB',
  content: 'Metaverse',
  type: 'entry',
  app: 'lore',
  link: 'plymouth://terminus-dao/lore/topic/metaverse'
}, {
  id: 'Eq8glXWgK',
  content: 'Metaverse',
  type: 'entry',
  app: 'lexicon',
  link: 'plymouth://terminus-dao/lexicon/metaverse'
}, {
  id: 'A6NO6lDrO',
  content: 'New platform, who dis? Am I in the metaverse?',
  type: 'text',
  room: 'FANG',
  app: 'campfire',
  link: 'plymouth://terminus-dao/campfire/FANG/A6NO6lDrO',
  identity: '',
  timestamp: 1627908749516
}, {
  id: 'A6NO6lDrO',
  content: '@0xamogh market cap, just base a guess off shiba and doge which have literally 0 utility, and then compare those 2 to a tokenomic which will change the game in the metaverse.',
  type: 'text',
  room: 'crypto-zone',
  app: 'campfire',
  link: 'plymouth://terminus-dao/campfire/crypto-zone/oZVBYmYnN',
  timestamp: 1627908749516
}, {
  id: 'Eq8ggK7EN',
  content: {
    headline: 'Zuck wages war on crypto',
    preview: 'Facebook has renamed itself to “Meta” in a bid to steal the metaverse from the open and decentralized Web 3 movement...',
    link: 'https://www.theverge.com/2021/11/16/22785397/meta-facebook-leak-lockdown',
    source: 'theverge.com'
  },
  type: 'struct',
  room: 'crypto-zone',
  app: 'campfire',
  link: 'plymouth://terminus-dao/campfire/FANG/Eq8ggK7EN',
  timestamp: 1627908749516
}];
var Search = function Search() {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      showSuggestions = _useState2[0],
      setShowSuggestions = _useState2[1];

  var _useState3 = React.useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      searchQuery = _useState4[0],
      setInputSearchQuery = _useState4[1];

  var _useState5 = React.useState(mockResults),
      _useState6 = _slicedToArray(_useState5, 2),
      filteredSuggestions = _useState6[0],
      setFilteredSuggestions = _useState6[1];

  var _useState7 = React.useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      activeSuggestionIndex = _useState8[0],
      setActiveSuggestionIndex = _useState8[1];

  var onChange = function onChange(e) {
    var userInput = e.target.value; // Filter our suggestions that don't contain the user's searchQuery

    var unLinked = mockResults.filter(function (suggestion) {
      return suggestion.content.toString().toLowerCase().indexOf(userInput.toLowerCase()) > -1;
    });
    setInputSearchQuery(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  }; // const onClick = (e) => {
  //   setFilteredSuggestions([]);
  //   setInputSearchQuery(e.target.innerText);
  //   setActiveSuggestionIndex(0);
  //   setShowSuggestions(false);
  // };


  var onKeyDown = function onKeyDown(e) {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setInputSearchQuery(e.target.value);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    } // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    } // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  return /*#__PURE__*/React__namespace["default"].createElement(SearchWrapper, null, /*#__PURE__*/React__namespace["default"].createElement(Input, {
    name: "topbar-search",
    spellCheck: false,
    borderRadius: 30,
    autoComplete: "off",
    pt: "6px",
    pb: "6px",
    onChange: onChange,
    onKeyDown: onKeyDown,
    value: searchQuery,
    placeholder: "Search...",
    leftIcon: /*#__PURE__*/React__namespace["default"].createElement(Icons.Search, {
      "aria-hidden": true
    })
  }), searchQuery && /*#__PURE__*/React__namespace["default"].createElement(Menu, {
    style: {
      top: '100%',
      padding: '8px 12px',
      width: 'calc(100% - 20px)',
      margin: '0 10px',
      marginTop: 4
    },
    isOpen: true,
    onClose: function onClose() {
      setInputSearchQuery('');
    }
  }, !showSuggestions && /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/React__namespace["default"].createElement(Spinner, {
    size: 2
  })), showSuggestions && /*#__PURE__*/React__namespace["default"].createElement(SearchResultList, {
    results: filteredSuggestions
  })));
};

// TODO make this efficient and dont use a lib
var VirtualizedList = function VirtualizedList(props) {
  var id = props.id,
      style = props.style,
      numItems = props.numItems,
      itemHeight = props.itemHeight,
      renderItem = props.renderItem;
  var items = [];

  for (var i = 0; i < numItems; i++) {
    items.push(renderItem({
      index: i,
      key: "".concat(id, "-index-").concat(i),
      style: {
        position: 'absolute',
        top: "".concat(i * itemHeight, "px"),
        width: '100%'
      }
    }));
  }

  return /*#__PURE__*/React__namespace["default"].createElement("div", {
    className: "scroll",
    style: _objectSpread2({}, style)
  }, /*#__PURE__*/React__namespace["default"].createElement("div", {
    className: "inner",
    style: {
      position: 'relative',
      height: 'inherit'
    }
  }, items));
}; // import { FixedSizeList as List } from 'react-window';
// import AutoSizer from 'react-virtualized-auto-sizer';
//  <div style={{ height: 'inherit', width: '100%', ...style, overflow: 'auto' }}>
//    <AutoSizer>
//      {({ height, width }) => (
//        <List
//          height={height}
//          itemCount={numItems}
//          itemSize={itemHeight}
//          width={width}
//        >
//          {({ index, style }) =>
//            renderItem({
//              index: index,
//              key: `index-${index}`,
//              style,
//            })
//          }
//        </List>
//      )}
//    </AutoSizer>
//  </div>;

var GenericRow = styled__default["default"].div.withConfig({
  displayName: "GenericRow",
  componentId: "sc-1q7jgjj-0"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;background:inherit;font-size:", ";padding:8px;border-radius:8px;height:40px;transition:", ";-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;&:hover,&:active,&:focus{transition:", ";background:", ";}"], function (props) {
  return props.theme.fontSizes[2];
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.colors.highlights.bgHighlight;
});

// type HeaderButtonProps = { onClick: any; theme: any };
var ListHeaderStyle = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "ListHeaderstyles__ListHeaderStyle",
  componentId: "sc-zb5h44-1"
})(["display:flex;flex-direction:column;justify-content:center;width:100%;"])).withConfig({
  displayName: "ListHeaderstyles__ListHeaderStyle",
  componentId: "sc-zb5h44-0"
})({});
var HeaderButton = styled__default["default"](function (props) {
  return /*#__PURE__*/React__namespace["default"].createElement(Button, props);
}).withConfig({
  displayName: "ListHeaderstyles__HeaderButton",
  componentId: "sc-zb5h44-2"
})(["padding:4px 8px;", ";background-color:", ";div{padding:0;}:hover,:active,:focus{border-color:", ";}"], function (props) {
  return styled.css(["color:", ";background:", ";font-family:", ";font-weight:500;font-size:", ";border-radius:", "px;"], props.theme.colors.brand.secondary, props.theme.colors.bg.secondary, props.theme.fontByName['Inter'], props.theme.fontSizes[2], props.theme.containers.innerBorderRadius);
}, function (props) {
  return polished.rgba(props.theme.colors.brand.secondary, 0.1);
}, function (props) {
  return props.theme.colors.brand.secondary;
});
var OptionButton = styled__default["default"](styled__default["default"].button.withConfig({
  displayName: "ListHeaderstyles__OptionButton",
  componentId: "sc-zb5h44-4"
})(["padding:4px 8px;border:1px solid ", ";color:", ";background:", ";box-sizing:border-box;border-radius:50px;cursor:pointer;outline:none;min-width:54px;font-family:", ";font-weight:600;font-size:0.75em;letter-spacing:0.03em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;:active,:focus{border:1px solid ", ";color:", ";}", " ", ""], function (props) {
  return props.theme.colors.ui.input.borderColor;
}, function (props) {
  return polished.rgba(props.theme.colors.text.primary, 0.8);
}, function (props) {
  return props.theme.colors.bg.secondary;
}, function (props) {
  return props.theme.fontByName['Inter'];
}, function (props) {
  return polished.rgba(props.theme.colors.text.primary, 0.5);
}, function (props) {
  return props.theme.colors.text.primary;
}, function (p) {
  return p.selected ? styled.css(["border:1px solid ", ";"], function (props) {
    return polished.rgba(props.theme.colors.text.primary, 0.5);
  }) : styled.css([":hover{border:1px solid ", ";color:", ";}"], function (props) {
    return props.theme.colors.ui.input.borderHover;
  }, function (props) {
    return props.theme.colors.text.primary;
  });
}, function (p) {
  return p.disabled && styled.css(["color:", ";border:1px solid ", ";font-weight:600;pointer-events:none;"], function (props) {
    return polished.rgba(props.theme.colors.text.primary, 0.3);
  }, function (props) {
    return polished.rgba(props.theme.colors.text.primary, 0.06);
  });
})).withConfig({
  displayName: "ListHeaderstyles__OptionButton",
  componentId: "sc-zb5h44-3"
})(styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position));
var Styled = {
  HeaderButton: HeaderButton,
  ListHeaderStyle: ListHeaderStyle,
  OptionButton: OptionButton
};

var Header = function Header(props) {
  var title = props.title,
      subtitle = props.subtitle,
      rightContent = props.rightContent,
      children = props.children,
      onBack = props.onBack;
  var isCustomTitle = /*#__PURE__*/React.isValidElement(title);
  return /*#__PURE__*/React__namespace["default"].createElement(Styled.ListHeaderStyle, null, /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    width: "100%",
    flexDirection: "row",
    mb: !isCustomTitle ? '8px' : '12px',
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    style: {
      flex: 1
    },
    flexDirection: "row",
    alignItems: "center"
  }, /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    style: {
      flex: 1
    },
    flexDirection: "column"
  }, subtitle && /*#__PURE__*/React__namespace["default"].createElement(Text, {
    mb: isCustomTitle ? '1px' : '4px',
    style: {
      opacity: 0.7,
      cursor: onBack ? 'pointer' : 'default'
    },
    variant: subtitle.patp ? 'patp' : 'h6',
    fontSize: 2,
    fontWeight: 500,
    onClick: onBack
  }, subtitle.text), isCustomTitle ? title : /*#__PURE__*/React__namespace["default"].createElement(Text, {
    variant: "h4",
    fontWeight: 600
  }, title))), rightContent), children);
};

var ListHeader = function ListHeader(props) {
  var title = props.title,
      subtitle = props.subtitle,
      rightContent = props.rightContent,
      options = props.options,
      selectedOption = props.selectedOption,
      rightOptions = props.rightOptions,
      onBack = props.onBack,
      onSelected = props.onSelected;
  return /*#__PURE__*/React__namespace["default"].createElement(Header, {
    title: title,
    subtitle: subtitle,
    rightContent: rightContent,
    onBack: onBack
  }, /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    gap: 8,
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8
  }, options === null || options === void 0 ? void 0 : options.map(function (option) {
    return /*#__PURE__*/React__namespace["default"].createElement(Styled.OptionButton, {
      key: option.value,
      onClick: function onClick() {
        return onSelected(option);
      },
      selected: option.value === selectedOption,
      disabled: option.disabled
    }, option.label);
  })), /*#__PURE__*/React__namespace["default"].createElement(Box, {
    justifySelf: "flex-end"
  }, rightOptions)));
};

var useContextMenu = function useContextMenu(containerId, ref, menuRef) {
  var _useState = React.useState({
    x: 0,
    y: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      anchorPoint = _useState2[0],
      setAnchorPoint = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  var handleContextMenu = React.useCallback(function (event) {
    // If the id of the context menu matches the parent of the click, show the context menu
    if (event.target.id === containerId) {
      event.preventDefault();
      setAnchorPoint(calculateAnchorPoint(event, 'pointer', 2));
      setShow(true);
    } else {
      setShow(false);
    }
  }, [setShow, setAnchorPoint]); // Closes the menu on menuItem click

  var handleClick = React.useCallback(function (evt) {
    if (show) {
      var preventMenuClose = evt.target.getAttribute('data-prevent-context-close');
      !preventMenuClose && setShow(false);
    }
  }, [show]);

  var handleClickOutside = function handleClickOutside(event) {
    var domNode = ReactDOM__default["default"].findDOMNode(menuRef.current);

    if (!domNode || !domNode.contains(event.target)) {
      // Check if you arent clicking outside on the button that opens this:
      // clickableRef && event.target.id === clickableRef.current.id;
      if (show) {
        event.preventDefault();
        setShow(false);
      }
    }
  };

  React.useEffect(function () {
    ref.current.addEventListener('click', handleClick);
    ref.current.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('click', handleClickOutside, true);
    document.addEventListener('contextmenu', handleClickOutside, true);
    return function () {
      ref.current && ref.current.removeEventListener('click', handleClick);
      ref.current && ref.current.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('click', handleClickOutside, true);
      document.removeEventListener('contextmenu', handleClickOutside, true);
    };
  });
  return {
    anchorPoint: anchorPoint,
    show: show,
    setShow: setShow
  };
};

var ContextMenuStyles = styled__default["default"](styled__default["default"].ul.withConfig({
  displayName: "ContextMenustyles__ContextMenuStyles",
  componentId: "sc-36u0w1-1"
})(["font-size:14px;padding:5px 0 5px 0;width:150px;height:auto;z-index:5000 !important;margin:0;position:absolute;list-style:none;pointer-events:none;overflow:visible !important;cursor:pointer;color:", ";transition:", ";background-color:", ";border:1px solid ", ";box-sizing:border-box;box-shadow:0px 0px 4px rgba(0,0,0,0.06);backdrop-filter:blur(70px);border-radius:", "px;hr{height:1px;background-color:", ";border:none;width:80%;border-radius:50%;margin-block-end:0.35em;margin-block-start:0.35em;}"], function (props) {
  return props.theme.colors.text.primary;
}, function (props) {
  return props.theme.transitionFast;
}, function (props) {
  return props.theme.colors.bg.secondary;
}, function (props) {
  return props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.containers.outerBorderRadius;
}, function (props) {
  return props.theme.colors.bg.divider;
})).withConfig({
  displayName: "ContextMenustyles__ContextMenuStyles",
  componentId: "sc-36u0w1-0"
})({}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

// TODO make variants
var MenuItemStyle = styled__default["default"](styled__default["default"].li.withConfig({
  displayName: "MenuItemstyles__MenuItemStyle",
  componentId: "sc-1gh6cnj-1"
})(["font-style:normal;font-weight:600;display:flex;align-items:flex-start;background:inherit;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-size:", ";padding:8px 12px;margin:0px 4px;border-radius:", "px;color:", ";transition:", ";svg{fill:", ";}cursor:pointer;pointer-events:auto;", " ", "}", ";", " ", ";"], function (props) {
  return props.theme.fontSizes[2];
}, function (props) {
  return props.theme.containers.outerBorderRadius;
}, function (props) {
  return props.intent ? props.intent === 'primary' && props.theme.colors.brand.primary || props.theme.colors.ui.intent[props.intent] : props.theme.colors.text.secondary;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.intent ? 'currentcolor' : 'inherit';
}, function (props) {
  return !props.disabled && styled.css(["&:hover{transition:", ";background:", ";color:", ";}"], props.theme.transition, props.highlightType === 'brand' && props.theme.colors.brand.primary, props.intent ? props.intent === 'primary' && props.theme.colors.brand.primary || props.theme.colors.ui.intent[props.intent] : props.theme.colors.text.secondary);
}, function (props) {
  return props.highlightType === 'neutral' && !props.disabled && styled.css(["&:not(disabled):hover{transition:", ";background:", ";color:", ";}"], props.theme.transition, props.theme.colors.highlights.bgHighlight, props.theme.colors.text.secondary);
}, function (props) {
  return props.selected && styled.css(["-webkit-text-fill-color:currentColor;color:", ";cursor:default;background:transparent;"], function (props) {
    return props.theme.colors.brand.primary;
  });
}, selectableFocus, function (props) {
  return props.disabled && styled.css(["-webkit-text-fill-color:currentColor;color:", ";border-color:", ";opacity:0.7;cursor:default;&:focus{outline:none;border-color:transparent;}background:transparent;"], function (props) {
    return props.theme.colors.text.disabled;
  }, function (props) {
    return props.theme.colors.ui.disabled;
  });
})).withConfig({
  displayName: "MenuItemstyles__MenuItemStyle",
  componentId: "sc-1gh6cnj-0"
})(styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position));
var ChildrenBox = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "MenuItemstyles__ChildrenBox",
  componentId: "sc-1gh6cnj-3"
})(["width:100%;user-select:", ";pointer-events:", ";"], function (props) {
  return props.interaction ? 'auto' : 'none';
}, function (props) {
  return props.interaction ? 'auto' : 'none';
})).withConfig({
  displayName: "MenuItemstyles__ChildrenBox",
  componentId: "sc-1gh6cnj-2"
})(styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position));
//   -webkit-text-fill-color: currentColor; /* set text fill to current color for safari */
//   opacity: 0.3; /* correct opacity on iOS */
//   color: ${(props) => props.theme.colors.text.disabled};
//   /* background-color: ${(props) => props.theme.colors.ui.disabled}; */
//   border-color: ${(props) => props.theme.colors.ui.disabled};
//   cursor: default;
//   pointer-events: auto;
// }

var MenuItem = function MenuItem(props) {
  var icon = props.icon,
      label = props.label,
      style = props.style,
      intent = props.intent,
      disabled = props.disabled,
      _onClick = props.onClick,
      selected = props.selected,
      type = props.type,
      children = props.children,
      tabIndex = props.tabIndex;
  return /*#__PURE__*/React__namespace.createElement(MenuItemStyle, {
    tabIndex: tabIndex,
    style: style,
    flex: 1,
    highlightType: type,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    intent: intent,
    "data-prevent-context-close": disabled,
    disabled: disabled,
    selected: selected,
    onKeyPress: function onKeyPress(evt) {
      var key = evt.keyCode || evt.which;

      if (key === 13) {
        evt.preventDefault(); // Ensure it is only this code that runs

        _onClick(evt);
      }
    },
    onClick: function onClick(evt) {
      if (!disabled) {
        _onClick(evt);
      } else {
        evt.preventDefault();
        evt.stopPropagation();
      }
    },
    value: label
  }, icon && /*#__PURE__*/React__namespace.createElement(Box, {
    color: "inherit",
    mr: 2
  }, icon), label, children && /*#__PURE__*/React__namespace.createElement(ChildrenBox, {
    interaction: disabled
  }, children));
};
MenuItem.defaultProps = {
  type: 'neutral'
};

var ContextMenu = function ContextMenu(props) {
  var containerId = props.containerId,
      parentRef = props.parentRef,
      menu = props.menu,
      menuItemtype = props.menuItemtype;
  var contextMenuRef = React__namespace["default"].useRef();

  var _useContextMenu = useContextMenu(containerId, parentRef, contextMenuRef),
      anchorPoint = _useContextMenu.anchorPoint,
      show = _useContextMenu.show;

  var sectionsArray = menu.reduce(function (arr, obj, index) {
    if (!index || arr[arr.length - 1][0].section !== obj.section) {
      return arr.concat([[/*#__PURE__*/React__namespace["default"].createElement(MenuItem, _extends({
        type: menuItemtype,
        key: index
      }, obj))]]);
    }

    arr[arr.length - 1].push( /*#__PURE__*/React__namespace["default"].createElement(MenuItem, _extends({
      type: menuItemtype,
      key: index
    }, obj)));
    return arr;
  }, []); // if (show) {

  return /*#__PURE__*/React__namespace["default"].createElement(ContextMenuStyles, {
    id: "".concat(containerId, "-context-menu"),
    className: "menu" // @ts-ignore
    ,
    ref: contextMenuRef,
    style: {
      top: anchorPoint.y,
      left: anchorPoint.x,
      display: show ? 'block' : 'none'
    }
  }, sectionsArray.map(function (menuSection, index) {
    var divider = /*#__PURE__*/React__namespace["default"].createElement("hr", null);

    if (index === sectionsArray.length - 1) {
      // @ts-ignore
      divider = undefined;
    }

    return /*#__PURE__*/React__namespace["default"].createElement("section", {
      key: "section-".concat(index)
    }, menuSection, divider);
  })); // }
  // return <></>;
};
ContextMenu.defaultProps = {
  menuItemtype: 'neutral'
};
// <Spring
//   config={{ duration: 10 }}
//   from={{ opacity: 0, x: anchorPoint.x + 10, y: anchorPoint.y + 10 }}
//   to={{ opacity: 1, x: anchorPoint.x, y: anchorPoint.y }}
// >
//   {(springProps: any) => (
//     <ContextMenuStyles
//       id={`${containerId}-context-menu`}
//       className="menu"
//       ref={contextMenuRef}
//       style={{ top: springProps.y, left: springProps.x }}
//     >
//       {sectionsArray.map((menuSection: any[], index: number) => {
//         let divider = <hr />;
//         if (index === sectionsArray.length - 1) {
//           divider = undefined;
//         }
//         return (
//           <div key={`section-${index}`}>
//             {menuSection}
//             {divider}
//           </div>
//         );
//       })}
//     </ContextMenuStyles>
//   )}
// </Spring>;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var MenuWrapper = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Menustyles__MenuWrapper",
  componentId: "sc-1p4mkxx-1"
})(["z-index:3;position:absolute;display:flex;margin-top:1px;flex-direction:column;background:", ";border:1px solid ", ";transition:", ";min-width:125px;padding:5px 0 5px 0;box-shadow:", ";box-sizing:border-box;border-radius:", "px;color:", ";&:hover{transition:", ";}"], function (props) {
  return props.theme.colors.bg.secondary;
}, function (props) {
  return props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.theme.elevations.one;
}, function (props) {
  return props.theme.containers.outerBorderRadius;
}, function (props) {
  return props.theme.colors.text.primary;
}, function (props) {
  return props.theme.transition;
})).withConfig({
  displayName: "Menustyles__MenuWrapper",
  componentId: "sc-1p4mkxx-0"
})(styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.typography));

//
// Docs:
//    button attribute to prevent close menu: data-prevent-menu-close
//
var Menu = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Menu, _React$PureComponent);

  var _super = _createSuper(Menu);

  function Menu(props) {
    var _this;

    _classCallCheck(this, Menu);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "menuRef", void 0);

    _defineProperty(_assertThisInitialized(_this), "handleClickOutside", function (event) {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          onClose = _this$props.onClose,
          preventDefault = _this$props.preventDefault;
      var domNode = ReactDOM__default["default"].findDOMNode(_this.menuRef.current);

      if (!domNode || !domNode.contains(event.target)) {
        // You are clicking outside
        if (isOpen) {
          preventDefault && event.preventDefault();
          onClose();
        }
      } else {
        // You are clicking inside
        var clickedNode = ReactDOM__default["default"].findDOMNode(event.target);
        var preventMenuClose = event.target.getAttribute('data-prevent-menu-close');

        if (clickedNode.nodeName === 'LI' || clickedNode.nodeName === 'BUTTON') {
          !preventMenuClose && onClose();
        }
      }
    });

    _this.handleClickOutside = _this.handleClickOutside.bind(_assertThisInitialized(_this));
    _this.menuRef = /*#__PURE__*/React__namespace["default"].createRef();
    return _this;
  }

  _createClass(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          style = _this$props2.style,
          isOpen = _this$props2.isOpen,
          id = _this$props2.id;
      return /*#__PURE__*/React__namespace["default"].createElement(MenuWrapper, {
        id: id,
        ref: function ref(node) {
          return _this2.menuRef.current = node;
        },
        style: _objectSpread2({
          display: isOpen ? 'flex' : 'none'
        }, style),
        role: "list"
      }, children);
    }
  }]);

  return Menu;
}(React__namespace["default"].PureComponent);

_defineProperty(Menu, "defaultProps", {
  isOpen: false,
  id: Math.random(),
  preventDefault: true
});

var calculateAnchorPoint = function calculateAnchorPoint(event, orientation) {
  var padding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
  var menuWidth = arguments.length > 3 ? arguments[3] : undefined;
  var x; // TODO cleanup
  // console.log(event, orientation);
  // console.log('offset left', event.srcElement.offsetLeft);
  // console.log('client Width', event.srcElement.clientWidth);

  switch (orientation) {
    case 'right':
      return {
        x: event.srcElement.offsetLeft + event.srcElement.clientWidth + padding,
        y: event.srcElement.offsetTop
      };

    case 'left':
      x = event.srcElement.offsetLeft - event.srcElement.clientWidth + padding;

      if (menuWidth) {
        x = x - menuWidth;
      }

      return {
        x: x,
        y: event.srcElement.offsetTop
      };

    case 'bottom-left':
      // [ offset left
      x = event.srcElement.offsetLeft + event.srcElement.clientWidth - padding;

      if (menuWidth) {
        x = x - menuWidth;
      }

      return {
        x: x,
        y: event.srcElement.offsetTop + event.srcElement.clientHeight - padding
      };

    case 'bottom-right':
      x = event.srcElement.offsetLeft - event.srcElement.clientWidth;

      if (menuWidth) {
        x = x - menuWidth;
      }

      return {
        x: x,
        y: event.srcElement.offsetTop + event.srcElement.clientHeight + padding
      };

    case 'top':
      return {
        x: event.srcElement.offsetLeft,
        y: event.srcElement.offsetTop - event.srcElement.clientHeight + padding
      };

    case 'top-left':
      x = event.srcElement.offsetLeft + event.srcElement.clientWidth;

      if (menuWidth) {
        x = x - menuWidth;
      }

      return {
        x: x,
        y: event.srcElement.offsetTop - event.srcElement.clientHeight + padding
      };

    case 'bottom':
      return {
        x: event.srcElement.offsetLeft,
        y: event.srcElement.offsetTop + event.srcElement.clientHeight + padding
      };

    default:
      // pointer or default
      return {
        x: event.layerX + padding,
        y: event.layerY + padding
      };
  }
};
var useMenu = function useMenu(ref, config) {
  var _useState = React.useState({
    x: 0,
    y: 0
  }),
      _useState2 = _slicedToArray(_useState, 2),
      anchorPoint = _useState2[0],
      setAnchorPoint = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      show = _useState4[0],
      setShow = _useState4[1];

  var handleMenu = React.useCallback(function (event) {
    // If the id of the menu matches the parent of the click, show the menu
    if (event.target.id === ref.current.id && !show) {
      event.preventDefault();
      event.currentTarget.blur(); // this is to lose focus after clicking.

      setAnchorPoint(calculateAnchorPoint(event, config.orientation, config.padding, config.menuWidth || 250));
      setShow(true);
    } else {
      event.preventDefault(); // setShow(false);
    }
  }, [setShow, setAnchorPoint]);
  React.useEffect(function () {
    ref.current.addEventListener('click', handleMenu);
    return function () {
      ref.current && ref.current.removeEventListener('click', handleMenu);
    };
  });
  return {
    anchorPoint: anchorPoint,
    show: show,
    setShow: setShow
  };
};

var ViewPort = styled__default["default"].div.withConfig({
  displayName: "Pagestyles__ViewPort",
  componentId: "sc-mvxyx7-0"
})(["position:absolute;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;top:0;left:0;right:0;bottom:0;background:", ";"], function (props) {
  return props.theme.colors.bg.primary;
});
var Bottom = styled__default["default"].div.withConfig({
  displayName: "Pagestyles__Bottom",
  componentId: "sc-mvxyx7-1"
})(["position:relative;bottom:0;right:0;left:0;", " ", " ", ""], function (props) {
  return props.size ? styled.css(["height:", "px;flex-basis:", "px;flex-grow:0;flex-shrink:0;"], props.size, props.size) : styled.css(["height:initial;"]);
}, function (props) {
  return props.centerVertical && styled.css(["display:flex;flex-direction:row;align-content:center;"]);
}, function (props) {
  return props.spacing && styled.css(["padding:", "px ", "px ", "px ", "px;gap:", "px;"], props.spacing, props.spacing, props.spacing, props.spacing, props.spacing);
});
var Top = styled__default["default"].div.withConfig({
  displayName: "Pagestyles__Top",
  componentId: "sc-mvxyx7-2"
})(["position:relative;top:0;right:0;left:0;", " ", " ", ""], function (props) {
  return props.size ? styled.css(["height:", "px;flex-basis:", "px;flex-grow:0;flex-shrink:0;"], props.size, props.size) : styled.css(["height:initial;"]);
}, function (props) {
  return props.centerVertical && styled.css(["display:flex;flex-direction:row;align-content:center;"]);
}, function (props) {
  return props.spacing && styled.css(["padding:", "px ", "px ", "px ", "px;gap:", "px;"], props.spacing, props.spacing, props.spacing, props.spacing, props.spacing);
});
var Right = styled__default["default"].div.withConfig({
  displayName: "Pagestyles__Right",
  componentId: "sc-mvxyx7-3"
})(["position:relative;top:0;right:0;bottom:0;flex-basis:", "px;flex-grow:0;flex-shrink:0;width:", "px;height:inherit;"], function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
var Left = styled__default["default"].div.withConfig({
  displayName: "Pagestyles__Left",
  componentId: "sc-mvxyx7-4"
})(["position:relative;top:0;left:0;bottom:0;flex-basis:", "px;flex-grow:0;flex-shrink:0;width:", "px;height:inherit;"], function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
var Fill = styled__default["default"].div.withConfig({
  displayName: "Pagestyles__Fill",
  componentId: "sc-mvxyx7-5"
})(["position:relative;width:100%;height:100%;", ""], function (props) {
  return props.row ? styled.css(["display:flex;gap:8px;"]) : styled.css(["display:flex;flex-direction:column;"]);
});
var PageStyle = styled__default["default"](Fill).withConfig({
  displayName: "Pagestyles__PageStyle",
  componentId: "sc-mvxyx7-6"
})(["display:flex;flex-direction:row;", ""], function (props) {
  return props.margin ? styled.css(["margin:0 ", "px ", "px ", "px;width:calc(100% - (", "px * 2));gap:", "px;"], props.margin, props.margin, props.margin, props.margin, props.margin / 2) : styled.css(["height:inherit;width:100%;"]);
});
var RightPaneStyle = styled__default["default"](Right).withConfig({
  displayName: "Pagestyles__RightPaneStyle",
  componentId: "sc-mvxyx7-7"
})(["", " background:", ";border:1px solid ", ";transition:0.2s ease;border-radius:", "px;color:", ";box-sizing:border-box;"], function (props) {
  return props.margin && styled.css(["margin:", "px ", "px ", "px 0px;height:calc(100% - (", "px * 2));width:", "px;"], props.margin, props.margin, props.margin, props.margin, props.size);
}, function (props) {
  return props.noCard ? 'transparent' : props.theme.colors.bg.secondary;
}, function (props) {
  return props.noBorder ? 'transparent' : props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.containers.outerBorderRadius;
}, function (props) {
  return props.theme.colors.text.primary;
});
var SidebarStyle = styled__default["default"](Left).withConfig({
  displayName: "Pagestyles__SidebarStyle",
  componentId: "sc-mvxyx7-8"
})(["", " background:", ";border:1px solid ", ";transition:0.2s ease;border-radius:", "px;color:", ";box-sizing:border-box;"], function (props) {
  return props.margin && styled.css(["margin:", "px 0px ", "px ", "px;height:calc(100% - (", "px * 2));width:", "px;"], props.margin, props.margin, props.margin, props.margin, props.size);
}, function (props) {
  return props.noCard ? 'transparent' : props.theme.colors.bg.secondary;
}, function (props) {
  return props.noBorder ? 'transparent' : props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.containers.outerBorderRadius;
}, function (props) {
  return props.theme.colors.text.primary;
});
var PaneStyle = styled__default["default"](Fill).withConfig({
  displayName: "Pagestyles__PaneStyle",
  componentId: "sc-mvxyx7-9"
})(["", " border:1px solid ", ";transition:0.2s ease;border-radius:", "px;color:", ";box-sizing:border-box;"], function (props) {
  return props.margin && styled.css(["margin:", "px ", "px ", "px ", "px;height:calc(100% - (", "px * 2));width:calc(100% - (", "px * 2));"], props.margin, props.margin, props.margin, props.margin, props.margin, props.margin);
}, function (props) {
  return props.noBorder ? 'transparent' : props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.containers.outerBorderRadius;
}, function (props) {
  return props.theme.colors.text.primary;
});

// TODO mobile responsive logic
var Page = function Page(props) {
  var type = props.type,
      spacing = props.spacing;
  var pageInner = null;

  switch (type) {
    case 'full':
      pageInner = /*#__PURE__*/React__namespace.createElement(FullPage, props);
      break;

    case 'sidebar':
      pageInner = /*#__PURE__*/React__namespace.createElement(Sidebar, props);
      break;

    case 'centered':
      pageInner = /*#__PURE__*/React__namespace.createElement(CenteredPane, props);
      break;
  }

  return /*#__PURE__*/React__namespace.createElement(PageStyle, {
    margin: spacing
  }, pageInner, props.rightPane && /*#__PURE__*/React__namespace.createElement(RightPaneStyle, {
    size: 300
  }, props.rightPane));
};

var FullPage = function FullPage(props) {
  return /*#__PURE__*/React__namespace.createElement(PaneStyle, {
    noBorder: !props.bordered,
    noCard: props.noCard
  }, props.children);
};

var Sidebar = function Sidebar(props) {
  return /*#__PURE__*/React__namespace.createElement(Fill, {
    row: true
  }, /*#__PURE__*/React__namespace.createElement(SidebarStyle, {
    size: 300
  }, props.sidebar), /*#__PURE__*/React__namespace.createElement(PaneStyle, null, props.children));
};

var CenteredPane = function CenteredPane(props) {
  return /*#__PURE__*/React__namespace.createElement(Fill, {
    style: props.style
  }, /*#__PURE__*/React__namespace.createElement(PaneStyle, {
    noBorder: !props.bordered,
    noCard: props.noCard,
    style: {
      margin: '0 auto',
      width: props.width ? props.width : 976
    }
  }, props.children));
};

var PageTop = function PageTop(props) {
  return /*#__PURE__*/React__namespace.createElement(Top, {
    centerVertical: true,
    size: 32
  }, props.children);
};

var PageViewPort = function PageViewPort(props) {
  return /*#__PURE__*/React__namespace.createElement(ViewPort, null, props.children);
};

Page.defaultProps = {
  type: 'full',
  bordered: true,
  onSurface: false,
  spacing: 0
};
CenteredPane.defaultProps = {
  bordered: true,
  onSurface: false,
  spacing: 0
};

var PaneHeaderText = styled__default["default"].div.withConfig({
  displayName: "PaneHeaderstyles__PaneHeaderText",
  componentId: "sc-ssuufu-0"
})(["font-family:", ";font-style:normal;font-weight:bold;font-size:16px;line-height:20px;", ""], function (props) {
  return props.theme.fonts.heading;
}, function (props) {
  return props.padding && styled.css(["padding:", "px ", "px ", "px ", "px;gap:", "px;"], props.padding, props.padding, props.padding, props.padding, props.padding);
});
var PaneHeaderStyle = styled__default["default"].div.withConfig({
  displayName: "PaneHeaderstyles__PaneHeaderStyle",
  componentId: "sc-ssuufu-1"
})(["display:flex;flex-direction:row;justify-content:space-between;align-items:center;position:relative;border-bottom:1px solid ", ";", " ", ""], function (props) {
  return props.noBorder ? 'transparent' : props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.padding && styled.css(["padding-left:", "px;padding-right:", "px;gap:", "px;"], props.padding, props.padding, props.padding);
}, function (props) {
  return props.paneHeight ? styled.css(["height:", "px;"], props.paneHeight) : styled.css(["height:initial;"]);
});

var PaneHeader = function PaneHeader(props) {
  var height = props.height,
      noBorder = props.noBorder,
      children = props.children;
  return /*#__PURE__*/React__namespace.createElement(PaneHeaderStyle, {
    paneHeight: height || 48,
    padding: 12,
    noBorder: noBorder
  }, children);
};
PaneHeader.defaultProps = {
  noBorder: false
};

var KPILabel = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "KPIstyles__KPILabel",
  componentId: "sc-1litbol-1"
})(["color:", ";font-size:14px;font-weight:", ";"], function (props) {
  return props.theme.colors.text.primary;
}, function (props) {
  return props.theme.fontWeights.medium;
})).withConfig({
  displayName: "KPIstyles__KPILabel",
  componentId: "sc-1litbol-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var KPIValue = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "KPIstyles__KPIValue",
  componentId: "sc-1litbol-3"
})(["color:", ";font-size:14px;line-height:17px;letter-spacing:-0.011em;"], function (props) {
  return props.theme.colors.text.secondary;
})).withConfig({
  displayName: "KPIstyles__KPIValue",
  componentId: "sc-1litbol-2"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var KPIIcon = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "KPIstyles__KPIIcon",
  componentId: "sc-1litbol-5"
})(["display:flex;flex-direction:column;justify-content:center;margin-right:4px;svg{width:18px;height:18px;path{fill:", ";}"], function (props) {
  return props.theme.colors.text.secondary;
})).withConfig({
  displayName: "KPIstyles__KPIIcon",
  componentId: "sc-1litbol-4"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));

var KPI = function KPI(props) {
  var inline = props.inline,
      label = props.label,
      value = props.value,
      icon = props.icon;
  return /*#__PURE__*/React__namespace["default"].createElement(Flex, _extends({}, props, {
    flexDirection: inline ? 'row' : 'column',
    alignItems: inline ? 'center' : 'flex-start',
    gap: 4,
    justifyContent: "space-between"
  }), label && /*#__PURE__*/React__namespace["default"].createElement(KPILabel, {
    mb: inline ? 0 : '4px',
    mr: inline ? '4px' : 0
  }, label), /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    margin: true,
    flexDirection: "row",
    alignItems: "center"
  }, icon && /*#__PURE__*/React__namespace["default"].createElement(KPIIcon, null, icon), /*#__PURE__*/React__namespace["default"].createElement(KPIValue, null, value)));
};

var TagStyle = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Tagstyles__TagStyle",
  componentId: "sc-17mw28n-1"
})(["", " display:flex;flex-direction:row;height:fit-content;align-items:center;width:fit-content;border-radius:", ";padding:4px 8px;font-size:14px;font-weight:", ";"], function (props) {
  return props.minimal ? styled.css(["background:", ";color:", ";"], function (props) {
    return props.custom ? polished.rgba(props.custom, 0.2) : polished.rgba(props.theme.colors.ui.intent[props.intent], 0.2);
  }, function (props) {
    return props.custom ? props.custom : props.theme.colors.ui.intent[props.intent];
  }) : styled.css(["background:", ";color:", ";"], function (props) {
    return props.theme.colors.ui.intent[props.intent];
  }, function (props) {
    return props.theme.colors.text.white;
  });
}, function (props) {
  return props.rounded ? '12px' : "".concat(props.theme.containers.innerBorderRadius, "px");
}, function (props) {
  return props.theme.fontWeights.medium;
})).withConfig({
  displayName: "Tagstyles__TagStyle",
  componentId: "sc-17mw28n-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var TagIcon = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Tagstyles__TagIcon",
  componentId: "sc-17mw28n-3"
})(["display:flex;flex-direction:column;justify-content:center;margin-right:4px;svg{width:16px;height:16px;path{", "}"], function (props) {
  return props.minimal ? styled.css(["fill::", ";"], function (props) {
    return props.theme.colors.ui.intent[props.intent];
  }) : styled.css(["fill::", ";"], function (props) {
    return props.theme.colors.text.white;
  });
})).withConfig({
  displayName: "Tagstyles__TagIcon",
  componentId: "sc-17mw28n-2"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));

var Tag = function Tag(props) {
  var label = props.label,
      icon = props.icon,
      intent = props.intent,
      minimal = props.minimal,
      removable = props.removable,
      onRemove = props.onRemove,
      rounded = props.rounded,
      custom = props.custom;
  return /*#__PURE__*/React__namespace.createElement(TagStyle, {
    intent: intent,
    minimal: minimal,
    custom: custom,
    rounded: rounded
  }, icon && /*#__PURE__*/React__namespace.createElement(TagIcon, null, icon), label, removable && /*#__PURE__*/React__namespace.createElement(Flex, {
    inline: true,
    ml: 2,
    style: {
      cursor: 'pointer'
    },
    onClick: onRemove
  }, /*#__PURE__*/React__namespace.createElement(Icons.Close, null)));
};
Tag.defaultProps = {
  intent: 'info',
  minimal: false
};

var AppButtonStyle = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppButtonstyles__AppButtonStyle",
  componentId: "sc-1fkeuf3-1"
})(["display:inline-flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;cursor:pointer;-webkit-app-region:no-drag;height:", ";width:", ";border-radius:", ";svg{pointer-events:none;", " fill:", ";overflow:visible !important;}transition:background-color 0.25s ease;", ";:hover{transition:background-color 0.25s ease;background-color:", ";}:disabled{opacity:0.5;}"], function (p) {
  return p.expanded ? '65px' : '26px';
}, function (p) {
  return p.expanded ? '65px' : '26px';
}, function (p) {
  return p.expanded ? '6px' : '3px';
}, function (p) {
  return !p.expanded && styled.css(["height:calc(100% - 6px);width:calc(100% - 6px);"]);
}, function (p) {
  return p.selected ? p.theme.colors.brand.primary : p.theme.colors.icon.app;
}, function (props) {
  return props.disabled && styled.css(["opacity:0.5;pointer-events:none;"]);
}, function (props) {
  return props.theme.colors.highlights.bgHighlight;
})).withConfig({
  displayName: "AppButtonstyles__AppButtonStyle",
  componentId: "sc-1fkeuf3-0"
})({}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));
var AppText$1 = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppButtonstyles__AppText",
  componentId: "sc-1fkeuf3-3"
})(["padding-top:5px;font-style:normal;font-weight:400;font-size:14px;display:flex;align-items:center;text-align:center;color:", ";"], function (props) {
  return props.theme.colors.text.primary;
})).withConfig({
  displayName: "AppButtonstyles__AppText",
  componentId: "sc-1fkeuf3-2"
})({
  userSelect: 'none'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.typography));

var AppButton = function AppButton(props) {
  var id = props.id,
      buttonRef = props.buttonRef,
      name = props.name,
      expanded = props.expanded,
      disabled = props.disabled,
      selected = props.selected,
      onAppClick = props.onAppClick,
      icon = props.icon,
      tooltip = props.tooltip;
  var button = /*#__PURE__*/React__namespace["default"].createElement(AppButtonStyle, {
    id: id,
    ref: buttonRef,
    expanded: expanded,
    disabled: disabled,
    selected: selected,
    onClick: onAppClick
  }, icon, expanded && name && /*#__PURE__*/React__namespace["default"].createElement(AppText$1, null, name));

  if (!expanded && tooltip) {
    return /*#__PURE__*/React__namespace["default"].createElement(Tooltip, {
      content: name,
      placement: "bottom",
      delay: 1
    }, button);
  } else {
    return button;
  }
};
AppButton.defaultProps = {
  id: '',
  buttonRef: null,
  name: '',
  tooltip: true,
  icon: null
};

var AppNameDiv = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppNamestyles__AppNameDiv",
  componentId: "sc-11iruz-1"
})(["display:inline-flex;flex-direction:row;align-items:center;color:", ";", ""], function (props) {
  return props.theme.colors.text.primary;
}, function (props) {
  return props.appColor && styled.css(["svg{fill:", ";}"], props.appColor);
})).withConfig({
  displayName: "AppNamestyles__AppNameDiv",
  componentId: "sc-11iruz-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var AppText = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppNamestyles__AppText",
  componentId: "sc-11iruz-3"
})(["display:inline-flex;align-items:center;font-weight:450;color:", ";font-size:", ";&:first-child{margin-left:0px;}margin-left:8px;svg{margin-right:4px;}"], function (props) {
  return props.theme.colors.text.tertiary;
}, function (props) {
  return props.theme.fontSizes[2];
})).withConfig({
  displayName: "AppNamestyles__AppText",
  componentId: "sc-11iruz-2"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));

var AppName = function AppName(props) {
  var appIcon = props.appIcon,
      appName = props.appName,
      appColor = props.appColor,
      onSettingsClick = props.onSettingsClick,
      style = props.style;
  return /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    style: _objectSpread2({
      padding: 4
    }, style),
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between"
  }, /*#__PURE__*/React__namespace["default"].createElement(AppNameDiv, {
    appColor: appColor
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, null, appIcon), /*#__PURE__*/React__namespace["default"].createElement(AppText, null, appName)), /*#__PURE__*/React__namespace["default"].createElement(IconButton, {
    size: 24,
    onClick: onSettingsClick
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.More, null)));
};

styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppNavstyles__AppNameDiv",
  componentId: "sc-3ymjwr-1"
})(["display:inline-flex;flex-direction:row;align-items:center;color:", ";"], function (props) {
  return props.theme.colors.text.primary;
})).withConfig({
  displayName: "AppNavstyles__AppNameDiv",
  componentId: "sc-3ymjwr-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var AppNavContainer = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppNavstyles__AppNavContainer",
  componentId: "sc-3ymjwr-3"
})(["display:flex;flex-direction:column;height:calc(100% - 24px);gap:4px;padding:12px;background:", ";border:1px solid ", ";transition:0.2s ease;border-radius:", "px;color:", ";box-sizing:border-box;"], function (props) {
  return props.theme.colors.bg.secondary;
}, function (props) {
  return props.theme.colors.ui.input.borderColor;
}, function (props) {
  return props.theme.containers.outerBorderRadius;
}, function (props) {
  return props.theme.colors.text.primary;
})).withConfig({
  displayName: "AppNavstyles__AppNavContainer",
  componentId: "sc-3ymjwr-2"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));

var Container = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppNavRow__Container",
  componentId: "sc-zgrane-1"
})(["display:inline-flex;flex-direction:row;gap:8px;height:33px;width:calc(100% - 16px);padding:4px 8px;align-items:center;cursor:pointer;font-weight:", ";font-size:", ";color:", ";border-radius:", "px;background:", ";&:hover{transition:", ";background:", ";}"], function (props) {
  return props.selected ? 500 : 400;
}, function (props) {
  return props.theme.fontSizes[2];
}, function (props) {
  return props.selected ? props.appColor : props.theme.colors.text.primary;
}, function (props) {
  return props.theme.containers.outerBorderRadius;
}, function (props) {
  return props.selected ? polished.rgba(props.appColor, 0.1) : 'transparent';
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.selected ? polished.rgba(props.appColor, 0.15) : props.theme.colors.highlights.bgHighlight;
})).withConfig({
  displayName: "AppNavRow__Container",
  componentId: "sc-zgrane-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var AppNavRow = function AppNavRow(props) {
  var selected = props.selected,
      navIcon = props.navIcon,
      navName = props.navName,
      appColor = props.appColor,
      style = props.style,
      onClick = props.onClick;
  return /*#__PURE__*/React__namespace["default"].createElement(Container, {
    style: style,
    selected: selected,
    appColor: appColor,
    onClick: onClick
  }, navIcon, " ", navName);
};

var AppNav = function AppNav(props) {
  var selectedRouteUri = props.selectedRouteUri,
      subRoutes = props.subRoutes,
      appName = props.appName,
      appIcon = props.appIcon,
      appColor = props.appColor,
      style = props.style,
      onSettingsClick = props.onSettingsClick,
      onRouteClick = props.onRouteClick;
  return /*#__PURE__*/React__namespace["default"].createElement(AppNavContainer, {
    style: style
  }, /*#__PURE__*/React__namespace["default"].createElement(AppName, {
    style: {
      marginBottom: 8
    },
    appColor: appColor,
    appName: appName,
    appIcon: appIcon,
    onSettingsClick: onSettingsClick
  }), subRoutes.map(function (route) {
    return /*#__PURE__*/React__namespace["default"].createElement(AppNavRow, {
      key: route.uri,
      appColor: appColor,
      navIcon: route.icon,
      selected: selectedRouteUri && selectedRouteUri.includes(route.uri),
      navName: route.name,
      onClick: function onClick() {
        return onRouteClick(route);
      }
    });
  }));
};

// TODO add hover effect if crumb has uri
var AppSubHeader = function AppSubHeader(props) {
  var appName = props.appName,
      breadcrumbs = props.breadcrumbs,
      style = props.style,
      onCrumbClick = props.onCrumbClick;
  var crumbs = breadcrumbs.length && breadcrumbs.length > 1 && breadcrumbs.slice(0, breadcrumbs.length - 1);
  var pageTitle = breadcrumbs && breadcrumbs[breadcrumbs.length - 1];
  return /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    style: _objectSpread2({}, style),
    flexDirection: "column",
    alignItems: "flex-start"
  }, /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    flexDirection: "row",
    alignItems: "center"
  }, /*#__PURE__*/React__namespace["default"].createElement(Text, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexGrow: "1",
    variant: "body",
    fontSize: "1",
    fontWeight: "500",
    color: "text.disabled"
  }, appName), crumbs && crumbs.map(function (crumb) {
    return /*#__PURE__*/React__namespace["default"].createElement(React__namespace["default"].Fragment, null, /*#__PURE__*/React__namespace["default"].createElement(Text, {
      style: {
        marginLeft: 2,
        marginRight: 2
      },
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      variant: "body",
      fontSize: "1",
      fontWeight: "500",
      color: "text.disabled"
    }, '  / '), /*#__PURE__*/React__namespace["default"].createElement(Crumb, {
      icon: crumb.icon,
      name: crumb.name,
      uri: crumb.uri,
      onClick: onCrumbClick
    }));
  })), /*#__PURE__*/React__namespace["default"].createElement(Crumb, {
    icon: pageTitle.icon,
    name: pageTitle.name,
    title: true
  }));
};
var CrumbContainer = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppSubHeader__CrumbContainer",
  componentId: "sc-1dt33tw-1"
})(["display:flex;flex-direction:row;align-items:center;", ""], function (props) {
  return props.isLink && styled.css(["&:hover{cursor:pointer;text-decoration:underline;text-decoration-color:", ";}"], function (props) {
    return props.theme.colors.text.disabled;
  });
})).withConfig({
  displayName: "AppSubHeader__CrumbContainer",
  componentId: "sc-1dt33tw-0"
})({}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.typography));

var Crumb = function Crumb(props) {
  return /*#__PURE__*/React__namespace["default"].createElement(CrumbContainer, {
    isLink: props.uri,
    style: {
      gap: props.title ? 4 : 2
    },
    onClick: function onClick() {
      return props.onClick(props.uri);
    }
  }, props.icon && /*#__PURE__*/React__namespace["default"].createElement(SVG // verticalAlign="middle"
  , {
    size: props.title ? '18px' : '14px',
    colorVariant: props.title ? 'tertiary' : 'disabled'
  }, props.icon), /*#__PURE__*/React__namespace["default"].createElement(Text, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    verticalAlign: "middle",
    marginTop: props.title ? '4px' : '0px',
    color: props.title ? 'text.tertiary' : 'text.disabled',
    variant: "body",
    fontWeight: props.title ? '700' : '500',
    fontSize: props.title ? '2' : '1'
  }, props.name));
};

var SVG = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "SVG",
  componentId: "sc-i7tej6-1"
})(["display:inline-flex;flex-direction:column;justify-content:center;align-items:center;height:", ";width:", ";svg{height:", ";width:", ";fill:", ";}"], function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.colorVariant && props.theme.colors.text[props.colorVariant] || props.fillColor || props.theme.colors.text.primary;
})).withConfig({
  displayName: "SVG",
  componentId: "sc-i7tej6-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));

var DialogOverlay = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Dialogstyles__DialogOverlay",
  componentId: "sc-14iegpd-1"
})(["position:fixed;top:0;left:0;z-index:100;transition:visibility 0.2s linear;width:100vw;height:100vh;background-color:#000;opacity:", ";transition:", ";"], function (props) {
  return props.backdropOpacity;
}, function (props) {
  return props.theme.transitionFast;
})).withConfig({
  displayName: "Dialogstyles__DialogOverlay",
  componentId: "sc-14iegpd-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var DialogWrapper = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Dialogstyles__DialogWrapper",
  componentId: "sc-14iegpd-3"
})(["position:fixed;top:0;left:0;z-index:1050;width:100%;height:100%;overflow-x:hidden;overflow-y:auto;outline:0;transition:", ";"], function (props) {
  return props.theme.transitionFast;
})).withConfig({
  displayName: "Dialogstyles__DialogWrapper",
  componentId: "sc-14iegpd-2"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var DialogHeader = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Dialogstyles__DialogHeader",
  componentId: "sc-14iegpd-5"
})(["-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:", ";border-radius:12px 12px 0 0;display:-webkit-box;display:-ms-flexbox;display:flex;justify-content:space-between;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;line-height:24px;letter-spacing:-1%;z-index:0;", ""], function (props) {
  return props.theme.colors.bg.secondary;
}, function (props) {
  return props.variant === 'bordered' ? styled.css(["border-bottom:1px solid ", ";-webkit-box-shadow:0 1px 0 rgb(16 22 26 / 2%);box-shadow:0 1px 0 rgb(16 22 26 / 2%);"], function (props) {
    return props.theme.colors.ui.input.borderColor;
  }) : styled.css(["border-bottom:none;padding-bottom:0px;"]);
})).withConfig({
  displayName: "Dialogstyles__DialogHeader",
  componentId: "sc-14iegpd-4"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var DialogContainer = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Dialogstyles__DialogContainer",
  componentId: "sc-14iegpd-7"
})(["z-index:1060;position:relative;margin:auto auto;display:flex;flex-direction:column;justify-content:center;height:inherit;max-width:500px;"])).withConfig({
  displayName: "Dialogstyles__DialogContainer",
  componentId: "sc-14iegpd-6"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var DialogBody = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Dialogstyles__DialogBody",
  componentId: "sc-14iegpd-9"
})(["line-height:18px;padding:24px;padding-top:", ";"], function (props) {
  return props.variant === 'simple' ? '16px' : '24px';
})).withConfig({
  displayName: "Dialogstyles__DialogBody",
  componentId: "sc-14iegpd-8"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var DialogFooter = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Dialogstyles__DialogFooter",
  componentId: "sc-14iegpd-11"
})(["margin:0 16px;"])).withConfig({
  displayName: "Dialogstyles__DialogFooter",
  componentId: "sc-14iegpd-10"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var DialogFooterButtons = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "Dialogstyles__DialogFooterButtons",
  componentId: "sc-14iegpd-13"
})(["display:-webkit-box;display:-ms-flexbox;display:flex;gap:8px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;"])).withConfig({
  displayName: "Dialogstyles__DialogFooterButtons",
  componentId: "sc-14iegpd-12"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));

var Dialog = function Dialog(_ref) {
  var title = _ref.title,
      icon = _ref.icon,
      isShowing = _ref.isShowing,
      backdropOpacity = _ref.backdropOpacity,
      primaryButton = _ref.primaryButton,
      secondaryButton = _ref.secondaryButton,
      hasCloseButton = _ref.hasCloseButton,
      closeOnBackdropClick = _ref.closeOnBackdropClick,
      variant = _ref.variant,
      children = _ref.children,
      onHide = _ref.onHide;
  var hasFooter = primaryButton || secondaryButton;
  return isShowing ? /*#__PURE__*/ReactDOM__default["default"].createPortal( /*#__PURE__*/React__namespace["default"].createElement(React__namespace["default"].Fragment, null, /*#__PURE__*/React__namespace["default"].createElement(DialogOverlay, {
    backdropOpacity: backdropOpacity
  }), /*#__PURE__*/React__namespace["default"].createElement(DialogWrapper, {
    "aria-modal": true,
    "aria-hidden": true,
    tabIndex: -1,
    role: "dialog",
    onClick: closeOnBackdropClick ? onHide : null
  }, /*#__PURE__*/React__namespace["default"].createElement(DialogContainer, {
    variant: variant
  }, /*#__PURE__*/React__namespace["default"].createElement(Card, {
    padding: 0,
    style: {
      borderRadius: 12
    },
    elevation: "none",
    paddingBottom: hasFooter ? 16 : 0,
    onClick: function onClick(evt) {
      return evt.stopPropagation();
    }
  }, title && /*#__PURE__*/React__namespace["default"].createElement(DialogHeader, {
    variant: variant
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    alignItems: "center"
  }, icon && /*#__PURE__*/React__namespace["default"].createElement(Box, {
    alignItems: "center",
    mr: 2
  }, icon), /*#__PURE__*/React__namespace["default"].createElement(Text, {
    fontSize: "16px",
    fontWeight: "bold"
  }, title)), hasCloseButton && /*#__PURE__*/React__namespace["default"].createElement(IconButton, {
    "data-dismiss": "modal",
    "aria-label": "Close",
    tabIndex: -1,
    onClick: onHide
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.Close, {
    size: "20px"
  }))), /*#__PURE__*/React__namespace["default"].createElement(DialogBody, {
    variant: variant,
    hasHeader: title
  }, children), (primaryButton || secondaryButton) && /*#__PURE__*/React__namespace["default"].createElement(DialogFooter, null, /*#__PURE__*/React__namespace["default"].createElement(DialogFooterButtons, null, secondaryButton, primaryButton)))))), document.body) : null;
};
Dialog.defaultProps = {
  backdropOpacity: 0.2,
  variant: 'bordered',
  hasCloseButton: true,
  closeOnBackdropClick: true
};

var useDialog = function useDialog() {
  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isShowing = _useState2[0],
      setIsShowing = _useState2[1];

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing: isShowing,
    toggle: toggle
  };
};

var BreadcrumbNavStyle = styled__default["default"].div.withConfig({
  displayName: "BreadcrumbNav__BreadcrumbNavStyle",
  componentId: "sc-o3rx58-0"
})(["display:flex;flex-direction:row;flex-basis:40px;align-items:center;justify-content:flex-start;height:40px;min-height:40px;margin:4px 0;width:100%;"]);
var BreadcrumbNav = function BreadcrumbNav(props) {
  var crumbs = props.crumbs,
      onBack = props.onBack;
  return /*#__PURE__*/React__namespace["default"].createElement(BreadcrumbNavStyle, null, /*#__PURE__*/React__namespace["default"].createElement(IconButton, {
    tabIndex: -1,
    mr: 3,
    onClick: function onClick() {
      return onBack && onBack();
    }
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.ArrowLeft, null)), crumbs.map(function (crumb, index) {
    var divider = [];
    var isLast = index === crumbs.length - 1;

    if (!isLast) {
      divider = /*#__PURE__*/React__namespace["default"].createElement(Text, {
        style: {
          opacity: 0.6
        },
        variant: "body",
        mr: 2
      }, "/");
    }

    return /*#__PURE__*/React__namespace["default"].createElement(Flex, {
      key: "".concat(crumb.label, "-").concat(index),
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    }, /*#__PURE__*/React__namespace["default"].createElement(Text, {
      style: {
        flexGrow: 1,
        cursor: 'pointer',
        opacity: isLast ? 1 : 0.7
      },
      variant: "body",
      mr: 2,
      onClick: function onClick() {
        return crumb.onClick && crumb.onClick();
      }
    }, crumb.label), divider);
  }));
};

var Skeleton = styled__default["default"].div.withConfig({
  displayName: "Skeleton",
  componentId: "sc-z3ry0k-0"
})(["width:100%;display:block;border-radius:3px;animation:skeleton-loading 1s linear infinite alternate;@keyframes skeleton-loading{0%{background-color:hsl(250,20%,95%);}100%{background-color:hsl(250,20%,88%);}}@keyframes shine{to{background-position:100% 0;}}"]);

var AppDockStyle = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppDockstyles__AppDockStyle",
  componentId: "sc-12j3vgi-1"
})(["display:inline-flex;flex-direction:row;align-items:center;font-family:Inter;font-style:normal;font-weight:500;font-size:14px;height:30px;padding:4px 8px;border-radius:30px;svg{height:18px;width:18px;}user-select:none;cursor:pointer;transition:", ";background:", ";color:", ";"], function (props) {
  return props.theme.transition;
}, function (props) {
  return polished.rgba(props.baseColor || props.theme.colors.os.base, 0.08);
}, function (props) {
  return props.baseColor || polished.rgba(props.theme.colors.os.base, 0.6);
})).withConfig({
  displayName: "AppDockstyles__AppDockStyle",
  componentId: "sc-12j3vgi-0"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));
var DockDivider = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppDockstyles__DockDivider",
  componentId: "sc-12j3vgi-3"
})(["height:16px;width:1px;margin:0 4px;border-right:1px solid ", ";"], function (props) {
  return polished.rgba(props.theme.colors.os.base, 0.12);
})).withConfig({
  displayName: "AppDockstyles__DockDivider",
  componentId: "sc-12j3vgi-2"
})(styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));

var TrayButtonStyle = styled__default["default"](styled__default["default"].button.withConfig({
  displayName: "TrayButton__TrayButtonStyle",
  componentId: "sc-3ze0ma-1"
})(["appearance:none;-webkit-appearance:none;-moz-appearance:none;display:flex;flex-direction:row;align-items:center;font-family:Inter;font-style:normal;font-weight:500;font-size:14px;line-height:16px;padding:4px 8px;border:none;border-radius:", ";user-select:none;cursor:pointer;transition:", ";outline:none;div{pointer-events:none;}background:", ";color:", ";&:hover{background:", ";transition:", ";}"], function (props) {
  return props.circular ? '26px' : '4px';
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.noRestingBg ? 'transparent' : polished.rgba(props.baseColor || props.theme.colors.os.base, props.transparency || 0.08);
}, function (props) {
  return props.baseColor || polished.rgba(props.theme.colors.os.base, 0.6);
}, function (props) {
  return polished.rgba(props.baseColor || props.theme.colors.os.base, props.transparency + 0.04 || 0.12);
}, function (props) {
  return props.baseColor || props.theme.transition;
})).withConfig({
  displayName: "TrayButton__TrayButtonStyle",
  componentId: "sc-3ze0ma-0"
})({
  transparency: 0.08
}, styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position, styledSystem.color));

var AppDock = function AppDock(props) {
  var selectedApp = props.selectedApp,
      apps = props.apps;
  return /*#__PURE__*/React__namespace["default"].createElement(AppDockStyle, null, /*#__PURE__*/React__namespace["default"].createElement(TrayButtonStyle, {
    circular: true,
    noRestingBg: true,
    paddingLeft: "4px",
    paddingRight: "4px"
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.Apps2, null)), /*#__PURE__*/React__namespace["default"].createElement(DockDivider, null), /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    style: {
      gap: '6px'
    },
    alignItems: "center"
  }, apps.map(function (app) {
    return /*#__PURE__*/React__namespace["default"].createElement(DockButton, {
      key: app.name,
      app: app,
      isSelected: selectedApp === app.name
    });
  })));
};
AppDock.defaultProps = {
  apps: []
};
var DockButton = function DockButton(props) {
  var app = props.app,
      isSelected = props.isSelected;
  return /*#__PURE__*/React__namespace["default"].createElement(TrayButtonStyle, {
    circular: true // circular={isSelected}
    ,
    style: {
      gap: '4px'
    },
    transparency: isSelected ? 0.14 : 0.06,
    noRestingBg: !isSelected,
    paddingLeft: "4px",
    paddingRight: isSelected ? '6px' : '4px',
    baseColor: isSelected ? app.color : null
  }, app.icon, " ", isSelected && app.name);
};
DockButton.defaultProps = {
  isSelected: false
};

var AppWindowStyle = styled__default["default"](Flex).withConfig({
  displayName: "AppWindowstyles__AppWindowStyle",
  componentId: "sc-mr4do5-0"
})(["display:flex;flex-direction:column;flex:1;height:100vh;overflow:hidden;background:", ";"], function (props) {
  return props.isStandalone ? 'inherit' : props.theme.colors.bg.secondary;
});
var AppWindowTitleStyle = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppWindowstyles__AppWindowTitleStyle",
  componentId: "sc-mr4do5-2"
})(["-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;font-weight:600;height:32px;margin-right:16px;color:", ";", ""], function (props) {
  return props.theme.colors.text.secondary;
}, function (props) {
  return props.clickable && styled.css(["cursor:pointer;padding:8px 12px 8px 8px;&:hover{background:", ";border-radius:", "px;}"], function (props) {
    return props.theme.colors.highlights.bgHighlight;
  }, function (props) {
    return props.theme.containers.outerBorderRadius;
  });
})).withConfig({
  displayName: "AppWindowstyles__AppWindowTitleStyle",
  componentId: "sc-mr4do5-1"
})({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
});
styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppWindowstyles__AppWindowIconStyle",
  componentId: "sc-mr4do5-4"
})(["-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:24px;width:24px;border-radius:", "px;"], function (props) {
  return props.theme.containers.outerBorderRadius;
})).withConfig({
  displayName: "AppWindowstyles__AppWindowIconStyle",
  componentId: "sc-mr4do5-3"
})({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
});
var AppWindowTitleBar = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "AppWindowstyles__AppWindowTitleBar",
  componentId: "sc-mr4do5-6"
})(["display:flex;flex-direction:row;align-items:center;justify-content:space-between;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:48px;width:100%;border-bottom:1px solid ", ";"], function (props) {
  return props.theme.colors.ui.borderColor;
})).withConfig({
  displayName: "AppWindowstyles__AppWindowTitleBar",
  componentId: "sc-mr4do5-5"
})({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
}, styledSystem.compose(styledSystem.space, styledSystem.color, styledSystem.layout, styledSystem.flexbox, styledSystem.border, styledSystem.position));

var Context = function Context(props) {
  var loading = props.loading,
      style = props.style,
      selectedContext = props.selectedContext,
      availableContexts = props.availableContexts,
      customMenu = props.customMenu,
      menuOrientation = props.menuOrientation,
      onContextClick = props.onContextClick; // const contextButtonRef = React.useRef();

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1]; // let show: boolean, setShow: any;
  // let config = useMenu(contextButtonRef, {
  //   orientation: menuOrientation,
  //   padding: 6,
  //   manuallyOpen: true,
  //   // menuWidth,
  // });
  // show = config.show;
  // setShow = config.setShow;


  var button = React.useMemo(function () {
    if (loading) {
      return /*#__PURE__*/React__namespace["default"].createElement(TrayButtonStyle, {
        tabIndex: 0,
        style: {
          width: 60,
          justifyContent: 'center',
          alignItems: 'center'
        } // ref={contextButtonRef}
        ,
        paddingLeft: "4px"
      }, /*#__PURE__*/React__namespace["default"].createElement(Spinner, {
        ml: 1,
        size: 0
      }));
    }

    var contextLabel = 'No context selected';
    var avatar = null;

    if (selectedContext) {
      switch (selectedContext.type) {
        case 'ship':
          avatar = /*#__PURE__*/React__namespace["default"].createElement(Sigil, {
            patp: selectedContext.name,
            avatar: selectedContext.meta.avatar,
            clickable: false,
            size: 16,
            borderRadiusOverride: "2px",
            color: [selectedContext.meta.color || '#000000', 'white']
          });
          contextLabel = selectedContext.meta.nickname || selectedContext.name;
          break;

        case 'group':
          avatar = selectedContext.meta.picture ? /*#__PURE__*/React__namespace["default"].createElement("img", {
            style: {
              borderRadius: 2
            },
            height: "16px",
            width: "16px",
            src: selectedContext.meta.picture
          }) : /*#__PURE__*/React__namespace["default"].createElement("div", {
            style: {
              height: 16,
              width: 16,
              background: selectedContext.meta.color,
              borderRadius: 2
            }
          });
          contextLabel = selectedContext.meta.title || selectedContext.name;
          break;
      }
    }

    return /*#__PURE__*/React__namespace["default"].createElement(TrayButtonStyle // ref={contextButtonRef}
    , {
      onClick: function onClick(evt) {
        // evt.stopPropagation();
        show ? setShow(false) : setShow(true);
      },
      style: _objectSpread2(_objectSpread2({}, style), {}, {
        width: 'max-content'
      }),
      paddingLeft: "4px"
    }, avatar, /*#__PURE__*/React__namespace["default"].createElement(Text, {
      style: {
        pointerEvents: 'none'
      },
      ml: "8px",
      variant: 'inherit'
    }, !selectedContext ? 'No context selected' : contextLabel, /*#__PURE__*/React__namespace["default"].createElement(Icons.ExpandMore, {
      ml: "6px"
    })));
  }, [show, loading, selectedContext]);
  var menu = React.useMemo(function () {
    return /*#__PURE__*/React__namespace["default"].createElement(Menu, {
      id: "context-menu",
      style: _objectSpread2(_objectSpread2({}, _objectSpread2({}, menuOrientation === 'top' ? {
        bottom: 24 + 2
      } : {
        top: 24 + 2
      })), {}, {
        padding: '8px 2px',
        minWidth: 225,
        zIndex: 6,
        visibility: show ? 'visible' : 'hidden'
      }),
      preventDefault: true,
      isOpen: show,
      onClose: function onClose() {
        setShow(false);
      }
    }, customMenu || availableContexts.map(function (context, i) {
      return /*#__PURE__*/React__namespace["default"].createElement(MenuItem, {
        key: "context-".concat(i),
        style: {
          padding: '8px 8px'
        },
        type: "neutral",
        onClick: function onClick() {
          onContextClick(context);
          setShow(false);
        }
      }, context.type === 'ship' ? /*#__PURE__*/React__namespace["default"].createElement(Flex, {
        alignItems: "center"
      }, /*#__PURE__*/React__namespace["default"].createElement(Sigil, {
        patp: context.name,
        avatar: context.meta.avatar,
        clickable: true,
        size: 16,
        borderRadiusOverride: "2px",
        color: [context.meta.color, 'white']
      }), /*#__PURE__*/React__namespace["default"].createElement(Text, {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        },
        ml: "8px",
        variant: "inherit"
      }, context.meta.nickname || context.name)) : /*#__PURE__*/React__namespace["default"].createElement(Flex, {
        style: {
          width: '100%',
          flex: 1
        }
      }, /*#__PURE__*/React__namespace["default"].createElement("img", {
        style: {
          borderRadius: 2
        },
        height: "16px",
        width: "16px",
        src: context.meta.picture
      }), /*#__PURE__*/React__namespace["default"].createElement(Text, {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        },
        ml: "8px",
        variant: "inherit"
      }, context.meta.title || context.name)));
    }));
  }, [loading, selectedContext, availableContexts, show]);
  return /*#__PURE__*/React__namespace["default"].createElement("div", {
    style: {
      position: 'relative'
    }
  }, button, menu);
};
Context.defaultProps = {
  menuOrientation: 'top'
};

var SubRouteStyle = styled__default["default"](styled__default["default"].button.withConfig({
  displayName: "SubRouteNav__SubRouteStyle",
  componentId: "sc-1gqwlgo-1"
})(["appearance:none;-webkit-appearance:none;-moz-appearance:none;border:none;display:flex;flex-direction:row;align-items:center;padding:0px 8px;height:24px;background:", ";transition:", ";border-radius:4px;font-family:Inter,sans-serif;font-style:normal;font-weight:600;font-size:14px;line-height:16px;display:flex;align-items:center;text-align:center;color:", ";margin-left:8px;cursor:pointer;&:hover{transition:", ";background:", ";}", ""], function (props) {
  return props.isSelected ? polished.darken(0.05, props.theme.colors.ui.tertiary) : 'transparent';
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return props.isSelected ? props.theme.colors.text.tertiary : props.theme.colors.text.secondary;
}, function (props) {
  return props.theme.transition;
}, function (props) {
  return !props.isSelected && props.theme.colors.ui.tertiary;
}, selectableFocus)).withConfig({
  displayName: "SubRouteNav__SubRouteStyle",
  componentId: "sc-1gqwlgo-0"
})({}, styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.typography));
var SubRouteNav = function SubRouteNav(props) {
  var color = props.color,
      name = props.name,
      selected = props.selected,
      onClick = props.onClick;
  return (
    /*#__PURE__*/
    // @ts-ignore
    React__namespace["default"].createElement(SubRouteStyle, {
      tabIndex: 0,
      isSelected: selected,
      color: color,
      onClick: onClick
    }, name)
  );
}; // Handles mobile responsive navigation

var SubRouteWrapperStyle = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "SubRouteNav__SubRouteWrapperStyle",
  componentId: "sc-1gqwlgo-3"
})(["", ""], function (props) {
  return props.isMobile && styled.css(["flex-direction:column;position:absolute;right:12px;top:10px;", "{height:36px;margin-right:8px;font-size:15px;}"], SubRouteStyle);
})).withConfig({
  displayName: "SubRouteNav__SubRouteWrapperStyle",
  componentId: "sc-1gqwlgo-2"
})({}, styledSystem.compose(styledSystem.space, styledSystem.layout, styledSystem.typography));
var SubRouteWrapper = function SubRouteWrapper(props) {
  var isMobile = props.isMobile,
      children = props.children;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isNavOpen = _useState2[0],
      setIsNavOpen = _useState2[1];

  if (isMobile) {
    return /*#__PURE__*/React__namespace["default"].createElement(SubRouteWrapperStyle, {
      isMobile: isMobile
    }, /*#__PURE__*/React__namespace["default"].createElement(IconButton, {
      style: {
        outline: 'none'
      },
      size: 28,
      onClick: function onClick() {
        return setIsNavOpen(true);
      }
    }, /*#__PURE__*/React__namespace["default"].createElement(Icons.Apps, null)), /*#__PURE__*/React__namespace["default"].createElement(Menu, {
      isOpen: isNavOpen,
      style: {
        zIndex: 6,
        paddingTop: 8,
        paddingBottom: 8,
        right: 0,
        gap: 6,
        width: 150
      },
      onClose: function onClose() {
        setIsNavOpen(false);
      }
    }, children));
  } else {
    return children;
  }
};

var AppWindow = function AppWindow(props) {
  var app = props.app,
      ship = props.ship,
      selectedContext = props.selectedContext,
      contexts = props.contexts,
      subRoutes = props.subRoutes,
      style = props.style,
      selectedRouteUri = props.selectedRouteUri,
      onHomeClick = props.onHomeClick,
      onRouteClick = props.onRouteClick,
      onContextClick = props.onContextClick,
      loadingContext = props.loadingContext,
      isStandalone = props.isStandalone,
      isMobile = props.isMobile,
      children = props.children;
  var ContextDropdown = React.useMemo(function () {
    return /*#__PURE__*/React__namespace["default"].createElement(Context, {
      loading: loadingContext,
      menuOrientation: "bottom",
      style: {
        marginRight: 8
      },
      selectedContext: selectedContext,
      onContextClick: onContextClick,
      customMenu: app.contextMenu // @ts-ignore
      ,
      availableContexts: contexts
    });
  }, [contexts, app.contextMenu, selectedContext, loadingContext]);
  return /*#__PURE__*/React__namespace["default"].createElement(AppWindowStyle, {
    isStandalone: isStandalone
  }, /*#__PURE__*/React__namespace["default"].createElement(Flex, null, /*#__PURE__*/React__namespace["default"].createElement(AppWindowTitleBar, {
    style: style
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    alignItems: "center"
  }, !isMobile && /*#__PURE__*/React__namespace["default"].createElement(AppWindowTitleStyle, {
    clickable: typeof onHomeClick != 'undefined',
    onClick: onHomeClick
  }, /*#__PURE__*/React__namespace["default"].createElement(Box, {
    mr: 3,
    style: {
      borderRadius: 4
    }
  }, app.icon), /*#__PURE__*/React__namespace["default"].createElement(Box, null, app.name)), ContextDropdown, /*#__PURE__*/React__namespace["default"].createElement(SubRouteWrapper, {
    isMobile: isMobile
  }, subRoutes.map(function (subroute) {
    return /*#__PURE__*/React__namespace["default"].createElement(SubRouteNav, {
      key: subroute.uri,
      name: subroute.name,
      path: subroute.uri,
      color: app.color,
      selected: selectedRouteUri === subroute.nav,
      onClick: function onClick(evt) {
        evt.preventDefault();
        evt.currentTarget.blur();
        onRouteClick(subroute);
      }
    });
  }))), !isMobile && /*#__PURE__*/React__namespace["default"].createElement(Box, {
    justifyContent: "flex-end",
    ml: 12
  }, /*#__PURE__*/React__namespace["default"].createElement(Sigil, {
    clickable: true,
    avatar: ship.avatar,
    patp: ship.patp,
    size: 24,
    contextMenu: ship.contextMenu,
    color: ship.color ? [ship.color, 'white'] : ['black', 'white']
  })))), children);
};
AppWindow.defaultProps = {
  isStandalone: false
};

var Network = function Network(props) {
  var status = props.status,
      selectedNetwork = props.selectedNetwork,
      availableNetworks = props.availableNetworks;
  console.log(availableNetworks);
  var icon = null;
  var networkLabel = 'No network selected';

  if (selectedNetwork) {
    switch (selectedNetwork.blockchain) {
      case 'Ethereum':
        icon = /*#__PURE__*/React__namespace["default"].createElement(Icons.Ethereum, {
          height: "16px",
          width: "16px"
        });
        networkLabel = "".concat(selectedNetwork.blockchain);

        if (selectedNetwork.network === 'Testnet') {
          networkLabel = "".concat(networkLabel, " - ").concat(selectedNetwork.network);
        }

        break;

      case 'Uqbar':
        icon = /*#__PURE__*/React__namespace["default"].createElement(Icons.Uqbar, {
          height: "16px",
          width: "16px"
        });
        networkLabel = "".concat(selectedNetwork.blockchain, " - ").concat(selectedNetwork.network);
        break;
    }
  }

  return /*#__PURE__*/React__namespace["default"].createElement(TrayButtonStyle, {
    paddingLeft: "4px"
  }, icon, /*#__PURE__*/React__namespace["default"].createElement(Text, {
    ml: "8px"
  }, networkLabel), /*#__PURE__*/React__namespace["default"].createElement(NetworkStatus, {
    online: status === 'connected'
  }));
};
Network.defaultProps = {
  status: 'disconnected'
};
var NetworkStatus = styled__default["default"].div.withConfig({
  displayName: "Network__NetworkStatus",
  componentId: "sc-bt20lh-0"
})(["height:8px;width:8px;margin-left:12px;border-radius:50%;background:", ";"], function (props) {
  return props.online ? '#0FC383' : '#EE3B3B';
});

var statuses = {
  connected: '#0FC383',
  issue: '#EE3B3B',
  disconnected: null
};
var Voice = function Voice(props) {
  var muted = props.muted,
      status = props.status,
      chatTitle = props.chatTitle;
  return /*#__PURE__*/React__namespace["default"].createElement(TrayButtonStyle, {
    paddingLeft: "4px",
    paddingRight: chatTitle ? '8px' : '4px',
    baseColor: !muted && statuses[status]
  }, muted ? /*#__PURE__*/React__namespace["default"].createElement(Icons.MicOff, {
    width: "18px",
    height: "18px"
  }) : /*#__PURE__*/React__namespace["default"].createElement(Icons.MicOn, {
    width: "18px",
    height: "18px"
  }), chatTitle && /*#__PURE__*/React__namespace["default"].createElement(Text, {
    ml: "8px"
  }, chatTitle));
};
Voice.defaultProps = {
  status: 'connected'
};

var UserTray = function UserTray(props) {
  var voice = props.voice,
      ship = props.ship;
  return /*#__PURE__*/React__namespace["default"].createElement(Flex, {
    alignItems: "center",
    style: {
      gap: 8
    }
  }, /*#__PURE__*/React__namespace["default"].createElement(Voice, voice), /*#__PURE__*/React__namespace["default"].createElement(TrayButtonStyle, {
    paddingLeft: "4px",
    paddingRight: "4px"
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.Wallet, {
    width: "18px",
    height: "18px"
  })), /*#__PURE__*/React__namespace["default"].createElement(TrayButtonStyle, {
    paddingLeft: "4px",
    paddingRight: "4px"
  }, /*#__PURE__*/React__namespace["default"].createElement(Icons.DMs, {
    width: "18px",
    height: "18px"
  })), ship && /*#__PURE__*/React__namespace["default"].createElement(Sigil, {
    patp: ship.patp,
    clickable: true,
    size: 26,
    color: [ship.color, 'white']
  }));
};
UserTray.defaultProps = {
  wallet: {
    address: null
  },
  voice: {
    muted: true,
    status: 'disconnected',
    chatTitle: ''
  }
};

var SystemBar = function SystemBar(props) {
  var selectedApp = props.selectedApp,
      apps = props.apps,
      selectedContext = props.selectedContext,
      availableContexts = props.availableContexts,
      selectedNetwork = props.selectedNetwork,
      availableNetworks = props.availableNetworks,
      voice = props.voice,
      ship = props.ship;
  return /*#__PURE__*/React__namespace.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      bottom: 0,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React__namespace.createElement("div", {
    style: {
      position: 'absolute',
      zIndex: 3,
      display: 'flex',
      bottom: 6,
      left: 0
    }
  }, /*#__PURE__*/React__namespace.createElement(Box, {
    style: {
      gap: '8px'
    },
    justifyContent: "flex-start",
    alignItems: "center"
  }, /*#__PURE__*/React__namespace.createElement(Context, {
    menuOrientation: "top",
    selectedContext: selectedContext,
    availableContexts: availableContexts
  }), /*#__PURE__*/React__namespace.createElement(Network, {
    selectedNetwork: selectedNetwork,
    availableNetworks: availableNetworks
  }))), /*#__PURE__*/React__namespace.createElement("div", {
    style: {
      width: '100%',
      position: 'absolute',
      zIndex: 2,
      bottom: 0,
      left: 0,
      right: 0
    }
  }, /*#__PURE__*/React__namespace.createElement(Flex, {
    justifyContent: "center",
    alignItems: "center"
  }, /*#__PURE__*/React__namespace.createElement(AppDock, {
    selectedApp: selectedApp && selectedApp.name,
    apps: apps
  }))), /*#__PURE__*/React__namespace.createElement("div", {
    style: {
      display: 'inline-flex',
      position: 'absolute',
      zIndex: 3,
      bottom: 6,
      right: 0
    }
  }, /*#__PURE__*/React__namespace.createElement(Box, {
    justifyContent: "flex-end",
    ml: 12
  }, /*#__PURE__*/React__namespace.createElement(UserTray, {
    ship: ship,
    voice: voice,
    wallet: {
      address: ''
    }
  }))));
};

var OSViewPort = styled__default["default"](styled__default["default"].div.withConfig({
  displayName: "OSViewport__OSViewPort",
  componentId: "sc-li82bc-1"
})(["position:absolute;display:flex;flex-direction:column;flex-grow:0;flex-shrink:0;top:0;left:0;right:0;bottom:0;transition:filter ", ";", " background:", ";"], function (props) {
  return props.theme.transition;
}, function (props) {
  return props.blur && styled.css(["filter:blur(2px);transition:filter ", ";"], props.theme.transition);
}, function (props) {
  return props.bg ? props.theme.colors.bg[props.bg] : 'transparent';
})).withConfig({
  displayName: "OSViewport__OSViewPort",
  componentId: "sc-li82bc-0"
})(styledSystem.compose(styledSystem.background));

var fonts = {
  body: '"Rubik", sans-serif',
  heading: '"Rubik", sans-serif',
  monospace: 'Source Code Pro, monospace'
};
var fontByName = {
  Rubik: '"Rubik", sans-serif',
  Oxanium: 'Oxanium',
  'Source Code Pro': 'Source Code Pro, monospace',
  Inter: 'Inter, sans-serif'
};
var fontSizes = ['0.702rem', // 0 == 10px
'0.79rem', //  1 == 12px
'0.889rem', // 2 == 14px
'1rem', //     3 == 16px
'1.125rem', // 4
'1.266rem', // 5
'1.424rem', // 6
'1.602rem', // 7
'1.802rem', // 8
'2.027rem', // 9
'2.281rem' // 10
];
var fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800
};
var lineHeights = {
  solid: 'normal',
  title: '1.25rem',
  copy: '1.5rem'
};
var letterSpacings = {
  "default": 'normal',
  tracked: '0.04em'
};
var space = [0, 4, 8, 12, 16, 20, 24, 28, 32];
var sizes = [8, 16, 24, 32, 64, 128, 256, 512, 768, 1024, 1536];
var breakpoints = ['40em', '56em', '64em'];
var breakpointsPx = [500, 600, 768, 992, 1200]; // mobile, small, tablets, laptops, larger laptops

var transition = '0.2s ease';
var transitionFast = '0.05s ease';
var input = {
  borderWidth: '1px',
  borderStyle: 'solid',
  borderRadius: 4
}; // TODO make elevation theme specific

var elevations = {
  none: 'none',
  one: '0px 0px 4px rgba(0, 0, 0, 0.06)',
  two: '0px 0px 9px rgba(0, 0, 0, 0.12)',
  three: '0px 0px 9px rgba(0, 0, 0, 0.18)',
  lifted: '0 0 0 1px rgb(16 22 26 / 10%), 0 0 0 rgb(16 22 26 / 0%), 0 1px 1px rgb(16 22 26 / 20%)'
};
var containers = {
  rounderBorderRadius: 8,
  outerBorderRadius: 6,
  innerBorderRadius: 4
}; // TODO restructure to generate type in an elegant way

var theme = {
  light: {
    space: space,
    sizes: sizes,
    elevations: elevations,
    fonts: fonts,
    fontByName: fontByName,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    letterSpacings: letterSpacings,
    breakpoints: breakpoints,
    breakpointsPx: breakpointsPx,
    transition: transition,
    transitionFast: transitionFast,
    input: input,
    containers: containers,
    colors: {
      brand: {
        primary: '#4E9EFD',
        secondary: '#EF9134',
        neutral: '#F3F3F3',
        accent: '#DB7C00',
        muted: polished.rgba('#4E9EFD', 0.2)
      },
      ui: {
        primary: '#262626',
        secondary: '#757575',
        tertiary: '#FAFAFA',
        quaternary: '#FFFFFF',
        disabled: '#DEDEDE',
        intent: {
          info: '#97A3B2',
          success: '#0FC383',
          caution: '#FFBC32',
          alert: '#FF6240'
        },
        borderColor: '#E6E6E6',
        // #e3e3e3
        input: {
          background: '#FFFFFF',
          secondary: '#FDFDFD',
          borderColor: 'rgba(0, 0, 0, 0.1)',
          borderHover: 'rgba(0, 0, 0, 0.2)'
        }
      },
      os: {
        tray: 'rgba(0, 0, 0, 0.05)',
        base: '#000000'
      },
      bg: {
        primary: '#FDFDFD',
        secondary: '#FFFFFF',
        tertiary: '#f1f1f2',
        inset: '#f6f8fa',
        toolbar: '#F1F3F4',
        divider: '#E6E6E6'
      },
      icon: {
        app: '#85898E',
        bgButton: polished.rgba('#85898E', 0.5),
        toolbar: '#71757A'
      },
      text: {
        primary: '#333333',
        secondary: '#656565',
        tertiary: '#5D6064',
        disabled: '#999999',
        placeholder: 'rgba(0, 0, 0, 0.3)',
        white: '#FFFFFF',
        inverse: '#FFFFFF',
        error: '#D0421B',
        success: '#138000'
      },
      // primaryHighlight: rgba('#4E9EFD', 0.05),
      // primaryExtraHighlight: rgba('#4E9EFD', 0.1),
      highlights: {
        primaryHighlight: polished.darken(0.05, '#4E9EFD'),
        primaryExtraHighlight: polished.darken(0.1, '#4E9EFD'),
        bgHighlight: polished.darken(0.075, '#FFFFFF'),
        bgSoftHighlight: polished.darken(0.05, '#FFFFFF')
      }
    }
  },
  dark: {
    space: space,
    sizes: sizes,
    elevations: elevations,
    fonts: fonts,
    fontByName: fontByName,
    fontSizes: fontSizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    letterSpacings: letterSpacings,
    breakpoints: breakpoints,
    breakpointsPx: breakpointsPx,
    transition: transition,
    transitionFast: transitionFast,
    input: input,
    containers: containers,
    colors: {
      brand: {
        primary: '#4E9EFD',
        secondary: '#EF9134',
        accent: '#FDB447',
        muted: polished.rgba('#4E9EFD', 0.2)
      },
      ui: {
        primary: '#FFFFFF',
        secondary: '#A1A1A1',
        tertiary: '#26343F',
        quaternary: '#24313B',
        disabled: '#25343F',
        intent: {
          info: '#97A3B2',
          success: '#0FC383',
          caution: '#FFBC32',
          alert: '#F93939'
        },
        borderColor: 'rgba(0, 0, 0, 0.2)',
        input: {
          background: '#1D2932',
          secondary: '#1D2932',
          borderColor: 'rgba(0, 0, 0, 0.2)',
          borderHover: 'rgba(0, 0, 0, 0.3)'
        }
      },
      os: {
        tray: 'rgba(255, 255, 255, 0.05)',
        base: '#FFFFFF'
      },
      bg: {
        primary: '#212D36',
        secondary: '#2A3843',
        tertiary: '#212E37',
        inset: '#1c2128',
        toolbar: '#1D2932',
        divider: '#09151E'
      },
      icon: {
        app: '#A2A8AC90',
        toolbar: '#A2A8AC'
      },
      text: {
        primary: '#FFFFFF',
        secondary: '#A0A9B0',
        tertiary: '#C1C7CC',
        disabled: '#868E94',
        placeholder: 'rgba(255, 255, 255, 0.5)',
        inverse: '#262626',
        white: '#FFFFFF',
        error: '#FF4D4D',
        success: '#1CBD00'
      },
      highlights: {
        primaryHighlight: polished.lighten(0.05, '#4E9EFD'),
        primaryExtraHighlight: polished.lighten(0.1, '#4E9EFD'),
        bgHighlight: polished.darken(0.01, '#212D36'),
        bgSoftHighlight: polished.darken(0.005, '#212D36')
      }
    }
  }
};

function getWindowDimensions() {
  var _window = window,
      width = _window.innerWidth,
      height = _window.innerHeight;
  return {
    width: width,
    height: height
  };
}

function useWindowDimensions() {
  var _useState = React.useState(getWindowDimensions()),
      _useState2 = _slicedToArray(_useState, 2),
      windowDimensions = _useState2[0],
      setWindowDimensions = _useState2[1];

  React.useEffect(function () {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return function () {
      return window.removeEventListener('resize', handleResize);
    };
  }, []);
  return windowDimensions;
}

exports.AppButton = AppButton;
exports.AppDock = AppDock;
exports.AppName = AppName;
exports.AppNav = AppNav;
exports.AppSubHeader = AppSubHeader;
exports.AppWindow = AppWindow;
exports.AppWindowTitleBar = AppWindowTitleBar;
exports.Bottom = Bottom;
exports.Box = Box;
exports.BreadcrumbNav = BreadcrumbNav;
exports.BreadcrumbNavStyle = BreadcrumbNavStyle;
exports.Button = Button;
exports.Card = Card;
exports.CardInner = CardInner;
exports.CenteredPane = CenteredPane;
exports.Checkbox = Checkbox;
exports.ColorLine = ColorLine;
exports.Context = Context;
exports.ContextMenu = ContextMenu;
exports.CrumbContainer = CrumbContainer;
exports.DateSingleInput = DateSingleInput;
exports.DateTimeInput = DateTimeInput;
exports.Dialog = Dialog;
exports.DockButton = DockButton;
exports.Fill = Fill;
exports.Flex = Flex;
exports.FormControl = FormControl;
exports.FullPage = FullPage;
exports.GenericRow = GenericRow;
exports.Grid = Grid;
exports.Grid2 = Grid2;
exports.Group = Group;
exports.HTMLSelect = HTMLSelect;
exports.Header = Header;
exports.IconButton = IconButton;
exports.Icons = Icons;
exports.InlineEdit = InlineEdit;
exports.Input = Input;
exports.KPI = KPI;
exports.Label = Label;
exports.Left = Left;
exports.ListHeader = ListHeader;
exports.Menu = Menu;
exports.MenuItem = MenuItem;
exports.Network = Network;
exports.NetworkStatus = NetworkStatus;
exports.Notification = Notification;
exports.OSViewPort = OSViewPort;
exports.Page = Page;
exports.PageStyle = PageStyle;
exports.PageTop = PageTop;
exports.PageViewPort = PageViewPort;
exports.PaneHeader = PaneHeader;
exports.PaneHeaderText = PaneHeaderText;
exports.PaneStyle = PaneStyle;
exports.Radio = Radio;
exports.Right = Right;
exports.SVG = SVG;
exports.Search = Search;
exports.Select = Select;
exports.Ship = Ship;
exports.Sidebar = Sidebar;
exports.Sigil = Sigil;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.StyledText = StyledText;
exports.SystemBar = SystemBar;
exports.Tab = Tab;
exports.Tag = Tag;
exports.Text = Text;
exports.TextArea = TextArea;
exports.TextButton = TextButton;
exports.TlonIcon = SvgVisibilityOff;
exports.Tooltip = Tooltip;
exports.TooltipStyle = TooltipStyle;
exports.TooltipWrapper = TooltipWrapper;
exports.Top = Top;
exports.TrayButtonStyle = TrayButtonStyle;
exports.UserTray = UserTray;
exports.ViewPort = ViewPort;
exports.VirtualizedList = VirtualizedList;
exports.Voice = Voice;
exports.breakpoints = breakpoints;
exports.breakpointsPx = breakpointsPx;
exports.calculateAnchorPoint = calculateAnchorPoint;
exports.containers = containers;
exports.elevations = elevations;
exports.fontByName = fontByName;
exports.fontSizes = fontSizes;
exports.fontWeights = fontWeights;
exports.fonts = fonts;
exports.input = input;
exports.letterSpacings = letterSpacings;
exports.lineHeights = lineHeights;
exports.sizes = sizes;
exports.space = space;
exports.theme = theme;
exports.transition = transition;
exports.transitionFast = transitionFast;
exports.useDialog = useDialog;
exports.useMenu = useMenu;
exports.useWindowDimensions = useWindowDimensions;
