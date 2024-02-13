import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faAws,
    faBootstrap,
    faCpanel, faCss3,
    faDebian,
    faDocker,
    faFigma,
    faFreeCodeCamp,
    faGitAlt,
    faHtml5,
    faJs,
    faLaravel,
    faLinux,
    faNode,
    faPhp,
    faReact,
    faSass,
    faUbuntu, faVuejs,
    faWordpress
} from '@fortawesome/free-brands-svg-icons'
import { } from '@fortawesome/free-regular-svg-icons'
import {faNetworkWired, faPalette, faUsers, faWind} from '@fortawesome/free-solid-svg-icons'
import Range from "./Range.jsx";

export default function Vitrine() {
    return (
        <>
            <div className="my-5 vitrine">
                <div className="card mb-4 shadow">
                    <div className="card-body">
                        <h5 className="card-title display-5 text-secondary">Back-end</h5>
                        <div className="row text-end mb-1 text-secondary">
                            <small>
                                <span className="levels">Básico</span>
                                <span className="levels">Médio</span>
                                <span className="levels-z">Avançado</span>
                            </small>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Algoritmo</div>
                                <Range score={5}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>PHP POO</div>
                                <Range score={7}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>TypeScript</div>
                                <Range score={3}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>NodeJS</div>
                                <Range score={1}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Laravel</div>
                                <Range score={7}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>CodeIgniter</div>
                                <Range score={4}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>MySQL</div>
                                <Range score={7}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Version. GIT</div>
                                <Range score={6}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>REST API</div>
                                <Range score={4}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>SCRUM</div>
                                <Range score={3}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>KANBAN</div>
                                <Range score={4}/>
                            </div>
                        </div>
                        <p className="card-text text-secondary mt-4">
                            <span className="fs-4 mx-1"><i className="bi bi-boxes"></i></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faPhp}/></span>
                            <span className="fs-4 mx-1"><i className="bi bi-filetype-tsx"></i></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faNode}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faLaravel}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faFreeCodeCamp}/></span>
                            <span className="fs-4 mx-1"><i className="bi bi-filetype-sql"></i></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faGitAlt}/></span>
                            <span className="fs-4 mx-1"><i className="bi bi-diagram-3"></i></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faUsers}/></span>
                            <span className="fs-4 mx-1"><i className="bi bi-kanban"></i></span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-5 vitrine">
                <div className="card mb-4 shadow">
                    <div className="card-body">
                        <h5 className="card-title display-5 text-secondary">Front-end</h5>
                        <div className="row text-end mb-1 text-secondary">
                            <small>
                                <span className="levels">Básico</span>
                                <span className="levels">Médio</span>
                                <span className="levels-z">Avançado</span>
                            </small>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Bootstrap</div>
                                <Range score={8}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Tailwind</div>
                                <Range score={1}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>SASS</div>
                                <Range score={7}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>JavaScript</div>
                                <Range score={6}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>jQuery</div>
                                <Range score={4}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>React</div>
                                <Range score={5}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Vue</div>
                                <Range score={1}/>
                            </div>
                        </div>
                        <p className="card-text text-secondary mt-4">
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faBootstrap}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faWind}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faSass}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faJs}/></span>
                            <span className="fs-4 mx-1"><i className="bi bi-filetype-js"></i></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faReact}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faVuejs}/></span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-5 vitrine">
                <div className="card mb-4 shadow">
                    <div className="card-body">
                        <h5 className="card-title display-5 text-secondary">Web Design</h5>
                        <div className="row text-end mb-1 text-secondary">
                            <small>
                                <span className="levels">Básico</span>
                                <span className="levels">Médio</span>
                                <span className="levels-z">Avançado</span>
                            </small>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>WordPress</div>
                                <Range score={4}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Figma Layout</div>
                                <Range score={7}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>User Int.</div>
                                <Range score={5}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>User Exp.</div>
                                <Range score={3}/>
                            </div>
                        </div>
                        <p className="card-text text-secondary mt-4">
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faWordpress}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faFigma}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faPalette}/></span>
                            <span className="fs-4 mx-1"><i className="bi bi-layout-wtf"></i></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faHtml5}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faCss3}/></span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="my-5 vitrine">
                <div className="card mb-4 shadow">
                    <div className="card-body">
                        <h5 className="card-title display-5 text-secondary">SysAdmin</h5>
                        <div className="row text-end mb-1 text-secondary">
                            <small>
                                <span className="levels">Básico</span>
                                <span className="levels">Médio</span>
                                <span className="levels-z">Avançado</span>
                            </small>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Redes</div>
                                <Range score={8}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Win. Server</div>
                                <Range score={7}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Linux Server</div>
                                <Range score={7}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>pfSense</div>
                                <Range score={8}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>VMWare</div>
                                <Range score={6}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Xen Server</div>
                                <Range score={7}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>ITIL v3</div>
                                <Range score={3}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>IP PABX</div>
                                <Range score={3}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Apache Server</div>
                                <Range score={6}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Host / cPanel</div>
                                <Range score={6}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>AWS</div>
                                <Range score={0}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Apache Kafka</div>
                                <Range score={0}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Containers</div>
                                <Range score={2}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Kubernetes</div>
                                <Range score={0}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Terraform</div>
                                <Range score={0}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Unsible</div>
                                <Range score={0}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>Elastic Stack</div>
                                <Range score={0}/>
                            </div>
                        </div>
                        <div className="mb-1">
                            <div className="d-flex justify-content-between align-items-center name-bolls">
                                <div>SRE</div>
                                <Range score={0}/>
                            </div>
                        </div>
                        <p className="card-text text-secondary mt-4">
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faNetworkWired}/></span>
                            <span className="fs-4 mx-1"><i className="bi bi-windows"></i></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faLinux}/></span>
                            <span className="fs-4 mx-1"><i className="bi bi-bricks"></i></span>
                            <span className="fs-4 mx-1"><i className="bi bi-hdd-network"></i></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faAws}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faDocker}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faDebian}/></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faUbuntu}/></span>
                            <span className="fs-4 mx-1"><i className="bi bi-cloud"></i></span>
                            <span className="fs-4 mx-1"><i className="bi bi-database-fill-gear"></i></span>
                            <span className="fs-4 mx-1"><FontAwesomeIcon icon={faCpanel}/></span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

