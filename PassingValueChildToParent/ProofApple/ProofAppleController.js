({
	doInit : function(cmp, event, helper) {
		cmp.set("v.nameFruta", 'Apple');
        var cmpEvent = cmp.getEvent('instanceEventFrutaId').fire();                       
	}
})