/*
Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John";
*/

//** 1 */
interface IEmployee{
    code: number;
    name: string;
}

const RandomEmployee : IEmployee = {
    code: 10,
    name: "John"
}

//** 2 */

const employee = { 
    code: 10, 
    name: "John" 
};

//** 3 */
const employee2: {code: number, name: string} = {
    code: 10,
    name: 'john'
}