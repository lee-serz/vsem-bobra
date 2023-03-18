import React from "react";
import { Link } from "react-router-dom";

const CreatePage = () => {
    return (
        <div className="create-page-wrapper">
            <div className="create-page-header">
                <div className="create-page-header__title">ВСЕМ БОБРА</div>
                <div className="create-page-header__user">
                    <img src="" alt="" className="create-page-header__user-icon" />
                    <div className="create-page-header__user-name">Шуваев Борис Анатольевич</div>
                </div>
            </div>
            <div className="create-page-container">
                <div className="create-page-sidebar"></div>
                <div className="create-page-content"></div>
            </div>
        </div>
    );
};

export default CreatePage;