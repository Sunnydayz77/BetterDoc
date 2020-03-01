# **BetterDoc**

Funny cheetah gif: https://gph.is/28PqX3U

But a Baby Yoda gif is much better: https://media.giphy.com/media/Wn74RUT0vjnoU98Hnt/giphy.gif

## Project Planning

<br>

### Overview

_**BetterDoc** is an app that details provider information to the user. Users can type in any provider's name, any location, type of insurance that the user may have, or provider specialty and the page will render further information. There is a basic information page under "Provider Information" and then the user can click the button to display detailed information such as practice addresses and specific insurance plans that are accepted. Better Doctor API was used for data retrieval. The app is responsive to laptops, tablets, and mobile versions. The app also ncludes hover ability over links, a loading gif that renders while searching for data, and a 404 page when links are mistyped._

<br>

### Wireframes

![https://marvelapp.com/dhj69hh](https://marvelapp.com/dhj69hh)

- Pre-project wireframe and interactive display on Marvel App

![https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fbetter-doc.netlify.com%2F&width=1366&height=768](https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fbetter-doc.netlify.com%2F&width=1366&height=768)

- Desktop Resource Index

![https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fbetter-doc.netlify.com%2F&width=1366&height=1024](https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fbetter-doc.netlify.com%2F&width=1366&height=1024)

- Tablet Resource Index

![https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fbetter-doc.netlify.com%2F&width=375&height=667](https://responsivedesignchecker.com/checker.php?url=https%3A%2F%2Fbetter-doc.netlify.com%2F&width=375&height=667)

- Mobile Resource Index

<br>

### MVP

_The **BetterDoc** MVP is to have an app that details provider information to the user based on name, location, insurances accepted, and provider specialty. The provider information tab would list doctor's names, their npi numbers, their locations, and their specialties. Each doctor would have a button for more information that links to a detailed container page._

<br>

#### Goals

-_Have a thoroughly developed README.md file._<br>
-_Have an interactice React app, built using create react app._<br>
-_Have detailed provider information to the user as the search via name, location, insurances accepted, or provider specialty._<br>
-_Utilize React Router._<br>
-_Have at least 6 separate, rendered components._<br>
-_Implement an organized and understandable React file structure._<br>
-_Utilize functional and class React components appropriately._<br>
-_Use Axios to consume data from an third party API, and render that data in the components._<br>
-_Use only React for DOM Manipulation._<br>
-_Have styling through CSS._<br>
-_Use flexbox or CSS Grid for rending and styling of provider information._<br>
-_Make sure that the design is scalable and responsive to mac, tablet, and mobile._<br>
-_Have proper indentation._<br>
-_Utilize high-quality, semantic variable names._<br>
-_Follow camelCase and kebab-case conventions._<br>
-_Remove unnecessary boilerplate React files and code._<br>
-_Remove all console.logs and commented out code when submitting project._<br>
-_Have GitHub commits every day._<br>
-_Host the BetterDoc app on Surge or Netlify._<br>

<br>

#### Libraries

|      Library      | Description                                                   |
| :---------------: | :------------------------------------------------------------ |
| React Router      | _React Router Library._                                       |
| CSS Tricks        | _For help while styling web app._                             |
| Better Docter API | _Third party API used to render data into components on app._ |
| StackOverflow     | _For help while writing functional and class components._     |
| Unsplash          | _Main header photo._                                          |
| GIPHY             | _For videos used on main page, loading spinner, and 404 page._|
| Netlify           | _For deployment of web app._                                  |

<br>

#### Data

|        API                        | Quality Docs? | Website                               | Sample Query                                                                                                       |
| :-------------------------------: | :-----------: | :------------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| Better Doctor API - Doctor Search |      yes      | _https://developer.betterdoctor.com/_ | _https://api.betterdoctor.com/2016-03-01/doctors?query=${searchQuery}&user_key=${API_KEY}_                         |
| Better Doctor API - Specialties   |      yes      | _https://developer.betterdoctor.com/_ | _https://api.betterdoctor.com/2016-03-01/specialties?fields=${searchQuery}&user_key=${API_KEY}_                    |
| Better Doctor API - Office Search |      yes      | _https://developer.betterdoctor.com/_ | _https://api.betterdoctor.com/2016-03-01/practices?name=${nameQuery}&location=${locationQuery}&user_key=${API_KEY}_|
<br>

#### Component Hierarchy

```
BETTER-DOC-PROJECT/
|__.env
|__.gitignore
|__package-lock.json
|__package.json
|__README.md
|__src/
      |__ App.js
      |__ App.css
      |__ index.js
      |__ index.css
  |__ components/
      |__ MainContainer.jsx
      |__ MainHeader.jsx
      |__ MainFooter.jsx
      |__ NoMatch.jsx
      |__ ProviderContainer.jsx
      |__ ProviderSearch.jsx
      |__ ProviderMiniInfo.jsx
      |__ ProviderDetails.jsx
      |__ SpecialtyContainer.jsx
      |__ SpecialtySearch.jsx
      |__ SpecialtyMoreInfo.jsx

```

<br>

#### Component Breakdown

|     Component        |    Type    | state | props | Description                                                                       |
| :------------------: | :--------: | :---: | :---: | :-------------------------------------------------------------------------------- |
|  Main Container      |   class    |   n   |   n   | _The front page contains all of the routing links_                                |
|  Main Header         | functional |   n   |   n   | _The header will contain the navigation and main artwork for the app._            |
|  Main Footer         | functional |   n   |   n   | _The footer will show info about me and a link to the Better Doctor API._         |
|  No Match            | functional |   n   |   y   | _404 page if users accidentally type in broken links._                            |
|  Provider Container  | class      |   y   |   y   | _Container for provider information._                                             |
|  Provider Search     | functional |   n   |   n   | _Search bar/button for provider information._                                     |
|  Provider MiniInfo   | functional |   n   |   y   | _Container for basic provider information, such as name, npi, and locations._     |
|  Provider Details    | functional |   n   |   y   | _Name, bio, practice locations, insurances accepted, and specialties of doctors._ |
|  Specialty Container | class      |   y   |   y   | _Main container for specialty information._                                       |
|  Specialty Search    | functional |   n   |   n   | _Search bar/button for specialty information._                                    |
|  Specialty More Info | class      |   n   |   y   | _Container for specialty definitions._                                            |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

> Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

#### Helper Functions

> Use this section to document all helper functions– generic functions that can be reused in other applications.

|  Function  | Description                                |
| :--------: | :----------------------------------------- |
| Capitalize | _Lorem ipsum dolor sit amet, consectetur._ |

<br>

### Post-MVP

> Use this section to document ideas you've had that would be fun (or necessary) for your Post-MVP. This will be helpful when you return to your project after graduation!

_Post MVP, I would create a third navigation link in the header that describes all of the various specialties that a doctor may have if users wish to understand more about the complexities of specialties in the medical system and if they're stuck on what to search for. I hope to also make a navigation tab that is specifically for doctor's offices near the user. This link would describe if the offices are accepting new patients as well as what insurances are accepted, phone numbers, and office hours. Post-post MVP, I plan to make a feature where users can login and save providers/practices so they can have an address book all in one place for future reference. There would also be helpful health quotes that would cycle through on the front page with an additional quotes API._ 

<br>

#### Post-MVP Goals

-_Have another navigation link that defines all of the various specialties that a doctor may have if users wish to understand more about the complexities of specialties in the medical system and are stuck on what to search for._<br>
-_Post another navigation tab that is specifically for practice locations near the user. This link would describe if the practices are accepting new patients as well as what insurances are accepted, phone numbers, and office hours._<br>
-_Create login capabilities so that users can "favorite" and save preferred provider information._<br>
-_Locate and use another API that renders health quotes and helpful information on the front page._<br>

<br>

#### Post-MVP Data

-_Specialty Search API endpoint from Better Doctor._<br>
-_Practice Search API endpoint from Better Doctor._<br>
-_Another API that renders health quotes and helpful information on the front page._<br>

<br>

#### SWOT Analysis
_Strengths going into the project include my design skills and thuroughness in completion of projects. I pride myself in being very detail oriented. Weaknesses and opportunities include learning more about how functions and classes are written in react. Threats include users not taking the happy path and writing in specifc providers in the address bar, which I can account for and create a fix for that during the project._


***

## Project Delivery

> The Delivery section should be expanded and revised as you work on your project.

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.

| Error                                                   | Resolution                                             |
| :------------------------------------------------------ | :----------------------------------------------------- |
| `app.js:34 Uncaught SyntaxError: Unexpected identifier` | Missing comma after first object in sources {} object. |

1.  My provider search is returning extraneous people/information. For instance, if I search for a provider by the name of "Smith" the search will return providers who don't have the name of "Smith", but have "Smith" listed in their bios somewhere.
2. The data for the specialties API seems to just return the entire list of specialty definitions. You aren't able to search to a specific definition. I will have to scale back my code to either just display all of the specialty information or code it so that it filters through the data after mapping through the data.

### Technologies Used

-_React_<br>
-_CSS_<br>
-_Better Doctor API_<br>
-_Flexbox_<br>
-_Responsive design that is scalable to laptop, tablet, and mobile_<br>
-_Includes hover ability over links_<br>
-_Loading gif renders while searching for data_<br>
-_404 page included when links are mistyped_<br>
-_Unsplash was used for images_<br>
-_Giphy was used for moving giphy images_<br>
-_Netlify was used for website hosting_<br>

### Link To Live Site

![https://better-doc.netlify.com/](https://better-doc.netlify.com/)

***