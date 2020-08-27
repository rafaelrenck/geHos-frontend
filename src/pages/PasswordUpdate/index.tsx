import React, { useCallback, useRef, useState } from 'react';
import { FiCheck, FiLock, FiMail, FiSlash, FiHelpCircle } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import SplashPage from '../../components/SplashPage';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, Content, EditedLine } from '../SignIn/styles';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';
import Tooltip from '../../components/Tooltip';
import { useAuth } from '../../hooks/auth';

interface PasswordUpdateFormData {
  password: string;
  password_confirmation: string;
  email?: string;
}

const PasswordUpdate: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { token, updateUser } = useAuth();

  const { addToast } = useToast();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: PasswordUpdateFormData) => {
      try {
        setLoading(true);

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          password: Yup.string().required('Campo obrigatório'),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref('password')],
            'Confirmação incorreta',
          ),
          email: Yup.string().email('Informe um e-mail válido'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const response = await api.post(
          '/password/update',
          {
            password: data.password,
            email: data.email,
          },
          {
            headers: { authorization: `Bearer ${token}` },
          },
        );

        addToast({
          type: 'success',
          title: 'Senha atualizada com sucesso',
        });

        updateUser(response.data);

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
          title: 'Erro na atualização senha',
        });

        setLoading(false);
      }
    },
    [addToast, history, token, updateUser],
  );

  const handleIgnore = useCallback(async () => {
    try {
      const response = await api.post(
        '/password/ignore',
        {},
        {
          headers: { authorization: `Bearer ${token}` },
        },
      );

      updateUser(response.data);

      history.push('/dashboard');
    } catch (err) {
      addToast({
        type: 'error',
        title: 'Erro ao tentar ignorar atualização da senha',
      });
    }
  }, [addToast, token, updateUser, history]);

  return (
    <SplashPage>
      <Container>
        <Content>
          <img src={logoImg} alt="geHos" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Atualização da senha</h1>
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />
            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação da senha"
            />
            <Input
              name="email"
              icon={FiMail}
              type="text"
              placeholder="E-mail"
            />
            <Button loading={loading} type="submit" disabled={loading}>
              <FiCheck size={20} />
              Confirmar
            </Button>
            <EditedLine>
              <button type="button" onClick={handleIgnore}>
                <FiSlash size={20} />
                Ignorar a atualização da senha
              </button>
              <Tooltip
                title="Atualize a sua senha"
                message="Você informou uma senha temporária. Por favor, preencha o formulário com as informações solicitadas para registrar uma nova senha pessoal. Informe também um e-mail para recuperar a sua senha no futuro, em caso de esquecimento. Se você deseja manter a senha atual, escolha a opção Ignorar."
              >
                <FiHelpCircle size={20} />
              </Tooltip>
            </EditedLine>
          </Form>
        </Content>
      </Container>
    </SplashPage>
  );
};

export default PasswordUpdate;
