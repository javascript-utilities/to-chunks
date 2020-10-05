"use strict";


/**
 * Updates output element after obtaining input element values
 * @param {MouseEvent:click} _event
 * @listens MouseEvent:click
 */
function to_chunks__button(_event) {
  const expression__input__element = document.getElementById('expression__input');
  const stringy__input__element = document.getElementById('stringy__input');
  const to_chunks__output__element = document.getElementById('to_chunks__output');

  const regular_expression = new RegExp(expression__input__element.value);
  const input = stringy__input__element.value;
  const chunks = toChunks(input, expression__input__element.value);

  to_chunks__output__element.value = JSON.stringify(chunks);
}


window.addEventListener('load', (_event) => {
  document.getElementById('to_chunks__button').addEventListener('click', to_chunks__button);
  to_chunks__button(undefined);
});

