({
	searchHelper : function(component,event,getInputkeyWord) {
	  // call the apex class method 
     var action = component.get("c.fetchLookUpValues");
      // set param to method  
        action.setParams({
            'searchKeyWord': getInputkeyWord,
            'ObjectName' : component.get("v.objectAPIName"),
            'filter' : component.get('v.filter')
          });
      // set a callBack    
        action.setCallback(this, function(response) {
          $A.util.removeClass(component.find("mySpinner"), "slds-show");
            var state = response.getState();
            if (state === "SUCCESS") {
                var storeResponse = response.getReturnValue();
              // if storeResponse size is equal 0 ,display No Result Found... message on screen.                }
                if (storeResponse.length == 0) {
                    component.set("v.Message", 'No Result Found...');
                } else {
                    component.set("v.Message", '');
                }
                // set searchResult list with return value from server.
                component.set("v.listOfSearchRecords", storeResponse);
            }
 
        });
      // enqueue the Action  
        $A.enqueueAction(action);
    
	},
    
    fetchLookUpValueCmp : function(cmp, recordId, objectName) {
        var action = cmp.get("c.fetchLookUpValue");
        action.setParams({
            "recordId":recordId,
            "objectName":objectName
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if(state === 'SUCCESS') {
                console.log("Getting LookUpValue", response.getReturnValue());
                console.log(response.getReturnValue().Name);
                //cmp.set("v.status", response.getReturnValue());
                // get the selected record from list  
                var getSelectRecord = response.getReturnValue();
                // call the event   
                cmp.set("v.selectedRecord" , getSelectRecord); 
                       
                var forclose = cmp.find("lookup-pill");
                $A.util.addClass(forclose, 'slds-show');
                $A.util.removeClass(forclose, 'slds-hide');
                
                var forclose = cmp.find("searchRes");
                $A.util.addClass(forclose, 'slds-is-close');
                $A.util.removeClass(forclose, 'slds-is-open');
                
                var lookUpTarget = cmp.find("lookupField");
                $A.util.addClass(lookUpTarget, 'slds-hide');
                $A.util.removeClass(lookUpTarget, 'slds-show');  
            }
            else {
                console.log("Error Sql get LookUpValue");
            }
        });
        
        $A.enqueueAction(action);				 
        
    },	
})