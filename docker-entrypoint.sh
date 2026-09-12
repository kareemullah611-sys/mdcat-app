#!/bin/sh
set -eu

storage_dir="${TEXTBOOK_STORAGE_DIR:-/data/textbooks}"
cache_dir="${TEXTBOOK_CACHE_DIR:-${storage_dir}/reader-cache}"

# Railway mounts volumes after image creation, commonly as root:root. Only the
# derived page cache is writable; original textbook PDFs remain untouched.
mkdir -p "$cache_dir"
chown node:node "$cache_dir"

exec gosu node "$@"
