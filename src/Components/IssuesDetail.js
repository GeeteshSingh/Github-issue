import {useQuery} from "react-query";
import {Badge} from "react-bootstrap";

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
            {data.map((comment) => (
                <span key={comment.number}>
                    {comment.url}: {comment.labels.url} <hr />
                    {comment.labels.name}
                    <Badge style={{color:`#{comment.labels.color}`}} />
                </span>
            ))}
        </>
    );
}
