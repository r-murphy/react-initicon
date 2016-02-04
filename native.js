'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react-native');
var Initicon = require('./index');

var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet;
var PropTypes = React.PropTypes;

var NativeIniticon = function (_Initicon) {
  _inherits(NativeIniticon, _Initicon);

  function NativeIniticon() {
    _classCallCheck(this, NativeIniticon);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NativeIniticon).apply(this, arguments));
  }

  _createClass(NativeIniticon, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        View,
        { style: [styles.icon, {
            backgroundColor: this._getBackgroundColor(),
            height: this.props.size,
            width: this.props.size
          }, this.props.style]
        },
        React.createElement(
          Text,
          { style: [styles.text, { fontSize: this._getFontSize() }] },
          this._getInitials()
        )
      );
    }
  }]);

  return NativeIniticon;
}(Initicon);

;

var styles = StyleSheet.create({
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff'
  }
});

module.exports = NativeIniticon;