import React, { FC, memo } from 'react';
import ShoreSvg from '../svg/shore.svg';

export interface IShoreIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShoreIcon: FC<IShoreIconProps> = memo(props => {
  return <ShoreSvg {...props} />;
});
