import React, { FC } from 'react';
import style from './index.module.scss';
import { Anchor, Button, Text, Title, Box, TextInput, Textarea } from '@mantine/core';
import { ReactComponent as IconOne } from '@/shared/images/icon-yelp.svg';
import { ReactComponent as IconTwo } from '@/shared/images/icon-facebook.svg';
import { ReactComponent as IconThree } from '@/shared/images/icon-twitter.svg';
import { ReactComponent as IconFour } from '@/shared/images/icon-instagram.svg';
import { ReactComponent as IconFive } from '@/shared/images/icon-mail.svg';
import { useMediaQuery, useWindowScroll } from '@mantine/hooks';


const Footer: FC = () => {

  const [scroll, scrollTo] = useWindowScroll();
  const matches = useMediaQuery('(max-width: 780px)');


  return (
    <>
      <div className={style.footerWrapper}>
        <div className={style.footer}>
          <div className={style.footerTop}>
            <Anchor href='https://www.yelp.com/'>
                <div className={style.icon}>
                  <IconOne />
                </div>

            </Anchor>
            <Anchor href={'https://www.facebook.com/WordPress/'}>
              <div className={style.icon}>
                <IconTwo />
              </div>
            </Anchor>
            <Anchor href={'https://twitter.com/wordpress'}>
              <div className={style.icon}>
                <IconThree />
              </div>
            </Anchor>
            <Anchor href={'https://www.instagram.com/explore/tags/wordcamp/'}>
              <div className={style.icon}>
                <IconFour />
              </div>
            </Anchor>
            <Anchor >
              <div className={style.icon}>
                <IconFive />
              </div>
            </Anchor>
          </div>
          <div className={style.footerCenter}>
            <Title order={1}>
              Find Us
            </Title>
            <Text component={'p'} className={style.text}>
              Address Tashkent, Uzbekistan Hours Monday–Friday: 9:00AM–5:00PM <br /> Saturday & Sunday: 11:00AM–3:00PM
            </Text>
          </div>
          <div className={style.footerBottom}>
            <Text component={'p'}>
              © 2023 <Anchor>LABPROM-IMPORT</Anchor> <Anchor>Powered by Prosodos</Anchor>
            </Text>
            {!matches && <Button className={style.btn} onClick={() => scrollTo({ y: 0 })}> To the top ↑</Button>}
            {matches && <Button className={style.btn} onClick={() => scrollTo({ y: 0 })}> Up ↑</Button>}
          </div>
        </div>
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Footer;