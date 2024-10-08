![build-test](https://github.com/lcollins/pmd-github-action/workflows/build-test/badge.svg)

# Credit

Adapted from https://github.com/jwgmeligmeyling/pmd-github-action to support Node 20.

# PMD GitHub Action

This action pushes results from [PMD](https://pmd.github.io/) as check run annotations. :rocket:

The action can also be used for any other static analysis tools that produce reports in the PMD XML format.
The report itself must be generated in a former build step, for example a Maven build.

![example](images/example.png)

## Input

### `path`
Required. A file, directory or wildcard pattern that describes where to find the reports.
Multiple files can be processed through a [glob expression](https://github.com/actions/toolkit/tree/master/packages/glob), for example: `'**/pmd.xml'`.

### `name`
Optional. Name for the check run to create. Defaults to `PMD`.

### `title`
Optional. Title for the check run to create. Defaults to `PMD Source Code Analyzer report`.

### `token`
Optional. GitHub API access token. Defaults to `${{ github.token }}`, which is set by `actions/checkout@v4` minimally.

### `fail-on-violation`
Optional. Whether to fail the check if any violations are found. Defaults to `false`.

## Example usage

```yaml
name: Java CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v4
    - name: Set up JDK 1.8
      uses: actions/setup-java@v1
      with:
        java-version: 1.8
    - uses: actions/cache@v1
      with:
        path: ~/.m2/repository
        key: ${{ runner.os }}-maven-${{ hashFiles('**/pom.xml') }}
        restore-keys: |
          ${{ runner.os }}-maven-
    - name: Build with Maven
      run: mvn -B verify pmd:pmd
    - uses: lcollins/pmd-github-action@v3.1.0
      with:
        path: '**/pmd.xml'
```

And do not forget to enable XML output for the Maven plugin:

```xml
<build>
  <plugins>
    <plugin>
      <groupId>org.apache.maven.plugins</groupId>
      <artifactId>maven-pmd-plugin</artifactId>
      <version>3.13.0</version>
      <configuration>
        <includeTests>true</includeTests>
        <failOnViolation>false</failOnViolation>
        <skipEmptyReport>false</skipEmptyReport>
      </configuration>
    </plugin>
  </plugins>
</build>
```

Please note that by default workflows on `pull_request` events checkout [`refs/pull/:prNumber/merge`](https://help.github.com/en/actions/reference/events-that-trigger-workflows) instead of the head of the pull request.
Due to this, line numbers for the generated violations may not align with the actual line numbers to which they are displayed on the `HEAD`.
As it is, there is not really a sensible way to run this action on the merge commit of the pull request, because the result would be posted to an unnamed workflow for an otherwise invisible commit.
Even for `pull_request` events there is the possibility to checkout the pull request head instead. In order to do so, change your `checkout` action accordingly:

```yaml
- uses: actions/checkout@v4
  with:
    ref: ${{ github.event.pull_request.head.sha }}
```

## Other relevant actions
This is a Github Action in a series of other GitHub Actions. Similar actions include:

* [checkstyle-github-action](https://github.com/lcollins/checkstyle-github-action)
* [pmd-github-action](https://github.com/lcollins/pmd-github-action)
* [spotbugs-github-action](https://github.com/lcollins/spotbugs-github-action)


## Contributing

Install the dependencies:

```bash
$ npm install
```

Build the typescript and package it for distribution
```bash
$ npm run build && npm run package
```

Run the tests :heavy_check_mark:  
```bash
$ npm test

 PASS  ./index.test.js
  ✓ throws invalid number (3ms)
  ✓ wait 500 ms (504ms)
  ✓ test runs (95ms)

...
```
