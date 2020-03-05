import React, { PropsWithChildren } from 'react'
import {
  EuiFlexItem,
  EuiCard,
  EuiIcon,
  EuiText,
  EuiPanel,
} from '@elastic/eui'

import { logos, Skill } from '../app/App'

export function SkillsCard({ skill }: PropsWithChildren<{ skill: Skill }>) {
  return (
      <EuiFlexItem>
        <EuiPanel className="eui-textCenter">
            <EuiIcon type={logos[skill.logo]} size="xl" />
            <EuiText size="s">
              <p>{skill.name}</p>
            </EuiText>
        </EuiPanel>
      </EuiFlexItem>
  )
}
