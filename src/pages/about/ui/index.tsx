import React from 'react';
import style from './index.module.scss';
import { Text, Title } from '@mantine/core';

export const About = () => {
  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'}>
            About
          </Text>
        </div>

        <div className={style.section}>
          <div className={style.container}>
            <Text component={'p'} className={style.sectionTextOne}>
              You might be an artist who would like to introduce yourself and your work here or maybe you’re a business
              with a mission to describe.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};