import React, { FC, memo } from 'react';
import AlphaABoxOutlineSvg from '../svg/alpha-a-box-outline.svg';

export interface IAlphaABoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaABoxOutlineIcon: FC<IAlphaABoxOutlineIconProps> = memo(props => {
  return <AlphaABoxOutlineSvg {...props} />;
});
