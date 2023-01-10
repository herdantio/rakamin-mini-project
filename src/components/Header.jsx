import { useContext } from "react";
import { store } from "../store";
import AppButton from "./AppButton";

function Header() {

    const {dispatch} = useContext(store)

    return (
        <div className="py-[18px] pl-5 w-full border-b border-solid align-middle">
            <div className="flex space-x-2.5">
                <p className="text-lg font-bold">Product Roadmap</p>
                <AppButton onClick={() => {
                    dispatch({type: 'showCreateTodosModal'})
                }}>
                + Add New Group
                </AppButton>
            </div>
        </div>
    );
}

export default Header