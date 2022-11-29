import React, { FC, memo } from 'react';
import HumanMaleFemaleSvg from '../svg/human-male-female.svg';

export interface IHumanMaleFemaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleFemaleIcon: FC<IHumanMaleFemaleIconProps> = memo(props => {
  return <HumanMaleFemaleSvg {...props} />;
});
