import React, { FC, memo } from 'react';
import HumanFemaleBoySvg from '../svg/human-female-boy.svg';

export interface IHumanFemaleBoyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanFemaleBoyIcon: FC<IHumanFemaleBoyIconProps> = memo(props => {
  return <HumanFemaleBoySvg {...props} />;
});
