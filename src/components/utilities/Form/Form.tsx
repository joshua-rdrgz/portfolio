import React, { useContext, useRef } from 'react';
import useForm from './useForm';
import ThemeContext from '../../../store/theme-context';
import useStandardMQueries from '../../../hooks/useStandardMQueries';
import Button from '../Button/Button';
import ButtonType from '../Button/ButtonType';

interface FormProps {
  formClassName?: string;
}

const Form: React.FC<FormProps> = ({ formClassName }) => {
  const { isDarkMode } = useContext(ThemeContext);
  const { biggerThanSmallPhone } = useStandardMQueries();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const {
    formRef,
    formValid,
    error: { showNameErrorField, showEmailErrorField, showMessageErrorField },
    showSuccessMessage,
    showFailureMessage,
    onChangeHandler,
    onBlurHandler,
    onSubmitHandler,
  } = useForm();

  const BUTTON_PROPS: ButtonType = {
    Tag: 'button',
    btnInfo: {
      type: 'primary',
      textColor: isDarkMode ? 'color--black-90' : 'color--white',
      btnColor: `bg-color__${isDarkMode ? 'dark' : 'light'}--accent`,
      hoverBgColor: `hover-bg-color__${
        isDarkMode ? 'dark' : 'light'
      }--accent-medium`,
    },
    customClasses: 'form__button',
    ref: buttonRef,
    isDisabled: formValid ? false : true,
  };

  const FORM_CLASSES = `form text-size--${
    biggerThanSmallPhone ? 'large' : 'medium'
  }${formClassName ? ' ' + formClassName : ''}`;

  const LABEL_CLASSES = `color__${isDarkMode ? 'dark' : 'light'}--accent-${
    isDarkMode ? 'medium-opaque' : 'dark'
  } text-size--medium`;

  const INPUT_CLASSES = `form__input form__input--${
    isDarkMode ? 'dark' : 'light'
  } color__${isDarkMode ? 'dark' : 'light'}--accent-dark text-size--${
    biggerThanSmallPhone ? 'large' : 'medium'
  }`;

  return (
    <form onSubmit={onSubmitHandler} className={FORM_CLASSES} ref={formRef}>
      <p
        className={`form__required ${
          isDarkMode ? 'color--black-5' : 'color--black-90'
        }`}
      >
        (*)Required
      </p>
      <label className={LABEL_CLASSES}>
        Name*
        <input
          name='user_name'
          type='text'
          placeholder='Your Name Here...'
          className={INPUT_CLASSES}
          onChange={(e) => onChangeHandler(e, 'NAME')}
          onBlur={() => onBlurHandler('NAME_TOUCHED')}
        />
      </label>
      {showNameErrorField && (
        <p className='form__error-text form__status-message'>
          Please Enter Valid Name.
        </p>
      )}
      <label className={LABEL_CLASSES}>
        Email*
        <input
          name='user_email'
          type='email'
          placeholder='Your Email Here...'
          className={INPUT_CLASSES}
          onChange={(e) => onChangeHandler(e, 'EMAIL')}
          onBlur={() => onBlurHandler('EMAIL_TOUCHED')}
        />
      </label>
      {showEmailErrorField && (
        <p className='form__error-text form__status-message'>
          Please Enter Valid Email.
        </p>
      )}
      <label className={LABEL_CLASSES}>
        Message*
        <textarea
          name='user_message'
          placeholder='Your Message Here...'
          className={INPUT_CLASSES + ' form__textarea'}
          onChange={(e) => onChangeHandler(e, 'MESSAGE')}
          onBlur={() => onBlurHandler('MESSAGE_TOUCHED')}
        />
      </label>
      {showMessageErrorField && (
        <p className='form__error-text form__status-message'>
          Please Enter Valid Message.
        </p>
      )}
      {showSuccessMessage && (
        <p className='form__success form__status-message'>
          Your message has been received. Thanks!
        </p>
      )}
      {showFailureMessage && (
        <p className='form__failure form__status-message'>
          Something went wrong on my end 😔. Please try again!
        </p>
      )}
      <Button {...BUTTON_PROPS}>Let's Connect!</Button>
    </form>
  );
};

export default Form;
