
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
                                <button type="button" class="btn btn-outline-secondary">Full-stack</button>
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
                                <button type="button" class="btn btn-outline-secondary">Front-end</button>
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
                                <button type="button" class="btn btn-outline-secondary">Design UI/UX</button>
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
                                <button type="button" class="btn btn-outline-secondary">SysAdmin</button>
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
                                <button type="button" class="btn btn-outline-secondary">Back-end</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}