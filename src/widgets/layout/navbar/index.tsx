import React, { FC } from 'react';
import style from './index.module.scss';
import { ActionIcon, Anchor, Image, ScrollArea, Text } from '@mantine/core';
import Logo from '@/shared/images/logo.png';
import { ReactComponent as IconSearch } from '@/shared/images/search-icon.svg';
import { ReactComponent as IconDots } from '@/shared/images/icon-dots.svg';

const Navbar: FC = () => {
  return (
    <div className={style.navbarWrapper}>
      <ScrollArea>
        <div className={style.navbar}>
          <div className={style.navbarLeft}>
            <Image src={Logo} alt={'logo'} width={120} />
            <Text component={'p'}>
              We protect the environment and create peace by investing in equipment.
            </Text>
          </div>
          <div className={style.navbarRight}>
            <div className={style.navbarRightItem}>
              <Anchor className={style.link}>
                Home
              </Anchor>
            </div>
            <div className={style.navbarRightItem}>
              <ActionIcon variant={'transparent'}>
                <IconDots />
              </ActionIcon>
            </div>
            <div className={style.navbarRightItem}>
              <ActionIcon variant={'transparent'}>
                <IconSearch />
              </ActionIcon>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

// eslint-disable-next-line import/no-default-export
export default Navbar;
