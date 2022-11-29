import React, { FC, memo } from 'react';
import AlphaCBoxOutlineSvg from '../svg/alpha-c-box-outline.svg';

export interface IAlphaCBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaCBoxOutlineIcon: FC<IAlphaCBoxOutlineIconProps> = memo(props => {
  return <AlphaCBoxOutlineSvg {...props} />;
});
