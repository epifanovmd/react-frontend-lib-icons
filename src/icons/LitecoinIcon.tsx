import React, { FC, memo } from 'react';
import LitecoinSvg from '../svg/litecoin.svg';

export interface ILitecoinIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LitecoinIcon: FC<ILitecoinIconProps> = memo(props => {
  return <LitecoinSvg {...props} />;
});
