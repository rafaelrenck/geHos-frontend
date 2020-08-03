import React, { useCallback, useRef } from 'react';
import { FiLock, FiSave } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

const ForceUpdatePassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        password: Yup.string().required('Campo obrigatório'),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref('password'), undefined],
          'As senhas devem ser iguais',
        ),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="geHos" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Atualize sua senha</h1>
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Nova senha"
          />
          <Input
            name="passwordConfirmation"
            icon={FiLock}
            type="password"
            placeholder="Confirme a senha"
          />
          <Button type="submit">
            <FiSave size={20} />
            Salvar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ForceUpdatePassword;
