import React, { FC, memo } from 'react';
import AlphaABoxSvg from '../svg/alpha-a-box.svg';

export interface IAlphaABoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaABoxIcon: FC<IAlphaABoxIconProps> = memo(props => {
  return <AlphaABoxSvg {...props} />;
});
