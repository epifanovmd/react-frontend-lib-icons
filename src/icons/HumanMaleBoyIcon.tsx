import React, { FC, memo } from 'react';
import HumanMaleBoySvg from '../svg/human-male-boy.svg';

export interface IHumanMaleBoyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanMaleBoyIcon: FC<IHumanMaleBoyIconProps> = memo(props => {
  return <HumanMaleBoySvg {...props} />;
});
