import React, { useCallback, useRef, useState } from 'react';
import { FiSave, FiLock, FiMail, FiInfo } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import {
  Container,
  ContentContainer,
  Background,
  PasswordUpdateForm,
  Content,
} from './styles';
import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface PasswordUpdateFormData {
  password: string;
  password_confirmation: string;
  email: string;
}

const PasswordUpdate: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);

  const { user } = useAuth();
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

        await api.post('/password/update', {
          password: data.password,
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
    <Container>
      <ContentContainer>
        <Background />
        <PasswordUpdateForm>
          <Content>
            <img src={logoImg} alt="geHos" />
            <Form ref={formRef} onSubmit={handleSubmit}>
              <h1>Atualização de senha</h1>
              <p>
                <FiInfo size={20} />
                <span>
                  Olá,
                  {user.name.split(' ')[0]}
                </span>
                Você inseriu uma senha de acesso temporária. Por gentileza,
                forneça uma nova senha e, se desejar, um e-mail para recuperação
                da senha em caso de esquecimento futuro.
              </p>
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
              <Button loading={loading} type="submit">
                <FiSave size={20} />
                Atualizar
              </Button>
            </Form>
          </Content>
        </PasswordUpdateForm>
      </ContentContainer>
    </Container>
  );
};

export default PasswordUpdate;
