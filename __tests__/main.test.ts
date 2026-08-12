import * as process from 'process'
import fs from 'fs'
import * as path from 'path'
import {annotationsForPath} from '../src/annotations'

jest.mock(
  '@actions/core',
  () => ({
    warning: jest.fn(),
    info: jest.fn(),
    debug: jest.fn()
  }),
  {virtual: true}
)

beforeAll(() => {
  jest.spyOn(fs, 'existsSync').mockReturnValue(true)
  process.env['GITHUB_WORKSPACE'] = __dirname
})

test('parses file', async () => {
  const spotBugsXml = path.resolve(__dirname, '..', 'reports', 'pmd.xml')
  const annotations = annotationsForPath(spotBugsXml)
  expect(annotations).toHaveLength(171)
})
