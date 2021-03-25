import React, { useCallback, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationErrors from '../utils/getValidationErrors';

import { Container, Content, Logo } from '@/styles/pages/Home/styles';
import Input from '../components/Input';
import InputMask from '../components/InputMask';

import { FiAlertCircle, FiAlignLeft, FiMail, FiPhone } from 'react-icons/fi';

import api from '../services/api';

interface FormProps {
  nome_completo: string;
  email: string;
  whatsapp: string;
  opiniao: string;
}

function Home() {
  const formRef = useRef<FormHandles>(null);
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleBlur = useCallback(async (data) => {
    const response = await api.get(`/cuidadores?email=${data}`);

    if(response.data == "") {
      return '';
    }else{
      alert(JSON.stringify(response.data.error));
      window.location.reload();
    }

  }, []);

  const handleSubmit = useCallback(async (data: FormProps) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome_completo: Yup.string().required('Nome obrigatório'),
        email: Yup.string().email('Digite um e-mail válido').required('E-mail obrigatório'),
        whatsapp: Yup.string().required('WhatsApp Obrigatório'),
        opiniao: Yup.string().required('Opinião obrigatória')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post('/cuidadores', data);

      if(response) {

        setLoading(true);

        setTimeout(() => {
          ;window.location.href = "https://ircuidadores.com.br/infomessage/";
          alert('Cadastro realizado com sucesso.');
        }, 1500);

      }

    } catch(err) {
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }



  }, []);

  return (
    <Container>
      <Logo>
        <p>Imposto de Renda(IR)</p>
        <h1>Valorizando os Cuidadores</h1>
      </Logo>

      <Content>
        <section>
          <img src="./icon-cuidador.svg" />

          <h2>
            <FiAlertCircle size={30} />
            Informativo
          </h2>

          <p>
            Em respeito à <b><a href="http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank">LGPD nº 13.709</a></b>(Lei Geral de Proteção de Dados Pessoais), <b>não compartilharemos seus dados</b>.
            Seu nome será apenas incluído num abaixo-assinado de apoio ao <b>PL 535/2021</b>
          </p>

          <span>Acompanhe o <b>Deputado Otavio Leite</b> nas redes sociais e mantenha contato.</span>

          <article>
            <ul>
              <li><a target="_blank" href="https://www.facebook.com/OtavioLeite" className="icons icons-facebook" title="Facbook">Facebook</a></li>
              <li><a target="_blank" href="https://www.instagram.com/otavioleite/" className="icons icons-instagram" title="Instagram">Instagram</a></li>
              <li><a target="_blank" href="https://t.me/s/depotavioleite/" className="icons icons-telegram" title="Telegram">Telegram</a></li>
              <li><a target="_blank" href="https://twitter.com/otavioleite" className="icons icons-twitter" title="Twitter">Twitter</a></li>
            </ul>
          </article>

          <div className="container-shared-socials">
            Compartilhe também no
            <div className="btns-shared-socials">
              <a href="https://www.facebook.com/sharer/sharer.php?u=https://ircuidadores.com.br">Facebook</a>
              <a href="https://api.whatsapp.com/send?text=https://ircuidadores.com.br">WhatsApp</a>
            </div>
          </div>


        </section>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <strong>Olá! Saúde!<br /></strong>
          <p>
            Já está tramitando na Câmara dos Deputados o <a href="https://www.camara.leg.br/proposicoesWeb/prop_mostrarintegra?codteor=1965676" target="_blank"><b>PL 535/2021</b></a>,
            que visa garantir a <b>Dedução do Imposto de Renda </b>
            para as famílias que contratam <b>Cuidador de Idoso</b> e/ou <b>Cuidador de Pessoas com Deficiência</b>.
          </p>
          <p><b>Seu apoio</b> ao Projeto de Lei é <b>muito importante</b> para a aprovação no Congresso Nacional.</p>
          <p>Você é a favor?</p>
          <Input
            name="opiniao"
            label="Responda: SIM ou NÃO"
            placeholder="Ex: SIM"
            maxLength={3}
            inputMode="text"
            icon={FiAlignLeft}
          />

          <Input
            name="nome_completo"
            label="Nome Completo"
            placeholder="Ex: João da Silva"
            inputMode="text"
            icon={FiAlignLeft}
          />

          <Input
            name="email"
            label="E-mail"
            placeholder="Ex: joaodasilva@gmail.com"
            onBlur={(e) => handleBlur(e.target.value)}
            inputMode="email"
            icon={FiMail}
          />

          <InputMask
            name="whatsapp"
            label="WhatsApp"
            mask="(99) 99999-9999"
            placeholder="(21) 99999-9999"
            inputMode="numeric"
            icon={FiPhone}
          />

          { loading ? (
            <button type="submit">Enviando...</button>
          ) : (
            <button type="submit">Enviar Opinião</button>
          )}
          <span>*Autorizo a inclusão do meu nome no abaixo-assinado de apoio ao PL 535/2021</span>
        </Form>
      </Content>
    </Container>
  )
}

export default Home;
