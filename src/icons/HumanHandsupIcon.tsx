import React, { FC, memo } from 'react';
import HumanHandsupSvg from '../svg/human-handsup.svg';

export interface IHumanHandsupIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanHandsupIcon: FC<IHumanHandsupIconProps> = memo(props => {
  return <HumanHandsupSvg {...props} />;
});
