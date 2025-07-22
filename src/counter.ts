import { debounce } from "./debounce";

export default function setupCounter(button: HTMLButtonElement) {
  let count = 0;
  const update = () => {
    count++;
    button.innerText = `Count: ${count}`;
  };

  button.addEventListener("click", debounce(update, 300));
  button.innerText = `Count: ${count}`;
}
