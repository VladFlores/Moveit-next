import Head from 'next/head'
import { GetServerSideProps } from 'next';

import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { Profile } from '../components/Profile';
import { ChallengeBox } from '../components/ChallengeBox';
import { SideBar } from '../components/SideBar';
import usePersistedState from '../utils/usePersistedState';


import styles from '../style/pages/Home.module.css';
import { CountdownProvider } from '../contexts/CountdownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { ThemeProvider } from 'styled-components';
import React from 'react';



interface HomeProps {
  level: number;
  currentExperience: number;
  challengeCompleted: number;
}

import GlobalStyles from '../style/global';

import style from '../style/pages/Home.module.css';
import light from '../style/themes/light';
import dark from '../style/themes/dark';

export default function Home(props) {
  const [theme, setTheme] = usePersistedState('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <ChallengesProvider
        level={props.level}
        currentExperience={props.currentExperience}
        challengeCompleted={props.challengeCompleted}
      >
        <div className={styles.container}>
          <GlobalStyles />

          <SideBar toggleTheme={toggleTheme} />


          <div className={styles.container}>
            <Head>
              <title>Inicio | Move.it</title>
            </Head>
            <ExperienceBar />

            <CountdownProvider>
              <section>
                <div>
                  <Profile />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </div>
        </div>
      </ChallengesProvider>
    </ThemeProvider>


  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { level, currentExperience, challengeCompleted } = ctx.req.cookies;

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengeCompleted: Number(challengeCompleted)
    }
  }
}
