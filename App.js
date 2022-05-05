//--------------------------
// Sample data (leave as-is)
//--------------------------
const data = [
  {
    id: "3cc51cfd-6e3c-41eb-9604-362da3a6fb64",
    symbol: "MSFT",
    companyName: "Microsoft",
    price: 310.98,
    quantity: 2000,
    currency: "USD",
  },
  {
    id: "0572be22-d790-460e-bf03-8ee1b3b19dad",
    symbol: "MSFT",
    companyName: "Microsoft",
    price: 310.9,
    quantity: 1500,
    currency: "USD",
  },
  {
    id: "8f356500-de35-4378-b7a3-5c587da54cd5",
    symbol: "AAPL",
    companyName: "Apple",
    price: 174.78,
    quantity: 500,
    currency: "USD",
  },
  {
    id: "5f92c4c3-b6b9-4538-9e80-d587217e8410",
    symbol: "VOD",
    price: 130.02,
    quantity: 3290,
    currency: "GBP",
  },
  {
    id: "00000000-0000-0000-0000-000000000000",
    symbol: "XXX",
    price: 99.99,
    quantity: 100,
    currency: "GBP",
  },
  {
    id: "155ac33b-05c4-42f7-a446-0b7ffacf2504",
    symbol: "VOD",
    price: 128.91,
    quantity: 8500,
    currency: "GBP",
  },
];

//----------------------
// The method to improve.
// Submit a revised version of this function below, making any changes
// you believe improve the code while satisfying the requirements above.
//----------------------

function isValid(trade) {
  if (trade.id == "00000000-0000-0000-0000-000000000000") {
    return false;
  }
  return true;
}

function doProcessTrades(data) {
  var tradeSummary = {
    count: 0,
    deduplicatedSymbols: [],
    costPerCurrency: new Map(),
    returnedTrades: [],
  };

  let count = 0;
  let symbols = new Map();
  let costPerCurrency = new Map();
  let returnedTrades = [];

  for (let i = 0; i < data.length; i++) {
    let trade = data[i];
    let symbol = trade.symbol;
    let price = trade.price;
    let companyName = trade.companyName;
    let currency = trade.currency;

    if (isValid(trade)) {
      // 1) add to valid trade count
      count++;
      // 2) collect unique symbols
      if (!symbols.has(symbol)) {
        symbols.set(symbol);
      }
      // 3) aggregate total cost of the valid trades per-currency
      if (!costPerCurrency.has(currency)) {
        costPerCurrency.set(currency, price);
      } else {
        let totalPrice = costPerCurrency.get(currency) + price;
        costPerCurrency.set(currency, totalPrice);
      }
      console.log("costPerCurrancy ", costPerCurrency);
      // 3) handle missing names
      if (typeof companyName == "undefined") {
        trade.companyName = symbol;
      }
      // 4) add trade to returned array
      returnedTrades.push(trade);
      // 5) remove bad trades - do not include bad trade in output and log bad trade that is being removed.
    } else {
      console.log("Bad trade removed: ", trade);
    }
  }

  tradeSummary.count = count;
  tradeSummary.deduplicatedSymbols = Array.from(symbols.keys());
  tradeSummary.costPerCurrency = costPerCurrency;
  tradeSummary.returnedTrades = returnedTrades;
  return tradeSummary;
}

// method to check if a trade is valid or not.
// function isValid(trade) {
//   if (trade.id == "00000000-0000-0000-0000-000000000000") {
//     return false;
//   }
//   return true;
// }

console.log("Trade Summary: ", doProcessTrades(data));
