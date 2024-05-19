'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('generate-button')
    .addEventListener('click', generatePassword);
  document
    .getElementById('reset-button')
    .addEventListener('click', resetPassword);
  document
    .getElementById('copy-button')
    .addEventListener('click', copyPassword);
});

function generatePassword() {
  const length = document.getElementById('length').value;
  const includeUppercase = document.getElementById('uppercase').checked;
  const includeLowercase = document.getElementById('lowercase').checked;
  const includeNumbers = document.getElementById('numbers').checked;
  const includeSpecial = document.getElementById('special').checked;

  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const special = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characters = '';
  if (includeUppercase) characters += uppercase;
  if (includeLowercase) characters += lowercase;
  if (includeNumbers) characters += numbers;
  if (includeSpecial) characters += special;

  if (characters === '') {
    document.getElementById('password').textContent =
      'Please select at least one character set';
    return;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex =
      crypto.getRandomValues(new Uint32Array(1))[0] % characters.length;
    password += characters[randomIndex];
  }

  // set result div display to block
  document.getElementById('result').style.display = 'block';

  document.getElementById('password').textContent = password;
  // document.getElementById('length-info').textContent = `Length: ${length}`;
  // document.getElementById('uppercase-info').textContent = `Uppercase: ${
  //   includeUppercase ? 'Included' : 'Not Included'
  // }`;
  // document.getElementById('lowercase-info').textContent = `Lowercase: ${
  //   includeLowercase ? 'Included' : 'Not Included'
  // }`;
  // document.getElementById('numbers-info').textContent = `Numbers: ${
  //   includeNumbers ? 'Included' : 'Not Included'
  // }`;
  // document.getElementById('special-info').textContent = `Special Characters: ${
  //   includeSpecial ? 'Included' : 'Not Included'
  // }`;
}

function copyPassword() {
  const passwordElement = document.getElementById('password');
  const password = passwordElement.textContent;
  if (!password) {
    alert('Please generate a password first');
    return;
  }

  // Select the password text
  passwordElement.focus();
  passwordElement.select();
  passwordElement.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard
    .writeText(password)
    .then(() => {
      // alert('Password copied to clipboard!');
    })
    .catch((err) => {
      alert('Failed to copy password: ', err);
    });
}

function resetPassword() {
  document.getElementById('length').value = 32;
  document.getElementById('uppercase').checked = true;
  document.getElementById('lowercase').checked = true;
  document.getElementById('numbers').checked = true;
  document.getElementById('special').checked = true;
  document.getElementById('result').style.display = 'none';
  document.getElementById('password').textContent = '';
  // document.getElementById('length-info').value = 0;
}
