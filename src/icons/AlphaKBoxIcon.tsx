import React, { FC, memo } from 'react';
import AlphaKBoxSvg from '../svg/alpha-k-box.svg';

export interface IAlphaKBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaKBoxIcon: FC<IAlphaKBoxIconProps> = memo(props => {
  return <AlphaKBoxSvg {...props} />;
});
