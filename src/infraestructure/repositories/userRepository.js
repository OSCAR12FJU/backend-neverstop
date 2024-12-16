const users = [
    {
       id: 1, 
       email: 'floresquispeoscar109@gmail.com', 
       password: 'Fuerzaabasto1@',
    }
]

export const userRepository = {
    findByEmail: async (email) =>{
        return users.find((user) => user.email === email);
    }
}