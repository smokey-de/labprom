import React, { useEffect } from 'react';
import style from './index.module.scss';
import {  Box, Button, Center, Flex, Image, Pagination, Select, Text } from '@mantine/core';
import { ReactComponent as IconArrow } from '@/shared/images/icon-arrow.svg';
import { ReactComponent as IconRefresh } from '@/shared/images/icon-refresh.svg';
import cl from 'classnames';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { data } from './libs';
export const ProductFilter = () => {
  const navigate = useNavigate()
  const { categoryId } = useParams();
  const matches = useMediaQuery('(max-width: 680px)');

  const handleCard = (item:any) => {
    navigate('/product-filter-info/' + item.id);
    localStorage.setItem('data', JSON.stringify(item));
  }

  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'}>
            PRODUCTS
          </Text>
        </div>

        {/*<div className={style.filters}>*/}
        {/*  <div className={style.container}>*/}
        {/*    <Select*/}
        {/*      className={cl(style.select, style.main)}*/}
        {/*      classNames={{*/}
        {/*        dropdown: style.selectDropdown,*/}
        {/*        item: style.selectItem*/}
        {/*      }}*/}
        {/*      rightSection={<IconArrow/>}*/}
        {/*      data={['Business area','Business area1', 'Business area2', 'Business area3']}*/}
        {/*      defaultValue={'Business area'}*/}
        {/*    />*/}
        {/*    <div className={style.line} />*/}
        {/*    <div className={style.selectWrapper}>*/}
        {/*      <Select*/}
        {/*        className={cl(style.select, style.filter)}*/}
        {/*        classNames={{*/}
        {/*          dropdown: style.selectDropdown,*/}
        {/*          item: style.selectItem*/}
        {/*        }}*/}
        {/*        rightSection={<IconArrow/>}*/}
        {/*        data={['Application area']}*/}
        {/*        defaultValue={'Application area'}*/}
        {/*      />*/}
        {/*      <Select*/}
        {/*        className={cl(style.select, style.filter)}*/}
        {/*        classNames={{*/}
        {/*          dropdown: style.selectDropdown,*/}
        {/*          item: style.selectItem*/}
        {/*        }}*/}
        {/*        rightSection={<IconArrow/>}*/}
        {/*        data={['Product group']}*/}
        {/*        defaultValue={'Product group'}*/}
        {/*      />*/}
        {/*      <Select*/}
        {/*        className={cl(style.select, style.filter)}*/}
        {/*        classNames={{*/}
        {/*          dropdown: style.selectDropdown,*/}
        {/*          item: style.selectItem*/}
        {/*        }}*/}
        {/*        rightSection={<IconArrow/>}*/}
        {/*        data={['Product subgroup']}*/}
        {/*        defaultValue={'Product subgroup'}*/}
        {/*      />*/}
        {/*      <Select*/}
        {/*        className={cl(style.select, style.filter)}*/}
        {/*        classNames={{*/}
        {/*          dropdown: style.selectDropdown,*/}
        {/*          item: style.selectItem*/}
        {/*        }}*/}
        {/*        rightSection={<IconArrow/>}*/}
        {/*        data={['Industry']}*/}
        {/*        defaultValue={'Industry'}*/}
        {/*      />*/}
        {/*      <Select*/}
        {/*        className={cl(style.select, style.filter)}*/}
        {/*        classNames={{*/}
        {/*          dropdown: style.selectDropdown,*/}
        {/*          item: style.selectItem*/}
        {/*        }}*/}
        {/*        rightSection={<IconArrow/>}*/}
        {/*        data={['Industry sectors']}*/}
        {/*        defaultValue={'Industry sectors'}*/}
        {/*      />*/}
        {/*      <Select*/}
        {/*        className={cl(style.select, style.filter)}*/}
        {/*        classNames={{*/}
        {/*          dropdown: style.selectDropdown,*/}
        {/*          item: style.selectItem*/}
        {/*        }}*/}
        {/*        rightSection={<IconArrow/>}*/}
        {/*        data={['Company']}*/}
        {/*        defaultValue={'Company'}*/}
        {/*      />*/}
        {/*      <Select*/}
        {/*        className={cl(style.select, style.filter)}*/}
        {/*        classNames={{*/}
        {/*          dropdown: style.selectDropdown,*/}
        {/*          item: style.selectItem*/}
        {/*        }}*/}
        {/*        rightSection={<IconArrow/>}*/}
        {/*        data={['Approvals / certificates']}*/}
        {/*        defaultValue={'Approvals / certificates'}*/}
        {/*      />*/}
        {/*    </div>*/}
        {/*    <Flex justify={'flex-end'}>*/}
        {/*      <Button className={style.resetBtn} variant={'filled'} leftIcon={<IconRefresh/>}>*/}
        {/*        Reset filter*/}
        {/*      </Button>*/}
        {/*    </Flex>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className={style.section}>

          <div className={style.container}>

            <div className={style.cards}>
              {data.filter((e:any) => e.categoryId == categoryId)?.map((i)=>(
                <div key={i?.id} onClick={() => handleCard(i)} className={cl(style.card, [i.new && style.new])}>
                  <Box>
                    <Image src={i.image} alt={'image product'} radius={0} width={'100%'} />

                    <div className={style.topTexts}>
                      <Text className={style.title} component={'p'}>
                        {i.title}
                      </Text>
                      <Text className={style.subTitle} component={'p'}>
                        {i.subTitle}
                      </Text>
                    </div>
                    <Text className={style.description}>
                      {i.description}

                      <div className={style.line} />
                    </Text>
                  </Box>

                  <Button className={style.moreBtn}>
                    more
                  </Button>
                </div>
              ))}
            </div>

            {/*<Center mt={40}>*/}
            {/*  <Pagination size={matches ? 'xs' : 'md'} total={10} className={style.pagination} />*/}
            {/*</Center>*/}
          </div>
        </div>
      </div>
    </>
  );
};