import React, { FC, memo } from 'react';
import HumanHandsdownSvg from '../svg/human-handsdown.svg';

export interface IHumanHandsdownIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanHandsdownIcon: FC<IHumanHandsdownIconProps> = memo(props => {
  return <HumanHandsdownSvg {...props} />;
});
