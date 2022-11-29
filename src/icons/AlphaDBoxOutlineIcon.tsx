import React, { FC, memo } from 'react';
import AlphaDBoxOutlineSvg from '../svg/alpha-d-box-outline.svg';

export interface IAlphaDBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaDBoxOutlineIcon: FC<IAlphaDBoxOutlineIconProps> = memo(props => {
  return <AlphaDBoxOutlineSvg {...props} />;
});
