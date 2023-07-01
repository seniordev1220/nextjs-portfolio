# Portfolio Website Readme

This is a detailed guide to set up, run, and customize your portfolio website built with Next.js, TypeScript, Sass, Material UI, SendGrid, Redux, and Redux Saga.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Feedback](#feedback)


## Introduction

This portfolio website template is built with a combination of powerful technologies to provide an elegant and professional online presence. It leverages Next.js for server-side rendering and routing, TypeScript for type safety, Sass for styling, Material UI for UI components, SendGrid for email integration, and Redux with Redux Saga for state management.

## Features

- Responsive design
- Server-side rendering (SSR) for better performance and SEO
- TypeScript for type safety and enhanced developer experience
- Sass for styling with modular CSS support
- Material UI for beautiful and customizable UI components
- SendGrid integration for sending emails from the website
- Redux and Redux Saga for state management and asynchronous actions

## Requirements

To run this portfolio website, you need the following prerequisites:

- Node.js (version 12 or above)
- npm or yarn package manager
- SendGrid account (for email functionality)

## Installation

1. Clone the repository:
git clone <repository_url>

2. Install the dependencies:

```bash
cd portfolio-website
npm install   # or using yarn: yarn install
```

## Configuration
1. Rename the .env.example file to .env.local.
2. Open the .env.local file and provide the necessary configuration:
```bash
SERVER = <your_sendgrid_api_key>
SENDGRID_API_KEY=<your_sendgrid_api_key>
```
## Usage
To start the development server and run the portfolio website locally, run the following command:
```bash
npm run dev    # or using yarn: yarn dev
```
Access the website in your browser at http://localhost:4000.

### Deployment

The portfolio website has been deployed to https://akmj.social using Vercel. It is automatically built and deployed when changes are pushed to the main branch. The deployment process is handled by Vercel and requires no additional steps.

## Feedback
I value your feedback! If you have any suggestions, improvements, or questions, please feel free to contact me through the contact section on https://akmj.social  or by emailing to anandkrishmj@gmail.com.
