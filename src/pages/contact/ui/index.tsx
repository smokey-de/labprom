import React from 'react';
import style from './index.module.scss';
import { Text, Title } from '@mantine/core';

export const Contact = () => {
  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'}>
            Contact
          </Text>
        </div>

        <div className={style.section}>
          <div className={style.container}>
            <Text component={'p'} className={style.sectionTextOne}>
              This is a page with some basic contact information, such as an address and phone number. You might also
              try a plugin to add a contact form.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};