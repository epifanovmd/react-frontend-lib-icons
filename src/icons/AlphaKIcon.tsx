import React, { FC, memo } from 'react';
import AlphaKSvg from '../svg/alpha-k.svg';

export interface IAlphaKIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaKIcon: FC<IAlphaKIconProps> = memo(props => {
  return <AlphaKSvg {...props} />;
});
