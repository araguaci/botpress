import { IntegrationDefinition } from '@botpress/sdk'
import { sentry as sentryHelpers } from '@botpress/sdk-addons'

import { configuration, states, user, channels, actions } from './src/definitions'

export default new IntegrationDefinition({
  name: 'asana',
  version: '0.2.0',
  readme: 'hub.md',
  icon: 'icon.svg',
  configuration,
  channels,
  user,
  actions,
  states,
  secrets: sentryHelpers.COMMON_SECRET_NAMES,
})
