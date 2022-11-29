import React, { FC, memo } from 'react';
import AlphaEBoxSvg from '../svg/alpha-e-box.svg';

export interface IAlphaEBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaEBoxIcon: FC<IAlphaEBoxIconProps> = memo(props => {
  return <AlphaEBoxSvg {...props} />;
});
