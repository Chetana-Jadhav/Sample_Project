$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber.feature");
formatter.feature({
  "line": 1,
  "name": "Test Logic Invoice Scenario",
  "description": "",
  "id": "test-logic-invoice-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Test Login with Valid Credential",
  "description": "",
  "id": "test-logic-invoice-scenario;test-login-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome browser and Start Applciation",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify title",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "test-logic-invoice-scenario;test-login-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 11,
      "id": "test-logic-invoice-scenario;test-login-with-valid-credential;;1"
    },
    {
      "cells": [
        "admin",
        "admin123"
      ],
      "line": 12,
      "id": "test-logic-invoice-scenario;test-login-with-valid-credential;;2"
    },
    {
      "cells": [
        "admin",
        "admin12"
      ],
      "line": 13,
      "id": "test-logic-invoice-scenario;test-login-with-valid-credential;;3"
    },
    {
      "cells": [
        "admin",
        "admin23"
      ],
      "line": 14,
      "id": "test-logic-invoice-scenario;test-login-with-valid-credential;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Test Login with Valid Credential",
  "description": "",
  "id": "test-logic-invoice-scenario;test-login-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome browser and Start Applciation",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"admin\" and valid \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify title",
  "keyword": "Then "
});
formatter.match({
  "location": "logic_invoic.open_chrome_browser_and_Start_Applciation()"
});
formatter.result({
  "duration": 11703088400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 15
    },
    {
      "val": "admin123",
      "offset": 33
    }
  ],
  "location": "logic_invoic.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 222411100,
  "status": "passed"
});
formatter.match({
  "location": "logic_invoic.user_should_be_login_successfully()"
});
formatter.result({
  "duration": 516429700,
  "status": "passed"
});
formatter.match({
  "location": "logic_invoic.verify_title()"
});
formatter.result({
  "duration": 145986700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test Login with Valid Credential",
  "description": "",
  "id": "test-logic-invoice-scenario;test-login-with-valid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome browser and Start Applciation",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"admin\" and valid \"admin12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify title",
  "keyword": "Then "
});
formatter.match({
  "location": "logic_invoic.open_chrome_browser_and_Start_Applciation()"
});
formatter.result({
  "duration": 9781347800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 15
    },
    {
      "val": "admin12",
      "offset": 33
    }
  ],
  "location": "logic_invoic.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 200952400,
  "status": "passed"
});
formatter.match({
  "location": "logic_invoic.user_should_be_login_successfully()"
});
formatter.result({
  "duration": 337684800,
  "status": "passed"
});
formatter.match({
  "location": "logic_invoic.verify_title()"
});
formatter.result({
  "duration": 28076200,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]\u003e but was:\u003c[Administration Login]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinition.logic_invoic.verify_title(logic_invoic.java:39)\r\n\tat ✽.Then verify title(cucumber.feature:7)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 14,
  "name": "Test Login with Valid Credential",
  "description": "",
  "id": "test-logic-invoice-scenario;test-login-with-valid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Open chrome browser and Start Applciation",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter valid \"admin\" and valid \"admin23\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User should be login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "verify title",
  "keyword": "Then "
});
formatter.match({
  "location": "logic_invoic.open_chrome_browser_and_Start_Applciation()"
});
formatter.result({
  "duration": 9948576600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 15
    },
    {
      "val": "admin23",
      "offset": 33
    }
  ],
  "location": "logic_invoic.i_enter_valid_and_valid(String,String)"
});
formatter.result({
  "duration": 201765100,
  "status": "passed"
});
formatter.match({
  "location": "logic_invoic.user_should_be_login_successfully()"
});
formatter.result({
  "duration": 352518200,
  "status": "passed"
});
formatter.match({
  "location": "logic_invoic.verify_title()"
});
formatter.result({
  "duration": 9298200,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[Dashboard]\u003e but was:\u003c[Administration Login]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinition.logic_invoic.verify_title(logic_invoic.java:39)\r\n\tat ✽.Then verify title(cucumber.feature:7)\r\n",
  "status": "failed"
});
});