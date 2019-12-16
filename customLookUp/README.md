# Custom LookUp  
  Codigo Base <a href="http://www.lightningstrike.io" target="_blank">http://sfdcmonkey.com/2017/07/17/re-usable-custom-lookup/</a>

##### Calling the component
  ```  
  <c:diacoLookup objectAPIName="Finance_Product__c"                                         
                 value="{! v.LoanLease.Finance_Product__c }"
                 IconName="standard:article" 
                 label="Finance Product" 
                 filter='Active__c = true'
                 required='true'/> 
  ```
  
  ---
  ##### Attributes
<table class="tg">    
  <tr>
    <th class="tg-yw4l"><b>Attribute</b></th>
    <th class="tg-yw4l"><b>Type</b></th>
    <th class="tg-yw4l"><b>Accepted Value</b></th>
    <th class="tg-yw4l"><b>Description</b></th>
    <th class="tg-yw4l"><b>Required</b></th>
  </tr>
  <tr>
    <td class="tg-yw4l">label</td>
    <td class="tg-yw4l">String</td>
    <td class="tg-yw4l">Any String</td>
    <td class="tg-yw4l">A string value that will be displayed above the lookup </td>
    <td class="tg-yw4l">Yes</td>
  </tr>
  <tr>
    <td class="tg-yw4l">objectApiName</td>
    <td class="tg-yw4l">String</td>
    <td class="tg-yw4l">Any String</td>
    <td class="tg-yw4l">A string value that determines which records to search. Use the object's API name </td>
    <td class="tg-yw4l">Yes</td>
  </tr>
  <tr>
    <td class="tg-yw4l">value</td>
    <td class="tg-yw4l">String</td>
    <td class="tg-yw4l">Any String</td>
    <td class="tg-yw4l">A string value that holds the id of the selected record </td>
    <td class="tg-yw4l">Yes</td>
  </tr>
    <tr>
    <td class="tg-yw4l">IconName</td>
    <td class="tg-yw4l">String</td>
    <td class="tg-yw4l">Any String</td>
    <td class="tg-yw4l">A string value that determines the icon name or path</td>
    <td class="tg-yw4l">No</td>
  </tr>
    <tr>
    <td class="tg-yw4l">filter</td>
    <td class="tg-yw4l">String</td>
    <td class="tg-yw4l">Any String</td>
    <td class="tg-yw4l">A string value that determines how the SOQL search will be filtered. This will be appended to the WHERE clause by       AND (do not include 'WHERE'</td>
    <td class="tg-yw4l">No</td>
  </tr>
    <tr>
    <td class="tg-yw4l">required</td>
    <td class="tg-yw4l">Boolean</td>
    <td class="tg-yw4l">True/False(default)</td>
    <td class="tg-yw4l">Denoted with a red asterisk next to its label</td>
    <td class="tg-yw4l">No</td>
  </tr>
</table>
