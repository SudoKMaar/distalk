# Distalk - A Feature-rich Discord Clone

![Distalk](https://cdn.sanity.io/images/x3sf3c46/production/c331bf6014517e17b863ed057eaaf290ecf650e3-500x500.png)

Distalk is a feature-rich Discord clone built with Next.js, Tailwind CSS, ShadcnUI, and more. It offers a comprehensive communication platform with a beautiful and responsive user interface. Whether you're connecting with friends, colleagues, or communities, Distalk provides a seamless and feature-packed communication experience.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Distalk is designed to replicate the functionality and user experience of Discord while adding unique features and improvements. It caters to users who require a reliable and versatile communication platform.

## Features

Distalk includes a wide range of features to enhance your communication experience:

1. **Unique Invite Link Generation & Invite System**

   - Create unique invite links for your servers.
   - Invite friends and new members with ease.
   - Full-featured invite system with role-based access control.

2. **Infinite Loading for Messages**

   - Enjoy a smooth messaging experience with infinite loading.
   - Messages are fetched in batches of 25 for optimal performance.
   - Powered by tanstack/query for efficient data fetching.

3. **Server Creation and Customization**

   - Create your servers and customize them to suit your needs.
   - Manage server settings, channels, roles, and permissions.
   - Tailor your server's appearance and features.

4. **Beautiful UI with Tailwind CSS and ShadcnUI**

   - Distalk boasts a stunning and responsive user interface.
   - Crafted using Tailwind CSS and ShadcnUI for a polished look.
   - Provides an intuitive and visually appealing design.

5. **User Authentication and Session Management**

   - Secure user registration and login using Clerk.
   - Manage user sessions and permissions seamlessly.

6. **Real-time Chat with Socket.io**

   - Enable real-time communication with friends and server members.
   - Initiate voice and video calls for instant connections.
   - Support for text and rich media content like images, videos, audio and more.

7. **MySQL Database Integration**
   - Store user data, server configurations, and messages efficiently.

## Demo

Explore Distalk's features and functionality through our live demo [here](https://distalk.vercel.app/).

## Technologies Used

Distalk leverages a variety of technologies and libraries to provide its robust functionality:

- **Next.js**: A popular React framework for building server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for creating efficient and customizable designs.
- **ShadcnUI**: A UI component library for React, adding elegant UI elements to the project.
- **tanstack/query**: A data-fetching and state management library for handling API requests.
- **MySQL**: A relational database used to store user data, server configurations, and messages.
- **Socket.io**: A library for enabling real-time communication and chat functionality.
- **Clerk**: For user authentication and session management.

## Installation

Follow these steps to set up Distalk locally:

1. **Clone the Repository**:

   ```shell
   git clone https://github.com/distalk/distalk.git
   ```

2. **Navigate to the Project Directory**:

   ```shell
   cd distalk
   ```

3. **Install Dependencies**:

   ```shell
   npm install
   ```

4. **Set Up Environment Variables**:
   Create a `.env.local` file in the project root directory and configure the required environment variables. Refer to the `.env.example` file for guidance.

5. **Start the Development Server**:

   ```shell
   npm run dev
   ```

6. **Access the Application**:
   Open your web browser and access `http://localhost:3000` to use Distalk locally.

## Usage

1. **User Registration and Login**:

   - Register for an account or log in if you already have one.

2. **Create or Join Servers**:

   - Create your server or join an existing one by using an invitation code.

3. **Chat in Channels**:

   - Inside servers, you can chat in text channels, send messages, and share media.

4. **Voice and Video Calls**:

   - Initiate voice and video calls with friends and server members.

5. **Server Management**:

   - Server owners can customize server settings, invite members, and manage roles and permissions.

6. **Customization**:

   - Personalize your profile with avatars and customize server-specific settings.

7. **Explore and Enjoy**:
   - Explore the features, interact with others, and enjoy a seamless communication experience.

## Contributing

Contributions to Distalk are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.

2. Create a new branch for your feature or bug fix: `git checkout -b feature/my-feature` or `git checkout -b bugfix/fix-issue`.

3. Make your changes and commit them with descriptive messages.

4. Push your changes to your fork: `git push origin feature/my-feature`.

5. Submit a pull request to the main repository's `main` branch.

6. Be sure to follow the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for choosing Distalk for your communication needs. We hope you enjoy using it!
