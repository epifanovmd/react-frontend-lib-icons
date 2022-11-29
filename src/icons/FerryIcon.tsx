import React, { FC, memo } from 'react';
import FerrySvg from '../svg/ferry.svg';

export interface IFerryIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FerryIcon: FC<IFerryIconProps> = memo(props => {
  return <FerrySvg {...props} />;
});
