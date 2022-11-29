import React, { FC, memo } from 'react';
import FountainPenTipSvg from '../svg/fountain-pen-tip.svg';

export interface IFountainPenTipIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FountainPenTipIcon: FC<IFountainPenTipIconProps> = memo(props => {
  return <FountainPenTipSvg {...props} />;
});
