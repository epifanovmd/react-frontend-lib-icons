import React, { FC, memo } from 'react';
import AlphaKBoxOutlineSvg from '../svg/alpha-k-box-outline.svg';

export interface IAlphaKBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaKBoxOutlineIcon: FC<IAlphaKBoxOutlineIconProps> = memo(props => {
  return <AlphaKBoxOutlineSvg {...props} />;
});
