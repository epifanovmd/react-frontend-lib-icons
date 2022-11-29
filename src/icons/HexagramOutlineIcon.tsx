import React, { FC, memo } from 'react';
import HexagramOutlineSvg from '../svg/hexagram-outline.svg';

export interface IHexagramOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HexagramOutlineIcon: FC<IHexagramOutlineIconProps> = memo(props => {
  return <HexagramOutlineSvg {...props} />;
});
