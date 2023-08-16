import React from 'react';
import style from './index.module.scss';
import { Button, Image, Text } from '@mantine/core';
import ImageOne from '@/shared/images/Image-product.png';
import { useNavigate } from 'react-router-dom';

export const Products = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'}>
            PRODUCTS  LABPROM-IMPORT
          </Text>
        </div>

        <div className={style.section}>
          <div className={style.container}>
            <div className={style.cards}>
              <div onClick={() => navigate('/products-filter')} className={style.card}>
                <Image src={ImageOne} alt={'image product'} radius={0} width={'100%'} />
                <Text className={style.title} component={'p'}>
                  Product filter
                </Text>
                <Button className={style.moreBtn}>
                  Read more
                </Button>
              </div>
              <div onClick={() => navigate('/products-filter')} className={style.card}>
                <Image src={ImageOne} alt={'image product'} radius={0} width={'100%'} />
                <Text className={style.title} component={'p'}>
                  PRODUCT PORTFOLIO
                </Text>
                <Button className={style.moreBtn}>
                  Read more
                </Button>
              </div>
              <div onClick={() => navigate('/products-filter')} className={style.card}>
                <Image src={ImageOne} alt={'image product'} radius={0} width={'100%'} />
                <Text className={style.title} component={'p'}>
                  Process and environmental monitoring
                </Text>
                <Button className={style.moreBtn}>
                  Read more
                </Button>
              </div>
              <div onClick={() => navigate('/products-filter')} className={style.card}>
                <Image src={ImageOne} alt={'image product'} radius={0} width={'100%'} />
                <Text className={style.title} component={'p'}>
                  Combustion and safety monitoring
                </Text>
                <Button className={style.moreBtn}>
                  Read more
                </Button>
              </div>
              <div onClick={() => navigate('/products-filter')} className={style.card}>
                <Image src={ImageOne} alt={'image product'} radius={0} width={'100%'} />
                <Text className={style.title} component={'p'}>
                  Tunnel and traffic monitoring
                </Text>
                <Button className={style.moreBtn}>
                  Read more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};