import React, { Fragment } from 'react'
import { Dropdown, Glyphicon } from 'react-bootstrap'
import style from './StatusBar.styl'
import ActionItem from './ActionItem'
import _ from 'lodash'

export default class BotSwitcher extends React.Component {
  constructor(props) {
    super(props)
  }

  state = {
    open: false
  }

  toggleOpen = () => this.setState({ open: !this.state.open })

  render() {
    return (
      <Fragment>
        <ActionItem
          id="statusbar_switchbot"
          title="Switch Bot"
          description="Switch to an other bot. This will leave this interface."
          onClick={this.toggleOpen}
        >
          <Glyphicon glyph="retweet" style={{ marginRight: '5px' }} />
          <span>{this.props.currentBotId}</span>
        </ActionItem>

        <Dropdown pullRight dropup={true} open={this.state.open} onToggle={this.toggleOpen} id="bot-switcher">
          {/* react-bootstrap warning otherwise */}
          <Dropdown.Toggle style={{ display: 'none' }} />
          <Dropdown.Menu pullRight onClose={this.toggleOpen} className={style.langSwitherMenu}>
            {this.props.botsIds
              .filter(id => this.props.currentBotId != id)
              .map(id => (
                <li className={style.langItem}>
                  <a key={id} href={`/studio/${id}`}>
                    {id}
                  </a>
                </li>
              ))}
          </Dropdown.Menu>
        </Dropdown>
      </Fragment>
    )
  }
}
