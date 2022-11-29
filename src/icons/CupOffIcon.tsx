import React, { FC, memo } from 'react';
import CupOffSvg from '../svg/cup-off.svg';

export interface ICupOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CupOffIcon: FC<ICupOffIconProps> = memo(props => {
  return <CupOffSvg {...props} />;
});
