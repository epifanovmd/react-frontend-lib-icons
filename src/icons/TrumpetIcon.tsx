import React, { FC, memo } from 'react';
import TrumpetSvg from '../svg/trumpet.svg';

export interface ITrumpetIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrumpetIcon: FC<ITrumpetIconProps> = memo(props => {
  return <TrumpetSvg {...props} />;
});
