package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class logic_invoic {
	public static WebDriver driver;
	@Given("^Open chrome browser and Start Applciation$")
	public void open_chrome_browser_and_Start_Applciation() throws Throwable {
		System.setProperty("webdriver.chrome.driver","C:\\chromedriver.exe");
		driver = new ChromeDriver();
		String baseUrl = "http://localhost/LogicInvoice/upload/admin/";
		driver.get(baseUrl);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}

	@When("^I enter valid \"([^\"]*)\" and valid \"([^\"]*)\"$")
	public void i_enter_valid_and_valid(String username, String password) throws Throwable {
		driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/input[1]")).sendKeys(username);
		driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/form[1]/div[2]/div[1]/input[1]")).sendKeys(password); 
	}

	@Then("^User should be login successfully$")
	public void user_should_be_login_successfully() throws Throwable {
		driver.findElement(By.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/form[1]/button[1]")).click();   
	}

	@Then("^verify title$")
	public void verify_title() throws Throwable {
		Assert.assertEquals("Dashboard",driver.getTitle());
		System.out.println("login successful");
		driver.close();
	}

	@Then("^close browser$")
	public void close_browser() throws Throwable {

	}

}
