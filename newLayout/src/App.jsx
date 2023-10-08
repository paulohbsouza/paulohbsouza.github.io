import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import { useState } from 'react'
import Vitrine from './components/Vitrine'

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

        {/** idiomas */}
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
          <div className={`${resumeClass ? 'resume-in' : 'resume-out'} resume border border-secondary text-white fst-italic fw-light `}>
            Sou um profissional de TI com formação em Análise e Desenvolvimento de Sistemas. Tenho mais de 11 anos de experiência na área de infraestrutura de redes, tanto cabeadas quanto não cabeadas, além de expertise em administração e virtualização de servidores Windows e Linux, implantação de sistemas de gestão e gestão de serviços de TI.
            Ao longo dos últimos dois anos, tenho me dedicado ao desenvolvimento web, atuando como programador full-stack e também com serviços em nuvem. Meu foco principal está nas tecnologias de desenvolvimento e design, incluindo Apache Server, SQL, ScriptCase, Laravel PHP, React JS, UI/UX Design, Bootstrap, SCSS, Git e GitHub.
            Estou sempre em busca de atualizações e novos desafios para aprimorar minhas habilidades e oferecer soluções inovadoras.
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
        <div className="d-flex flex-column text-center my-5 text-white">
          <a className="linkBtn text-white mb-5" href="https://www.figma.com/community/file/1138607317570997425" target="_blank">
            <div className="linkBtn-item p-3">
              <i class="bi bi-palette-fill"></i>Weekly Planner Template
              <div className="text-secondary"><small>@paulohbsouza</small></div>
            </div>
          </a>
          <a className="linkBtn text-white mb-5" href="./pdf/test-protegido.pdf" target="_blank">
            <div className="linkBtn-item p-3">
              <i class="bi bi-filetype-pdf"></i>Resumo Currícular
              <div className="text-secondary"><small>Paulo H B Souza</small></div>
            </div>
          </a>
          <a className="linkBtn text-white mb-5" href="mailto:paulohbsouza@gmail.com" target="_blank">
            <div className="linkBtn-item p-3">
              <i class="bi bi-envelope-at"></i>Contato / Orçamentos
              <div className="text-secondary"><small>paulohbsouza@gmail.com</small></div>
            </div>
          </a>
        </div>

        <hr />

        {/** vitrine */}
        <Vitrine />

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
