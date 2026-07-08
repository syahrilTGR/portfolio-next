# Preview Tool Fix Reference

## Problem
Preview tool (`mcp__Claude_Preview__preview_start`) fails to connect because:
- Next.js 16 binds to random port (e.g., 20128)
- Preview tool expects fixed port 3000
- AutoPort conflict causes "Port in use" errors

## Solution

### 1. Kill existing processes
```bash
pkill -f "next dev"
lsof -ti:3000 | xargs kill -9 2>/dev/null
```

### 2. Start Next.js explicitly on port 3000
```bash
cd "/Volumes/Data Shared/Project/portfolio-next" && nohup npx next dev -p 3000 > /tmp/next-dev.log 2>&1 &
```

### 3. Configure launch.json (fixed port, no autoPort)
```json
{
  "version": "0.0.1",
  "configurations": [
    {
      "name": "portfolio-dev",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "dev"],
      "port": 3000,
      "autoPort": false
    }
  ]
}
```

### 4. Start preview
```bash
mcp__Claude_Preview__preview_start({name: "portfolio-dev"})
```

## Key Files
- `.claude/launch.json` — lock port 3000, `autoPort: false`
- Dev server must be running on port 3000 before preview_start

## Notes
- Next.js 16 default behavior: random port via Turbopack
- Preview tool proxy only works when dev server port matches configured port
- If "Server not found" error: dev server died, restart from step 1