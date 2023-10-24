# SendX-Frontend
## Table of Contents
- [About](#about)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Setup](#setup)
- [Assignment Requirement](#assignment-requirement)
- [Pages](#pages)
- [Temporary api end point ](#temporary-api-end-point )


## About

The Vue.js Embedded Form Creator is a single-page application. With an intuitive user interface and a set of well-structured screens, this app streamlines the form creation process, allowing users to generate custom embedded forms seamlessly.

## Features

- **Form Type Selection**: Users can choose from various form types, including embedded forms, landing pages, and popup forms.

- **User-Friendly Interface**: The app provides an easy-to-navigate, user-friendly interface, making form creation accessible to all.

- **Real-Time Preview**: As users customize their forms, they can view real-time previews, ensuring the form's appearance matches their vision.

- **Customization Options**: Users have the flexibility to customize the form's layout, content, and behavior to align with their specific needs.

- **Export and Integration**: Once a form is created, it can be easily exported and integrated into the desired product or platform.

### Built With

- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/?ref=cal.com)

## Getting Started

Provide instructions on how to get your project up and running. Include any prerequisites, installation steps, and initial configuration. This should be a step-by-step guide to help users or contributors start using your project.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

- **Code Editor**: You'll need a code editor to work on this project. We recommend using [Visual Studio Code](https://code.visualstudio.com/) for the best development experience. Additionally, consider installing the following extensions for Vue.js and Tailwind CSS development:

  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shashirith/sendX-frontend-IEC2020069.git
   ```
2. Go to the project folder
   ```sh
   cd sendx-frontend-IEC2020069
   ```
3. Install packages with npm
   ```sh
   npm i
   ```
4. Start  your applicatoin using
   ```sh
   npm run dev
   ```
5. Start your Server using
   ```sh
   node server.js
   ```
### Setup

1. Clone the repo into a public GitHub repository (or fork https://github.com/shashirith/sendX-frontend-IEC2020069/fork). 
   ```sh
   git clone https://github.com/shashirith/sendX-frontend-IEC2020069.git
   ```
   > If you are on Windows, run the following command on `gitbash` with admin privileges: <br> > `git clone -c core.symlinks=true https://github.com/calcom/cal.com.git` <br>
   > See [docs](https://cal.com/docs/how-to-guides/how-to-troubleshoot-symbolic-link-issues-on-windows#enable-symbolic-links) for more details.
2. Go to the project folder
   ```sh
   cd sendx-frontend-IEC2020069
   ```
3. Install packages with npm
   ```sh
   npm i
   ```
4. Start  your applicatoin using
   ```sh
   npm run dev
   ```
## Assignment Requirement
**You need to create a largely pixel perfect design. You can use dummy images (placeholder images) for screen 2 & 3 ( the design & content screen ) for simplicity**

I've meticulously crafted a pixel-perfect design using Tailwind CSS for my project. The design showcases stunning visuals with images sourced from my local /src/assets directory, ensuring a visually engaging and dynamic user experience.

### Good to have:
**It will be better if you can create a simple API endpoint to which the entire configuration which the user selected can be sent via HTTP Post request.**
I've swiftly set up an HTTP server using Express, creating an efficient endpoint for my project. With Express installed, I'm ready to handle incoming requests and deliver responses seamlessly

### Great to have:

I've harnessed a pre-built design template from the demo at https://vue-email-editor-demo.netlify.app/ to elevate my project's visual appeal. This efficient template serves as the foundation for my user interface, reducing design overhead and accelerating development.
## Navigation Component
This Vue.js navigation bar component offers a sleek and user-friendly interface with logo, navigation links, action buttons, and user profile, enhancing your web application's navigation and user experience.

<img width="1411" alt="nav" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/3407c6fa-5da2-4bfd-8547-437bd4b432d5">

## Subnavigation Component
This Vue subnavigation component is designed to complement your web application's primary navigation. It provides **breadcrumb**-style navigation links, indicating the user's current location within the application.

<img width="1407" alt="subNav" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/c9a5fadd-3ad2-482b-927a-9b17266d0882">

## Pages

### Type Page

The Vue.js Form Type Selector Component is designed to allow users to choose the type of form they want to create for their website. The component is built using Vue 3 and leverages the Vue Router for navigation. It provides an intuitive interface for selecting from different form types, such as embedded forms, landing pages, and popup forms.

![58a51b9a-9d5c-4354-b08b-4e44c1c1bb0b](https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/18a15a73-6bcc-4565-8b2f-da82da7b9e8a)

### Design Page

This design page allows users to search and select templates, providing a seamless experience for customizing their forms. With an intuitive interface, users can easily find the perfect template to match their preferences and needs.

<img width="1440" alt="design" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/bb38a0fc-9848-4a8f-8a76-a70599ccdbcb">

### Content Page

I have Used an excellent drag-n-drop email editor by Unlayer as a Vue wrapper component. 
This is the most powerful and developer friendly visual email builder for your app.

![e7bb15ec-cf16-4d7b-a818-97405314f368](https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/f5560fb1-4e76-4830-b23f-8d9a8821dd4b)

#### Methods

| method         | params              | description                                             |
| -------------- | ------------------- | ------------------------------------------------------- |
| **loadDesign** | `Object data`       | Takes the design JSON and loads it in the editor        |
| **saveDesign** | `Function callback` | Returns the design JSON in a callback function          |
| **exportHtml** | `Function callback` | Returns the design HTML and JSON in a callback function |

See the [example source](https://github.com/unlayer/vue-email-editor/tree/master/src) for a reference implementation.

### Targeting Page

The Targeting Page features a user-friendly navigation setup. Users can easily navigate back to the previous page using the **Go Back** button or proceed to the next step with the **Continue** button. This streamlined navigation enhances the user experience, ensuring efficient progression through the application's workflow.

<img width="1440" alt="targeting" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/fb9a3433-b0bb-4ef0-9cb0-5ca99de8b9c3">

### Behaviour Page

This  component represents a configuration page with an intuitive UI for defining when a popup should appear to website visitors. Users can select from various options, including entry and exit triggers, as well as advanced settings like scroll percentage and timing. It allows you to control the display frequency, ensuring a tailored experience. Users can also toggle advanced options for more specific behavior configuration. The "Last updated" feature enables users to track changes, enhancing user experience and functionality.

<img width="1440" alt="Behavior" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/66ff8a7e-1061-4c8d-94f1-436f05891425">

## Success Page

This component is a configuration page for specifying actions that occur after the successful submission of a form. Users can choose from different options, such as doing nothing, redirecting to a URL, or specifying a custom condition. The page provides a clear and straightforward interface, allowing users to define the behavior based on their preferences.

<img width="1440" alt="success" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/8c8664e9-fed1-465d-a0dc-909bf2b3637e">

## Additional Information

All the component uses Vue Router to navigate between pages and makes POST requests to a local server endpoint. Users can input numeric values, and the component ensures the input is within a valid range. It also features a "Go back" button for easy navigation and a "Finish" button to apply the settings.

## Performance

This  emphasizes that the PWA is optimized for larger screens and not exclusively for mobile use. Feel free to further customize it based on your app's unique features and target audience.

<img width="634" alt="Screenshot 2023-10-23 at 5 09 16 PM" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/43d402dd-8671-4181-beb0-bd22ab9a04e2">

## Temporary api end point  
The main route of the server is set up to handle POST requests at '/data'. When a POST request is received, it extracts the data from the request body and then writes this data to a local JSON file named 'data.json'. If the data is saved successfully, the server responds with a status code of 200 and the message 'Data saved successfully.' In case of any errors during the saving process, it responds with a status code of 500 and the message 'Error saving data.'

The server logs information to the console for tracking server activities, such as when it starts running. This server allows the client application to persist data by saving it to a local JSON file, providing a simple yet effective storage mechanism.

<img width="546" alt="file storage" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/18b52d7a-033f-4d32-828f-b2a204c6adce">



### Official Resources

- [Documentation](https://vitejs.dev/)
- [GitHub Repo](https://github.com/vitejs/vite)
- [Release Notes](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md)
- [Vue 3 Docs](https://vuejs.org/)
- [Awesome Vue](https://github.com/vuejs/awesome-vue)
- [Migration from v2](https://vitejs.dev/guide/migration.html)
