const prsAtm = require('prs-atm/dist');
console.log(` ------------- output ---------------`);
console.log(Object.keys(prsAtm));
(async ()=> {
    console.log(await prsAtm.producer.getAll());
})();
