import React, { FC, memo } from 'react';
import RollerbladeOffSvg from '../svg/rollerblade-off.svg';

export interface IRollerbladeOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RollerbladeOffIcon: FC<IRollerbladeOffIconProps> = memo(props => {
  return <RollerbladeOffSvg {...props} />;
});
