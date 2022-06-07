import {useQuery} from "react-query";
import {Badge} from "react-bootstrap";
import './styles.css'

async function fetchComments(number) {
    const response = await fetch(
        `https://api.github.com/repos/rails/rails/issues/${number}/comments`
        // `https://api.github.com/repos/{owner}/{repo}/issues/${number}/comments/`
    );
    return response.json();
}

export function IssueDetail({post}) {
    const {data, isLoading, isError, error} = useQuery(
        ["comments", post.number],
        () => fetchComments(post.number)
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
                <a href='/'>
                    {data.map((issue) => (
                        <span key={issue.id}>
                    {issue.events_url}: {issue.user.login}
                            <hr/>
                            {issue.labels_url}
                            {/*<Badge style={{color:`#{comment.labels.color}`}} />*/}
                </span>
                    ))}
                </a>

            </div>

        </>
    );
}
