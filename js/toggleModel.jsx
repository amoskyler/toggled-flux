/*jshint quotmark:false */
/*jshint white:false */
/*jshint trailing:false */
/*jshint newcap:false */
var app = app || {};

(function () {
  'use strict';

  var Utils = app.Utils;

  app.ToggleModel = function (key) {
    this.key = key;
    this.toggled = JSON.parse(this.getStore('toggled'));
    this.onChanges = [];
  };

  app.ToggleModel.prototype.save = function (namespace, data) {
    if (typeof data !== 'boolean') {
      return false;
    }
    return localStorage.setItem(namespace, data);
  };

  app.ToggleModel.prototype.getStore = function (namespace) {
    console.log('getting store');
    return localStorage.getItem(namespace);
  };

  app.ToggleModel.prototype.subscribe = function (onChange) {
    this.onChanges.push(onChange);
  };

  app.ToggleModel.prototype.inform = function () {
    this.onChanges.forEach(function (cb) { cb(); });
  };

})();
