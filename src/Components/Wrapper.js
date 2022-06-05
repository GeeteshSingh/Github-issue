import React from 'react';
import {Badge} from 'react-bootstrap'
const Boiler = () => {
    return (
        <div className='wrapper'>

            <div className='wrap' style={{paddingTop: 12, flexDirection:'row', alignItems:'center', marginLeft:22}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000"
                     className="bi bi-journal-bookmark" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M6 8V1h1v6.117L8.743 6.07a.5.5 0 0 1 .514 0L11 7.117V1h1v7a.5.5 0 0 1-.757.429L9 7.083 6.757 8.43A.5.5 0 0 1 6 8z"/>
                    <path
                        d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                    <path
                        d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                </svg>
                <a style={{fontSize: 20, textDecoration: 'none'}} href='#'> facebook </a> <span style={{color:'#000'}}>/</span> <a href='#' style={{
                fontSize: 20,
                fontWeight: 'bold',
                textDecoration: 'none'
            }}>react</a>{' '}
                <Badge pill bg="dark" text="#323232" style={{fontSize:10, padding:2,justifyContent:'center', backgroundColor:'#fff'}}>
                    Public
                </Badge>
            </div>
            <div style={{marginTop:20, fontWeight:'500'}}>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-wrapper" aria-current="page" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-code" viewBox="0 0 16 16">
                                <path
                                    d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"/>
                            </svg>{ "  " }Code</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-wrapper" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-record-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            </svg>{" "}Issues</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-wrapper" href="#">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true"
                                 className="octicon octicon-git-pull-request UnderlineNav-octicon d-none d-sm-inline">
                                <path fill-rule="evenodd"
                                      d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
                            </svg> {" "}Pull Requests</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-wrapper" aria-current="page" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-play-circle" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                <path
                                    d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
                            </svg>{" "}Actions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-wrapper" href="#">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true"
                                 className="octicon octicon-table UnderlineNav-octicon d-none d-sm-inline">
                                <path fill-rule="evenodd"
                                      d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.216 0 16 .784 16 1.75v3.585a.746.746 0 010 .83v8.085A1.75 1.75 0 0114.25 16H6.309a.748.748 0 01-1.118 0H1.75A1.75 1.75 0 010 14.25V6.165a.746.746 0 010-.83V1.75zM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8H1.5zM5 5H1.5V1.75a.25.25 0 01.25-.25H5V5zm1.5 1.5v8h7.75a.25.25 0 00.25-.25V6.5h-8zm8-1.5h-8V1.5h7.75a.25.25 0 01.25.25V5z"></path>
                            </svg>{" "}Project</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-wrapper" href="#">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true"
                                 className="octicon octicon-book UnderlineNav-octicon d-none d-sm-inline">
                                <path fill-rule="evenodd"
                                      d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                            </svg>{" "}Wiki</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-wrapper" href="#">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true"
                                 className="octicon octicon-shield UnderlineNav-octicon d-none d-sm-inline">
                                <path fill-rule="evenodd"
                                      d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path>
                            </svg>{" "}Security</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-wrapper" href="#">
                            <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                                 data-view-component="true"
                                 className="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline">
                                <path fill-rule="evenodd"
                                      d="M1.5 1.75a.75.75 0 00-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 000-1.5H1.5V1.75zm14.28 2.53a.75.75 0 00-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 00-1.06 0L3.22 8.72a.75.75 0 001.06 1.06L7 7.06l2.47 2.47a.75.75 0 001.06 0l5.25-5.25z"></path>
                            </svg>{" "}Insights</a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Boiler