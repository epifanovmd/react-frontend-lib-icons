import React, { FC, memo } from 'react';
import HumanMaleMaleSvg from '../svg/human-male-male.svg';

export interface IHumanMaleMaleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleMaleIcon: FC<IHumanMaleMaleIconProps> = memo(props => {
  return <HumanMaleMaleSvg {...props} />;
});
