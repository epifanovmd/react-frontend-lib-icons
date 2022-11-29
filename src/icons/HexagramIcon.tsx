import React, { FC, memo } from 'react';
import HexagramSvg from '../svg/hexagram.svg';

export interface IHexagramIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagramIcon: FC<IHexagramIconProps> = memo(props => {
  return <HexagramSvg {...props} />;
});
