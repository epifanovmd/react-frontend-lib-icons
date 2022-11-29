import React, { FC, memo } from 'react';
import HandWaterSvg from '../svg/hand-water.svg';

export interface IHandWaterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HandWaterIcon: FC<IHandWaterIconProps> = memo(props => {
  return <HandWaterSvg {...props} />;
});
