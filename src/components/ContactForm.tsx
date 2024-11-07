'use client';

import { Button } from '@/components/ui/button';
import * as F from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import validator from 'validator';
import { z } from 'zod';

type ContactFormSchema = z.infer<typeof contactFormSchema>;

const contactFormSchema = z.object({
  name: z.string().min(1, 'Name required'),
  email: z.string().min(1, 'Email required').email('Invalid email'),
  phoneNo: z
    .string()
    .min(1, 'Phone Number required')
    .refine(validator.isMobilePhone, { message: 'Invalid Phone Number' }),
  message: z.string().min(1, 'Message required'),
});

const sendEmail = async function (values: ContactFormSchema) {
  const body = JSON.stringify(values);
  const response = await fetch('/api/email', {
    method: 'POST',
    body,
  });
  const data = await response.json();
  return data;
};

export default function ContactForm() {
  const { toast } = useToast();

  const formMethods = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phoneNo: '',
      message: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (values: ContactFormSchema) => {
    try {
      // Includes "title" and "description" from POST request return
      const data = await sendEmail(values);

      toast(data);

      formMethods.reset();
    } catch (err) {
      toast({
        title: 'Uh oh, something went wrong...',
        description: 'Please check back later!',
      });
    }
  };

  return (
    <F.Root {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)} className='space-y-4'>
        <F.Field
          name='name'
          control={formMethods.control}
          render={({ field: { disabled, ...field } }) => (
            <F.Item>
              <div className='flex justify-between items-center'>
                <F.Label className='text-md'>Name</F.Label>
                <F.Message className='text-md' />
              </div>
              <F.Control>
                <Input
                  {...field}
                  disabled={formMethods.formState.isSubmitting || disabled}
                />
              </F.Control>
            </F.Item>
          )}
        />
        <F.Field
          name='email'
          control={formMethods.control}
          render={({ field: { disabled, ...field } }) => (
            <F.Item>
              <div className='flex justify-between items-center'>
                <F.Label className='text-md'>Email</F.Label>
                <F.Message className='text-md' />
              </div>
              <F.Control>
                <Input
                  {...field}
                  disabled={formMethods.formState.isSubmitting || disabled}
                />
              </F.Control>
            </F.Item>
          )}
        />
        <F.Field
          name='phoneNo'
          control={formMethods.control}
          render={({ field: { disabled, ...field } }) => (
            <F.Item>
              <div className='flex justify-between items-center'>
                <F.Label className='text-md'>Phone Number</F.Label>
                <F.Message className='text-md' />
              </div>
              <F.Control>
                <Input
                  {...field}
                  disabled={formMethods.formState.isSubmitting || disabled}
                />
              </F.Control>
            </F.Item>
          )}
        />
        <F.Field
          name='message'
          control={formMethods.control}
          render={({ field: { disabled, ...field } }) => (
            <F.Item>
              <div className='flex justify-between items-center'>
                <F.Label className='text-md'>Message</F.Label>
                <F.Message className='text-md' />
              </div>
              <F.Control>
                <Textarea
                  rows={8}
                  {...field}
                  disabled={formMethods.formState.isSubmitting || disabled}
                />
              </F.Control>
            </F.Item>
          )}
        />
        <Button type='submit' disabled={!formMethods.formState.isValid}>
          Submit
        </Button>
      </form>
    </F.Root>
  );
}
