This project proves that a page doesn’t need to reload just to change. JavaScript hooks into the DOM and updates a heading as soon as the user clicks a button. Clean, fast, and user-friendly.

Files
index.html – Page structure with heading and button
script.js – JavaScript that targets DOM elements and updats the heading
README.md – You’re reading it

What to do
Open index.html in a browser
Click the button
The heading changes instantly

Why it works
The script runs after the DOM is loaded. It grabs the button and listens for a click. When that happens, it rewrites the heading’s text using the DOM. Nothing reloads. Nothing breaks.
