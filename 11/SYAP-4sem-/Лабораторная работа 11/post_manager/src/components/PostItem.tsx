import { TPost } from "../app/types";
import Button from "./Button";

interface NewProps extends TPost {
    setEdit: (post: { id: number; title: string; body: string }) => void;
    delFunc: (id: number) => void;
}

function PostItem(props: NewProps) {
    const containerStyle: React.CSSProperties = {
        border: '1px solid black',
        borderRadius: '4px',
        padding: '12px',
        marginBottom: '12px'
    };

    const titleStyle: React.CSSProperties = {
        fontWeight: 'bold',
        fontSize: '18px',
        marginBottom: '8px'
    };

    const bodyStyle: React.CSSProperties = {
        marginBottom: '12px'
    };

    const buttonContainerStyle: React.CSSProperties = {
        display: 'flex',
        gap: '8px'
    };

    return (
        <div style={containerStyle}>
            <h2 style={titleStyle}>{props.title}</h2>
            <div style={bodyStyle}>{props.body}</div>
            <div style={buttonContainerStyle}>
                <Button
                    func={() => props.setEdit({ id: props.id, title: props.title, body: props.body })}
                    title="Редактировать"
                />
                <Button
                    func={() => props.delFunc(props.id)}
                    title="Удалить"
                />
            </div>
        </div>
    );
}

export default PostItem;
