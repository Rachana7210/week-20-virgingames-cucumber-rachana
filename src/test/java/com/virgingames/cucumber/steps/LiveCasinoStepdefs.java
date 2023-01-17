package com.virgingames.cucumber.steps;

import com.virgingames.pages.LiveCasinoPage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LiveCasinoStepdefs {
    @Given("^I accepted cookies$")
    public void iAcceptedCookies() {
    }

    @Then("^I can see virgingame homepage$")
    public void iCanSeeVirgingameHomepage() {
        new LiveCasinoPage().acceptCookies();
    }

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on Live Casino tab$")
    public void iClickOnLiveCasinoTab() {
    }

    @Then("^I should see Live Casino page successfully$")
    public void iShouldSeeLiveCasinoPageSuccessfully() {
        new LiveCasinoPage().clickOnLogin();
    }
}
