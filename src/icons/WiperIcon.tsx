import React, { FC, memo } from 'react';
import WiperSvg from '../svg/wiper.svg';

export interface IWiperIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WiperIcon: FC<IWiperIconProps> = memo(props => {
  return <WiperSvg {...props} />;
});
