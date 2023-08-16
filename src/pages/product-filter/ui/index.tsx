import React from 'react';
import style from './index.module.scss';
import {  Box, Button, Center, Flex, Image, Pagination, Select, Text } from '@mantine/core';
import ImageOne from '@/shared/images/Image-product-filter.png';
import { ReactComponent as IconArrow } from '@/shared/images/icon-arrow.svg';
import { ReactComponent as IconRefresh } from '@/shared/images/icon-refresh.svg';
import cl from 'classnames';
import { useMediaQuery } from '@mantine/hooks';

export const ProductFilter = () => {
  const matches = useMediaQuery('(max-width: 680px)');
  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'}>
            PRODUCT FILTER
          </Text>
        </div>

        <div className={style.filters}>
          <div className={style.container}>
            <Select
              className={cl(style.select, style.main)}
              classNames={{
                dropdown: style.selectDropdown,
                item: style.selectItem
              }}
              rightSection={<IconArrow/>}
              data={['Business area','Business area1', 'Business area2', 'Business area3']}
              defaultValue={'Business area'}
            />
            <div className={style.line} />
            <div className={style.selectWrapper}>
              <Select
                className={cl(style.select, style.filter)}
                classNames={{
                  dropdown: style.selectDropdown,
                  item: style.selectItem
                }}
                rightSection={<IconArrow/>}
                data={['Application area']}
                defaultValue={'Application area'}
              />
              <Select
                className={cl(style.select, style.filter)}
                classNames={{
                  dropdown: style.selectDropdown,
                  item: style.selectItem
                }}
                rightSection={<IconArrow/>}
                data={['Product group']}
                defaultValue={'Product group'}
              />
              <Select
                className={cl(style.select, style.filter)}
                classNames={{
                  dropdown: style.selectDropdown,
                  item: style.selectItem
                }}
                rightSection={<IconArrow/>}
                data={['Product subgroup']}
                defaultValue={'Product subgroup'}
              />
              <Select
                className={cl(style.select, style.filter)}
                classNames={{
                  dropdown: style.selectDropdown,
                  item: style.selectItem
                }}
                rightSection={<IconArrow/>}
                data={['Industry']}
                defaultValue={'Industry'}
              />
              <Select
                className={cl(style.select, style.filter)}
                classNames={{
                  dropdown: style.selectDropdown,
                  item: style.selectItem
                }}
                rightSection={<IconArrow/>}
                data={['Industry sectors']}
                defaultValue={'Industry sectors'}
              />
              <Select
                className={cl(style.select, style.filter)}
                classNames={{
                  dropdown: style.selectDropdown,
                  item: style.selectItem
                }}
                rightSection={<IconArrow/>}
                data={['Company']}
                defaultValue={'Company'}
              />
              <Select
                className={cl(style.select, style.filter)}
                classNames={{
                  dropdown: style.selectDropdown,
                  item: style.selectItem
                }}
                rightSection={<IconArrow/>}
                data={['Approvals / certificates']}
                defaultValue={'Approvals / certificates'}
              />
            </div>
            <Flex justify={'flex-end'}>
              <Button className={style.resetBtn} variant={'filled'} leftIcon={<IconRefresh/>}>
                Reset filter
              </Button>
            </Flex>
          </div>
        </div>
        <div className={style.section}>

          <div className={style.container}>

            <div className={style.cards}>
              <div className={cl(style.card, style.new)}>
                <Box>
                  <Image src={ImageOne} alt={'image product'} radius={0} width={'100%'} />

                  <div className={style.topTexts}>
                    <Text className={style.title} component={'p'}>
                      D-R 909
                    </Text>
                    <Text className={style.subTitle} component={'p'}>
                      Extractive dust monitor
                    </Text>
                  </div>
                  <Text className={style.description}>
                    Extractive continuous dust measurement of small
                    to medium dust concentrations in wet flue and
                    process gases even under difficult plant conditions.

                    <div className={style.line} />
                  </Text>
                </Box>

                <Button className={style.moreBtn}>
                  more
                </Button>
              </div>
              <div className={style.card}>
                <Box>
                  <Image src={ImageOne} alt={'image product'} radius={0} width={'100%'} />

                  <div className={style.topTexts}>
                    <Text className={style.title} component={'p'}>
                      EDM 280
                    </Text>
                    <Text className={style.subTitle} component={'p'}>
                      Environmental dust monitor for PM monitoring in
                      ambient air
                    </Text>
                  </div>
                  <Text className={style.description}>
                    Latest generation optical aerosol spectrometer
                    with unique detection limit and excellent counting
                    efficiency. Suitable for real-time PM monitoring
                    under any environmental conditions and at all
                    sites.
                    <div className={style.line} />
                  </Text>
                </Box>

                <Button className={style.moreBtn}>
                  more
                </Button>
              </div>
              <div className={style.card}>
                <Box>
                  <Image src={ImageOne} alt={'image product'} radius={0} width={'100%'} />

                  <div className={style.topTexts}>
                    <Text className={style.title} component={'p'}>
                      GRIMM 5420
                    </Text>
                    <Text className={style.subTitle} component={'p'}>
                      19` rack mounted high-end condensation particle
                      counter
                    </Text>
                  </div>
                  <Text className={style.description}>
                    For continuous nanoparticle counting. Operation
                    as fully equipped SMPS+C system optional thanks
                    to scanning mobility particle sizer capability.

                    <div className={style.line} />
                  </Text>
                </Box>

                <Button className={style.moreBtn}>
                  more
                </Button>
              </div>
            </div>

            <Center mt={40}>
              <Pagination size={matches ? 'xs' : 'md'} total={10} className={style.pagination} />
            </Center>
          </div>
        </div>
      </div>
    </>
  );
};