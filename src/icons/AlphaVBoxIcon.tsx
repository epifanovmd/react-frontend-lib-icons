import React, { FC, memo } from 'react';
import AlphaVBoxSvg from '../svg/alpha-v-box.svg';

export interface IAlphaVBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaVBoxIcon: FC<IAlphaVBoxIconProps> = memo(props => {
  return <AlphaVBoxSvg {...props} />;
});
