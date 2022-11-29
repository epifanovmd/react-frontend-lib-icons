import React, { FC, memo } from 'react';
import StamperSvg from '../svg/stamper.svg';

export interface IStamperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StamperIcon: FC<IStamperIconProps> = memo(props => {
  return <StamperSvg {...props} />;
});
