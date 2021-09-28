---
sidebar_position: 1
---

# PolyCityDex

https://app.polycity.xyz/swap

## What is PolyCityDex?

PolyCityDex is a decentralized exchange (or DEX, for short), and the first product by PolyZen. PolyCityDex is also non-custodial, which means that—unlike centralized exchanges—PolyCityDex does not need to possess your tokens in order for you to be able to trade them. Instead, PolyCityDex allows users to trade trustlessly, peer-to-peer, with liquidity that is supplied by other users. This means that new projects can easily connect to their desired markets as long as some entity is willing to provide the liquidity.

To be a liquidity provider, holders of any token need to supply equal parts liquidity for that token (sometimes called the quote token), and a second token (usually MATIC, or a stable coin). In return, these holders receive PolyCityDex liquidity provider (Poly-LP) tokens that represent their share of the pooled liquidity for that token pair. The existence of this pooled liquidity gives other traders access to the underlying tokens in exchange for a small fee, which is distributed proportionately to all of the liquidity providers.

In this sense, PolyCityDex is also an “automated market maker” (or AMM, for short). While a user’s underlying tokens remain in the pool, fluctuations in the price of the two underlying tokens automatically recalibrate the quantity of those tokens to conform to the equation x*y=k, where x and y are the quantities of the two paired tokens, and k is constant. This means that even though you supply equal parts of two tokens to the pool, the quantities you receive when you reclaim your liquidity will change relative to the difference in the change in price of the two tokens when you remove the liquidity. If the price of x token goes up, and y token goes down, you will have less of x and more of y, and vice versa. If the price of both tokens goes up, or the price of both goes down, you will nonetheless have relative quantities of each token proportionately to the difference in the change of the price of x and y.

![Docusaurus](/img/klast.png)

# Liquidity Pools

https://app.polycity.xyz/pool

## What Are Liquidity Pools?

Liquidity pools are place to pool tokens (which we sometimes call liquidity) so that users can use them to make trades in a decentralized way. These pools are created by users and decentralized apps (or Dapps, for short) who want to profit from their usage. To pool liquidity, the amounts a user supplies must be equally divided between two coins: the primary token (sometimes called the quote token) and the base token (usually MATIC or a stable coin). PolyCityDex's liquidity pools allow anyone to provide liquidity at the following link: https://app.polycity.xyz/pool. When they do so, they will receive Poly-LP tokens (PolyCityDex Liquidity Provider tokens). If a user deposited $PICHI and $MATIC into a pool, they would receive PICHI-MATIC Poly-LP tokens. These tokens represent a proportional share of the pooled assets, allowing a user to reclaim their funds at any point. Every time another user uses the pool to trade between $PICHI and $MATIC, a 0.3% fee is taken on the trade. 0.25% of that trade goes back to the LP pool. 

The value of the Poly-LP tokens, which represent the shares of the total liquidity each pool, is updated with each trade to add their value relative to the tokens the pool uses to trade. If previously there were 100 Poly-LP tokens representing 100 MATIC and 100 PICHI, each token would be worth 1 MATIC & 1 PICHI (note in this example, MATIC and PICHI are the same relative value). If a user were then to trade 10 MATIC for 10 PICHI in that pool, and another user were to trade 10 PICHI for 10 MATIC, then there would now be 100.025 MATIC and 100.025 PICHI. This means each LP token would be worth 1.0025 MATIC and 1.00025 PICHI now when it is withdrawn.
To navigate seamlessly across versions, add a version dropdown.

### Instructions for Adding Liquidity

Using https://app.polycity.xyz/pool

1. Adding liquidity is really straightforward. First, you must choose which tokens to input. Click "Select Token".
2. If you have never used PolyCityDex before, this will trigger a popup asking you to choose a list of tokens. Click on "Choose a list".
3. There are different lists to choose from, but in this example we will be using the PolyCityDex Menu.
4. After choosing a list, you will be shown the tokens represented in that list along with your balance of them (if any). In this case, we only have two to choose from, PICHI and MATIC.
5. After selecting our desired input tokens, we're ready to click "Supply"! If this is your first time interacting with PolyCityDex's smart contracts for either or both of the tokens in question, you will be prompted to "Approve" that our smart contracts are allowed to handle them for you.
6. When the liquidity add is done, you receive PolyCityDex Liquidity Provider (Poly-LP) tokens in return. These represent your share in the liquidity pool, and your earned fees that are received upon withdrawal of the liquidity.

### Adding Liquidity to a New Pool

If the pool you wish to provide liquidity to does not exist, you can create it of course! Just provide the tokens, and off you go. As the first liquidity provider, you set the initial exchange ratio (price) if one of the tokens in the pair does not exist yet on PolyCityDex. This often quickly corrects itself through arbitrage and by more liquidity providers adding to the pool.