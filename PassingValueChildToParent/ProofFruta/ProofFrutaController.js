({
	whoFruta : function(cmp, event, helper) {
        var nameFruta = cmp.find(event.getSource().getLocalId()).get('v.nameFruta'); 
        //alert('Soy una: ' + nameFruta);
        cmp.set('v.nameFruta', nameFruta);
        alert('Soy una: ' + cmp.get('v.nameFruta'));
	}
})