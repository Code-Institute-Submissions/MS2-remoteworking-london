# Remote London

## About this Site

This site will provide users with a directory of local listings in which users can visit and work from remotely.

The site is primarily designed for those users who either as Freelancers, need a working environment they can meet with colleagues and clients, or for those working from home full-time since lockdown during the pandemic, need a suitable place to work for the day with spaces to make calls.


## User Experience (UX)
The primary purpose of this site is to quickly provide users with information that they are likely to use in conjunction with wider research. Since this site will likely be one of many similar sites they visit, the user needs to quickly learn what content the site provides and convince them that reading further is worth their attention.

In order to achieve this, the site is built with simplicity in mind - a simple landing page that clearly sets out the purpose, followed by a single directory listing page, that also allows the user to chose how they view (via list or map) and quickly search for and filter listings that are most relevant to them (through keyword search and area and tag filters) 

### User Stories
 
- #### First time visitors
    - As a first time visitor, I want to quickly decide whether spending more time on this site will be worthwhile in answering my needs.
    - I am only interested in listings that are within suitable distance to me.
    - I will likely use the content from this site and others to form a decision on the best location to visit, so my time on this site will be limited.
- #### Returning visitors
    - As a returning visitor, I have already seen the content from the site on the initial visit - I am only looking for new listings.
    - Part of the reason I am returning may be to give feedback on a listing after visiting their location.
- #### Freelancers who work irregular or part time hours
    - As a Freelancer, my day will likely be split between multiple projects and clients. I don't always need a location to work from for a full day, so I want to see listings that do not require a full day booking.
    - I am looking for locations that will allow me to meet clients and collaborate for a few hours at a time.

- #### A full time employee who cannot work from home comfortably
    - As a full time employee working from home due to the pandemic, I am solely interested in listings that I know I can work from for the full day. 
    - I want to see only the listings that will have quiet places I can make calls with a good internet connection
- #### Location owners
    - As someone who owns a location users can work remotely from, I want to add my listing to the site with ease in order to promote my business.
    - I want to see what other listings are offering in order to learn more about the site users and tailor my listing content accordingly. 
- #### Site owner
    - As the site owner, I want to ensure that information is accurate and user feedback is received, to improve value to the user.
    - I want users to share the site content with others to drive traffic to site.

<br>

### <ins><b>Design</b></ins>
The overall design for the Remote London uses a clear, clean layout with ease of use in mind - bold header areas with a clear directory listing area and contact form.

#### Typography
The Google Font "Poppins" is used as an easy to read, sans-serif font that compliments the contemporary, straight lines of the layout and design. It's heavier weight is impactful and quickly grabs the users eye when used as headings.

#### Colours
Colours on Remote London have been selected based on the initial emotional response a user can be expected to have, according to color theory guides such as <a href="https://userpeek.com/blog/what-is-color-psychology-in-ux/" target="_blank">User Peek</a>.
- The blue footer, overlay on headers and accent within the body evokes a feeling of stability and confidence
- The lighter, slightly pastel orange with the accompanying pastel teal promotes a feeling of inspiration and creativity, but without the agression that can often be felt with darker, warmer colours. 


#### Imagery
Images within the primary site body are used to compliment the colour palette in the rest of the site, whilst also clearly identifying to the user what the site is about. Examples of this include: 
- The header on the home page shows a cityscape of London, clearly focussing user attention on London as the core reason for the site. The darker blue gradient overlay on the top of the image is used to both improve visibility of the the navbar, but also introduce the blue colour accent at the earliest opportunity.
- The header on the location listing page shows again a cityscape of London, but with a warmer tone, complimenting the pastel orange colours on the rest of the site.

<br>

### **Wireframes**
- View the <a href="" target="_blank">Desktop wireframe here</a>.
- View the <a href="" target="_blank">Tablet wireframe here</a>.
- View the <a href="" target="_blank">Mobile wireframe here</a>.

<br>

## **Testing**

### **Code Validation**
To ensure accessibility by all modern browsers and differing devices and users, the Remote London website has been validated on W3C HTML, W3 Jigsaw CSS and JS Hint validators. Whilst the initial codebase passed validation, the third party libraries such as FontAwesome and Bootstrap have presented common errors and warnings. See further details below:
- ### W3C HTML Results
    - dddddd
- ### W3 CSS Results
    - 
- ### JS Hint Results
    - 

> insert screenshot here!

### **User Story Testing**
> user story testing to add

### **Lighthouse Testing**
> add lighthouse testing screens

### **Responsiveness**
> add mobile views 


### **Fixed Bugs**
- Google API & Location listing (google_maps_init.js & location_listing.js)
    - Items not filtering by date order 
        - Since the code is written to only pull the data from Google on the initial page load, to increase site performance and reduce data quota, a second Object array is now created after the Google data is pulled.
        - The 'listingObjectsCombined' array combines the listing content, posted date and location to allow for text based search and filtering of date and location based on an active button, with content already existing within the DOM.
        - Following a code review during testing in the final stage of this project, the code was further refactored to use the filter() method to sort Objects using an if/else statement when a button is active, vs a previous structure that created a new array for each area of London ('listingObjectNorth' ... etc).
    - Pagination causing array to sort and filter for only the items shown within that page tab, not based on whole dataset.
        - The initial build was structured prior to the pagination implementation, resulting in the slice() method and subsequent sort() method applied to the array to determine which listings to show on each page, sorting the objects only on the current for loop (i.e Objects 4, 5, 6 were sorted by date, but not 1 - 6). 
        - This bug was fixed by creating a function flow in initList() that each time a sort or filter button was toggled, would clear the previous listings and work through the function to check the criteria based on which buttons were 'active', and unhide the corresponding listing. 
        - Since the data is already pulled from Google and pushed to a new Object array on initial page load, this function now simply hides or unhides listings already loaded into the DOM, making the response time instant.
        - After lots of research on the most effective way to implement this, it was [Tyler Potts](https://www.youtube.com/channel/UCBBGM84ZOs7z5jpTQAaZ_Hg) on YouTube that provided the tutorial that allowed me to fix the above. The pagination tutorial [can be found here](https://www.youtube.com/watch?v=IqYiVHrO2U8).
    - Frequent Google API http request errors on random page loaded
        - This bug caused the 'content' variable within 'initMap()' function to return undefined which resulted in only partial or no return of places data from Google.
        - The error was tested repeatedly whilst changing the script load orders as well as applying async and defer, but the pattern still appeared randomised.
        - After narrowing down the issue to possibly being a result of an inconsistent load time on the Google request, causing location_listing.js to attempt to call data from a script that had not yet run, I decided to use jQuery to append the last script to the <head> tag only after the page had loaded (the answers on [this StackOverflow thread](https://stackoverflow.com/questions/19737031/loading-scripts-after-page-load) guided me on this). 
        - Whilst loading location_listing.js only after the page had loaded helped with the issue, it was still occuring intermittently. Throught further testing, I discovered that the issue is likely caused but the Google API request attempting to run a callback function (initMap()) from a script that may not have loaded at that point. 
        - Having now positioned the Google API request at the bottom of the body, this appears to have dramatically improved this issue, as the initMap() function exists before the script attempts the Google request.
        - It appears that this issue can still occur if there are too many requests within a short span of time from the same session (i.e continuously reloading the page), however I understand this to be expected behaviour.
    - Jumping / flickering of page structure on page load caused by jQuery append() adding items to existing divs that load at different times.
        - This was an expected issue when using javascript to manipulate the HTML on the page, since the scripts would load at different speeds to the HTML in the page. 
        - To fix this issue and improve user experience, I added a loading screen animation with the CSS transform property to continuously run until the full page is loaded where javascript is altering the HTML (index.html and locations.html).
    - Map and list overlay when opening sidebar would remain / disappear early if too many clicks
        - The overlays that appear behind the 'more info' sidebar would frequently become out of sync with the sidebar as their styles were adjusted independently from one another.
        - I have since refactored the code and used jQuery's existing fadeOut() method to show and hide a page-wide overlay, which functions much smoother.

- Deployment & Site-wide
    - Footer not sticking to bottom of page when content height in body is less than 100vh
        - The bug was first discovered on the 'About Us' supporting page, whereby only a small paragraph of text existed, the footer would sit at the bottom of the last div.
        - This has now been remedied by creating a footer-wrapper, to which the footer tag can have an absolute position, relative to the wrapper.
        - The wrapper is then set to have a min-height of the footer, and a margin-top of auto to push the wrapper to the bottom of the body (which has a min-height of 100vh))
    - Broken image file path when deploying to GitHub Pages
        - This bug has been quickly fixed by correcting the extra '.' in the root file path in links. Images now direct to './' not '../' which has resolved the issue.
    - Search function on homepage header returns 404 instead of locations page
        - This has now been fixed, again this was due to an incorrect file path when deploying to GitHub Pages.
        - The search input adds a query string to the end of the locations.html href, from which an Immediately Invoked Function Expression splits this URL string when locations.html loads, in order to get the query. 
        - The root path of the window.location.href was set incorrectly, with a '.' at the beginning that was not required.
    - Click to scroll to top button not functioning
        - After many iterations of code to create scroll to top function using jQuery, I discovered through [this thread in StackOverflow](https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript), that the DOM must be loaded before the jQuery scrollTop() method will work. 




### **Known Bugs**


## **Features**






## **Languages & Frameworks**

## **Deployment**
> how this was deployed to github pages

> how to run this locally

### Issue Log:
 - Quota limit within same page causing places to not render - Google API
 - Sorting by date changes on each request - suggest pushing to new array and serving up this data?





 ### Credit:
 - cssgradient.io
- Indirect snap-scroll support Stack Overflow: "Luke" https://stackoverflow.com/questions/60724786/why-is-my-simple-css-scroll-snap-not-working 

 - location header Photo by Alex Chistol from Pexels - https://www.pexels.com/photo/luminous-ferris-wheel-in-modern-city-district-on-river-bank-at-night-3835461/
    - Pixabay: https://www.pexels.com/photo/architecture-bay-boats-bridge-372470/ 
    - Photo by Chait Goli from Pexels https://www.pexels.com/photo/white-and-brown-sailing-ship-1796715/
    - Image by <a href="https://pixabay.com/photos/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=945497">Free-Photos</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=945497">Pixabay</a>
    - arial - <span>Photo by <a href="https://unsplash.com/@jaanus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jaanus Jagomägi</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span> 
    -  london eye wide angle <span>Photo by <a href="https://unsplash.com/@arkadiuszradek?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Arkadiusz Radek</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    - arial 2 - <span>Photo by <a href="https://unsplash.com/@giamboscaro?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Giammarco Boscaro</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
    - css loader - https://www.w3schools.com/howto/howto_css_loader.asp 
    - emailjs lesson in CI  