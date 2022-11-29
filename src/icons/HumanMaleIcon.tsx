import React, { FC, memo } from 'react';
import HumanMaleSvg from '../svg/human-male.svg';

export interface IHumanMaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleIcon: FC<IHumanMaleIconProps> = memo(props => {
  return <HumanMaleSvg {...props} />;
});
