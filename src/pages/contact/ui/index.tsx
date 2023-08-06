import React from 'react';
import style from './index.module.scss';
import styles from '@/widgets/layout/footer/index.module.scss';
import { Box, Button, Text, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
const bot = {
  token: '6467635323:AAGtvPazdj4zkpFq96D9wqCQFUVa-iKe5gA',
  chatId: '1452109307'
}
export const Contact = () => {
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
              try a plugin to add a contact form.
            </Text>
            <div className={styles.footerCenter}>
              <Box  maw={500} mx="auto" mt={20} style={{
                rowGap: "20px",
              }}>
                <form onSubmit={form.onSubmit((values) => {
                  fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chatId}&text=${
                    'Email: ' + values.email + '\n ' +
                    'Number: ' + values.number + '\n ' +
                    'Message: ' + values.message
                  }`,{
                    method: 'GET',
                  }).then((res) => {
                    if (res.status === 200){
                      alert('Message sent successfully')
                      form.reset()
                    }else {
                      alert('Error')
                    }
                  })
                })}>
                  <TextInput
                    classNames={{
                      required: styles.none
                    }}
                    className={styles.input}
                    withAsterisk
                    label="Email"
                    placeholder="your@email.com"
                    {...form.getInputProps('email')}
                  />
                  <TextInput
                    classNames={{
                      required: styles.none
                    }}
                    className={styles.input}
                    withAsterisk
                    label="Phone number"
                    placeholder="Phone number"
                    {...form.getInputProps('number')}
                  />
                  <Textarea
                    classNames={{
                      required: styles.none
                    }}
                    className={styles.input}
                    placeholder="Your comment"
                    label="Your comment"
                    withAsterisk
                    {...form.getInputProps('message')}
                  />
                  <Button type="submit" className={styles.formBtn}>
                    Send
                  </Button>
                </form>
              </Box>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};