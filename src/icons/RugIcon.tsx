import React, { FC, memo } from 'react';
import RugSvg from '../svg/rug.svg';

export interface IRugIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const RugIcon: FC<IRugIconProps> = memo(props => {
  return <RugSvg {...props} />;
});
