export class Friend {
    firstName: string
    lastName: string
    dob: Date
    _id: string
    createdAt: Date
    updatedAt: Date


    constructor(firstName = "", lastName = "", dob = null){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = dob
    }
}
