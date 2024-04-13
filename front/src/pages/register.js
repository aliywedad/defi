import React from 'react';

function Register() {
    return (
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    <div className="card" style={{ maxWidth: "500px", margin: "auto" }}>
                        <div className="card-body">
                            <div className="app-brand justify-content-center">

                            </div>

                            <form id="formAuthentication" className="mb-3" action="index.html">

                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email"
                                        placeholder="Entrez votre email" />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <label className="form-label" htmlFor="password">Mot de passe</label>
                                    <div className="input-group input-group-merge">
                                        <input
                                            type="password"
                                            id="password"
                                            className="form-control"
                                            name="password"
                                            placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                                            aria-describedby="password" />
                                        <span className="input-group-text cursor-pointer"><i className="bx bx-hide"></i></span>
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <div className="form-check">
                                        <label className="form-check-label" htmlFor="terms-conditions">
                                        </label>
                                    </div>
                                </div>

                                <button className="btn btn-primary d-grid w-100">S'inscrire</button>
                            </form>

                            <p className="text-center">
                                <span>Vous avez déjà un compte ?</span>
                                <a href="auth-login-basic.html">
                                    <span>Connectez-vous plutôt</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
