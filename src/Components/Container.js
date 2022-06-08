import {useEffect, useState} from "react";
import {useQuery, useQueryClient} from "react-query";
import {Card} from 'react-bootstrap';
import './styles.css'
import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';


const maxPostPage = 10;

async function fetchPosts(pageNum) {
    const response = await fetch(
        `https://api.github.com/repos/rails/rails/issues?&per_page=${maxPostPage}&page=${pageNum}`
    );
    return response.json();
}

const ContainerView = (issue) => {
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
            <div className="input-group mb-3" style={{marginTop: 25, width: '65%', paddingLeft: 143}}>
                <button className="btn btn-outline-secondary dropdown-toggle" style={{fontWeight: 500}} type="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">Filters
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><a className="dropdown-item" href="#">Separated link</a></li>
                </ul>
                <input type="text" className="form-control" placeholder='is:issue is:open '
                       aria-label="Text input with dropdown button"/>
            </div>

            {data.map((issue) => (
                <Card
                    key={issue.number}
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
                    <Link className="issueDetails" to={`/issues/${issue.number}`}>
                        <Card.Title>
                            Bug: {issue.title}
                        </Card.Title>
                        #{issue.number} Opened {issue.created_at} by {issue.user.login}
                    </Link>
                </Card>
            ))}
            <div className="pages">
                <Button
                    disabled={currentPage <= 1}
                    onClick={() => {
                        setCurrentPage((previousValue) => previousValue - 1);
                    }}
                >
                    Previous page
                </Button>
                <span style={{padding:4}}>Page {currentPage}</span>
                <Button
                    disabled={currentPage >= maxPostPage}
                    onClick={() => {
                        setCurrentPage((previousValue) => previousValue + 1);
                    }}
                >
                    Next page
                </Button>
            </div>
            {/*{selectedPost && <IssueDetail reset={()=>{setSelectedPost(null)}} post={selectedPost}/>}*/}
          </>
    );
}
export default ContainerView