import React, { useCallback, useRef, useState } from 'react';
import { FiSend, FiUser, FiMail, FiArrowLeft } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import SplashPage from '../../components/SplashPage';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content } from '../SignIn/styles';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

interface PasswordResetFormData {
  username: string;
  email: string;
}

const PasswordReset: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: PasswordResetFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Informe o nome do usuário'),
          email: Yup.string()
            .required('Informe o e-mail cadastrado')
            .email('Informe um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/password/reset', {
          username: data.username,
          email: data.email,
        });

        addToast({
          type: 'success',
          title: 'Recuperação de senha concluída',
          description: 'Enviamos um e-mail com uma nova senha de acesso',
        });

        setLoading(false);
        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          setLoading(false);
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

        setLoading(false);
      }
    },
    [addToast, history],
  );

  return (
    <SplashPage>
      <Container>
        <Content>
          <img src={logoImg} alt="geHos" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Redefinição de senha</h1>
            <Input
              name="username"
              icon={FiUser}
              type="text"
              placeholder="Usuário"
            />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail cadastrado"
            />
            <Button loading={loading} type="submit" disabled={loading}>
              <FiSend size={20} />
              Enviar
            </Button>
            <Link to="/">
              <FiArrowLeft size={20} />
              Voltar para a página de Login
            </Link>
          </Form>
        </Content>
      </Container>
    </SplashPage>
  );
};

export default PasswordReset;
