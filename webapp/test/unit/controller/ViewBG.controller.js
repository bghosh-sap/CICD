/*global QUnit*/

sap.ui.define([
	"btp_cicd/controller/ViewBG.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewBG Controller");

	QUnit.test("I should test the ViewBG controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
