"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var data_service_1 = require("../services/data.service");
var SolValueComponent = (function () {
    function SolValueComponent(http, dataService, formBuilder) {
        this.http = http;
        this.dataService = dataService;
        this.formBuilder = formBuilder;
        this.solvalues = [];
        this.isLoading = true;
        this.solvalue = {};
        this.isEditing = false;
        this.datum = new forms_1.FormControl("", forms_1.Validators.required);
        this.waarde = new forms_1.FormControl("", forms_1.Validators.required);
        this.max = new forms_1.FormControl("", forms_1.Validators.required);
    }
    SolValueComponent.prototype.ngOnInit = function () {
        this.getSolValues();
        var newSolValue = { datum: "12/05/2001", waarde: 210, max: 350 };
        this.solvalues.push(newSolValue);
        this.addSolValueForm = this.formBuilder.group({
            datum: this.datum,
            waarde: this.waarde,
            max: this.max
        });
    };
    SolValueComponent.prototype.getSolValues = function () {
        var _this = this;
        this.dataService.getSolLog().subscribe(function (data) { return _this.solvalues = data; }, function (error) { return console.log(error); }, function () { return _this.isLoading = false; });
    };
    SolValueComponent.prototype.addSolValue = function () {
        var _this = this;
        this.dataService.addSolLog(this.addSolValueForm.value).subscribe(function (res) {
            var newSolValue = res.json();
            _this.solvalues.push(newSolValue);
            _this.addSolValueForm.reset();
        }, function (error) { return console.log(error); });
    };
    SolValueComponent.prototype.enableEditing = function (sv) {
        this.isEditing = true;
        this.solvalue = sv;
    };
    SolValueComponent.prototype.cancelEditing = function () {
        this.isEditing = false;
        this.solvalue = {};
        // reload the solvalues to reset the editing
        this.getSolValues();
    };
    SolValueComponent.prototype.editSolValue = function (sv) {
        var _this = this;
        this.dataService.editSolLog(sv).subscribe(function (res) {
            _this.isEditing = false;
            _this.solvalue = sv;
        }, function (error) { return console.log(error); });
    };
    SolValueComponent.prototype.deleteSolValue = function (sv) {
        var _this = this;
        if (window.confirm("Are you sure you want to permanently delete this item?")) {
            this.dataService.deleteSolLog(sv).subscribe(function (res) {
                var pos = _this.solvalues.map(function (solvalue) { return sv._id; }).indexOf(sv._id);
                _this.solvalues.splice(pos, 1);
                _this.getSolValues();
            }, function (error) { return console.log(error); });
        }
    };
    return SolValueComponent;
}());
SolValueComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sol-value',
        templateUrl: 'solvalue.component.html',
        providers: [data_service_1.DataService]
    }),
    __metadata("design:paramtypes", [http_1.Http,
        data_service_1.DataService,
        forms_1.FormBuilder])
], SolValueComponent);
exports.SolValueComponent = SolValueComponent;
//# sourceMappingURL=solvalue.component.js.map