//
export default function Portfolio() {
    return (
        <>
            <h1 className="text-secondary display-5 mt-5">Portfólio</h1>
            <div className="row g-2 mt-3 mb-5 portfolio">

                <div className="col-6 col-md-4">
                    <div className="card mb-3 shadow">
                        <div className="row g-0">
                            <div className="card-body">
                                <p className="card-text">
                                    <img src="./images/img.svg" className="img-fluid" alt="Image" />
                                </p>
                                <span class="badge p-2 me-2 mb-2 shadow-sm">Design UI/UX</span>
                                <span class="badge p-2 me-2 mb-2 shadow-sm">Full-stack</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4">
                    <div className="card mb-3 shadow">
                        <div className="row g-0">
                            <div className="card-body">
                                <p className="card-text">
                                    <img src="./images/img.svg" className="img-fluid" alt="Image" />
                                </p>
                                <span class="badge p-2 me-2 mb-2 shadow-sm">Front-end</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4">
                    <div className="card mb-3 shadow">
                        <div className="row g-0">
                            <div className="card-body">
                                <p className="card-text">
                                    <img src="./images/img.svg" className="img-fluid" alt="Image" />
                                </p>
                                <span class="badge p-2 me-2 mb-2 shadow-sm">Design UI/UX</span>
                                <span class="badge p-2 me-2 mb-2 shadow-sm">Full-stack</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4">
                    <div className="card mb-3 shadow">
                        <div className="row g-0">
                            <div className="card-body">
                                <p className="card-text">
                                    <img src="./images/img.svg" className="img-fluid" alt="Image" />
                                </p>
                                <span class="badge p-2 me-2 mb-2 shadow-sm">SysAdmin</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-4">
                    <div className="card mb-3 shadow">
                        <div className="row g-0">
                            <div className="card-body">
                                <p className="card-text">
                                    <img src="./images/img.svg" className="img-fluid" alt="Image" />
                                </p>
                                <span class="badge p-2 me-2 mb-2 shadow-sm">Back-end</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}