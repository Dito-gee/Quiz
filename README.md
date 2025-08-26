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
When an answer is selected, there is an immediate change to the 	background colour of the selected button from either green or red. Green 	if it is correct. Red if it is wrong and the correct answer is  highlighted in 	green. The correct answer is also highlighted in green if no answer is given 	and the question has timed out.

#### •	Time Constraint (The Timer): 
This adds a classic gamification element that creates challenge and excitement. Once the timer ends the question automatically moves to the next, while giving a wrong answer result. The timer then restarts and repeats the same process if no answer is selected



### Testing Phase

There are 2 types of testing. They are manual testing and automated testing. 

o Manual Testing - Manual testing involves human testers executing test cases without automation tools. Testers follow predefined steps to validate functionality, UI/UX, and edge cases by interacting with the application as end-users would. 

o Automated Testing - Automated testing uses scripts and tools  to execute predefined test cases without human intervention. It is best suited for repetitive, large-scale testing.

###### Why I Used Manual Testing for This Project:
•	The quiz is relatively simple with limited features.

•	UI interactions (button clicks, timer, score tracking) are easily verifiable manually.

•	No complex backend logic requiring repeated regression tests.




#### Responsiveness

•	Responsiveness was tested extensively using Chrome Dev Tools. This proved invaluable when creating each page and was instrumental in helping me ensure responsiveness on multiple devices and screen sizes.

<img width="1057" height="831" alt="Screenshot 2025-08-23 122010" src="https://github.com/user-attachments/assets/f5ea12cb-0106-4eb8-920e-c458e94b2187" />

<img width="837" height="883" alt="Screenshot 2025-08-23 121924" src="https://github.com/user-attachments/assets/20386338-cbd3-4426-ba14-08c36f74b0e9" />



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

<img width="1057" height="831" alt="Screenshot 2025-08-23 122010" src="https://github.com/user-attachments/assets/850d0907-f2d0-4b5f-a817-3bce35ce7c72" />


###### The results:
The first quiz question is displayed and the timer starts 

<img width="1234" height="975" alt="Screenshot 2025-08-23 123259" src="https://github.com/user-attachments/assets/b72b0d73-c920-4301-8467-7b928cc12232" />


##### 2. Answer buttons

Select an answer option by clicking one of the multiple choice answer buttons

###### The results: 
o If correct the background colour of the selected button changes to green. 

<img width="1208" height="996" alt="Screenshot 2025-08-23 123017" src="https://github.com/user-attachments/assets/2742782c-ddb8-4668-8132-55550091660d" />


o If wrong the background colour of the selected button changes to red and the correct answer is  highlighted in 	green. 

<img width="1143" height="980" alt="Screenshot 2025-08-23 123048" src="https://github.com/user-attachments/assets/497a659b-570e-417c-8f99-ba900593f4c6" />


o The correct answer is also highlighted in green if no answer is given and the question has timed out. 


##### 3. Timer:
Each question has a 60 second timer that counts down once a question begins.

###### The results:
o Timer counts down from 60 seconds. 

o It also times out and moves to the next question if no answer is selected.

o The timer restarts when on the next question

<img width="1039" height="969" alt="Screenshot 2025-08-23 122850" src="https://github.com/user-attachments/assets/089d711b-2784-4bda-acfc-e86581aa008b" />


##### 4. Score display:
The score display updates instantly after each answer, providing clear feedback on performance. Maximum score is 10 out of 10. At the end of the questions the total score is displayed together with a message  providing feedback.

<img width="1401" height="923" alt="Screenshot 2025-08-23 123145" src="https://github.com/user-attachments/assets/5f6d8aad-6721-4330-8a7b-b88d548fbd86" />


##### 5. Question counter:
The question counter (Question 1 of 10) updates enabling users to know where they are in the process and how much is left.

<img width="1208" height="996" alt="Screenshot 2025-08-23 123017" src="https://github.com/user-attachments/assets/30bc71bf-4ab3-45ca-a0d2-52eab9103ea5" />


##### 6. Navigation control buttons:
###### The ‘START QUIZ’ Button: 
Allows the user to move forward to the quiz questions.

###### The results:
The quiz questions begin once the start quiz button is selected.

<img width="1651" height="917" alt="Screenshot 2025-08-23 122045" src="https://github.com/user-attachments/assets/069e5efd-5be8-4a39-a71b-739211606467" />


###### The ‘RESTART’ Button:  
It allows the user to restart the quiz during or after completion of the quiz, giving them a sense of control.

###### The results:
The quiz questions restart from the beginning once the restart button is selected while answering the questions. If at the end where the total score and feedback message is displayed, you can also restart the quiz questions  

<img width="1252" height="929" alt="Screenshot 2025-08-23 122808" src="https://github.com/user-attachments/assets/735379c3-20d7-4334-8eac-14f6478c1cfc" />


###### The ‘HOME’ Button:  
It allows users to end the quiz during or after completion of the quiz, giving them a sense of control.

###### The results:
The quiz questions end and the user is taken to the home page once the home button is selected. You can also end the quiz while in the middle of doing one.

<img width="1401" height="923" alt="Screenshot 2025-08-23 123145" src="https://github.com/user-attachments/assets/d41798a0-cd1d-409e-a23c-ecace1e7e9bd" />


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

o Within  seconds, a user can scan the page and answer: "This is a quiz. I can start it by clicking that start button." The site provides excellent and immediate clarity.

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

<img width="1909" height="1097" alt="Screenshot 2025-08-26 160105" src="https://github.com/user-attachments/assets/3271519b-ab27-4e46-b540-177060685dd1" />

<img width="1912" height="1149" alt="Screenshot 2025-08-26 160345" src="https://github.com/user-attachments/assets/dd1bf25e-a516-4a11-8e71-40785fe0207c" />



The website was viewed on a variety of devices such as Desktop, Laptop, tablet and mobile.

Testing was done to ensure that all pages were linking correctly.

Friends were asked to review the site to point out any user experience issues.

### Known Bugs

o When one of the multiple choice radio button answers is selected the colour constrast is not good. Due to time constraints I was not able to fix the bug. 

<img width="1208" height="996" alt="Screenshot 2025-08-23 123017" src="https://github.com/user-attachments/assets/c0139753-ea18-4a57-b322-e2835630e5e3" />


o There is also a problem with keyboard navigation. I cannot navigate with the Tab/Enter keys. Due to time constraints I was not able to fix the bug. 





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

• Visual studio code

• Chrome Developer Tools

### Credits

#### Content:

• All quiz questions and answers were written specifically for this project by the author.

• The instructional text on the website ("Test your knowledge!", "Score:", etc.) was created by the author.

### Media:

• This project uses a minimal design and does not rely on external images, icons, or graphics. All visual elements were created using custom CSS.

### Code:

• The vast majority of the code (HTML, CSS, JavaScript) was written by the author.

• The following external resources were referenced for learning, troubleshooting, and inspiration:

    o MDN Web Docs: Invaluable reference for JavaScript concepts (e.g., addEventListener, setInterval, Array methods) and CSS properties.

    o W3Schools: Used for quick reference on JavaScript and CSS syntax.

    o Stack Overflow: Consulted for solutions to specific programming challenges, such as managing timer intervals.

• Any code snippets inspired by or adapted from the above sources are credited in code comments above the relevant sections.


### Honorable mentions

Thank you to my mentor, Richard Wells, who gave a significant amount of his time to provide me with feedback and ideas on the project.



















 



