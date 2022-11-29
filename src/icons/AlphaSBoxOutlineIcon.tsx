import React, { FC, memo } from 'react';
import AlphaSBoxOutlineSvg from '../svg/alpha-s-box-outline.svg';

export interface IAlphaSBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaSBoxOutlineIcon: FC<IAlphaSBoxOutlineIconProps> = memo(props => {
  return <AlphaSBoxOutlineSvg {...props} />;
});
