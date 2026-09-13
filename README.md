# Dev Stack Builder

A responsive React and TypeScript website where developers can explore different technologies and build their own development stack.

## Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* React Toastify
* JSON
* Vite

## Features

* Explore different technologies with their category, difficulty, rating, badge, and description.
* Add technologies to your own stack and prevent duplicate selections.
* Remove individual technologies or clear the entire stack with toast notifications.

## React Questions & Answers

### 1. What is JSX, and why is it used in React?

JSX lets us write HTML-like code inside JavaScript. It makes React UI easier to write and understand.

### 2. What is the difference between props and state?

Props send data from a parent to a child. State stores data that can change inside a component.

### 3. What does the useState hook do, and where did you use it in this project?

`useState` stores data that can change. I used it in `Technology.tsx` to store the technologies added to the user's stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

`useEffect` is used for side effects like fetching data. I did not use it here because I used React's `use()` and `Suspense` to load the JSON data.

### 5. Why does every item in a .map() list need a unique key prop?

The `key` helps React identify each item and update the list correctly when something changes.

### 6. What is conditional rendering?

Conditional rendering means showing different UI based on a condition. I used it in `YourStack` to show an empty message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

The parent sends data through props. A child can send data back by calling a function passed through props.
