import React, { FC, memo } from 'react';
import AlphaVSvg from '../svg/alpha-v.svg';

export interface IAlphaVIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaVIcon: FC<IAlphaVIconProps> = memo(props => {
  return <AlphaVSvg {...props} />;
});
