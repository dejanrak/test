type AccountHolder = {
  firstName: string;
  lastName: string;
  documentId: string;
  address: string;
  email: string;
};
type Card = {
  number: string;
  expiry: string;
  secureCode: number;
};

type Transaction = {
  card: Card;
  date: string;
  value: number;
  currency: string;
  location: string;
};

type Account = {
  accountId: string;
  accountHolder: AccountHolder;
  supportedCurrencies: string[];
  transactions: Transaction[];
};

const account: Account = {
  accountId: "54801247-c88f-405b-87bd-0152ac3fe05e",

  accountHolder: {
    firstName: "Fonz",
    lastName: "Cawsby",
    documentId: "4de4fe2f-e77a-4f0c-87c4-57d2888e801e",
    address: "25860 Moland Plaza",
    email: "fcawsby0@mapy.cz",
  },

  supportedCurrencies: ["IDR", "IDR", "PAB", "PHP", "CNY"],
  transactions: [
    {
      date: "7/1/2022",
      value: 72,
      currency: "USD",
      location: "5 Erie Park",
      card: {
        number: "633447076665678883",
        expiry: "4/13/2021",
        secureCode: 70,
      },
    },
    {
      date: "9/6/2022",
      value: 1,
      currency: "CNY",
      location: "7296 Emmet Way",
      card: {
        number: "30452213112458",
        expiry: "5/8/2021",
        secureCode: 32,
      },
    },
    {
      date: "8/18/2022",
      value: 98,
      currency: "JPY",
      location: "676 Shopko Hill",
      card: {
        number: "5602251371394396",
        expiry: "4/1/2021",
        secureCode: 13,
      },
    },
    {
      date: "9/20/2023",
      value: 42,
      currency: "BGN",
      location: "77033 Bonner Drive",
      card: {
        number: "201644615309178",
        expiry: "6/1/2024",
        secureCode: 7,
      },
    },
    {
      date: "12/24/2022",
      value: 85,
      currency: "PLN",
      location: "248 Myrtle Parkway",
      card: {
        number: "4017955589684",
        expiry: "12/27/2021",
        secureCode: 3,
      },
    },
    {
      date: "7/8/2022",
      value: 75,
      currency: "IDR",
      location: "37 Sommers Drive",
      card: {
        number: "676143527744005924",
        expiry: "6/4/2021",
        secureCode: 86,
      },
    },
    {
      date: "5/11/2022",
      value: 50,
      currency: "XAF",
      location: "9668 Melvin Court",
      card: {
        number: "3570929969800527",
        expiry: "1/5/2023",
        secureCode: 13,
      },
    },
    {
      date: "10/19/2022",
      value: 21,
      currency: "BWP",
      location: "981 Gale Park",
      card: {
        number: "3552629040691513",
        expiry: "9/22/2021",
        secureCode: 28,
      },
    },
    {
      date: "8/7/2022",
      value: 48,
      currency: "PHP",
      location: "28 Rusk Parkway",
      card: {
        number: "3532887129869393",
        expiry: "9/11/2021",
        secureCode: 19,
      },
    },
    {
      date: "11/23/2021",
      value: 49,
      currency: "SEK",
      location: "5 Maple Wood Trail",
      card: {
        number: "4844034065223936",
        expiry: "8/10/2024",
        secureCode: 60,
      },
    },
    {
      date: "3/26/2022",
      value: 36,
      currency: "CNY",
      location: "14496 Oriole Park",
      card: {
        number: "491127944933291971",
        expiry: "9/15/2021",
        secureCode: 37,
      },
    },
    {
      date: "8/24/2022",
      value: 59,
      currency: "IDR",
      location: "1 Messerschmidt Court",
      card: {
        number: "3547720772959448",
        expiry: "11/6/2021",
        secureCode: 84,
      },
    },
    {
      date: "7/2/2022",
      value: 23,
      currency: "ARS",
      location: "32 Caliangt Trail",
      card: {
        number: "5602241167409532",
        expiry: "10/4/2021",
        secureCode: 43,
      },
    },
    {
      date: "5/19/2022",
      value: 4,
      currency: "USD",
      location: "1 Tony Road",
      card: {
        number: "56022170033010874",
        expiry: "1/7/2023",
        secureCode: 85,
      },
    },
  ],
};

const arrayOfCards: Card[] = account.transactions.map(
  (transaction) => transaction.card
);

//console.log(arrayOfCards);

const arrayOfDaysInFuture: Card[] = arrayOfCards.filter((card) => {
  const today = new Date();
  return new Date(card.expiry).getTime() > today.getTime();
});

console.log(arrayOfDaysInFuture);

function minimum(arrayOfDaysInFuture: Card[]): Card {
  let min = new Date(arrayOfDaysInFuture[0].expiry).getTime();
  //console.log(min);
  let minCard = arrayOfDaysInFuture[0];
  //console.log(minCard);

  for (let i = 1; i < arrayOfDaysInFuture.length; i++) {
    const currentDateTime = new Date(arrayOfDaysInFuture[i].expiry).getTime();
    if (currentDateTime < min) {
      min = currentDateTime;
      minCard = arrayOfDaysInFuture[i];
    }
  }
  return minCard;
}

console.log(minimum(arrayOfDaysInFuture));
