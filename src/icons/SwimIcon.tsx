import React, { FC, memo } from 'react';
import SwimSvg from '../svg/swim.svg';

export interface ISwimIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwimIcon: FC<ISwimIconProps> = memo(props => {
  return <SwimSvg {...props} />;
});
