import React, { FC, memo } from 'react';
import AlphaUBoxSvg from '../svg/alpha-u-box.svg';

export interface IAlphaUBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaUBoxIcon: FC<IAlphaUBoxIconProps> = memo(props => {
  return <AlphaUBoxSvg {...props} />;
});
