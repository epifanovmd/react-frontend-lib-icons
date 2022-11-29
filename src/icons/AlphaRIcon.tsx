import React, { FC, memo } from 'react';
import AlphaRSvg from '../svg/alpha-r.svg';

export interface IAlphaRIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaRIcon: FC<IAlphaRIconProps> = memo(props => {
  return <AlphaRSvg {...props} />;
});
