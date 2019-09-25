import utilities from '../helpers/utilities.js';

const cheeses = [
    {id: 'cheese1', name: 'Cheddar', price: 50 },
    {id: 'cheese2', name: 'Motzerella', price: 90 },
    {id: 'cheese3', name: 'Colby Jack', price: 100 }, 
    {id: 'cheese4', name: 'Pepper Jack', price: 75 },
    {id: 'cheese5', name: 'Feta', price: 80 }
];

const getSelectedCheeses = () => {
    const selectedCheeses = [];
    const cheeseCheckBoxes = document.getElementsByClassName('cheese');
    
    for (let j = 0; j < cheeseCheckBoxes.length; j++) {
        for (let k = 0; k < cheeses.length; k++) {
            if (cheeseCheckBoxes[j].checked && cheeseCheckBoxes[j].id === cheeses[k].id) {
                selectedCheeses.push(cheeses[k]);
            }
        }
    }
    return selectedCheeses;
}

const printCheeseOptions = () => {
    let domString = '';
    for (let i = 0; i < cheeses.length; i++) {
    domString += `
    <div class="custom-control custom-switch">
        <input type="checkbox" class="custom-control-input cheese" id="${cheeses[i].id}">
        <label class="custom-control-label" for="${cheeses[i].id}">${cheeses[i].name}</label>
    </div>
    `;
    
    utilities.printToDom('cheese-counter', domString);
    };
    
};

export default { printCheeseOptions, getSelectedCheeses };