import React, { FC, memo } from 'react';
import AlphaWSvg from '../svg/alpha-w.svg';

export interface IAlphaWIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaWIcon: FC<IAlphaWIconProps> = memo(props => {
  return <AlphaWSvg {...props} />;
});
