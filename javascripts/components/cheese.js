import utilities from '../helpers/utilities.js';

const printCheeseOptions = () => {
    const domString = `
    <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input" id="customSwitch1">
        <label class="custom-control-label" for="customSwitch1">Cheddar</label>
    </div>
    `;
    utilities.printToDom('cheese-counter', domString);
};

export default { printCheeseOptions };