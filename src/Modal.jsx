import { useEffect } from "react";

const Modal = ({ setShowModal, post }) => {
    const { userId, title, body } = post;

    useEffect(() => {
        const handleClose = (e) => {
            if (e.target.closest(".modal") === null) {
                setShowModal(false);
            }
        };

        document.addEventListener("click", handleClose);

        return () => document.removeEventListener("click", handleClose);
    }, []);
    console.log("Rerendered")

    return (
        <div className="modal">
            <div className="close-btn-div">
                <button onClick={() => setShowModal(false)} className="close">
                    &#x2715;
                </button>
            </div>
            <h2>User Id: {userId}</h2>
            <h2>Post Title: {title}</h2>
            <p>Post Description: {body}</p>
        </div>
    );
};

export default Modal;