# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.3.3] 2022-12-22

### changed

Updates `@enhance/arc-plugin-enhance` to latest which includes:
  - fix handlers with `.` dots in their file path
  - Router sorting algorithm for deeply nested routes

## [3.3.2] 2022-12-19

### changed

Updates ".*ignore" files and manifest creation

## [3.3.1] 2022-12-15

### changed

Updates `@enhance/arc-plugin-enhance` to latest which includes fix for passing state from array middleware syntax

## [3.3.0] 2022-12-14

### Added

Adds pruning of static assets by default

### changed

Updates `@enhance/arc-plugin-enhance` to latest which includes `arc-plugin-rollup`
Updates `.gitignore` to reflect moving styles from `tmp/` to `.enhance`

## [3.2.0] 2022-12-08

### changed

Updates `@enhance/arc-plugin-enhance` to latest which includes swapping `/tmp` to `.enhance` for generated output of `@enhance/arc-plugin-styles`

