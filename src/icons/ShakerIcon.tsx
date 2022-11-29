import React, { FC, memo } from 'react';
import ShakerSvg from '../svg/shaker.svg';

export interface IShakerIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShakerIcon: FC<IShakerIconProps> = memo(props => {
  return <ShakerSvg {...props} />;
});
