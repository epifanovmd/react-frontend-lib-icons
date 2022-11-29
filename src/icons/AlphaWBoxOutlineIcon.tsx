import React, { FC, memo } from 'react';
import AlphaWBoxOutlineSvg from '../svg/alpha-w-box-outline.svg';

export interface IAlphaWBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaWBoxOutlineIcon: FC<IAlphaWBoxOutlineIconProps> = memo(props => {
  return <AlphaWBoxOutlineSvg {...props} />;
});
