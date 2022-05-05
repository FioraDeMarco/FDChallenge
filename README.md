# FDChallenge

You have been asked to enhance the following method in a trading system. It must process data from an API representing a set of trades and return an object containing well-defined summary information, along with the processed trade objects themselves.

Before you start, you would like to clean up the existing code and make sure it is easy to reason about.

Unfortunately, that existing code is not great, but you have the following technical notes and requirements:

1. Summary data should be at the top-level of the returned object, and must include:

Count of all valid trades.
Aggregate total cost of the trades, per currency.
A de-duplicated array of all symbols traded. 2) The trades objects themselves should be included in the output, within a nested array.

3. The input data should not be modified in any way.

To make things more interesting, the API has some quirks that this method must accommodate:

1. Trades should arrive with a user-friendly "companyName" field, but not all of them do.

If the company name is missing, install the "symbol" as a fallback, so consumers of this function's output do not need to check for empty companyName values. 2) Sometimes bogus test trades get fed through the system...

Fortunately these can be identified by an ID containing all zeroes.
These test trades should be dropped and should not be included in any summary statistics or the output.
To help your team keep an eye out for any test trades during development, you want to log a useful message to the console.

You can use any valid JS syntax, up to and including ECMAScript 2021, but please no external libraries. If you proceed to a follow-up interview with XH, we'll return to this example and ask you to walk us through what you changed and why.
