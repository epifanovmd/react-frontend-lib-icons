import React, { FC, memo } from 'react';
import BarleySvg from '../svg/barley.svg';

export interface IBarleyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BarleyIcon: FC<IBarleyIconProps> = memo(props => {
  return <BarleySvg {...props} />;
});
