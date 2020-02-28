#BetterDoc

Title: BetterDoc

Funny cheetah gif: https://gph.is/28PqX3U

But a Baby Yoda gif is much better: https://media.giphy.com/media/Wn74RUT0vjnoU98Hnt/giphy.gif

Decription: BetterDoc is an app that details provider information to the user based on name, location, insurances accepted, and provider specialty. The provider information tab will just list doctor's names and their locations along with a button for more information that links to a detailed container page. There will also be a third navigation link that basically describes all of the various specialties that a doctor may have if users wish to understand more about the complexities of specialties in the medical system and are stuck on what to search for. Post MVP, I hope to make a navigation tab that is specifically for practice locations near the user. This link would describe if the practices are accepting new patients as well as what insurances are accepted, phone numbers, and office hours. Post-post MVP, I plan to make a feature where users can login and save providers/practices so they can have an address book all in one place for future reference. I would also like to locate another API that would display health quotes and helpful information on the front page.

Wireframes: Interactive display on Marvel App --> https://marvelapp.com/dhj69hh

Component Heirarchy: 
  -Main page
    |
    -->About section and health quote (function components)

  -Provider information section
    |
    -->search bar/button and container for provider information(utilizing a class component that passes down props to the detailed provider information container)

  -Detailed Provider Information Container
    |
    -->Name, speciality, location, insurances accepted, and bio (utilizing props from the class component in the provider information section)

  -Specialty definitions
    |
    -->search bar/button that displays all specialty information(utilizing a function component)


API: BetterDoctor API -- > https://developer.betterdoctor.com/

MVP:
-Have a thoroughly developed README.md file. 
-Have an interactice React app, built using create react app.
-Have detailed provider information to the user as the search via name, location, insurances accepted, or provider specialty. 
-Have another navigation link that defines all of the various specialties that a doctor may have if users wish to understand more about the complexities of specialties in the medical system and are stuck on what to search for.
-Utilize React Router.
-Have at least 6 separate, rendered components.
-Implement an organized and understandable React file structure.
-Utilize functional and class React components appropriately.
-Use Axios to consume data from an third party API, and render that data in the components. 
-Use only React for DOM Manipulation.
-Have styling through CSS.
-Use flexbox or CSS Grid for rending and styling of provider information.
-Make sure that the design is scalable and responsive to mac, tablet, and mobile.
-Have proper indentation.
-Utilize high-quality, semantic variable names.
-Follow camelCase and kebab-case conventions.
-Remove unnecessary boilerplate React files and code.
-Remove all console.logs and commented out code when submitting project.
-Have GitHub commits every day.
-Host the BetterDoc app on Surge.


Post-MVP:
-Post another navigation tab that is specifically for practice locations near the user. This link would describe if the practices are accepting new patients as well as what insurances are accepted, phone numbers, and office hours.
-Locate and use another API that renders health quotes and helpful information on the front page.
-Create login capabilities so that users can "favorite" and save preferred provider information.


SWOT Analysis: 
Strengths going into the project include my design skills and thuroughness in completion of projects. I pride myself in being very detail oriented. Weaknesses and opportunities include learning more about how functions and classes are written in react. Threats include users not taking the happy path and writing in specifc providers in the address bar, which I can account for and create a fix for that during the project.


Technologies used: 
-React
-CSS
-Better Doctor API
-Flexbox
-Responsive design that is scalable to mac, tablet, and mobile
-Includes hover ability over links
-loading gif renders while searching for data
-404 page included when links are mistyped
-links in the footer open up in a new page instead of rendering over the NutriMate website
-Unsplash was used for images
-Giph was used for moving giphy images
-Surge was used for website hosting

Relevant instructions for viewers: 
BetterDoc is an app that details provider information to the user. You can type in any provider's name, any location, type of insurance that the user may have, or provider specialty and the page will render further information. There is a basic information page under "Provider Information" and then the user can click the button to display detailed information such as practice addresses and specific insurance plans that are accepted.

Unsolved problems: 



Link to live site: 
