/***** interfaces *****/
// One major difference between type aliases vs interfaces
// are that interfaces are open and type aliases are closed.


// can make properties optional (nullable) by adding a ?
interface Person {
    id: number;
    prefix?: string;
    firstName: string;
    middleInitial?: string;
    lastName: string;
    suffix?: string;
    dateOfBirth?: Date;
    age?: number;
    gender?: string;
    ethnicity?: string;
    address: Address;
    email: string;
    phone: string;
}

interface Address {
    addressLineOne: string;
    addressLineTwo?: string;
    addressLineThree?: string;
    city: string,
    state?: string,
    country: string,
    postalCode: string;
}


// extending an interface
// export keyword will allow usage outside of the class
export interface SubscriptionMember extends Person {
    subscriptionFee: number;
    enrollmentDate: Date;
    enrollmentStatus: string;
}

// method definition
// export keyword will allow usage outside of the class
// example in implementingInterfaces.ts file
export interface GetSubscriptionMember {
    GetSubscriptionMember(): SubscriptionMember
}

export { }
