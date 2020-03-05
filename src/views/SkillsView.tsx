import React, { Fragment } from 'react'
import {
  EuiHorizontalRule,
  EuiText,
  EuiTitle,
  EuiFlexGrid,
} from '@elastic/eui'

import { skills } from '../app/App'
import { SkillsCard } from '../components/SkillsCard'

export function SkillsView() {
  return (
    <Fragment>
      <EuiTitle>
        <h1>Skills</h1>
      </EuiTitle>

      <EuiText>
        <p>I try to make the right choice when I start to learn a new technology. Here are my favorites!</p>
      </EuiText>

      <EuiHorizontalRule />

      <EuiFlexGrid columns={4}>
        {Object.values(skills).map(skill => (<SkillsCard skill={skill} />))}
      </EuiFlexGrid>
    </Fragment>
  )
}
