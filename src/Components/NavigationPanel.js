import React from 'react';

const NavigationPanel = () => {
    return (
        <div className="App">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid justify-content-start">
                    <a className="navbar-brand" href="src/Components/NavigationPanel#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                             className="bi bi-github" viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                    </a>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search or jump to..."
                               aria-label="Search"/>
                        <a className='navbar-search' href='src/Components/NavigationPanel#'
                           style={{marginLeft: -40, marginTop: 4.7}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="#24292f"
                                 className="bi bi-slash-square" viewBox="0 0 16 16">
                                <path
                                    d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                                <path
                                    d="M11.354 4.646a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                        </a>
                    </form>
                    <a className="nav-link active" aria-current="page" href="src/Components/NavigationPanel#">Pull
                        Requests</a>
                    <a className="nav-link" href="src/Components/NavigationPanel#">Issues</a>
                    <a className="nav-link" href="src/Components/NavigationPanel#">Marketplace</a>
                    <a className="nav-link" href="src/Components/NavigationPanel#">Explore</a>
                <div className='notifications' style={{flexDirection:'row-reverse'}}>
                    <a className='notifications' href='#'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff"
                             className="bi bi-bell" viewBox="0 0 16 16">
                            <path
                                d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                        </svg>
                    </a>
                </div>
                </div>

            </nav>

        </div>
    )
}
export default NavigationPanel;
