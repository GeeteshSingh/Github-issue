import {useEffect, useState} from "react";
import {useQuery, useQueryClient} from "react-query";
import {Card} from 'react-bootstrap';
import './styles.css'

const maxPostPage = 10;

async function fetchPosts(pageNum) {
    const response = await fetch(
        `https://api.github.com/repos/rails/rails/issues?&per_page=${maxPostPage}`
    );
    return response.json();
}

const ContainerView = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedPost, setSelectedPost] = useState(null);

    const queryClient = useQueryClient();
    useEffect(() => {
        if (currentPage < maxPostPage) {
            const nextPage = currentPage + 1;
            queryClient.prefetchQuery(["issues", nextPage], () =>
                fetchPosts(nextPage)
            );
        }
    }, [currentPage, queryClient]);

    const {data, isError, isLoading, error} = useQuery(
        ["issues", currentPage],
        () => fetchPosts(currentPage),
        {staleTime: 3000, keepPreviousData: true}
    );
    if (isLoading) return <h3>Loading...</h3>;
    if (isError)
        return (
            <>
                <h3>Something is wrong ... Error</h3>
                <p>{error.toString()}</p>
            </>
        );
    return (
        <>
            {data.map((issue) => (
                <Card
                    key={issue.id}
                    className="clearfix new-discussion-timeline js-check-all-container container-xl px-3 px-md-4 px-lg-5 mt-4"
                    onClick={() => setSelectedPost(issue)}
                >
                    <div className='status'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className='status'>
                            className="bi bi-record-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        </svg>
                    </div>


                    <Card.Title>
                        Bug: {issue.title}
                    </Card.Title>
                    #{issue.number} Opened {issue.created_at} by {issue.user.login}
                </Card>
            ))}
            <div className="pages">
                <button
                    disabled={currentPage <= 1}
                    onClick={() => {
                        setCurrentPage((previousValue) => previousValue - 1);
                    }}
                >
                    Previous page
                </button>
                <span>Page {currentPage}</span>
                <button
                    disabled={currentPage >= maxPostPage}
                    onClick={() => {
                        setCurrentPage((previousValue) => previousValue + 1);
                    }}
                >
                    Next page
                </button>

            </div>
            <footer className='blockquote-footer'>
                <div className='label'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-lightbulb" viewBox="0 0 16 16">
                        <path
                            d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/>
                    </svg>
                    ProTip! Exclude everything labeled bug with <a
                    href='https://github.com/facebook/react/issues?q=is%3Aissue+is%3Aopen+-label%3Abug'>-label:bug.</a>
                </div>

                <hr/>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-github" viewBox="0 0 16 16">
                    <path
                        d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>  <h6>© 2022 GitHub, Inc.</h6>

            </footer>
        </>
    );
}
export default ContainerView