type GreetArg = number | string;

function greeet(id: GreetArg){

}

greeet(1);
greeet("1");

// types cannot be implemented but interfaces can be implemented

type Employeee = {
    name: string,
    startDate: string,
};

interface Manager {
    name: string,
    department: string
};

type techLead = Employeee & Manager;

const t: techLead = {
    name: "Jitesh",
    startDate: 'Today',
    department: "Sales"
}