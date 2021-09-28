/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Multi-chain AMM',
    imageUrl: 'img/multi_chain.png',
    description: (
      <>
        PolyCityDex Protocol as multi-chain functionally helps to aggregate fragmented liquidity from different automated market makers (AMMs).
      </>
    ),
  },
  {
    title: 'Easy to Use',
    imageUrl: 'img/easy2use.jpeg',
    description: (
      <>
        We are aiming to make on-chain trading simple and easy, designed to function gasless and focused on aggregating liquidity from multiple protocols.
      </>
    ),
  },
  {
    title: 'Powered by Staking',
    imageUrl: 'img/powerbystaking.jpeg',
    description: (
      <>
        We are delighted to now reveal to you, join-in PolyCityHall, earn governance rights and 0.05% of all swaps from all chains in one simple place.
      </>
    ),
  },
  {
    title: 'Lending Platforms',
    imageUrl: 'img/p2plending.webp',
    description: (
      <>
        Crypto lending for both crypto and stable coins is a pretty new segment of the lending investment industry that is rapidly growing in the past years.
      </>
    ),
  },
];

const porfolio = [
  {
    title: 'Gasless',
    imageUrl: 'img/gasless.png',
    description: (
      <>
        Economical trades with gasless transactions realised by using transaction fee mining
      </>
    ),
  },
  {
    title: 'Zero fee',
    imageUrl: 'img/zerofee.png',
    description: (
      <>
        Trade on multi chains at zero cost, we do not charge any fee.
      </>
    ),
  },
  {
    title: 'Governance',
    imageUrl: 'img/governance.png',
    description: (
      <>
        A unanimous governance mechanism to adapt decentralised network changes over time
      </>
    ),
  },
  {
    title: 'Rewards',
    imageUrl: 'img/reward.png',
    description: (
      <>
        Earn rewards from liquidity mining and every time you make a trade
      </>
    ),
  },
  {
    title: 'DEX aggregation',
    imageUrl: 'img/dex.png',
    description: (
      <>
        Access liquidity on multi chains from all decentralised liquidity providers
      </>
    ),
  },

  {
    title: 'Developer friendly',
    imageUrl: 'img/dev.png',
    description: (
      <>
        Accelerate your project with PolyCityDex. Find the best yields anywhere in DeFi hands down.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--3', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Porfolio({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.porfolioImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.customFields.welcome}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={clsx('row', styles.buttons)}>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('docs/intro')}>
                Learn more •••
              </Link>
            </div>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to="https://app.polycity.xyz">
                🚀 Launch App 🚀
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <h1 className={clsx('hero__title', styles.heroBanner)}>{siteConfig.customFields.feature}</h1>
              <div className="row">
                {features.map(({ title, imageUrl, description }) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )};
        {porfolio && porfolio.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <h1 className={clsx('hero__title', styles.heroBanner)}>{siteConfig.customFields.porfolio}</h1>
              <div className="row">
                {porfolio.map(({ title, imageUrl, description }) => (
                  <Porfolio
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )};
      </main>
    </Layout>
  );
}
