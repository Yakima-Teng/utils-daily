#!/usr/bin/env bash
cd docs
rm -rf _book
gitbook install
gitbook serve
