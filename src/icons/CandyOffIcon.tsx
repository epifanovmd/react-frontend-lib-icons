import React, { FC, memo } from 'react';
import CandyOffSvg from '../svg/candy-off.svg';

export interface ICandyOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CandyOffIcon: FC<ICandyOffIconProps> = memo(props => {
  return <CandyOffSvg {...props} />;
});
