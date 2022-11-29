import React, { FC, memo } from 'react';
import WebMinusSvg from '../svg/web-minus.svg';

export interface IWebMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const WebMinusIcon: FC<IWebMinusIconProps> = memo(props => {
  return <WebMinusSvg {...props} />;
});
