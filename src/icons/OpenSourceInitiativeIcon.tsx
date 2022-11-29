import React, { FC, memo } from 'react';
import OpenSourceInitiativeSvg from '../svg/open-source-initiative.svg';

export interface IOpenSourceInitiativeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OpenSourceInitiativeIcon: FC<IOpenSourceInitiativeIconProps> = memo(props => {
  return <OpenSourceInitiativeSvg {...props} />;
});
