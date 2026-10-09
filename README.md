# Real Time Character Counter

A simple and interactive web application built using HTML, CSS, and JavaScript that counts the characters entered in a text area in real time. The application allows users to enter up to 50 characters and automatically prevents additional characters from being entered.

## Features

- **Real-Time Counting:** Updates the character count whenever the user types or deletes text.
- **Character Limit:** Restricts the input to a maximum of 50 characters.
- **Automatic Trimming:** Automatically removes extra characters if the input exceeds the limit.
- **Limit Indicator:** Changes the character counter text to red when the 50-character limit is reached.
- **Simple Interface:** Provides a clean and user-friendly design.

## Technologies Used

- HTML5
- CSS3
- JavaScript

## How It Works

1. The HTML creates a text area and a character counter.
2. CSS styles the page, text area, and counter.
3. JavaScript listens for the `input` event.
4. The `.length` property counts the characters entered.
5. The `slice()` method limits the text to the first 50 characters.
6. When the count reaches 50, the counter text changes to red.

## Project Structure

```text
real-time-counter/
├── index.html
├── styles.css
├── script.js
└── README.md
```

## What I Learned

- Selecting HTML elements using `document.querySelector()`.
- Handling events using `addEventListener()`.
- Using the `input` event to track user input.
- Counting characters with the `.length` property.
- Using `slice()` to limit text.
- Updating text with `textContent`.
- Changing styles dynamically using JavaScript.

## Purpose

This project helped me practice DOM manipulation, event handling, string methods, and real-time updates using JavaScript.

