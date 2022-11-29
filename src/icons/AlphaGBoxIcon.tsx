import React, { FC, memo } from 'react';
import AlphaGBoxSvg from '../svg/alpha-g-box.svg';

export interface IAlphaGBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaGBoxIcon: FC<IAlphaGBoxIconProps> = memo(props => {
  return <AlphaGBoxSvg {...props} />;
});
