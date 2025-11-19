# 🎯 TaskFlow

Streamline Your Productivity

## Overview

TaskFlow is a modern, responsive task management application built with React. It provides a clean and intuitive interface for creating, organizing, and tracking your tasks with a three-column dashboard layout.

#### Create Tasks

Quickly add new tasks with titles and optional descriptions using the intuitive form.

#### Mark as Done

Easily mark tasks as completed with a single click to move them to the done column.

#### Progress Tracking

Monitor your productivity with real-time statistics showing total, pending, and completed tasks.

#### Responsive Design

Works seamlessly across all devices from desktop to mobile with an adaptive layout.

#### Modern UI

Clean, gradient-based design with smooth animations and intuitive user experience.

#### Fast Performance

Optimized React components with efficient state management for smooth interactions.

## Technology Stack

React

JavaScript (ES6+)

CSS3

Axios

HTML5

## Key Components

### App.jsx

The main application component that manages the overall state and layout. It coordinates between the task creation form and the task lists.

### TaskForm.jsx

Handles task creation with form validation, loading states, and submission to the backend API.

### TaskList.jsx

Displays either incomplete or completed tasks with appropriate empty states and loading indicators.

### TaskCard.jsx

Renders individual task items with title, description, creation date, and action buttons.

### api.js

Centralized API service module that handles all HTTP requests to the backend with error handling.

## API Integration

The application connects to a backend API with the following endpoints:

- `GET /tasks/inCompleted` - Fetch incomplete tasks
- `GET /tasks/completed` - Fetch completed tasks
- `POST /tasks` - Create a new task
- `POST /tasks/{id}/done` - Mark a task as done

The API base URL is configured to run on port 8081 of the same host.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Backend API running on port 8081

### Installation

1.  Clone the repository
2.  Install dependencies: `npm install`
3.  Start the development server: `npm run dev`
4.  Ensure the backend API is running on port 8081
5.  Open your browser to the displayed development server URL

### Building for Production

Run `npm run build` to create a production build in the `dist` folder.

## Customization

The application uses CSS custom properties for easy theming. Key variables in `App.css`:

Modify these variables to customize the color scheme and overall appearance.
