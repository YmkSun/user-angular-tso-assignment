export class User {
    private id: number;
    private username: string;
    private fullName: string;
    private password: string;
    private email: string;
    private phone: string;
    private dept: number;
    private role: number;
    private status: number;

    constructor() {
        this.id = 0;
        this.username = '';
        this.fullName = '';
        this.password = '';
        this.email = '';
        this.phone = '';
        this.dept = 0;
        this.role = 0;
        this.status = 0;
    }
}