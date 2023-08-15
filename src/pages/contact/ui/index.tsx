import React from 'react';
import style from './index.module.scss';
import { Box, Button, Center, Flex, Text, Textarea, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useMediaQuery } from '@mantine/hooks';

const bot = {
  token: '6634623219:AAGHL47GZ-IMt9fHNGG2WVFDGCmIebMetRk',
  chatId: '117817602',
};
export const Contact = () => {
  const matches = useMediaQuery('(max-width: 500px)');
  const form = useForm({
    initialValues: {
      email: '',
      number: '',
      message: '',
    },

    validate: {
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      number: (value: string) => (/^\d+$/.test(value) ? null : 'Invalid number'),
      message: (value: string) => (value.length > 10 ? null : 'Message is too short'),
    },
  });
  return (
    <>
      <div className={style.sectionWrapper}>
        <div className={style.titleWrapper}>
          <Text component={'p'}>
            Contact
          </Text>
        </div>

        <div className={style.section}>
          <div className={style.container}>
            <Text component={'p'} className={style.sectionTextOne}>
              This is a page with some basic contact information, such as an address and phone number. You might also
              try a plugin to add a contact form
            </Text>

            <Center w={'100%'} mt={40}>
              <Box className={style.form}>
                <form onSubmit={form.onSubmit((values) => {
                  const message = '<b>Email</b>: ' + values.email + "%0A" +
                    `<b>Number</b>: ${values.number}` + "%0A" +
                    `<b>Message</b>: ${values.message}`;
                  fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatId}&text=${message}&parse_mode=HTML`, {
                    method: 'GET',
                  }).then((res) => {
                    if (res.status === 200) {
                      alert('Message sent successfully');
                      form.reset();
                    } else {
                      alert('Error');
                    }
                  });
                })}>
                  <Flex wrap={matches ? 'wrap' : 'nowrap'} w={'100%'} columnGap={20}>
                    <TextInput
                      className={style.input}
                      label='Email'
                      placeholder='your@email.com'
                      {...form.getInputProps('email')}
                    />
                    <TextInput
                      className={style.input}
                      label='Phone number'
                      placeholder='Phone number'
                      {...form.getInputProps('number')}
                    />
                  </Flex>
                  <Textarea
                    className={style.input}
                    placeholder='Your comment'
                    label='Your comment'
                    {...form.getInputProps('message')}
                  />
                  <Button type='submit' className={style.formBtn}>
                    Send
                  </Button>
                </form>
              </Box>
            </Center>

          </div>
        </div>
      </div>
    </>
  );
};