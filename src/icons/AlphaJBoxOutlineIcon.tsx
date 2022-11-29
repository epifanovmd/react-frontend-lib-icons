import React, { FC, memo } from 'react';
import AlphaJBoxOutlineSvg from '../svg/alpha-j-box-outline.svg';

export interface IAlphaJBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaJBoxOutlineIcon: FC<IAlphaJBoxOutlineIconProps> = memo(props => {
  return <AlphaJBoxOutlineSvg {...props} />;
});
