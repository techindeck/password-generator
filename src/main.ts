import './style.css';
import {
  generatePassword,
  copyPassword,
  resetPassword,
  InputData,
} from './action.ts';
import techindeckLogo from '/techindeck.svg';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
     <div class="container">
      <h1>Password Generator</h1>
      <form id="password-form">
        <div>
          <label for="length">Password Length:</label>
          <input
            type="number"
            id="length"
            name="length"
            min="8"
            value="32"
            aria-labelledby="length-label"
          />
        </div>
        <br />
        <div>
          <input
            type="checkbox"
            id="uppercase"
            checked
            aria-labelledby="uppercase-label"
          />
          <label id="uppercase-label" for="uppercase"
            >Include Uppercase Letters</label
          >
        </div>
        <div>
          <input
            type="checkbox"
            id="lowercase"
            checked
            aria-labelledby="lowercase-label"
          />
          <label id="lowercase-label" for="lowercase"
            >Include Lowercase Letters</label
          >
        </div>
        <div>
          <input
            type="checkbox"
            id="numbers"
            checked
            aria-labelledby="numbers-label"
          />
          <label id="numbers-label" for="numbers">Include Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="special"
            checked
            aria-labelledby="special-label"
          />
          <label id="special-label" for="special"
            >Include Special Characters</label
          >
        </div>
        <br />
        <br />
        <div class="action">
          <button type="button" id="generate-button">Generate Password</button>
          <button type="button" id="reset-button">Reset Password</button>
          <button type="button" id="copy-button">Copy Password</button>
        </div>
      </form>
      <div id="result" aria-live="polite">
        <h5>Generated Password:</h5>
        <textarea name="password" id="password" readonly rows="5" placeholder="click 'Generate Password' to generate a password"></textarea>
        <!-- <p id="password"></p> -->
        <!-- <div id="password-info">
          <p id="length-info"></p>
          <p id="uppercase-info"></p>
          <p id="lowercase-info"></p>
          <p id="numbers-info"></p>
          <p id="special-info"></p>
        </div> -->
      </div>
      
    </div>
    <div id="footer">
      <span>Developed by</span>
      <a
        href="https://www.linkedin.com/company/techindeck"
        target="_blank"
        title="Technology Innovation Deck"
        >
        <img width="50" src=${techindeckLogo} alt="Techindeck" />
        </a
      >
    </div>
`;

const inputData = {
  controls: {
    lengthInput: document.getElementById('length') as HTMLInputElement,
    uppercaseInput: document.getElementById('uppercase') as HTMLInputElement,
    lowercaseInput: document.getElementById('lowercase') as HTMLInputElement,
    numbersInput: document.getElementById('numbers') as HTMLInputElement,
    specialCharInput: document.getElementById('special') as HTMLInputElement,
  },
  passwordSelector: document.getElementById('password') as HTMLTextAreaElement,
} as InputData;
const generateButton = document.getElementById(
    'generate-button'
  ) as HTMLButtonElement,
  resetButton = document.getElementById('reset-button') as HTMLButtonElement,
  copyButton = document.getElementById('copy-button') as HTMLButtonElement;

generatePassword(generateButton, inputData);

copyPassword(copyButton, inputData.passwordSelector);

resetPassword(resetButton, inputData);
