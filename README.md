# Podcast App

A responsive podcast browsing application built with vanilla JavaScript, HTML, and CSS.

## Features

- Browse podcast shows on the landing page
- View podcast cover image, title, genres, seasons, and updated dates
- Open podcast details in a responsive modal
- Responsive design for mobile and desktop
- Modular JavaScript architecture
- Reusable utility and service modules
- JSDoc documented functions and modules

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES Modules)

## Project Structure

```bash
src/
│
├── components/
│   ├── createModal.js
│   └── createPodcastCard.js
│
├── utils/
│   ├── createElement.js
│   ├── dateUtils.js
│   └── genreService.js
│
├── views/
│   └── createGrid.js
│
├── data.js
└── index.js
```

## JavaScript Principles Applied

### Object-Oriented Programming

- Encapsulated modal functionality
- Modular component architecture

### Functional Programming

- Array methods such as:
  - `map()`
  - `find()`
  - `join()`

### SOLID Principles

- Single Responsibility Principle applied across modules
- Separation of concerns between rendering, utilities, and data handling

## Responsive Design

The application is fully responsive across:

- Mobile devices
- Desktop screens

Media queries and flexible grid layouts are used to ensure a consistent user experience.

## Getting Started

1. Clone the repository

```bash
git clone https://github.com/mughammadcase/MUGCAS25563_PTO2508_Mughammad_Case_DJS01.git
```

2. Open the project folder

```bash
cd MUGCAS25563_PTO2508_Mughammad_Case_DJS01
```

3. Run the project

Open with `Live Server` by right clicking the index.html file

## Author

Mughammad Case
