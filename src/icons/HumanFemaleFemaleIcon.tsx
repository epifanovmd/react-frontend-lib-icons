import React, { FC, memo } from 'react';
import HumanFemaleFemaleSvg from '../svg/human-female-female.svg';

export interface IHumanFemaleFemaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanFemaleFemaleIcon: FC<IHumanFemaleFemaleIconProps> = memo(props => {
  return <HumanFemaleFemaleSvg {...props} />;
});
