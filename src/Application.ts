/**
 * Sample Application Class
 */
export default class Application {
 
    private users: string[]

    constructor(users: string[] = []) {
        this.users = users
    }

    addUser(user: string): void {
        this.users.push(user)
    }

    greet(): void {
        this.users.forEach((user) => console.log(`Hello ${user}`))
    }

}