
import { batchName, alertSomething as customAlert, default as customFunc } from './functions';

// another and simple way for default import // prefere this way for default export
import promptUsr, { questionUser } from './utils';

console.log(batchName);

customAlert();

customFunc();

promptUsr();

questionUser('Are You sure ?');