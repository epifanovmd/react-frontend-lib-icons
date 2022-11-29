import React, { FC, memo } from 'react';
import AlphaOBoxOutlineSvg from '../svg/alpha-o-box-outline.svg';

export interface IAlphaOBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaOBoxOutlineIcon: FC<IAlphaOBoxOutlineIconProps> = memo(props => {
  return <AlphaOBoxOutlineSvg {...props} />;
});
