import React, { FC, memo } from 'react';
import AlphaEBoxOutlineSvg from '../svg/alpha-e-box-outline.svg';

export interface IAlphaEBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaEBoxOutlineIcon: FC<IAlphaEBoxOutlineIconProps> = memo(props => {
  return <AlphaEBoxOutlineSvg {...props} />;
});
