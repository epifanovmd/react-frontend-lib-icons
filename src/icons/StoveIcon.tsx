import React, { FC, memo } from 'react';
import StoveSvg from '../svg/stove.svg';

export interface IStoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StoveIcon: FC<IStoveIconProps> = memo(props => {
  return <StoveSvg {...props} />;
});
