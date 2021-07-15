
var people = [
    {
        "MemberId": 1770,
        "createdAt": "2016-10-02 23:30",
        "type": "ORGANIZATION",
        "role": "HOST",
        "isActive": true,
        "totalAmountDonated": 0.58,
        "currency": "USD",
        "lastTransactionAt": "2021-07-12 17:07",
        "lastTransactionAmount": -0.5,
        "profile": "https://opencollective.com/opensource",
        "name": "Open Source Collective",
        "company": null,
        "description": "Non-profit fiscal host promoting a healthy and sustainable open source ecosystem",
        "image": "https://opencollective-production.s3.us-west-1.amazonaws.com/97017710-a90f-11e9-b6fb-2bbe7128f780.png",
        "email": null,
        "twitter": "https://twitter.com/opencollect",
        "github": null,
        "website": "https://oscollective.org"
    },
    {
        "MemberId": 1911,
        "createdAt": "2016-10-17 00:00",
        "type": "ORGANIZATION",
        "role": "BACKER",
        "isActive": true,
        "totalAmountDonated": 200,
        "currency": "USD",
        "lastTransactionAt": "2017-01-13 00:00",
        "lastTransactionAmount": 100,
        "profile": "https://opencollective.com/idonethis",
        "name": "I Done This",
        "company": null,
        "description": "More than 160,000 people use I Done This’s easy daily check-ins and powerful progress reports to run more effective and productive teams.",
        "image": "https://opencollective-production.s3-us-west-1.amazonaws.com/06a44500-1ecc-11e7-be1e-a32c54219e24.png",
        "email": null,
        "twitter": "https://twitter.com/idonethis",
        "github": null,
        "website": null
    }
]

for(let i = 0; i < people.length; i++) {
    //people[i].MemberId;
    console.log(people[i].MemberId);
}


