$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LiveCasino.feature");
formatter.feature({
  "line": 1,
  "name": "LiveCasino Test",
  "description": "As a user I want to click on Live Casino test on Virgingames website",
  "id": "livecasino-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5203342300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I accepted cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I can see virgingame homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "LiveCasinoStepdefs.iAcceptedCookies()"
});
formatter.result({
  "duration": 109098800,
  "status": "passed"
});
formatter.match({
  "location": "LiveCasinoStepdefs.iCanSeeVirgingameHomepage()"
});
formatter.result({
  "duration": 131744700,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should navigate to Live Casino page successfully",
  "description": "",
  "id": "livecasino-test;user-should-navigate-to-live-casino-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Live Casino tab",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I should see Live Casino page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "LiveCasinoStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 75100,
  "status": "passed"
});
formatter.match({
  "location": "LiveCasinoStepdefs.iClickOnLiveCasinoTab()"
});
formatter.result({
  "duration": 35500,
  "status": "passed"
});
formatter.match({
  "location": "LiveCasinoStepdefs.iShouldSeeLiveCasinoPageSuccessfully()"
});
formatter.result({
  "duration": 107108000,
  "status": "passed"
});
formatter.after({
  "duration": 184300,
  "status": "passed"
});
});