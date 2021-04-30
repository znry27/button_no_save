odoo.define('button_no_save.button_no_save', function (require) {
"use strict";

    var FormController = require('web.FormController');
    FormController.include({
        _onButtonClicked: function (ev) {
            ev.stopPropagation();            
            var self = this;
            var attrs = ev.data.attrs;
            
            if('triggeronchange' in attrs && self.mode == 'edit'){
                var changes = {[attrs.triggeronchange] : new Date().toString()};                
                var value = {
                    dataPointID: self.renderer.allFieldWidgets[self.renderer.state.id][0].dataPointID,
                    viewType: self.renderer.viewType,
                    changes: changes,
                };

                self.renderer.allFieldWidgets[self.renderer.state.id][0].trigger_up('field_changed', value);
                
                return ;

            }else{
                this._super.apply(this, arguments);
            }
        }
    });

});