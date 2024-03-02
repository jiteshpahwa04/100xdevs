interface UserM {
    id: string;
    name: string;
}

type UsersM = { [key: string]: UserM };

const usersM: UsersM = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

// RECORD // --> A Typescript thing
interface Userr {
    id: string;
    name: string;
}

type UsersR = Record<string, Userr>;

const usersR: UsersR = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(usersR['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


// MAPS // --> A Javascript / C++ thing
interface UserG {
    id: string;
    name: string;
}

// Initialize an empty Map
const usersMap = new Map<string, UserG>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });

// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }