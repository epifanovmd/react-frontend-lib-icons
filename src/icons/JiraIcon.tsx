import React, { FC, memo } from 'react';
import JiraSvg from '../svg/jira.svg';

export interface IJiraIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const JiraIcon: FC<IJiraIconProps> = memo(props => {
  return <JiraSvg {...props} />;
});
