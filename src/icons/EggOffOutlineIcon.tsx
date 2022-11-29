import React, { FC, memo } from 'react';
import EggOffOutlineSvg from '../svg/egg-off-outline.svg';

export interface IEggOffOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EggOffOutlineIcon: FC<IEggOffOutlineIconProps> = memo(props => {
  return <EggOffOutlineSvg {...props} />;
});
