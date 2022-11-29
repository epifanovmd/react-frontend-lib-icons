import React, { FC, memo } from 'react';
import CannabisSvg from '../svg/cannabis.svg';

export interface ICannabisIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CannabisIcon: FC<ICannabisIconProps> = memo(props => {
  return <CannabisSvg {...props} />;
});
