import React, { useState, useReducer, useEffect, useRef } from 'react';
import emailjs from 'emailjs-com';

const {
  REACT_APP_SERVICE_ID: SERVICE_ID,
  REACT_APP_TEMPLATE_ID: TEMPLATE_ID,
  REACT_APP_PUBLIC_KEY: PUBLIC_KEY,
} = process.env;

interface InputState {
  value: string | null;
  touched: boolean;
}
interface FormState {
  valid: boolean;
}
interface State {
  name: InputState;
  email: InputState;
  message: InputState;
  form: FormState;
}
interface UpdateValue {
  type: 'NAME' | 'EMAIL' | 'MESSAGE';
  payload: string;
}
interface UpdateTouched {
  type: 'NAME_TOUCHED' | 'EMAIL_TOUCHED' | 'MESSAGE_TOUCHED';
  payload: boolean;
}
interface UpdateForm {
  type: 'FORM_VALID';
  payload: boolean;
}
type Action = UpdateValue | UpdateTouched | UpdateForm;
type InputType = 'name' | 'email' | 'message';

const initState: State = {
  name: {
    value: null,
    touched: false,
  },
  email: {
    value: null,
    touched: false,
  },
  message: {
    value: null,
    touched: false,
  },
  form: {
    valid: false,
  },
};

const reducerFn = (state: State, action: Action) => {
  type ReturnStatementProps<T = boolean> = T extends true
    ? {
        isInput: T;
        object: InputType;
        key: 'value' | 'touched';
      }
    : {
        isInput: T;
        object: 'form';
        key: 'valid' | 'submitAttempted';
      };
  const returnStatement = ({ object, key }: ReturnStatementProps) => {
    return { ...state, [object]: { ...state[object], [key]: action.payload } };
  };
  switch (action.type) {
    case 'NAME':
      return returnStatement({ isInput: true, object: 'name', key: 'value' });
    case 'NAME_TOUCHED':
      return returnStatement({ isInput: true, object: 'name', key: 'touched' });
    case 'EMAIL':
      return returnStatement({ isInput: true, object: 'email', key: 'value' });
    case 'EMAIL_TOUCHED':
      return returnStatement({
        isInput: true,
        object: 'email',
        key: 'touched',
      });
    case 'MESSAGE':
      return returnStatement({
        isInput: true,
        object: 'message',
        key: 'value',
      });
    case 'MESSAGE_TOUCHED':
      return returnStatement({
        isInput: true,
        object: 'message',
        key: 'touched',
      });
    case 'FORM_VALID':
      return returnStatement({ isInput: false, object: 'form', key: 'valid' });
    default:
      throw new Error('Type is not valid!');
  }
};

const useForm = () => {
  const [state, dispatchState] = useReducer(reducerFn, initState);
  const [formValid, setFormValid] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  const { name, email, message } = state;
  const checkValidity = (state: InputState) => {
    return state.value?.trim() !== undefined && state.value.trim().length > 0;
  };
  const nameIsValid = checkValidity(name);
  const emailIsValid = checkValidity(email);
  const messageIsValid = checkValidity(message);

  const showNameErrorField = !nameIsValid && name.touched;
  const showEmailErrorField = !emailIsValid && email.touched;
  const showMessageErrorField = !messageIsValid && message.touched;

  const resetState = () => {
    dispatchState({ type: 'NAME', payload: '' });
    dispatchState({ type: 'NAME_TOUCHED', payload: false });

    dispatchState({ type: 'EMAIL', payload: '' });
    dispatchState({ type: 'EMAIL_TOUCHED', payload: false });

    dispatchState({ type: 'MESSAGE', payload: '' });
    dispatchState({ type: 'MESSAGE_TOUCHED', payload: false });

    dispatchState({ type: 'FORM_VALID', payload: false });

    setFormValid(false);
  };

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
    type: UpdateValue['type']
  ) => {
    dispatchState({ type, payload: e!.target.value });
    dispatchState({ type: `${type}_TOUCHED`, payload: true });
  };

  const onBlurHandler = (type: UpdateTouched['type']) => {
    let inputName: InputType;
    switch (type) {
      case 'NAME_TOUCHED':
        inputName = 'name';
        break;
      case 'EMAIL_TOUCHED':
        inputName = 'email';
        break;
      case 'MESSAGE_TOUCHED':
        inputName = 'message';
        break;
      default:
        throw new Error(`Type is not valid!`);
    }
    if (state[inputName].touched === false) {
      dispatchState({ type, payload: true });
    }
  };

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.form.valid) return;

    // email sending logic
    emailjs
      .sendForm(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        formRef.current as HTMLFormElement,
        PUBLIC_KEY as string
      )
      .then(
        () => {
          // success, can pull in 'result'
          setShowSuccessMessage(true);
        },
        () => {
          // failure, can pull in 'error'
          setShowFailureMessage(true);
        }
      );
    formRef.current!.reset();
    resetState();
  };

  useEffect(() => {
    const formIsValid = nameIsValid && emailIsValid && messageIsValid;
    setFormValid(formIsValid ? true : false);
  }, [state, nameIsValid, emailIsValid, messageIsValid]);

  useEffect(() => {
    // triggered by previous useEffect.  Done this way to avoid lag.
    dispatchState({ type: 'FORM_VALID', payload: formValid });
  }, [formValid]);

  useEffect(() => {
    // triggered by onSubmitHandler, which changes one of these to true.
    if (showSuccessMessage === true) {
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    }
    if (showFailureMessage === true) {
      setTimeout(() => {
        setShowFailureMessage(false);
      }, 5000);
    }
  }, [showSuccessMessage, showFailureMessage]);

  return {
    formRef,
    formValid, // to control whether submit button is disabled
    error: {
      showNameErrorField,
      showEmailErrorField,
      showMessageErrorField,
    },
    showSuccessMessage,
    showFailureMessage,
    onChangeHandler,
    onBlurHandler,
    onSubmitHandler,
  };
};

export default useForm;
