Feature: Test Logic Invoice Scenario

Scenario Outline: Test Login with Valid Credential
      Given Open chrome browser and Start Applciation
      When I enter valid "<username>" and valid "<password>" 
      Then User should be login successfully 
      Then verify title 
      
      
Examples:
      |username|password|
      |admin|admin123|
      |admin|admin12|
      |admin|admin23|
      