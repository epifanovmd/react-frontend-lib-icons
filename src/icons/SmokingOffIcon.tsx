import React, { FC, memo } from 'react';
import SmokingOffSvg from '../svg/smoking-off.svg';

export interface ISmokingOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SmokingOffIcon: FC<ISmokingOffIconProps> = memo(props => {
  return <SmokingOffSvg {...props} />;
});
