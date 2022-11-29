import React, { FC, memo } from 'react';
import HumanDollySvg from '../svg/human-dolly.svg';

export interface IHumanDollyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HumanDollyIcon: FC<IHumanDollyIconProps> = memo(props => {
  return <HumanDollySvg {...props} />;
});
