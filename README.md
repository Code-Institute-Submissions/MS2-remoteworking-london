# Remote London

![Remote London homepage responsiveness](./documentation/screenshots/home_responsive.png)
<br><br>
![Remote London locations responsiveness](./documentation/screenshots/locations_responsive.png)

## About this Site

This site will provide users with a directory of local listings in which users can visit and work from remotely.

The site is primarily designed for those users who either as Freelancers, need a working environment they can meet with colleagues and clients, or for those working from home full-time since lockdown during the pandemic, need a suitable place to work for the day with spaces to make calls.

[View the live site here](https://bradleyhc.github.io/MS2-remoteworking-london/)


## Contents

## - [User Experience (UX)](#user-experience-ux)
- [User Stories](#user-stories)   
- [Design](#design)
- [Typography](#typography)
- [Colours](#colours)
- [Imagery](#imagery)
- [Wireframes](#wireframes)
## - [Features](#features)
- [Features to add in Future Releases](#features-to-add-in-future-releases)   
## - [Technologies & Tools Used](#technologies-&-tools-used)
## - [Testing](#testing)
- [Code Validation](#code-validation)
- [User Story Testing](#user-story-testing)   
    - [First Time Users](#first-time-users)
    - [Returning Visitors](#returning-visitors)
    - [Freelancer Users](#freelancers-who-work-irregular-or-part-time-hours)
    - [Location Users](#location-users)
    - [Site Owner](#site-owner)
- For Lighthouse, Responsive, Browser, Accessibility and Bugs testing - see [complete testing documentation](./documentation/testing-documentation.md)
## - [Deployment](#deployment)
## - [Credits](#credits)

<br>

---

<br>

## User Experience (UX)
The primary purpose of this site is to quickly provide users with information that they are likely to use in conjunction with wider research. Since this site will likely be one of many similar sites they visit, the user needs to quickly learn what content the site provides and convince them that reading further is worth their attention.

In order to achieve this, the site is built with simplicity in mind - a simple landing page that clearly sets out the purpose, followed by a single directory listing page, that also allows the user to choose how they view (via list or map) and quickly search for and filter listings that are most relevant to them (through keyword search and area and tag filters) 

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

<br>

### **Design**
The overall design for the Remote London uses a clear, clean layout with ease of use in mind - bold header areas with a clear directory listing area and contact form.

#### Typography
The Google Font "Poppins" is used as an easy to read, sans-serif font that compliments the contemporary, straight lines of the layout and design. It's heavier weight is impactful and quickly grabs the users eye when used as headings.

#### Colours
Colours on Remote London have been selected based on the initial emotional response a user can be expected to have, according to color theory guides such as <a href="https://userpeek.com/blog/what-is-color-psychology-in-ux/" target="_blank">User Peek</a>.
- The blue footer, overlay on headers and accent within the body evokes a feeling of stability and confidence
- The bold orange with the accompanying pastel teal promotes a feeling of inspiration and creativity, but without the agression that can often be felt with darker colours. 


#### Imagery
Images within the primary site body are used to compliment the colour palette in the rest of the site, whilst also clearly identifying to the user what the site is about. Examples of this include: 
- The header on the home page shows a cityscape of London, clearly focussing user attention on London as the core reason for the site. The darker blue gradient overlay on the top of the image is used to both improve visibility of the the navbar, but also introduce the blue colour accent at the earliest opportunity.
- The header on the location listing page shows again a cityscape of London, but with a warmer tone, complimenting the pastel orange colours on the rest of the site.

<br>

### **Wireframes**
- View the [Desktop wireframe here](./documentation/wireframes/wireframes-desktop.pdf).
- View the [Tablet wireframe here](./documentation/wireframes/wireframes-tablet.pdf).
- View the [Mobile wireframe here](./documentation/wireframes/wireframes-mobile.pdf).

<br>

---

<br>

## **Features**
- Location Search from homepage - this feature allows users to search the directory from the homepage by entering a search query in the text input in the header section. Submitting the search query will return all results on the 'Location' page where the query matches any string of text within the name, or content of the listing.
- Most recent listings on homepage - this feature enables users to quickly see if there are new listings on the site, but viewing the 'Our Latest Additions' section on the homepage.
- Instant listing filter without page load - as the data is loaded into the page when the DOM is loaded, the listings are filtered by hiding and unhiding results based on criteria, versus triggering a new HTTP request each time, requiring a page reload. The additional information from Google is only called when a user clicks on 'read more' on a listing, allowing more listings to be shown, whilst remaining under the 5 result limit that Google imposes.
- Filter listings by area of London - on the 'Locations' page, users are able to filter the listings based on the area of london. By simply clicking one of the area buttons, the results will immediately hide all results that do not meet the criteria.
- Filter listings by most recent or oldest posts - users can sort the listings on the 'Locations' page by clicking 'Latest' or 'Oldest' in the filter section.
- Display listings in a list view or map view - Users can select how they wish to view the listings by clicking either the list or map icon buttons at the bottom of the filter section. On hover, a tooltip provides guidance on what the buttons do.
- View and filter listing markers on map - the above filters are available to users on the map view also, with the markers hidden and unhidden based on the search criteria. If the user enters a text search query, the view will default back to the list view to show more detailed information.
- On the 'more info' sidebar, users can view Google reviews of locations and click button to view location in google maps.
- The site is responsive on all devices from mobile to desktop. See the 'Responsiveness' testing section in [further testing documentation](./documentation/testing-documentation.md). 

### **Features to add in future releases**
- Social sharing of each listing to social media sites.
- User rating system for each listing based on criteria (rating for coffee quality, cost, atmosphere etc).
- User frontend submission of listing with admin moderation. 
- User testimonials on listings. 

<br>

---

<br>

## **Technologies & Tools Used**
The core codebase for the Remote London website is created using HTML5, CSS3 and Javascript. In addition to these core languages, a number of frameworks, libraries and APIs were used to create the initial release. A full list of these are shown below:
- [HTML5](https://html.spec.whatwg.org/multipage/) - is used as the core language to create the Document Object Model (DOM).
- [CSS3](https://www.w3.org/Style/CSS/specs.en.html) - is used to style the HTML elements. 
- [Javascript](https://www.javascript.com/) - is used to manipulate the DOM elements and change styling based on a number of functions in the site.
- [jQuery](https://jquery.com/) - library is used to extend the vanilla Javascript functionality and efficiently manipulate DOM elements both with IIFE functions and function declarations.
- [Google Places API](https://cloud.google.com/maps-platform/places) - has been used to pull place information from Google using the place ID, into the 'more info' sidebar, when a user clicks 'read more' on a listing.
- [EmailJS](https://emailjs.com) - used as an API to send an email from the contact form on 'Contact' page and return an auto-reply to the user.
- [Bootstrap](https://getbootstrap.com/) - a frontend framework used to create the base for styling the layout and elements on the page.
- [GitHub](https://github.com) - used for code version control and hosting. 
- [GitHub Pages](https://pages.github.com/) - used to deploy to a production environment accessible by users.
- [GitPod](https://gitpod.io/) - browser based code editor used to write, edit and commit code directly to GitHub. 
- [Tiny PNG](https://tinypng.com/) - an image lossless compression tool used to reduce the site image assets.
- [Balsamiq](https://balsamiq.com) - a wireframe creator used to create the mobile, desktop and tablet wireframes in the section above.
- [CSS Gradient](https://cssgradient.io) - a tool used to create the background colour gradients found on the site, such as the header, footer and buttons.
- [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools) - used for debugging of JS, CSS and HTML.
- [Jigsaw W3 Validator](https://jigsaw.w3.org/css-validator/) - CSS validation tool used to test quality of CSS code.
- [W3 HTML Validator](https://validator.w3.org/) - used to validate and check quality of HTML on site.
- [JS Hint](https://jshint.com/) - used to validate Javascript code and flag errors in syntax.
- [Am I Responsive](http://ami.responsivedesign.is/) - used to generate site images on various devices used in hte header section of this README.md


<br>

---

<br>

## **Testing**

### **Code Validation**
To ensure accessibility by all modern browsers and differing devices and users, the Remote London website has been validated on W3C HTML, W3 Jigsaw CSS and JS Hint validators. Whilst the initial codebase passed validation, the third party libraries such as FontAwesome and Bootstrap have presented common errors and warnings. See further details below:
- ### W3C HTML Results
    - All HTML pages have been validated through the official W3C validator and now return no errors or warnings.
- ### W3 CSS Results
    - All HTML pages have been validated through the Jigsaw W3 validator and whilst there are no errors flagged in the style.css file, third party css libraries are returning common errors and warnings:
        - Bootstrap.min.css returns minimal errors with the description 'Property doesn't exist'. These errors [can be viewed here](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fbradleyhc.github.io%2FMS2-remoteworking-london%2Flocations.html&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en).
        - In addition to Bootstrap, there are a number of warnings only, from FontAwesome and the local Style.css. The style.css file contains the below warnings:
            - Unknown vendor extension for 'width: -webkit-fill-available' - this is used to ensure the div uses all available width on browsers where this is compatible.
            - Same border colour as background - this is a decision to ensure that the buttons are hovered onto, the button size doesn't increase by the additional pixel on each side, making the transition smoother. 
- ### JS Hint Results
    - With the exception of location_listing.js, all files return common errors as expected when submitted without context. For example:
        - $ symbol is undefined because jquery is not present in the validation.
        - initMap in google_maps_init.js is flagged as an unused variable as it is only called when the DOM is loaded via a callback.
    - Location_listing.js returns the above unavoidable jquery errors, but also flags two instances where the Google object event listener is called within a for each loop  - this is required in this structure in order to successfully filter the map markers and update the infowindow on 'click' of the respective marker. 
    - For screenshots and full details on the JS Hint results, view the [further testing documentation](./documentation/testing-documentation.md)
    

### **User Story Testing**

- #### First time visitors
    - As a first time visitor, I want to quickly decide whether spending more time on this site will be worthwhile in answering my needs.
        - This is accomplished by the immediate indication on the index.html page what the site content is about with the headline 'Find remote working locations near you' and the background image of London.
        - This, coupled with the brand logo 'Remote London' clearly signifies that this site has been created to show information on where to work.
        ![Homepage screenshot](./documentation/screenshots/pages/homepage.png)
    - I am only interested in listings that are within suitable distance to me.
        - The site currently clearly states that the listings will cover the London area only. 
        - Whilst not yet on the site, future releases will include geolocation of the user and the ability to filter locations based on the distance from the user.
        - Users can filter the listings that are shown on the locations page by clicking one of the five 'area buttons'. 
            - Clicking on North, South, East or West will only return results that have those values in the 'area-tag' div.
            <br><img src="./documentation/screenshots/features/filter-by-area.png" height="350" alt="Filter by area">
    
    - I will likely use the content from this site and others to form a decision on the best location to visit, so my time on this site will be limited.
        - The site clearly pushes users to a single listings page through 'call to action' search inputs and listing cards on the homepage. 
        - Once on the listings page, information is clearly laid out and easy to read. The user is able to quickly see which listings might be worth looking into, and more information can be found by clicking on the 'view website' button on the more information sidebar.
        ![Latest additions feature](./documentation/screenshots/features/latest-additions.png)
- #### Returning visitors   
    - As a returning visitor, I have already seen the content from the site on the initial visit - I am only looking for new listings.
        - The listings page allows the user to sort the listings by date they were posted to the site. This will enable returning visitors to quickly see what has been posted recently since they were last on the site.
        - The homepage also clearly outlines the most recent additions in the second section, below the fold. A returning visitor would quickly be able to see if there are new listings by comparing these listing cards to those that were shown on their last visit.
        ![Sort by date](./documentation/screenshots/features/sort-by-date.png)
    - Part of the reason I am returning may be to give feedback on a listing after visiting their location.
        - The user can easily navigate to the 'contact' page and submit a quick message to the site owner. Form validation is in place to prevent spam messaging from automated bots.
            - The form can be tested by entering numerical information in the 'first name' and 'last name' fields. On submit, the form should prevent posting and return an error notice to users.
            - The email field validation can also be tested by entering a string without an '@' symbol. If the user clicks 'submit' the form will not post and return field validation error to the user.
            - The subject, message and terms fields are also set to required. This can be tested by attempting to submit the form without these fields completed. The form will not submit and return a 'field required' error to the user.
            - Once the 'first/last name' fields contains only alpha characters and the email field contains the '@' symbol, the form will successfully submit, showing the 'thank you' page.
           <a name="form-flow"></a>

            <img src="./documentation/screenshots/testing/must-be-alpha-fname.png" alt="First name must be alpha" width="350">
            <img src="./documentation/screenshots/testing/must-be-alpha-lname.png" alt="Last name must be alpha" width="350">
            <br><img src="./documentation/screenshots/testing/email-req.png" alt="Valid email is required" width="350">
            <img src="./documentation/screenshots/testing/must-not-be-empty.png" alt="Field must not be empty" width="350">

        - On submitting the form, the user will receive and automated email reply acknowledging receipt of the message.
        - The user will also be directed to a 'thank you' page on successful submission to acknowledge that the site has sent the message, and then clearly direct the user back to the homepage through a call-to-action button.
        - If there is an API error on submission, the browser will show a browser notifying the user that they should attempt to send the form again.

        <img src="./documentation/screenshots/pages/thankyou-email.png" alt="Auto reply email" height="250"> 
        <img src="./documentation/screenshots/pages/thankyou.png" alt="Thank you page" height="250">

- #### Freelancers who work irregular or part time hours
    - As a Freelancer, my day will likely be split between multiple projects and clients. I don't always need a location to work from for a full day, so I want to see listings that do not require a full day booking.
        - This user story can be tested by entering the keyword "Hourly booking". The search function successfully returns only those results that have the tag "Hourly Booking". 
        - This user story can also be tested by viewing the 'more details' section of these listings. The additional information states that hourly booking is available and the cost for this.
        
        <img src="./documentation/screenshots/features/search-by-keyword.png" alt="Search by keyword" width="350">
        <img src="./documentation/screenshots/features/more-info.png" alt="More info" width="350">
    
    - I am looking for locations that will allow me to meet clients and collaborate for a few hours at a time.
        - As with hourly booking, the above story can be tested by using the 'search by keyword' function. The below image shows that a keyword search of 'co-working' returns all results where a tag or listing information contains the string 'co-working'.
        
        <img src="./documentation/screenshots/features/coworking.png" alt="Search by keyword" width="350">

- #### A full time employee who cannot work from home comfortably
    - As a full time employee working from home due to the pandemic, I am solely interested in listings that I know I can work from for the full day. 
        - This user story can be tested by using the keyword search. If the user enters the keyword 'Daily booking', all results that allow the user to work from for the day will be returned.
        - The user can verify each of these listings by clicking on 'read more' or the listing card and reviewing the additional information.
        
        <img src="./documentation/screenshots/features/daily-booking.png" alt="Daily booking search" width="350">
        <img src="./documentation/screenshots/features/daily-booking-info.png" alt="Daily search info" width="350">

    - I want to see only the listings that will have quiet places I can make calls with a good internet connection
        - As with the above user story tests, this story is tested by entering the keyword 'meeting rooms' into the search field will return all listings that provide meeting rooms or phone-booths that will allow users to make quiet calls.

        <img src="./documentation/screenshots/features/meeting-rooms.png" alt="Meeting room search" width="350">
        <img src="./documentation/screenshots/features/meeting-rooms-info.png" alt="Meeting room info" width="350">

- #### Location owners
    - As someone who owns a location users can work remotely from, I want to add my listing to the site with ease in order to promote my business.
        - This can be accomplished by the user by going to the contact page and completing the form.
        - The fields are mandatory and require the user to enter their name, message, subject and email so that we can contact them regarding the message.
        - The user is also required to confirm that they are happy to the site owner contacting them to discuss the message. 
        - If these fields are not completed, the form will fail validation and call out the errors to the user.
        - If the user completes the form successfully, the page will redirect to the 'thank you' page and an auto-reply email will be sent to the user, using the EmailJS API.
        - See the form validation flow screenshots in the ['user feedback' testing above](#form-flow)
    - I want to see what other listings are offering in order to learn more about the site users and tailor my listing content accordingly. 
        - The user can see this from the other listings on the 'Locations' page.
        - The user can see where the listing is located by clicking the 'map' filter, and read more information on what the listing offers by clicking the info window and enclosed call-to-action button.
        
        <img src="./documentation/screenshots/features/infowindow-cta.png" alt="Map marker infowindow" width="350">
        <img src="./documentation/screenshots/features/map-moreinfo.png" alt="Map view more info" width="350">

- #### Site owner
    - As the site owner, I want to ensure that information is accurate and user feedback is received, to improve value to the user.
        - As site owner, I can collect user feedback from the 'contact' page. The copy above the form clearly states what the form is to be used for; "Have a new listing to share, or feedback for an existing one?", prompting the user to focus their message on topics such as this.
        <img src="./documentation/screenshots/features/contact-header.png" alt="Contact header">

<br> 

### For full details on the testing for this website, refer to the [full testing documentation](./documentation/testing-documentation.md)

<br>

---

<br>

## **Deployment**

### **Version Control: GitHub & GitPod**

The Remote London website has been built using a [GitHub](https://github.com) Repository (MS2-remoteworking-london), with the code written, edited and pushed from [GitPod.io](https://gitpod.io), using the extension available within GitHub.

### **Deploying to GitHub Pages**
The site has been deployed to a production environment using GitHub Pages. Hosting the site on GitHub Pages ensures that a new deployment is available from the same Repository that the GitPod code commits are pushed to. This means that updates to the live site are quick to take affect after each push.

To deploy to GitHub Pages, the below steps were taken and can be followed to repeat deployment: 
- Repository is created within GitHub and made publicly visible.
- With the GitPod extension already installed within GitHub, the codebase is opened within GitPod using the green 'GitPod' button. 
- GitPod will start a development environment of the code tree, from which code can be edited and commits pushed.
- Once the initial commit has been pushed, return to the GitHub Repository and click 'Settings' in the top right of the repository navigation items.
- To deploy the initial GitHub Pages, scroll to the section titled 'GitHub Pages' and select the master branch (or whichever is your primary branch), set the root file path (/root by default), and click 'save'.
- Your site will then be published and could take 5 - 10 minutes for this to be visible. 
- Following the initial deployment, all commit pushes will automatically create a new deployment. 
- To see the live site, click on the 'code' tab at the top of the repository, then select 'github-pages' under 'Environments' on the right-hand sidebar.
- The page will then show all deployments with the most recent showing first. 

### **Forking the GitHub Repository**
To fork this repository into a new environment, follow the below steps: 
- Go to the top of this page if viewing in GitHub or [go to the repository here](https://github.com/bradleyhc/MS2-remoteworking-london). 
- To clone to a local environment, click the 'code' button in the top right above the file list, with the download icon. 
- Copy the HTTPS URL provided.
- Open terminal window on your device and open the folder you intend to save the clone to.
- Run `git clone [THE URL YOU COPIED]`. 
- This will save a clone of the repository to this folder for you to launch in a local server.

### **Branching the GitHub Repository**
To create a new branch within this repository, follow the below steps (note: you must have edit access to the repository for this to be possible):
- At the top of the file list under the 'code' tab, click the 'branch' button in the top left (this is set to 'master' by default).
- Start typing the name of the branch you wish to created.
- Hit enter to create the new branch. 
- Edits to code can now be committed to this branch and pulled / pushed to the master branch as required.

<br>

---

<br>

## Credits:

### **Images**
- Homepage header image - Giammarco Boscaro on [Unsplash](https://unsplash.com/photos/q140lHKzXZY)
- Location page header image - Jaanus Jagomägi on [Unsplash](https://unsplash.com/@jaanus?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)
- Rude Health listing image - [Rude Health Website](https://rudehealth.com/rude-health-cafe/)
- Uncommon listing image - [Uncommon Website](https://uncommon.co.uk/)
- The Dock listing image - [The Tobacco Dock Website](https://www.tobaccodocklondon.com/workspaces/private-offices/)
- Headspace listing image - [Headspace Website](https://www.headspacegroup.co.uk/location/farringdon/)
- Work.Life Bermondsey listing image - [Work.Life Website](https://work.life/locations/bermondsey/)
- The Hoxton hotel listing image - [The Hoxton Website](https://thehoxton.com/london/holborn/)
- TOG Borough High Street listing image - [TOG Borough Website](https://www.theofficegroup.com/office-space/uk/london/southwark-borough?utm_source=google&utm_medium=local&utm_campaign=borough-high-street)
- CitizenM listing image - [CitizenM Website](https://www.citizenm.com/hotels/europe/london/tower-of-london-hotel)

### **Code Snippets**
- Snap-scroll CSS attribute used with guidance from [Stack Overflow: "Luke"](https://stackoverflow.com/questions/60724786/why-is-my-simple-css-scroll-snap-not-working).
- EmailJS lession code snippet guidance from the 'Rosie Resume' lesson on [Code Institute](https://codeinstitute.net/).
- CSS pre-loader tutorial and guidance from [W3 Schools](https://www.w3schools.com/howto/howto_css_loader.asp).
- API places name, address and location date from [Google Places API](https://developers.google.com/places/web-service/overview).
- Script load order issue in Safari (callback from Google API was not running as 'initMap' had not yet loaded), was fixed with guidance from [Iván Ibarra Pacheco's](https://stackoverflow.com/users/11120704/iv%c3%a1n-ibarra-pacheco) answer in this [StackOverflow thread](https://stackoverflow.com/questions/36795150/uncaught-invalidvalueerror-initmap-is-not-a-function).
- Array filter instructions from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).
- Map marker filtering tutorial and guidance from [Peter on JS Fiddle](https://jsfiddle.net/peter/drytwvL8/) for function concept.
- Star rating guidance on 'more details' sidebar from [I wrestled a bear once](https://codereview.stackexchange.com/users/39953/i-wrestled-a-bear-once) on this [Stack Exchange thread](https://codereview.stackexchange.com/questions/177945/convert-rating-value-to-visible-stars-using-fontawesome-icons).
- Contact form text input alpha only validation created with guidance from [Code Grepper](https://www.codegrepper.com/code-examples/lisp/alpha+validation+html+inputs).
- Sidebar filter items by locId using the filter method was possible with guidance from [Elliot Bonneville](https://stackoverflow.com/users/339852/elliot-bonneville) on this [StackOverflow thread](https://stackoverflow.com/questions/21437163/loop-through-array-of-objects-to-find-object-with-matching-property).
- Regex replace() method instructions provided by [W3 Schools](https://www.w3schools.com/jsref/jsref_replace.asp).


### **Listing Research**
- [Click Do](https://business.clickdo.co.uk/best-35-coworking-spaces-in-london/) was used to gather further research on locations that may be suitable to freelancers.
- This [SquareMeal](https://www.squaremeal.co.uk/restaurants/news/where-to-work-remotely-in-london_7483) blog post also helped steer my research in the right direction when looking for the best listings to show.

### **Acknowledgements**

- I would like to thank my Code Institute peers on Slack for their helpful feedback on the site.
- In addition, my friends and colleagues who were able to provide anecdotal feedback on user experience.
- Finally, I would like to acknowledge my mentor for his guidance and support during this project, as well as useful tips to ensure I manage the build well and code to industry standards. 

    