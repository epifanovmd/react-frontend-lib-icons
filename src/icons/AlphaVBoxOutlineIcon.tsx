import React, { FC, memo } from 'react';
import AlphaVBoxOutlineSvg from '../svg/alpha-v-box-outline.svg';

export interface IAlphaVBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaVBoxOutlineIcon: FC<IAlphaVBoxOutlineIconProps> = memo(props => {
  return <AlphaVBoxOutlineSvg {...props} />;
});
