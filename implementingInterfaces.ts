/***** Implementing interfaces from interfaces.ts *****/
// GetSubscriptionMember and SubscriptionMember is from the interfaces.ts file
import { GetSubscriptionMember, SubscriptionMember } from './interfaces'
// can use aliases if wanted
// import * as Subscriptions from './interfaces'


class GetSubscription implements GetSubscriptionMember {
    GetSubscriptionMember(): SubscriptionMember {
        // return SubscriptionMember object
        return {
            subscriptionFee: 10,
            enrollmentDate: new Date(2020, 6, 1),
            enrollmentStatus: 'A',
            id: 1,
            firstName: 'John',
            lastName: 'Smith',
            email: 'some@email.com',
            phone: '555-555-5555',
            address: {
                addressLineOne: '',
                city: 'Dallas',
                state: 'TX',
                country: 'USA',
                postalCode: '55555-0000'
            }
        }
    }
}

// get the subscription
const subscription = new GetSubscription();
console.log('Getting subscription member...');
let member = subscription.GetSubscriptionMember();
console.log(member);
console.log();

// deconstruct the returned object
// can also alias the property by assigning a name after a colon ':'
// example: {id: memberId}
let { id: memberId, firstName, lastName, address }: SubscriptionMember = member;
console.log(`Destructured properties: MemberId: ${memberId}, First Name: ${firstName}, Last Name: ${lastName}, Address: ${address.city}, ${address.state}`);
console.log();

// deconstruct arrays example
// member1: first index, member2: second index, ...restMembers: remaining array indexes
let [member1, member2, ...restMembers]: SubscriptionMember[] = [
    {
        subscriptionFee: 10,
        enrollmentDate: new Date(2020, 6, 1),
        enrollmentStatus: 'A',
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
        email: 'some@email.com',
        phone: '555-555-5555',
        address: {
            addressLineOne: '',
            city: 'Dallas',
            state: 'TX',
            country: 'USA',
            postalCode: '55555-0000'
        }
    },
    {
        subscriptionFee: 11,
        enrollmentDate: new Date(2021, 1, 1),
        enrollmentStatus: 'A',
        id: 1,
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'some@email.com',
        phone: '555-555-5555',
        address: {
            addressLineOne: '',
            city: 'New York',
            state: 'NY',
            country: 'USA',
            postalCode: '22222-0000'
        }
    },
    {
        subscriptionFee: 10,
        enrollmentDate: new Date(2000, 3, 14),
        enrollmentStatus: 'A',
        id: 1,
        firstName: 'Homer',
        lastName: 'Simpson',
        email: 'some@email.com',
        phone: '555-555-5555',
        address: {
            addressLineOne: '',
            city: 'Springfield',
            state: 'IL',
            country: 'USA',
            postalCode: '44444-0000'
        }
    }
]

console.log(`Member one: ${member1.firstName}`);
console.log(member1);
console.log(`Member two: ${member2.firstName}`);
console.log(member2);
console.log(`Remaining member(s): ${restMembers.length}`);
console.log(restMembers);
console.log();

export { }