import React, { Fragment } from 'react'
import {
  EuiDescriptionList,
  EuiDescriptionListTitle,
  EuiDescriptionListDescription,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiFlexGroup,
  EuiFlexItem,
  EuiLink,
} from '@elastic/eui'

export function ContactView() {
  return (
    <Fragment>
      <EuiTitle>
        <h1>Contact Me</h1>
      </EuiTitle>

      <EuiText>
        <p>You can reach me via multiple platforms, here are some ways to contact me.</p>
      </EuiText>
      <EuiSpacer />

      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiDescriptionList>
            <EuiDescriptionListTitle>Business Email</EuiDescriptionListTitle>
            <EuiDescriptionListDescription>
              <EuiLink href="mailto:a.elreco@gmail.com">a.elreco@gmail.com</EuiLink>
            </EuiDescriptionListDescription>

            <EuiDescriptionListTitle>Twitter</EuiDescriptionListTitle>
            <EuiDescriptionListDescription>
              <EuiLink href="https://twitter.com/el__reco">@el__reco</EuiLink>
            </EuiDescriptionListDescription>
          </EuiDescriptionList>
        </EuiFlexItem>

        <EuiFlexItem>
          <EuiDescriptionList>
            <EuiDescriptionListTitle>GitHub</EuiDescriptionListTitle>
            <EuiDescriptionListDescription>
              <EuiLink href="https://github.com/elreco">@elreco</EuiLink>
            </EuiDescriptionListDescription>

            <EuiDescriptionListTitle>Discord</EuiDescriptionListTitle>
            <EuiDescriptionListDescription>elreco#6124</EuiDescriptionListDescription>
          </EuiDescriptionList>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiDescriptionList>
            <EuiDescriptionListTitle>LinkedIn</EuiDescriptionListTitle>
            <EuiDescriptionListDescription>
              <EuiLink href="https://www.linkedin.com/in/alexandre-le-corre/">alexandre-le-corre</EuiLink>
            </EuiDescriptionListDescription>
              <EuiDescriptionListTitle>My CV</EuiDescriptionListTitle>
              <EuiDescriptionListDescription>
                <EuiLink href="/cv.pdf" target="_blank">cv.pdf</EuiLink>
              </EuiDescriptionListDescription>
            </EuiDescriptionList>
        </EuiFlexItem>

      </EuiFlexGroup>
    </Fragment>
  )
}
