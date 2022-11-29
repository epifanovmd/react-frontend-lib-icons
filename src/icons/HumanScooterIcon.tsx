import React, { FC, memo } from 'react';
import HumanScooterSvg from '../svg/human-scooter.svg';

export interface IHumanScooterIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanScooterIcon: FC<IHumanScooterIconProps> = memo(props => {
  return <HumanScooterSvg {...props} />;
});
