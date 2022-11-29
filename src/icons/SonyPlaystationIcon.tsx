import React, { FC, memo } from 'react';
import SonyPlaystationSvg from '../svg/sony-playstation.svg';

export interface ISonyPlaystationIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SonyPlaystationIcon: FC<ISonyPlaystationIconProps> = memo(props => {
  return <SonyPlaystationSvg {...props} />;
});
