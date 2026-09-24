# Lists available recipes
default:
  @just --list

# Shows the latest release tag
latest-tag:
  @git tag --list 'v*' --sort=-v:refname | head -n1

# Tags and pushes a release (bump: patch|minor|major|vX.Y.Z), triggering the GitHub Pages deploy
release bump="patch":
  #!/usr/bin/env bash
  set -euo pipefail

  if [ "$(git branch --show-current)" != "main" ]; then
    echo "Releases must be tagged from main." >&2; exit 1
  fi
  if [ -n "$(git status --porcelain)" ]; then
    echo "Working tree is not clean." >&2; exit 1
  fi
  git fetch --quiet --tags origin main
  if [ "$(git rev-parse HEAD)" != "$(git rev-parse origin/main)" ]; then
    echo "Local main is not in sync with origin/main. Push or pull first." >&2; exit 1
  fi

  latest=$(git tag --list 'v*' --sort=-v:refname | head -n1)
  latest=${latest:-v0.0.0}
  IFS=. read -r major minor patch <<< "${latest#v}"

  case "{{bump}}" in
    patch) next="v$major.$minor.$((patch + 1))" ;;
    minor) next="v$major.$((minor + 1)).0" ;;
    major) next="v$((major + 1)).0.0" ;;
    v[0-9]*.[0-9]*.[0-9]*) next="{{bump}}" ;;
    *) echo "Invalid bump '{{bump}}'. Use patch, minor, major or vX.Y.Z." >&2; exit 1 ;;
  esac

  if git rev-parse -q --verify "refs/tags/$next" > /dev/null; then
    echo "Tag $next already exists." >&2; exit 1
  fi

  read -r -p "Tag $(git rev-parse --short HEAD) as $next (latest: $latest) and push? [y/N] " answer
  [ "$answer" = "y" ] || [ "$answer" = "Y" ] || { echo "Aborted."; exit 1; }

  git tag -a "$next" -m "Release $next"
  git push origin "$next"
  echo "Pushed $next. Follow the deploy with: gh run watch"
