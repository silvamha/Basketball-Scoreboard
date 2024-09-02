## Toggling Background Color with JavaScript and CSS

This code snippet demonstrates how to toggle the background color of an HTML element using JavaScript and CSS classes.

**JavaScript**

```javascript
// Ensure the container has a class to toggle
container.classList.add('toggle-background');

container.addEventListener('click', () => {
    if (container.classList.contains('red-background')) {
        container.classList.remove('red-background');
        container.classList.add('transparent-background');
    } else {
        container.classList.remove('transparent-background');
        container.classList.add('red-background');
    }

    console.log("I've been clicked!");
});