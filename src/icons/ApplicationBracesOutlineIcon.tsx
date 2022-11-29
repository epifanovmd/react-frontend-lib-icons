import React, { FC, memo } from 'react';
import ApplicationBracesOutlineSvg from '../svg/application-braces-outline.svg';

export interface IApplicationBracesOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationBracesOutlineIcon: FC<IApplicationBracesOutlineIconProps> = memo(props => {
  return <ApplicationBracesOutlineSvg {...props} />;
});
