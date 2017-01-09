"use strict";
var router_1 = require("@angular/router");
var solvalue_component_1 = require("./components/solvalue.component");
var about_component_1 = require("./components/about.component");
var appRoutes = [
    {
        path: '',
        component: solvalue_component_1.SolValueComponent
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map