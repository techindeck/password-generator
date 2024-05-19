# Password Generator

A web-based application for generating strong and secure passwords. This tool allows you to customize the length and character set of the generated password, and provides options to include uppercase letters, lowercase letters, numbers, and special characters.

## Features

- Customizable password length (8-128 characters)
- Options to include/exclude:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Special characters
- Easy-to-use interface
- Password copy functionality with visual feedback
- Secure password generation using the `crypto` API

<!-- ## Live Demo

Check out the live demo [here](https://spdocumentad.github.io/password-generator). -->

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/techindeck/password-generator.git
   ```

2. Navigate to the project directory:

   ```bash
   cd password-generator
   ```

3. Install the dependencies:

    ```bash
   npm install
   ```

4. Generate SSL certificates (optional, for HTTPS):

    ```bash
   npm run cert
   ```

5. Start the Server:

  ```bash
   npm start
   ```

6. Open your browser and go to `https://localhost:3000` to use tge application

## Usage

1. Open the application.
2. Set your desired password length.
3. Select the character sets you want to include in the password.
4. Click the "Generate Password" button to generate a password.
5. Click the "Copy" button to copy the password to your clipboard.

## Project Structure

```
password-generator/
│
├── public/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│── server.js
│── package.json
│── package-lock.json
│── README.md
└── LICENSE

```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/techindeck/password-generator/blob/master/LICENSE) file for details.
