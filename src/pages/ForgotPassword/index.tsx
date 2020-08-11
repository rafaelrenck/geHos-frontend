import React, { useCallback, useRef } from 'react';
import { FiSend, FiUser, FiMail, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { Background, Container, ContentContainer, Content } from './styles';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface ForgotPasswordFormData {
  username: string;
  email: string;
}

const ForgotPassword: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ForgotPasswordFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Campo obrigatório'),
          email: Yup.string()
            .required('Campo obrigatório')
            .email('Informe um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/forgot', {
          username: data.username,
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'Recuperação de senha concluída',
          description: 'Enviamos um e-mail com uma nova senha de acesso.',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na recuperação de senha',
          description:
            'Verifique o nome de usuário e o e-mail e tente novamente',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Background />
      <ContentContainer>
        <Content>
          <img src={logoImg} alt="geHos" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Recuperar senha</h1>
            <Input
              name="username"
              icon={FiUser}
              type="text"
              placeholder="Usuário"
            />
            <Input
              name="email"
              icon={FiMail}
              type="email"
              placeholder="E-mail"
            />
            <Button type="submit">
              <FiSend size={20} />
              Enviar
            </Button>
            <Link to="/">
              <FiArrowLeft size={20} />
              Voltar para a página de Login
            </Link>
          </Form>
        </Content>
      </ContentContainer>
    </Container>
  );
};

export default ForgotPassword;
