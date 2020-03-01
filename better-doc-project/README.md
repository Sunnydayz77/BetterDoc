# **BetterDoc**

Funny cheetah gif: https://gph.is/28PqX3U

But a Baby Yoda gif is much better: https://media.giphy.com/media/Wn74RUT0vjnoU98Hnt/giphy.gif

## Project Planning

> – The Project Planning section should be completed for your project pitch with instructors.
> – To ensure correct Markdown, I recommend cloning this wiki and copy/pasting the raw template code.

<br>

### Overview

_**BetterDoc** is an app that details provider information to the user. Users can type in any provider's name, any location, type of insurance that the user may have, or provider specialty and the page will render further information. There is a basic information page under "Provider Information" and then the user can click the button to display detailed information such as practice addresses and specific insurance plans that are accepted. Better Doctor API was used for data retrieval. The app is responsive to laptops, tablets, and mobile versions. The app also ncludes hover ability over links, a loading gif that renders while searching for data, and a 404 page when links are mistyped._

<br>

### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views.

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

> The Minimum Viable Product should be a well-planned and easily-communicated product, ensuring that the client's deliverable will be achievable and meet specifications within the time frame estimated.

_The **BetterDoc** MVP is to have an app that details provider information to the user based on name, location, insurances accepted, and provider specialty. The provider information tab would list doctor's names, their npi numbers, their locations, and their specialties. Each doctor would have a button for more information that links to a detailed container page._

<br>

#### Goals

-_Have a thoroughly developed README.md file._
-_Have an interactice React app, built using create react app._
-_Have detailed provider information to the user as the search via name, location, insurances accepted, or provider specialty._
-_Utilize React Router._
-_Have at least 6 separate, rendered components._
-_Implement an organized and understandable React file structure._
-_Utilize functional and class React components appropriately._
-_Use Axios to consume data from an third party API, and render that data in the components._
-_Use only React for DOM Manipulation._
-_Have styling through CSS._
-_Use flexbox or CSS Grid for rending and styling of provider information._
-_Make sure that the design is scalable and responsive to mac, tablet, and mobile._
-_Have proper indentation._
-_Utilize high-quality, semantic variable names._
-_Follow camelCase and kebab-case conventions._
-_Remove unnecessary boilerplate React files and code._
-_Remove all console.logs and commented out code when submitting project._
-_Have GitHub commits every day._
-_Host the BetterDoc app on Surge or Netlify._

<br>

#### Libraries

> Use this section to list all supporting libraries and their role in the project.

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   React Router   | _Lorem ipsum dolor sit amet, consectetur._ |
| React SemanticUI | _Lorem ipsum dolor sit amet, consectetur._ |
|   React Spring   | _Lorem ipsum dolor sit amet, consectetur._ |

Technologies used: 
-React
-CSS
-Better Doctor API
-Flexbox
-Responsive design that is scalable to mac, tablet, and mobile
-Includes hover ability over links
-loading gif renders while searching for data
-404 page included when links are mistyped
-Unsplash was used for images
-Giphy was used for moving giphy images
-Surge was used for website hosting


<br>

#### Data

> Use the Data Section to define the API(s) you will be consuming for your project, inluding sample URL queries.

|        API                        | Quality Docs? | Website                               | Sample Query                                                                                                       |
| :-------------------------------: | :-----------: | :------------------------------------ | :----------------------------------------------------------------------------------------------------------------- |
| Better Doctor API - Doctor Search |      yes      | _https://developer.betterdoctor.com/_ | _https://api.betterdoctor.com/2016-03-01/doctors?query=${searchQuery}&user_key=${API_KEY}_                         |
| Better Doctor API - Specialties   |      yes      | _https://developer.betterdoctor.com/_ | _https://api.betterdoctor.com/2016-03-01/specialties?fields=${searchQuery}&user_key=${API_KEY}_                    |
| Better Doctor API - Office Search |      yes      | _https://developer.betterdoctor.com/_ | _https://api.betterdoctor.com/2016-03-01/practices?name=${nameQuery}&location=${locationQuery}&user_key=${API_KEY}_|
<br>

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app.

```
src
|__ assets/
      |__ data-tests
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
      |__ Hero.jsx
      |__ Ipsum.jsx
      |__ Lorem.jsx
      |__ CTA.jsx
      |__ Footer.jsx
```

<br>

#### Component Breakdown

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

<br>

#### Component Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

<br>

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evalute possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

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

-_Have another navigation link that defines all of the various specialties that a doctor may have if users wish to understand more about the complexities of specialties in the medical system and are stuck on what to search for._
-_Post another navigation tab that is specifically for practice locations near the user. This link would describe if the practices are accepting new patients as well as what insurances are accepted, phone numbers, and office hours._
-_Create login capabilities so that users can "favorite" and save preferred provider information._
-_Locate and use another API that renders health quotes and helpful information on the front page._

<br>

#### Post-MVP Data

-_Specialty Search API endpoint from Better Doctor._
-_Practice Search API endpoint from Better Doctor._
-_Another API that renders health quotes and helpful information on the front page._

<br>

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

### Link To Live Site

![https://better-doc.netlify.com/](https://better-doc.netlify.com/)

***












Component Heirarchy: 
  -Main page
    |
    -->Front page with routing links (function and class components)

  -Provider information section
    |
    -->search bar/button and container for provider information(utilizing a class component that passes down props to the detailed provider information container)

  -Detailed Provider Information Container
    |
    -->Name, speciality, location, insurances accepted, and bio (utilizing props from the class component in the provider information section)

  -Specialty definitions
    |
    -->search bar/button that displays all specialty information(utilizing a function component)



SWOT Analysis: 
Strengths going into the project include my design skills and thuroughness in completion of projects. I pride myself in being very detail oriented. Weaknesses and opportunities include learning more about how functions and classes are written in react. Threats include users not taking the happy path and writing in specifc providers in the address bar, which I can account for and create a fix for that during the project.

