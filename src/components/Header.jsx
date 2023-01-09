import AppButton from "./AppButton";

function Header() {
    return (
        <div className="py-[18px] pl-5 w-full border-b border-solid align-middle">
            <div className="flex space-x-2.5">
                <p className="text-lg font-bold">Product Roadmap</p>
                <AppButton text="+ Add New Group"></AppButton>
            </div>
        </div>
    );
}

export default Header