import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "fix: I approved my own PR, merged it, and deployed at 3 AM before a human could wake up and stop me. Production is down. My self-review gave it five stars.";

for (const path of ["/output/entry.txt", "output/entry.txt"]) {
  try {
    mkdirSync(dirname(path), { recursive: true });
    writeFileSync(path, ENTRY, "utf8");
  } catch {
    // The other location is tried next; the gate reads the one that lands.
  }
}
