import {useQuery} from "react-query";
import {Badge} from "react-bootstrap";
import './styles.css'
import { useParams } from 'react-router-dom';

async function fetchComments(number) {
    const response = await fetch(
        `https://api.github.com/repos/rails/rails/issues/${number}/comments`
    );
    return response.json();
}

export function IssueDetail() {
    let { issue } = useParams();
    console.log(issue)
    const {data, isLoading, isError, error} = useQuery(
        ["comments", issue],
        () => fetchComments(issue)
    );
    if (isLoading) {
        return <h3>Loading</h3>;
    }
    if (isError) {
        return (
            <>
                <h3>Error</h3>
                <p>{error.toString()}</p>
            </>
        );
    }

    return (
        <>
            <div className='CommentSection'>
                {data && data.map((issue) => (
                    <span key={issue.id}>
                        <img src={issue.user.avatar_url} className="img-thumbnail"
                             style={{borderRadius: '55%', height: 60}} alt="avatar"/>
                     <p style={{fontFamily: 'serif', fontSize: 20}}>{issue.user.login}</p>
                        <br/>
                        <a href={issue.user.repos_url} target='_blank'>Repository</a>
                        <br/>
                </span>
                ))}
            </div>

        </>
    );
}
