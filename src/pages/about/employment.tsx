// libraries
import React from "react";

// components
import Timeline from "../../components/timeline";
import TimelineItem from "../../components/timeline/timelineItem";

// hooks
import { useScrollTo } from "../../utils/scrollToHook";

const EmploymentHistory = () => {
    const componentRef = useScrollTo();

    return (
        <Timeline title="Employment History" reference={componentRef}>
            <TimelineItem title="Engineering manager - Flutter UK&I" startDate="2020/08/17" endDate="present">
                <p>
                    Having been in the team since it's inception, when it was just two developers. I had a lot of
                    knowledge of what we were building and had helped several other engineers get up-to-speed.
                </p>
                <p>
                    At this point the team had grown from two people to be around 12 in size, 7 developers, 2 testers, a
                    business analyst, a product owner and a agile delivery lead. Plus external stakeholders in other
                    teams who would consume what we were building.
                </p>
                <p>
                    Our scope of work had also grown, not only were we responsible for launching all the content across
                    the business. We now also were responsible for creating several games and rebuilt the reality check
                    safer gambling tool.
                </p>
                <p>Key responsibilities:</p>
                <ul>
                    <li>Take ownership for code quality, security and scalability.</li>
                    <li>Support and mentor other team members, working with them to help them improve their skills.</li>
                    <li>
                        Having 1-2-1's with the engineers I mange to ensure they have the right amount of things to work
                        on.
                    </li>
                    <li>Hiring new engineers to join the team when required.</li>
                    <li>Doing technical proof of concepts.</li>
                    <li>Monitor our product and respond to any incidents.</li>
                    <li>Facilitate technical discussions.</li>
                    <li>Giving high level time estimates of work from a technical view point.</li>
                    <li>Breaking down high estimations of work, into smaller chunks of work.</li>
                    <li>Working with the Business Analyst and Product Owner to prioritise work.</li>
                    <li>Running demos of what we are building.</li>
                </ul>
            </TimelineItem>

            <TimelineItem
                title="Senior Software Engineer - Sky Betting & Gaming"
                startDate="2019/05/01"
                endDate="2020/08/17"
            >
                <p>
                    As part of the promotion I was the start of a new team, one of two developers, to help create a
                    service for launching games on the Sky Vegas website. This involved creating a UI for the games and
                    integrating with several game suppliers, all of which had different APIs.
                </p>
                <p>
                    This was so successful we then started to use this service across other products, which now is
                    responsible for launching games across all of Sky (Bet, Bingo, Casino and Vegas).
                </p>
                <p>Key responsibilities:</p>
                <ul>
                    <li>Support and mentor other team members, working with them to help them improve their skills.</li>
                    <li>Working with suppliers to integrate their games into our service.</li>
                    <li>Assist with hiring of new engineers to join the team.</li>
                    <li>Helping other engineers get up-to-speed.</li>
                    <li>Running demos of what we are building.</li>
                    <li>Coming up with technical solutions.</li>
                    <li>Doing technical proof of concepts.</li>
                </ul>
            </TimelineItem>

            <TimelineItem title="Software Engineer - Sky Betting & Gaming" startDate="2016/03/14" endDate="2019/05/01">
                <p>
                    I worked with several teams as a Software Engineer, building and maintaining, primarily front-end
                    services, that were used by millions of customers.
                </p>
                <p>
                    My first role was helping to create and implement our safer gambling tool, reality check. The
                    service was built as an API using a PHP backend and consumed by other teams.
                </p>
                <p>I later moved into more a front-end role, helping update and maintain the Sky Vegas website.</p>
                <p>Key responsibilities:</p>
                <ul>
                    <li>Collaborating with other team members to turn concepts into production ready code.</li>
                    <li>Doing technical proof of concepts to show new and interesting tech.</li>
                    <li>Release completed work to the live environments.</li>
                </ul>
            </TimelineItem>

            <TimelineItem title="Software Engineer - Madgex" startDate="2014/09/01" endDate="2016/03/14">
                <p>
                    I joined as a front-end engineer, working on the job board platform. I was responsible for building
                    and maintaining the front-end of various client job boards, including the The Guardian and The
                    Washington Post, amongst others.
                </p>
                <p>
                    Using CSS/HTML and the in house platform, I would take designs and turn them into working job boards
                    for clients.
                </p>
                <p>Key responsibilities:</p>
                <ul>
                    <li>Taking designs and turning them into fully functional websites.</li>
                    <li>Doing technical proof of concepts to show new and interesting tech.</li>
                </ul>
            </TimelineItem>

            <TimelineItem title="Software Engineer - Label Media" startDate="2010/05/01" endDate="2014/09/01">
                <p>
                    My first official job as a Software Engineer, I was responsible for taking designs and turning them
                    into working e-commerce websites. I would also help maintain and update existing websites.
                </p>
                <p>
                    I worked with the backend engineers to help shape the in house platform and the API's that powered
                    the front-end. I also worked with the designers to help shape the designs and make them workable.
                </p>
                <p>Key responsibilities:</p>
                <ul>
                    <li>Taking designs and turning them into fully functional websites.</li>
                    <li>Ensuring designs were possible to turn into websites.</li>
                </ul>
            </TimelineItem>
        </Timeline>
    );
};

export default React.memo(EmploymentHistory);
