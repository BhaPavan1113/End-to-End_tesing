const {test,request,expect} = require('@playwright/test');
const loginPayLoad={email:"siva123@gmail.com",password:"Siva@123"};
let eventhub_token;
test.beforeAll(async ({})=>{ 
 const apiContext = await request.newContext();

   const loginResponse = await apiContext.post("https://api.eventhub.rahulshettyacademy.com/api/auth/login",{
      data:loginPayLoad,
      headers:{
          "Content-Type":"application/json"
      }
   });
   expect(loginResponse.status()).toBe(200);
   expect(loginResponse.statusText()).toBe("OK");
   const loginResponseJson = await loginResponse.json();
   eventhub_token=loginResponseJson.token;
   console.log("Login successful; authentication token received.");
 
});

test("Event Hub", async({page})=>{
    await page.addInitScript(value=>{
      window.localStorage.setItem("eventhub_token",value);
    }, eventhub_token);
   await page.goto("https://eventhub.rahulshettyacademy.com/");
   await expect(page.locator("#nav-events")).toBeVisible();
   await page.locator("#nav-events").click();
   await page.getByRole('button',{name:'Add New Event'}).click();

   //events add
   await page.locator("#event-title-input").fill("Sports Event");
   await page.locator("#category").selectOption({label:"Sports", exact:true});
   await page.locator("#city").fill("Hyderabad");
   await page.locator("#venue").fill("Gachibowli Stadium");
   
   
});