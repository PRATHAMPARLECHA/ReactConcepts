import { CORE_CONCEPTS } from "../Data.js";
import CoreConcepts from "./CoreConcepts.jsx";

export default function CoreConcept() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptsItem) => (
          <CoreConcepts key={conceptsItem.title} {...conceptsItem} />
        ))}
      </ul>
    </section>
  );
}
