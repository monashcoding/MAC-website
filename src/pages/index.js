import React from "react"

import Header from '../components/Header';

import '../styles/styles.scss'
import EventSection from "../components/EventSection";

function IndexPage() {
    return (
        <div>
            <Header />

            <EventSection title="Upcoming" />

            <EventSection title="Past" />
        </div>
    )
}

export default IndexPage;