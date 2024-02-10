class User{
    constructor(name, email)
    {
        this.name = name;
        this.email = email;
    }

    viewData()
    {
        console.log("view your data");
    }
}

class Admin extends User{
    constructor(name, email)
    {
        super(name, email);
    }
    editData()
    {
        console.log("edit user data");
    }
}

let student1 = new User("abc", "abc@email.com");
let student2 = new User("123", "123@email.com");

let admin = new Admin("admin", "admin@email.com");