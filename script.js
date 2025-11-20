const input = document.querySelector("#range");
const value = document.querySelector("#value");
const range_value = document.querySelector(".range-value");

value.textContent = input.value;
update_progress(input.value);

range.addEventListener("input", (e) => {
    let current_value = e.target.value;
    value.textContent = current_value;
    update_progress(current_value);
});

function update_progress(current_value) {
    let progress = current_value / input.max;
    range_value.style.maskImage = `linear-gradient(to top, black 0 ${ 100 * progress - 6}%, transparent ${100 * progress - 8}%`
}