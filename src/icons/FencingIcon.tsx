import React, { FC, memo } from 'react';
import FencingSvg from '../svg/fencing.svg';

export interface IFencingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FencingIcon: FC<IFencingIconProps> = memo(props => {
  return <FencingSvg {...props} />;
});
