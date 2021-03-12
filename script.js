/**
 * 08 JS applied: DOM and Events
 */

// Follow-me: getAttribute()


// Follow-me: setAttribute()




// An array of different images of cars
const cars = [
    'https://images.unsplash.com/photo-1555626906-fcf10d6851b4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
    'https://images.unsplash.com/photo-1597404294360-feeeda04612e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    'https://images.unsplash.com/photo-1489824904134-891ab64532f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2389&q=80'
];
// DOM query on the button:

// An eventlistener which changes the value in the src attribute on the image:


/**
 * Assignment 1:
 * 
 * Create a script which adds a paragraph to the bottom of the webpage
 * when the user has scrolled to the bottom. The paragraph should say:
 * 'Top the top' and contain a link to the top of the page (use the id
 * of the body)
 * If you need help, watch this: https://youtu.be/V9CY0F4Wc7M  
 * 
 */




/**
 * Assignment 2:
 * 
 * Create a script which changes the background color of the webpage 
 * based on which of the three paragraphs (red/green/blue) the mouse 
 * hovers on.  
 * 
 */

// DOM query on the three paragraphs

// Add eventlistener on the three paragraphs - Event type: mouseover

// When an event happens the color of the body changes, you do this by
// adding a CSS class to the body (the classes are in style.css)






/**
 * 
 * Scroll event code from video: https://youtu.be/V9CY0F4Wc7M
 * 
 */

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    console.log(scrollable);

    if (Math.ceil(scrolled) === scrollable) {
        alert('You have reached the bottom');
    }
})


/**
 * 
 * Event flow: Bubbling and capturing
 * 
 */

const ul = document.querySelector('ul');
const li = document.querySelector('li');
const link = document.querySelector('a');

// event bubbling
/* ul.addEventListener('click', () => {
    alert('you clicked the ul');
});
li.addEventListener('click', () => {
    alert('you clicked the li');
});
link.addEventListener('click', () => {
    alert('you clicked the link');
}); */

// event capturing:
ul.addEventListener('click', () => {
    alert('you clicked the ul');
}, true);
li.addEventListener('click', () => {
    alert('you clicked the li');
}, true);
link.addEventListener('click', () => {
    alert('you clicked the link');
}, true);