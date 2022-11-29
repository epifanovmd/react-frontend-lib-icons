import React, { FC, memo } from 'react';
import ApplicationOutlineSvg from '../svg/application-outline.svg';

export interface IApplicationOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationOutlineIcon: FC<IApplicationOutlineIconProps> = memo(props => {
  return <ApplicationOutlineSvg {...props} />;
});
