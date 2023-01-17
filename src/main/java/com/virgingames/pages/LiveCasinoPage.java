package com.virgingames.pages;

import com.virgingames.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LiveCasinoPage extends Utility {
    private static final Logger log = LogManager.getLogger(LiveCasinoPage.class.getName());

    public LiveCasinoPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//label[contains(text(),'Accept')]" )
    WebElement cookies;

    @CacheLookup
    @FindBy(xpath = "//span[contains(text(),'Live Casino')]" )
    WebElement LiveCasino;

    public void acceptCookies(){
        clickOnElement(cookies);
    }

    public void clickOnLogin(){
        clickOnElement(LiveCasino);
    }
}
