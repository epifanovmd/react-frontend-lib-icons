import React, { FC, memo } from 'react';
import HumanFemaleDanceSvg from '../svg/human-female-dance.svg';

export interface IHumanFemaleDanceIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanFemaleDanceIcon: FC<IHumanFemaleDanceIconProps> = memo(props => {
  return <HumanFemaleDanceSvg {...props} />;
});
