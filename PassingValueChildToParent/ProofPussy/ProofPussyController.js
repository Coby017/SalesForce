({
	doInit : function(cmp, event, helper) {        
        cmp.set('v.nameFruta', 'Papaya');
        var cmpEvent = cmp.getEvent('instanceEventFrutaId');
        cmpEvent.fire(); 
	}
})