import React, { FC, memo } from 'react';
import AlphaOBoxSvg from '../svg/alpha-o-box.svg';

export interface IAlphaOBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaOBoxIcon: FC<IAlphaOBoxIconProps> = memo(props => {
  return <AlphaOBoxSvg {...props} />;
});
