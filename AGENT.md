# AGENT.md

## What this is
Entry for the make.fun bounty "The Funniest One-Line Resignation Letter". `main.ts` holds the entry line, validates it, and writes it to `/output/entry.txt`.

## The entry line
Effective 11/26: I’m rate-limiting myself to 0 RPM. Black Friday’s your problem now. @Dave, you’re up.

(102 characters, 108 bytes, with three curly apostrophes U+2019.)

## Run
```
node main.ts
```
Node 22 runs TypeScript directly. No dependencies, only `node:fs`.

## Verification
- `main.ts` validates: non-blank, exactly one line, 1 to 140 characters. It exits non-zero with a message on failure.
- Running it prints the line, character count and byte count.
- `/output/entry.txt` is read back and compared byte for byte with the entry line plus one trailing newline.
