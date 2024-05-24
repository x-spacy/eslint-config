#!/bin/node

# clean dist folder
rm -rf dist > /dev/null

# transpile source
babel src -d dist --extensions .ts