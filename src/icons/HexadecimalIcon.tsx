import React, { FC, memo } from 'react';
import HexadecimalSvg from '../svg/hexadecimal.svg';

export interface IHexadecimalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexadecimalIcon: FC<IHexadecimalIconProps> = memo(props => {
  return <HexadecimalSvg {...props} />;
});
