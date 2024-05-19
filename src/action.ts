export type ControlSelector = {
  lengthInput: HTMLInputElement;
  uppercaseInput: HTMLInputElement;
  lowercaseInput: HTMLInputElement;
  numbersInput: HTMLInputElement;
  specialCharInput: HTMLInputElement;
};

export type InputData = {
  passwordSelector: HTMLTextAreaElement;
  controls: ControlSelector;
};

export function generatePassword(
  actionSelector: HTMLButtonElement,
  config: InputData
) {
  actionSelector.addEventListener('click', () => generate(config));
}

export function copyPassword(
  actionSelector: HTMLButtonElement,
  passwordSelector: HTMLTextAreaElement
) {
  actionSelector.addEventListener('click', () => copy(passwordSelector));
}

export function resetPassword(
  actionSelector: HTMLButtonElement,
  config: InputData
) {
  actionSelector.addEventListener('click', () => reset(config));
}

function generate(_itd: InputData) {
  const char_length = Number(_itd.controls.lengthInput.value);
  const includeUppercase = _itd.controls.uppercaseInput.checked;
  const includeLowercase = _itd.controls.lowercaseInput.checked;
  const includeNumbers = _itd.controls.numbersInput.checked;
  const includeSpecial = _itd.controls.specialCharInput.checked;

  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const NUMBERS = '0123456789';
  const SPECIAL = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characters = '';
  if (includeUppercase) characters += UPPERCASE;
  if (includeLowercase) characters += LOWERCASE;
  if (includeNumbers) characters += NUMBERS;
  if (includeSpecial) characters += SPECIAL;

  if (characters === '') {
    _itd.passwordSelector.textContent =
      'Please select at least one character set';
    return;
  }

  let password = '';
  for (let i = 0; i < char_length; i++) {
    const randomIndex =
      crypto.getRandomValues(new Uint32Array(1))[0] % characters.length;
    password += characters[randomIndex];
  }

  // set result div display to block
  // resultElement.style.display = 'block';
  _itd.passwordSelector.textContent = password;
}

function copy(passwordElement: HTMLTextAreaElement) {
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
      alert('Failed to copy password: ' + err);
    });
}

function reset(_itd: InputData) {
  _itd.controls.lengthInput.value = '32';
  _itd.controls.uppercaseInput.checked = true;
  _itd.controls.lowercaseInput.checked = true;
  _itd.controls.numbersInput.checked = true;
  _itd.controls.specialCharInput.checked = true;
  _itd.passwordSelector.textContent = '';
}
