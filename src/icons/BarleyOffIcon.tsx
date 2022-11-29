import React, { FC, memo } from 'react';
import BarleyOffSvg from '../svg/barley-off.svg';

export interface IBarleyOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BarleyOffIcon: FC<IBarleyOffIconProps> = memo(props => {
  return <BarleyOffSvg {...props} />;
});
