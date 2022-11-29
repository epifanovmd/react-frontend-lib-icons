import React, { FC, memo } from 'react';
import EggOutlineSvg from '../svg/egg-outline.svg';

export interface IEggOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const EggOutlineIcon: FC<IEggOutlineIconProps> = memo(props => {
  return <EggOutlineSvg {...props} />;
});
