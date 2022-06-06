import { useQuery } from "react-query";
import {Card} from "react-bootstrap";

async function fetchComments(number) {
    const response = await fetch(
        `https://api.github.com/repos/rails/rails/issues/${number}/comments`
    );
    return response.json();
}

export function IssueDetail({ post }) {
    const { data, isLoading, isError, error } = useQuery(
        ["comments", post.id],
        () => fetchComments(post.id)
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
                <Card key={comment.id}>
                    {comment.user.login}: {comment.labels.url}
                </Card>
            ))}
        </>
    );
}
