import React, { FC, memo } from 'react';
import FlagOffSvg from '../svg/flag-off.svg';

export interface IFlagOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FlagOffIcon: FC<IFlagOffIconProps> = memo(props => {
  return <FlagOffSvg {...props} />;
});
