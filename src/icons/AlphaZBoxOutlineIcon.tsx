import React, { FC, memo } from 'react';
import AlphaZBoxOutlineSvg from '../svg/alpha-z-box-outline.svg';

export interface IAlphaZBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaZBoxOutlineIcon: FC<IAlphaZBoxOutlineIconProps> = memo(props => {
  return <AlphaZBoxOutlineSvg {...props} />;
});
