import React from 'react';
import style from './index.module.scss';
import { Button, Image, Text, Title } from '@mantine/core';
import ImageOne from "@/shared/images/image-gas.png"
import ImageTwo from "@/shared/images/image-oil.png"
import ImageThree from "@/shared/images/image-energe.png"
import ImageFour from "@/shared/images/image-ecology.png"

export const Home = () => {
  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Title order={1}>
            Who We Are?
          </Title>
        </div>

        <div className={style.section}>
          <div className={style.container}>
            <Text component={'p'} className={style.sectionTextOne}>
              “Only when the last fish is gone, the last river poisoned, the last tree cut down…will mankind realize
              they cannot eat money.”
            </Text>
            <Text component={'p'} className={style.sectionTextTwo}>
              Our Market Managers handwrite product material to guarantee you have the finest range of products to
              compare with “apples-to-apples” specs and unique helpful descriptions. Unlike other sites that connect you
              to a vendor, you make your purchase immediately within Lab. The Marketplace is updated on a regular basis
              with the most recent Lab Equipment specials, prices, and new lab items. Try our well-crafted product
              criterion filters in each area now and compare the convenience of use and correct data on Lab. Equipment
              to distributors and other media websites. You’ve just discovered your new exceptional procurement ability!
            </Text>
            <div className={style.cards}>
              <div className={style.card}>
                <div className={style.imageWrapper}>
                  <Text className={style.cardtext} component={'span'}>
                    Gas
                  </Text>
                  <Image fit={'cover'} height={'430px'} width={'100%'} src={ImageOne} alt={'ImageOne'}/>
                </div>
                <Button className={style.btn}>
                  Click me
                </Button>
              </div>
              <div className={style.card}>
                <div className={style.imageWrapper}>
                  <Text className={style.cardtext} component={'span'}>
                    oil
                  </Text>
                  <Image fit={'cover'} height={'430px'} width={'100%'} src={ImageTwo} alt={'ImageTwo'}/>
                </div>
                <Button className={style.btn}>
                  Click me
                </Button>
              </div>
              <div className={style.card}>
                <div className={style.imageWrapper}>
                  <Text className={style.cardtext} component={'span'}>

                    ENERGY
                  </Text>
                  <Image fit={'cover'} height={'430px'} width={'100%'} src={ImageThree} alt={'ImageThree'}/>
                </div>
                <Button className={style.btn}>
                  Click me
                </Button>
              </div>
              <div className={style.card}>
                <div className={style.imageWrapper}>
                  <Text className={style.cardtext} component={'span'}>
                    ECOLOGY
                  </Text>
                  <Image fit={'cover'} height={'430px'} width={'100%'} src={ImageFour} alt={'ImageFour'}/>
                </div>
                <Button className={style.btn}>
                  Click me
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};