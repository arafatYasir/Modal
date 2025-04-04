import { useState } from "react";
import Modal from "./Modal";

const PostBtn = ({post}) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <div>
            <button onClick={() => setShowModal(true)} className="open-btn">Show Modal</button>

            {
                showModal && <Modal setShowModal={setShowModal} post={post} />
            }
        </div>
    );
};

export default PostBtn;