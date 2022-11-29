import React, { FC, memo } from 'react';
import RiceSvg from '../svg/rice.svg';

export interface IRiceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RiceIcon: FC<IRiceIconProps> = memo(props => {
  return <RiceSvg {...props} />;
});
