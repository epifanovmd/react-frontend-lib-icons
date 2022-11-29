import React, { FC, memo } from 'react';
import ApplicationArrayOutlineSvg from '../svg/application-array-outline.svg';

export interface IApplicationArrayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationArrayOutlineIcon: FC<IApplicationArrayOutlineIconProps> = memo(props => {
  return <ApplicationArrayOutlineSvg {...props} />;
});
