import React, { useState } from 'react';
import { Container, Row, Col, Button, Navbar, Nav, Accordion } from 'react-bootstrap';

function SidebarExample() {
const [x,setx]=useState(true)

  return (
    <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">

        <aside  className={`${x?' layout-menu ' : ''} menu-vertical menu bg-menu-theme`}>
        {/* <aside  className={`layout-menu  menu-vertical menu bg-menu-theme`}> */}
                <div className="app-brand demo" >
                    <a href="index.html" className="app-brand-link">
                        
                        <span className="app-brand-text demo menu-text fw-bold ms-2">S3C</span>
                    </a>

                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
                        <i className="bx bx-chevron-left bx-sm align-middle" ></i>
                    </a>
                </div>

                <div className="menu-inner-shadow"></div>

                <ul className="menu-inner py-1">

                    <li className="menu-item">
                      <a href="{% url 'home' %}" className="menu-link">
                        <i className="menu-icon tf-icons bx bx-home-circle"></i>
                        <div data-i18n="Basic">home</div>
                      </a>
                  </li>
                    <li className="menu-header small text-uppercase"><span className="menu-header-text">Gestion</span></li>
                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection"></i>
                            <div data-i18n="Basic">Etudiants</div>
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" className="menu-link">
                            <i className="menu-icon tf-icons bx bx-collection"></i>
                            <div data-i18n="Basic">Enseignants</div>
                        </a>
                    </li>

                </ul>
            </aside>

            <div className="layout-page">

                <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
                    <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                        <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                            <i className="bx bx-menu bx-sm" onClick={()=>{setx(!x)}}></i>
                        </a>
                    </div>

                    <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                        <div className="navbar-nav align-items-center">
                            <div className="nav-item d-flex align-items-center">
                                <i className="bx bx-search fs-4 lh-0"></i>
                                <input type="text" className="form-control border-0 shadow-none ps-1 ps-sm-2" placeholder="Search..." aria-label="Search..." />
                            </div>
                        </div>

                        <ul className="navbar-nav flex-row align-items-center ms-auto">
                            <li className="nav-item navbar-dropdown dropdown-user dropdown">

                                <ul className="dropdown-menu dropdown-menu-end">
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <div className="d-flex">
                                                <div className="flex-shrink-0 me-3">
                                                    <div className="avatar avatar-online">
                                                        <img src="{% static 'assets/img/avatars/1.png' %}" alt className="w-px-40 h-auto rounded-circle" />
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1">
                                                    <span className="fw-medium d-block">John Doe</span>
                                                    <small className="text-muted">Admin</small>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="bx bx-user me-2"></i>
                                            <span className="align-middle">My Profile</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#">
                                            <i className="bx bx-cog me-2"></i>
                                            <span className="align-middle">Settings</span>
                                        </a>
                                    </li>
                                    <li>
                                        <div className="dropdown-divider"></div>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="javascript:void(0);">
                                            <i className="bx bx-power-off me-2"></i>
                                            <span className="align-middle">Log Out</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div class={`content-wrapper  sm: ${x?'  ' : 'd-none'}`}>

    <div class="container-xxl flex-grow-1 container-p-y">
      <h4 class="py-3 mb-4"><span class="text-muted fw-light">Etudiants</span></h4>


              <div class="card">
                <h5 class="card-header"> etudiants</h5>
                <div class="table-responsive text-nowrap">
                  <table class="table table-hover">
                    <thead>
                      <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>email</th>
                        <th>spécialité</th>
                        <th>niveau</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody class="table-border-bottom-0">
                       
                    </tbody>
                  </table>
                </div>
              </div>

              </div>
              </div> 



            </div>
        </div>

        {/* <div className="layout-overlay layout-menu-toggle"> */}


        {/* </div> */}
    </div>
  );
}

export default SidebarExample;
