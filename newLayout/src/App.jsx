import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './App.css'
import { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAws, faBootstrap, faCpanel, faCss3Alt, faDev, faDocker, faFigma, faGit, faGitAlt, faGithub, faGithubAlt, faHtml5, faJs, faLaravel, faPhp, faPython, faReact, faSass, faUbuntu, faWordpress } from '@fortawesome/free-brands-svg-icons'


function App() {

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
        <div className="d-flex justify-content-end text-secondary my-3 idiomas">
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
        <div className="row my-5 vitrine">
          <div className="col-md-12">
            <div className="card mb-3 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="card-img card-img-1"></div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title display-6 text-secondary">Rocket</h5>
                    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <p className="card-text">
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faLaravel} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faReact} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faPhp} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faJs} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faGithub} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faWordpress} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faAws} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faDocker} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faHtml5} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faCss3Alt} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faSass} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faBootstrap} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faUbuntu} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faGitAlt} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faFigma} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faCpanel} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faDev} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faPython} /></span>
                    </p>
                    <button type="button" class="btn btn-outline-secondary">Espiar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="card-img card-img-2"></div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title display-6 text-secondary">Armchair</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faLaravel} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faReact} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faPhp} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faJs} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faGithub} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faWordpress} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faAws} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faDocker} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faHtml5} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faCss3Alt} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faSass} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faBootstrap} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faUbuntu} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faGitAlt} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faFigma} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faCpanel} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faDev} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faPython} /></span>
                    </p>
                    <button type="button" class="btn btn-outline-secondary">Espiar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card mb-3 shadow">
              <div className="row g-0">
                <div className="col-md-4">
                  <div className="card-img card-img-3"></div>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title display-6 text-secondary">Scooter</h5>
                    <p className="card-text">It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    <p className="card-text">
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faLaravel} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faReact} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faPhp} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faJs} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faGithub} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faWordpress} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faAws} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faDocker} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faHtml5} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faCss3Alt} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faSass} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faBootstrap} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faUbuntu} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faGitAlt} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faFigma} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faCpanel} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faDev} /></span>
                      <span className="text-Light fs-4 mx-1"><FontAwesomeIcon icon={faPython} /></span>
                    </p>
                    <button type="button" class="btn btn-outline-secondary">Espiar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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

export default App
