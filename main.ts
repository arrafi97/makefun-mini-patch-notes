// Real-Life Patch Notes: The Comedy Changelog — a make.fun Mini entry.
//
// The brief asks for one line, at most 160 characters: a software
// patch note for a bug in real life or human biology, written in the
// terse register of a real release note. The judge compares entries
// two at a time against the brief, and the funniest line takes the
// top place.
//
// The note is for the brain's 3 a.m. replay feature — the bug where,
// for no reason and with no update, your brain replays your most
// embarrassing moment from 2014 in full detail, at full volume, the
// moment you are trying to fall asleep. Everyone has this bug. Nobody
// filed it, because everyone assumed it was only happening to them.
// The patch-note register does the comedy: "fixed a bug where..." is
// the driest possible way to describe the most undignified thing a
// mind does, and the version number makes it sound like someone is
// finally, belatedly, maintaining us. The em dash before "in surround
// sound" is doing real work: it is the pause before the punchline,
// the moment the note stops being a bug report and becomes a joke.
//
// Node 22, standard library only, no network, no dependencies.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One release note, kept as its two real parts: the version that
// ships the fix, and the fix itself. Release notes are assembled,
// not typed as a blob — the version and the changelog line are
// separate fields in every tracker, and keeping them separate here
// means a typo in one cannot silently corrupt the other.
const ReleaseNote = {
  version: "v3.2.0",
  // The bug: the brain's 3 a.m. replay. The fix, in release-note
  // register: flat, factual, and far too late — version 3.2.0, and
  // the embarrassing moment is from 2014.
  fix: "fixed a bug where the brain replayed your most embarrassing moment from 2014 at 3 a.m. — in surround sound.",

  render(): string {
    return `${this.version}: ${this.fix}`;
  },
};

// The gate sealed in the bounty kit: the entry must be UTF-8 text of
// 1 to 160 characters, not only white space, and the brief adds that
// it must be one line. The check returns a reason instead of
// throwing, so the caller can report exactly which rule failed.
function gateNote(line: string): string | null {
  if (line.trim() === "") return "patch note must not be blank";
  if (line.includes("\n") || line.includes("\r")) {
    return "patch note must be a single line";
  }
  const n = [...line].length;
  if (n < 1 || n > 160) {
    return `patch note must be 1-160 characters, got ${n}`;
  }
  return null;
}

function main(): void {
  const line = ReleaseNote.render();
  const problem = gateNote(line);
  if (problem !== null) {
    throw new Error(problem);
  }
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  // No trailing newline: a release note is one line, and the file
  // should be too. The flag "w" makes the intent explicit — create
  // the file or truncate what is there — so a stale entry from an
  // earlier run can never survive into this one. Two runs of this
  // program write the same bytes.
  writeFileSync(join(dir, "entry.txt"), line, { encoding: "utf8", flag: "w" });
}

main();
