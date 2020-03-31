import React from "react"

import Header from '../components/Header';

import '../styles/styles.scss'
import EventSection from "../components/EventSection";

function IndexPage() {
    // TODO: Get events using NetlifyCMS
    const upcomingEvents = [];
    const pastEvents = [
        { title: "MAC x Microsoft | Mock Coding Interviews" },
        {
            title: "MAC x Outreach | Intro to Python w/ Turtle"
        },
        {
            title: "MAC x Hack: Cloud Computing w/ NAB"
        }
    ];

    return (
        <div>
            <Header />

            <EventSection title="Upcoming" events={upcomingEvents} />

            <EventSection title="Past" events={pastEvents} />
        </div>
    )
}

export default IndexPage;