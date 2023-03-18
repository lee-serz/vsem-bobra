import React from "react";
import LiveStream from './LiveStream';

const MainStreamPage = () => {
    const apiKey = 'AIzaSyAzp0kr8-EW_PLUb6qw93_cpr-7YCDZ34c';
    const channelId = 'UCJ6onQWKWPvBKkW_dhb6_1A';

    return (
        <div className="main-stream-page-wrapper">
            <a className="stream-link-to-back" href="#">Назад</a>
            <h1>Урок №1. Введение в React.js</h1>

            <div className="stream-module">
            <LiveStream apiKey={apiKey} channelId={channelId} />
    </div>
        </div>
    );
};

export default MainStreamPage;