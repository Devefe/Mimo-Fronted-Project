function caesarCipher(str,
shift) {
 return str.replace(/[a-zA-Z]/g,
  function(c) {
   const base = c < 'a' ? 65 :
   97;
   return String.fromCharCode((c
    .charCodeAt(0) - base +
    shift) % 26 + base);
  });
}

function translate() {
 const plaintext = document
  .getElementById('plaintext')
  .value;
 const shift = parseInt(document
  .getElementById('shift').value);
 const output = caesarCipher(
  plaintext, shift);
 document.getElementById('output')
  .innerText = output;
}

document.getElementById(
 'plaintext').addEventListener(
 'input', translate);
document.getElementById('shift')
 .addEventListener('input',
  translate);
