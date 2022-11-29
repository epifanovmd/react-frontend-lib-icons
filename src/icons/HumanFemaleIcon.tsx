import React, { FC, memo } from 'react';
import HumanFemaleSvg from '../svg/human-female.svg';

export interface IHumanFemaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanFemaleIcon: FC<IHumanFemaleIconProps> = memo(props => {
  return <HumanFemaleSvg {...props} />;
});
