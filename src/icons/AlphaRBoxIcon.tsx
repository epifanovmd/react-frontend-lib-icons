import React, { FC, memo } from 'react';
import AlphaRBoxSvg from '../svg/alpha-r-box.svg';

export interface IAlphaRBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const AlphaRBoxIcon: FC<IAlphaRBoxIconProps> = memo(props => {
  return <AlphaRBoxSvg {...props} />;
});
