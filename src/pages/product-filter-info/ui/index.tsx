import React from 'react';
import style from './index.module.scss';
import { Text } from '@mantine/core';


export const ProductFilterInfo = () => {
  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'}>
            PRODUCT FILTER
          </Text>
        </div>

        <div className={style.section}>
          <div className={style.container}>
            <h1>Info</h1>
          </div>
        </div>
      </div>
    </>
  );
};