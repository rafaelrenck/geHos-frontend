import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiUser, FiLock, FiHelpCircle } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import SplashPage from '../../components/SplashPage';
import Line from '../../components/Line';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content } from './styles';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import Tooltip from '../../components/Tooltip';

interface SignInFormData {
  username: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          username: Yup.string().required('Campo obrigatório'),
          password: Yup.string().required('Campo obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          username: data.username,
          password: data.password,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: `Verifique o nome de usuário e a senha e tente novamente`,
        });
      }
    },
    [signIn, addToast, history],
  );

  return (
    <SplashPage>
      <Container>
        <Content>
          <img src={logoImg} alt="geHos" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>
            <Input
              name="username"
              icon={FiUser}
              type="text"
              placeholder="Usuário"
            />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />
            <Button type="submit">
              <FiLogIn size={20} />
              Entrar
            </Button>
            <Line>
              <Link to="/password-reset">Esqueci minha senha</Link>
              <Tooltip
                title="Identifique-se"
                message="Preencha o formulário com seus dados para acessar o sistema. Se ainda não possui as credenciais, entre em contato com o Departamento de TI"
              >
                <FiHelpCircle size={20} />
              </Tooltip>
            </Line>
          </Form>
        </Content>
      </Container>
    </SplashPage>
  );
};

export default SignIn;
