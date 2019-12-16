public class diacoLookUpCmp {

    @AuraEnabled
    public static List < sObject > fetchLookUpValues(String searchKeyWord, String ObjectName, String filter) {                
        system.debug('ObjectName-->' + ObjectName);
        //string filter = 'Active__c = true';
        String searchKey = searchKeyWord + '%';  
                      
        if(filter == null || filter == '') {
            filter = '';    
        } else {
            filter = 'and ' + filter;
        }  

        List < sObject > returnList = new List < sObject > ();
        try {
            // Create a Dynamic SOQL Query For Fetch Record List with LIMIT 5   
            String sQuery =  'select id, Name from ' + ObjectName + ' where Name LIKE: searchKey ' + filter + ' order by createdDate DESC limit 5';
            List < sObject > lstOfRecords = Database.query(sQuery);
        
        for (sObject obj: lstOfRecords) {
            returnList.add(obj);
        }
        } catch (Exception e) {
            System.debug('Exception ' + e);
        }

        return returnList;
    }
    
    @auraEnabled
    public static sObject fetchLookUpValue(String recordId, String objectName) {          
        //List < sObject > returnObject = new List < sObject > ();        
        return Database.query('SELECT Id, Name FROM ' + objectName + ' WHERE Id = :recordId');
    }
}