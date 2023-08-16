import React from 'react';
import style from './index.module.scss';
import { ActionIcon, Box, Image, Tabs, Text } from '@mantine/core';
import ImageOne from '@/shared/images/Image-product-filter.png';
import ImageCompany from '@/shared/images/image-company.png';
import { ReactComponent as IconFullscreen } from '@/shared/images/icon-fullscreen.svg';

export const ProductFilterInfo = () => {
  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'}>
            PRODUCT FILTER
          </Text>
        </div>

        <div className={style.container}>
          <div className={style.boxes}>
            <div className={style.boxLeft}>
              <div className={style.imageBox}>
                <div className={style.imageWrapper}>
                  <Image src={ImageOne} alt={'Image'} width={'100%'} height={'100%'} />
                  <ActionIcon className={style.fullscreen}>
                    <IconFullscreen />
                  </ActionIcon>
                </div>
                <div className={style.imagesWrapper}>
                  <Image className={style.image} src={ImageOne} alt={'img'} width={'139px'} />
                  <Image className={style.image} src={ImageOne} alt={'img'} width={'139px'} />
                  <Image className={style.image} src={ImageOne} alt={'img'} width={'139px'} />
                  <Image className={style.image} src={ImageOne} alt={'img'} width={'139px'} />
                  <Image className={style.image} src={ImageOne} alt={'img'} width={'139px'} />
                  <Image className={style.image} src={ImageOne} alt={'img'} width={'139px'} />
                  <Image className={style.image} src={ImageOne} alt={'img'} width={'139px'} />
                </div>
              </div>
            </div>
            <div className={style.boxRight}>
              <Text component={'p'} className={style.title}>
                EDM 280
              </Text>
              <Text component={'p'} className={style.subTitle}>
                Environmental dust monitor for PM monitoring in Ambient air
              </Text>
              <Text component={'p'} className={style.text}>
                Latest generation optical aerosol spectrometer with unique detection limit and
                excellent counting efficiency. Suitable for real-time PM monitoring under any
                environmental conditions and at all sites.
              </Text>

              <Box m={'30px 0'}>
                <Text component={'p'} className={style.text}>
                  Functionality: Light scattering at single particles
                </Text>
                <div className={style.line} />
              </Box>

              <div className={style.logoWrapper}>
                <Image src={ImageCompany} alt={'ImageCompany'} width={'100%'} />
              </div>
            </div>
          </div>


          <Tabs
            classNames={{
              tabsList: style.tabsList,
              tab: style.tab,
              panel:style.tabsPanel
            }}
            className={style.tabs}
            defaultValue='features'
          >
            <Tabs.List>
              <Tabs.Tab value='features'>Features</Tabs.Tab>
              <Tabs.Tab value='benefits'>Benefits</Tabs.Tab>
              <Tabs.Tab value='applications'>Applications</Tabs.Tab>
              <Tabs.Tab value='technicalData'>Technical Data</Tabs.Tab>
              <Tabs.Tab value='accessories'>Accessories</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value='features'>
              <ul>
                <li>Latest generation 19‑inch based optical aerosol spectrometer, unique detection limit and excellent counting efficiency</li>
                <li>TÜV approved according to DIN EN 16450</li>
                <li>Touch display for intuitive menu control with colorguided status information</li>
                <li>All-weather sampling system, –40 to 60 °C, 60 g/m³ absolute humidity and wind</li>
                <li>Output of six dust mass fractions TSP, PM10, PM4, PM2.5, PM1, PMcoarse, total particle concentration and particle number size distribution</li>
                <li>Aerodynamic aerosol focusing as per ISO 21501‑1, no border zone error, total inlet flow analyzed in optical cell</li>
                <li>PSL traceable particle sizing as per ISO 21501‑1</li>
                <li>Flexible data protocols: GRIMM protocol, Modbus, GESYTEC / Bayern-Hessen protocol</li>
              </ul>
            </Tabs.Panel>

            <Tabs.Panel value='benefits'>
              <ul>
                <li>Latest generation 19‑inch based optical aerosol spectrometer, unique detection limit and excellent counting efficiency</li>
                <li>TÜV approved according to DIN EN 16450</li>
                <li>Touch display for intuitive menu control with colorguided status information</li>
                <li>All-weather sampling system, –40 to 60 °C, 60 g/m³ absolute humidity and wind</li>
              </ul>
            </Tabs.Panel>

            <Tabs.Panel value='applications'>
              <ul>
                <li>Latest generation 19‑inch based optical aerosol spectrometer, unique detection limit and excellent counting efficiency</li>
                <li>TÜV approved according to DIN EN 16450</li>
              </ul>
            </Tabs.Panel>
            <Tabs.Panel value='technicalData'>
              <ul>
                <li>Latest generation 19‑inch based optical aerosol spectrometer, unique detection limit and excellent counting efficiency</li>
                <li>TÜV approved according to DIN EN 16450</li>
              </ul>
            </Tabs.Panel>

            <Tabs.Panel value='accessories'>
              <ul>
                <li>Latest generation 19‑inch based optical aerosol spectrometer, unique detection limit and excellent counting efficiency</li>
                <li>TÜV approved according to DIN EN 16450</li>
                <li>TÜV approved according to DIN EN 16450</li>
              </ul>
            </Tabs.Panel>
          </Tabs>

        </div>
      </div>
    </>
  );
};