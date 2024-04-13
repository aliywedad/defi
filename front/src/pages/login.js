import React from 'react';

function Login() {
    return (
        <div className="container-xxl">
            <div className="authentication-wrapper authentication-basic container-p-y">
                <div className="authentication-inner">
                    <div className="card" style={{ maxWidth: "500px", margin: "auto" }}>
                        <div className="card-body">
                         
                            <form id="formAuthentication" className="mb-3" action="index.html">
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="email"
                                        name="email-username"
                                        placeholder="Entrez votre email "
                                        autoFocus />
                                </div>
                                <div className="mb-3 form-password-toggle">
                                    <div className="d-flex justify-content-between">
                                        <label className="form-label" htmlFor="password">Mot de passe</label>
                                        <a href="auth-forgot-password-basic.html">
                                            <small>Mot de passe oublié ?</small>
                                        </a>
                                    </div>
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

                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-grid w-100" type="submit">Se connecter</button>
                                </div>
                            </form>

                            <p className="text-center">
                                <a href="auth-register-basic.html">
                                    <span>Créer un compte</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
