import React, { useEffect, useState } from 'react';
import style from './index.module.scss';
import { Anchor, Center, Text ,Input,Button} from '@mantine/core';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { searchData } from '@/pages/search-results/lib';
import { searchFilter } from '@/shared/lib/filterData';

export const SearchResults = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const [searchDataValue, setSearchDataValue] = useState<typeof searchData>([]);
  const [search, setSearch] = useState('');


  useEffect(() => {
    if (!params.get('q')) {
      navigate('/main');
      setSearchDataValue([]);
    }else {
      setSearchDataValue([]);
      searchPage(params.get('q')!);
    }
    setSearch(params.get('q')!);
  }, [params]);


  function searchPage(value: string) {
    const result = searchFilter(searchData, value, ['title', 'text']);
    setSearchDataValue(result);
  }


  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'} className={style.searchText}>
            Search: <span>“{params.get('q')}”</span>
          </Text>
          <Text component={'p'} className={style.text}>
            {searchDataValue.length > 0 ? ` We found ${searchDataValue.length} results for your search.` : 'We could not find any results for your search. You can give it ' +
              'another try through the search form below.'}
          </Text>
        </div>

        <div className={style.section}>
          <div className={style.container}>
            {
              searchDataValue?.length > 0 ? searchDataValue.map((item) =>
                <div key={item.path}>
                  <div className={style.pages}>
                    <Center>
                      <Anchor component={Link} to={item.path}>
                        {item.title}
                      </Anchor>
                    </Center>
                    <Text component={'p'} className={style.sectionTextOne}>
                      {item.text}
                    </Text>
                  </div>
                  <div className={style.line}>
                    <hr />
                    <Text component={'span'}> / / </Text>
                    <hr />
                  </div>
                </div>,
              ) : (
                <div >
                  <Center>
                    <div className={style.noResults}>
                      <Input type='text' className={style.searchInput} onChange={(e) => {
                        setSearch(e.target.value)
                      }} value={search} placeholder={'Search ...'}/>
                      <Button className={style.searchBtn} onClick={() => {
                        navigate(`/search-results?q=${search}`);
                      }}>
                        SEARCH
                      </Button>
                    </div>
                  </Center>
                </div>
              )
            }

            {/*<div className={style.pages}>*/}
            {/*  <Center>*/}
            {/*    <Anchor>*/}
            {/*      Ecology*/}
            {/*    </Anchor>*/}
            {/*  </Center>*/}
            {/*  <Text component={'p'} className={style.sectionTextOne}>*/}
            {/*    Monitoring Comprehensive monitoring of industrial production processes guarantees that plant operators*/}
            {/*    may not only respond to abnormalities in the process flow in a timely manner but also actively optimize*/}
            {/*    the process. Time-delayed data capture, such as through discontinuous measurements, is frequently*/}
            {/*    insufficient for this purpose. Data must be gathered and processed online as soon as […]*/}
            {/*  </Text>*/}
            {/*</div>*/}
            {/*<div className={style.line}>*/}
            {/*  <hr />*/}
            {/*  <Text component={'span'}> / / </Text>*/}
            {/*  <hr />*/}
            {/*</div>*/}
            {/*<div className={style.pages}>*/}
            {/*  <Center>*/}
            {/*    <Anchor>*/}
            {/*      About*/}
            {/*    </Anchor>*/}
            {/*  </Center>*/}
            {/*  <Text component={'p'} className={style.sectionTextOne}>*/}
            {/*    You might be an artist who would like to introduce yourself and your work here or maybe you’re a*/}
            {/*    business with a mission to describe.*/}
            {/*  </Text>*/}
            {/*</div>*/}
            {/*<div className={style.line}>*/}
            {/*  <hr />*/}
            {/*  <Text component={'span'}> / / </Text>*/}
            {/*  <hr />*/}
            {/*</div>*/}
            {/*<div className={style.pages}>*/}
            {/*  <Center>*/}
            {/*    <Anchor>*/}
            {/*      Contact*/}
            {/*    </Anchor>*/}
            {/*  </Center>*/}
            {/*  <Text component={'p'} className={style.sectionTextOne}>*/}
            {/*    This is a page with some basic contact information, such as an address and phone number. You might also*/}
            {/*    try a plugin to add a contact form.*/}
            {/*  </Text>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </>
  );
};