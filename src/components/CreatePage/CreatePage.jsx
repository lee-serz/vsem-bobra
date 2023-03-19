import React from "react";
import { Link } from "react-router-dom";
import Header from "../HeaderModule/Header";
import CreateForm from "../CreateForm/CreateForm";
import Sidebar from "../SidebarModule/Sidebar";

const CreatePage = () => {
    return (
        <div>
            <Header />
            <div className="create-page-container">
                <Sidebar/>
                <CreateForm/>
            </div>
        </div>
    );
};

export default CreatePage;