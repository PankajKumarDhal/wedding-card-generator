# Wedding Card Generator

## Overview
A React-based web application for creating personalized wedding invitation cards.

## Features
- Upload bride and groom photos
- Add custom text fields
- Live preview of wedding card
- Responsive design

## Prerequisites
- Node.js (v14 or later)
- npm (v6 or later)

## File Structers
wedding-card-generator/
├── public/
│   ├── index.html
│   └── favicon.ico
└── src/
    ├── components/
    │   ├── ImageUploader.jsx
    │   ├── TextFieldManager.jsx
    │   └── WeddingCardGenerator.jsx
    │   └── WeddingCardTemplate.jsx
    ├── styles/
    │   ├── ImageUploader.module.css
    │   ├── TextFieldManager.module.css
    │   ├── WeddingCardGenerator.module.css
    │   └── WeddingCardTemplate.module.css
    ├── App.js
    └── index.js
├── package.json
└── README.md

## Installation
1. Clone the repository
2. Navigate to the project directory
3. Run `npm install`
4. Run `npm start`

## Available Scripts
- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Removes the single build dependency

## Customization
Modify the CSS in `src/styles/WeddingCardGenerator.css` to change the design.

## Technologies Used
- React
- CSS
- JavaScript