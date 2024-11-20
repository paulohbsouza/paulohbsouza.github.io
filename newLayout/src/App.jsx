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
            <p className="text-white"><i class="bi bi-pc-display text-secondary"></i>Desenvolvedor Web</p>
            <p className="text-white"><i class="bi bi-mortarboard text-secondary"></i>Pós Full Stack</p>
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
              Olá,
            </p>
            <p>
              Sou um profissional apaixonado por tecnologia, com mais de 14 anos de experiência na área de Tecnologia da Informação. Minha jornada começou em 2009, contribuindo para projetos de TI em diversas empresas como Analista de TI, onde desenvolvi uma sólida expertise em infraestrutura de redes, administração e virtualização de servidores.
            </p>
            <p>
              Em 2021, decidi fazer uma transição para a área de desenvolvimento, consolidando minha posição como Desenvolvedor de Sistemas Web Full-Stack. Nos últimos anos, explorei a fundo tecnologias modernas como Laravel PHP, React JS e ferramentas e conceitos de design UI/UX. Minha abordagem é centrada no aprendizado contínuo, oferecendo soluções inovadoras.
            </p>
            <p>
              Além de habilidades técnicas, trago uma visão holística do cenário tecnológico, conectando infraestrutura robusta a soluções ágeis. Estou comprometido em aplicar meu conhecimento em desenvolvimento web para elevar a qualidade e eficiência das soluções para impulsionar o sucesso do seu projeto.
            </p>
            <p>
              Se você busca um profissional dedicado, com ampla experiência em TI e desenvolvimento web, estou à disposição para colaborar. Vamos criar soluções que impulsionem seu negócio. Entre em contato para começarmos a concretizar suas ideias!
            </p>
            <br/>
            <p className='text-secondary'>@paulohbsouza</p>
          </div>
        </div>

        <hr />

        {/** Redes Sociais */}
        <div className="d-flex justify-content-center my-5 btnSocial">
        <a className="mx-4 fs-1 text-white" href="https://www.instagram.com/paulohbsouza.dev" target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
          <a className="mx-4 fs-1 text-white" href="https://www.youtube.com/@paulohbsouza" target="_blank">
            <i className="bi bi-youtube"></i>
          </a>
          <a className="mx-4 fs-1 text-white" href="https://www.linkedin.com/in/paulohbsouza/" target="_blank">
            <i className="bi bi-linkedin"></i>
          </a>
          <a className="mx-4 fs-1 text-white" href="https://github.com/paulohbsouza" target="_blank">
            <i className="bi bi-github"></i>
          </a>
        </div>

        {/** Links */}
        <Links/>

        <hr/>

        {/** Vitrine */}
        <Vitrine/>

        <hr/>

        {/** Portfólio */}
        <Portfolio/>

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
