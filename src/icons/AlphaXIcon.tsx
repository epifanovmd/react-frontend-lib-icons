import React, { FC, memo } from 'react';
import AlphaXSvg from '../svg/alpha-x.svg';

export interface IAlphaXIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaXIcon: FC<IAlphaXIconProps> = memo(props => {
  return <AlphaXSvg {...props} />;
});
