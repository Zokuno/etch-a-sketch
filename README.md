<h1 align="center">Etch-a-Sketch</h1>

##### This is my take on the Etch-a-Sketch project assignment provided by 'The Odin Project'.

### Tech used: 
* HTML 
* CSS 
* JavaScript

### What/Why?
##### As part of my learning via ['The Odin Project'](www.theodinproject.com), I was tasked with creating an Etch-a-Sketch in a webpage. The brief for the project was:
* ##### Create a webpage with a grid of square divs
* ##### Set up a “hover” effect so that the grid divs change colour when your mouse passes over them
* ##### Allow the user to adjust number of squares per side for the new grid

##### and for extra credit:

* ##### Rather than grid divs changing to a set colour, each interaction should randomize the square’s RGB value entirely  
* ##### Implement a progressive darkening effect where each interaction adds 10% more black or color to the square

### How?

##### I created a function called **_gendivs()_** using JavaScript which would generate a 32x32 grid of HTML divs, and added a _"mouseover"_ event listener on each one.  
##### The event listener utilizes a function **_handleMouseOver_** outside of **_gendivs()_** to handle the _"mouseover"_ event listener, which initially would change the background colour of a div to black.  
##### I found that having the **_handleMouseOver_** function inside of **_gendivs()_** caused the webpage to take a significant amount of time to load.

##### I created a slider to allow the user to change the grid size, added two color inputs to handle fill grid with colour and pen colour functions, and added buttons for the "modes" - rainbow (randomise RGB) and opacity (add 10% more colour on each mouseover). I then added "click" event listeners to these elements which would add or remove 'active' to the classList.

##### The **_handleMouseOver_** function mentioned earlier contains a range of 'if else' statements which look for what element currently contains 'active', allowing ease of mode/colour switching.


### Optimizations and Future Improvements

##### - As mentioned before, I found that using an event listener function inside of the **_gendivs()_** function caused massive lag issues, so I moved it outside of the **_genDivs()_** function  
##### - I used alot of 'repeating code' (e.g. the button event listeners), so I believe with enough time I could likely refactor the project to not have so many repeats. This could potentially involve the use of arrays/objects.

### Lessons Learned:

##### This took a lot longer than I expected it would - partly to life events and partly to laziness. I spent over a year of not coding since my last project 'Rock, Paper, Scissors', and as a result I found myself having to relearn alot of CSS and JavaScript concepts. Since picking up coding/this project again I've learned I need to make a more conscious effort to code every day in order to retain the knowledge I've worked so hard to learn.  
##### This project allowed me to see how JavaScript can be used to change CSS and HTML which has greatly expanded my understanding of web development.
