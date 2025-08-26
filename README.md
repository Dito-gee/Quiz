# The Great Paint-off Quiz
### Painting and Decorating quiz

## Site Overview
This is a specialized quiz application designed to:
1. Test the painting and decorating knowledge of students and apprentices 
2. Help DIY painter and decorators learn best practices
3. Showcase expertise in the painting and decorating field



<img width="1592" height="891" alt="Screenshot 2025-07-18 112709" src="https://github.com/user-attachments/assets/2583ee64-e2e7-463d-9950-314992fb8f55" />





## Planning Stage

### Target Audiences:

•	Painting and decorating students and apprentices.

•	Home improvement enthusiasts

•	Educators and Assessors

### User Stories:

#### Painting and Decorating Students & Apprentices
 •   As a Painting apprentice I want to test my technical knowledge so that I can prepare for trade certification exams  

 •   As a Vocational student I want to compare my scores with peers so that I can benchmark my progress  

 •   As a Trade school learner I want to receive explanations for answers so that I can understand mistakes  

#### DIY Painter and Decorators

•   As a Home renovator I want to learn paint selection techniques so that I can choose the right products for my project.

•   As first time DIYer I want to test basic safety knowledge so that I can avoid hazardous situations

•   As a Budget decorator I want to discover cost-saving methods so that I can achieve professional results affordably    

#### Educators & Assessors

•   As an educator I want to track class performance so that I can identify knowledge gaps 

•   As a NVQ assessor I want to track an apprentice performance so that I can identify knowledge gaps 

### Site Aims:

•	Knowledge Validation - To provide an interactive platform where painting and decorating students, DIYers, and professionals can test and benchmark their technical knowledge against industry standards.

•	Skill Development - To help users identify knowledge gaps through instant feedback and detailed answer explanations, reinforcing best practices in painting and decorating.

•	User-Centric Design - To ensure an intuitive, accessible experience with clear typography (Segoe UI), responsive layouts, and WCAG-compliant contrast for all learners.



### Design

#### Color Palette

• Primary: #3F51B5 (Deep Blue) – Used for headers and buttons

• Secondary: #FF5722 (Vibrant Orange) – Accent for interactive elements

• Background: #F5F5F5 (Light Gray) with #1A1A2E (Dark Navy) gradient overlay

•Text: #212121 (Dark Gray) on light, #FFFFFF on dark backgrounds

• Feedback States:

     • Correct: #4CAF50 (Green)

     • Incorrect: #F44336 (Red)

Rationale: High contrast for readability; professional yet energetic tone fitting trade industries.


#### Typography

•	Headings: 'Montserrat', sans-serif (700-800 weight) – Bold and authoritative

• Body Text: 'Roboto', sans-serif (400 weight) – Clean and legible

• Code Snippets: 'Fira Code', monospace (for any technical examples)

• Font Pairing Justification:

      • Montserrat’s geometric clarity works for quick scanning.

      • Roboto’s neutral warmth balances technical content.

#### Core UI Components

• Quiz Card Container

• Answer Buttons

• Timer Widget

• Score Display

• Restart, start and home Buttons 

• Question Header

#### Responsive Breakpoints

• Device	Adaptations

    • <576px (Mobile)	

    • 768px (Tablet)	

    • >992px (Desktop)	




#### Wireframes:

Wireframes for desktop, tablet and mobile phone devices were created using Balsamiq. This process provides a basic but clear outline of how the website would look on each device.

##### Desktop

<img width="968" height="772" alt="Desktop Quiz" src="https://github.com/user-attachments/assets/61b72b6e-9733-4c16-b060-8de8931151e2" />

<img width="954" height="772" alt="Page 2 -Desktop Quiz" src="https://github.com/user-attachments/assets/d4609c24-c6d0-47a6-b8a5-148524e9b009" />

<img width="954" height="772" alt="Page 3 -Desktop Quiz " src="https://github.com/user-attachments/assets/e1d72508-4a55-45a1-9f98-fb5422b3baee" />


##### Tablet

<img width="838" height="836" alt="Tablet Quiz" src="https://github.com/user-attachments/assets/062a41cc-39d8-46f2-a3e2-14a78942baa4" />

<img width="838" height="836" alt="Page 2 - Tablet Quiz" src="https://github.com/user-attachments/assets/e7eb5e05-24a6-48dc-9286-935caf6d9b58" />

<img width="838" height="836" alt="Page 3 - Tablet Quiz" src="https://github.com/user-attachments/assets/fa13ae2d-e100-4084-9dc6-cc40be0cdca8" />


##### Mobile

<img width="518" height="1140" alt="Mobile phone Quiz" src="https://github.com/user-attachments/assets/7cab3d97-3bef-4fe9-969e-5016a8eb8f80" />

<img width="518" height="1027" alt="Page 2 - Mobile phone Quiz  " src="https://github.com/user-attachments/assets/c45fce61-9d7e-436d-8d49-441d6447de09" />

<img width="518" height="1027" alt="Page 3 - Mobile phone Quiz" src="https://github.com/user-attachments/assets/b8f48b7d-8ac3-4fbb-958b-414ee46bdf55" />




### Features

#### •	Clear Purpose and Simplicity: 
The goal (take a timed quiz) is immediately obvious. The interface is uncluttered. The design is clean and minimalist.

#### •	Responsive Layout: 
The quiz is usable on both desktop and mobile devices. Text and buttons scale appropriately.

#### •	Progress Indicators:
o The question counter (Question 1 of 10) tells users where they are in the process and how much is left.

o	The score updates instantly after each answer, providing clear feedback on performance.

#### •	Navigation Control:
o	The ‘START QUIZ’ Button: Allows the user to move forward to the quiz questions.

o	The ‘RESTART’ Button:  It allows the user to restart the quiz during or after completion of the quiz, giving them a sense of control.

o	The ‘HOME’ Button:  It allows users to end the quiz during or after completion of the quiz, giving them a sense of control.

#### •	Immediate Feedback: 
o After selecting an answer, the user instantly sees whether they were correct or incorrect and their score updates.

o After completion of quiz the user receives their result with a message about their performance.

#### •	Visual Feedback on Answer Selection: 
When an answer is selected, there is an immediately change to the 	background colour of the selected button from either green or red. Green 	if it is correct. Red if it is wrong and the correct answer is  highlighted in 	green. The correct answer is also highlighted in green if no answer is given 	and the question has timed out.

#### •	Time Constraint (The Timer): 
This adds a classic gamification element that creates challenge and excitement. Once the timer ends the question automatically moves to the next, while giving a wrong answer result. The timer then restarts and repeats the same process if no answer is selected



### Testing Phase

#### Responsiveness

•	Responsiveness was tested extensively using Chrome Dev Tools. This proved invaluable when creating each page and was instrumental in helping me ensure responsiveness on multiple devices and screen sizes.

•	User testing was conducted on the following devices on various mobile (both android and iphone), desktop (windows desktop) and tablet (Samsung galaxy) devices. In each case, the pages responded as expected.  

•	I used Lighthouse to test website. Results below:

###### Desktop

<img width="1149" height="979" alt="Lighthouse Report Viewer" src="https://github.com/user-attachments/assets/3114d09d-da5e-4c0e-928a-d4a147ed5bed" />



###### Mobile

<img width="1091" height="1018" alt="Lighthouse Report Viewer 2" src="https://github.com/user-attachments/assets/060817fb-f07b-405a-988c-40edf86c860f" />











#### Functionality

Each feature was user-tested numerous times.	All functionality works.

##### 1. Start Quiz	button:

Load the page and click the start button  

###### The results:
The first quiz question is displayed and the timer starts 

screenshot

##### 2. Answer buttons

Select an answer option by clicking one of the multiple choice answer buttons

###### The results: 
o If correct the background colour of the selected button changes to green. 

o If wrong the background colour of the selected button changes to red and the correct answer is  highlighted in 	green. 

o The correct answer is also highlighted in green if no answer is given and the question has timed out. 


screenshot

##### 3. Timer:
Each question has a 60 second timer that counts down once a question begins.

###### The results:
o Timer counts down from 60 seconds. 

o It also times out and moves to the next question if no answer is selected.

o The timer restarts when on the next question

##### 4. Score display:
The score display updates instantly after each answer, providing clear feedback on performance. Maximum score is 10 out of 10. At the end of the questions the total score is displayed together with a message  providing feedback.

##### 5. Question counter:
The question counter (Question 1 of 10) updates enabling users to know where they are in the process and how much is left.

##### 6. Navigation control buttons:
###### The ‘START QUIZ’ Button: 
Allows the user to move forward to the quiz questions.

###### The results:
The quiz questions begin once the start quiz button is selected.

###### The ‘RESTART’ Button:  
It allows the user to restart the quiz during or after completion of the quiz, giving them a sense of control.

###### The results:
The quiz questions restart from the beginning once the restart button is selected while answering the questions. If at the end the where the total score and feedback message is displayed,   

###### The ‘HOME’ Button:  
It allows users to end the quiz during or after completion of the quiz, giving them a sense of control.

###### The results:
The quiz questions end and the user is taken to the home page once the home button is selected.











#### Validators
•	HTML Validation using w3c validator 

###### Index.html

<img width="1869" height="529" alt="index html" src="https://github.com/user-attachments/assets/861636d4-a9d7-4986-b356-f58407781dd2" />


###### Quiz.html

<img width="1890" height="531" alt="quiz html" src="https://github.com/user-attachments/assets/eac04e2f-3079-465a-b675-bc0ef6a357ab" />




• CSS Validation using w3c jigsaw

<img width="1851" height="340" alt="css" src="https://github.com/user-attachments/assets/54970e0c-f96a-4ebc-a146-3e5518b8939a" />


• Javascript Validation using JSHint

<img width="1867" height="964" alt="jshint 2025-08-16 134311" src="https://github.com/user-attachments/assets/b33e7855-78c3-4410-9bef-1c91d8d9364e" />


• Javascript Validation using JSLint

<img width="1876" height="988" alt="jslint 2025-08-16 134518" src="https://github.com/user-attachments/assets/caf9e515-f7bc-4e0a-a9de-e8b690890fcb" />





#### Testing User Stories from User Experience (UX) Section
##### User Goals
#### As a user, I want to easily understand the main purpose of the site.

o The title is extremely clear and unambiguous. The user immediately knows it's a quiz site

o The "Start quiz" button is a strong, clear, and an actionable command. It leaves no doubt about what the user should do to begin the primary task. 

o The "restart" button is a strong, clear, and an actionable command. It leaves no doubt about what the user should do if they want to restart the questions from the beginning.

o The "home" button is a strong, clear, and an actionable command. It leaves no doubt about what the user should do if they want to end the questions.

o The design is clean, minimal, and functional. It avoids unnecessary clutter that could distract from the site's purpose. The simple color scheme is neutral and appropriate for a quiz.

o Within  seconds, a user can scan the page and answer: "This is a quiz. I can start it by clicking that start button." the site provides excellent and immediate clarity.

o The scope or topic of the quiz is mentioned together with the rules, example " 10 questions , 60 seconds per question, score tracking". 

screenshot


#### As a user, I want to easily be able to navigate throughout the site to find content.

o The "Start quiz" button on the homepage is perfectly clear and initiates the main content.

o The "restart" and "home" buttons are present and functional. This is an excellent feature that gives users control and allows them to review content, which is a key navigation need.

o The "Question X of 10" text is present and functional. It tells users where they are in the structure of the quiz and how much content is left, preventing disorientation.

o The score is displayed prominently and updates in real-time. It is very easy for the user to find this key piece of content.

o After the final question the quiz ends. The user has the option to finish by selecting the "home" button or start afresh the questions by selecting the "restart" button


### Further Testing

The Website was tested on Google Chrome and Microsoft Edge browsers.

screenshots

The website was viewed on a variety of devices such as Desktop, Laptop, tablet and mobile.

Testing was done to ensure that all pages were linking correctly.

Friends were asked to review the site to point out any user experience issues.

### Known Bugs

o When one of the multiple choice radio button answers is selected the colour constrast is not good. Due to time constraints I was not able fix the bug. 

screenshot required

o There is a problem with keyboard navigation. I cannot navigate with the Tab/Enter keys. Due to time constraints I was not able fix the bug. 

screenshot required



### Deployment

I deployed the page on GitHub pages via the following procedure: -

1.	From the project's repository, go to the Settings tab.
2.	From the left-hand menu, select the Pages tab.
3.	Under the Source section, select the Main branch from the drop-down menu and click Save.
4.	A message will be displayed to indicate a successful deployment to GitHub pages and provide the live link.The live site can be found can be found at the following URL - https://dito-gee.github.io/Quiz/

### Tech

I used the following technologies for the project:

•	HTML

•	CSS

•	JavaScript

### Software
The following software was used:

•	Gitpod to create, load and push my code to Github.

•	Git (Gitpod and Github) as my version control for the site.

•	Balsamiq wireframes software.

### Credits

#### Content:

##### The bootstrap JS javascript code (below) was taken from bootstrap 5 - CDN via jsDelivr.
<script src=https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js integrity="sha384j1CDi7MgGQ12Z7Qab0qlWQ/Qqz24Gc6BM0thvEMVjHnfYGF0rmFCozFSxQBxwHKO"crossorigin="anonymous"></script>
t>

##### The Bootstrap CSS link javascript code (below) was taken from bootstrap 5 - CDN via jsDelivr.
<link href=https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css rel="stylesheet” integrity="sha3844Q6Gf2aSP4eDXB8Miphtr37CMZZQ5oXLH2yaXMJ2w8e2ZtHTl7GptT4jmndRuHDT" crossorigin="anonymous">


##### The Lightbox enhancement for better "view project" functionality javascript code (below) was taken from Lightbox2 Library version 2.11.3 - cdnjs.cloudflare.com.


<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/css/lightbox.min.css">

<script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.11.3/js/lightbox.min.js"></script>
<script>
lightbox.option({
'resizeDuration': 200,
'wrapAround': true
})
</script>


##### The javascript code (below) was taken from WebKit Bug #10660 (Oct 2006)

<script>
//  Update copyright year automatically
document.getElementById('year').textContent = new Date().getFullYear();

The javascript code (below) was taken from CSS-Tricks (2018).


// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
document.querySelector(this.getAttribute('href')).scrollIntoView({
behavior: 'smooth'
});
});
});

The javascript code (below) was taken from Stack Overflow (2020–2021).


// Close mobile menu when clicking a nav link
const navLinks = document.querySelectorAll('.nav-link');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach(link => {
link.addEventListener('click', () => {
if (navbarCollapse.classList.contains('show')) {
const bsCollapse = new bootstrap.Collapse(navbarCollapse);
bsCollapse.hide();
}
});
o	});
</script>


##### The  navigation section code (below) was derived with the help of Bootstrap 5 Navbar Docs.

    
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
            <a class="navbar-brand me-5" href="index.html">Nderitu Githaiga</a>
            <!-- Phone number -->
            <p class="contact-item" style="margin-right: 20px;">
                <i class="fas fa-phone contact-icon"></i>
                <a href="tel:+447851349247 ">+44 7851349247</a>
            </p>
            <!-- Email address -->
            <p>
                <i class="fas fa-envelope contact-icon "></i>
                <a href="mailto:nderitug@yahoo.com">nderitug@yahoo.com</a>
            </p>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

Social media, phone and email icons were taken from https://fontawesome.com/

The contact form is loosely based on Code Insitute's Love Running walkthrough project.

### Media:

•	The profile image is of myself taken by me.

•	All the images used are my own personal images taken at work.

### Honorable mentions

Thank you to my mentor, Richard Wells, who gave a significant amount of his time to provide me with feedback and ideas on the project.



















 



