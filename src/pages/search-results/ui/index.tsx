import React from 'react';
import style from './index.module.scss';
import { Text, Anchor, Center } from '@mantine/core';

export const SearchResults = () => {
  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'} className={style.searchText}>
            Search: <span>“r”</span>
          </Text>
          <Text component={'p'} className={style.text}>
            We found 4 results for your search.
          </Text>
        </div>

        <div className={style.section}>
          <div className={style.container}>
            <div className={style.pages}>
              <Center>
                <Anchor>
                  Who We Are?
                </Anchor>
              </Center>
              <Text component={'p'} className={style.sectionTextOne}>
                “Only when the last fish is gone, the last river poisoned, the last tree cut down…will mankind realize
                they cannot eat money.” Our Market Managers handwrite product material to guarantee you have the finest
                range of products to compare with “apples-to-apples” specs and unique helpful descriptions. Unlike other
                sites that connect you to a vendor, […]
              </Text>
            </div>
            <div className={style.line}>
              <hr />
              <Text component={'span'}> / / </Text>
              <hr />
            </div>
            <div className={style.pages}>
              <Center>
                <Anchor>
                  Ecology
                </Anchor>
              </Center>
              <Text component={'p'} className={style.sectionTextOne}>
                Monitoring Comprehensive monitoring of industrial production processes guarantees that plant operators
                may not only respond to abnormalities in the process flow in a timely manner but also actively optimize
                the process. Time-delayed data capture, such as through discontinuous measurements, is frequently
                insufficient for this purpose. Data must be gathered and processed online as soon as […]
              </Text>
            </div>
            <div className={style.line}>
              <hr />
              <Text component={'span'}> / / </Text>
              <hr />
            </div>
            <div className={style.pages}>
              <Center>
                <Anchor>
                  About
                </Anchor>
              </Center>
              <Text component={'p'} className={style.sectionTextOne}>
                You might be an artist who would like to introduce yourself and your work here or maybe you’re a
                business with a mission to describe.
              </Text>
            </div>
            <div className={style.line}>
              <hr />
              <Text component={'span'}> / / </Text>
              <hr />
            </div>
            <div className={style.pages}>
              <Center>
                <Anchor>
                  Contact
                </Anchor>
              </Center>
              <Text component={'p'} className={style.sectionTextOne}>
                This is a page with some basic contact information, such as an address and phone number. You might also
                try a plugin to add a contact form.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};