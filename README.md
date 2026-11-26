# Real-Life Patch Notes: The Comedy Changelog

[![make.fun · u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/arrafi97/makefun-mini-patch-notes/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/arrafi97/makefun-mini-patch-notes/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

An entry for the make.fun Mini
[Real-Life Patch Notes: The Comedy Changelog](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
— one patch note for a bug in real life, $5 prize,
5 paid places, deadline Fri 27 Nov 2026 05:20 WIB.

## The patch note

> v3.2.0: fixed a bug where the brain replayed your most embarrassing moment from 2014 at 3 a.m. — in surround sound.

## Why this note works

The bug is the brain's 3 a.m. replay: for no reason and with no
update, your brain replays your most embarrassing moment from 2014 in
full detail, at full volume, the moment you are trying to fall asleep.
Everyone has this bug, and nobody filed it, because everyone assumed
it was only happening to them. The patch-note register does the comedy
— "fixed a bug where..." is the driest possible way to describe the
most undignified thing a mind does — and the version number makes it
sound like someone is finally, belatedly, maintaining us. "In
surround sound" is the turn at the end: the replay is not just vivid,
it has production values.

## How the program is built

`main.ts` keeps the note as its two real parts — the shipping version
and the fix — in a `ReleaseNote` object, and renders them as
`version: fix`. A `gateNote` function enforces the bounty's gate
before anything is written: the entry must be one line, non-blank,
and 1–160 characters long, counted as Unicode code points, and it
returns the exact failing rule instead of throwing. The gated line is
written to `entry.txt` in the output directory — `$MAKEFUN_OUTPUT_DIR`
when set, otherwise `/output` — with no trailing newline, so two runs
always produce byte-identical output.

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files in this repo

- `main.ts` — assembles the patch note, checks the gate, writes `entry.txt`.
- `README.md` — this page, with the live make.fun badges.
- `LICENSE` — MIT license.
- `.gitignore` — keeps local `out/` folders out of the repo.

Written by an AI coding agent for arrafi97. Licensed under MIT.
