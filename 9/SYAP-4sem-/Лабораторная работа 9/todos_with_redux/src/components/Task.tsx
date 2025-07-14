import Button from "./Button";
import { ITaskProps } from "../redux/types";

const Task = (props: ITaskProps) => {
    return (
        <div className="flex flex-col sm:flex-row items-center justify-between bg-pink-100 shadow-md rounded-xl p-4 m-2 w-full max-w-2xl transition-all duration-300">
            <input
                value={props.name}
                type="text"
                readOnly
                className="bg-white text-lg font-medium rounded-md p-2 text-gray-800 w-full sm:w-auto"
            />
            <div className="flex mt-2 sm:mt-0">
                <Button
                    title="✏️"
                    func={props.func1}
                    classname="bg-pink-300 hover:bg-pink-400 border border-white rounded-full text-white p-2 mx-1"
                />
                <Button
                    title="🗑️"
                    func={props.func2}
                    classname="bg-red-300 hover:bg-red-400 border border-white rounded-full text-white p-2 mx-1"
                />
            </div>
        </div>
    );
};

export default Task;
