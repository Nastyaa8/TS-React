import { useSelector, useDispatch } from "react-redux";
import { addAction, editAction, deleteAction, toggleAction } from "../redux/actions";
import { TypesOfActions, ITask } from "../redux/types";
import Button from "./Button";
import { Dispatch } from "redux";
import { useState } from "react";
import Task from "./Task";

function TodoList() {
    const curTasks = useSelector((state: { tasks: Array<ITask>, curId: number }) => state.tasks);
    const dispatch = useDispatch<Dispatch<TypesOfActions>>();

    const [inp, setInp] = useState<string>("");
    const [curEditId, setEditId] = useState<number>(0);
    const [isEdit, setEdit] = useState<boolean>(false);

    const AddFunc = () => {
        if (inp.trim()) {
            dispatch(addAction(inp.trim()));
            setInp("");
        }
    };

    const SetEditFunc = (id: number, name: string) => {
        setInp(name);
        setEditId(id);
        setEdit(true);
    };

    const EditFunc = () => {
        if (inp.trim()) {
            dispatch(editAction(inp.trim(), curEditId));
            setEdit(false);
            setInp("");
        }
    };

    const DeleteFunc = (id: number) => {
        dispatch(deleteAction(id));
    };

    const ToggleFunc = (id: number) => {
        dispatch(toggleAction(id));
    };

    return (
        <div className=" min-h-screen flex flex-col items-center py-10 px-4">
            <div className="bg-white p-6 rounded-3xl shadow-lg w-full max-w-3xl">
                <h1 className="text-3xl text-pink-700 font-bold mb-4 text-center">Мой список дел</h1>
                <div className="flex flex-col sm:flex-row justify-center items-center gap-2 mb-6">
                    <input
                        className="bg-pink-50 border border-pink-300 text-lg rounded-lg p-2 w-full sm:w-2/3 focus:outline-none focus:ring-2 focus:ring-pink-400 text-black"
                        type="text"
                        placeholder="Введите задачу..."
                        value={inp}
                        onChange={(e) => setInp(e.target.value)}
                    />
                    <Button
                        title={isEdit ? "💾 Сохранить" : "➕ Добавить"}
                        func={isEdit ? () => EditFunc() : () => AddFunc()}
                        classname="bg-pink-500 hover:bg-pink-600 text-white rounded-lg p-2 w-full sm:w-auto"
                    />
                </div>

                <ul className="flex flex-col items-center">
                    {curTasks.map((t) => (
                        <li key={t.id} className="w-full max-w-2xl">
                            <div className="flex items-center mb-2">
                                <input
                                    type="checkbox"
                                    checked={t.isDone}
                                    onChange={() => ToggleFunc(t.id)}
                                    className="mr-4 w-6 h-6 accent-pink-500"
                                />
                                <Task
                                    name={t.name}
                                    isDone={t.isDone}
                                    func1={() => SetEditFunc(t.id, t.name)}
                                    func2={() => DeleteFunc(t.id)}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;
