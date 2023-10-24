# SendX-Frontend
## Table of Contents
- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Assignment Requirement](#assignment-requirement)
- [Repository Structure](#repository-structure)
- [Components](#components)
- [Views](#views)
- [Temporary api end point ](#temporary-api-end-point )
- [Video Link](#video-link)
- [Special Thanks](#special-thanks)



## About

<div align="center">
  <img src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/67645d48-d283-4964-8014-24a1e4b6458f" alt="Project Logo">
</div>

The Vue.js Embedded Form Creator is a single-page application. With an intuitive user interface and a set of well-structured screens, this app streamlines the form creation process, allowing users to generate custom embedded forms seamlessly.

# My Info
<table>
  <tr>
    <td>
      <a href="https://drive.google.com/file/d/1xtphjICG_9bb2IUwRsOHIegzICLGdQyT/view" target="_blank">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOl2kXSlxZXOy47YWmfhEBW3q_xrUaQPISgw&usqp=CAU" alt="shashirith" style="width: 30px; height: 30px; border-radius: 50%;">
      </a>
    </td>
    <td style="vertical-align: middle;">Resume</td>
  </tr>
</table>

## Features

- **Form Type Selection**: Users can choose from various form types, including embedded forms, landing pages, and popup forms.

- **User-Friendly Interface**: The app provides an easy-to-navigate, user-friendly interface, making form creation accessible to all.

- **Real-Time Preview**: As users customize their forms, they can view real-time previews, ensuring the form's appearance matches their vision.

- **Customization Options**: Users have the flexibility to customize the form's layout, content, and behavior to align with their specific needs.

- **Export and Integration**: Once a form is created, it can be easily exported and integrated into the desired product or platform.

### Built With

- [Vue.js](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/?ref=cal.com)

# Getting Started
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
## Assignment Requirement

**You need to create a largely pixel perfect design. You can use dummy images (placeholder images) for screen 2 & 3 ( the design & content screen ) for simplicity**

I've meticulously crafted a pixel-perfect design using Tailwind CSS for my project. The design showcases stunning visuals with images sourced from my local /src/assets directory, ensuring a visually engaging and dynamic user experience.

### Good to have:
**It will be better if you can create a simple API endpoint to which the entire configuration which the user selected can be sent via HTTP Post request.**
I've swiftly set up an HTTP server using Express, creating an efficient endpoint for my project. With Express installed, I'm ready to handle incoming requests and deliver responses seamlessly

### Great to have:

I've harnessed a pre-built design template from the demo at https://vue-email-editor-demo.netlify.app/ to elevate my project's visual appeal. This efficient template serves as the foundation for my user interface, reducing design overhead and accelerating development.

## Repository Structure

```sh
└── xyz/
    ├── data.json
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.js
    ├── public/
    ├── server.js
    ├── src/
    │   ├── App.vue
    │   ├── components/
    │   │   ├── Navbar.vue
    │   │   ├── Card.vue
    │   │   ├── FileType.vue
    │   │   ├── NavD.vue
    │   │   └── SubNav.vue
    |   ├── views/
    │   │   ├── Behavior.vue
    │   │   ├── Content.vue
    │   │   ├── Design.vue
    │   │   ├── Success.vue
    │   │   ├── Targeting.vue
    │   │   └── Type.vue
    │   ├── design.js
    │   ├── main.js
    │   └── style.css
    ├── tailwind.config.js
    └── vite.config.js

```

---
# Components
## Navigation Component
The navigation bar  offers a sleek and user-friendly interface with logo, navigation links, action buttons, and user profile, enhancing your web application's navigation and user experience.
### Features

- `Logo Display`: The navigation bar includes a logo display using an icon.

- `Navigation Links`: It provides a list of navigation links that can be customized according to your application's requirements.

- `Action Buttons`: The component includes action buttons, such as a "plus" icon for adding items or any other action relevant to your application.

- `User Profile`: The user's profile image and quick-access icons, like search, notifications, and apps, are included in the navigation bar.

<div align="center">
  <img width="1411" alt="nav" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/3407c6fa-5da2-4bfd-8547-437bd4b432d5">
</div>

## Subnavigation Component
This component is designed to complement your web application's primary navigation. It provides **breadcrumb**-style navigation links, indicating the user's current location within the application.

The component accepts the following properties:

- `route`: The current route object obtained using `vue-router`.
- `routes`: An object that maps section or step names to their respective positions.

<div align="center">
  <img width="1407" alt="subNav" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/c9a5fadd-3ad2-482b-927a-9b17266d0882">
</div>

## FileType Component
This is a radio button component is designed to render a radio button with an associated label, image, and description. 

The component accepts the following properties:
- `name`: A string representing the name of the radio button.
- `description`: A string providing a description for the radio button.
- `src`: A string specifying the image source for the radio button.
- `selected`: A string that determines whether the radio button is selected or not.
- `id`: A string identifier for the radio button.
- `fun`: A function to handle a change event.

<div align="center">
<img width="685" alt="Screenshot 2023-10-24 at 4 41 02 PM" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/27307045-3f19-44d9-98aa-877e76aa2d7d">
 
  The component styles the radio button with a blue border when it's selected and provides a clean, user-friendly interface for selecting options. When a user selects an option, 
 the `fun` function is called to handle the change event.
</div>

## Card Component
This is a clickable card with an icon and title. It can be used for various purposes, such as selecting options or navigating to different views. 

The component accepts the following properties:
- `name`: A string representing the title of the card.
- `src`: A string specifying the image source for the card.
- The component uses Vue Router for navigation and provides a way to handle the click event to perform specific actions.
<div align="center">
  <img src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/654bb57b-5ff9-4117-99f2-0c22de76d44c" alt="Project Logo">

  When a user clicks on the card, the handleChange function is called to perform an action, such as updating form data and navigating to another view.
</div>




# Views

## Type Page

The users can choose the type of form they want to create. It's a crucial part of your form creation process. 
The component includes the following functionalities:

- It uses Vue Router's `RouterLink` to navigate to the next step of the form creation process.
- Users can select from various form types, including "Embedded Form," "Landing Page," and "Popup Form."
- For each form type, a corresponding `FileType` component is rendered, which displays the form type's name, description, and an image.
- When a user selects a form type, the `handleChange` function is called, updating the selected form type in the shared form data via the `formData` injection.
- The component watches the `formData` object for changes and logs the new and previous values.

<div align="center">
<img width="1440" alt="design" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/18a15a73-6bcc-4565-8b2f-da82da7b9e8a">
</div>

## Design Page

The users can browse and select from a variety of available templates for their embedded forms. The code leverages Vue 3's Composition API to manage the template selection functionality.

The component includes the following functionalities:
### Variables and Imports

- `Icon` from '@iconify/vue': This import is used to display search icons in the template selection.

- `Card` from '../components/Card.vue': The 'Card' component is used to display each template in a card format.

- `computed`, `reactive`, `ref`, and `inject` from 'vue': These Vue Composition API functions help in handling reactivity and state management.

- `data[]`: An array of objects containing template information, such as name and image source.

- `searchQuery`: A reactive reference used to store the user's search query for template filtering.

- `filteredData`: A computed property that filters the template data based on the user's search query.

### Template

The template page consists  a search input field and a grid of template cards.

- Search Input Field: Users can input search queries to filter templates. The search input field is enclosed within a stylish container with an associated search icon.

- Template Cards: These cards display template names and images. Each card is generated based on the filteredData computed property.
  
<div align="center">
<img width="1440" alt="design" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/bb38a0fc-9848-4a8f-8a76-a70599ccdbcb">
</div>

## Content Page

I have Used an excellent drag-n-drop email editor by Unlayer as a Vue wrapper component. 
This is the most powerful and developer friendly visual email builder for your app.

<div align="center">
 <img width="1440" alt="Screenshot 2023-10-23 at 5 09 16 PM" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/f5560fb1-4e76-4830-b23f-8d9a8821dd4b">
</div>

### Methods
<div align="center">

| method         | params              | description                                             |
| -------------- | ------------------- | ------------------------------------------------------- |
| **loadDesign** | `Object data`       | Takes the design JSON and loads it in the editor        |
| **saveDesign** | `Function callback` | Returns the design JSON in a callback function          |
| **exportHtml** | `Function callback` | Returns the design HTML and JSON in a callback function |

See the [example source](https://github.com/unlayer/vue-email-editor/tree/master/src) for a reference implementation.

</div>




## Targeting Page
This component is included in the larger workflow of the form creation process. It plays a crucial role in guiding users through the steps of creating and customizing embedded forms.

The component includes the following functionalities:
- The `Go back` link allows users to return to the previous step if they need to make changes or corrections.

- The `Continue` button enables users to proceed to the next step in the form creation process, which is setting the behavior for the form's appearance.
  
<div align="center">
<img width="1440" alt="targeting" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/fb9a3433-b0bb-4ef0-9cb0-5ca99de8b9c3">
</div>

## Behaviour Page

The **Behavior Page** is a crucial component, designed to allow users to configure when and how a popup will appear to website visitors. This page provides a range of options and settings to define the behavior of the popup, offering a seamless and customizable user experience. 

The component includes the following functionalities:
- `Show Popup Trigger`: Users can specify when the popup should appear to website visitors. This includes options such as when a visitor enters the website, exits the website, or based on specific conditions.

- `Advanced Settings`: For more granular control, the "Advanced" section allows users to define specific conditions for showing the popup to visitors. This includes options like showing the popup on every page view, every new browser session, or after a certain number of days.

- `Stopping Popup Display`: Users can determine when the popup should stop being displayed. This can be set to never stop, stop when the visitor successfully completes an action, or stop after a specific number of displays.

- `User-Friendly Input Validation`: The page includes input validation to ensure that users provide valid numeric values. If an invalid input is provided, it will be reverted to the previous valid value.

- `Real-Time Updates`: The "Last updated" feature allows users to track changes and view the date and time of the most recent update.

- `Navigation`: The page offers user-friendly navigation options, including a "Go back" button and a "Continue" button to proceed to the next step in the form creation process.


<div align="center">
<img width="1440" alt="Behavior" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/d5828410-939c-4803-a6bb-d9bc0c667811">
</div>

## Success Page

This component is a configuration page for specifying actions that occur after the successful submission of a form. Users can choose from different options, such as doing nothing, redirecting to a URL, or specifying a custom condition. The page provides a clear and straightforward interface, allowing users to define the behavior based on their preferences.

The component includes the following functionalities:
- `Configuration Options`: Users can configure what happens after the form submission, offering three primary choices:
  - `Do Nothing`: If selected, the form does not trigger any additional actions.
  - `Custom Actions`: Users can specify a custom action based on the number of times the form has been successfully submitted. It allows defining a custom number and action.
  - `Redirect to URL`: Users can set up a URL to which the visitor will be redirected upon successful form submission.

- `Data Validation`: The component ensures that the user-provided value is a numeric input. It also checks if the input is within a valid range (1-100) to provide a seamless user experience.

- `HTTP POST Request`: Upon configuration, the component makes an HTTP POST request to 'http://localhost:3000/data', sending the form data. The response from the server is logged to the console.

- `User Navigation`: Users can easily navigate back to the previous step or proceed to the next by clicking on the respective buttons.

#### Usage
To use this Success Page component, integrate it into your Vue.js application to provide a customizable user experience after form submissions.

<div align="center">
<img width="1440" alt="success" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/8c8664e9-fed1-465d-a0dc-909bf2b3637e">
</div>

### Additional Information

All the component uses Vue Router to navigate between pages and makes POST requests to a local server endpoint. Users can input numeric values, and the component ensures the input is within a valid range. It also features a "Go back" button for easy navigation and a "Finish" button to apply the settings.

## Performance

This  emphasizes that the PWA is optimized for larger screens and not exclusively for mobile use. Feel free to further customize it based on your app's unique features and target audience.

<div align="center">
 <img width="634" alt="Screenshot 2023-10-23 at 5 09 16 PM" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/43d402dd-8671-4181-beb0-bd22ab9a04e2">
</div>

# Video Link
Here's a video showcasing its features:
[Link to Google Drive](https://drive.google.com/file/d/1CY_6MeO0ng0IQ5-defRt4n2cTlQmU7uj/view?usp=drive_link)

## Temporary api end point  
The main route of the server is set up to handle POST requests at '/data'. When a POST request is received, it extracts the data from the request body and then writes this data to a local JSON file named 'data.json'. If the data is saved successfully, the server responds with a status code of 200 and the message 'Data saved successfully.' In case of any errors during the saving process, it responds with a status code of 500 and the message 'Error saving data.'

The server logs information to the console for tracking server activities, such as when it starts running. This server allows the client application to persist data by saving it to a local JSON file, providing a simple yet effective storage mechanism.

<div align="center">
  <img width="546" alt="file storage" src="https://github.com/shashirith/sendx-frontend-IEC2020069/assets/76678053/18b52d7a-033f-4d32-828f-b2a204c6adce">
</div>



### Official Resources

- **[Vite Documentation](https://vitejs.dev/)**: Vite's official documentation provides comprehensive guidance on using Vite, a fast build tool that bridges the gap between development and production.

- **[Vite GitHub Repository](https://github.com/vitejs/vite)**: The Vite GitHub repository is where you can find the source code, report issues, and contribute to the development of Vite.

- **[Tailwind CSS Documentation](https://tailwindcss.com/docs)**: Explore the official Tailwind CSS documentation to learn about the utility-first CSS framework, its classes, and how to use it in your projects.
  
- **[Vite Release Notes](https://github.com/vitejs/vite/blob/main/packages/vite/CHANGELOG.md)**: Stay up-to-date with the latest changes and updates by referring to Vite's release notes.

- **[Vue 3 Documentation](https://vuejs.org/)**: The official Vue 3 documentation offers in-depth information on Vue.js, the progressive JavaScript framework used in your project.

- **[Vite Migration Guide from V2](https://vitejs.dev/guide/migration.html)**: If you are migrating from Vite 2 to Vite, this guide provides the necessary steps and tips for a smooth transition.

# Special Thanks

I wish to extend my heartfelt gratitude to SendX for providing me with an invaluable opportunity to work on this assignment. This experience has significantly contributed to my growth, broadening my horizons and enhancing my knowledge and skills.

## About the Assignment

The assignment presented me with the challenge of mastering the email editor. Throughout this journey, I have not only gained profound insights but have also acquired hands-on experience that will undoubtedly leave a lasting impact on my future endeavors.

## Key Takeaways

I am appreciative of the wealth of knowledge and expertise I have acquired during this assignment. Some of the pivotal takeaways include:

- **Proficiency in Vue.js**: I have acquired a deep understanding of Vue.js, a skill that has significantly enriched my development capabilities.
- **Enhanced Routing**: The assignment has honed my skills in routing, ensuring a seamless and efficient user experience.
- **Optimized Component Structure**: I have fine-tuned my component structure, which will contribute to more robust and maintainable code.

## Conclusion

This assignment has been an enriching journey, and I am enthusiastic about applying the knowledge and skills I have gained to propel my career forward. I extend my sincere thanks to SendX for this remarkable opportunity and eagerly anticipate our continued collaboration.

I wish to express my gratitude to the entire SendX team for entrusting me with this assignment.