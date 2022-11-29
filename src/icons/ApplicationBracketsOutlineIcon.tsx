import React, { FC, memo } from 'react';
import ApplicationBracketsOutlineSvg from '../svg/application-brackets-outline.svg';

export interface IApplicationBracketsOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationBracketsOutlineIcon: FC<IApplicationBracketsOutlineIconProps> = memo(props => {
  return <ApplicationBracketsOutlineSvg {...props} />;
});
