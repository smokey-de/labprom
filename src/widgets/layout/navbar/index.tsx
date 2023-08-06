import React, { FC, useState } from 'react';
import style from './index.module.scss';
import { ActionIcon, Anchor, Drawer, Flex, Image, Input, Text, Tooltip } from '@mantine/core';
import Logo from '@/shared/images/logo.png';
import { ReactComponent as IconSearch } from '@/shared/images/search-icon.svg';
import { ReactComponent as IconDots } from '@/shared/images/icon-dots.svg';
import { ReactComponent as IconClose } from '@/shared/images/icon-close.svg';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { ReactComponent as IconOne } from '@/shared/images/icon-yelp.svg';
import { ReactComponent as IconTwo } from '@/shared/images/icon-facebook.svg';
import { ReactComponent as IconThree } from '@/shared/images/icon-twitter.svg';
import { ReactComponent as IconFour } from '@/shared/images/icon-instagram.svg';
import { ReactComponent as IconFive } from '@/shared/images/icon-mail.svg';
import cl from 'classnames';
import { dataMenu } from '@/widgets/layout/navbar/libs';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar: FC = () => {
  const [search, setSearch] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const location = useLocation();
  const navigate = useNavigate();
  const matches = useMediaQuery('(max-width: 820px)');
  return (
    <>
      <div className={style.navbarWrapper}>
        {search && <div className={style.searchWrapper}>
          <Input placeholder={'Search...'} className={style.input} rightSection={
            <ActionIcon  onClick={() => setSearch(false)} variant={'transparent'}>
              <IconClose />
            </ActionIcon>
          } />
        </div>}
        <div className={style.navbar}>
          {matches && <div className={cl(style.navbarRightItem)}>
            <Tooltip position={'bottom'} label={'Search'}>
              <ActionIcon onClick={() => setSearch(true)} variant={'transparent'}>
                <IconSearch />
              </ActionIcon>
            </Tooltip>
          </div>}
          <div className={style.navbarLeft}>
            <Image src={Logo} alt={'logo'} width={matches ? 80 : 120} />
            <Text component={'p'}>
              We protect the environment and create peace by investing in equipment.
            </Text>
          </div>
          {!matches && <div className={style.navbarRight}>
            <div className={style.navbarRightItem}>
              <Anchor className={style.link} component={Link} to={'/'} >
                Home
              </Anchor>
            </div>
            <div className={style.navbarRightItem}>
              <Tooltip position={'bottom'} label={'Menu'}>
                <ActionIcon onClick={open} variant={'transparent'}>
                  <IconDots />
                </ActionIcon>
              </Tooltip>
            </div>
            <div className={style.navbarRightItem}>
              <Tooltip position={'bottom'} label={'Search'}>
                <ActionIcon onClick={() => setSearch(true)} variant={'transparent'}>
                  <IconSearch />
                </ActionIcon>
              </Tooltip>
            </div>
          </div>}
          {matches && <div className={style.navbarRightItem}>
            <Tooltip position={'bottom'} label={'Menu'}>
              <ActionIcon onClick={open} variant={'transparent'}>
                <IconDots />
              </ActionIcon>
            </Tooltip>
          </div>}
        </div>
      </div>
      <Drawer padding={40} position={'right'} size={500} opened={opened} onClose={close} title={false}
              withCloseButton={false} classNames={{ content: style.drawerBody }}>
        <Flex mb={40} justify={'flex-end'}>
          <Tooltip position={'left'} label={'Close Menu'}>
            <ActionIcon onClick={close} variant={'transparent'}>
              <IconClose />
            </ActionIcon>
          </Tooltip>
        </Flex>
        <div className={style.menu}>
          {dataMenu?.map((i, index) => <Anchor onClick={close} key={index}
                                               component={Link} to={i?.path}
                                               className={cl(style.link, [location.pathname === i?.path && style.active])}>
            <p>
              {i?.label}
            </p>
          </Anchor>)}

        </div>

        <Flex className={style.drawerBottom}>
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
          <Anchor>
            <div className={style.icon}>
              <IconFive />
            </div>
          </Anchor>
        </Flex>
      </Drawer>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default Navbar;
