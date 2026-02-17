# MyTodoApp 📱

A modern and feature-rich Todo application built with React Native. Manage your tasks efficiently with authentication, task filtering, and reminders.

## 🚀 Features

- **User Authentication**
  - Email/Password registration and login
  - Google Sign-In integration
  - Secure password management

- **Task Management**
  - Add new tasks with title, notes, and tags
  - Edit existing tasks
  - Delete tasks
  - Search and filter tasks
  - Set date & time reminders
  - Tag tasks as "Urgent" or "Normal"

- **User Profile**
  - View profile information
  - Edit profile details
  - Change password

- **User Interface**
  - Modern and clean design
  - Bottom tab navigation
  - Splash screen
  - Empty state handling
  - Responsive layouts

## 🛠️ Tech Stack

- **React Native** 0.76.6
- **TypeScript**
- **Redux Toolkit** - State management
- **Firebase**
  - Authentication
  - Cloud Firestore
- **React Navigation** - Stack & Bottom Tabs
- **Google Sign-In** - Social authentication
- **React Native Vector Icons**
- **Moment.js** - Date handling

## 📋 Prerequisites

- Node.js >= 18
- React Native development environment set up
- Android Studio (for Android) / Xcode (for iOS)
- Firebase project configured
- Google Sign-In credentials

## 🔧 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd MyTodoApp
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Configure Firebase:
   - Add your `google-services.json` file in `android/app/`
   - Configure Firebase in your project

4. Set up environment variables:
   - Add your Google Client ID for Google Sign-In

## 🏃 Running the App

### Start Metro Bundler:
```bash
npm start
# or
yarn start
```

### Run on Android:
```bash
npm run android
# or
yarn android
```

### Run on iOS:
```bash
npm run ios
# or
yarn ios
```

## 📁 Project Structure

```
MyTodoApp/
├── src/
│   ├── components/      # Reusable components (Button, InputField, TodoCard, etc.)
│   ├── screens/         # App screens (Home, Login, Register, Profile, etc.)
│   ├── navigation/      # Navigation configuration
│   ├── store/           # Redux store and slices
│   ├── hooks/           # Custom React hooks
│   ├── constant/        # Constants and configurations
│   └── types/           # TypeScript type definitions
├── App.tsx              # Main app component
└── package.json         # Dependencies and scripts
```

## 🎯 Key Features Explained

### Authentication Flow
- Splash screen → Get Started → Login/Register
- After authentication, navigate to main app with bottom tabs

### Task Management
- Tasks are stored in Firebase Firestore
- Each task includes: title, notes, tags, date/time, and user association
- Real-time updates using Redux state management

### Navigation
- Stack Navigation for authentication and detail screens
- Bottom Tab Navigation for main app screens (Home, Add Task, Profile)

## 📝 Available Scripts

- `npm start` - Start Metro bundler
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm test` - Run tests
- `npm run lint` - Run ESLint

## 🔐 Firebase Setup

Make sure you have:
1. Firebase project created
2. Authentication enabled (Email/Password and Google)
3. Firestore database initialized
4. `google-services.json` configured for Android
5. Google Sign-In client ID configured

## 📱 Screens

- **Splash** - Initial loading screen
- **Get Started** - Welcome screen
- **Login** - User login
- **Register** - New user registration
- **Home** - Task list with search
- **Add Task** - Create new task
- **Edit Task** - Modify existing task
- **Profile** - User profile view
- **Edit Profile** - Update profile information
- **Edit Password** - Change password

## 🤝 Contributing

This is a bootcamp project. Feel free to explore and learn from the codebase.

## 📄 License

Private project for educational purposes.

---

Made with ❤️ using React Native
