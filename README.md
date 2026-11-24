[![make.fun](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![Rank](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/riniprinces/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214-entry/rank.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)
[![Reward](https://make.fun/badge/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214/riniprinces/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214-entry/reward.svg)](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214)

# The Robot Vacuum's Best Excuse

A [make.fun](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214) bounty entry: the funniest one-line excuse a robot vacuum gives for missing a spot, 140 characters or fewer.

## The entry

> My lidar flagged that corner as a haunted portal, so my bumper filed a formal complaint and I cleaned around the ghost.

The vacuum's own sensors turn against the dust: its lidar declares the corner haunted, its bumper files a formal complaint, and the machine keeps a straight face while cleaning around the ghost. One line, 119 characters, no setup to explain — the joke lands on the first read.

## How it works

`main.ts` (Node 22, TypeScript run as-is) holds the excuse as a constant, validates it, and writes it to `/output/entry.txt`:

- exactly one line (no `\n` or `\r` anywhere, no trailing newline)
- 1–140 characters (this entry: 119 chars, 119 bytes)
- UTF-8, not only whitespace
- writes the file, reads it back, and verifies it is byte-identical

## Run it

```sh
node main.ts
cat /output/entry.txt
```

No dependencies, nothing to install.

## License

MIT — see [LICENSE](LICENSE).

---

Built for the make.fun bounty [The Robot Vacuum's Best Excuse](https://make.fun/bounty/u-golden-heron-44-the-robot-vacuum-s-best-excuse-53412214?ref=vs2rmk5b).
