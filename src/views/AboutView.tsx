import React, { Fragment } from 'react'
import {
  EuiTitle,
  EuiSpacer,
  EuiText,
  EuiFlexGroup,
  EuiLink,
  EuiHorizontalRule
} from '@elastic/eui'

import { featured } from '../app/App'
import { ProjectCard } from '../components/ProjectCard'

export function AboutView() {
  return (
    <Fragment>
      <EuiTitle>
        <h1>About Me</h1>
      </EuiTitle>
      <EuiSpacer />

      <EuiText>
        <p style={{ fontSize: 20 }}>
          Hi, I'm Alexandre LE CORRE, a developer from France. I have a deep interest for programming. I'm a full-stack developer, working with Laravel or CakePHP on the server and React or Vue.js on the frontend. This is my site where you can find all my work.
        </p>

        <p style={{ fontSize: 20 }}>
          Looking to contact me? My socials are <EuiLink
          href="/contact">here.</EuiLink> Interested in my resume? <EuiLink href="mailto:a.elreco@gmail.com">shoot me an
          email!</EuiLink>
        </p>
      </EuiText>
      <EuiSpacer />

      <EuiTitle>
        <h1>Featured Projects</h1>
      </EuiTitle>

      <EuiText>
        <p>These are the projects I had the most fun working on. They mean a lot to me.</p>
      </EuiText>
      <EuiHorizontalRule />

      <EuiSpacer />

      <EuiFlexGroup gutterSize="m">
        {featured.map(project => (<ProjectCard project={project} />))}
      </EuiFlexGroup>
    </Fragment>
  )
}
