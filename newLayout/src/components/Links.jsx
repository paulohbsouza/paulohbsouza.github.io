//
export default function Links() {
    return (
        <>
            <div className="d-flex flex-column text-center my-5 text-white">
                <a className="linkBtn text-white mb-5" href="https://reserva.ink/paulohbsouza" target="_blank">
                    <div className="linkBtn-item p-3">
                        <i class="bi bi-bag-heart"></i>Loja online DevWear
                        <div className="text-secondary"><small>reserva.ink/paulohbsouza</small></div>
                    </div>
                </a>
                <a className="linkBtn text-white mb-5" href="https://www.figma.com/community/file/1138607317570997425" target="_blank">
                    <div className="linkBtn-item p-3">
                        <i class="bi bi-calendar-week"></i>Weekly Planner Template
                        <div className="text-secondary"><small>@paulohbsouza</small></div>
                    </div>
                </a>
                <a className="linkBtn text-white mb-5" href="./pdf/curri-paulohbsouza_protected.pdf" target="_blank">
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
        </>
    )
}