import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import { useState } from 'react'
import Vitrine from './components/Vitrine'
import Links from './components/Links'
import Portfolio from './components/Portfolio'

export default function App() {
  //
  const [resumeClass, setResumeClass] = useState(false)

  //
  const handleResume = () => {
    setResumeClass(!resumeClass)
  }

  //
  let data = new Date();
  let ano = data.getFullYear();

  return (
    <>
      {/** Conteúdo */}
      <div className="container">

        {/** Idiomas */}
        <div className="d-flex justify-content-end text-secondary my-2 idiomas">
          <span className="mx-2"><img src="./images/icons8-brasil.png" alt="Brasil" title="Mudar idioma (pt-br)" /></span>
          <span className="mx-2"><img src="./images/icons8-eua.png" alt="EUA" title="Change language (en)" /></span>
        </div>

        {/** Logotipo */}
        <div className="d-flex justify-content-center logotipo">
          <img src="./images/logotipo.svg" alt="Logotipo" />
        </div>

        {/** Header */}
        <div className="d-flex justify-content-center my-5 part-1">
          <div className="avatar">
            <img className="rounded-start-pill border border-secondary shadow" src="./images/newImagePerfil.png" alt="Avatar PHBS" />
          </div>
          <div className="subtitles">
            <h1 className="text-secondary display-3 mb-3">Seja bem vindo!</h1>
            <p className="text-white"><i class="bi bi-code-slash text-secondary"></i>Programador Web Full Stack PHP | React</p>
            <p className="text-white"><i class="bi bi-brush text-secondary"></i>Web Designer UI | UX</p>
            <p className="text-white"><i class="bi bi-hdd-network text-secondary"></i>SysAdmin Windows | Linux</p>
            <p className="text-white"><i class="bi bi-music-note-beamed text-secondary"></i>Pianista em formação CEMVA</p>
          </div>
        </div>

        {/** Resumo */}
        <div className='d-flex justify-content-center flex-wrap'>
          <span className="text-white mb-3 fs-3" onClick={handleResume}><i class="bi bi-plus-circle"></i></span>
          <div
              className={`${resumeClass ? 'resume-in' : 'resume-out'} resume border border-secondary text-white fst-italic fw-light `}>
            <p>
              Sou um profissional apaixonado por tecnologia, formado em Análise e Desenvolvimento de Sistemas
              (Associate's Degree - AS). Ao longo da minha carreira de mais de 11 anos na área de Tecnologia da
              Informação,
              desenvolvi uma sólida expertise em infraestrutura de redes, abrangendo tanto redes cabeadas quanto sem
              fio.
              Minha jornada profissional inclui uma vasta experiência na administração e virtualização de servidores,
              com
              especialização em ambientes Windows e Linux. Além disso, destaco minha participação ativa na implantação
              de
              sistemas de gestão e na gestão de serviços de TI.
            </p>
            <p>
              Nos últimos três anos, mergulhei de cabeça no universo do desenvolvimento web. Atuando como programador
              full-stack, explorando profundamente tecnologias como Apache Server, MySQL, Laravel PHP, React JS e
              ferramentas de design UI/UX, como Figma, Bootstrap e SCSS. Durante esse período, também adquiri habilidades
              em práticas de versionamento utilizando Git e GitHub. A diversidade das minhas experiências me proporcionou
              uma visão abrangente, conectando a infraestrutura robusta com soluções de desenvolvimento ágeis e modernas.
            </p>
            <p>
              Minha abordagem centrada no aprendizado contínuo e na busca por desafios me capacita a oferecer soluções
              inovadoras aos projetos dos clientes. Além de trazer minha experiência consolidada em infraestrutura e
              redes,
              estou comprometido em aplicar meu conhecimento em desenvolvimento web para elevar a qualidade e a eficiência
              das soluções propostas. Minha habilidade em integrar as últimas tecnologias e meu comprometimento em
              manter-me atualizado me capacitam a agregar valor ao projeto, garantindo resultados eficazes e alinhados com
              as demandas do cenário tecnológico atual.
            </p>
            <p>
              Estou entusiasmado para enfrentar novos desafios e contribuir para o sucesso contínuo do seu projeto. Se você
              busca um profissional dedicado, com ampla experiência em TI e desenvolvimento web, estou à disposição para
              colaborar. Vamos criar soluções que impulsionem o seu negócio. Entre em contato para começarmos a
              concretizar suas ideias!
            </p>
          </div>
        </div>

        <hr />

        {/** Redes Sociais */}
        <div className="d-flex justify-content-center my-5 btnSocial">
          <a className="mx-4 fs-1 text-white" href="https://www.youtube.com/@eupaulohbsouza" target="_blank">
            <i class="bi bi-youtube"></i>
          </a>
          <a className="mx-4 fs-1 text-white" href="https://www.linkedin.com/in/paulohbsouza/" target="_blank">
            <i class="bi bi-linkedin"></i>
          </a>
          <a className="mx-4 fs-1 text-white" href="https://github.com/paulohbsouza" target="_blank">
            <i class="bi bi-github"></i>
          </a>
        </div>

        {/** Links */}
        <Links />

        <hr />

        {/** Vitrine */}
        <Vitrine />

        <hr />

        {/** Portfólio */}
        <Portfolio />

        <hr />

        {/** rodape */}
        <div className="text-secondary text-center my-5">
          <small>
            ©paulohbsouza <br />2009 - {ano}
          </small>
        </div>
      </div>
    </>
  )
}
