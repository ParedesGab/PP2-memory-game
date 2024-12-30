# The Cosmic Match Memory Game

(Developer: Gabriela Fabiola Paredes Rojas)

![Responsive Mockup image](documentation/website-screenshots/responsive-mockup.png)

Symbiosis is defined as "the living together of differently named organisms" (de Bary, 1879). This website provides information on an extraordinary symbiotic example, the one involving the marine free-living marine nematode *Laxus oneistus* and its inseparable bacterial partner, *Candidatus* Thiosymbion oneisti. 

+ Throughout this documentation, they will be referred as *Laxus* and Thiosymbion. respectively.

+ The site can be accessed via this [link](https://paredesgab.github.io/PP1-Laxus_and_Thiosymbion/)

---
## Project Goals

### User Goals

+ Find clear, fun and engaging information about this marine symbiosis.
+ Understand or learn about the unique relationship between *Laxus* and Thiosymbion. 
+ Explore the "cool factor" of symbiosis through this example.
+ Leave with a new appreciation for the surprising, complex relationships that exist even in the smallest corners of the ocean.

### Site Owner Goals

+ My primary goal is **science communication**. Namely:

  + Inform, raise awareness and public outreach about the existance of this fascinating but little-known nematode-bacterium symbiosis.  
  + Communicate key scientific findings of the *Laxus*-Thiosymbion partnership in a simple way.

+ In addition:
  + Spark interest in further scientific study of this fascinating symbiotic system. 
  + Generate public engagement to build a network of people excited about marine symbioses.

---
## User Experience

### Target audience

+ General public interested in life, nature or biology.
+ Environmental advocates, because global warming and/or human impact have also an effect on marine meiofauna.
+ Students, teachers or marine science enthusiasts studying marine biology, ecology, nematology, or microbiology. 
+ Researchers, scientists.

### User expectations

+ Accessible site.
+ Fast access to content.
+ Understand clearly the purpose of the site.
+ Have relevant content that keeps the user engaged.
+ Easy and intuitive navigation, overall a smooth experience.
+ Mobile-friendly, but generally a responsive design that works well on all devices.

### User stories

+ **As a first-time user, I want to:**

  + Easily navigate the website and find the content interesting.
  + Be surprised to discover that drastically different organisms in nature might depend on each other for survival.
  + Find this, otherwise niche topic, entertaining and easy to understand. 
  + Find useful information about this symbiosis, so I can compare it with my research system. 
  + Visit the social media platforms to see what activity is going on around this topic.

+ **As a returning user, I want to:**

  + Discover the latest key findings or new research on the *Laxus*-Thiosymbion symbiosis. 
  + Connect with scientists working on marine symbiosis, so they can share their insights in schools, museums, or to establish a scientific collaboration.
  + See if other symbiotic systems are featured on the site.

+ **As the site ownser, I want:**

  + Pass on my love for this system that was my workhorse for many years. 
  + Highlight the key discoveries I made during my Ph.D. research (Paredes et al., 2021, 2022).
  + Keep the website updated with the latest research on this symbiosis. 
  + Know if the visitors found the content interesting and if it was easy to understand. 
  + Know what other symbiosis-related content my users want to see. For example, testimonial from scientists, or the process of collecting the nematodes from sand, etc. 

---
## Features 

### Navigation Bar

![NavBar Tablets and up](documentation/website-screenshots/navigation.png)

  + It is positioned at the top of the page, and it is found across all pages of the website. 

  + It is clear and easy to navigate.

  + On the left, it contains the "Laxus & Thiosymbion" logo.

  + On the right, it contains the following four navigation links:

    + **HOME:** Takes you to the home page where users can learn about the *Laxus*-Thiosymbion symbiosis.

    + **LAXUS:** Takes you to the page that features the nematode *Laxus oneistus* and what it might be providing to its bacterial partner.

    + **THIOSYMBION:** Takes you to the page describing the bacterium *Candidatus* Thiosymbion oneisti and what it might provide to its nematode host.

    + **NEWSLETTER:** Takes you to the contact form to subscribe to our newsletter with symbiosis stories.

  + All four navigation links have a hover effect. Namely, an underline to indicate in which page the user is on, and a hover highlight for 992px and up devices, to indicate that they are clickable.

  + In addition, the navigation bar is responsive:

    + **On mobile devices:**
        
      + The navbar features the logo on the left, with a hamburger menu from Font Awesome on the right.

    ![Closed NavBar - Mobile](documentation/website-screenshots/navbar-mobile-closed.png)

      + When clicked, the hamburger menu reveals a drop-down with the navigation links displayed (in the same order as described above), and they have an image of *Laxus* as bullet points.

    ![Open NavBar - Mobile](documentation/website-screenshots/navbar-mobile-open.png)

    + **On tablets and larger screens:** 
      + The logo remains on the left, the hamburger is not displayed anymore, instead you see all the navigation links spaceously distributed on the right.

    ![NavBar Tablets and up](documentation/website-screenshots/navigation.png)
       
---
### HOME page

  * It presents the symbiosis of *Laxus* and Thiosymbion.

  * It intends to make this topic easy to understand, by:
    * Presenting it as a love story - it is after all, a relationship.

    * Using the analogy of wearing a coat, because the bacteria live on the surface. 

  * It highlights the extraordinary features of this partnership, including fun facts to make the content more enjoyable.

  * It also introduces the social media channels.

  * The home page is responsive.

    ![Home Page](documentation/website-screenshots/homepage.png)

#### Hero section

- The hero section is placed on top of the home page below the navbar.

- The intention was to have a simple yet impactful hero section Thus, the black background allows the single nematode picture to shine.

 - The title of the website (h2) "A extraordinary symbiosis" is next to the image and it has a yellowish/white color, same as the bacterials symbiont.  

 - The background image, the title position and font-size are responsive across all devices. 

    ![Hero Section](documentation/website-screenshots/hero-section.png)

#### Love story section

- This section aims to introduce the symbiosis in a fun and simplified way.
  
- It contains: a title (h3), an intro text explaining the website's theme, a video of moving worms, and a video caption. 

- The "love story" title is an analogy representing symbiosis as a partnership.

- The text is written to engage all audiences, for example, using the analogy of a winter coat in Caribbean heat to help users imagine life as this nematode coated with its bacteria.

- The video has no audio and it shows several *Laxus oneistus* in motion. The caption, highlights their resemblance with rice noodles but, in fact, the whiteness comes from the bacteria on the surface. 

- This section is responsive, and in Tablets, Laptops and Desktops flex box with flex direction row was used. 
    
    ![Love story Section](documentation/website-screenshots/love-story-section.png)

#### Extraordinary section

- As the title suggests, this section aims to highlight extraordinary features of this symbiosis. 
    
- Three key features have been selected and displayed using the HTML class attribute: feature1.
    
- They allow the user to learn about the habitat, reasons of being together and more importantly, the uniqueness of this symbiosis.

- To make it more interactive, each feature card has a "fun fact" that is highlighted in bold and next to a star from Font Awesome.

- These three features are in fact seminal findings of the *Laxus*-Thiosymbion research. As such, they will likely remain as the site is updated, but more features will be added as new research emerges.

- Two publications are referenced, linked and open in separate windows. 

- This section was made responsive. Namely:

  - The title (h3) increases in font size.

  - In mobiles: the figure is placed on top of the text, forming a column. 

  - In tablets, the figure and text were placed next to each other (in a row). This was achieved because their container (class feature1) was set to display property: flex.

  - In Laptops and Larger screens, this display propery was set to column, to have the features next to each other. 

    ![Extraordinary Section](documentation/website-screenshots/extraordinary-section.png)

#### Footer

- The footer section is found across all pages from the website.

- The footer section contains links to the relevant social media sites that feature *Laxus* and Thiosymbion.

- The links will open to a new tab to allow easy navigation for the user. 

- The footer adds value by encouraging users to stay connected through social media.

- The footer has a hover effect, and is responsive, with increasing font sizing and padding as screen width increases.

    ![Footer](documentation/website-screenshots/footer-section.png)

---
### LAXUS page

- This page provides the user with more information about the nematode.

- It contains three sections, from top to bottom:

  - The **Hero Laxus section**: it uses the same style as the hero section from the home page but a different background image. This section is responsive, and its height increases as the device screen width increases. 

  - The **Laxus introduction section**: it uses the same style as the love story section from the home page. This section is responsive.

  - The **What Laxus gives to Thiosymbion section**: it is a research study conducted by the developer in 2022. A summary of the main findings of the article is presented, as well as a nutritional model of the interaction of *Laxus* with its bacteria. The study is also linked to the website and it opens in a new window. This section is responsive.  

    ![Laxus page](documentation/website-screenshots/laxus-page.png)

---
### THIOSYMBION page

- This page provides the user with more information about the bacteria.

- Intentionally, for consistency, it has the same style and responsiveness as the Laxus page. Thus, from top to bottom:

  - The **Hero Thiosymbion section**: : it uses the same style and responsiveness as the hero section from the laxus page. The image caption has a link to a study that opens in a new window.  

  - The **Thiosymbion introduction section**:: it uses the same style as the love story section, and the laxus introduction section from the home page and laxus page, respectively. This section is responsive.

  - The **What Thiosymbion gives to Laxus section**: it is a research study conducted by the developer in 2021. A summary of the main findings of the article is presented, as well as a nutritional model of the interaction of Thiosymbion with the nematode. The study is also linked to the website and it opens in a new window. This section is responsive.  

  ![Thiosymbion page](documentation/website-screenshots/thiosymbion-page.png)

---
### NEWSLETTER page

  - This page will allow the user to subscribe to our newsletter, to stay updated on new content, discoveries, or tips related to the *Laxus*-Thiosymbion symbiosis or other "love stories".

  - To subscribe to the newsletter, the user is required to provide their name, email address, feedback,  choose which system is of their interest, and click on the subscribe button. 

  - The subscribe button has a hover effect animation - achieved with the CSS properties: double box shadow and transition duration.

  - This section is responsive, and the resize property of the textarea was disabled by setting it to: none.

![Newsletter page](documentation/website-screenshots/newsletter-page.png)

---
### SUCCESSFUL page

  - After successful subscription the user is redirected to this page.

  - The user is thanked for subscribing, and there is a quote from one of the foremost symbiosis researchers, Lynn Margulis, that highlights the power of teaming up. 

  - This page is responsive, and has a "Return to Home page" button to keep the user in the website. 

  - The "Return to Home page" link has the same hover effects as the subscribe button, but a slightly different style (i.e., round corners).

  ![Successful page](documentation/website-screenshots/successful-page.png)

---
## Features left to implement

- Make the hamburger icon responsive so it closes automatically. 

- Use CSS roots to declare global CSS variables and and apply them across the entire project for consistent styling.

- Update the extraordinary section with new research. 

- Better use of image to aspect ratio, and implement it accordingly. 

- Add a carousel to the "Love story" section, and to the "Laxus and Thiosymbion introduction sections", respectively; so that more media can be displayed. 

- And/or, add a gallery section, showing more pictures of nematodes, of the bacteria, of researchers in action, the island in Belize from where they are collected, etc., and use CSS grid to organize it.

- Add a "References" page, that lists all publications related to the *Laxus*-Thiosymbion association.

---
## Design

### Color scheme

![Color scheme](documentation/design/color-scheme.png)

- The black and Dutch white colors were used as the main colors of the website. Their choice was inspired by the hero image of the home page.

- The light coral color was chosen to highlight the H2 titles. This was inspired by the red's association with love. However, red would be too overpowering, while a ligth coral color complements the love story title in a more subtle way.

- The grey color is drawn from the background image in the "Extraordinary" section. The goal was to keep the section's color neutral, allowing the featured images to stand out.

- To keep the theme cohesive, a grey background image was chosen in the Hero section of the Laxus and Thiosymbion pages, and the same background image was used in the Extraordinary section, and in the What Laxus/Thiosymbion gives to Thiosymbion/Laxus sections.

### Typography

- Arsenal from Google Fonts was used as the main font of the website, with the generic family name "Sans-serif"

![Main Font](documentation/design/typography.png)

---
## Wireframes

#### Mobile

- [Mobile: HOME page](documentation/wireframes/mobile-homepage.png)
- [Mobile: LAXUS page](documentation/wireframes/mobile-laxus-page.png)
- [Mobile: THIOSYMBION page](documentation/wireframes/mobile-thiosymbion-page.png)
- [Mobile: NEWSLETTER page](documentation/wireframes/mobile-newsletter-page.png)
- [Mobile: SUCCESSFUL page](documentation/wireframes/mobile-successful-page.png)

#### Tablets

- [Tablet: HOME page](documentation/wireframes/tablet-homepage.png)
- [Tablet: LAXUS page. Mobile](documentation/wireframes/tablet-laxus-page.png)
- [Tablet: THIOSYMBION page](documentation/wireframes/tablet-thiosymbion-page.png)
- [Tablet: NEWSLETTER page](documentation/wireframes/tablet-newsletter-page.png)
- [Tablet: SUCCESSFUL page](documentation/wireframes/tablet-successful-page.png)

#### Laptops/Desktop

- [Laptops: HOME page](documentation/wireframes/laptop-home-page.png)
- [Laptops: LAXUS page](documentation/wireframes/laptop-laxus-page.png)
- [Laptops: THIOSYMBION page](documentation/wireframes/laptop-thiosymbion-page.png)
- [Laptops: NEWSLETTER page](documentation/wireframes/laptop-newsletter-page.png)
- [Laptops: SUCCESSFUL page](documentation/wireframes/laptop-successful-page.png)

---
## Languages
- HTML
- CSS

---
## Technologies used
- [Gitpod](https://www.gitpod.io/)
- [GitHub](https://github.com/)
- [Balsamiq](https://balsamiq.com/): to create the wireframes.
- [Google Fonts](https://fonts.google.com/): to import the Arsenal family font.
- [Font Awesome](https://fontawesome.com/): For the hamburger, star, and social media icons.
- [TinyPNG](https://tinypng.com/): to compress the images.
- [Favicon.io](https://favicon.io/): to generate the favicon images.
- [Am I responsive?](https://ui.dev/amiresponsive): to generate the responsive mockup image.
- [MDN Web Docs](https://developer.mozilla.org/en-US/): resource to check CSS properties.
- [VEED video editor](https://www.veed.io/tools/video-editor): to compress and edit the video.
- [Color-hex](https://www.color-hex.com/): to get the rgb color information.
- [Chrome DevTools](https://developer.chrome.com/docs/devtools?hl=de) and its open source [Lighthouse](https://developer.chrome.com/docs/lighthouse?hl=de).
-  [W3C HTML](https://validator.w3.org/) and [W3C CSS](https://jigsaw.w3.org/css-validator/) Validation Services. 
- [WAVE](https://wave.webaim.org/): to test accessibility.
- [DeepL Write](https://www.deepl.com/en/write): to spot spelling mistakes in the text. 

---
## Validation

- In this section, the HTML and CSS codes were checked for compliance with industry standards. This was done using the W3C Markup Validation Service for HTML and CSS respectively, using the code from both: the working environment and the the deployed version.

- The result in both reports: no errors were returned.

### HTML Validation

**HOME page**

  ![HTML Validation HOME](documentation/validation/homepage-html-validator.png)

**LAXUS page**

  ![HTML Validation LAXUS](documentation/validation/laxus-page-html-validator.png)

**THIOSYMBION page**

  ![HTML Validation THIOSYMBION](documentation/validation/thiosymbion-page-html-validator.png)

**NEWSLETTER page**

  ![HTML Validation NEWSLETTER](documentation/validation/newsletter-page-html-validator.png)

**SUCCESSFUL page**

  ![HTML Validation SUCCESSFUL](documentation/validation/successful-page-html-validator.png)

### CSS Validator

+ CSS stylesheet
![CSS Validation](documentation/validation/css-stylesheet-css-validator.png)

---
### Accessibility 

- Accessibility across all pages was tested using the Web Accessibility Evaluation Tool  (WAVE). 

- Initially there was an error in the navigation bar. This was solved and documented in the "Bugs" section below. 

- No errors are reported. 

**HOME page**

  ![WAVE report HOME](documentation/wave/wave-report-home-page.png)

**LAXUS page**

  ![WAVE report LAXUS](documentation/wave/wave-report-laxus-page.png)

**THIOSYMBION page**

  ![WAVE report THIOSYMBION](documentation/wave/wave-report-thiosymbion-page.png)

**NEWSLETTER page**

  ![WAVE report NEWSLETTER](documentation/wave/wave-report-newsletter-page.png)

**SUCCESSFUL page**

  ![WAVE report SUCCESSFUL](documentation/wave/wave-report-successful-page.png)

---
### LightHouse report

- Lighthouse tool from Devtools was used to confirm that the website is performing well, is accessible and the colors and fonts chosen are readable.

**HOME page**

  ![LightHouse report HOME](documentation/lighthouse/lighthouse-report-homepage.png)

**LAXUS page**

  ![LightHouse report LAXUS](documentation/lighthouse/lighthouse-report-laxus-page.png)

**THIOSYMBION page**

  ![LightHouse report THIOSYMBION](documentation/lighthouse/lighthouse-report-thiosymbion-page.png)

**NEWSLETTER page**

  ![LightHouse report NEWSLETTER](documentation/lighthouse/lighthouse-report-newsletter-page.png)

**SUCCESSFUL page**

  ![LightHouse report SUCCESSFUL](documentation/lighthouse/lighthouse-report-successful-page.png)

---

### Device testing

- The website was checked across devices using the chrome extension [Responsive Viewer](https://chromewebstore.google.com/detail/responsive-viewer/inmopeiepgfljkpkidclfgbgbmfcennb?hl=en). 

- In addition, it was manually checked in the following devices:
  - Huawei Y9 Prime 2019
  - Iphone XR
  - Iphone 15 pro
  - Samsung Galaxy Z Flip 5
  - Samsung Galaxy S8

---
## Browser compatibility

The website was tested on the following browsers:
- Google Chrome
- Firefox
- Microsof Edge

---
### Manual Testing

| Feature | Action | Expected result | Tested | Passed | Observations |
| --- | --- | --- | --- | --- | --- |
| **Header** | | | | | |
| Logo | Click on the "Laxus & Thiosymbion" logo | No matter the page the user is, they are redirected to the main page | Yes | Yes | - |
| Burger icon | Display of Burger icon | It appears in mobiles and up to a screen width of 767 px | Yes | Yes | - |
| Burger icon | Click on the Burger icon | It opens the navigation links in the center next to the laxus image bullet points | Yes | Yes | - |
| Navbar | Navigation display | Remains fixed at the top of all pages | Yes | Yes | 
| Navbar link: HOME | Hover and/or click on the "HOME" link | The link is highlighted, the user is redirected to the home page and the link is underlined indicating where the user is | Yes | Yes | 
| Navbar link: LAXUS | Hover and/or click on the "LAXUS" link | The link is highlighted, the user is redirected to the Laxus page and the link is underlined indicating where the user is | Yes | Yes | 
| Navbar link: THIOSYMBION | Hover and/or click on the "Thiosymbion" link | The link is highlighted, the user is redirected to the thiosymbion page and the link is underlined indicating where the user is | Yes | Yes | 
| Navbar link: NEWSLETTER | Hover and/or click on the "NEWSLETTER" link | The link is highlighted, the user is redirected to the newsletter page and the link is underlined indicating where the user is | Yes | Yes | 
| **HOME page** | | | | | |
| Hero section | Image and title display | The image loads correctly and title is positioned next to it | Yes | Yes | - |
| Love story section | Title, text and video display | The title stands out, the content is justified with no spelling mistakes and the no-sound video loads correctly and it does not autoplay  | Yes | Yes | - |
| Extraordinary section | Title and images display | The title stands out, the images are loading correctly and are located near to their corresponding text, the text in the columns have no spelling mistakes and have the same style. The article links open in a new window | Yes | Yes | - |
| **LAXUS page** | | | | | |
| Hero Laxus section | Title and image display | The image is loaded correctly and the title is positioned on the left side of the screen | Yes | Yes | - |
| Laxus introduction section | Title and image display | The title stands out, all content is centered and displayed as a column (one on top each other), the text is justified with no spelling mistakes and the image loads correctly with good resolution| Yes | Yes | - |
| What Laxus gives to Thiosymbion section | Title text and image display | The title stands out, all content is displayed as a column (one on top each other), the text is justified with no spelling mistakes, and the image loads correctly with good resolution. The article link opens in a new page correctly | Yes | Yes | - |
| **THIOSYMBION page** | | | | | |
| Hero thiosymbion section | Title and image display | The image is loaded correctly and the title is positioned on the left side of the screen | Yes | Yes | - |
| Thiosymbion introduction section | Title and image display | The title stands out, all content is centered and displayed as a column (one on top each other), the text is justified with no spelling mistakes and the image loads correctly with good resolution. The article link opens in a new page correctly | Yes | Yes | - |
| What Thiosymbion gives to Laxus section | Title text and image display | The title stands, all content is displayed as a column (one on top each other), the text is justified with no spelling mistakes, and the image loads correctly with good resolution. The article link opens in a new page correctly | Yes | Yes | - |
| **NEWSLETTER page** | | | | | |
| Subscribe form | Heading display | The form heading is hidden | Yes | Yes |
| Name input | Enter the user's name | The name is entered | Yes | Yes | If user does not enter the name, a warning message of "please fill out this field" appears |
| Email input | Enter the user's email | The email is entered | Yes | Yes | If user does not enter the email, a warning message of "please fill out this field" appears |
| Radio input | User selects what information they want to be informed about | The selection is made (with one possibility) | Yes | Yes | If user doe not select an option, a warning message of "please select one of this options" appears |
| Text area input | User provides feedback | Feedback is provided | Yes | Yes | If user does not write in here, a warning message of "please fill out this field" appears |
| Subscribe button | Click on the Subscribe button | The button has hover animation, and when clicked the user is redirected to a thank you page (successful page) | Yes | Yes | - |
| **SUCESSFUL page** | | | | | |
| Thank you section | Text display | The thank you messaged is displayed correctly | Yes | Yes | - |
| "Return to Home page" button | Click on the "Return to Home page" button | The button has a hover effect and the user is redirected to the home page | Yes | Yes | - |
| **Footer** | | | | | |
| Footer icons | Highlight when hovered | When hovered, the icons have a highlight hover effect | Yes | Yes | - |
| Facebook icon | Click on the Facebook icon | The user is redirected to the Facebook page | Yes | Yes | - |
| Instagram icon | Click on the Instagram icon | The user is redirected to the Instagram page | Yes | Yes | - |
| Twitter icon | Click on the Twitter icon | The user is redirected to the Twitter page | Yes | Yes | - |
| LinkedIn icon | Click on the LinkedIn icon | The user is redirected to the LinkedIn page | Yes | Yes | - |

## Bugs
+ ### Solved bugs
  1. The nav element was initially written as "navigation". 
        - Solution: this mistake was spotted and corrected. 

  2. The flex:1 0 auto was used to not shrink the main content, and push the footer down. However, this did not work.
        - Solution: A Devtools warning message showed that the CSS body selector had the declaration written incorrectly. Namely it was as flex:display instead of display:flex. This was corrected accordingly.

  3. At some point when testing responsiveness, the header width was larger than the main section width. As a result, the use of the responsive dimensions of devtools was not possible. 
        - Solution: A red background color was used to check where the error might be coming from, and it was due to the size of one picture. Given that the header had a CSS width property of 100%, it was a adjusting to the width of this picture. This was resolved by resizing the picture. 

  4. WAVE showed the below error in the navigation bar. 
        - Solution: The error was googled and it happened because wave is likely not recognizing the i tag of the Font Awesome link. This was solved by adding a span element.
      ![bug WAVE](documentation/bugs/bug-wave.png)

  5. HTML validator showed that the meta keywords were missing for the newsletter page. 
        - Solution: This was added accordingly. 

  6. In the successful page, the "Return to home page" was initially a button element placed as descendant of an anchor element. HTML validator showed this error. 
        - Solution: This was corrected by removing the button element, and using only the anchor element. 
    ![bug WAVE](documentation/bugs/bug-successful-page.png)

+ ### Unfixed bugs

  -  The successful.html file has a different indentation than the other html files. Namely, 1 tab is 8 spaces instead of 4. This "error" was googled, consulted with the mentor, and the indent-rainbow extension was installed but this issue persisted. The file could be deleted and a new one created, but it was decided to report this as an unfixed bug so that it could be discussed. 
  ![bug WAVE](documentation/bugs/unfixed-indentatoin.png)

---
## Deployment

The website has been deployed to GitHub pages following these steps:

1. In the GitHub repository for the Laxus & Thiosymbion page [GitHub repository](https://github.com/ParedesGab/PP1-Laxus_and_Thiosymbion), select the "Settings" tab.

2. Click on "Pages" from the field "Code and automation" (on the left), and select the below settings:
    - Source: deploy from a branch.
    - Branch: main.
    - click "Save".

3. Select the "Code" tab and refresh the page. 

4. On the right side of the page, a "Deployments" section has been activated indicating a successful deployment. 

5. The live link can be accessed [here](https://paredesgab.github.io/PP1-Laxus_and_Thiosymbion/).

---
## Credits 

### Content 

- The Code institute ci-full-template was used to create the GitHub repository of the Laxus & Thiosymbion website.

- Text was checked with DeepL Write for spelling mistakes. 

- Inspiration to add the small *Laxus* bullet points is from the YouTube channel [Six Minutes. Smarter.](https://www.youtube.com/@SixMinutesSmarter)

- Inspiration for the hover animation of the Subscription button and the Return and home page link is from the YouTube channel [Smoljames](https://www.youtube.com/@Smoljames).

- MDN Web Docs showed me different ways to use the background-position property.

- Stack Overflow solutions was also used to resolve doubts.

- ReadMe was inspired and guided by the ReadMe documents of my mentor Iuliia Konovalova, of my cohort Kamil Wojciechowski, and of the love running project. 

### Media

- Ulrich Dirks is the author of the following images:

  - The favicon image and the Laxus navigation links bullet points: 
      ![Laxus favicon and bullet points](assets/images/1-laxus.webp)
        
  - Home page Laxus hero image:

      ![Laxus hero image](assets/images/2-laxus-hero.webp)

- Nicholas Altizer is the author of the Home page first extraordinary image depicting the Carrie Bow Cay field station in Belize:
      ![Laxus extraordinary image nr1](assets/images/5-habitat-carrie-bow-cay.webp)

- Nikolaus Leisch is the author of the following images:

  - Home page second extraordinary image (image modified from the below original image)
      ![Laxus extraordinary image nr2](assets/images/6-bacteria-sem.webp)
  
  - The background image of the "extraordinary" and "What Laxus gives to Thiosymbion sections"
      ![Bacterial coat](assets/images/4-bacterial-coat.webp)

- Philipp Weber is the author of the following images:

  - Home page third extraordinary image:
      ![Laxus extraordinary image nr3](assets/images/7-nematode-ball.webp)

  - Thiosymbion page image (modified from Weber et al., 2019):
      ![Bacterial coat](assets/images/10-weber-et-al-2019.webp)

- The Developer, Gabriela Paredes, is the author or publication author of the following media:

  - Laxus video:
      [Laxus video](assets/images/worm_video.mp4)

  - Laxus and Thiosymbion pages hero image:
      ![Laxus and Thiosymbion hero](assets/images/3-laxus-banner.webp)

  - Laxus head image:
      ![Laxus head](assets/images/8-worm-head.webp)

  - Laxus nutritional model image:
      ![Laxus scheme](assets/images/9-laxus-scheme.webp)

  - Thiosymbion nutritional model image:
      ![Thiosymbion scheme](assets/images/11-thiosymbion-scheme.webp)
  

## Acknowledgments

- My sincere gratitude to my mentor, Iuliia Konovalova, for her valuable feedback.  

- Thank you to Code Institute, specially to Kamil, Lane, Ioan and Darcy, and to the slack community members for the great tips and feedback.

- Thank you to my brother Brando, who recognized my love for coding long before I did. Your beautiful piano music [Brando PR](https://www.youtube.com/@BrandoPR) accompanied me along this project.