import React, { FC, memo } from 'react';
import AlphaGBoxOutlineSvg from '../svg/alpha-g-box-outline.svg';

export interface IAlphaGBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaGBoxOutlineIcon: FC<IAlphaGBoxOutlineIconProps> = memo(props => {
  return <AlphaGBoxOutlineSvg {...props} />;
});
