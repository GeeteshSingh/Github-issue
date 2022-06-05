import { useQuery, useMutation } from "react-query";
import {Card} from "react-bootstrap";

async function fetchComments(postId) {
    const response = await fetch(
        `https://api.github.com/repos/rails/rails/issues/45246/comments=${postId}`
    );
    return response.json();
}

export function PostDetail({ post }) {
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
                    {comment.login}: {comment.labels.url}
                </Card>
            ))}
        </>
    );
}
