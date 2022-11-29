import React, { FC, memo } from 'react';
import AlphaIBoxSvg from '../svg/alpha-i-box.svg';

export interface IAlphaIBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaIBoxIcon: FC<IAlphaIBoxIconProps> = memo(props => {
  return <AlphaIBoxSvg {...props} />;
});
