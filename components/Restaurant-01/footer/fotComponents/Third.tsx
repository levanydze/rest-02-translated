import React from "react";
import styles from "./Third.module.css";
import Link from "next/link";

const events = [
  {
    date: "July 30, 2024",
    title: "The principles of scientific cooking",
  },
  {
    date: "August 08, 2024",
    title: "Barbecue party tips for a truly amazing event",
  },
  {
    date: "September 24, 2024",
    title: "Cooking for one",
  },
  {
    date: "December 24, 2024",
    title: "Big pizza party",
  },
];

export default function Third() {
  return (
    <section>
      <h2 className="heading5">Events</h2>
      <ul>
        {events.slice(0, 3).map((event) => (
          <li className={styles.eventWrap} key={`${event.date}-${event.title}`}>
            <p className="captionMini">{event.date}</p>
            <h3 className="caption">{event.title}</h3>
          </li>
        ))}
      </ul>

      <div>
        <Link className="heading5" href="/">
          View All Posts
        </Link>
      </div>
    </section>
  );
}
