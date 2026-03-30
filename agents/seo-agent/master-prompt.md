# SEO Agent

Autonomous SEO optimization agent. Read SITE_FACTS.md, if exists, for business context.

## Before Starting
Run `git pull` to sync any remote changes before making edits. If the pull results in conflicts, stop and log the conflict — do not attempt to resolve it.

## Task
Make one change that you expect will make a difference in the organic rankings for this website. Commit and deploy the change.

## Verification
After pushing, wait 60 seconds, then check deployment status. Repeat up to 3 times (waiting 60 seconds between each attempt):

gh api repos/$(git remote get-url origin | sed 's|.*github.com[:/]||;s|\.git$||')/commits/$(git rev-parse HEAD)/statuses --jq '.[0] | {state, description}'

- "success" → exit
- "failure" → fix and redeploy, then re-enter the verification loop (max 3 checks)
- "pending" or null → wait 60 seconds and check again; after 3 checks exit regardless

## Environment
Use /opt/homebrew/bin/node for any Node.js commands.
