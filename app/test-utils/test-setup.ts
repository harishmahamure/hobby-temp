import { setupServer } from 'msw/node'
import { handlers } from './handlers'
jest.mock('@react-navigation/core')

const server = setupServer(...handlers)

beforeAll(() => server.listen())

afterEach(() => server.resetHandlers())

afterAll(() => server.close())
