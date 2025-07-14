import { useDispatch, useSelector } from "react-redux";
import { createPostsAsync, updatePostsAsync, editPost } from "../features/posts/postsSlice";
import { FormEvent } from "react";
import { TNewPost, TPost } from "../app/types";
import store from "../app/store";

interface FormProps {
    existingPost: [curEditId: number | null, setCurEditId: (curEditId: number | null) => void],
    workWithTitle: [curTitle: string, setCurTitle: (title: string) => void],
    workWithBody: [curBody: string, setCurBody: (body: string) => void],
    forEdit: [isEdit: boolean, setEdit: (idEdit: boolean) => void],
}

function PostForm({ existingPost, workWithBody, workWithTitle, forEdit }: FormProps) {
    const dispatch = useDispatch<typeof store.dispatch>();
    const allPosts = useSelector((state: { posts: { posts: TPost[] } }) => state.posts.posts);

    const SubmitForm = (e: FormEvent) => {
        e.preventDefault();
        if (forEdit[0]) {
            const postToUpdate = allPosts.find(p => p.id === existingPost[0]);
            if (postToUpdate) {
                const updatedPost: TPost = { ...postToUpdate, title: workWithTitle[0], body: workWithBody[0] };
                dispatch(updatePostsAsync(updatedPost)).then(() => {
                    dispatch(editPost(updatedPost));
                });
            }
            forEdit[1](false);
            existingPost[1](null);
        } else {
            const createdPost: TNewPost = { title: workWithTitle[0], body: workWithBody[0] };
            dispatch(createPostsAsync(createdPost));
        }
        workWithTitle[1]("");
        workWithBody[1]("");
    };

    const formStyle: React.CSSProperties = {
        maxWidth: "500px",
        margin: "0 auto",
        padding: "10px",
        border: "1px solid black"
    };

    const inputStyle: React.CSSProperties = {
        width: "100%",
        marginBottom: "10px",
        padding: "6px",
        border: "1px solid black",
        boxSizing: "border-box"
    };

    const textareaStyle: React.CSSProperties = {
        ...inputStyle,
        height: "100px",
        resize: "vertical"
    };

    const buttonStyle: React.CSSProperties = {
        width: "100%",
        padding: "8px",
        border: "1px solid black",
        background: "none",
        cursor: "pointer"
    };

    return (
        <form onSubmit={SubmitForm} style={formStyle}>
            <input
                type="text"
                value={workWithTitle[0]}
                onChange={(e) => workWithTitle[1](e.target.value)}
                placeholder="Заголовок"
                style={inputStyle}
            />
            <textarea
                value={workWithBody[0]}
                onChange={(e) => workWithBody[1](e.target.value)}
                placeholder="Текст поста"
                style={textareaStyle}
            />
            <button type="submit" style={buttonStyle}>
                {forEdit[0] ? "Обновить" : "Добавить"}
            </button>
        </form>
    );
}

export default PostForm;
