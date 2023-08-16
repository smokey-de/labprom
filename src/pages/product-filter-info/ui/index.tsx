import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { ActionIcon, Box, Image, Modal, Tabs, Text } from '@mantine/core';
import ImageCompany from '@/shared/images/image-company.png';
import { ReactComponent as IconFullscreen } from '@/shared/images/icon-fullscreen.svg';
import { ReactComponent as IconClose } from '@/shared/images/icon-close.svg';
import { useParams } from 'react-router-dom';
import { useDisclosure, useMediaQuery, useWindowScroll } from '@mantine/hooks';
import cl from 'classnames';

export const ProductFilterInfo = () => {
  const matches = useMediaQuery('(max-width: 680px)');
  const [scroll, scrollTo] = useWindowScroll();
  const [opened, { open, close }] = useDisclosure(false);
  const { id } = useParams();
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    setTimeout(() => scrollTo({ y: 0 }), 0);
    const items = JSON.parse(localStorage.getItem('data') || '{}');
    if (items) {
      setData(items);
    }
  }, [id]);
  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'}>
            PRODUCT FILTER
          </Text>
        </div>

        <div className={style.container}>

          <div key={data?.id} className={style.boxes}>
            <div className={style.boxLeft}>
              <div className={style.imageBox}>
                <div className={cl(style.imageWrapper, [data.new && style.new])}>
                  <Image src={'../../../../' + data?.image || ''} alt={'Image'} width={'100%'} height={'100%'} />
                  <ActionIcon className={style.fullscreen} onClick={open}>
                    <IconFullscreen />
                  </ActionIcon>
                </div>
                <div className={style.imagesWrapper}>
                  <Image className={style.image} src={'../../../../' + data?.image || ''} alt={'img'} width={'139px'} />
                </div>
              </div>
            </div>
            <div className={style.boxRight}>
              <Text component={'p'} className={style.title}>
                {data?.title || '-'}
              </Text>
              <Text component={'p'} className={style.subTitle}>
                {data?.subTitle || '-'}
              </Text>
              <Text component={'p'} className={style.text}>
                {data?.description || '-'}
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
              panel: style.tabsPanel,
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
                <li>Latest generation 19‑inch based optical aerosol spectrometer, unique detection limit and excellent
                  counting efficiency
                </li>
                <li>TÜV approved according to DIN EN 16450</li>
                <li>Touch display for intuitive menu control with colorguided status information</li>
                <li>All-weather sampling system, –40 to 60 °C, 60 g/m³ absolute humidity and wind</li>
                <li>Output of six dust mass fractions TSP, PM10, PM4, PM2.5, PM1, PMcoarse, total particle concentration
                  and particle number size distribution
                </li>
                <li>Aerodynamic aerosol focusing as per ISO 21501‑1, no border zone error, total inlet flow analyzed in
                  optical cell
                </li>
                <li>PSL traceable particle sizing as per ISO 21501‑1</li>
                <li>Flexible data protocols: GRIMM protocol, Modbus, GESYTEC / Bayern-Hessen protocol</li>
              </ul>
            </Tabs.Panel>
            <Tabs.Panel value='benefits'>
              <ul>
                <li>Latest generation 19‑inch based optical aerosol spectrometer, unique detection limit and excellent
                  counting efficiency
                </li>
                <li>TÜV approved according to DIN EN 16450</li>
                <li>Touch display for intuitive menu control with colorguided status information</li>
                <li>All-weather sampling system, –40 to 60 °C, 60 g/m³ absolute humidity and wind</li>
              </ul>
            </Tabs.Panel>
            <Tabs.Panel value='applications'>
              <ul>
                <li>Latest generation 19‑inch based optical aerosol spectrometer, unique detection limit and excellent
                  counting efficiency
                </li>
                <li>TÜV approved according to DIN EN 16450</li>
              </ul>
            </Tabs.Panel>
            <Tabs.Panel value='technicalData'>
              <Tabs
                classNames={{
                  tabsList: style.technicalDataList,
                  tab: style.tab,
                  panel: style.tabsPanel,
                }}
                className={style.tabs}
                defaultValue='subTechnicalData'
                orientation={matches ? 'horizontal' : 'vertical'}
              >
                <Tabs.List>
                  <Tabs.Tab value='subTechnicalData'>Technical data</Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value='subTechnicalData'>
                  <div className={style.table}>
                    <div className={style.row}>
                      <Text className={style.label} component={'p'}>
                        Detection principle
                      </Text>
                      <Text className={style.text} component={'p'}>
                        Light scattering at single particles with diode laser; detection volume aerodynamically focused
                        (ISO 21501‑1), no border zone error
                      </Text>
                    </div>
                    <div className={style.row}>
                      <Text className={style.label} component={'p'}>
                        Measured mass fractions
                      </Text>
                      <Text className={style.text} component={'p'}>
                        TSP, PM10, PM4, PM2.5, PM1, PMcoarse
                      </Text>
                    </div>
                    <div className={style.row}>
                      <Text className={style.label} component={'p'}>
                        Particle size range
                      </Text>
                      <Text className={style.text} component={'p'}>
                        0.178 μm {'<'} Do {'<'} 29.4 μm (Do = optical latex equivalent diameter)
                      </Text>
                    </div>
                    <div className={style.row}>
                      <Text className={style.label} component={'p'}>
                        Size channels
                      </Text>
                      <Text className={style.text} component={'p'}>
                        72, channel boundaries equidistant, 32 channels per decade
                      </Text>
                    </div>
                    <div className={style.row}>
                      <Text className={style.label} component={'p'}>
                        Mass concentration
                      </Text>
                      <Text className={style.text} component={'p'}>
                        0 … 12,000 μg/m³ for PM10 <br />
                        0 … 5,100 μg/m³ for PM2.5 (with 10 % coincidence error for Arizona Dust A1 ultrafine)
                      </Text>
                    </div>
                    <div className={style.row}>
                      <Text className={style.label} component={'p'}>
                        Detection limit
                      </Text>
                      <Text className={style.text} component={'p'}>
                        0.1 μg/m³ for PM10
                      </Text>
                    </div>
                    <div className={style.row}>
                      <Text className={style.label} component={'p'}>
                        Zero level
                      </Text>
                      <Text className={style.text} component={'p'}>
                        ≤ 0.1 μg/m³
                      </Text>
                    </div>
                    <div className={style.row}>
                      <Text className={style.label} component={'p'}>
                        Sample volume flow
                      </Text>
                      <Text className={style.text} component={'p'}>
                        1.2 l/min, accuracy ≤ 2 %, constant at the orifice plate by regulation
                      </Text>
                    </div>
                    <div className={style.row}>
                      <Text className={style.label} component={'p'}>
                        Internal purge air
                      </Text>
                      <Text className={style.text} component={'p'}>
                        0.3 to 0.5 l/min, protection of laser optics, reference air for self-test
                      </Text>
                    </div>
                    <div className={style.row}>
                      <Text className={style.label} component={'p'}>
                        Storage interval
                      </Text>
                      <Text className={style.text} component={'p'}>
                        Selectable, 6 seconds, 1, 5, 10, 15, 30, 60 minutes, daily average value
                      </Text>
                    </div>

                  </div>
                </Tabs.Panel>
              </Tabs>
            </Tabs.Panel>
            <Tabs.Panel value='accessories'>
              <ul>
                <li>Latest generation 19‑inch based optical aerosol spectrometer, unique detection limit and excellent
                  counting efficiency
                </li>
                <li>TÜV approved according to DIN EN 16450</li>
                <li>TÜV approved according to DIN EN 16450</li>
              </ul>
            </Tabs.Panel>
          </Tabs>

        </div>
      </div>

      <Modal className={style.modal} radius={0} size={700} centered opened={opened} onClose={close} title={false}
             withCloseButton={false} padding={0}>
        <ActionIcon onClick={close} className={style.closeBtn}>
          <IconClose />
        </ActionIcon>
        <Image src={'../../../../' + data?.image || ''} alt={'Image'} width={'100%'} height={'100%'} />
      </Modal>
    </>
  );
};