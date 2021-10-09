import AddPostForm from "../components/AddPostForm";
import Head from 'next/head';

export default function AddPost() {
    return (
        <>
            <Head>
                <title>Add a new post</title>
                <meta name="description" content="Add a new post" />
            </Head>
            <AddPostForm/>
        </>
    );
}