const account = {
    "accountId": "54801247-c88f-405b-87bd-0152ac3fe05e", //accounts[0].accountId
    "accountHolder": {
      "firstName": "Fonz",  //accounts[0].accountHolder.firstName
      "lastName": "Cawsby",
      "documentId": "4de4fe2f-e77a-4f0c-87c4-57d2888e801e", //accounts[0].accountHolder.documentId
      "address": "25860 Moland Plaza",
      "email": "fcawsby0@mapy.cz"  //accounts[0].accountHolder.email
    },
    "supportedCurrencies": [
      "IDR",    //accounts[0].supportedCurrencies[0];
      "IDR",
      "PAB",    //accounts[0].supportedCurrencies[2];
      "PHP",
      "CNY"     //accounts[0].supportedCurrencies[4];
    ],
    "transactions": [
      {
        "date": "7/1/2022",  //accounts[0].transactions[0].date
        "value": 72,
        "currency": "USD",
        "location": "5 Erie Park", //accounts[0].transactions[0].location
        "card": {
          "number": "633447076665678883", //accounts[0].transactions[0].card.namber
          "expiry": "4/13/2022",
          "secureCode": 70  //accounts[0].transactions[0].card.secureCode
        }
      },
      {
        "date": "9/6/2022",  //accounts[0].transactions[1].date
        "value": 1,
        "currency": "CNY",
        "location": "7296 Emmet Way", //accounts[0].transactions[1].location
        "card": {
          "number": "30452213112458", //accounts[0].transactions[1].card.namber
          "expiry": "5/8/2022",
          "secureCode": 32  //accounts[0].transactions[1].card.secureCode
        }
      },
      {
        "date": "8/18/2022",
        "value": 98,
        "currency": "JPY",
        "location": "676 Shopko Hill",
        "card": {
          "number": "5602251371394396",
          "expiry": "4/1/2022",
          "secureCode": 13
        }
      },
      {
        "date": "9/20/2023",
        "value": 42,
        "currency": "BGN",
        "location": "77033 Bonner Drive",
        "card": {
          "number": "201644615309178",
          "expiry": "6/1/2022",
          "secureCode": 7
        }
      },
      {
        "date": "12/24/2022",
        "value": 85,
        "currency": "PLN",
        "location": "248 Myrtle Parkway",
        "card": {
          "number": "4017955589684",
          "expiry": "11/21/2022",
          "secureCode": 3
        }
      },
      {
        "date": "7/8/2022",
        "value": 75,
        "currency": "IDR",
        "location": "37 Sommers Drive",
        "card": {
          "number": "676143527744005924",
          "expiry": "6/4/2022",
          "secureCode": 86
        }
      },
      {
        "date": "5/11/2022",
        "value": 50,
        "currency": "XAF",
        "location": "9668 Melvin Court",
        "card": {
          "number": "3570929969800527",
          "expiry": "1/5/2022",
          "secureCode": 13
        }
      },
      {
        "date": "10/19/2022",
        "value": 21,
        "currency": "BWP",
        "location": "981 Gale Park",
        "card": {
          "number": "3552629040691513",
          "expiry": "9/22/2022",
          "secureCode": 28
        }
      },
      {
        "date": "8/7/2022",
        "value": 48,
        "currency": "PHP",
        "location": "28 Rusk Parkway",
        "card": {
          "number": "3532887129869393",
          "expiry": "9/11/2022",
          "secureCode": 19
        }
      },
      {
        "date": "11/23/2022",
        "value": 49,
        "currency": "SEK",
        "location": "5 Maple Wood Trail",
        "card": {
          "number": "4844034065223936",
          "expiry": "8/10/2022",
          "secureCode": 60
        }
      },
      {
        "date": "3/26/2022", //accounts[0].transactions[10].card.date
        "value": 36,
        "currency": "CNY",
        "location": "14496 Oriole Park",
        "card": {
          "number": "491127944933291971", //accounts[0].transactions[10].card.number
          "expiry": "9/15/2022",
          "secureCode": 37 //accounts[0].transactions[10].card.secureCode
        }
      },
      {
        "date": "8/24/2022",
        "value": 59,
        "currency": "IDR",
        "location": "1 Messerschmidt Court",
        "card": {
          "number": "3547720772959448",
          "expiry": "11/6/2022",
          "secureCode": 84
        }
      },
      {
        "date": "7/2/2022",
        "value": 23,
        "currency": "ARS",
        "location": "32 Caliangt Trail",
        "card": {
          "number": "5602241167409532",
          "expiry": "10/4/2022",
          "secureCode": 43
        }
      },
      {
        "date": "5/19/2022",
        "value": 4,
        "currency": "BAM",
        "location": "1 Tony Road",
        "card": {
          "number": "56022170033010874",
          "expiry": "1/7/2022",
          "secureCode": 85
        }
      }
    ]
  }

/*
//prvi nacin
const arrayOfSecureCode= [];

for(let i=0;i<account.transactions.length;i++){
    arrayOfSecureCode.push(account.transactions[i].card.secureCode);
}

console.log(arrayOfSecureCode);
*/

//drugi nacin
// TODO You probably want for .. of here, key name isnt a key but probably an index, check!
const arrayOfSecureCode= [];
for(let element of account.transactions){
    arrayOfSecureCode.push(element.card.secureCode);
}

//console.log(arrayOfSecureCode);

const arrayOfSecureCodes = account.transactions.reduce((acc, element) => {
    acc.push(element.card.secureCode);
    return acc;
}, []);

console.log(arrayOfSecureCodes);


