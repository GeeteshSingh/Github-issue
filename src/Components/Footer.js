import React from 'react'
import './styles.css'

const Footer = () => {
    return (
        <footer className='blockquote-footer'>
            <div className='label'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-lightbulb" viewBox="0 0 16 16">
                    <path
                        d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                </svg>
                ProTip! Exclude everything labeled bug with <a
                href='https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+-label%3Abug'
                style={{textDecoration: 'none'}}>-label:bug.</a>
            </div>

            <div className='modal-footer'>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                     className="bi bi-github" viewBox="0 0 16 16">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <h6 style={{fontSize: '15px'}}>© 2022 GitHub, Inc.</h6>
                <a style={{textDecoration: "none"}}
                   href='https://docs.github.com/en/site-policy/github-terms/github-terms-of-service'>Terms</a>
                <a style={{textDecoration: "none"}}
                   href='https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement'>Privacy</a>
                <a style={{textDecoration: "none"}} href='https://github.com/security'>Security</a>
                <a style={{textDecoration: "none"}} href='https://www.githubstatus.com/'>Status</a>
                <a style={{textDecoration: "none"}} href='https://docs.github.com/en'>Docs</a>
                <a style={{textDecoration: "none"}} href='https://support.github.com/?tags=dotcom-footer'>Contact
                    GitHub</a>
                <a style={{textDecoration: "none"}} href='https://github.com/pricing'>Pricing</a>
                <a style={{textDecoration: "none"}} href='https://docs.github.com/en'>API</a>
                <a style={{textDecoration: "none"}} href='https://services.github.com/'>Training</a>
                <a style={{textDecoration: "none"}} href='https://github.blog/'>Blog</a>
                <a style={{textDecoration: "none"}} href='https://github.com/about'>About</a>
            </div>


        </footer>
    )
}

export default Footer