# Assignment 1 - ReactJS app.

Name: WENTAO WU

## Features.
 
 + Feature 1 -  A simple authentication system has been implemented. Users can access the authentication system by clicking on the top right corner of the page. On the page, the user is asked to log in by email address and password. If the user does not yet have an account, they can sign up via the Sign up button. Once logged in, the user sees their nickname in the top right hand corner of the page. After clicking on the nickname again, the user is taken to the logout page, which contains the user's nickname and email address, as well as a logout button. After clicking the logout button the user will be logged out.
 + Feature 2 - A movie page which contains a list of nowplaying movies is deploied. 
 + Feature 3 - The button and page of the watchlist are also completed. Now both upcoming and nowplaying movies can be added to the watchlist with the button successfully.
 + Feature 4 -  A complete cast page is also ready for display. The actor page, like the movie page, shows the information of the twenty acquired actors. Also the buttons under the actors card are combined credits, clicking on them will redirect you to a list of movies related to the actor.
 + Feature 5 - The actor detail page can be accessed by clicking on the photo on the actor card. Included in the page are the actor's photo, biography, birthday and other details.
 + Feature 6 - The siteheader has also been modified because there are too many films and cast pages on it. By using ant design, I divided the different pages into three categories and now they can be selected by using drop-down menus.


## Setup requirements (If required).

+ prepare firebase with creating a config file called firebaseConfig.js with firebase api and projectid in it.

+ npm i --save firebase reactfire@next -         
This statement is used to install a firebase dependency to use firebase authorization.

+ npx create-react-app antd-demo -      
This statement is used to automatically initialise a scaffold and install the necessary dependencies for the React project.


## API Data Model.

+ https://api.themoviedb.org/3/movie/now_playing - get a list of nowplaying movies
+ https://api.themoviedb.org/3/person/popular - get a list of popular actors
+ https://api.themoviedb.org/3/person/{person_id} - get the details of a specific actor
+ https://api.themoviedb.org/3/person/{person_id}/combined_credits - get a related credits list of a specific actor


## App Design.

### Component catalogue (If required).

![][stories]

### UI Design.


![][loginpage]
>A login button is displayed and an email and password are requested

![][signuppage]
>in the signup page, there is a sign up button. Nickname, email & password are requested.

![][logoutpage]
>In the logout page, you can see the email and nickname and the logout button

![][nowplaying]
>Twenty nowplaying films were shown in nowplaying page.

![][watchlistpage]
>Selected movies added to watch list.

![][actorpage]
>Twenty popular actors are shown on the actor page.

![][actordetail]
>Details of specific actors are shown on the actor details page.

![][combinedcredits]
>List of moives that is performed by the specific actor.

## Routing.

+ /login (public) - displays the login page.
+ /signup (public) - displays the signup page.
+ /movies/nowplayings - displays the nowplaying page.
+ /movies/watchlist - displays the watchlist page.
+ /actors/actor - displays the actor page.
+ /actors/:id - displays the actor detail page by actor id
+ /actors/combinedcredits/:id - display the combinedcredits of an actor by actor id

### Data hyperlinking.

![][authorization]
>Click the 'login' lead to the pages of authorization which include login page and signup page.

![][hyperlinkmovie]
>Move on the dropdown and click kind of movies lead to the different movie pages.

![][hyperlinkactor]
>Click 'actorpage' cause the display of a page  actor list.

![][hyperlinkprefer]
>Click 'prefers' lead to the prefered moive list selected by user.

![][hyperlinkcombined]
>Click the button 'Combined Credits' lead to the moive list that is performed by the actor.


## Independent learning (If relevant).

+ Firebase - firebase is a kind of BaaS(Backend as a Service) which helps application developers manage some simple back-end operations e.g. data storage, application analysis.
+ reference - https://firebase.google.cn/                https://blog.csdn.net/dfsgwe1231/article/details/107258662
+ Ant design - antd is a library of React UI components based on the Ant Design design system and is primarily used for developing enterprise-level middle and back office products.
+ refernce - https://ant.design/components/button-cn/
https://ant.design/components/dropdown-cn/ 
---------------------------------

# Assignment 1 - Agile Software Practice.

Name: WENTAO WU

## App Features.

![][authorization]
+ Authorization page: Displays texts and buttons for user to login,sign up or logout.

Tests: cypress/integration/login-page.spec.js

![][actorpage]
+ Actor page: Shows the list of actors. The 'Combined Credits' button turns to the related moives list of actor.

Tests: cypress/integration/actor-page.spec.js

![][actordetail]
+ Actor details page: Shows the details about an actor.

Tests: cypress/integration/actor-page.spec.js

![][nowplaying]
+ Nowplaying movie page: Show the list of nowplaying moive page. The 'add to Watchlist' button add the moive to the watchlist page.

Tests:cypress/integration/nowplaying-page.spec.js

## Code spliting
+ To make the project have a better performance and decrease the system stress, i do the code splitting by dynamic import the components.
                                                
## Testing.

Cypress Dashboard URL: https://dashboard.cypress.io/projects/ec4m78/runs?branches=%5B%5D&committers=%5B%5D&flaky=%5B%5D&page=1&status=%5B%5D&tags=%5B%5D&timeRange=%7B%22startDate%22%3A%221970-01-01%22%2C%22endDate%22%3A%222038-01-19%22%7D

+ Since the cypress told me " Plan Limit Reached: You've reached 108% of your test recordings  for this usage period." I create a new project in it but it seems not work. Whatever, the cypress dashboard url is here.
  

### Advanced Testing (If required).

+ cypress/integration/login-page.spec.js - test sign up with an existing account.
+ cypress/integration/login-page.spec.js - test when account is illegal.
+ cypress/integration/nowplaying-page.spec.js - test when filte by impossible conditions
---------------------------------

[loginpage]: ./public/loginpage.png
[signuppage]: ./public/signuppage.png
[logoutpage]: ./public/logoutpage.png
[nowplaying]: ./public/nowplaying.png
[watchlistpage]: ./public/watchlistpage.png
[actorpage]: ./public/actorpage.png
[actordetail]: ./public/actordetail.png
[combinedcredits]: ./public/combinedcreditspage.png
[stories]: ./public/storybook.png
[authorization]: ./public/hyperlinklogin.png
[hyperlinkmovie]: ./public/hyperlinkmovie.png
[hyperlinkactor]: ./public/hyperlinkactor.png
[hyperlinkprefer]: ./public/hyperlinkprefer.png
[hyperlinkwatchlist]: ./public/hyperlinkwatchlist.png
[hyperlinkcombined]: ./public/hyperlinkcombined.png
[codesplit]: ./public/codesplit
